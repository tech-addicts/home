function openNav() {
    for (var i = 1; i < 10; i++) {
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
    for (var i = 1; i < 10; i++) {
        document.getElementById("t" + i).style.zIndex = "1";
    }
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}