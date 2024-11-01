import { notes } from './scripts/notes.js';
import { validNotes } from './scripts/validnotes.js';
let currentNote = '';
let wrongNotes = new Set(); 

function generateRandomNote() {

    const randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex].name;
    
    
    const noteDisplay = document.getElementById('noteDisplay');
    noteDisplay.innerText = currentNote; 
    noteDisplay.style.top = notes[randomIndex].position;
    
   // noteDisplay.style.position = 'relative';
    noteDisplay.style.left = '50%';
    noteDisplay.style.transform = 'translateX(-50%)';
    

    noteDisplay.style.backgroundImage = `url(${notes[randomIndex].img})`;
    noteDisplay.style.backgroundSize = '20%';
    noteDisplay.style.backgroundRepeat = 'no-repeat';
    noteDisplay.style.backgroundPosition = '150px center'; 
    
    noteDisplay.style.lineHeight = '200px';
    noteDisplay.style.height = '200px';
    noteDisplay.style.width = '300px'; 
   // noteDisplay.style.top = '40px'
    
    
    const buttons = document.querySelectorAll('.note-button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.style.backgroundColor = '';
    });
    
    
    wrongNotes.clear();
    

}

function checkNote(selectedNote) {
    const buttons = document.querySelectorAll('.note-button');

    // Určení tlačítek
    

    
    if (validNotes[selectedNote] && validNotes[selectedNote].includes(currentNote)) {
        
        buttons.forEach(button => {
            if (button.innerText === selectedNote) {
                button.classList.add('correct');
                button.style.backgroundColor = 'green';
            }
        });

        setTimeout(() => {
            generateRandomNote(); 
        }, 200); // 0.5 sekundy

    
        wrongNotes.clear();
    } else {
       
        wrongNotes.add(selectedNote); 

        buttons.forEach(button => {
            if (button.innerText === selectedNote) {
                button.classList.add('wrong');
                button.style.backgroundColor = 'red'; 
            }
        });

        
        buttons.forEach(button => {
            if (wrongNotes.has(button.innerText)) {
                button.classList.add('wrong');
                button.style.backgroundColor = 'red'; 
            }
        });
    }
}

window.onload = generateRandomNote;  
window.checkNote = checkNote;