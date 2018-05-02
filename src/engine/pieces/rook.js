import Piece from "./piece";
import Player from "../player";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.direction;
    }

    getAvailableMoves(board) {
        return this.getHorizontalSteps(board).concat(this.getVerticalSteps(board));
    }

    getHorizontalSteps(board) {
        const currentPostion = this.myPos(board);
        let squares = [];
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentPostion.col) {
                squares.push(Square.at(currentPostion.row, i));
            }
        }
        return squares;
    }

    getVerticalSteps(board) {
        const currentPostion = this.myPos(board);
        let squares = [];
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentPostion.row) {
                squares.push(Square.at(i, currentPostion.col));
            }
        }
        return squares;
    }
}
