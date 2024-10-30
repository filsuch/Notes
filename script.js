let currentNote = '';
let wrongNotes = new Set(); // Set pro uchování špatně určených not

function generateRandomNote() {
    const notes = [
        { name: 'C#', position: '30%' },
        { name: 'D#', position: '25%' },
        { name: 'E#', position: '20%' },
        { name: 'F#', position: '15%' },
        { name: 'G#', position: '10%' },
        { name: 'A#', position: '5%' },
        { name: 'B#', position: '0%' },
        { name: 'C', position: '40%' },
        { name: 'D', position: '35%' },
        { name: 'E', position: '30%' },
        { name: 'F', position: '25%' },
        { name: 'G', position: '20%' },
        { name: 'A', position: '15%' },
        { name: 'B', position: '10%' },
        { name: 'C♭', position: '45%' },
        { name: 'D♭', position: '50%' },
        { name: 'E♭', position: '55%' },
        { name: 'F♭', position: '60%' },
        { name: 'G♭', position: '65%' },
        { name: 'A♭', position: '70%' },
        { name: 'B♭', position: '75%' },
    ];

    const randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex].name;

    // Nastavení pozice noty na notové osnově
    document.getElementById('noteDisplay').innerText = currentNote;
    document.getElementById('noteDisplay').style.top = notes[randomIndex].position;

    // Obnovení barev tlačítek
    const buttons = document.querySelectorAll('.note-button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.style.backgroundColor = ''; // Reset barev tlačítek
    });

    // Resetujeme špatné noty
    wrongNotes.clear();
}

function checkNote(selectedNote) {
    const buttons = document.querySelectorAll('.note-button');

    if (selectedNote === currentNote) {
        // Pokud je nota správná
        buttons.forEach(button => {
            if (button.innerText === selectedNote) {
                button.classList.add('correct');
                button.style.backgroundColor = 'green'; // Zelená pro správnou odpověď
            }
        });

        setTimeout(() => {
            generateRandomNote(); // Generuje novou notu
        }, 1000); // 1 sekunda pro vizuální zpětnou vazbu

        // Vyčistíme špatné noty, protože správně uhádnuta nota
        wrongNotes.clear();
    } else {
        // Pokud je nota špatná
        wrongNotes.add(selectedNote); // Přidáme špatnou notu do seznamu

        buttons.forEach(button => {
            if (button.innerText === selectedNote) {
                button.classList.add('wrong');
                button.style.backgroundColor = 'red'; // Červená pro špatnou odpověď
            }
        });

        // Označíme špatné noty, dokud nebudou správně uhádnuty
        buttons.forEach(button => {
            if (wrongNotes.has(button.innerText)) {
                button.classList.add('wrong');
                button.style.backgroundColor = 'red'; // Udržujeme červenou pro špatné noty
            }
        });
    }
}

window.onload = generateRandomNote;
