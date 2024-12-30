

declare class BookDataOption {
  public id: string
  public name: string
  public lastChapter: number
  public abbreviation: string
}

export default function GetBookData() : BookDataOption[] {
  return [
    { id: '1',  name: 'Genesis',         lastChapter: 50,  abbreviation: 'Gen' },
    { id: '2',  name: 'Exodus',          lastChapter: 49,  abbreviation: 'Ex' },
    { id: '3',  name: 'Leviticus',       lastChapter: 48,  abbreviation: 'Lev' },
    { id: '4',  name: 'Numbers',         lastChapter: 47,  abbreviation: 'Num' },
    { id: '5',  name: 'Deuteronomy',     lastChapter: 34,  abbreviation: 'Deut' },
    { id: '6',  name: 'Joshua',          lastChapter: 24,  abbreviation: 'Josh' },
    { id: '7',  name: 'Judges',          lastChapter: 21,  abbreviation: 'Judg' },
    { id: '8',  name: 'Ruth',            lastChapter: 4,   abbreviation: 'Ruth' },
    { id: '9',  name: '1 Samuel',        lastChapter: 31,  abbreviation: '1 Sam' },
    { id: '10', name: '2 Samuel',        lastChapter: 24,  abbreviation: '2 Sam' },
    { id: '11', name: '1 Kings',         lastChapter: 22,  abbreviation: '1 Kgs' },
    { id: '12', name: '2 Kings',         lastChapter: 25,  abbreviation: '2 Kgs' },
    { id: '13', name: '1 Chronicles',    lastChapter: 29,  abbreviation: '1 Chr' },
    { id: '14', name: '2 Chronicles',    lastChapter: 36,  abbreviation: '2 Chr' },
    { id: '15', name: 'Ezra',            lastChapter: 10,  abbreviation: 'Ezra' },
    { id: '16', name: 'Nehemiah',        lastChapter: 13,  abbreviation: 'Neh' },
    { id: '17', name: 'Esther',          lastChapter: 10,  abbreviation: 'Esth' },
    { id: '18', name: 'Job',             lastChapter: 42,  abbreviation: 'Job' },
    { id: '19', name: 'Psalm',           lastChapter: 150, abbreviation: 'Ps' },
    { id: '20', name: 'Proverbs',        lastChapter: 31,  abbreviation: 'Prov' },
    { id: '21', name: 'Ecclesiastes',    lastChapter: 12,  abbreviation: 'Eccl' },
    { id: '22', name: 'Song of Solomon', lastChapter: 8,   abbreviation: 'Song' },
    { id: '23', name: 'Isaiah',          lastChapter: 66,  abbreviation: 'Isa' },
    { id: '24', name: 'Jeremiah',        lastChapter: 52,  abbreviation: 'Jer' },
    { id: '25', name: 'Lamentations',    lastChapter: 5,   abbreviation: 'Lam' },
    { id: '26', name: 'Ezekiel',         lastChapter: 48,  abbreviation: 'Ezek' },
    { id: '27', name: 'Daniel',          lastChapter: 12,  abbreviation: 'Dan' },
    { id: '28', name: 'Hosea',           lastChapter: 14,  abbreviation: 'Hos' },
    { id: '29', name: 'Joel',            lastChapter: 3,   abbreviation: 'Joel' },
    { id: '30', name: 'Amos',            lastChapter: 9,   abbreviation: 'Amos' },
    { id: '31', name: 'Obadiah',         lastChapter: 1,   abbreviation: 'Obad' },
    { id: '32', name: 'Jonah',           lastChapter: 4,   abbreviation: 'Jonah' },
    { id: '33', name: 'Micah',           lastChapter: 7,   abbreviation: 'Mic' },
    { id: '34', name: 'Nahum',           lastChapter: 3,   abbreviation: 'Nah' },
    { id: '35', name: 'Habbakuk',        lastChapter: 3,   abbreviation: 'Hab' },
    { id: '36', name: 'Zephaniah',       lastChapter: 3,   abbreviation: 'Zeph' },
    { id: '37', name: 'Haggai',          lastChapter: 2,   abbreviation: 'Hag' },
    { id: '38', name: 'Zechariah',       lastChapter: 14,  abbreviation: 'Zech' },
    { id: '39', name: 'Malachi',         lastChapter: 4,   abbreviation: 'Mal' },
    { id: '40', name: 'Matthew',         lastChapter: 28,  abbreviation: 'Matt' },
    { id: '41', name: 'Mark',            lastChapter: 16,  abbreviation: 'Mark' },
    { id: '42', name: 'Luke',            lastChapter: 24,  abbreviation: 'Luke' },
    { id: '43', name: 'John',            lastChapter: 21,  abbreviation: 'John' },
    { id: '44', name: 'Acts',            lastChapter: 28,  abbreviation: 'Acts' },
    { id: '45', name: 'Romans',          lastChapter: 16,  abbreviation: 'Rom' },
    { id: '46', name: '1 Corinthians',   lastChapter: 16,  abbreviation: '1 Cor' },
    { id: '47', name: '2 Corinthians',   lastChapter: 13,  abbreviation: '2 Cor' },
    { id: '48', name: 'Galatians',       lastChapter: 6,   abbreviation: 'Gal' },
    { id: '49', name: 'Ephesians',       lastChapter: 6,   abbreviation: 'Eph' },
    { id: '50', name: 'Philippians',     lastChapter: 4,   abbreviation: 'Phil' },
    { id: '51', name: 'Colossians',      lastChapter: 4,   abbreviation: 'Col' },
    { id: '52', name: '1 Thessalonians', lastChapter: 5,   abbreviation: '1 Thess' },
    { id: '53', name: '2 Thessalonians', lastChapter: 3,   abbreviation: '2 Thess' },
    { id: '54', name: '1 Timothy',       lastChapter: 6,   abbreviation: '1 Tim' },
    { id: '55', name: '2 Timothy',       lastChapter: 4,   abbreviation: '2 Tim' },
    { id: '56', name: 'Titus',           lastChapter: 3,   abbreviation: 'Titus' },
    { id: '57', name: 'Philemon',        lastChapter: 1,   abbreviation: 'Phlm' },
    { id: '58', name: 'Hebrews',         lastChapter: 13,  abbreviation: 'Heb' },
    { id: '59', name: 'James',           lastChapter: 5,   abbreviation: 'Jas' },
    { id: '60', name: '1 Peter',         lastChapter: 5,   abbreviation: '1 Pet' },
    { id: '61', name: '2 Peter',         lastChapter: 3,   abbreviation: '2 Pet' },
    { id: '62', name: '1 John',          lastChapter: 5,   abbreviation: '1 John' },
    { id: '63', name: '2 John',          lastChapter: 1,   abbreviation: '2 John' },
    { id: '64', name: '3 John',          lastChapter: 1,   abbreviation: '3 John' },
    { id: '65', name: 'Jude',            lastChapter: 1,   abbreviation: 'Jude' },
    { id: '66', name: 'Revelation',      lastChapter: 22,  abbreviation: 'Rev' }
  ]
}
