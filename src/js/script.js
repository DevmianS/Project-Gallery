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

function remProps(el){
    for (let i = 0; i < remProps.arguments.length; i++) {
        el.style.removeProperty(remProps.arguments[i]);  
    }
}
function setStyles(el){//usage example: setStyles(el, 'width', '100px', 'height', '50px');
    for (let i = 1; i < setStyles.arguments.length; i+=2) {
        el.style[setStyles.arguments[i]] = setStyles.arguments[i+1];
    }
}

function hideToolbar(pElem,elIndex){
    getIframe[elIndex].setAttribute('scrolling', 'no');
    remProps(pElem, 'width', 'height', 'z-index', 'position');
    remProps(pElem.querySelector('.overlay'), 'z-index', 'position');

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
        setStyles(pElem, 'z-index', '6', 'position', 'fixed');
        setTimeout(() => {//todo WIP
            setStyles(pElem, 'width', '90vw', 'height', '90vw'); 
            getIframe[elIndex].setAttribute('scrolling', 'yes');
            pElem.querySelector('.overlay').style.zIndex='1';
            document.querySelector('body').style.overflow = "hidden";
            root.style.setProperty('--scale', "100%");
            addElements(pElem,elIndex);
            checkIfClicked = true;
        }, 300);
        

 //document.querySelectorAll('.overlay')[pElem].style.zIndex='1';
    }
    else{
        root.style.setProperty('--scale', "105%");
        document.querySelector('body').style.removeProperty('overflow');
        checkIfClicked = false;
    }
};


getProjectClass.forEach(el =>  el.addEventListener('click', function(){let elIndex = indexInClass(getProjectClass, el) ;maximize(el,elIndex)}));

