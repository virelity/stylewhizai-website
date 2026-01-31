import './AnnouncementBanner.css';

const AnnouncementBanner = () => {
  const text = 'Discover the Future of Fashion – StyleWhiz App Coming Soon | Personalized AI Styling | Virtual Try-On with AR Mirror | Sign Up for Early Access Today';
  
  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;