package com.goofygoobers.chadchess;

import com.goofygoobers.chadchess.logic.Color;
import com.goofygoobers.chadchess.logic.pieces.*;

import java.util.HashMap;

public class PieceFactory {
    private static HashMap<String, Piece> pieceMap = new HashMap<>();

    public PieceFactory() {
        pieceMap.put("white/pawn", new Pawn(Color.WHITE));
        pieceMap.put("white/rook", new Rook(Color.WHITE));
        pieceMap.put("white/bishop", new Bishop(Color.WHITE));
        pieceMap.put("white/knight", new Knight(Color.WHITE));
        pieceMap.put("white/queen", new Queen(Color.WHITE));
        pieceMap.put("white/king", new King(Color.WHITE));

        pieceMap.put("black/pawn", new Pawn(Color.BLACK));
        pieceMap.put("black/rook", new Rook(Color.BLACK));
        pieceMap.put("black/bishop", new Bishop(Color.BLACK));
        pieceMap.put("black/knight", new Knight(Color.BLACK));
        pieceMap.put("black/queen", new Queen(Color.BLACK));
        pieceMap.put("black/king", new King(Color.BLACK));
    }

    public static void createPiece(String pieceName) {
        if(!pieceMap.containsKey(pieceName)) {

        }
    }
}
