const button = document.getElementById("menu_button");
const list = document.getElementById("myDropdown");


list.style.display="none";

button.addEventListener("click", function(){
    if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display="none";
    }
})