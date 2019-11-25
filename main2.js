function openNav() {
    for (var i = 1; i < 8; i++) {
        console.log("t" + i);
        document.getElementById("t" + i).style.zIndex = "-1";
    }
    if (window.innerWidth < 600) {
        document.getElementById("mySidebar").style.width = "100vw";
        document.getElementById("main").style.marginRight = "100vw";
    } else {
        document.getElementById("mySidebar").style.width = "20vw";
        document.getElementById("main").style.marginRight = "20vw";
    }

}

function closeNav() {
    for (var i = 1; i < 8; i++) {
        document.getElementById("t" + i).style.zIndex = "1";
    }
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

function fade() {
    var i = 1;
    var inter = setInterval(fad, 300);

    function fad() {
        document.getElementById("t" + i).classList.add("fade");
        i = i + 1;
        if (i == 8) {
            clearInterval(inter);
        }
    }
}