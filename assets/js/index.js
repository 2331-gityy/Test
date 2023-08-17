window.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const navbar = document.querySelector("header nav");
    const navBurger = document.querySelector(".nav-burger i.fas.fa-bars");
    const navList = document.querySelector(".nav-list");

    let lastScrollTop;

    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            navbar.classList.add("navbar-shadow");
        } else {
            navbar.classList.remove("navbar-shadow");
        }

        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) navbar.style.top = "-100px";
        else navbar.style.top = "0";

        lastScrollTop = scrollTop;
    };

    navBurger.addEventListener("click", function () {
        navList.classList.toggle("slide");
    });

    window.addEventListener("click", function (e) {
        if (e.target !== navBurger && e.target !== navList) {
            navList.classList.remove("slide");
        }
    });
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    var btn4 = document.getElementById("myBtn4");
    var span = document.getElementsByClassName("close")[0];
 
    btn.onclick = function() {
    modal.style.display = "block";
    }
    btn1.onclick = function() {
    modal.style.display = "block";
    }
    btn2.onclick = function() {
    modal.style.display = "block";
    }
    btn3.onclick = function() {
    modal.style.display = "block";
    }
    btn4.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
});
