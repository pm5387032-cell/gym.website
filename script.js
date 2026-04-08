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
let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let ans = document.querySelector(".ans")
let bmicalc = document.querySelector("#bmicalc")

bmicalc.addEventListener("click", () => {
let bmi = weight.value/height.value*2 
bmi.value = ans.value
})