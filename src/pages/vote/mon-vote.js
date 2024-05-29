// src/pages/vote/mon-vote.js
import React, { useState, useEffect } from 'react';
import { Container, Image, Button, colors } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import { color } from 'framer-motion';

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

const CountdownTimer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) 
      reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([hours, minutes, seconds]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div style={styles.timerContainer}>
      <p style={styles.timerText}>Temps restant</p>
      <div style={styles.timer}>
        <span>{String(hrs).padStart(2, '0')}</span>:
        <span>{String(mins).padStart(2, '0')}</span>:
        <span>{String(secs).padStart(2, '0')}</span>
      </div>
      <div style={styles.timerLabels}>
        <span>Heures</span>
        <span>Minutes</span>
        <span>Secondes</span>
      </div>
    </div>
  );
};

const VoteResults = () => {
  return (
    <div style={styles.resultsContainer}>
      <h2 style={styles.resultsTitle}>Résultats en temps réel des votes</h2>
        {/* <p style={styles.resultsSubtitle}>Découvrez les résultats des votes en temps réel.</p> */}
      <div style={styles.resultsList}>
        {candidates.map((candidate, index) => (
          <div key={candidate.id} style={styles.resultItem}>
            <Image
              src={candidate.imageUrl}
              alt={candidate.name}
              style={styles.resultImage}
            />
            <div style={styles.resultInfo}>
              <h3 style={styles.resultName}>{candidate.name}</h3>
              <p style={styles.resultDescription}>{candidate.description}</p>
            </div>
            <div style={styles.resultVotes}>
              <span style={styles.votePercentage}>{[65, 25, 10][index]}%</span>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.totalVotes}>
        <p style={styles.voteInfo}>Nombres de votant : 780 050</p>
        <p style={styles.voteInfo} >Progession de vote: 65%</p>
      </div>
    </div>
  );
};

export default function MonVote() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleSelectCandidate = (id) => {
    setSelectedCandidate(id);
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.sectionContainer}>
          <div style={styles.leftSection}>
            <CountdownTimer hoursMinSecs={{ hours: 1, minutes: 25, seconds: 45 }} />
            <h1 style={styles.title}>Choisissez votre candidat</h1>
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
              <button style={styles.submitButton}>Valider mon Vote</button>
            </div>
          </div>
          {/* <div style={styles.rightSection}>
            <VoteResults />
          </div> */}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sectionContainer: {
    display: 'flex',
    width: '100vw',
    padding: '50px',
    margin: '0 auto',
  },
  leftSection: {
    flex: 3,
    padding: '20px',
  },
  rightSection: {
    flex: 1,
    padding: '20px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #e0e0e0',
  },
  timerContainer: {
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor: '#62bbff',
    padding: '20px',
  },
  timerText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    colors: 'white',
  },
  timer: {
    fontSize: '48px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    colors: 'white',
  },
  timerLabels: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '10px',
    fontSize: '16px',
    colors: 'white',
  },
  title: {
    marginBottom: '30px',
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '30px',
    fontWeight: 'bold',
    color: 'black',
  },
  candidateList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '0 auto',
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
    color: 'black',
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
    padding: '20px 25px',
    width: '70%',
    fontSize: '16px',
    backgroundColor: '#3babfe',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  resultsContainer: {
    textAlign: 'center',
  },
  resultsTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color : 'black'
  },
  resultsSubtitle: {
    fontSize: '16px',
    color: '#555',
  },

  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: 35,
  },
  resultItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#dbeffe',
  },
  resultImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  resultInfo: {
    flex: 1,
    textAlign: 'left',
  },
  resultName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    margin: 0,
  },
  resultDescription: {
    fontSize: '14px',
    color: '#555',
    width: '70%',
    margin: 0,
  },
  resultVotes: {
    textAlign: 'right',
  },
  votePercentage: {
    fontSize: '18px',
    fontWeight: 'bold',
    color : 'black'
  },
  voteCount: {
    fontSize: '14px',
    color: '#555',
  },
  totalVotes: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#555',
  },
  voteInfo: {
    margin: 0,
    color: 'black',
  },
};
