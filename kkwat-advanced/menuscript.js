const menu = document.getElementById('menu');
menu.addEventListener('click',change_menu);



function change_menu(){
    const menu_list = document.getElementById('menu-list');
    menu_list.classList.toggle("open");
}
