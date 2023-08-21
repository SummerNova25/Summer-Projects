let checkbox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly')
let Annualy = document.querySelectorAll('.price-annually');

checkbox.addEventListener('change', function(){

    if(checkbox.checked){
        Annualy.forEach(price => price.style.display = "none");
        Monthly.forEach(price => price.style.display = "flex");
    
    } else {

        Annualy.forEach(price => price.style.display = "flex");
        Monthly.forEach(price => price.style.display = "none");   
    }
})