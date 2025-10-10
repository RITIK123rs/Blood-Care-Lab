function goUpBtn() {
    window.scrollTo(0, 0);
}

function getCardShift(containerClass) {
    const card = document.querySelector(containerClass + " .card, " + containerClass + " .scroll > div");
    const style = window.getComputedStyle(card);
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);
    const width = card.getBoundingClientRect().width;
    return width + marginLeft + marginRight;
}

function left6() {
    const scroll = document.querySelector(".container6 .scroll");
    const shift = getCardShift(".container6");
    scroll.scrollLeft -= shift;
}
function right6() {
    const scroll = document.querySelector(".container6 .scroll");
    const shift = getCardShift(".container6");
    scroll.scrollLeft += shift;
}

function left7() {
    const scroll = document.querySelector(".container7 .scroll");
    const shift = getCardShift(".container7");
    scroll.scrollLeft -= shift;
}
function right7() {
    const scroll = document.querySelector(".container7 .scroll");
    const shift = getCardShift(".container7");
    scroll.scrollLeft += shift;
}

function left8() {
    const scroll = document.querySelector(".container8 .scroll");
    const shift = getCardShift(".container8");
    scroll.scrollLeft -= shift;
}
function right8() {
    const scroll = document.querySelector(".container8 .scroll");
    const shift = getCardShift(".container8");
    scroll.scrollLeft += shift;
}

const phoneNumber = "919780028787";
document.querySelectorAll(".callBtn").forEach(button => {
    button.addEventListener("click", function () {
        window.location.href = `tel:+${phoneNumber}`;
    });
});

document.querySelectorAll(".messageBtn").forEach(button => {
    button.addEventListener("click", function () {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    });
});
