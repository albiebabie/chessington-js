import Piece from "./piece";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.direction = this.player === Player.WHITE ? 1 : -1;
    }

    getAvailableMoves(board) {
        let moves = [this.getOneStep(board)];
        if (!this.hasEverMoved) {
            moves.push(this.getTwoStep(board));
        }
        return moves;
    }

    getOneStep(board) {
        return this.myPos(board).offSet(this.direction, 0);
    }

    getTwoStep(board) {
        return this.myPos(board).offSet(2 * this.direction, 0);
    }
}
