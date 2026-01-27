
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .back-to-top-btn {
            top: auto !important;
            bottom: 1.25rem !important;
            right: 1.25rem !important;
          }
        }
      `}</style>
      <button
        className="back-to-top-btn"
        aria-label="Back to top"
        onClick={handleClick}
        style={{
          position: 'fixed',
          right: '2rem',
          top: 'calc(80px + 2rem)',
          zIndex: 1000,
          border: 'none',
          height: '45px',
          width: '45px',
          borderRadius: '50%',
          padding: '0',
          cursor: 'pointer',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.3s',
          backgroundColor: '#e4e4f0',
        }}
        tabIndex={visible ? 0 : -1}
        hidden={!visible}
      >
        <Image src="/icon/back-to-top.svg" alt="Back to top" width={45} height={45} style={{filter: 'invert(19%) sepia(8%) saturate(2752%) hue-rotate(178deg) brightness(95%) contrast(88%)'}} />
      </button>
    </>
  );
};

export default BackToTop;
