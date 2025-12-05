interface RadioStationCardProps {
  title: string;
  subtitle: string;
  description?: string;
  imageUrl?: string;
  backgroundColor: string;
  large?: boolean;
}

const RadioStationCard = ({ 
  title, 
  subtitle,
  description,
  imageUrl, 
  backgroundColor,
  large = false 
}: RadioStationCardProps) => {
  return (
    <div 
      className="rounded overflow-hidden"
      style={{ 
        backgroundColor: '#1a1a1a',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a2a2a'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
    >
      {/* Header with text */}
      <div className="p-3">
        <p className="text-uppercase mb-1" style={{ 
          fontSize: '11px', 
          color: '#8a8a8a',
          letterSpacing: '0.5px',
          fontWeight: 500
        }}>
          {subtitle}
        </p>
        <p className="mb-0" style={{ 
          fontSize: '14px',
          lineHeight: '1.4',
          color: '#fff'
        }}>
          {description || title}
        </p>
      </div>
      
      {/* Image */}
      <div style={{ 
        backgroundColor: backgroundColor,
        height: large ? '200px' : '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div className="text-white fw-bold" style={{ fontSize: large ? '48px' : '36px' }}>
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioStationCard;