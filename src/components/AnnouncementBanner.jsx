import './AnnouncementBanner.css';

const AnnouncementBanner = () => {
  const text = 'StyleWhiz App Launching February 5, 2026! | Personalized AI Styling | Virtual Try-On with AR Mirror | Coming Soon to Play Store & App Store';

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