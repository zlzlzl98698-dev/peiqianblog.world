<template>
  <canvas ref="canvasRef" class="sakura-canvas" aria-hidden="true"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number;

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const onResize = () => {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize);

  const colors = ['#FFB7D2', '#FFC9DE', '#FF9EBE', '#FFD6E7', '#FFE4EE'];
  const petalCount = Math.min(30, Math.floor(window.innerWidth / 40));
  const petals: Petal[] = [];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 1.5 - 0.2,
      speedY: Math.random() * 1.2 + 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  const drawPetal = (p: Petal) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
    ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
    ctx.fill();
    ctx.restore();
  };

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.x += p.speedX + Math.sin(p.y / 50) * 0.4;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) {
        p.x = -20;
      }

      drawPetal(p);
    }

    animationFrameId = requestAnimationFrame(render);
  };

  render();

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
    cancelAnimationFrame(animationFrameId);
  });
});
</script>

<style scoped>
.sakura-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 100;
  opacity: 0.75;
}
</style>
