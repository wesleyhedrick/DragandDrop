//Drag



//Drop
//Make inner html of the drop location equal to the html of the dragged element. 
   //copy the html of the dragged element

let productName = '';

function copyHTML(){
    
    $('.product').mousedown(function(e){
        productName = $(e.currentTarget).text();
        console.log(productName)
    })
}

function pasteHTML(){
    
    $('.palletspace').on('drop', function(e){
        let droppedText = $(e.currentTarget)
        console.log(`you dropped something`)
        droppedText.text(productName);
    }); 
}

$(function(){
    copyHTML();
    pasteHTML();
})

