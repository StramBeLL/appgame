const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Oyun başlangıcı
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  canvas.style.display = "block";
  startGame();
});

// Oyunun ana döngüsü
function startGame() {
  let player = { x: 400, y: 300, size: 20, color: "red" };
  let isRunning = true;

  function update() {
    if (!isRunning) return;
    draw(player);
    requestAnimationFrame(update);
  }

  function draw(player) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
  }

  // Klavye kontrolü
  window.addEventListener("keydown", (e) => {
    const speed = 10;
    if (e.key === "ArrowUp") player.y -= speed;
    if (e.key === "ArrowDown") player.y += speed;
    if (e.key === "ArrowLeft") player.x -= speed;
    if (e.key === "ArrowRight") player.x += speed;
  });

  update();
}