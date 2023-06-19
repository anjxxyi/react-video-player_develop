import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TimeInfo from './components/TimeInfo'
import BtnGroup from './components/BtnGroup'

function App() {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);

    const handleLoadedMetadata = () => setDuration(videoRef.current.duration);
    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    let videoInterval = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    });
    return () => clearInterval(videoInterval)
  }, [currentTime]);

  const videoPlay = () => videoRef.current.play();
  const videoPause = () => videoRef.current.pause();
  const videoStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="App">
      <Header />
      <div id="Container">
        <video 
            className='video'
            ref={videoRef}
            style={{maxHeight: '60vh'}}
            src='/public/media/video.mp4' 
        />
        <TimeInfo 
          currentTime={currentTime}
          duration={duration}
        />
        <BtnGroup 
          videoPlay={videoPlay}
          videoPause={videoPause}
          videoStop={videoStop}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
