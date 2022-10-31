class CalcController {
  constructor() {
    this._getLastOperator = "";
    this._lastNumber = "";

    this._operation = [];
    this._locale = "pt-BR";
    this._displayEl = document.querySelector("#display");
    this._horaEl = document.querySelector("#hora");
    this._dataEl = document.querySelector("#data");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);

    this.setLastNumberToDisplay();
  }

  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((e) => {
      element.addEventListener(e, fn, false);
    });
  }

  clearAll() {
    this._operation = [];
    this._lastNumber = "";
    this._lastOperator = "";
    this.setLastNumberToDisplay();
  }

  clearEntry() {
    this._operation.pop();
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }

  setLastOperation(valor) {
    this._operation[this._operation.length - 1] = valor;
  }

  isOperator(valor) {
    return ["+", "-", "*", "%", "/"].indexOf(valor) > -1;
  }

  pushOperation(valor) {
    this._operation.push(valor);

    if (this._operation.length > 3) {
      this.calc();
    }
  }

  getResult() {
    return eval(this._operation.join(""));
  }
  calc() {
    let last = "";

    this._lastOperator = this.getLasItem();

    if (this._operation.length < 3) {
      let firstItem = this._operation[0];
      this._operation = [firstItem, this._lastOperator, this._lastNumber];
    }

    if (this._operation.length > 3) {
      last = this._operation.pop();

      this._lastNumber = this.getResult();
    } else if (this._operation.length == 3) {
      this._lastNumber = this.getLasItem(false);
    }

    let result = this.getResult();

    if (last == "%") {
      result = result / 100;

      this._operation = [result];
    } else {
      this._operation = [result];

      if (last) this._operation.push(last);
    }

    this.setLastNumberToDisplay();
  }

  getLasItem(isOperator = true) {
    let lastItem;

    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (this.isOperator(this._operation[i]) == isOperator) {
        lastItem = this._operation[i];
        break;
      }
    }

    if (!lastItem) {
      lastItem = isOperator ? this._lastOperator : this._lastNumber;
    }

    return lastItem;
  }

  setLastNumberToDisplay() {
    let lastNumber = this.getLasItem(false);

    if (!lastNumber) {
      lastNumber = 0;
    }

    this.displayCalc = lastNumber;
  }

  addOperation(valor) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(valor)) {
        this.setLastOperation(valor);
      } else {
        this.pushOperation(valor);
        this.setLastNumberToDisplay();
      }
    } else {
      if (this.isOperator(valor)) {
        this.pushOperation(valor);
      } else {
        const newValue = this.getLastOperation().toString() + valor.toString();
        this.setLastOperation(newValue);

        this.setLastNumberToDisplay();
      }
    }
    console.log(this._operation);
  }

  setError() {
    this.displayCalc = "Error";
  }

  addDot() {
    let lastOperation = this.getLastOperation();

    if (
      typeof lastOperation === "string" &&
      lastOperation.split("").indexOf(".") > -1
    )
      return;

    if (this.isOperator(lastOperation) || !lastOperation) {
      this.pushOperation("0.");
    } else {
      this.setLastOperation(lastOperation.toString() + ".");
    }

    this.setLastNumberToDisplay();
  }

  execBtn(valor) {
    switch (valor) {
      case "ac":
        this.clearAll();
        break;
      case "ce":
        this.clearEntry();
        break;
      case "soma":
        this.addOperation("+");
        break;
      case "subtracao":
        this.addOperation("-");
        break;
      case "multiplicacao":
        this.addOperation("*");
        break;
      case "divisao":
        this.addOperation("/");
        break;
      case "porcento":
        this.addOperation("%");
        break;
      case "igual":
        this.calc();
        break;
      case "ponto":
        this.addDot();
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(parseInt(valor));
        break;

      default:
        this.setError();
        break;
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        const texBtn = btn.className.baseVal.replace("btn-", "");
        console.log(texBtn);

        this.execBtn(texBtn);
      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._horaEl.innerHTML;
  }

  set displayTime(valor) {
    this._horaEl.innerHTML = valor;
  }

  get displayDate() {
    return this._dataEl.innerHTML;
  }

  set displayDate(valor) {
    this._dataEl.innerHTML = valor;
  }

  get displayCalc() {
    return this._displayEl.innerHTML;
  }

  set displayCalc(valor) {
    this._displayEl.innerHTML = valor;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    this._dataAtual = valor;
  }
}
