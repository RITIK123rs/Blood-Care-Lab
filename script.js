function goUpBtn(){
  window.scrollTo(0,0);
}



const observer= new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if(countStart==false && entry.isIntersecting){
            countStart=true;
            console.log(entry);
        runCount();

        }
        
    })
} ,{threshold:0.5})

observer.observe(document.querySelector(".container4"))

click6 = 0;
function left6() {
  scroll6 = document.querySelector(".container6 .scroll");
  card6 = document.querySelector(".container6 .card").getBoundingClientRect().width;;
  scroll6.scrollLeft -= card6 + 18;
  click6--;
}
function right6() {
  scroll6 = document.querySelector(".container6 .scroll");
  card6 = document.querySelector(".container6 .card").getBoundingClientRect().width;;
  if (click6 == 0) {
    scroll6.scrollLeft += card6 + 18 + 18;
    click6++;
  } else {
    scroll6.scrollLeft += card6 + 18;
    click6++;
  }
}

scroll7 = document.querySelector(".container7 .scroll");
card7 = document.querySelector(".container7 .card").getBoundingClientRect().width;;
click7 = 0;
function left7() {
  scroll7 = document.querySelector(".container7 .scroll");
  card7 = document.querySelector(".container7 .card").getBoundingClientRect().width;;
  scroll7.scrollLeft -= card7 + 11;
  click7--;
}
function right7() {
  scroll7 = document.querySelector(".container7 .scroll");
  card7 = document.querySelector(".container7 .card").getBoundingClientRect().width;;
  if (click7 == 0) {
    scroll7.scrollLeft += card7 + 11 + 11;
    click7++;
  } else {
    scroll7.scrollLeft += card7 + 11;
    click7++;
  }
}

click8 = 0;
function left8() {
  scroll8 = document.querySelector(".container8 .scroll");
  card8 = document.querySelector(".container8 .scroll > div").getBoundingClientRect().width;;
  scroll8.scrollLeft -= card8 + 12;
  click8--;
}
function right8() {
  scroll8 = document.querySelector(".container8 .scroll");
  card8 = document.querySelector(".container8 .scroll > div").getBoundingClientRect().width;;
  if (click8 == 0) {
    scroll8.scrollLeft += card8 + 12 + 12;
    click8++;
  } else {
    scroll8.scrollLeft += card8 + 12;
    click8++;
  }
}
