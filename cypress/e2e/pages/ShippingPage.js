import BaseWeb from "../BaseWeb";

class Email extends BaseWeb{
    constructor(){
        super()
        this.loc = `//input[@placeholder="Email or mobile phone number"]`
    }
}

class Address extends BaseWeb{
    constructor(){
        super()
        this.loc = `//div[@class="address-fields"]/div`
    }
    
    getElementByPos = (pos) => new Fields(this.loc, pos)
}

class Fields extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}[${pos}]`
    }
}

class SubmitButton extends BaseWeb{
    constructor(){
        super()
        this.loc = `//button[@type="submit"]`
    }
}

class Payment extends BaseWeb{
    constructor(){
        super()
        this.loc = `//fieldset[@class="content-box"]`
    }

    getElementByPos = (pos) => new PaymentType(this.loc, pos)
}

class PaymentType extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}/div[${pos}]`
    }
}

export default class ShippingPage{
    email = new Email()
    address = new Address()
    submit = new SubmitButton()
    payment = new Payment()

}