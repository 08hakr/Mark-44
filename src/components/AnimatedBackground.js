import { useState, useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const [grid, setGrid] = useState({ rows: 0, cols: 0 });
  const gridRef = useRef(null);
  const mousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const calculateGrid = () => {
      const size = 50; // The size of each square
      const rows = Math.ceil(window.innerHeight / size);
      const cols = Math.ceil(window.innerWidth / size);
      setGrid({ rows, cols });
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId;
    const animate = () => {
      if (gridRef.current) {
        const squares = gridRef.current.children;
        for (let i = 0; i < squares.length; i++) {
          const square = squares[i];
          const rect = square.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = mousePos.current.x - centerX;
          const dy = mousePos.current.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 250;
          if (dist < maxDist) {
            const pullFactor = (maxDist - dist) / maxDist;
            const pullX = dx * pullFactor * 0.5;
            const pullY = dy * pullFactor * 0.5;
            square.style.transform = `translate(${pullX}px, ${pullY}px)`;
          } else {
            square.style.transform = 'translate(0, 0)';
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    calculateGrid();
    animate();

    window.addEventListener('resize', calculateGrid);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', calculateGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const totalSquares = grid.rows * grid.cols;

  return (
    <div className="background-container">
      <div ref={gridRef} className="grid">
        {Array.from({ length: totalSquares }).map((_, i) => (
          <div key={i} className="grid-square" />
        ))}
      </div>
      <style jsx>{`
        .background-container {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: -1;
          background-color: #111827;
        }
        .grid {
          display: grid; grid-template-columns: repeat(${grid.cols}, 1fr);
          width: 100%; height: 100%;
        }
        .grid-square {
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;