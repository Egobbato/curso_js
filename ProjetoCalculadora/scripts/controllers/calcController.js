class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }

  initialize() {
    const displayEl = document.querySelector("#display");
    const horaEl = document.querySelector("#hora");
    const dataEl = document.querySelector("#data");

    displayEl.innerHTML = "";
    horaEl.innerHTML = "";
    dataEl.innerHTML = "";
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(valor) {
    this._dataAtual = valor;
  }
}
