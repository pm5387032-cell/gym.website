let closebtn = document.querySelector(".close-btn");
let openbtn = document.querySelector(".open-btn");
let content = document.querySelector(".content");
let body = document.querySelector("body")

closebtn.addEventListener("click", (e) => {
  e.preventDefault();
  content.style.display = "none";
});
openbtn.addEventListener("click", (e) => {
  e.preventDefault();
  content.style.display = "flex";
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