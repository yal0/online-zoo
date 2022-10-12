const testimonials = document.getElementById('testimonials');
const popup = document.getElementById('popup');
const popup_close = document.getElementById('popup_close_btn');
const shadow2 = document.getElementById('shadow2');

testimonials.addEventListener('click', {handleEvent: showPopup});
shadow2.addEventListener('click', hidePopup);
popup_close.addEventListener('click', hidePopup);

function showPopup(event){
    if ( window.innerWidth <= 900 ) {
        let info = event.target.closest('div');
        popup.children[0].src = info.children[0].src;
        popup.children[1].innerHTML = info.children[1].innerHTML;
        popup.children[2].innerHTML = info.children[2].innerHTML;
        popup.children[3].innerHTML = info.children[3].innerHTML;
        
        shadow2.style.display="block";
        popup.style.display="block";
        popup_close.style.display="block";
        //isOpen = false;
    }
}

function hidePopup(event){
    shadow2.style.display="none";
    popup.style.display="none";
    popup_close.style.display="none";
    //isOpen = false;
}