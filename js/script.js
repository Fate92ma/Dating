$(document).ready(function () {

    // Inputs: Gender

    $(".male img").click(function () {
        $(this).css("border", "2px solid #1b6ca8");
        $(".female img").css("border", "2px solid #717171");
    });

    $(".female img").click(function () {
        $(this).css("border", "2px solid #d5232f");
        $(".male img").css("border", "2px solid #717171");
    });

    // Inputs: Seeking

    $('input:checkbox[id="man"]').on('change', function () {
        if (this.checked) {
            $(".man img").css("border", "2px solid #1b6ca8");
        } else {
            $(".man img").css("border", "2px solid #717171");
        }
    });

    $('input:checkbox[id="women"]').on('change', function () {
        if (this.checked) {
            $(".women img").css("border", "2px solid #d5232f");
        } else {
            $(".women img").css("border", "2px solid #717171");
        }
    });

});

// Select

var select, i, option;

select = document.getElementById('age1');

for (i = 18; i <= 75; i += 1) {
    option = document.createElement('option');
    option.value = option.text = i;
    select.add(option);
};

var select2, x, option2;

select = document.getElementById('age2');

for (x = 20; x <= 80; x += 1) {
    option = document.createElement('option');
    option.value = option.text = x;
    select.add(option);
};

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}