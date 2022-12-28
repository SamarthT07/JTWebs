const body = document.body;
let lastscroll = 0;

window.addEventListener('scroll', ()=>{
    const currentscroll = window.pageYOffset;
    
    if(currentscroll <= 0){
        body.classList.remove("scroll-up");
    }

    if(currentscroll > lastscroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }

    if(currentscroll < lastscroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up");
    }

    lastscroll = currentscroll
})




const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

const hamburg = document.querySelector(".hamburg");
const hamlines = document.querySelector(".hamlines");
const nali = document.querySelector(".nali");
const unli = document.querySelector(".unli");

hamburg.addEventListener("click" , ()=>{
  hamburg.classList.toggle("active")
    nali.classList.toggle("active");
    unli.classList.toggle("active");

    if(hamburg.classList.contains("active")){
      hamburg.addEventListener("click" , ()=>{
       hamburg.classList.toggle("is-active");
       nali.classList.toggle("is-active");
    unli.classList.toggle("is-active");
      })
    }
})

const abli = document.querySelectorAll(".abli");



for (let i = 0; i < abli.length; i++) {
  abli[i].addEventListener("click", function() {
    hamburg.classList.toggle("active");
    nali.classList.toggle("active");
    unli.classList.toggle("active");
  });
}

const abcnou = document.querySelector(".abcnou");

abcnou.addEventListener("click" , ()=>{
  hamburg.classList.toggle("active");
  nali.classList.toggle("active");
  unli.classList.toggle("active");
})