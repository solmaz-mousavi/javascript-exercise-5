// select page elements and variables-------------------------------------------------------
const productsContainer = document.querySelector('.products-container')
const titleElem = document.querySelector('.title-text h1')
const pathElem = document.querySelector('.title-text p')
const groupIndex = new URLSearchParams(window.location.search).get('group')


// functions--------------------------------------------------------------------------------
// page title handler
function titleHandler(productGroup){
    const groupTitle = productGroup.group_title;
    titleElem.innerHTML = groupTitle;
    pathElem.innerHTML = 'خانه &#8592; منو &#8592; ' + groupTitle;
}

// creating product list tumbnails
function productTmbHandler(productGroup){

    const productList = productGroup.group_products;

    for (let i = 0; i < productList.length; i++) {

        const productTmbElem = document.createElement('div');
        productTmbElem.className = 'product-tumbnail';
    
        const productTmbTopElem = document.createElement('div');
        productTmbTopElem.className = 'product-tumbnail-top';
    
        const productCapElem = document.createElement('div');
        productCapElem.className = 'product-caption';
        
        const productTitleElem = document.createElement('a');
        productTitleElem.innerText = productList[i].product_name;
        productTitleElem.setAttribute('href','../pages/product_details.html?group=' + groupIndex + '&product=' + i);
        
        const productPriceElem = document.createElement('p');
        productPriceElem.innerText = productList[i].product_price[0] /1000 + ',000 ' + ' تومان';
        
        const productImgElem = document.createElement('img');
        productImgElem.setAttribute('src',productList[i].product_image[0]);
        productImgElem.className = 'product-img';
    
        const productDetailsElem = document.createElement('p');
        productDetailsElem.innerText = [...productList[i].product_content];
    
    
        productCapElem.appendChild(productTitleElem);
        productCapElem.appendChild(productPriceElem);
    
        productTmbTopElem.appendChild(productCapElem);
        productTmbTopElem.appendChild(productImgElem);
    
        productTmbElem.appendChild(productTmbTopElem);
        productTmbElem.appendChild(productDetailsElem);
    
        productsContainer.appendChild(productTmbElem);
    }
}

// insert json file data--------------------------------------------------------------------
let requestURL = 'https://raw.githubusercontent.com/solmaz-mousavi/data-json-files/master/foodDelivery-productsData.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL , true);
request.responseType = 'json';
request.send();

request.onload = function(){

    const productGroup = request.response.product_group[groupIndex];
    titleHandler(productGroup)
    productTmbHandler(productGroup)
}


