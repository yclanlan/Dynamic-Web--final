import React, { useRef, useState } from 'react';

const SignaturePad = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    const { offsetX, offsetY } = e.nativeEvent;
    context.moveTo(offsetX, offsetY);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  return (
    <div style={{ width: '100%', padding:"0", display:"flex"}}>
      X
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      height={60} 
      
      style={{   border: '0px solid black', cursor: 'url("./mdi_pen.png") 10 10 , auto' }} 
    ></canvas>
    </div>
  );
};

export default SignaturePad;
