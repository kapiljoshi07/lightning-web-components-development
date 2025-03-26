import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

  num1;
  num2;
  result;

  handleChange(event){
    this[event.target.name] = Number(event.target.value);
  }

  handleAdd(){
    this.result = this.num1 + this.num2;
  }

  handleSub(){
    this.result = this.num1 - this.num2;
  }

  handleMulti(){
    this.result = this.num1 * this.num2;
  }

  handleDiv(){
    this.result = this.num1 / this.num2;
  }
}