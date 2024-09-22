const boton = document.getElementById('alternar')

boton.addEventListener('click', function() {
    const cuerpo = document.getElementById('cuerpo')

    if(boton.innerHTML == 'Modo oscuro') {
        cuerpo.style.background = 'white';
        cuerpo.style.color = '#000';
        boton.innerHTML = 'Modo claro';
        boton.style.color = '#000';
        
    } else if(boton.innerHTML == 'Modo claro') {
        cuerpo.style.background = 'rgb(22, 22, 22)';
        cuerpo.style.color = 'white';
        boton.innerHTML = 'Modo oscuro';
        boton.style.color = '#000'
       
    }
})

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'visible' class to the element when it's in view
function handleScroll() {
  const elements = document.querySelectorAll('.scrollear');

  elements.forEach(el => {
      if (isElementInViewport(el)) {
          el.classList.add('visible');
      }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.principaltexto')

  elements.forEach(el => {
    console.log(el)
    el.classList.add('visible')
  })
})

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

particlesJS("particula1", {
  particles: {
    number: { value: 90 }, // Adjust the number of particles
    color: { value: "#ffffff" }, // Particle color
    shape: {
      type: "line", // This can be "line" for stick-like particles
    },
    opacity: {
      value: -1,
      random: true
    },
    size: {
      value: 1,
    },
    line_linked: {
      enable: true, // Connecting lines between particles
      distance: 90,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3, // Adjust movement speed
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: "repulse", // Effect when you hover your cursor
      },
    },
  },
});