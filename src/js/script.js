let getProject = [0,];
let getIframeId = [0,];
const getIframe = document.querySelector('iframe');
let checkIfClicked = 0;
const getOverlay = document.querySelectorAll('.overlay');
const addToolbar = document.createElement('div')
const root = document.documentElement;

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
function hideToolbar(val){
    getProject[val].style.removeProperty('width');
    getProject[val].style.removeProperty('height');
    getProject[val].style.removeProperty('z-index');
    getProject[val].style.removeProperty('position');
    document.getElementById('iframe-'+val).setAttribute('scrolling', 'no');
    getProject[val].querySelector('.overlay').style.removeProperty('position');
    getProject[val].querySelector('.overlay').style.removeProperty('z-index');
    if (document.getElementById('toolbar'))
    document.getElementById('toolbar').remove();
}


function addElements(val){
    document.getElementById('project-'+val).appendChild(addToolbar);
    addToolbar.setAttribute('id', 'toolbar');
    let getToolbar = document.getElementById('toolbar');
    getToolbar.appendChild(document.createElement('img'));
    getToolbar.querySelector('img').setAttribute('id','xbutton');
    let toolbarXb = getToolbar.querySelector('#xbutton')
    toolbarXb.src = "media/icon-close.svg";
    toolbarXb.addEventListener('click',function(){hideToolbar(val)})


    // let text = document.createTextNode('X');
    // document.getElementById('xbutton').appendChild(text);
    
    //  let text = document.createTextNode('X');
    //  addToolbar.appendChild(text);
}

let maximize = (val) => {
    
    if(checkIfClicked == false){
        getProject[val].style.width = '90vw';
        getProject[val].style.height = '90vh';
        getProject[val].style.position = 'fixed';
        getProject[val].style.zIndex = '6';
        document.getElementById('iframe-'+val).setAttribute('scrolling', 'yes');
        // document.querySelectorAll('.overlay')[value-1].style.zIndex='1';
        getProject[val].querySelector('.overlay').style.zIndex='1';
        document.querySelector('body').style.overflow = "hidden";

        root.style.setProperty('--scale', "100%");
        addElements(val);
        
        // document.querySelector('.finished').addEventListener('click', function(){
        //    maximize();
        // })
        
        checkIfClicked = true;

    }
    else{
        root.style.setProperty('--scale', "105%");
        document.querySelector('body').style.removeProperty('overflow');
        checkIfClicked = false;
    }
    //setAttributes(getProject[1], )
};

for(let i = 1; i<=5; i++){
    getProject[i] = document.getElementById('project-'+i);
    getIframeId[i] = document.getElementById('iframe-'+i);
}

for(let i = 1; i<=4; i++){
    // console.log(getProject[i])
    getProject[i].addEventListener('click', function(){maximize(i)});
}

// console.log(document.querySelectorAll('.overlay')[0]);
