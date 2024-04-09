document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('navbarList').classList.toggle('active');
});

var menuItems = document.querySelectorAll('.navbar-list li a');
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        document.getElementById('navbarToggle').classList.remove('active');
        document.getElementById('navbarList').classList.remove('active');
    });
}