{
    const navElm = document.getElementById('nav-content');
    const checkBox = document.getElementById("nav-input");
    const links = navElm.querySelectorAll('.nav__list a');
    links.forEach(e => {
        e.addEventListener('click', () => {
            checkBox.checked = false;
        })
    })
}