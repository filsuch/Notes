let currentNote = '';

function generateRandomNote() {
      const notes = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 
                   'C', 'D', 'E', 'F', 'G', 'A', 'B', 
                   'C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭'];
    currentNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById('noteDisplay').innerText = currentNote;

    // Reset tlačítek na výchozí styl
    const buttons = document.querySelectorAll('.note-button');
    buttons.forEach(button => button.classList.remove('correct', 'wrong'));
}

function checkNote(selectedNote) {
    const buttons = document.querySelectorAll('.note-button');
    const selectedButton = Array.from(buttons).find(button => button.innerText === selectedNote);

    if (selectedNote === currentNote) {
        // Pokud je odpověď správná, označí tlačítko zeleně
        selectedButton.classList.add('correct');
        
        setTimeout(() => {
            generateRandomNote(); // Po krátkém zobrazení správné odpovědi se generuje nová nota
        }, 1000); // 1 sekunda pro vizuální zpětnou vazbu
    } else {
        // Pokud je odpověď špatná, označí tlačítko červeně a nechá jej tak
        selectedButton.classList.add('wrong');
    }
}

window.onload = generateRandomNote;
