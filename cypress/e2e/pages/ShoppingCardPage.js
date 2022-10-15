import BaseWeb from "../BaseWeb.js";

class OrderDetails extends BaseWeb{
    constructor(){
        super()
        this.loc = `//div[@class="SidebarLayout_container__hqrjW"]/div[2]`
    }
    getTotal = (pos) => new Total(this.loc)
    getCheckout = (pos) => new Checkout(this.loc)
}

class Total extends BaseWeb{
    constructor(loc){
        super()
        this.loc = `${loc}/div[1]/span[2]`
    }
}

class Checkout extends BaseWeb{
    constructor(loc){
        super()
        this.loc = `${loc}/div[2]/a`
    }
}

class QtyButtons extends BaseWeb{
    constructor(){
        super()
        this.loc = `//button[@class="Quantity_actions__C9fVt"]`
    }

    getElementByPos = (pos) => new QtyAction(this.loc, pos)
}

class QtyAction extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}[${pos}]`
    }
}

class CardItems extends BaseWeb{
    constructor(){
        super()
        this.loc = `//li[@class="CartItem_root__n8ra_"]`
    }
    
    getItemByPos = (pos) => new CardItem(this.loc, pos)
}

class CardItem extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}[${pos}]`
    }
    
    getElementsByPos = (pos) => new ItemElements(this.loc, pos)
    getParamsByPos = (pos) => new ItemParams(this.loc, pos)
}   

class ItemElements extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}/div/div[${pos}]`
    }
}

class ItemParams extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc = `${loc}//div[@class="flex items-center pb-1"]/div[${pos}]/span`
    }
}

class SideBar extends BaseWeb{
    constructor(){
        super()
        this.loc = `//div[@class="Sidebar_backdrop__uAThX"]`
    }
}
export default class ShoppingCardPage{
    items = new CardItems()
    order = new OrderDetails()
    qtyButtons = new QtyButtons()
    sideBar = new SideBar()

}

