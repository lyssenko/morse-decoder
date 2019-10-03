const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    for (let k = 0; k < expr.split('').length / 10; k++) {
        if (createSingleWords(expr, k) == ' ') {
            result.push(' ');
        } else {
            result.push(MORSE_TABLE[createSingleWords(expr, k)]);
        }
    }
    return result.join('');
}

function createSingleWords(expr, k) {
    let b = [],
        a = expr.split('');
    for (let i = k * 10; i < (k + 1) * 10; i++) {
        b.push(a[i]);
    }
    b = ((b.slice(b.indexOf('1'), 10)).join('')).replace(/10/g, '.').replace(/11/g, '-').replace(/\*/g, ' ');
    return b;
}

module.exports = {
    decode
}