//What happens when button is pressed
let product = "";
let loadInProgress = ""
function selectProduct() {
    $('button').click(function(e){
        let btn = $(e.currentTarget); 
        let otherBtn = $('button').not(btn);
        btn.not('.clear').not('.clearall').toggleClass('on');
        otherBtn.removeClass('on');
        product = btn.text();
        console.log(product);
        console.log(PRODUCTS[product])
    })
}

function placeProduct() {
    $('.palletspace').on('mousedown', function(e){
        let pltspc = $(e.currentTarget);
        product !=='Clear'? pltspc.text(PRODUCTS[product]) : pltspc.text();
        loadInProgress = pltspc.parent().attr('class');
        console.log(loadInProgress+'>td');
    })

}

function clearFloor() {
    $('.clear').click(function(){
        $('.'+loadInProgress+'>td').text('');
    });
}

function clearAll() {
    $('.clearall').click(function(){
        $('.palletspace').text('');
    })
}

$(selectProduct);
$(placeProduct);
$(clearFloor);
$(clearAll); 

//What happens when product is dropped

//What happens when user taps on pallet space
