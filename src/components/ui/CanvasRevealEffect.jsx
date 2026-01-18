import React, { useEffect, useRef, useState } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 5,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size.width * dpr;
    canvas.height = size.height * dpr;
    ctx.scale(dpr, dpr);

    const cols = Math.floor(size.width / (dotSize * 3));
    const rows = Math.floor(size.height / (dotSize * 3));

    const dots = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * dotSize * 3 + dotSize,
          y: j * dotSize * 3 + dotSize,
          opacity: 0,
          targetOpacity: opacities[Math.floor(Math.random() * opacities.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 2,
          speed: (Math.random() * 0.5 + 0.5) * animationSpeed,
        });
      }
    }

    let animationFrame;
    let startTime = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      const elapsed = (Date.now() - startTime) / 1000;

      dots.forEach((dot) => {
        if (elapsed > dot.delay) {
          dot.opacity += (dot.targetOpacity - dot.opacity) * 0.02 * dot.speed;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${dot.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [size, animationSpeed, colors, dotSize, opacities]);

  return (
    <div ref={containerRef} className={`h-full w-full ${containerClassName || ""}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: size.width,
          height: size.height,
        }}
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
