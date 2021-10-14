const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburgerMenuContent = document.querySelector('.hamburgerMenuContent');
const hamburgerItem = [...document.querySelectorAll('.hamburgerItem')];
const MenuItem = [...document.querySelectorAll('.menuItem')];

let openMenu = false;

hamburgerMenu.addEventListener('click', () => {
    if(openMenu == false) {
        openMenu = true;
        hamburgerMenuContent.style.right = 0 + "px";
        document.body.style.overflow = "hidden";

        hamburgerItem.forEach(e => {
            e.style.backgroundColor = "white";
        })
    } else {
        openMenu = false;
        hamburgerMenuContent.style.right = -100 + "%";
        document.body.style.overflow = "auto";

        hamburgerItem.forEach(e => {
            e.style.backgroundColor = "black";
        })
    }
})

MenuItem.forEach(e => {
    e.addEventListener('click', () => {
        openMenu = false;
        hamburgerMenuContent.style.right = -100 + "%";
        document.body.style.overflow = "auto";

        hamburgerItem.forEach(e => {
            e.style.backgroundColor = "black";
        })
    })
})

function close(){
    hamburgerMenu.classList.remove('open');
    hamburgerMenuContent.style.right = -100 + "%";
    document.body.style.overflow = "auto";

    hamburgerItem.forEach(e => {
        e.style.backgroundColor = "black";
    })
    openMenu = false;
}

window.addEventListener('resize', close);