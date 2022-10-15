
export default class BaseWeb {
  loc = this.loc;

  click(pos = `center`) {
    cy.log(`**click ${pos} ${this.constructor.name}**`);
    cy.xpath(this.loc).click(pos, { force: true });
  }

  clickExtra(num) {
    for (let i = 0; i < num; i++) {
      this.click();
    }
  }

  isText(text) {
    cy.log(`**verify text ${this.constructor.name} equals ${text}**`);
    cy.xpath(this.loc).should("have.text", text);
  }

  verifyElementsLength(num) {
    cy.log(
      `**verify number of elements in ${this.constructor.name} equals ${num}**`
    );
    cy.xpath(this.loc).should("have.length", num);
  }

  typeRandom() {
    cy.log(`**${this.constructor.name} type ${this.makeId(5)}**`);
    cy.xpath(this.loc).type(this.makeId(5));
  }

  typeEmail() {
    cy.log(`**${this.constructor.name} type ${this.makeId(5)}@gmail.com**`);
    cy.xpath(this.loc).type(`${this.makeId(5)}@gmail.com`);
  }

  type(text) {
    cy.log(`**${this.constructor.name} type ${text}**`);
    cy.xpath(this.loc).type(text);
  }

  countElements() {
    return cy.xpath(this.loc).its("length");
  }

  getText() {
    return cy.xpath(this.loc).invoke("text");
  }

  makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
