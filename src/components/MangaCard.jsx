import React from 'react';

// Expects a 'manga' object prop with details
function MangaCard({ manga }) {
  // Default values if manga prop is incomplete (good practice)
  const title = manga?.title ?? 'Unknown Title';
  const imageUrl = manga?.imageUrl ?? 'https://via.placeholder.com/150x225.png?text=No+Image';
  const latestChapter = manga?.latestChapter ?? 'N/A';
  const updatedTime = manga?.updatedTime ?? 'Unknown';
  const url = manga?.url ?? '#';

  return (
    <div className="manga-item">
      <a href={url} className="manga-cover-link" title={title}>
        <img src={imageUrl} alt={`${title} Cover`} className="manga-cover-image" loading="lazy" />
        <span className="latest-chapter">Ch. {latestChapter}</span>
        {/* Maybe add view count or rating overlay here */}
      </a>
      <div className="manga-info">
        <h3 className="manga-title"><a href={url}>{title}</a></h3>
        <p className="manga-meta">Updated: {updatedTime}</p>
        {/* Add genre tags or other info if needed */}
      </div>
    </div>
  );
}

export default MangaCard;