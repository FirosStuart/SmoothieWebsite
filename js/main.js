{
    const navElm = document.getElementById('nav-content');
    const checkBox = document.getElementById("nav-input");
    const links = navElm.querySelectorAll('.nav__list a');
    links.forEach(e => {
        e.addEventListener('click', () => {
            checkBox.checked = false;
        })
    })

    //Get the button:
    const button1 = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button1.style.display = "block";
        } else {
            button1.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}