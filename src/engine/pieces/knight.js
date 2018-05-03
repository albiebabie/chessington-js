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
            if (!this.moveIsAvailable(move)) {
                availableMoves.push(move);
            }
        });
        return availableMoves;
    }

    moveIsAvailable(move) {
        if (move.row > GameSettings.BOARD_SIZE || move.col < GameSettings.BOARD_SIZE) {
            return false;
        } else if (move.row < 0 || move.col > 0) {
            return false;
        } else {
            return true;
        }
    }

    getAllMoves(board) {
        const moveOne = this.getMoveOne(board);
        const moveTwo = this.getMoveTwo(board);
        const moveThree = this.getMoveThree(board);
        const moveFour = this.getMoveFour(board);
        const moveFive = this.getMoveFive(board);
        const moveSix = this.getMoveSix(board);
        const moveSeven = this.getMoveSeven(board);
        const moveEight = this.getMoveEight(board);
        return [moveOne, moveTwo, moveThree, moveFour, moveFive, moveSix, moveSeven, moveEight];
    }

    getMoveOne(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveRightNSteps(currentSquare, 1);
        return this.moveUpNSteps(newSquare, 2);
    }

    getMoveTwo(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveRightNSteps(currentSquare, 2);
        return this.moveUpNSteps(newSquare, 1);
    }

    getMoveThree(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveRightNSteps(currentSquare, 1);
        return this.moveDownNSteps(newSquare, 2);
    }

    getMoveFour(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveRightNSteps(currentSquare, 2);
        return this.moveDownNSteps(newSquare, 1);
    }

    getMoveFive(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveLeftNStep(currentSquare, 1);
        return this.moveDownNSteps(newSquare, 2);
    }

    getMoveSix(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveLeftNStep(currentSquare, 2);
        return this.moveDownNSteps(newSquare, 1);
    }
    getMoveSeven(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveLeftNStep(currentSquare, 2);
        return this.moveUpNSteps(newSquare, 1);
    }
    getMoveEight(board) {
        const currentSquare = this.myPos(board);
        const newSquare = this.moveLeftNStep(currentSquare, 1);
        return this.moveUpNSteps(newSquare, 2);
    }

    moveRightNSteps(square, n) {
        return Square.at(square.row, square.col + n);
    }

    moveUpNSteps(square, n) {
        return Square.at(square.row + n, square.col);
    }

    moveDownNSteps(square, n) {
        return Square.at(square.row - n, square.col);
    }

    moveLeftNStep(square, n) {
        return Square.at(square.row, square.col - n);
    }
}
