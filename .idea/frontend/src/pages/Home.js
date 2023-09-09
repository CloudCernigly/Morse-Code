import {Container, Button, InputText, InputGroup, Form} from 'react-bootstrap';
import '../components/style.css';

const Home=()=>{

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
  
  // Esempio di utilizzo
  const inputText = "Hello, World!";
  const morseResult = textToMorse(inputText);
  console.log(morseResult);

    return (
        <>

        <Container className='py-5'>
        <InputGroup className="mb-3">
        <InputGroup.Text id="input-1">io</InputGroup.Text>
        <Form.Control
          placeholder="voglio andare in piscina"
        />
      </InputGroup>
        </Container>


        </>
)

}
export default Home;
