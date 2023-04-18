// button back to top
//Get the button
let btnBackToTop = document.querySelector(".btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (btnBackToTop !== null) {
        scrollbtnBackToTopFun();
    }
};

function scrollbtnBackToTopFun() {
    if ( document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ) {
        btnBackToTop.style.display = "flex";
    } else {
        btnBackToTop.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
if (btnBackToTop !== null) {
    btnBackToTop.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))






// Javascript to embed a video on modal!

var iframeVideo;
var videoSrc;
var videoDataBsTarget;
var videoDataBsTargetModale
var videoBtn;

if ( videoBtn = document.querySelectorAll('.video-btn-modal')) {
    videoBtn.forEach(element => {
        element.addEventListener('click',function(e){
            videoSrc = element.getAttribute('data-bs-src')
            videoDataBsTarget = element.getAttribute('data-bs-target')

            iframeVideo = document.querySelector(videoDataBsTarget + " .iframeVideo");

            videoDataBsTarget = videoDataBsTarget.slice(1)
            videoDataBsTargetModale = document.getElementById(videoDataBsTarget)

            videoDataBsTargetModale.addEventListener('shown.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
            })

            videoDataBsTargetModale.addEventListener('hide.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc)
            })

        })
    })

}

// loader-wrapper 

window.addEventListener("load", function(event){
    var loaderWrapper;
    if ( loaderWrapper = document.querySelector('.loader-wrapper') ) {
        loaderWrapper.style.display = "none";
        // initialize the AOS
        if (typeof AOS === 'object') {
            AOS.init();
        }
    } else {
        // initialize the AOS
        if (typeof AOS === 'object') {
            AOS.init();
        }
    }

})

// Typed

if (document.getElementById('typed')) {
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true
    });
}

// Glide Team

if (document.querySelector('.glideTeam')) {
    var glideTeam = new Glide('.glideTeam', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        gap: 20,
        breakpoints: {
            1200: {
                perView: 2
            },
            768: {
                perView: 1
            }
        }
    });
    glideTeam.mount()
}

// Glide Team rtl

if (document.querySelector('.glideTeamRTL')) {
    var glideTeamRTL = new Glide('.glideTeamRTL', {
        direction: 'rtl',
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        gap: 20,
        breakpoints: {
            1200: {
                perView: 2
            },
            768: {
                perView: 1
            }
        }
    });
    glideTeamRTL.mount()
}


// Glide Testimonial

if (document.querySelector('.glideTestimonial')) {
    var glideTestimonial = new Glide('.glideTestimonial', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        gap: 20,
        breakpoints: {
            1200: {
                perView: 2
            },
            768: {
                perView: 1
            }
        }
    });
    glideTestimonial.mount()
}

// Glide Testimonial rtl

if (document.querySelector('.glideTestimonialRTL')) {
    var glideTestimonialRTL = new Glide('.glideTestimonialRTL', {
        direction: 'rtl',
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        gap: 20,
        breakpoints: {
            1200: {
                perView: 2
            },
            768: {
                perView: 1
            }
        }
    });
    glideTestimonialRTL.mount()
}

// Glide Clients

if (document.querySelector('.glideClients')) {
    var glideClients = new Glide('.glideClients', {
        "type": "carousel",
        "focusAt": "center",
        "startAt": 4,
        "perView": 6,
        "breakpoints": {
            "992": {
                "perView": 4
            },
            "576": {
                "perView": 2
            }
        },
        "autoplay": true,
        "animationDuration": 3000,
        "animationTimingFunc": "linear"
    });
    glideClients.mount()
}

// Glide Clients rtl

if (document.querySelector('.glideClientsRTL')) {
    var glideClientsRTL = new Glide('.glideClientsRTL', {
        "direction": "rtl",
        "type": "carousel",
        "focusAt": "center",
        "startAt": 4,
        "perView": 6,
        "breakpoints": {
            "992": {
                "perView": 4
            },
            "576": {
                "perView": 2
            }
        },
        "autoplay": true,
        "animationDuration": 3000,
        "animationTimingFunc": "linear"
    });
    glideClientsRTL.mount()
}


let checkboxPrice

if (checkboxPrice = document.querySelector('#checkboxPrice')) {

let essential = document.querySelector('.essential');
let premium = document.querySelector('.premium');
let advanced = document.querySelector('.advanced');

let essentialValue = essential.innerText;
let premiumValue = premium.innerText;
let advancedValue = advanced.innerText;

checkboxPrice.addEventListener('click', function (event) {
    if (checkboxPrice.checked == true){
        essential.innerText = essentialValue;
        premium.innerText = premiumValue;
        advanced.innerText = advancedValue;
    } else {
        essential.innerText = Math.floor(essentialValue * (1 + 1/5));
        premium.innerText = Math.floor(premiumValue * (1 + 1/5));
        advanced.innerText = Math.floor(advancedValue * (1 + 1/5));   
    }
})

}

// console.log(window.innerWidth)