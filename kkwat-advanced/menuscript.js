const menu = document.getElementById('menu');
const menu_list = document.getElementById('menu-list');
menu.addEventListener('click',()=> {
    if(menu_list.style.display = "none"){
        menu_list.style.display = "flex";
    }else{
        menu_list.style.display = "none";
    }
});