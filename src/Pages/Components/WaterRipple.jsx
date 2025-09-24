import { useEffect, useRef, useState } from "react";

export default function WaterRipple() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [testX, setTestX] = useState(0);
  const [testY, setTestY] = useState(0);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const startTime = performance.now();
    let activeRipples = [];

    {/* Tracks Mouse Movement */}
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    {/* Creates ripple at specified coordinates */}
    function createRipple(x, y) {
      activeRipples.push({
        x: x,
        y: y,
        radius: 0,
        maxRadius: Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)),
        opacity: 1
      });
    }

    {/* Animation loop */}
    function animate(timestamp) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      activeRipples = activeRipples.filter(ripple => {
        ripple.radius += 2; // Speed of ripple expansion
        ripple.opacity -= 0.02; // Fade out speed
        
        // Draw ripple
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        return ripple.opacity > 0 && ripple.radius < ripple.maxRadius;
      });

      requestAnimationFrame(animate);
    }

    {/* Automatic ripple creation */}
    const createRandomRipple = () => {
      const centerX=canvas.width/2;
      const centerY=canvas.height/2;
      setTestX(centerX);
      setTestY(centerY);
      createRipple(mouseX, mouseY-335);
    };

    {/* Event Listeners Setup */}
    window.addEventListener('mousemove', handleMouseMove);
    const autoRippleInterval = setInterval(createRandomRipple, 1000);

    {/* Start animation */}
    animate(startTime);

    {/* Cleanup */}
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(autoRippleInterval);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        //make the canvas full screen width
        style={{ border: '1px solid black', backgroundColor: '#0040C0' }}
      />
      <br />
      Mouse Position: X={mouseX}, Y={mouseY}
      CenterPos: X={testX}, Y={testY}
    </div>
  );
}