import { notes } from './scripts/notes.js';
import { validNotes } from './scripts/validnotes.js';
let currentNote = '';
let wrongNotes = new Set(); 




function generateRandomNote() {

    const isTrebleActive = document.getElementById('trebleToggle').checked;
    const isBassActive = document.getElementById('bassToggle').checked;
    const activeNotes = notes.filter(note => 
        (note.clef === 'treble' && isTrebleActive) || (note.clef === 'bass' && isBassActive)
    );

    if (activeNotes.length === 0) return; 

    const randomIndex = Math.floor(Math.random() * activeNotes.length);
    currentNote = activeNotes[randomIndex].name;
    
    
    const noteDisplay = document.getElementById('noteDisplay');
    noteDisplay.innerText = currentNote;
//  noteDisplay.innerText = '' 
    noteDisplay.style.top = activeNotes[randomIndex].position;
    
//  noteDisplay.style.position = 'relative';
    noteDisplay.style.left = '50%';
    noteDisplay.style.transform = 'translateX(-50%)';
    

    noteDisplay.style.backgroundImage = `url(${activeNotes[randomIndex].img})`;
    noteDisplay.style.backgroundSize = '20%';
    noteDisplay.style.backgroundRepeat = 'no-repeat';
    noteDisplay.style.backgroundPosition = 'center'; 
    
    noteDisplay.style.lineHeight = '200px';
    noteDisplay.style.height = '200px';
    noteDisplay.style.width = '300px'; 
  
    
    const buttons = document.querySelectorAll('.note-button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.style.backgroundColor = '';
    });
    
    
    wrongNotes.clear();s
    updateNoteVisibility();
    

}

function checkNote(selectedNote) {
    const buttons = document.querySelectorAll('.note-button');

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

document.getElementById('trebleToggle').addEventListener('change', (event) => {
    document.getElementById('trebleClef').style.display = event.target.checked ? 'block' : 'none';
    const trebleLines = document.querySelectorAll('.treble-line');
    trebleLines.forEach(line => {
        line.style.display = event.target.checked ? 'block' : 'none';
    });
    updateNoteVisibility();
});

document.getElementById('bassToggle').addEventListener('change', (event) => {
    document.getElementById('bassClef').style.display = event.target.checked ? 'block' : 'none';
    const bassLines = document.querySelectorAll('.bass-line');
    bassLines.forEach(line => {
        line.style.display = event.target.checked ? 'block' : 'none';
    });
    updateNoteVisibility();
});





// globální 
window.onload = generateRandomNote;  
window.checkNote = checkNote;