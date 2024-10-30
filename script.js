let currentNote = '';
let wrongNotes = new Set(); // Set pro uchování špatně určených not

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
//druha
   //     { name: 'C2#', position: '15%' },
   //     { name: 'C2', position: '15%' },
 //       { name: 'C2♭', position: '15%' },
//
  //    { name: 'D2#', position: '10%' },
 //     { name: 'D2', position: '10%' },
 //     { name: 'D2♭', position: '10%' },

 //     { name: 'E2#', position: '5%' },
 //       { name: 'E2', position: '5%' },
 //       { name: 'E2♭', position: '5%' },

  //      { name: 'F2#', position: '15%' },
 //       { name: 'F2', position: '25%' },
  //      { name: 'F2♭', position: '60%' },

 //       { name: 'G2#', position: '10%' },
  //      { name: 'G2', position: '20%' },
  //      { name: 'G2♭', position: '65%' },

  //      { name: 'A2#', position: '5%' },
  //      { name: 'A2', position: '15%' },
  //      { name: 'A2♭', position: '70%' },

  //      { name: 'B2#', position: '0%' },
   //     { name: 'B2', position: '10%' },
  //      { name: 'B2♭', position: '75%' },
        
        
        
        

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
