import React, { useState, useEffect, useRef } from 'react';
import './RealMadridTactics.css';

const RealMadridTactics = () => {
  // Match state
  const [matchTime, setMatchTime] = useState(0);
  const [isMatchLive, setIsMatchLive] = useState(false);
  const [score, setScore] = useState({ madrid: 0, opponent: 0 });
  const [matchEvents, setMatchEvents] = useState([]);
  const [momentum, setMomentum] = useState(50); // 0-100 scale
  const [isAnimatingScore, setIsAnimatingScore] = useState(false);

  // Tactical state
  const [formation, setFormation] = useState('4-3-3');
  const [pressingIntensity, setPressingIntensity] = useState('Medium');
  const [defensiveLine, setDefensiveLine] = useState('High');

  // Player state with initial positions
  const [startingXI, setStartingXI] = useState([
    { id: 1, name: 'Courtois', position: 'GK', stamina: 100, x: 10, y: 50 },
    { id: 2, name: 'Carvajal', position: 'RB', stamina: 100, x: 30, y: 80 },
    { id: 3, name: 'Rüdiger', position: 'CB', stamina: 100, x: 25, y: 60 },
    { id: 4, name: 'Alaba', position: 'CB', stamina: 100, x: 25, y: 40 },
    { id: 5, name: 'Mendy', position: 'LB', stamina: 100, x: 30, y: 20 },
    { id: 6, name: 'Valverde', position: 'CM', stamina: 100, x: 50, y: 70 },
    { id: 7, name: 'Tchouaméni', position: 'DM', stamina: 100, x: 40, y: 50 },
    { id: 8, name: 'Kroos', position: 'CM', stamina: 100, x: 50, y: 30 },
    { id: 9, name: 'Bellingham', position: 'AM', stamina: 100, x: 65, y: 50 },
    { id: 10, name: 'Vinicius', position: 'LW', stamina: 100, x: 75, y: 20 },
    { id: 11, name: 'Rodrygo', position: 'RW', stamina: 100, x: 75, y: 80 }
  ]);

  const [substitutes, setSubstitutes] = useState([
    { id: 12, name: 'Lunin', position: 'GK' },
    { id: 13, name: 'Nacho', position: 'CB' },
    { id: 14, name: 'Camavinga', position: 'CM' },
    { id: 15, name: 'Modrić', position: 'CM' },
    { id: 16, name: 'Joselu', position: 'ST' },
    { id: 17, name: 'Mbappé', position: 'LW' }
  ]);

  const [activeTracking, setActiveTracking] = useState([]);
  const matchInterval = useRef(null);
  const eventsEndRef = useRef(null);

  // Formation position mappings
  const formationPositions = {
    '4-3-3': {
      GK: { x: 10, y: 50 },
      RB: { x: 30, y: 80 },
      CB: [{ x: 25, y: 60 }, { x: 25, y: 40 }],
      LB: { x: 30, y: 20 },
      CM: [{ x: 50, y: 70 }, { x: 50, y: 30 }],
      DM: { x: 40, y: 50 },
      AM: { x: 65, y: 50 },
      LW: { x: 75, y: 20 },
      RW: { x: 75, y: 80 }
    },
    '4-4-2': {
      GK: { x: 10, y: 50 },
      RB: { x: 30, y: 80 },
      CB: [{ x: 25, y: 60 }, { x: 25, y: 40 }],
      LB: { x: 30, y: 20 },
      RM: { x: 50, y: 80 },
      CM: [{ x: 45, y: 60 }, { x: 45, y: 40 }],
      LM: { x: 50, y: 20 },
      ST: [{ x: 70, y: 35 }, { x: 70, y: 65 }]
    },
    '3-5-2': {
      GK: { x: 10, y: 50 },
      CB: [{ x: 20, y: 25 }, { x: 20, y: 50 }, { x: 20, y: 75 }],
      LWB: { x: 35, y: 15 },
      RWB: { x: 35, y: 85 },
      CM: [{ x: 50, y: 70 }, { x: 45, y: 50 }, { x: 50, y: 30 }],
      ST: [{ x: 70, y: 35 }, { x: 70, y: 65 }]
    }
  };

  // Update player positions when formation changes
  useEffect(() => {
    setStartingXI(prev => {
      const newPositions = formationPositions[formation];
      if (!newPositions) return prev;

      return prev.map(player => {
        let positionData = newPositions[player.position];

        // Handle cases where multiple players share the same position
        if (Array.isArray(positionData)) {
          // Find the index of this player among players with the same position
          const playersWithSamePosition = prev.filter(p => p.position === player.position);
          const playerIndex = playersWithSamePosition.findIndex(p => p.id === player.id);
          positionData = positionData[playerIndex] || positionData[0];
        }

        return {
          ...player,
          x: positionData?.x || player.x,
          y: positionData?.y || player.y
        };
      });
    });
  }, [formation]);

  // Scroll to bottom of events list when new events are added
  useEffect(() => {
    eventsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [matchEvents]);

  // Core match engine - runs when match is live
  useEffect(() => {
    if (!isMatchLive) {
      if (matchInterval.current) {
        clearInterval(matchInterval.current);
        matchInterval.current = null;
      }
      return;
    }

    matchInterval.current = setInterval(() => {
      setMatchTime(prev => {
        const newTime = prev + 1;

        // Stamina depletion
        if (newTime % 5 === 0) {
          setStartingXI(prev => prev.map(player => ({
            ...player,
            stamina: Math.max(player.stamina - (player.position === 'GK' ? 0.2 : 1), 60)
          })));
        }

        // Small random position adjustments to simulate movement
        if (newTime % 3 === 0) {
          setStartingXI(prev => prev.map(player => ({
            ...player,
            x: Math.min(95, Math.max(5, player.x + (Math.random() * 4 - 2))),
            y: Math.min(95, Math.max(5, player.y + (Math.random() * 4 - 2)))
          })));
        }

        // Automatic events based on time
        if (newTime === 15) {
          addMatchEvent("First tactical adjustment period");
        }

        if (newTime === 60 && substitutes.some(p => p.name === 'Mbappé')) {
          makeSubstitution('Mbappé', 'Rodrygo');
          addMatchEvent("Mbappé introduced for fresh legs!");
        }

        // Random match events
        if (Math.random() > 0.95) {
          triggerRandomEvent(newTime);
        }

        return newTime;
      });
    }, 1000);

    return () => {
      if (matchInterval.current) {
        clearInterval(matchInterval.current);
      }
    };
  }, [isMatchLive, substitutes]);

  // Formation effect - adjusts tactics when formation changes
  useEffect(() => {
    if (formation === '4-4-2') {
      setPressingIntensity('Medium');
      setDefensiveLine('Medium');
      addMatchEvent("Switched to 4-4-2: More compact shape");
    } else if (formation === '4-3-3') {
      setPressingIntensity('High');
      setDefensiveLine('High');
      addMatchEvent("Switched to 4-3-3: Attacking width");
    } else if (formation === '3-5-2') {
      setPressingIntensity('Low');
      setDefensiveLine('High');
      addMatchEvent("Switched to 3-5-2: Wingback emphasis");
    }
  }, [formation]);

  // Momentum tracker - reacts to match events
  useEffect(() => {
    if (!isMatchLive) return;

    const lastEvent = matchEvents[matchEvents.length - 1];
    if (lastEvent?.includes('goal')) {
      setMomentum(prev => (prev + 15 > 100 ? 100 : prev + 15));
    } else if (lastEvent?.includes('missed')) {
      setMomentum(prev => (prev - 10 < 0 ? 0 : prev - 10));
    }
  }, [matchEvents, isMatchLive]);

  // Helper functions
  const addMatchEvent = (event) => {
    setMatchEvents(prev => [...prev, `${matchTime}' - ${event}`]);
  };

  const triggerScoreAnimation = () => {
    setIsAnimatingScore(true);
    setTimeout(() => setIsAnimatingScore(false), 1000);
  };

  const triggerRandomEvent = (time) => {
    const events = [
      () => {
        setScore(prev => ({ ...prev, madrid: prev.madrid + 1 }));
        triggerScoreAnimation();
        addMatchEvent("GOAL! Vinicius scores a beautiful curler!");

        // Simulate goal celebration movement
        setStartingXI(prev => prev.map(player => {
          if (player.name === 'Vinicius') {
            return {
              ...player,
              x: 90,
              y: 10
            };
          }
          if (player.position !== 'GK') {
            return {
              ...player,
              x: Math.min(95, player.x + 5 + Math.random() * 10),
              y: player.y + (Math.random() * 20 - 10)
            };
          }
          return player;
        }));
      },
      () => {
        setScore(prev => ({ ...prev, opponent: prev.opponent + 1 }));
        triggerScoreAnimation();
        addMatchEvent("Opponent scores against the run of play");

        // Simulate defensive positioning after conceding
        setStartingXI(prev => prev.map(player => {
          if (player.position !== 'GK') {
            return {
              ...player,
              x: Math.max(5, player.x - 5 - Math.random() * 5)
            };
          }
          return player;
        }));
      },
      () => {
        addMatchEvent("Bellingham misses a golden opportunity!");
      },
      () => {
        const player = startingXI.find(p => p.position === 'CM');
        if (player) {
          addMatchEvent(`${player.name} with a crucial interception!`);
        }
      }
    ];

    events[Math.floor(Math.random() * events.length)]();
  };

  const makeSubstitution = (playerIn, playerOut) => {
    setStartingXI(prev => {
      const subIn = substitutes.find(p => p.name === playerIn);
      const subOutIndex = prev.findIndex(p => p.name === playerOut);

      if (subIn && subOutIndex !== -1) {
        const newXI = [...prev];
        const positionData = formationPositions[formation][subIn.position];
        let x, y;

        if (Array.isArray(positionData)) {
          // Find position of the player being substituted
          const positionIndex = prev.filter(p => p.position === subIn.position)
            .findIndex(p => p.name === playerOut);
          x = positionData[positionIndex]?.x || positionData[0]?.x || 50;
          y = positionData[positionIndex]?.y || positionData[0]?.y || 50;
        } else {
          x = positionData?.x || 50;
          y = positionData?.y || 50;
        }

        newXI[subOutIndex] = {
          ...subIn,
          stamina: 100 - (matchTime / 2), // Fresh but not 100% due to warmup
          x,
          y
        };

        setSubstitutes(prev => [
          ...prev.filter(p => p.name !== playerIn),
          { ...prev[subOutIndex], stamina: 70 }
        ]);

        addMatchEvent(`Substitution: ${playerIn} ON for ${playerOut}`);
        return newXI;
      }
      return prev;
    });
  };

  const startMatch = () => {
    setIsMatchLive(true);
    setMatchEvents(["Match started!"]);
    console.log('⚽ MATCH STARTED! All systems active');
  };

  const endMatch = () => {
    setIsMatchLive(false);
    addMatchEvent(`Match ended! Final score: ${score.madrid} - ${score.opponent}`);
    console.log('🏁 MATCH ENDED! Cleaning up all effects');
  };

  // Get position style for player
  const getPlayerStyle = (player) => ({
    left: `${player.x}%`,
    top: `${player.y}%`,
    backgroundColor: player.stamina > 80 ? 'rgba(0, 100, 255, 0.8)' :
      player.stamina > 60 ? 'rgba(255, 165, 0, 0.8)' :
        'rgba(255, 0, 0, 0.8)'
  });


  return (
    <div className="tactical-board">
      <header className="app-header">
        <div className="header-content">
          <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
            alt="Real Madrid Logo"
            className="team-logo" />
          <h1>Real Madrid Tactical Dashboard</h1>
        </div>
      </header>

      <div className="match-header">
        <div className={`scoreboard ${isAnimatingScore ? 'score-animation' : ''}`}>
          <div className="team-info home">
            <span className="team-name">Real Madrid</span>
            <span className="team-crest">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
                alt="Real Madrid Crest" />
            </span>
          </div>

          <div className="score-display">
            <span className="score">{score.madrid}</span>
            <span className="divider">-</span>
            <span className="score">{score.opponent}</span>
          </div>

          <div className="team-info away">
            <span className="team-crest">
              <img src="https://via.placeholder.com/50x50?text=Opponent"
                alt="Opponent Crest" />
            </span>
            <span className="team-name">Opponent</span>
          </div>
        </div>

        <div className="match-meta">
          <div className="match-time">
            <div className="time-display">
              <span className="time-icon">⏱️</span>
              <span className="time-value">{matchTime}'</span>
            </div>
            <div className="time-progress">
              <div className="progress-bar" style={{ width: `${(matchTime / 90) * 100}%` }}></div>
            </div>
          </div>

          <div className="momentum">
            <div className="momentum-label">Momentum</div>
            <div className="momentum-bar">
              <div
                className="momentum-fill"
                style={{ width: `${momentum}%` }}
              ></div>
              <div className="momentum-indicator" style={{ left: `${momentum}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="match-controls">
        <button
          onClick={startMatch}
          disabled={isMatchLive}
          className={`control-btn ${isMatchLive ? 'disabled' : 'start-btn'}`}
        >
          <span className="btn-icon">▶️</span>
          <span className="btn-text">Start Match</span>
        </button>

        <button
          onClick={endMatch}
          disabled={!isMatchLive}
          className={`control-btn ${!isMatchLive ? 'disabled' : 'end-btn'}`}
        >
          <span className="btn-icon">⏹️</span>
          <span className="btn-text">End Match</span>
        </button>

        <div className="formation-selector">
          <label htmlFor="formation-select">Formation:</label>
          <select
            id="formation-select"
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
            disabled={!isMatchLive}
            className="formation-dropdown"
          >
            <option value="4-3-3">4-3-3</option>
            <option value="4-4-2">4-4-2</option>
            <option value="3-5-2">3-5-2</option>
          </select>
        </div>
      </div>

      <div className="tactical-display">
        <div className="pitch-container">
          <div className="pitch">
            <div className="pitch-lines">
              <div className="center-circle"></div>
              <div className="center-line"></div>
              <div className="penalty-box home"></div>
              <div className="penalty-box away"></div>
            </div>

            {/* Visual representation of formation */}
            {formation === '4-3-3' && (
              <div className="formation-433">
                {/* GK */}
                <div className="player gk">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[0].name}</span>
                    <span className="player-position">{startingXI[0].position}</span>
                  </div>
                </div>
                {/* Defense */}
                <div className="player rb">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[1].name}</span>
                    <span className="player-position">{startingXI[1].position}</span>
                  </div>
                </div>
                <div className="player cb">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[2].name}</span>
                    <span className="player-position">{startingXI[2].position}</span>
                  </div>
                </div>
                <div className="player cb">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[3].name}</span>
                    <span className="player-position">{startingXI[3].position}</span>
                  </div>
                </div>
                <div className="player lb">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[4].name}</span>
                    <span className="player-position">{startingXI[4].position}</span>
                  </div>
                </div>
                {/* Midfield */}
                <div className="player cm">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[5].name}</span>
                    <span className="player-position">{startingXI[5].position}</span>
                  </div>
                </div>
                <div className="player dm">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[6].name}</span>
                    <span className="player-position">{startingXI[6].position}</span>
                  </div>
                </div>
                <div className="player cm">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[7].name}</span>
                    <span className="player-position">{startingXI[7].position}</span>
                  </div>
                </div>
                {/* Attack */}
                <div className="player lw">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[9].name}</span>
                    <span className="player-position">{startingXI[9].position}</span>
                  </div>
                </div>
                <div className="player am">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[8].name}</span>
                    <span className="player-position">{startingXI[8].position}</span>
                  </div>
                </div>
                <div className="player rw">
                  <div className="player-badge">
                    <span className="player-name">{startingXI[10].name}</span>
                    <span className="player-position">{startingXI[10].position}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="match-events">
          <div className="events-header">
            <h3>Match Events</h3>
            <div className="events-count">{matchEvents.length} events</div>
          </div>
          <div className="events-list">
            {matchEvents.length > 0 ? (
              matchEvents.map((event, index) => (
                <div
                  key={index}
                  className={`event ${event.includes('GOAL') ? 'goal-event' : ''}`}
                >
                  <div className="event-time">{event.split(' - ')[0]}</div>
                  <div className="event-text">{event.split(' - ')[1]}</div>
                  {event.includes('GOAL') && (
                    <div className="goal-badge">GOAL!</div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-events">No events yet</div>
            )}
            <div ref={eventsEndRef} />
          </div>
        </div>
      </div>

      <div className="player-data">
        <div className="player-stats">
          <div className="section-header">
            <h3>Starting XI</h3>
            <div className="formation-badge">{formation}</div>
          </div>
          <div className="stats-grid">
            {startingXI.map(player => (
              <div key={player.id} className="player-card">
                <div className="player-info">
                  <span className="player-name">{player.name}</span>
                  <span className="player-position">{player.position}</span>
                </div>
                <div className="stamina-display">
                  <div className="stamina-label">Stamina</div>
                  <div className="stamina-bar">
                    <div
                      className="stamina-fill"
                      style={{
                        width: `${player.stamina}%`
                      }}
                    ></div>
                    <span className="stamina-value">{Math.round(player.stamina)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="substitution-panel">
          <div className="section-header">
            <h3>Substitutes Bench</h3>
            <div className="subs-count">{substitutes.length} available</div>
          </div>
          <div className="subs-grid">
            {substitutes.map(player => (
              <div key={player.id} className="sub-card">
                <div className="sub-info">
                  <span className="sub-name">{player.name}</span>
                  <span className="sub-position">{player.position}</span>
                </div>
                <button
                  onClick={() => makeSubstitution(
                    player.name,
                    startingXI.find(p => p.position === player.position)?.name || startingXI[10].name
                  )}
                  disabled={!isMatchLive}
                  className="sub-btn"
                >
                  Substitute
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="tactical-info">
            <div className="tactical-stat">
              <span className="stat-label">Formation:</span>
              <span className="stat-value">{formation}</span>
            </div>
            <div className="tactical-stat">
              <span className="stat-label">Pressing:</span>
              <span className="stat-value">{pressingIntensity}</span>
            </div>
            <div className="tactical-stat">
              <span className="stat-label">Defensive Line:</span>
              <span className="stat-value">{defensiveLine}</span>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Real Madrid CF Tactical Dashboard
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealMadridTactics;
