import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

function Robot() {
  const wrapperRef = useRef(null);
  const [showRobot, setShowRobot] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRobot(true);
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
          }, 300); // wait for canvas to render
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div className="robot-wrapper" ref={wrapperRef}>
      {showRobot && (
        <Spline scene="https://prod.spline.design/CxsNMqmHnwzkPn98/scene.splinecode" />
      )}
    </div>
  );
}

export default Robot;
