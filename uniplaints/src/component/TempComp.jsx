import React, { useState, useRef } from 'react';

const CameraComponent = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef();

  const handleStartCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleStopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <div>
      {stream ? (
        <div>
          <video autoPlay ref={videoRef} />
          <button onClick={handleStopCamera}>Stop Camera</button>
        </div>
      ) : (
        <button onClick={handleStartCamera}>Start Camera</button>
      )}
    </div>
  );
};

export default CameraComponent;
