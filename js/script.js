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

const clientsLogo = ['asset/logo/clients/alattulisdotcom.png'
                    , 'asset/logo/clients/bankindonesia.png'
                    , 'asset/logo/clients/caesarikitchen.png'
                    , 'asset/logo/clients/circlecoffee.png'
                    , 'asset/logo/clients/dynastyadvertising.png'
                    , 'asset/logo/clients/janganlupasarapan.png'
                    , 'asset/logo/clients/joeyalmond.png'
                    , 'asset/logo/clients/kemenpora.png'
                    , 'asset/logo/clients/konsulatmalaysiapekanbaru.png'
                    , 'asset/logo/clients/kpknl.png'
                    , 'asset/logo/clients/luxuryhydroclean.png'
                    , 'asset/logo/clients/mura.png'
                    , 'asset/logo/clients/nadiin.png'
                    , 'asset/logo/clients/nusantaramandiri.png'
                    , 'asset/logo/clients/onana.png'
                    , 'asset/logo/clients/oxuskem.png'
                    , 'asset/logo/clients/peterseli.png'
                    , 'asset/logo/clients/prive.png'
                    , 'asset/logo/clients/rafaira.png'
                    , 'asset/logo/clients/riaurhythm.png'
                    , 'asset/logo/clients/teknongsoya.png'
                    , 'asset/logo/clients/tupperware.png'
                    , 'asset/logo/clients/wishinteriorarchitect.png'
                    , 'asset/logo/clients/yoghurt.png'
                    , 'asset/logo/clients/yongbengkalis.png'];

const clientsImg = document.querySelectorAll('#clients img');
clientsImg.forEach(img => {
    img.src = clientsLogo[getRndInteger(0, clientsLogo.length)];
    setInterval(function() {
        setTimeout(fadeOut(img), 1000);
        
    }, getRndInteger(2500, 6000));
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
            el.src = clientsLogo[getRndInteger(0, clientsLogo.length)];
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
