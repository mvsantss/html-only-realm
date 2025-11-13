import { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videos: string[];
  className?: string;
}

export const VideoBackground = ({ videos, className = '' }: VideoBackgroundProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    // Reset and play the video when index changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {videos.map((video, index) => (
        <video
          key={video}
          ref={index === currentVideoIndex ? videoRef : null}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ pointerEvents: 'none' }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
      {/* Overlay escuro para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-landi-red/60"></div>
    </div>
  );
};
