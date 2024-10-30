let currentNote = '';
let wrongNotes = new Set(); 

function generateRandomNote() {
    const notes = [
        { name: 'C#', position: '50%' },
        { name: 'C', position: '50%' },
        { name: 'C♭', position: '50%' },

        { name: 'D#', position: '45%' },
        { name: 'D', position: '45%' },
        { name: 'D♭', position: '45%' },

        { name: 'E#', position: '40%' },
        { name: 'E', position: '40%' },
        { name: 'E♭', position: '40%' },

        { name: 'F#', position: '35%' },
        { name: 'F', position: '35%' },
        { name: 'F♭', position: '35%' },

        { name: 'G#', position: '30%' },
        { name: 'G', position: '30%' },
        { name: 'G♭', position: '30%' },

        { name: 'A#', position: '25%' },
        { name: 'A', position: '25%' },
        { name: 'A♭', position: '25%' },

        { name: 'B#', position: '20%' },
        { name: 'B', position: '20%' },
        { name: 'B♭', position: '20%' },

        // druhá oktáva
        { name: 'C2#', position: '15%' },
        { name: 'C2', position: '15%' },
        { name: 'C2♭', position: '15%' },

        { name: 'D2#', position: '10%' },
        { name: 'D2', position: '10%' },
        { name: 'D2♭', position: '10%' },

        { name: 'E2#', position: '5%' },
        { name: 'E2', position: '5%' },
        { name: 'E2♭', position: '5%' },

        { name: 'F2#', position: '0%' },
        { name: 'F2', position: '0%' },
        { name: 'F2♭', position: '0%' },

        { name: 'G2#', position: '-5%' },
        { name: 'G2', position: '-5%' },
        { name: 'G2♭', position: '-5%%' },

        { name: 'A2#', position: '-10%' },
        { name: 'A2', position: '-10%' },
        { name: 'A2♭', position: '-10%' },

        { name: 'B2#', position: '-15%' },
        { name: 'B2', position: '-15%' },
        { name: 'B2♭', position: '-15%' },
    ];

    const randomIndex = Math.floor(Math.random() * notes.length);
    currentNote = notes[randomIndex].name;

    // Nastavení pozice noty na notové osnově
    document.getElementById('noteDisplay').innerText = currentNote;
    document.getElementById('noteDisplay').style.top = notes[randomIndex].position;

    // Tlačítečka reset
    const buttons = document.querySelectorAll('.note-button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.style.backgroundColor = '';
    });

    // Reset špatne noty
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

    // Zjistíme, zda vybraná nota odpovídá aktuální notě
    if (validNotes[selectedNote] && validNotes[selectedNote].includes(currentNote)) {
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
