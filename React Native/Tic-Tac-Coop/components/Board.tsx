import React from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "@/components/Header";
import { Square } from "@/components/Square";
import { BoardRow } from "@/components/BoardRow";

import { calculateWinner } from "@/utils";

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onRestart: () => void;
  onPlay: (squares: Array<string | null>) => void;
}

export const Board: React.FC<BoardProps> = ({ xIsNext, squares, onRestart, onPlay }) => {
  const onPressHandler = (index: number) => () => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "🐓" : "🦊";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner === "🐓" ? "La 🐓 fue más ágil" : "El 🦊 se comió a la gallina";
  } else if (squares.every(square => square !== null)) {
    status = "Juego empatado";
  } else {
    status = `Próximo Jugador: ${xIsNext ? "🐓" : "🦊"}`;
  }

  return (
    <>
      <Header status={status} onRefreshPress={onRestart} />
      <View style={styles.boardContainer}>
        <BoardRow>
          <Square value={squares[0]} onSquarePress={onPressHandler(0)} />
          <Square value={squares[1]} onSquarePress={onPressHandler(1)} />
          <Square value={squares[2]} onSquarePress={onPressHandler(2)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[3]} onSquarePress={onPressHandler(3)} />
          <Square value={squares[4]} onSquarePress={onPressHandler(4)} />
          <Square value={squares[5]} onSquarePress={onPressHandler(5)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[6]} onSquarePress={onPressHandler(6)} />
          <Square value={squares[7]} onSquarePress={onPressHandler(7)} />
          <Square value={squares[8]} onSquarePress={onPressHandler(8)} />
        </BoardRow>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    flex: 0.8,
  },
});