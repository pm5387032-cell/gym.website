let closebtn = document.querySelector(".close-btn");
let openbtn = document.querySelector(".open-btn");
let content = document.querySelector(".content");
let body = document.querySelector("body")


function closeContent() {
  content.style.display = "none";
  document.body.style.overflow = "auto";
}

closebtn.addEventListener("click", closeContent);
content.addEventListener("click", (e)=>{
  if(e.target == content){
    closeContent();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeContent();
});

openbtn.addEventListener("click", (e) => {
  e.preventDefault();
  content.style.display = "flex";
  document.body.style.overflow = "hidden";
});

(function(){
emailjs.init("lcdM-SpX66hDagAqp");
})();

const form = document.getElementById("contact-form");
const btn = document.getElementById("btn");
const statu = document.getElementById("status");

form.addEventListener("submit", function(e){
e.preventDefault();

btn.innerText = "Sending...";
btn.disabled = true;
statu.innerText = "";

emailjs.sendForm("service_58oix5l","template_haw8qx5", this)
.then(() => {
statu.innerText = "✅ Message sent successfully!";
statu.style.color = "green";

form.reset();
})
.catch(() => {
statu.innerText = "❌ Failed to send message. Try again.";
statu.style.color = "red";
})
.finally(() => {
btn.innerText = "Send Message";
btn.disabled = false;
});
});
let btn1 = document.getElementById("scrollTopBtn");

// Show button when scroll down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn1.style.display = "block";
  } else {
    btn1.style.display = "none";
  }
};

// Scroll to top when clicked
btn1.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


// bmi calculater
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let ans = document.querySelector(".ans");
let bmicalc = document.querySelector("#bmicalc");
let ansdefination = document.querySelector(".ans-defination")
let reset = document.querySelector("#reset")
let ansadvice = document.querySelector(".ans-advice")

function bmi(h, w) {
  return w / (h * h);
}

bmicalc.addEventListener("click", () => {
  let h = parseFloat(height.value);// convert cm to meter
  let w = parseFloat(weight.value);

  if (h > 0 && w > 0) {
    let result = bmi(h, w).toFixed(2);
    ans.value = result ;
     if(result <= 18.5){
    ansdefination.innerText = "Underweight ⚠️";
    ansadvice.innerText = "tumhe bhajan bhadane ki jarurat hai ... aap cario join kar sakte hai";
    ansdefination.style.color = "yellow"
    ansadvice.style.color="red"
  }
  else if(result <= 24.9){
        ansdefination.innerText ="Normal ✅";
        ansadvice.innerText = "aap fit ho aap roj excise kar sakte ho fit rahne ke liye "
        ansdefination.style.color ="green";

  }
  else if(result <= 29.9){
        ansdefination.innerText= "Overweight ⚠️";
        ansadvice.innerText = "aap overweight ho aapkoo bhajan kam karne ki jarurat hai"
        ansdefination.style.color= "oramge";
  }
  else{
        ansdefination.innerText = "tumhe sach me bajan kam karne ki jarurat";
        ansdefination.style.color = "red";
  }
  } else {
    ans.value = "";
  }
  reset.addEventListener("click" , (e)=>{
    height.value = "";
    weight.value = "";
    ans.value = "";
    ansdefination.innerText = "";
    ansadvice.innerText = "";
  })
});



// dyanamic pop card

const popupImage = document.querySelector(".popup-image")
const popupName = document.querySelector(".popup-name")
const popupExprince = document.querySelector(".popup-exprince")
const moreBTNS = document.querySelectorAll(".more")
const trainerPopupCard = document.querySelector(".trainers-popup-card")
// const body = document.querySelector("body")
const crossBTN = document.querySelector(".popup-cross-btn")
const trainerBioSummary = document.querySelector(".trainer-bio-summary")



const data = [
  {
    id:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCzmycqHc9qjYoGo8Z7usCcNU4FNDKO5Hyin79R0Wcg&s=10",
    name:"piyush",
    exprince:"6 year ",
    bio:"piyush is a certified personal trainer with over 6 years of experience in helping clients achieve their fitness goals. He specializes"
    
  },
  {
    id:2,
    img:"Screenshot 2026-09-02 132333.png",
    name:"second trainer",
    exprince:"3 year ",
    bio:"This is the bio for the second trainer."

  },
  {
    id:3,
    img:"Screenshot 2026-09-02 132333.png",
    name:"third trainer",
    exprince:"6 year ",
    bio:"This is the bio for the third trainer."
    
  },
  {
    id:4,
    img:"Screenshot 2026-09-02 132333.png",
    name:"kesav",
    exprince:"6 year ",
    bio:"This is the bio for the fourth trainer.",
    socialMedia:{

    }
  }

]

function openpopup(){
  trainerPopupCard.style.display = "flex"

}
moreBTNS.forEach((morebtns, index) => {
  morebtns.addEventListener("click", (e) => {
    e.stopPropagation()
    let newarray = data.find((items) => items.id == index + 1);
    if(newarray){
      popupExprince.innerText = newarray.exprince
      popupName.innerText = newarray.name
      popupImage.src = newarray.img
      trainerBioSummary.innerText = newarray.bio
      openpopup()

    }
  })
});

function closepopup(){
trainerPopupCard.style.display = "none"
body.style.overflow = "auto"
}
document.addEventListener("click", (e) => {
  if (trainerPopupCard && !trainerPopupCard.contains(e.target) ) {
    closepopup();
  }
});



crossBTN.addEventListener("click",closepopup)