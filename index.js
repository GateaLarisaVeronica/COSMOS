// Cart
    document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
    } );
    function addToCart(){
        const purchaseCountElement=document.getElementById("purchase-count");
        let purchaseCount=parseInt( purchaseCountElement.innerText, 10);
        purchaseCount++;
        purchaseCountElement.innerText = purchaseCount;
    }
// Toggle Menu 
    const navLinks = document.getElementById("navLinks");
  
    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-400px";
    }