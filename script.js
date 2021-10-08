const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');

    setTimeout(function () {
        document.querySelector('nav-ul').style.display = 'none'
    }, 5000)
    setTimeout("location.reload(true);", 5000);
})


