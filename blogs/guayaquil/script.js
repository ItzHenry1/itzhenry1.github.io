const boton = document.getElementById('alternar')

particlesJS("particula1", {
    particles: {
      number: { value: 100 }, // Adjust the number of particles
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
        distance: 120,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5, // Adjust movement speed
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Effect when you hover your cursor
        },
      },
    },
  });

  particlesJS("particula2", {
    particles: {
      number: { value: 100 }, // Adjust the number of particles
      color: { value: "#ffffff" }, // Particle color
      shape: {
        type: "line", // This can be "line" for stick-like particles
      },
      opacity: {
        value: 1,
        random: true
      },
      size: {
        value: 0,
      },
      line_linked: {
        enable: true, // Connecting lines between particles
        distance: 100,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Adjust movement speed
      },
    },
    interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    }
},
  });

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