var btn = document.getElementById('btn');

var body = document.getElementById('hole');

btn.addEventListener('click',() => {
    body.classList.toggle("dark_theme");
    btn.classList.toggle("btn_color");
   


   if (btn.innerText.includes("D")) {
    btn.innerText = "Light mode"
   }
   else {
    btn.innerText = "Dark mode"
   }
})




