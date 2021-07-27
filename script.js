const button = document.getElementById("menu_button");
const list = document.getElementById("myDropdown");




button.addEventListener("click", function(){
    if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display="none";
    }
})


function togglePopup(div_num){
    var my_service = document.getElementById('popup-' + div_num);
    my_service.style.display = 'block';
}

function closePopup(div_num){
    var my_service = document.getElementById('popup-' + div_num);
    my_service.style.display = 'none';
}



