const turtles = document.querySelectorAll('.turtle');
    const raceTrack = document.getElementById('raceTrack');


    setInterval(() => {
      turtles.forEach(turtle => {
        const distance = Math.floor(Math.random() * 30) + 10;
        turtle.style.left = `${parseInt(turtle.style.left || 0) + distance}px`;
        

        if (turtle.offsetLeft + turtle.offsetWidth > raceTrack.offsetWidth) {
          alert(`${turtle.classList[1]} turtle wins!`);
          resetRace();
        }
      });
    }, 1000);

    // Function to reset the race
    function resetRace() {
      turtles.forEach(turtle => {
        turtle.style.left = '0';
      });
    }