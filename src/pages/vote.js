import React, { useState } from 'react';
import { Container, Image, Button, Input } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import '../app/globals.css'

export default function Vote() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      id: 1,
      name: 'John Smith',
      description: 'Experienced financial planner',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Michael Lee',
      description: 'Tech-savvy innovator in finance',
      imageUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: 3,
      name: 'Emily Wong',
      description: 'Advocate for financial literacy',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const handleSelectCandidate = (id) => {
    setSelectedCandidate(id);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>

        <h1 style={styles.title}>Vote</h1>
        <div style={styles.candidateList}>
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              style={{
                ...styles.candidateCard,
                borderColor: selectedCandidate === candidate.id ? '#0070f3' : '#e0e0e0',
                borderWidth: selectedCandidate === candidate.id ? '2px' : '1px',
              }}
              onClick={() => handleSelectCandidate(candidate.id)}
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
              {selectedCandidate === candidate.id && (
                <div style={styles.selectedIndicator}>✔</div>
              )}
            </div>
          ))}
        </div>
        <button style={styles.submitButton}>Submit Vote</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 50,
    height: '100vh',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  candidateList: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  candidateCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    position: 'relative',
  },
  candidateImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  candidateInfo: {
    flex: 1,
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
  selectedIndicator: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '24px',
    color: '#0070f3',
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
