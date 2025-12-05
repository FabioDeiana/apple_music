import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleFavorite } from '../store/favoritesSlice';
import { setCurrentTrack } from '../store/playerSlice';
import { DeezerTrack } from '../types/deezer';

interface AlbumCardProps {
  track: DeezerTrack;
}

const AlbumCard = ({ track }: AlbumCardProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.tracks);
  const isFavorite = favorites.some(fav => fav.id === track.id);

  const handlePlay = () => {
    dispatch(setCurrentTrack(track));
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavorite(track));
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handlePlay}>
      <div className="position-relative" style={{ marginBottom: '10px' }}>
        <img 
          src={track.album.cover_medium}
          alt={track.title}
          style={{ 
            width: '100%',
            aspectRatio: '1',
            borderRadius: '8px',
            objectFit: 'cover'
          }}
        />
        
        {/* Favorite button */}
        <div 
          className="position-absolute d-flex align-items-center justify-content-center"
          onClick={handleToggleFavorite}
          style={{ 
            top: '10px',
            right: '10px',
            width: '32px', 
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isFavorite ? (
            <FaHeart size={16} color="#fc3c44" />
          ) : (
            <FaRegHeart size={16} color="white" />
          )}
        </div>
        
        {/* Explicit badge */}
        {track.explicit_lyrics && (
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
        )}
      </div>
      
      <div>
        <div className="text-white mb-1" style={{ 
          fontSize: '14px',
          fontWeight: 400,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {track.title}
        </div>
        <div style={{ 
          fontSize: '12px',
          color: '#8a8a8a',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {track.artist.name}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;