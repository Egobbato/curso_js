class CalcController {
  constructor() {
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
  }

  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((e) => {
      element.addEventListener(e, fn, false);
    });
  }

  clearAll() {
    this._operation = [];
  }

  clearEntry() {
    this._operation.pop();
  }

  addOperation(valor) {
    this._operation.push(value);
  }

  setError() {
    this.displayCalc = "Error";
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
        break;
      case "subtracao":
        break;
      case "multiplicacao":
        break;
      case "divisao":
        break;
      case "porcento":
        break;
      case "igual":
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
        this.addOperation(parseInt(value));
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
