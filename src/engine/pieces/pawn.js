import Piece from "./piece";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.direction = this.player === Player.WHITE ? 1 : -1;
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        return new Array(this.getOneStep(board));
    }

    getOneStep(board) {
        return this.myPos(board).offSet(this.direction, 0);
    }
}
