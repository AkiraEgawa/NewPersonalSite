import { useEffect, useState } from "react";

export default function WaterRipple() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <div>
            Mouse Position: X={mouseX}, Y={mouseY}
        </div>
    );
}