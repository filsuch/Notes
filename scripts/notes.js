const offsets = {
    sharp: { x: 0, y: 0 },
    flat: { x: 0, y: 0 },
    natural: { x: 0, y: 0 },
};
const OFFSET = 0;

export const notes = [

    { name: 'C♯', position: (180 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'C', position: (180 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'C♭', position: (180 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'D♯', position: (170 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'D', position: (170 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'D♭', position: (170 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'E♯', position: (160 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'E', position: (160 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'E♭', position: (160 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'F♯', position: (150 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'F', position: (150 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'F♭', position: (150 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'G♯', position: (140 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'G', position: (140 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'G♭', position: (140 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'A♯', position: (130 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'A', position: (130 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'A♭', position: (130 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'B♯', position: (120 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'B', position: (120 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'B♭', position: (120 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    // Bas klič

    { name: 'c♯', position: (110 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'c', position: (110+ OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'c♭', position: (110 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'd♯', position: (100 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'd', position: (100 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'd♭', position: (100 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'e♯', position: (90 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'e', position: (90 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'e♭', position: (90 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'f♯', position: (80 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'f', position: (80 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'f♭', position: (80 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'g♯', position: (70 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'g', position: (70 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'g♭', position: (70 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'a♯', position: (60 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'a', position: (60 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'a♭', position: (60 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'b♯', position: (50 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'b', position: (50 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'b♭', position: (50 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'c1♯', position: (40 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'c1', position: (40 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'c1♭', position: (40 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    // Hous klič

    { name: 'c1♯', position: (0 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'c1', position: (0 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'c1♭', position: (0 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'd1♯', position: (-10 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'd1', position: (-10 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'd1♭', position: (-10 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'e1♯', position: (-20 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'e1', position: (-20 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'e1♭', position: (-20 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'f1♯', position: (-30 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'f1', position: (-30 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'f1♭', position: (-30 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'g1♯', position: (-40 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'g1', position: (-40 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'g1♭', position: (-40 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'a1♯', position: (-50 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'a1', position: (-50 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'a1♭', position: (-50 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'b1♯', position: (-60 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'b1', position: (-60 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'b1♭', position: (-60 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    // Druhá oktáva

    { name: 'c2♯', position: (-70 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'c2', position: (-70 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'c2♭', position: (-70 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'd2♯', position: (-80 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'd2', position: (-80 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'd2♭', position: (-80 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'e2♯', position: (-90 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'e2', position: (-90 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'e2♭', position: (-90 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'f2♯', position: (-100 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'f2', position: (-100 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'f2♭', position: (-100 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'g2♯', position: (-110 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'g2', position: (-110 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'g2♭', position: (-110 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'a2♯', position: (-120 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'a2', position: (-120 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'a2♭', position: (-120 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },

    { name: 'b2♯', position: (-130 + OFFSET) + 'px', img: 'image/notex.png', offset: offsets.sharp },
    { name: 'b2', position: (-130 + OFFSET) + 'px', img: 'image/note.png', offset: offsets.natural },
    { name: 'b2♭', position: (-130 + OFFSET) + 'px', img: 'image/noteb.png', offset: offsets.flat },


];