import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import words from "../../data/words.json";
import styles from "../../styles/gameStyles";

const { width } = Dimensions.get("window");

// Predefined vibrant color palette for players
const playerColors = [
  "#FF6B6B", // Coral Red
  "#4ECDC4", // Turquoise
  "#45B7D1", // Ocean Blue
  "#96CEB4", // Sage Green
  "#FFEAA7", // Cream Yellow
  "#DDA0DD", // Plum
  "#FF9F4A", // Orange
  "#6C5CE7", // Purple
  "#00CEC9", // Mint
  "#FD79A8", // Pink
  "#FDCB6E", // Gold
  "#E17055", // Terracotta
  "#0984E3", // Royal Blue
  "#E84393", // Hot Pink
  "#B2BEC3", // Silver
  "#FAB1A0", // Peach
];

export default function GameScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const players = JSON.parse(params.players as string) as string[];
  const playerCount = players.length;

  // Generate random colors for each player (persists throughout game)
  const [playerColorMap] = useState(() => {
    const shuffled = [...playerColors];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const map: Record<string, string> = {};
    players.forEach((player, index) => {
      map[player] = shuffled[index % shuffled.length];
    });
    return map;
  });

  const maxImposters = Math.max(1, Math.floor((playerCount - 1) / 2));

  const [imposters, setImposters] = useState(1);
  const [imposterList, setImposterList] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showWord, setShowWord] = useState(false);

  const [selectedWord, setSelectedWord] = useState<any>(null);
  const isRestart = params.isRestart === "true";
  const [modalVisible, setModalVisible] = useState(!isRestart);
  // ── ANIMATION ──
  const flipAnim = useRef(new Animated.Value(0)).current;
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const initialImposters = params.imposters
    ? JSON.parse(params.imposters as string)
    : [];

  const categoryWords = words.filter(
    (item) => item.category === params.category,
  );

  // ── SHUFFLE ──
  const shuffleArray = (array: any[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // ── FLIP ANIMATION ──
  const flipCard = () => {
    if (isFlipped) return;

    setIsFlipped(true);
    setShowWord(true);
    Animated.spring(flipAnim, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const resetCard = () => {
    if (!isFlipped) return;

    setIsFlipped(false);
    setShowWord(false);
    Animated.spring(flipAnim, {
      toValue: 0,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  // Handle long press start
  const handlePressIn = () => {
    longPressTimer.current = setTimeout(() => {
      flipCard();
    }, 300);
  };

  // Handle long press end or release
  const handlePressOut = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    resetCard();
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  // Update the GameScreen useEffect for restart logic
  useEffect(() => {
    if (params.isRestart === "true") {
      setCurrentIndex(0);
      setIsFlipped(false);
      setShowWord(false);
      flipAnim.setValue(0);
      setShowCard(true);
      setModalVisible(false);

      // Get the passed imposters from params
      const passedImposters = params.imposters
        ? JSON.parse(params.imposters as string)
        : [];

      // Set the imposter list
      setImposterList(passedImposters);

      // Set imposters count based on passed imposters length
      setImposters(passedImposters.length);

      // 🎯 WORD CHANGE LOGIC (same category, no repeat)
      const usedWord = params.usedWord as string | undefined;

      const availableWords = words.filter(
        (w) => w.category === params.category && w.word !== usedWord,
      );

      // If no available words, reset the pool (use all words again)
      let randomWord;
      if (availableWords.length === 0) {
        randomWord =
          categoryWords[Math.floor(Math.random() * categoryWords.length)];
      } else {
        randomWord =
          availableWords[Math.floor(Math.random() * availableWords.length)];
      }

      setSelectedWord(randomWord);
    }
  }, [params.isRestart]);
  // ── START GAME ──
  const startGame = () => {
    setModalVisible(false);

    const shuffled = shuffleArray(players);
    const selectedImposters = shuffled.slice(0, imposters);
    setImposterList(selectedImposters);

    const randomWord =
      categoryWords[Math.floor(Math.random() * categoryWords.length)];

    setSelectedWord(randomWord);

    setCurrentIndex(0);
    setShowCard(true);
    setIsFlipped(false);
    setShowWord(false);
    flipAnim.setValue(0);
  };

  const handleNext = () => {
    if (currentIndex + 1 < players.length) {
      setCurrentIndex((p) => p + 1);
      setIsFlipped(false);
      setShowWord(false);
      flipAnim.setValue(0);
    } else {
      router.replace({
        pathname: "/voting",
        params: {
          players: JSON.stringify(players),
          imposters: JSON.stringify(imposterList),
          word: selectedWord?.word,
          category: params.category,
        },
      });
    }
  };

  const isImposter = imposterList.includes(players[currentIndex]);
  const currentPlayerColor = playerColorMap[players[currentIndex]];
  // Create lighter version for gradient/background
  const lightColor = currentPlayerColor + "15";
  const mediumColor = currentPlayerColor + "30";

  const options = [1, 2, 3].filter((n) => n <= maxImposters);
  const currentPlayerNumber = currentIndex + 1;
  const totalPlayers = players.length;

  return (
    <View style={styles.container}>
      {/* ── SETUP MODAL ── */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalIconWrap}>
              <Text style={styles.modalIcon}>🎭</Text>
            </View>
            <Text style={styles.modalTitle}>Imposter Count</Text>
            <Text style={styles.modalSubtitle}>
              <Text style={styles.highlight}>{playerCount}</Text> players · max{" "}
              <Text style={styles.highlight}>{maxImposters}</Text> imposters
            </Text>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>SELECT COUNT</Text>
            <View style={styles.row}>
              {options.map((num) => (
                <TouchableOpacity
                  key={num}
                  onPress={() => setImposters(num)}
                  style={[styles.option, imposters === num && styles.selected]}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.optionText,
                      imposters === num && styles.selectedText,
                    ]}
                  >
                    {num}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.statRow}>
              <View style={styles.statChip}>
                <Text style={styles.statEmoji}>👥</Text>
                <Text style={styles.statValue}>{playerCount}</Text>
                <Text style={styles.statLabel}>Players</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statChip}>
                <Text style={styles.statEmoji}>😈</Text>
                <Text style={styles.statValue}>{imposters}</Text>
                <Text style={styles.statLabel}>Imposters</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statChip}>
                <Text style={styles.statEmoji}>😇</Text>
                <Text style={styles.statValue}>{playerCount - imposters}</Text>
                <Text style={styles.statLabel}>Crewmates</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={startGame}
              style={styles.startBtn}
              activeOpacity={0.9}
            >
              <Text style={styles.startText}>Start Game →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ── GAME SCREEN ── */}
      {showCard && (
        <View style={styles.screen}>
          {/* Progress Indicator */}
          <View style={styles.progressRow}>
            {players.map((player, idx) => (
              <View
                key={idx}
                style={[
                  styles.progressDot,
                  idx === currentIndex && styles.progressDotActive,
                  {
                    backgroundColor:
                      idx === currentIndex ? playerColorMap[player] : "#EAE7F8",
                  },
                ]}
              />
            ))}
          </View>
          <Text style={styles.stepLabel}>
            Player {currentPlayerNumber} of {totalPlayers}
          </Text>

          <View style={styles.nameContainer}>
            <View
              style={[
                styles.playerBadge,
                {
                  backgroundColor: currentPlayerColor + "20",
                  borderColor: currentPlayerColor,
                },
              ]}
            >
              <Text
                style={[styles.playerBadgeText, { color: currentPlayerColor }]}
              >
                👤
              </Text>
            </View>
            <Text style={[styles.playerName, { color: currentPlayerColor }]}>
              {players[currentIndex]}
            </Text>
          </View>

          {/* FLIP CARD - Long press to reveal */}
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            delayLongPress={300}
            style={styles.cardTouchable}
          >
            <View style={styles.cardContainer}>
              {/* Front of card (hidden when flipped) */}
              <Animated.View
                style={[
                  styles.roleCard,
                  styles.cardFront,
                  {
                    transform: [{ rotateY: frontInterpolate }],
                    backgroundColor: currentPlayerColor,
                  },
                ]}
              >
                <View
                  style={[
                    styles.avatarCircle,
                    { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
                  ]}
                >
                  <Text
                    style={[styles.avatarText, { color: currentPlayerColor }]}
                  >
                    ❓
                  </Text>
                </View>
                <Text style={[styles.cardPromptText, { color: "#FFFFFF" }]}>
                  Press and hold to reveal
                </Text>
                <View
                  style={[styles.cardDivider, { backgroundColor: "#FFFFFF30" }]}
                />
              </Animated.View>

              {/* Back of card (visible when flipped) */}
              <Animated.View
                style={[
                  styles.roleCard,
                  styles.cardBack,
                  {
                    transform: [{ rotateY: backInterpolate }],
                    backgroundColor: currentPlayerColor,
                  },
                ]}
              >
                <View
                  style={[
                    styles.avatarCircle,
                    { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
                  ]}
                >
                  <Text
                    style={[styles.avatarText, { color: currentPlayerColor }]}
                  >
                    {isImposter ? "😈" : "😇"}
                  </Text>
                </View>

                {!isImposter ? (
                  <>
                    <View
                      style={[
                        styles.wordBox,
                        { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
                      ]}
                    >
                      <Text
                        style={[
                          styles.wordLabel,
                          { color: currentPlayerColor },
                        ]}
                      >
                        YOUR WORD
                      </Text>
                      <Text
                        style={[
                          styles.wordValue,
                          { color: currentPlayerColor },
                        ]}
                      >
                        {showWord ? selectedWord?.word : "••••••"}
                      </Text>
                    </View>
                    <Text
                      style={[styles.playerSubtitle, { color: "#FFFFFFCC" }]}
                    >
                      {showWord
                        ? "Don't let imposters guess!"
                        : "Press and hold to see your word"}
                    </Text>
                  </>
                ) : (
                  <>
                    <View
                      style={[
                        styles.wordBox,
                        styles.hintBox,
                        { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
                      ]}
                    >
                      <Text
                        style={[
                          styles.wordLabel,
                          { color: currentPlayerColor },
                        ]}
                      >
                        IMPOSTER HINT
                      </Text>
                      <Text
                        style={[
                          styles.hintValue,
                          { color: currentPlayerColor },
                        ]}
                      >
                        {showWord ? selectedWord?.hint : "••••••"}
                      </Text>
                    </View>
                    <Text
                      style={[styles.playerSubtitle, { color: "#FFFFFFCC" }]}
                    >
                      {showWord
                        ? "Blend in! Don't reveal yourself!"
                        : "Press and hold to see your hint"}
                    </Text>
                  </>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>

          {/* NEXT BUTTON */}
          <TouchableOpacity
            style={[styles.nextBtn, { backgroundColor: currentPlayerColor }]}
            onPress={handleNext}
            activeOpacity={0.9}
          >
            <Text style={styles.nextBtnText}>
              {currentIndex + 1 === players.length
                ? "Start Voting →"
                : "Next Player →"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
