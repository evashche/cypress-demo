import BaseWeb from "../BaseWeb.js";


class NavBar extends BaseWeb{
    constructor() {
        super();
        this.loc = "//a[@class='Navbar_link__Z6GsF']"
      } 
      getElementByPos = (pos) => new BarElement(this.loc, pos)    
}

class BarElement extends BaseWeb{
  constructor(loc, pos) {
    super();
    this.loc = `${loc}[${pos}]`
  }
}

export default class MainPage{
  navBar = new NavBar();

}