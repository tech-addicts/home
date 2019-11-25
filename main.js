$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
            triggerElement: '#t1',
            offset: -200

        })
        .setClassToggle('#t1', 'fade')

        .addTo(controller);
    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#t2',
            offset: -200

        })
        .setClassToggle('#t2', 'fade')

        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#t3',
            offset: -200

        })
        .setClassToggle('#t3', 'fade')

        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
            triggerElement: '#t4',
            offset: -200

        })
        .setClassToggle('#t4', 'fade')

        .addTo(controller);
    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#t5',
            offset: -200

        })
        .setClassToggle('#t5', 'fade')

        .addTo(controller);
    var scene5 = new ScrollMagic.Scene({
            triggerElement: '#t6',
            offset: -200

        })
        .setClassToggle('#t6', 'fade')

        .addTo(controller);
    var scene6 = new ScrollMagic.Scene({
            triggerElement: '#t7',
            offset: -200

        })
        .setClassToggle('#t7', 'fade')

        .addTo(controller);
    var scene7 = new ScrollMagic.Scene({
            triggerElement: '#t8',
            offset: -200

        })
        .setClassToggle('#t8', 'fade')

        .addTo(controller);
    var scene8 = new ScrollMagic.Scene({
            triggerElement: '#t9',
            offset: -200

        })
        .setClassToggle('#t9', 'fade')
        .addTo(controller);
    var scene9 = new ScrollMagic.Scene({
            triggerElement: '#t10',
            offset: -200

        })
        .setClassToggle('#t10', 'fade')
        .addTo(controller);
    var scene10 = new ScrollMagic.Scene({
            triggerElement: '#t11',
            offset: -200

        })
        .setClassToggle('#t11', 'fade')
        .addTo(controller);
    var scene11 = new ScrollMagic.Scene({
            triggerElement: '#t12',
            offset: -200

        })
        .setClassToggle('#t12', 'fade')
        .addTo(controller);
    var scene12 = new ScrollMagic.Scene({
            triggerElement: '#t13',
            offset: -200

        })
        .setClassToggle('#t13', 'fade')
        .addTo(controller);
    var scene13 = new ScrollMagic.Scene({
            triggerElement: '#t14',
            offset: -200

        })
        .setClassToggle('#t14', 'fade')
        .addTo(controller);
    var scene14 = new ScrollMagic.Scene({
            triggerElement: '#t15',
            offset: -200

        })
        .setClassToggle('#t15', 'fade')
        .addTo(controller);
    var scene15 = new ScrollMagic.Scene({
            triggerElement: '#t16',
            offset: -200

        })
        .setClassToggle('#t16', 'fade')
        .addTo(controller);
    var scene16 = new ScrollMagic.Scene({
            triggerElement: '#t17',
            offset: -200

        })
        .setClassToggle('#t17', 'fade')
        .addTo(controller);
    var scene17 = new ScrollMagic.Scene({
            triggerElement: '#t18',
            offset: -200

        })
        .setClassToggle('#t18', 'fade')
        .addTo(controller);
    var scene18 = new ScrollMagic.Scene({
            triggerElement: '#t19',
            offset: -200

        })
        .setClassToggle('#t19', 'fade')
        .addTo(controller);
    var scene19 = new ScrollMagic.Scene({
            triggerElement: '#t20',
            offset: -200

        })
        .setClassToggle('#t20', 'fade')
        .addTo(controller);
    var scene20 = new ScrollMagic.Scene({
            triggerElement: '#t21',
            offset: -200

        })
        .setClassToggle('#t21', 'fade')
        .addTo(controller);
    var scene21 = new ScrollMagic.Scene({
            triggerElement: '#t22',
            offset: -200

        })
        .setClassToggle('#t22', 'fade')
        .addTo(controller);
    var scene22 = new ScrollMagic.Scene({
            triggerElement: '#t23',
            offset: -200

        })
        .setClassToggle('#t23', 'fade')
        .addTo(controller);
    var scene23 = new ScrollMagic.Scene({
            triggerElement: '#t24',
            offset: -200

        })
        .setClassToggle('#t24', 'fade')
        .addTo(controller);

})

function openNav() {
    if (window.innerWidth < 600) {
        document.getElementById("mySidebar").style.width = "100vw";
        document.getElementById("main").style.marginRight = "100vw";
    } else {
        document.getElementById("mySidebar").style.width = "20vw";
        document.getElementById("main").style.marginRight = "20vw";
    }

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}