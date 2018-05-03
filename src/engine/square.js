import GameSettings from "./gameSettings";

export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }

    offSet(rowDiff, colDiff) {
        return Square.at(this.row + rowDiff, this.col + colDiff);
    }

    isOnTheBoard() {
        if (this.row > GameSettings.BOARD_SIZE || this.col < GameSettings.BOARD_SIZE) {
            return false;
        } else if (this.row < 0 || this.col > 0) {
            return false;
        } else {
            return true;
        }
    }
}
