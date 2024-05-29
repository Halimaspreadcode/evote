// src/pages/candidat.js
import React, { useState } from 'react';
import { Container, Image, Button, Card } from '@nextui-org/react';
import CustomNavbar from '../../components/CustomNavbar';

export default function Candidat() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const candidates = [
    {
      id: 1,
      name: 'John Smith',
      description: 'Experienced financial planner',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Biographie de John Smith...',
      cursus: 'Cursus de John Smith...',
      program: 'Programme de John Smith...'
    },
    {
      id: 2,
      name: 'Michael Lee',
      description: 'Tech-savvy innovator in finance',
      imageUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
      bio: 'Biographie de Michael Lee...',
      cursus: 'Cursus de Michael Lee...',
      program: 'Programme de Michael Lee...'
    },
    {
      id: 3,
      name: 'Emily Wong',
      description: 'Advocate for financial literacy',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Biographie d\'Emily Wong...',
      cursus: 'Cursus d\'Emily Wong...',
      program: 'Programme d\'Emily Wong...'
    },
  ];

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1 style={styles.title}>À la rencontre des candidats</h1>
        <p style={styles.subtitle}>Get to know the nominee profiles & make an informed decision.</p>
        <div style={styles.candidateList}>
          {candidates.map((candidate) => (
            <Card
              key={candidate.id}
              style={{
                ...styles.candidateCard,
                borderColor: selectedCandidate?.id === candidate.id ? '#0070f3' : '#e0e0e0',
              }}
              onClick={() => handleSelectCandidate(candidate)}
            >
              <Image
                src={candidate.imageUrl}
                alt={candidate.name}
                style={styles.candidateImage}
              />
              <div style={styles.candidateInfo}>
                <h2 style={styles.candidateName}>{candidate.name}</h2>
                <p style={styles.candidateDescription}>{candidate.description}</p>
              </div>
            </Card>
          ))}
        </div>
        {selectedCandidate && (
          <div style={styles.selectedCandidate}>
            <Image
              src={selectedCandidate.imageUrl}
              alt={selectedCandidate.name}
              style={styles.selectedCandidateImage}
            />
            <h2>{selectedCandidate.name}</h2>
            <div>
              <h3>Biographie</h3>
              <p>{selectedCandidate.bio}</p>
              <h3>Cursus</h3>
              <p>{selectedCandidate.cursus}</p>
              <h3>Programme</h3>
              <p>{selectedCandidate.program}</p>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

const styles = {
  title: {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: '20px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#555',
  },
  candidateList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  candidateCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    width: '200px',
  },
  candidateImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  candidateInfo: {
    textAlign: 'center',
  },
  candidateName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  candidateDescription: {
    fontSize: '14px',
    color: '#555',
    margin: 0,
  },
  selectedCandidate: {
    marginTop: '40px',
    textAlign: 'center',
  },
  selectedCandidateImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
};
