let currentNote = '';
let wrongNotes = new Set(); 

function generateRandomNote() {
    const notes = [
        { name: 'C', position: '45%', img: 'note.png' },
        { name: 'C#', position: '45%', img: 'note.png' },
        { name: 'C♭', position: '45%', img: 'note.png' },
    
        { name: 'D', position: '40%', img: 'note.png' },
        { name: 'D#', position: '40%', img: 'note.png' },
        { name: 'D♭', position: '40%', img: 'note.png' },
    
        { name: 'E', position: '35%', img: 'note.png' },
        { name: 'E#', position: '35%', img: 'note.png' },
        { name: 'E♭', position: '35%', img: 'note.png' },
    
        { name: 'F', position: '30%', img: 'note.png' },
        { name: 'F#', position: '30%', img: 'note.png' },
        { name: 'F♭', position: '30%', img: 'note.png' },
    
        { name: 'G', position: '25%', img: 'note.png' },
        { name: 'G#', position: '25%', img: 'note.png' },
        { name: 'G♭', position: '25%', img: 'note.png' },
    
        { name: 'A', position: '20%', img: 'note.png' },
        { name: 'A#', position: '20%', img: 'note.png' },
        { name: 'A♭', position: '20%', img: 'note.png' },
    
        { name: 'B', position: '15%', img: 'note.png' },
        { name: 'B#', position: '15%', img: 'note.png' },
        { name: 'B♭', position: '15%', img: 'note.png' },
    
        // druhá oktáva
        { name: 'C2#', position: '10%', img: 'note.png' },
        { name: 'C2', position: '10%', img: 'note.png' },
        { name: 'C2♭', position: '10%', img: 'note.png' },
    
        { name: 'D2#', position: '5%', img: 'note.png' },
        { name: 'D2', position: '5%', img: 'note.png' },
        { name: 'D2♭', position: '5%', img: 'note.png' },
    
        { name: 'E2#', position: '0%', img: 'note.png' },
        { name: 'E2', position: '0%', img: 'note.png' },
        { name: 'E2♭', position: '0%', img: 'note.png' },
    
        { name: 'F2#', position: '-5%', img: 'note.png' },
        { name: 'F2', position: '-5%', img: 'note.png' },
        { name: 'F2♭', position: '-5%', img: 'note.png' },
    
        { name: 'G2#', position: '-10%', img: 'note.png' },
        { name: 'G2', position: '-10%', img: 'note.png' },
        { name: 'G2♭', position: '-10%', img: 'note.png' },
    
        { name: 'A2#', position: '-15%', img: 'note.png' },
        { name: 'A2', position: '-15%', img: 'note.png' },
        { name: 'A2♭', position: '-15%', img: 'note.png' },
    
        { name: 'B2#', position: '-20%', img: 'note.png' },
        { name: 'B2', position: '-20%', img: 'note.png' },
        { name: 'B2♭', position: '-20%', img: 'note.png' },
    ];

    const randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex].name;
    
    
    const noteDisplay = document.getElementById('noteDisplay');
    noteDisplay.innerText = currentNote; 
    noteDisplay.style.top = notes[randomIndex].position;
    
    noteDisplay.style.position = 'relative';
    noteDisplay.style.left = '50%'; 
    noteDisplay.style.transform = 'translateX(-50%)';
    
    noteDisplay.style.backgroundImage = `url(${notes[randomIndex].img})`;
    noteDisplay.style.backgroundSize = '20%';
    noteDisplay.style.backgroundRepeat = 'no-repeat';
    noteDisplay.style.backgroundPosition = '150px center'; 
    
    noteDisplay.style.lineHeight = '20px';
    noteDisplay.style.height = '20px';
    noteDisplay.style.width = '200px'; 
    
    
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
    const validNotes = {
        'C': ['C', 'C2'],
        'C#': ['C#', 'C2#'],
        'C♭': ['C♭', 'C2♭'],
        'D': ['D', 'D2'],
        'D#': ['D#', 'D2#'],
        'D♭': ['D♭', 'D2♭'],
        'E': ['E', 'E2'],
        'E#': ['E#', 'E2#'],
        'E♭': ['E♭', 'E2♭'],
        'F': ['F', 'F2'],
        'F#': ['F#', 'F2#'],
        'F♭': ['F♭', 'F2♭'],
        'G': ['G', 'G2'],
        'G#': ['G#', 'G2#'],
        'G♭': ['G♭', 'G2♭'],
        'A': ['A', 'A2'],
        'A#': ['A#', 'A2#'],
        'A♭': ['A♭', 'A2♭'],
        'B': ['B', 'B2'],
        'B#': ['B#', 'B2#'],
        'B♭': ['B♭', 'B2♭'],
    };

    
    if (validNotes[selectedNote] && validNotes[selectedNote].includes(currentNote)) {
        
        buttons.forEach(button => {
            if (button.innerText === selectedNote) {
                button.classList.add('correct');
                button.style.backgroundColor = 'green';
            }
        });

        setTimeout(() => {
            generateRandomNote(); 
        }, 500); // 0.5 sekundy

    
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
