export let prepareProductCard = (object) => {
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
 