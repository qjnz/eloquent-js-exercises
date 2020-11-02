// https://eloquentjavascript.net/02_program_structure.html

// 1. looping through a triangle
const block = '#'

function generateBlocks(level) {
  for (let i = 1; i <= level; i++) {
    console.log(block.repeat(i))
  }
}

// generateBlocks(7);

// 2. FIZZBUZZ
function fizzbuzz(from = 1, to = 100) {
  let i = from
  while (i <= to) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }

    i++
  }
}

// fizzbuzz()

// 3. Chessboard
function drawChessboard(size = 8, block = '#') {
  let board = ''

  for (let i = 0; i < size; i++) {
    if (isEven(i)) {
      // even row should draw odd blocks
      board += drawOddRow(size, block)
    } else {
      // odd row should draw even blocks
      board += drawEvenRow(size, block)
    }
  }

  console.log(board)
}

const isEven = (num) => num % 2 === 0

function drawEvenRow(size, block) {
  let row = ''
  for (let i = 0; i < size; i++) {
    if (isEven(i)) {
      row += block
    } else {
      row += ' '
    }
  }
  return row + '\n'
}

function drawOddRow(size, block) {
  let row = ''
  for (let i = 0; i < size; i++) {
    if (!isEven(i)) {
      row += block
    } else {
      row += ' '
    }
  }
  return row + '\n'
}

drawChessboard(10, '$')
