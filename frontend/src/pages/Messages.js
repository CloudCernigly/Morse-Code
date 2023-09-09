import {Container, Button, InputText, InputGroup, Form} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const Messages=()=>{

    const [data, setData] = useState([]); // Stato per memorizzare i dati dall'API
    const [selectedOption, setSelectedOption] = useState(''); // Stato per la selezione corrente
  
    useEffect(() => {
      // Simulazione di una richiesta GET all'API di backend
      fetch('http://localhost:8080/v1/api')
        .then((response) => response.json())
        .then((data) => {
          setData(data); // Imposta i dati ottenuti dall'API nello stato
        })
        .catch((error) => {
          console.error('Errore nel recupero dei dati dall\'API:', error);
        });
    }, []); // L'array vuoto indica che l'effetto verrà eseguito solo al montaggio
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value); // Aggiorna la selezione corrente quando l'utente cambia l'opzione
    };
  
    return (
      <div>
        <h2>Form Select da API</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Seleziona un'opzione</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <p>Selezione corrente: {selectedOption}</p>
      </div>
    );
  }
  
export default Messages;