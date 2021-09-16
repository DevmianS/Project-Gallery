const getIframe = document.querySelectorAll('iframe');
let checkIfClicked = 0;
const getOverlay = document.querySelectorAll('.overlay');
const getProjectClass = document.querySelectorAll('.project');
const addToolbar = document.createElement('div')
const root = document.documentElement;
const switchBtn = document.querySelector('.mobileordesktop');
let switchViewState = 0;
// let getTransitionTime = 
let tTimeParsed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transitiontime'),10)*1000;
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

// function evtListeners(val){
//     if (val=='add'){
//         getProjectClass.forEach(el =>  el.addEventListener('click', function(){let elIndex = indexInClass(getProjectClass, el) ;maximize(el,elIndex)}));
//     }
//     if (val=='remove') {
        
//         getProjectClass.forEach(el =>  el.removeEventListener('click', function(){let elIndex = indexInClass(getProjectClass, el) ;maximize(el,elIndex)}));
//     }
// }

function hideToolbar(pElem,elIndex){
    getIframe[elIndex].setAttribute('scrolling', 'no');
    remProps(pElem, 'width', 'height', 'border-radius');
    remProps(pElem.querySelector('.overlay'), 'z-index', 'position');
    setTimeout(() => {
        remProps(pElem, 'z-index', 'position');
    }, tTimeParsed);
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

function switchView(){
    if (switchViewState==0){
        getIframe.forEach(el => {
            setStyles(el, 'border-radius', '0', 'width', '100%', 'height', '100%', 'transform', 'scale(100%)'); 
        });
        switchViewState=1;
    }
    else{
        getIframe.forEach(el => {
            remProps(el, 'border-radius', 'width', 'height', 'transform',);
        });
        switchViewState=0;
    }

    // setStyles(getIframe[elIndex], 'border-radius', '0', 'width', '100%', 'height', '100%', 'transform', 'scale(100%)'); 
}

let maximize = (pElem,elIndex) => {
    
    if(checkIfClicked == false){
        setStyles(pElem, 'z-index', '999', 'position', 'fixed');
        
        // setTimeout(() => {//todo WIP
            setStyles(pElem, 'width', '90vw', 'height', '90vh','border-radius', '0'); 
            setStyles(getIframe[elIndex], 'border-radius', '0', 'width', '100%', 'height', '100vh', 'transform', 'scale(1)'); 
            getIframe[elIndex].setAttribute('scrolling', 'yes');
            pElem.querySelector('.overlay').style.zIndex='1';
            document.querySelector('body').style.overflow = "hidden";
            root.style.setProperty('--scale', "100%");
            document.getElementById('main-overlay').classList.toggle('main-overlay');
            addElements(pElem,elIndex);
            checkIfClicked = true;
            // evtListeners('remove');
            
           // document.getElementById('toolbar').addEventListener('click', function(){console.log('test')})
        // }, tTimeParsed);
        

 //document.querySelectorAll('.overlay')[pElem].style.zIndex='1';
    }
    else{
        root.style.setProperty('--scale', "105%");
        document.querySelector('body').style.removeProperty('overflow');
        document.getElementById('main-overlay').classList.toggle('main-overlay');
        setTimeout(() => {
            remProps(getIframe[elIndex], 'border-radius', 'width', 'height', 'transform'); //todo fix when switched to mobile
            
        }, tTimeParsed);
        checkIfClicked = false;
    }
};

getProjectClass.forEach(el =>  el.addEventListener('click', function(){let elIndex = indexInClass(getProjectClass, el) ;maximize(el,elIndex)}));
switchBtn.addEventListener('click', switchView);

