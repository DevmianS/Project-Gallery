// let getProject = [0,];
// let getIframeId = [0,];
const getIframe = document.querySelectorAll('iframe');
let checkIfClicked = 0;
const getOverlay = document.querySelectorAll('.overlay');
const getProjectClass = document.querySelectorAll('.project');
const addToolbar = document.createElement('div')
const root = document.documentElement;

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function indexInClass(collection, node) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] === node)
        return i;
    }
    return -1;
}

function hideToolbar(pElem,elIndex){
    pElem.style.removeProperty('width');
    pElem.style.removeProperty('height');
    pElem.style.removeProperty('z-index');
    pElem.style.removeProperty('position');
    getIframe[elIndex].setAttribute('scrolling', 'no');//todo fix!
    pElem.querySelector('.overlay').style.removeProperty('position');
    pElem.querySelector('.overlay').style.removeProperty('z-index');
    if (document.getElementById('toolbar'))
    document.getElementById('toolbar').remove();
}


function addElements(pElem,elIndex){
    pElem.appendChild(addToolbar);
    addToolbar.setAttribute('id', 'toolbar');
    let getToolbar = document.getElementById('toolbar');
    getToolbar.appendChild(document.createElement('img'));
    getToolbar.querySelector('img').setAttribute('id','xbutton');
    let toolbarXb = getToolbar.querySelector('#xbutton')
    toolbarXb.src = "media/icon-close.svg";
    toolbarXb.addEventListener('click',function(){hideToolbar(pElem,elIndex)});
}

let maximize = (pElem,elIndex) => {
    
    if(checkIfClicked == false){
        pElem.style.width = '90vw';
        pElem.style.height = '90vh';
        pElem.style.position = 'fixed';
        pElem.style.zIndex = '6';
        getIframe[elIndex].setAttribute('scrolling', 'yes');
         //document.querySelectorAll('.overlay')[pElem].style.zIndex='1';
        pElem.querySelector('.overlay').style.zIndex='1';
        document.querySelector('body').style.overflow = "hidden";
        root.style.setProperty('--scale', "100%");
        addElements(pElem,elIndex);
        checkIfClicked = true;

    }
    else{
        root.style.setProperty('--scale', "105%");
        document.querySelector('body').style.removeProperty('overflow');
        checkIfClicked = false;
    }
};


getProjectClass.forEach(el =>  el.addEventListener('click', function(){let elIndex = indexInClass(getProjectClass, el) ;maximize(el,elIndex)}));

