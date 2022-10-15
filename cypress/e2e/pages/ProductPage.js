import BaseWeb from "../BaseWeb.js";

class addButton extends BaseWeb{
    constructor(){
        super()
        this.loc = `//button[@aria-label="Add to Cart"]`
    }
}

class Size extends BaseWeb{
    constructor(){
        super()
        this.loc = `//div[@class='pb-4'][2]`
    }

    getElementByPos = (pos) => new ListBoxButton(this.loc, pos)
}

class ListBoxButton extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}//button[${pos}]`
    }
}

export default class ProductPage{
    addButton = new addButton();
    size = new Size();
  
  }