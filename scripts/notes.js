const offsets = {
    sharp: { x: 0, y: 0 },
    flat: { x: 0, y: 0 },
    natural: { x: 0, y: 0 },
};
const OFFSET = 0;

export const notes = [

    { name: 'C♯', position: (180 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'C', position: (180 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'C♭', position: (180 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },
    { name: 'D♯', position: (170 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'D', position: (170 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'D♭', position: (170 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'E♯', position: (160 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'E', position: (160 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'E♭', position: (160 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'F♯', position: (150 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'F', position: (150 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'F♭', position: (150 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'G♯', position: (140 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'G', position: (140 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'G♭', position: (140 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'A♯', position: (130 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'A', position: (130 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'A♭', position: (130 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'B♯', position: (120 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'B', position: (120 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'B♭', position: (120 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    // Bas klič

    { name: 'c♯', position: (110 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'c', position: (110+ OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'c♭', position: (110 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'd♯', position: (100 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'd', position: (100 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'd♭', position: (100 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'e♯', position: (90 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'e', position: (90 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'e♭', position: (90 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'f♯', position: (80 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'f', position: (80 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'f♭', position: (80 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'g♯', position: (70 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'g', position: (70 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'g♭', position: (70 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'a♯', position: (60 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'a', position: (60 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'a♭', position: (60 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'b♯', position: (50 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'b', position: (50 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'b♭', position: (50 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    { name: 'c1♯', position: (40 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'bass' },
    { name: 'c1', position: (40 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'bass' },
    { name: 'c1♭', position: (40 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'bass' },

    // Hous klič

    { name: 'c1♯', position: (0 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'c1', position: (0 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'c1♭', position: (0 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'd1♯', position: (-10 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'd1', position: (-10 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'd1♭', position: (-10 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'e1♯', position: (-20 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'e1', position: (-20 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'e1♭', position: (-20 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'f1♯', position: (-30 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'f1', position: (-30 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'f1♭', position: (-30 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'g1♯', position: (-40 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'g1', position: (-40 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'g1♭', position: (-40 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'a1♯', position: (-50 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'a1', position: (-50 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'a1♭', position: (-50 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'b1♯', position: (-60 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'b1', position: (-60 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'b1♭', position: (-60 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    // Druhá oktáva

    { name: 'c2♯', position: (-70 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'c2', position: (-70 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'c2♭', position: (-70 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'd2♯', position: (-80 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'd2', position: (-80 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'd2♭', position: (-80 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'e2♯', position: (-90 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'e2', position: (-90 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'e2♭', position: (-90 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'f2♯', position: (-100 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'f2', position: (-100 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'f2♭', position: (-100 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'g2♯', position: (-110 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'g2', position: (-110 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'g2♭', position: (-110 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'a2♯', position: (-120 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'a2', position: (-120 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'a2♭', position: (-120 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},

    { name: 'b2♯', position: (-130 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp, clef: 'treble' },
    { name: 'b2', position: (-130 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural, clef: 'treble' },
    { name: 'b2♭', position: (-130 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat, clef: 'treble'},


];