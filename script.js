var jokebtn = document.querySelector(".jokebtn");
var wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".backBtn");

wrapper.style.display = "none";

jokebtn.addEventListener("click",()=>{
    jokebtn.style.display = "none";
    backBtn.style.display = "block"
// for jokes
fetch('https://icanhazdadjoke.com/slack')
.then(data =>data.json())
.then(jokedata =>{
    const joketext = jokedata.attachments[0].text;
    const jokelem = document.getElementById('jokelem');
    wrapper.style.display = "flex";
    jokelem.innerHTML = joketext;
})

})


// back btn


backBtn.addEventListener("click",()=>{
    
    wrapper.style.display = "none";
    jokebtn.style.display = "flex";
    backBtn.style.display = "none"
})


