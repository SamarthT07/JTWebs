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

