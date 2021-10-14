let copyrightButton = document.querySelector('.copyrightButton');
let copyrightButtonContent = document.querySelector('.copyrightButtonContent');

copyrightButtonContent.style.left = -250 + "px";
function copy() {
    if(copyrightButtonContent.style.left == -250 + "px") {
        copyrightButtonContent.style.left = 25 + "px";
    } else  {
        copyrightButtonContent.style.left = -250 + "px";
    }
}