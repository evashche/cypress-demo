import BaseWeb from "../BaseWeb.js";

class Products extends BaseWeb{
    constructor(){
        super()
        this.loc =`//div[@class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"]/a`
    }

    listAllProducts(){
        return this.countElements().then(num =>{
            const arr = [];
            for (let i = 1; i < num + 1; i++) {
                this.getElementByPos(i).getText().then(text=>{
                    arr.push(text)
                    return arr
                })
            }
        })
    }

    findProduct(searchText){
        return this.listAllProducts().then(arr=>{
            return arr.indexOf(searchText)+1
        })
    }
    
    getElementByPos = (pos) => new Product(this.loc, pos)
}

class Product extends BaseWeb{
    constructor(loc, pos){
        super()
        this.loc =`${loc}[${pos}]//h3[@class="ProductCard_name__YciuQ"]`
    }
}

export default class CatalogPage{
    products = new Products();
  
  }