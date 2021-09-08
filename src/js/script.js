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

function addElements(val){
    document.getElementById('project-'+val).appendChild(addToolbar);
    addToolbar.classList.add('toolbar');
    console.log(addToolbar)
    
    //  let text = document.createTextNode('X');
    //  addToolbar.appendChild(text);
}

let maximize = (value) => {
    
    if(checkIfClicked == false){
        getProjectElem[value].style.width = '80vw';
        getProjectElem[value].style.height = '80vh';
        getProjectElem[value].style.position = 'fixed';
        getProjectElem[value].style.zIndex = '6';
        document.getElementById('iframe-'+value).setAttribute('scrolling', 'yes');
        // document.querySelectorAll('.overlay')[value-1].style.zIndex='1';
        getProjectElem[value].querySelector('.overlay').style.zIndex='1';

        addElements(value);
       
        // document.querySelector('.finished').addEventListener('click', function(){
        //    maximize();
        // })
        checkIfClicked = true;

    }
    else if(checkIfClicked == true){
        getProjectElem[value].style.removeProperty('width');
        getProjectElem[value].style.removeProperty('height');
        getProjectElem[value].style.removeProperty('z-index');
        getProjectElem[value].style.removeProperty('position');
        document.getElementById('iframe-'+value).setAttribute('scrolling', 'no');
        getProjectElem[value].querySelector('.overlay').style.removeProperty('position');
        getProjectElem[value].querySelector('.overlay').style.removeProperty('z-index');
       
        


        
        // document.querySelector('body').removeEventListener('click', function(){

        // });
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