import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const allMoves = this.getAllMoves(board);
        let availableMoves = [];
        allMoves.forEach(move => {
            if (!move.isOnTheBoard()) {
                availableMoves.push(move);
            }
        });
        return availableMoves;
    }

    getAllMoves(board) {
        let myPos = this.myPos(board);
        return [
            myPos.offSet(1, 2),
            myPos.offSet(1, -2),
            myPos.offSet(-1, 2),
            myPos.offSet(-1, -2),
            myPos.offSet(-2, 1),
            myPos.offSet(-2, -1),
            myPos.offSet(2, 1),
            myPos.offSet(2, -1)
        ];
    }
}
