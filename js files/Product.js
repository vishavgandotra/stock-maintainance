
export class Product{
    #price;
    constructor(name, image='https://www.pngkey.com/png/full/14-144633_new-new-product-logo-png.png', price=0){
        this._name = name;
        this._img = image;
        this.#price = price;
    }
    get name(){
        return this._name;
    }
    get img(){
        return this._img;
    }
    get price(){
        return this.#price;
    }
}

let caseMixin = {
    upperCaseAndBold(){
        return this.name.toUpperCase().bold();
    }
}

Object.assign(Product.prototype, caseMixin);