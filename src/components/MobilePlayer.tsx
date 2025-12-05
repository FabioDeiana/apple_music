import { FaPlay, FaPause, FaStepForward, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { togglePlay } from '../store/playerSlice';
import { toggleFavorite } from '../store/favoritesSlice';

const MobilePlayer = () => {
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector(state => state.player);
  const favorites = useAppSelector(state => state.favorites.tracks);
  
  const isFavorite = currentTrack ? favorites.some(fav => fav.id === currentTrack.id) : false;

  if (!currentTrack) {
    return null; // Non mostrare il player se non c'è una traccia
  }

  const handleToggleFavorite = () => {
    if (currentTrack) {
      dispatch(toggleFavorite(currentTrack));
    }
  };

  return (
    <div 
      className="d-md-none position-fixed bottom-0 start-0 end-0 border-top"
      style={{ 
        backgroundColor: '#1a1a1a',
        borderTopColor: '#2a2a2a',
        zIndex: 1000,
        padding: '12px 16px'
      }}
    >
      <div className="d-flex align-items-center gap-3">
        {/* Album Cover */}
        <img 
          src={currentTrack.album.cover_small}
          alt={currentTrack.title}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '4px',
            objectFit: 'cover'
          }}
        />

        {/* Song Info */}
        <div className="flex-grow-1" style={{ minWidth: 0 }}>
          <div className="text-white" style={{ 
            fontSize: '14px', 
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {currentTrack.title}
          </div>
          <div style={{ 
            fontSize: '12px', 
            color: '#8a8a8a',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {currentTrack.artist.name}
          </div>
        </div>

        {/* Controls */}
        <div className="d-flex align-items-center gap-2">
          <button 
            onClick={handleToggleFavorite}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: isFavorite ? '#fc3c44' : '#fff',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isFavorite ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
          </button>
          <button 
            onClick={() => dispatch(togglePlay())}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <FaStepForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobilePlayer;