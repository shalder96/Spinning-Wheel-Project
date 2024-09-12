
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', () => {
  const randomDegree = Math.floor(Math.random() * 3600) + 360; // Randomize degree for multiple spins
  wheel.style.transform = `rotate(${randomDegree}deg)`; // Rotate the wheel
});
