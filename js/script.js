const burgerBtn = document.querySelector('.burger');
const clearBtn = document.querySelector('.clear');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');
const valuesContainer = document.querySelector('.values-container');
let decrementMarquee = 1;

AOS.init({
    duration: 1200,
    once: true
});

burgerBtn.addEventListener('click', function(e) {
    navbar.classList.add('responsive');
    body.classList.add('overflow-hidden');
});

clearBtn.addEventListener('click', function(e) {
    navbar.classList.remove('responsive');
    body.classList.remove('overflow-hidden');
});

$('.values-container').marquee({
    duration: 28000,
    direction: 'left',
    pauseOnHover: true,
    duplicated: true,
    startVisible: true
});

const teamImgs = document.querySelectorAll('.team-img-container');
teamImgs.forEach(teamImg => {
    teamImg.addEventListener("mouseover", function(e) {
        e.target.parentElement.firstElementChild.classList.add('show');
    })
    teamImg.addEventListener("mouseout", function(e) {
        e.target.parentElement.firstElementChild.classList.remove('show');
    })
});

toTop = document.querySelector('.to-top');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

toTop.addEventListener('click', function(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const baseUrlClient = 'asset/logo/clients/';
const clientsLogo = ['alattulisdotcom.png'
                    , 'bankindonesia.png'
                    , 'caesarikitchen.png'
                    , 'circlecoffee.png'
                    , 'dynastyadvertising.png'
                    , 'janganlupasarapan.png'
                    , 'joeyalmond.png'
                    , 'kemenpora.png'
                    , 'konsulatmalaysiapekanbaru.png'
                    , 'kpknl.png'
                    , 'luxuryhydroclean.png'
                    , 'mura.png'
                    , 'nadiin.png'
                    , 'nusantaramandiri.png'
                    , 'onana.png'
                    , 'oxuskem.png'
                    , 'peterseli.png'
                    , 'prive.png'
                    , 'rafaira.png'
                    , 'riaurhythm.png'
                    , 'teknongsoya.png'
                    , 'tupperware.png'
                    , 'wishinteriorarchitect.png'
                    , 'yoghurt.png'
                    , 'yongbengkalis.png'];

const clientsImg = document.querySelectorAll('#clients img');
let clientsIndex = [0,0,0,0,0,0];
clientsImg.forEach((img, index) => {
    let chooseClient = getRndInteger(0, clientsLogo.length, clientsIndex);
    img.src = baseUrlClient + clientsLogo[chooseClient];
    img.alt = clientsLogo[chooseClient];
    clientsIndex[index] = chooseClient;
    setInterval(function() {
        setTimeout(fadeOut(img, index, clientsIndex), 1000);
    }, getRndInteger(4000, 7000, [0]));
});

function getRndInteger(min, max, indexes) {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    indexes.forEach(index => {
        if(index == rand){
            return getRndInteger(min, max, indexes);
        }
    });
    return rand;
}

function fadeOut(el, index, indexes) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
            let chooseClient = getRndInteger(0, clientsLogo.length, indexes);
            el.src = baseUrlClient + clientsLogo[chooseClient];
            el.alt = clientsLogo[chooseClient];
            clientsIndex[index] = chooseClient;
            fadeIn(el);
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
