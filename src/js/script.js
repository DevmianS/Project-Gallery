let getProjectElem = [0,];
let getIframeId = [0,];
let getIframe = document.querySelector('iframe');
let checkIfClicked = false;





function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
let maximize = (value) => {
    
    if(checkIfClicked == false){
        getProjectElem[value].style.width = '80vw';
        getProjectElem[value].style.height = '80vh';
        getProjectElem[value].style.position = 'fixed';
        getProjectElem[value].style.zIndex = '6';
        document.getElementById('iframe-'+value).setAttribute('scrolling', 'yes');
        document.querySelector('.overlay').style.zIndex='1';
        console.log(document.querySelector('.overlay'))
       
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
        document.querySelector('.overlay').style.removeProperty('position');
        document.querySelector('.overlay').style.removeProperty('z-index');
       
        


        
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
