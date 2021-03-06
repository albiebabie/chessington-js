export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasEverMoved = false;
    }

    getAvailableMoves(board) {
        throw new Error("This method must be implemented, and return a list of available moves");
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        this.hasEverMoved = true;
        board.movePiece(currentSquare, newSquare);
    }

    myPos(board) {
        return board.findPiece(this);
    }
}
