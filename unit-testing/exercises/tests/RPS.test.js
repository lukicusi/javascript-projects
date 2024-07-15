const { whoWon } = require('../RPS.js'); 

describe("whoWon", function() {
    test("returns 'TIE!' when both players make the same selection", function() {
        let output = whoWon('rock','rock'); 
        expect(output).toBe('TIE!'); 
    });

    test("returns 'Player 2 wins!' when player 2's paper beats rock", function() {
        let output = whoWon('rock','paper'); 
        expect(output).toBe('Player 2 wins!'); 
    });

    test("returns 'Player 1 wins!' when player 1's paper beats rock", function() {
        let output = whoWon('paper','rock'); 
        expect(output).toBe('Player 1 wins!'); 
    });

    test("returns 'Player 2 wins!' when player 2's scissors beats paper", function() {
        let output = whoWon('paper','scissors'); 
        expect(output).toBe('Player 2 wins!');
    });

    test("returns 'Player 1 wins!' when player 1's scissors beats paper", function() {
        let output = whoWon('scissors','paper');
        expect(output).toBe('Player 1 wins!'); 
    });

    test("returns 'Player 2 wins!' when player 2's rock beats scissors", function() {
        let output = whoWon('scissors','rock'); 
        expect(output).toBe('Player 2 wins!'); 
    });

    test("returns 'Player 1 wins!' when player 1's rock beats scissors", function() {
        let output = whoWon('rock','scissors'); 
        expect(output).toBe('Player 1 wins!');
    });

});