particlesJS("particles-js", {
  particles: {
    number: { value: 200 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },

    modes: {
      repulse: {
        // MUST ADD THIS ATTRACT CONFIG
        distance: 50, // Attraction radius
        duration: 0.4,
        speed: 3, // Movement speed (1 = normal)
        factor: 2, // Attraction force multiplier
        easing: "ease-out",
      },
      push: {
        particles_nb: 4, // Keep existing click behavior
      },
    },
  },
});

// Create floating balloons
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  const isMobile = window.innerWidth < 768;
  balloon.style.width = isMobile ? "50px" : "100px"; /* Smaller on mobile */
  balloon.style.height = isMobile ? "75px" : "150px"; /* Smaller on mobile */
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.animationDuration = Math.random() * 10 + 5 + "s";
  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 15000);
}

const balloonInterval =
  window.innerWidth < 768 ? 3000 : 1500; /* Slower on mobile */
setInterval(createBalloon, balloonInterval);

let transitionId;

// Fireworks effect on click
document.addEventListener("click", function (e) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = e.clientX + "px";
  firework.style.top = e.clientY + "px";
  firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1000);

  // Play audio
  const audio = document.getElementById("birthdayAudio");
  audio.play();
});

window.addEventListener("click", startTransition)

// Text entrance animation
gsap.from(".birthday-text", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  rotation: 360,
  ease: "elastic.out(1, 0.3)",
});

let nOpacity = 1;
let pOpacity = 0;

function transition () {
    const happyBirthday = document.querySelector(".birthday-text");
    const birthdayMessage = document.querySelector(".birthday-wishes");
    const see = document.querySelector("#message");
    if (nOpacity > 0){
        nOpacity -= 0.05
        pOpacity += 0.05
        happyBirthday.style.opacity = String(nOpacity);
        see.style.opacity = String(nOpacity)
        birthdayMessage.style.opacity = String(pOpacity);
    } else {
        clearInterval(transitionId)
    }
    
    
}

function startTransition() {
setInterval(transition, 100);
    
}

