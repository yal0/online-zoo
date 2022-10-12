const menu = document.getElementById('menu');
const hamburger = document.getElementById('burger');
const menu_close = document.getElementById('menu_close_btn');
const shadow1 = document.getElementById('shadow1');
let isOpen = false;

hamburger.addEventListener('click', showMenu);
menu_close.addEventListener('click', hideMenu);
shadow1.addEventListener('click', hideMenu);


function showMenu() {
    menu.style.display="flex";
    shadow1.style.display="block";
    isOpen = true;
}

function hideMenu() {
    menu.style.display="none";
    shadow1.style.display="none";
    isOpen = false;
}

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        if(window.innerWidth>900){
            isOpen = false;
            menu.style.display="flex";
            shadow1.style.display="none";
        }
        else
        {
            if(!isOpen)
            {
                menu.style.display="none";
                shadow1.style.display="none";
            }
        }
    };
});