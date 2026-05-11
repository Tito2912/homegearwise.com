'use client';

import { useEffect, useState } from 'react';

interface Props {
  title: string;
  url: string;
  label?: string;
}

export function ShareButtons({ title, url, label = 'Share' }: Props) {
  const [canNativeShare, setCanNativeShare] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  function handleNativeShare() {
    navigator.share({ title, url }).catch(() => {});
  }

  return (
    <div className="share-buttons" aria-label={label}>
      <span className="share-label">{label}:</span>
      {canNativeShare && (
        <button className="share-btn" onClick={handleNativeShare} aria-label="Share via device">
          ↑ Share
        </button>
      )}
      <a
        className="share-btn"
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Share on X (Twitter)"
      >
        𝕏
      </a>
      <a
        className="share-btn"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Share on Facebook"
      >
        Facebook
      </a>
      <a
        className="share-btn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Share on LinkedIn"
      >
        LinkedIn
      </a>
    </div>
  );
}
