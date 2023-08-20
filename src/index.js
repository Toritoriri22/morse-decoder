const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let store = {
        10: ".",
        11: "-",
    };
    let str = "0000000000";
    let result = "";
    let space = "**********";
    for (let i = 10; i <= expr.length; i += 10) {
        let tenSymbols = expr.slice(i-10, i);
        let a = "";
        if(tenSymbols === space) {
            result += ' '
        }
        for (let j = 2; j <= tenSymbols.length; j += 2) {
            let twoSymbols = tenSymbols.slice(j-2, j);
            if( twoSymbols in store) {
                a += store[twoSymbols]
            } 
        }
        
        if(a in MORSE_TABLE) {
            result += MORSE_TABLE[a]
        }
    }
    return result
}

module.exports = {
    decode
}