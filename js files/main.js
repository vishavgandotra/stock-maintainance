fetch("/json/data.json")
    .then( (response) => response.json())
    .catch(() => alert("Please check your connection"))
    .then( jsonArr => {
        let products = new Set();
        jsonArr?.products.forEach(object => products.add(prepareProductObject(object)));
        return products;
    })
    .then( products => {
        products.forEach(product =>  prepareProductCard(product));

    })
    .catch( () => alert("Unable to get prducts, please try again"));   
    

class Product{
    #price = 0;
    constructor(name, image, price){
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

let prepareProductObject = (jsonObj) => {
    let name, img, price;
    
    name = jsonObj?.name ?? "No Name";
    img = jsonObj?.imgUrl ?? "No Image";
    price = jsonObj?.price ?? 0;
    return new Product(name, img, price);

};

let prepareProductCard = (object) => {
   let mainDiv = document.getElementById("savedProducts");
   if(mainDiv){
       let div = createElement("div");
       div.className = "col-3 custom-card";
       div.appendChild(prepareNameImgDiv(object));
        div.appendChild(preparePriceDiv(object));
        mainDiv.appendChild(div);
   }
}; 

let createElement = (element) => document.createElement(element);

function prepareNameImgDiv(object){
    let outerDiv = createElement("div");
    let nameDIv = createElement("div");

    let img = createElement("IMG");
    img.setAttribute("src", object.img);

    nameDIv.innerHTML = object.upperCaseAndBold();
    outerDiv.appendChild(nameDIv);
    outerDiv.appendChild(img);
    return outerDiv;
}

function preparePriceDiv(object){
    let priceDiv = createElement("div");
    priceDiv.innerHTML = object.price;

    return priceDiv;
}