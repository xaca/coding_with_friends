import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '../../ui/MainLayout/MainLayout';
import './OnlineEvents.scss';

const videoData = [
  {
    "Title": "Entrega proyectos - Videojuegos / Scripting 2025",
    "Publish Date": "2025-05-29",
    "URL": "https://www.youtube.com/watch?v=zGnNmPctqJs"
  },
  {
    "Title": "De una tarea a una oportunidad de negocio",
    "Publish Date": "2025-05-21",
    "URL": "https://www.youtube.com/watch?v=EoW2WeaP54Q"
  },
  {
    "Title": "Git, estrategias de Branching y su aplicación",
    "Publish Date": "2025-05-14",
    "URL": "https://www.youtube.com/watch?v=5Fw5QuW0JT4"
  },
  {
    "Title": "Using AI Agents to boost your productivity by 500%",
    "Publish Date": "2025-05-01",
    "URL": "http://www.youtube.com/watch?v=Q8XEOGiMS7E"
  },
  {
    "Title": "From Commit to Remote Device in Under 5 min: Building a Continuous Delivery Pipeline 4 IoT Products",
    "Publish Date": "2025-04-25",
    "URL": "http://www.youtube.com/watch?v=GQzCrmgl210"
  },
  {
    "Title": "Experiencias dentro y fuera del código",
    "Publish Date": "2025-04-04",
    "URL": "http://www.youtube.com/watch?v=C3leU4XE6ek"
  },
  {
    "Title": "Impulsa tu carrera tech con los programas de Github - Vanessa Marely Aristizabal",
    "Publish Date": "2025-03-20",
    "URL": "http://www.youtube.com/watch?v=jj1fc24fSN0"
  },
  {
    "Title": "Humanizing Tech: An Online Conversation with Bibiana Souza",
    "Publish Date": "2025-03-14",
    "URL": "http://www.youtube.com/watch?v=OwpSRfhhJB8"
  },
  {
    "Title": "Arquitectura como código",
    "Publish Date": "2025-04-02",
    "URL": "http://www.youtube.com/watch?v=OwcPzx-sF38"
  },
  {
    "Title": "Patrones de diseño para mobile",
    "Publish Date": "2025-02-28",
    "URL": "http://www.youtube.com/watch?v=bzY78exHi7E"
  },
  {
    "Title": "¿Como crear una APP?",
    "Publish Date": "2025-02-21",
    "URL": "http://www.youtube.com/watch?v=n1-zDSUDgds"
  },
  {
    "Title": "Mi vida como programador en Dubai #dubai #programacion #empleo #videojuegos",
    "Publish Date": "2025-02-20",
    "URL": "http://www.youtube.com/watch?v=p_UHXnxpj_c"
  }
];

function OnlineEvents() {
  const getRandomIndex = () => Math.floor(Math.random() * videoData.length);
  const initialIndex = getRandomIndex();

  const [selectedVideo, setSelectedVideo] = useState(videoData[initialIndex]);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 2 });
  const [isAnimating, setIsAnimating] = useState(false);
  const thumbnailsRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isThumbnailsLoading, setIsThumbnailsLoading] = useState(true);

  useEffect(() => {
    const randomIndex = getRandomIndex();
    setCurrentIndex(randomIndex);
    setSelectedVideo(videoData[randomIndex]);

    const start = Math.max(0, Math.floor(randomIndex / 3) * 3);
    setVisibleRange({
      start,
      end: Math.min(start + 2, videoData.length - 1)
    });

    // Add resize listener to detect viewport changes
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 810);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVideoId = (url) => {
    return url.split('v=')[1];
  };

  const getThumbnailUrl = (videoUrl) => {
    const videoId = getVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const formatTitle = (title) => {
    return title.replace(/#\w+/g, '').trim();
  };

  const handlePrevVideo = () => {
    const newIndex = (currentIndex - 1 + videoData.length) % videoData.length;
    setCurrentIndex(newIndex);
    setSelectedVideo(videoData[newIndex]);

    if (isMobileView && (newIndex < visibleRange.start || newIndex > visibleRange.end)) {
      handleThumbnailNavigation('prev');
    }
  };

  const handleNextVideo = () => {
    const newIndex = (currentIndex + 1) % videoData.length;
    setCurrentIndex(newIndex);
    setSelectedVideo(videoData[newIndex]);

    if (isMobileView && (newIndex < visibleRange.start || newIndex > visibleRange.end)) {
      handleThumbnailNavigation('next');
    }
  };

  const handleThumbnailNavigation = (direction) => {
    if (!isMobileView || isAnimating) return;

    setIsAnimating(true);

    const increment = direction === 'next' ? 1 : -1;
    const newStart = Math.max(0, visibleRange.start + increment);
    const newEnd = Math.min(newStart + 2, videoData.length - 1);

    if (newStart >= 0 && newStart < videoData.length) {
      if (thumbnailsRef.current) {
        const thumbnailWidth = thumbnailsRef.current.offsetWidth / 3;
        const currentScroll = thumbnailsRef.current.scrollLeft;
        const targetScroll = currentScroll + (increment * thumbnailWidth);

        thumbnailsRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });

        setTimeout(() => {
          setVisibleRange({
            start: newStart,
            end: newEnd
          });
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleVideoSelect = (video, index) => {
    setIsVideoLoading(true);
    setSelectedVideo(video);
    setCurrentIndex(index);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleThumbnailLoad = () => {
    setIsThumbnailsLoading(false);
  };

  // Componente Skeleton Loader para el video principal
  const VideoSkeletonLoader = () => (
    <div className="video-skeleton-loader">
      <div className="skeleton-video-container">
        <div className="skeleton-video"></div>
        <div className="skeleton-video-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-date"></div>
        </div>
        <div className="skeleton-navigation">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );

  const renderThumbnails = () => {
    if (isMobileView) {
      return videoData.slice(visibleRange.start, visibleRange.end + 1).map((video, index) => (
        <div
          key={visibleRange.start + index}
          className={`thumbnail ${selectedVideo.URL === video.URL ? 'active' : ''}`}
          onClick={() => handleVideoSelect(video, visibleRange.start + index)}
        >
          <img
            src={getThumbnailUrl(video.URL)}
            alt={video.Title}
            loading="lazy"
            onLoad={handleThumbnailLoad}
          />
          <h3>{formatTitle(video.Title)}</h3>
          <p>{video["Publish Date"]}</p>
        </div>
      ));
    }

    return videoData.map((video, index) => (
      <div
        key={index}
        className={`thumbnail ${selectedVideo.URL === video.URL ? 'active' : ''}`}
        onClick={() => handleVideoSelect(video, index)}
      >
        <img
          src={getThumbnailUrl(video.URL)}
          alt={video.Title}
          loading="lazy"
          onLoad={handleThumbnailLoad}
        />
        <h3>{formatTitle(video.Title)}</h3>
        <p>{video["Publish Date"]}</p>
      </div>
    ));
  };

  return (
    <MainLayout>
      <div className="online-events">
        <h1 className='typewriter tw-medium'>Online Events💻 </h1>
        <div className="video-container">
          <div className="main-video">
            {isVideoLoading && <VideoSkeletonLoader />}
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${getVideoId(selectedVideo.URL)}`}
              title={selectedVideo.Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoad}
              style={{ display: isVideoLoading ? 'none' : 'block' }}
            ></iframe>
            {!isVideoLoading && (
              <>
                <div className="video-info">
                  <h2 className="title-two-lines">{formatTitle(selectedVideo.Title)}</h2>
                  <p>Published: {selectedVideo["Publish Date"]}</p>
                </div>
                <div className="navigation-buttons">
                  <button
                    onClick={handlePrevVideo}
                    className="nav-button prev"
                    title="Previous video"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleNextVideo}
                    className="nav-button next"
                    title="Next video"
                  >
                    Next →
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="video-thumbnails-container">
            {isMobileView && (
              <button
                className="thumbnail-nav"
                onClick={() => handleThumbnailNavigation('prev')}
                disabled={visibleRange.start === 0 || isAnimating}
              >
                ←
              </button>
            )}
            <div className="video-thumbnails" ref={thumbnailsRef}>
              {renderThumbnails()}
            </div>
            {isMobileView && (
              <button
                className="thumbnail-nav"
                onClick={() => handleThumbnailNavigation('next')}
                disabled={visibleRange.end >= videoData.length - 1 || isAnimating}
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default OnlineEvents;
