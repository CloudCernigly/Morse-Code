import {Container, Button, InputText, InputGroup, Form} from 'react-bootstrap';
import React, { useState } from 'react';

import '../components/style.css';
import { Link } from 'react-router-dom';

const Home=()=>{

    const [messageContent, setMessageContent] = useState('')
    const [showDiv, setshowDiv] = useState(false);

    const handleInputChange = (event) => {
        setMessageContent(event.target.value);
      };

  function sendWhiteSignal(duration) {
    console.log(`Segnale bianco per ${duration} secondi`);
    setshowDiv(true);
    console.log(showDiv);

    setTimeout(()=>{
        setshowDiv=false;
        /*setTimeout(sendNextSignal, 1000);*/
    }, duration);

    console.log(showDiv);
    //setshowDiv(false);
    //console.log(showDiv);
    //setTimeout(1000);

        }



function sendMorseSignal(morseCode) {
    let currentIndex = 0;
    
    const sendNextSignal = () => {
        if (currentIndex < morseCode.length) {
        const morseChar = morseCode[currentIndex];
        if (morseChar === '.') {
            sendWhiteSignal(500); // Illuminazione per 500 millisecondi per un punto
        } else if (morseChar === '-') {
            sendWhiteSignal(1300); // Illuminazione per 1300 millisecondi per un trattino
        }
        currentIndex++;
        }
    };

    sendNextSignal();
}

  const submitMessage=(event)=>{
    event.preventDefault();
    let message=messageContent;
    console.log(textToMorse(message));
    sendMorseSignal(textToMorse(message))
  }

const morseAlphabet = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/',
  };
  
  function textToMorse(text) {
    text = text.toUpperCase();
    let morseCode = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char in morseAlphabet) {
        morseCode += morseAlphabet[char] + ' ';
      } else if (char === '\n') {
        morseCode += '\n';
      } else {
        morseCode += char;
      }
    }
  
    return morseCode;
  }

    return (
        <>

        <Container className='py-5'>
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

    <form onSubmit={submitMessage}>
        <input
          type="text"
          placeholder="Inserisci una stringa"
          value={messageContent}
          onChange={handleInputChange}

        />
        <button type="submit">Invia</button>
      </form>


      <Link to={`/tap-mode`}>
      <Button  className="">
        Tap mode
      </Button>
      </Link>
      <Link to={`/messages`}>
      <Button  className="">
       Get messages
      </Button>
      </Link>
        </Container>


        </>
)

}
export default Home;
