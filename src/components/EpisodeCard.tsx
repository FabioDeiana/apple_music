interface EpisodeCardProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

const EpisodeCard = ({ title, subtitle, imageUrl, backgroundColor = '#667eea' }: EpisodeCardProps) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <div className="position-relative" style={{ marginBottom: '10px' }}>
        {imageUrl ? (
          <img 
            src={imageUrl}
            alt={title}
            style={{ 
              width: '100%',
              aspectRatio: '1',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div 
            className="d-flex align-items-center justify-content-center"
            style={{ 
              width: '100%',
              aspectRatio: '1',
              borderRadius: '8px',
              backgroundColor: '#2a2a2a',
              backgroundImage: `linear-gradient(135deg, ${backgroundColor} 0%, #764ba2 100%)`
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="white" opacity="0.5">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        
        {/* Music Badge */}
        <div 
          className="position-absolute d-flex align-items-center justify-content-center bg-white"
          style={{ 
            top: '8px',
            right: '8px',
            width: '28px', 
            height: '28px',
            borderRadius: '50%'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="black">
            <path d="M23.994 6.124c0-.294-.041-.537-.124-.732-.247-.684-.907-1.122-1.652-1.122h-2.86c-.248 0-.487.06-.701.168l-9.712 4.856c-.065.033-.123.074-.179.119-.007.005-.011.01-.018.016l-.142.14c-.013.013-.024.028-.036.042-.11.136-.193.296-.254.476-.017.05-.03.102-.041.155-.002.01-.004.02-.006.031-.015.086-.025.175-.025.266v7.456c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V9.483l8.73-4.365v5.388c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V6.124z"/>
          </svg>
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
          {title}
        </div>
        {subtitle && (
          <div style={{ 
            fontSize: '12px',
            color: '#8a8a8a',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeCard;