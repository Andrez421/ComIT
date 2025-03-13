import { useState } from "react";
import { StyleSheet, Modal, View, Text, FlatList, Pressable } from "react-native";
import { Board } from "./Board";
import { Footer } from "./Footer";

export const Game = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  
  const currentSquares = history[currentMove];

  const onRestartHandler = () => {
    setXIsNext(true);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (move: number) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
    setShowHistory(false);
  };

  return (
    <>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onRestart={onRestartHandler}
        onPlay={handlePlay}
      />
      <Footer onHistoryPress={() => setShowHistory(true)} />

      <Modal visible={showHistory} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={history}
              renderItem={({ item, index }) => (
                <Pressable
                  style={styles.historyItem}
                  onPress={() => jumpTo(index)}
                >
                  <Text>
                    {index === 0 ? "Inicio del juego" : `Ir a la jugada #${index}`}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    maxHeight: "80%",
  },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
