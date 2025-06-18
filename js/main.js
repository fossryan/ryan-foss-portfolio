window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const canvas = document.getElementById('introCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const drawShapes = () => {
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.strokeStyle = ['#0ff', '#f0f', '#ff0'][Math.floor(Math.random() * 3)];
      ctx.lineWidth = 2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 40 + 10;
      ctx.rect(x, y, size, size);
      ctx.stroke();
    }
  };

  drawShapes();
  setTimeout(() => {
    intro.style.display = 'none';
  }, 2500);
});