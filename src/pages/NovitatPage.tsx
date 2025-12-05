import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Carousel } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import RadioStationCard from '../components/RadioStationCard';
import EpisodeCard from '../components/EpisodeCard';
import AlbumCard from '../components/AlbumCard';
import chillImage from '../assets/images/1a.png';
import musicaUnoImage from '../assets/images/1b.png'
import episode1 from '../assets/images/2a.png';
import episode2 from '../assets/images/2b.png';
import episode3 from '../assets/images/2c.png';
import episode4 from '../assets/images/2d.png';
import episode5 from '../assets/images/2e.png';
import { DeezerTrack } from '../types/deezer';

const NovitatPage = () => {
  const [newReleases, setNewReleases] = useState<DeezerTrack[]>([]);
  const [loading, setLoading] = useState(true);

  const exploreLinks = [
    ['Esplora per genere', 'Worldwide', 'Video musicali'],
    ['Decenni', 'Classifiche', 'Nuovi artisti'],
    ['Attività e stati d\'animo', 'Audio spaziale', 'Hit del passato']
  ];

  const episodes = [
    { title: 'Prologo con Abuelo', backgroundColor: '#d32f2f', imageUrl: episode1 },
    { title: 'The Wanderer', backgroundColor: '#7b1fa2', imageUrl: episode2 },
    { title: 'Michael Bublé, Carly Pearce & Zaïre Lowe', backgroundColor: '#303f9f', imageUrl: episode3 },
    { title: 'Stephan Moccio: The Zane Lowe Interview', backgroundColor: '#0288d1', imageUrl: episode4 },
    { title: 'Chart Spotlight: Julia Michaels', backgroundColor: '#00796b', imageUrl: episode5 }
  ];

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        setLoading(true);
        const queries = ['pop 2024', 'rock', 'hip hop', 'electronic'];
        const randomQuery = queries[Math.floor(Math.random() * queries.length)];
        
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomQuery}`
        );
        const data = await response.json();
        
        // Prendi i primi 10 risultati unici per album
        const uniqueAlbums = data.data
          .filter((track: DeezerTrack, index: number, self: DeezerTrack[]) => 
            index === self.findIndex((t) => t.album.cover_medium === track.album.cover_medium)
          )
          .slice(0, 10);
        
        setNewReleases(uniqueAlbums);
      } catch (error) {
        console.error('Errore nel caricamento delle nuove uscite:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewReleases();
  }, []);

  return (
    <div className="text-light" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Container fluid className="px-4 py-4">
        {/* Title */}
        <h1 className="mb-4" style={{ fontSize: '36px', fontWeight: 700 }}>Novità</h1>

        {/* Featured Radio Stations */}
        <div className="mb-5">
          {/* Desktop - Grid normale */}
          <Row className="g-3 d-none d-md-flex">
            <Col xs={12} md={6}>
              <RadioStationCard
                title="Chill"
                subtitle="NUOVA STAZIONE RADIO"
                description="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                backgroundColor="#5B9FD8"
                imageUrl={chillImage}
                large
              />
            </Col>
            <Col xs={12} md={6}>
              <RadioStationCard
                title="MÚSICA UNO"
                subtitle="NUOVA STAZIONE RADIO"
                description="Ecco la nuova casa della musica latina"
                backgroundColor="#E91E63"
                imageUrl={musicaUnoImage}
                large
              />
            </Col>
          </Row>

          {/* Mobile - Carousel */}
          <Carousel 
            className="d-md-none"
            interval={null}
            indicators={true}
            controls={false}
          >
            <Carousel.Item>
              <RadioStationCard
                title="Chill"
                subtitle="NUOVA STAZIONE RADIO"
                description="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                backgroundColor="#5B9FD8"
                imageUrl={chillImage}
                large
              />
            </Carousel.Item>
            <Carousel.Item>
              <RadioStationCard
                title="MÚSICA UNO"
                subtitle="NUOVA STAZIONE RADIO"
                description="Ecco la nuova casa della musica latina"
                backgroundColor="#E91E63"
                imageUrl={musicaUnoImage}
                large
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* New Radio Episodes */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="mb-0" style={{ fontSize: '22px', fontWeight: 700 }}>
              Nuovi episodi radio
            </h3>
            <FaChevronRight style={{ color: '#fc3c44', fontSize: '14px', cursor: 'pointer' }} />
          </div>
          <Row className="g-3">
            {episodes.map((episode, index) => (
              <Col key={index} xs={6} sm={6} md={4} lg={2} style={{ minWidth: '180px' }}>
                <EpisodeCard {...episode} />
              </Col>
            ))}
          </Row>
        </div>

        {/* New Releases */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="mb-0" style={{ fontSize: '22px', fontWeight: 700 }}>
              Nuove uscite
            </h3>
            <FaChevronRight style={{ color: '#fc3c44', fontSize: '14px', cursor: 'pointer' }} />
          </div>
          
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
              <Spinner animation="border" variant="light" />
            </div>
          ) : (
            <Row className="g-3">
              {newReleases.map((track) => (
                <Col key={track.id} xs={4} sm={4} md={3} lg={2} style={{ minWidth: '150px' }}>
                  <AlbumCard track={track} />
                </Col>
              ))}
            </Row>
          )}
        </div>

        {/* Explore More */}
        <div className="mb-5">
          <h3 className="mb-4" style={{ fontSize: '22px', fontWeight: 700 }}>
            Altro da esplorare
          </h3>
          {exploreLinks.map((row, rowIndex) => (
            <Row key={rowIndex} className="g-3 mb-3">
              {row.map((link, colIndex) => (
                <Col key={colIndex} xs={12} md={4}>
                  <div 
                    className="rounded d-flex align-items-center justify-content-between p-3"
                    style={{ 
                      backgroundColor: '#1a1a1a',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
                  >
                    <span style={{ color: '#fc3c44', fontWeight: 600, fontSize: '14px' }}>
                      {link}
                    </span>
                    <FaChevronRight style={{ color: '#8a8a8a', fontSize: '14px' }} />
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>

        {/* Footer */}
        <div style={{ 
          borderTop: '1px solid #2a2a2a',
          paddingTop: '30px',
          marginTop: '50px'
        }}>
          <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: '12px', color: '#8a8a8a' }}>
            <span>Italia</span>
            <span>English (UK)</span>
          </div>
          <div className="mb-3" style={{ fontSize: '12px', color: '#8a8a8a' }}>
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </div>
          <div className="d-flex flex-wrap gap-3" style={{ fontSize: '12px', color: '#8a8a8a' }}>
            <a href="#" style={{ color: '#8a8a8a', textDecoration: 'none' }}>Condizioni dei servizi internet</a>
            <a href="#" style={{ color: '#8a8a8a', textDecoration: 'none' }}>Apple Music e privacy</a>
            <a href="#" style={{ color: '#8a8a8a', textDecoration: 'none' }}>Avviso sui cookie</a>
            <a href="#" style={{ color: '#8a8a8a', textDecoration: 'none' }}>Supporto</a>
            <a href="#" style={{ color: '#8a8a8a', textDecoration: 'none' }}>Feedback</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NovitatPage;