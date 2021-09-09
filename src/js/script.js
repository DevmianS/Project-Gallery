let getProjectElem = [0,];
let getIframeId = [0,];
let getIframe = document.querySelector('iframe');
let checkIfClicked = 0;
let getOverlay = document.querySelectorAll('.overlay');
let addToolbar = document.createElement('div')


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
function hideToolbar(val){
    getProjectElem[val].style.removeProperty('width');
    getProjectElem[val].style.removeProperty('height');
    getProjectElem[val].style.removeProperty('z-index');
    getProjectElem[val].style.removeProperty('position');
    document.getElementById('iframe-'+val).setAttribute('scrolling', 'no');
    getProjectElem[val].querySelector('.overlay').style.removeProperty('position');
    getProjectElem[val].querySelector('.overlay').style.removeProperty('z-index');
}


function addElements(val){
    document.getElementById('project-'+val).appendChild(addToolbar);
    addToolbar.setAttribute('id', 'toolbar');
    let getToolbar = document.getElementById('toolbar');
    getToolbar.appendChild(document.createElement('img'));
    getToolbar.querySelector('img').setAttribute('id','xbutton');
    getToolbar.querySelector('img').src = "media/icon-close.svg";
    getToolbar.querySelector('#xbutton').addEventListener('click',function(){hideToolbar(val)})


    // let text = document.createTextNode('X');
    // document.getElementById('xbutton').appendChild(text);
    
    //  let text = document.createTextNode('X');
    //  addToolbar.appendChild(text);
}

let maximize = (val) => {
    
    if(checkIfClicked == false){
        getProjectElem[val].style.width = '90vw';
        getProjectElem[val].style.height = '90vh';
        getProjectElem[val].style.position = 'fixed';
        getProjectElem[val].style.zIndex = '6';
        document.getElementById('iframe-'+val).setAttribute('scrolling', 'yes');
        // document.querySelectorAll('.overlay')[value-1].style.zIndex='1';
        getProjectElem[val].querySelector('.overlay').style.zIndex='1';

        addElements(val);
        
        // document.querySelector('.finished').addEventListener('click', function(){
        //    maximize();
        // })
        checkIfClicked = true;

    }
    else{
        document.getElementById('toolbar').remove();
        checkIfClicked = false;
    }
    //setAttributes(getProjectElem[1], )
};

for(let i = 1; i<=5; i++){
    getProjectElem[i] = document.getElementById('project-'+i);
    getIframeId[i] = document.getElementById('iframe-'+i);
}

for(let i = 1; i<=4; i++){
    // console.log(getProjectElem[i])
    getProjectElem[i].addEventListener('click', function(){maximize(i)});
}

// console.log(document.querySelectorAll('.overlay')[0]);