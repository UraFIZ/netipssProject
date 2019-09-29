var cont1 = document.querySelector(".cont-1");
var cont2 = document.querySelector(".cont-2");
var bla = document.querySelectorAll("[type='radio']");
bla.forEach(function(item){
    item.addEventListener("click",function(e){
        if(e.target.id == "tab1" && e.target.checked) {
            cont1.style.display = "block";
            cont2.style.display = "none";

        }else {
            cont1.style.display = "none";

            cont2.style.display = "block";
        }
    })
})