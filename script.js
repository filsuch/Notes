let currentNote = '';

function generateRandomNote() {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    currentNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById('noteDisplay').innerText = currentNote;
}

function checkNote(selectedNote) {
    if (selectedNote === currentNote) {
        alert("Správně!");
        generateRandomNote();
    } else {
        alert("Špatně, zkuste to znovu.");
    }
}

// Generovat první notu při načtení stránky
window.onload = generateRandomNote;
