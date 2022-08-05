function offStep(className) {
    
    var divTexts = document.getElementsByClassName('textStep');
    
    for(var i = 0; i < divTexts.length; i++) {
         var idt = divTexts[i].id;
         console.log(idt)
         if(idt == className) {
             divTexts[i].classList.replace('off','on')
         }
         else {
             divTexts[i].classList.replace('on','off')
         }
         
    }
}

