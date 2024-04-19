// select page elements and variables------------------------------------------------------
const menuContainer = document.querySelector('.menu-container');

// functions-------------------------------------------------------------------------------
// menu tumbnail hover style handlers
function mouseEnterHandler(event){
    let captionElem = event.target.children[1];
    let titleElem = captionElem.children[0];
    captionElem.classList.add('menu-caption-hover');
    titleElem.classList.add('menu-title-hover');
}

function mouseLeaveHandler(event){
    let captionElem = event.target.children[1];
    let titleElem = captionElem.children[0];
    captionElem.classList.remove('menu-caption-hover');
    titleElem.classList.remove('menu-title-hover');
}

// creating menu tumbnails
function menuTmbHandler(productGroup){

    for (let i = 0; i < productGroup.length; i++) {
  
        const menuTmbElem = document.createElement('div');
        menuTmbElem.className = 'menu-tumbnail';
    
        const menuImgElem = document.createElement('img');
        menuImgElem.setAttribute('src', productGroup[i].group_image);
        menuImgElem.className = 'menu-img';
    
        const menuCapElem = document.createElement('div');
        menuCapElem.className = 'menu-caption';
    
        const menuLinkElem = document.createElement('a');
        menuLinkElem.setAttribute('href','./pages/menu.html?group=' + i);
        menuLinkElem.innerText = productGroup[i].group_title;
        menuLinkElem.className = 'menu-title';
        
        menuCapElem.appendChild(menuLinkElem);
        menuTmbElem.appendChild(menuImgElem);
        menuTmbElem.appendChild(menuCapElem);
        menuContainer.appendChild(menuTmbElem);
    
        // menu tumbnail hover style handler
        menuTmbElem.addEventListener('mouseenter', mouseEnterHandler);
        menuTmbElem.addEventListener('mouseleave', mouseLeaveHandler);
    }
}

// insert json file data-------------------------------------------------------------------
let requestURL = 'https://raw.githubusercontent.com/solmaz-mousavi/data-json-files/master/foodDelivery-productsData.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL , true);
request.responseType = 'json';
request.send();

request.onload = function(){
    var datajs = request.response.product_group;
    console.log(request.response)
    menuTmbHandler(datajs);
}
