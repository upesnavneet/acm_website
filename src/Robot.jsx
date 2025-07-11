import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Robot_Background from '../Robot_Background.mp4';

function Robot() {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  const [showRobot, setShowRobot] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (inView && !hasPlayed) {
          setShowRobot(true);
          setHasPlayed(true);

          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
          }

          setTimeout(() => {
            const canvas = wrapperRef.current?.querySelector('canvas');
            if (canvas) {
              const centerX = window.innerWidth / 2;
              const centerY = window.innerHeight / 2;

              canvas.dispatchEvent(
                new MouseEvent('mousemove', {
                  clientX: centerX,
                  clientY: centerY,
                  bubbles: true,
                })
              );
            }
          }, 300);
        }
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      if (wrapperRef.current) observer.disconnect();
    };
  }, [hasPlayed]);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  return (
    <div className="robot-wrapper" ref={wrapperRef}>
      <video
        ref={videoRef}
        className="robot-background-video"
        src={Robot_Background}
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      {showRobot && (
        <Spline scene="https://prod.spline.design/ZE3KD8HNLrviO0HS/scene.splinecode" />
      )}
    </div>
  );
}

export default Robot;
