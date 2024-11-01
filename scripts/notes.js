
const offsets = {
    sharp: { x: 0, y: 0 },
    flat: { x: 0, y: 0 },
    natural: { x: 0, y: 0 },
};

/*

const OFFSET = -160;
oba zapnuté = 0
basový klíč = -160
pokud bude jen houslový tak = 0
*/
export const notes = [

    { name: 'C♯', position: (180) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'C', position: (180) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'C♭', position: (180) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },
    { name: 'D♯', position: (170) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'D', position: (170) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'D♭', position: (170) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'E♯', position: (160) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'E', position: (160) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'E♭', position: (160) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'F♯', position: (150) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'F', position: (150) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'F♭', position: (150) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'G♯', position: (140) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'G', position: (140) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'G♭', position: (140) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'A♯', position: (130) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'A', position: (130) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'A♭', position: (130) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'B♯', position: (120) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'B', position: (120) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'B♭', position: (120) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    // Bas klič

    { name: 'c♯', position: (110) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'c', position: (110) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'c♭', position: (110) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'd♯', position: (100) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'd', position: (100) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'd♭', position: (100) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'e♯', position: (90) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'e', position: (90) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'e♭', position: (90) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'f♯', position: (80) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'f', position: (80) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'f♭', position: (80) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },
 
    { name: 'g♯', position: (70) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'g', position: (70) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'g♭', position: (70) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },
    
    { name: 'a♯', position: (60) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'a', position: (60) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'a♭', position: (60) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'b♯', position: (50) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'b', position: (50) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'b♭', position: (50) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'c1♯', position: (40) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'c1', position: (40) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'c1♭', position: (40) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    // Hous klič

    { name: 'c1♯', position: (0) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'c1', position: (0) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'c1♭', position: (0) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'd1♯', position: (-10) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'd1', position: (-10) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'd1♭', position: (-10) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'e1♯', position: (-20) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'e1', position: (-20) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'e1♭', position: (-20) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'f1♯', position: (-30) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'f1', position: (-30) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'f1♭', position: (-30) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'g1♯', position: (-40) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'g1', position: (-40) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'g1♭', position: (-40) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'a1♯', position: (-50) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'a1', position: (-50) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'a1♭', position: (-50) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'b1♯', position: (-60) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'b1', position: (-60) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'b1♭', position: (-60) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    // Druhá oktáva

    { name: 'c2♯', position: (-70) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'c2', position: (-70) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'c2♭', position: (-70) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'd2♯', position: (-80) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'd2', position: (-80) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'd2♭', position: (-80) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'e2♯', position: (-90) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'e2', position: (-90) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'e2♭', position: (-90) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'f2♯', position: (-100) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'f2', position: (-100) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'f2♭', position: (-100) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'g2♯', position: (-110) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'g2', position: (-110) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'g2♭', position: (-110) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'a2♯', position: (-120) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'a2', position: (-120) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'a2♭', position: (-120) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'b2♯', position: (-130) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'b2', position: (-130) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'b2♭', position: (-130) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},


];