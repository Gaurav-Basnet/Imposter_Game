import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/gameStyles";

export default function GameScreen() {
  const params = useLocalSearchParams();

  const players = JSON.parse(params.players as string) as string[];
  const playerCount = players.length;
  // Max imposters = floor((playerCount - 1) / 2) so crewmates always outnumber
  const maxImposters = Math.max(1, Math.floor((playerCount - 1) / 2));

  const [imposters, setImposters] = useState(1);

  const [imposterList, setImposterList] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (imposters > maxImposters) setImposters(maxImposters);
  }, [maxImposters]);

  const startGame = () => {
    setModalVisible(false);

    console.log("Game Started");
    console.log("Category:", params.category);
    console.log("Players:", players);
    console.log("Imposters count:", imposters);

    // 🎭 STEP 1: shuffle players
    const shuffled = [...players].sort(() => Math.random() - 0.5);

    // 🎭 STEP 2: pick first N players
    const selectedImposters = shuffled.slice(0, imposters);

    setImposterList(selectedImposters);

    console.log("Selected Imposters:", selectedImposters);
  };

  // Only show options that are valid given player count
  const options = [1, 2, 3].filter((n) => n <= maxImposters);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Game Ready</Text>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            {/* Header */}
            <Text style={styles.modalTitle}>🎭 Choose Imposters</Text>
            <Text style={styles.subtitle}>
              {playerCount} players · max {maxImposters} imposter
              {maxImposters > 1 ? "s" : ""}
            </Text>

            {/* Imposter selector */}
            <View style={styles.row}>
              {options.map((num) => {
                const isSelected = imposters === num;
                return (
                  <TouchableOpacity
                    key={num}
                    style={[styles.option, isSelected && styles.selected]}
                    onPress={() => setImposters(num)}
                    activeOpacity={0.75}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.selectedText,
                      ]}
                    >
                      {num}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Info line */}
            <Text style={styles.infoText}>
              😇 {playerCount - imposters} crewmates · 😈 {imposters} imposter
              {imposters > 1 ? "s" : ""}
            </Text>

            {/* Start button */}
            <TouchableOpacity
              style={styles.startBtn}
              onPress={startGame}
              activeOpacity={0.85}
            >
              <Text style={styles.startText}> Start Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
