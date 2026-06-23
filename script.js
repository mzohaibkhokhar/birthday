const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const welcome = document.getElementById("welcome");
const music = document.getElementById("birthdayMusic");

yesBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    celebration.classList.remove("hidden");

    music.play();

    createHearts();
    createStars();
    createBalloons();
    createFireworks();
    createConfetti();
});

function createHearts(){
    setInterval(()=>{
        const heart=document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"vw";
        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),8000);
    },300);
}

function createStars(){
    setInterval(()=>{
        const star=document.createElement("div");
        star.classList.add("star");
        star.innerHTML="⭐";
        star.style.left=Math.random()*100+"vw";
        document.body.appendChild(star);

        setTimeout(()=>star.remove(),8000);
    },500);
}

function createBalloons(){
    setInterval(()=>{
        const balloon=document.createElement("div");
        balloon.classList.add("balloon");
        balloon.innerHTML="🎈";
        balloon.style.left=Math.random()*100+"vw";
        document.body.appendChild(balloon);

        setTimeout(()=>balloon.remove(),8000);
    },700);
}

function createFireworks(){
    setInterval(()=>{
        const firework=document.createElement("div");
        firework.classList.add("firework");

        firework.style.left=Math.random()*100+"vw";
        firework.style.top=Math.random()*80+"vh";

        firework.style.background=
        `hsl(${Math.random()*360},100%,50%)`;

        document.body.appendChild(firework);

        setTimeout(()=>firework.remove(),1000);

    },250);
}

function createConfetti(){

    setInterval(()=>{

        const confetti=document.createElement("div");

        confetti.innerHTML="🎊";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-50px";
        confetti.style.fontSize="25px";

        confetti.animate([
            {transform:"translateY(0px)"},
            {transform:"translateY(110vh)"}
        ],{
            duration:5000
        });

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    },200);
}