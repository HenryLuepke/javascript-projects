function makeLine(size, char = '#') {
    let line = "";
    for (let i = 0; i < size; i++)  {
        line += char;
    }

    return line;
};

console.log(makeLine(5, '!'));

function makeSquare(size, char = '#') {
    let square = "";
    for (let i = 0; i < size; i++) {
        square += makeLine(size, char);
        if (i != size - 1) {
            square += '\n';
        }
    }

    return square;
}

console.log('');
console.log(makeSquare(5, '@'));

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, char);
        if (i != height - 1) {
            rectangle += '\n';
        }
    }

    return rectangle;
}

console.log('');
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height, char = '#') {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1, char)
        if (i != height - 1) {
            stairs += '\n';
        }
    }

    return stairs;
}

console.log('');
console.log(makeDownwardStairs(5, '$'));

function spaces(num) {
    let output = '';
    for (let i = 0; i < num; i++) {
        output += ' ';
    }

    return output
}

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let spaceLine = '';

    spaceLine += spaces(numSpaces);
    spaceLine += makeLine(numChars, char);
    spaceLine += spaces(numSpaces);

    return spaceLine;
}

console.log('');
console.log(makeSpaceLine(3, 5, '%'));

function makeIsocelesTriangle(height, char = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1, char);
        if (i != height - 1) {
            triangle += '\n';
        };
    }

    return triangle
}

console.log('');
console.log(makeIsocelesTriangle(5, '^'));

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

function makeDiamond(height, char = '#') {
    let diamond = '';

    diamond += makeIsocelesTriangle(height, char);
    diamond += '\n'
    diamond += reverse(makeIsocelesTriangle(height, char));

    return diamond;
}

console.log('');
console.log(makeDiamond(5, '$'));