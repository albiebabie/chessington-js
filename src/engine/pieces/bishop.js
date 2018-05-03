import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";
import { start } from "repl";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getStepsSE(board).concat(this.getStepsNW(board));
    }

    getStartPositionSE(board) {
        const currentPosition = this.myPos(board);
        let row = currentPosition.row;
        let col = currentPosition.col;
        if (row < col) {
            row = 0;
            col = 1;
        } else if (row > col) {
            row = 1;
            col = 0;
        } else if (row === col) {
            row = 0;
            col = 0;
        }
        return Square.at(row, col);
    }
    getStartPositionNW(board) {
        const currentPosition = this.myPos(board);
        const row = currentPosition.row - currentPosition.row;
        const col = currentPosition.col + currentPosition.row;
        return Square.at(row, col);
    }

    getStepsSE(board) {
        const startPosition = this.getStartPositionSE(board);
        const currentPosition = this.myPos(board);
        let squares = [];
        let row;
        let col;
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (startPosition.row === 0 && startPosition.col === 1) {
                row = i;
                col = i + 1;
            } else if (startPosition === Square.at(1, 0)) {
                row = i + 1;
                col = i;
            } else if (startPosition === Square.at(0, 0)) {
                row = i;
                col = i;
            }
            const square = Square.at(row, col);
            if (!this.squaresContainSameRowCol(currentPosition, square) && col !== GameSettings.BOARD_SIZE) {
                squares.push(Square.at(row, col));
            }
        }
        return squares;
    }

    getStepsNW(board) {
        const startPosition = this.getStartPositionNW(board);
        const currentPosition = this.myPos(board);
        let squares = [];
        let col = startPosition.col;
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            const square = Square.at(i, col);
            if (!this.squaresContainSameRowCol(currentPosition, square) && col >= 0) {
                squares.push(square);
            }
            col -= 1;
        }
        return squares;
    }

    squaresContainSameRowCol(a, b) {
        return a.row === b.row && a.col === b.col;
    }
}
