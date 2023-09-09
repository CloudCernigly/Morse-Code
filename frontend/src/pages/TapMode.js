import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TapMode=()=>{

        const [showDiv, setshowDiv] = useState(false);
      
        const handleButtonClick = () => {
          setshowDiv(true);
        };
      
        const handleMouseUp = () => {
          setshowDiv(false);
        };
      
        const renderContent = () => {
          return (
            <div
              style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%', // Larghezza e altezza al 100% per coprire l'intero schermo
                  height: '100%',
                  position: 'relative', // Posizione relativa per posizionare il cerchio al centro
                }}
              >
                {showDiv && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Utilizziamo un'opacità del 70% per il cerchio
                      position: 'absolute', // Posizione assoluta per sovrapporre il cerchio
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)', // Posizioniamo il cerchio al centro
                    }}
                  ></div>
                )}
                <Button
                  onMouseDown={handleButtonClick}
                  onMouseUp={handleMouseUp}
                  className="btn-outline-light"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  Flasha
                </Button>

                <Link to={`/`}>
      <span  className="">
        Home
      </span>
      </Link>
              </div>
            </div>
          );
        };
      
        return (
          <div className="App">
            {renderContent()}
          </div>
        );
      }
export default TapMode;