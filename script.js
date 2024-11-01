import { notes } from './scripts/notes.js';
import { validNotes } from './scripts/validnotes.js';
let currentNote = '';
let wrongNotes = new Set(); 


let OFFSET = 0

function updateOffset() {
    const trebleActive = document.getElementById('trebleToggle').checked;
    const bassActive = document.getElementById('bassToggle').checked;
    const spacer = document.querySelector('.spacer');
  //  const trebleClef = document.getElementById('trebleClef');
    const bassClef = document.getElementById('bassClef');

    if (trebleActive && bassActive) {
        OFFSET = 0; // Oba klíče 
        spacer.style.height = '300px';
        bassClef.style.top = '160px';
    } else if (bassActive) {
        OFFSET = -160; // Pouze basový klíč
        spacer.style.height = '150px';
        bassClef.style.top = '0px';
    } else if (trebleActive) {
        OFFSET = 0; // Pouze houslový klíč
        spacer.style.height = '150px';
        bassClef.style.top = '160px';
    } else {
        OFFSET = 0; // Žádný klíč
        spacer.style.height = '0px';
        bassClef.style.top = '160px';
    }

    return OFFSET;
}


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
    noteDisplay.style.top = (parseInt(activeNotes[randomIndex].position) + OFFSET) + 'px';
    
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
    
    
    wrongNotes.clear();
    updateOffset();
 //   updateNoteVisibility();
    
    

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

document.getElementById('trebleToggle').addEventListener('change', updateDisplay);
document.getElementById('bassToggle').addEventListener('change', updateDisplay);

function updateDisplay() {
    const trebleActive = document.getElementById('trebleToggle').checked; 
    const bassActive = document.getElementById('bassToggle').checked; 
    noteDisplay.style.display = 'block';
    // vše on
    document.getElementById('trebleClef').style.display = 'block'; 
    document.getElementById('bassClef').style.display = 'block'; 

    const trebleLines = document.querySelectorAll('.treble-line');
    trebleLines.forEach(line => {
        line.style.display = 'block'; 
    });

    const bassLines = document.querySelectorAll('.bass-line');
    bassLines.forEach(line => {
        line.style.display = 'block';
    });

  
    if (trebleActive && bassActive) {
     
    } else if (trebleActive) {
     
        document.getElementById('bassClef').style.display = 'none'; 
        bassLines.forEach(line => {
            line.style.display = 'none'; 
        });
    } else if (bassActive) {

        document.getElementById('trebleClef').style.display = 'none';
        const bassLines = document.querySelectorAll('.bass-line');
        bassLines.forEach(line => {
            line.style.display = 'none'; 
        });
       
        trebleLines.forEach(line => {
            line.style.display = 'block'; 
        });
        
    } else {
   
        document.getElementById('trebleClef').style.display = 'none'; 
        document.getElementById('bassClef').style.display = 'none'; 
        trebleLines.forEach(line => {
            line.style.display = 'none'; 
        });
        bassLines.forEach(line => {
            line.style.display = 'none'; 
        });
        const noteDisplay = document.getElementById('noteDisplay');
        noteDisplay.style.display = 'none'; // Skryj notu
    }

    
    updateOffset();
    generateRandomNote()
}

// globální 
window.onload = generateRandomNote;  
window.checkNote = checkNote;