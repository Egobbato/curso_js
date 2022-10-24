class CalcController {
  constructor() {
    this._locale = "pt-BR";
    this._displayEl = document.querySelector("#display");
    this._horaEl = document.querySelector("#hora");
    this._dataEl = document.querySelector("#data");
    this._currentDate;
    this.initialize();
  }

  initialize() {
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
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
