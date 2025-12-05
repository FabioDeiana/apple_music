const AlbumPlaceholder = () => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <div className="position-relative" style={{ marginBottom: '10px' }}>
        <div 
          className="d-flex align-items-center justify-content-center"
          style={{ 
            width: '100%',
            aspectRatio: '1',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            position: 'relative'
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#4a4a4a">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          
          {/* More button (visible on hover) */}
          <div 
            className="position-absolute d-flex align-items-center justify-content-center"
            style={{ 
              top: '10px',
              right: '10px',
              width: '24px', 
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              opacity: 0,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
          
          {/* Explicit badge */}
          <div 
            className="position-absolute d-flex align-items-center justify-content-center"
            style={{ 
              bottom: '10px',
              left: '10px',
              backgroundColor: '#8a8a8a',
              color: '#000',
              fontSize: '9px',
              fontWeight: 700,
              padding: '2px 4px',
              borderRadius: '2px'
            }}
          >
            E
          </div>
        </div>
      </div>
      
      <div>
        <div className="text-white mb-1" style={{ 
          fontSize: '14px',
          fontWeight: 400,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          Song Placeholder
        </div>
        <div style={{ 
          fontSize: '12px',
          color: '#8a8a8a',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          Artist Placeholder
        </div>
      </div>
    </div>
  );
};

export default AlbumPlaceholder;