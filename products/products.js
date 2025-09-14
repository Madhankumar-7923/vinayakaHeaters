/*SEARCH FUNCTION*/
var productcontainer = document.querySelector(".content");
var search = document.getElementById("search");
var nullSearchText = document.getElementById("search_Dummy")
var productlist = productcontainer.querySelectorAll(".content_box");

search.addEventListener("keyup", function () {

    var enteredvalue = event.target.value.toUpperCase();
    var found = false;

    for (i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector(".content_box_title").textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none";
        }

        else {
            productlist[i].style.display = "flex";
            productcontainer.style.justifyContent = "space-evenly";
            found = true;
        }
    }

    if (found) {
        productcontainer.style.justifyContent = "space-evenly";
        nullSearchText.style.display = "none"; // hide "no result"
    } 
    
    else {
        nullSearchText.style.display = "flex"; // show "no result"
    }

});