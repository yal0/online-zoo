
const donate_control = document.getElementById('donate_control');
const donate_value = document.getElementById('donate_value');

donate_control.addEventListener('click', {handleEvent: changeDonate});
donate_value.addEventListener('keyup', changeDonateControl);
donate_value.addEventListener('change', changeDonateControl);

function changeDonate(event) {
    clearSelection();
    event.target.classList.add('selected');
    donate_value.value = event.target.innerHTML.slice(1);
}

function changeDonateControl(){
    if(donate_value.value.length > 4) {
        donate_value.value = donate_value.value.slice(0,4);
    }
    clearSelection();
    switch(donate_value.value) {
        case '5000':
            donate_control.children[0].classList.add('selected');
            break;
        case '2000':
            donate_control.children[1].classList.add('selected');
            break;
        case '1000':
            donate_control.children[2].classList.add('selected');
            break;
        case '500':
            donate_control.children[3].classList.add('selected');
            break;
        case '250':
            donate_control.children[4].classList.add('selected');
            break;
        case '100':
            donate_control.children[5].classList.add('selected');
            break;
        case '50':
            donate_control.children[6].classList.add('selected');
            break;
        case '25':
            donate_control.children[7].classList.add('selected');
            break;
      }
}

function clearSelection(){
    for (let node of donate_control.children) {
        node.classList.remove('selected');
  }
}