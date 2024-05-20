//  var copy = document.querySelector('.logo-slide').cloneNode(true);
//  document.querySelector(".logos").appendChild(copy)

document.getElementById('burger').addEventListener('click', () => {
    menu = document.getElementById('menu')
    currentDisplay = menu.style.display
    if(currentDisplay == "" || currentDisplay == "none"){
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})
