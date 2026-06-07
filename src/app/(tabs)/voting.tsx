import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/votingStyles";

export default function VotingScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const players = JSON.parse(params.players as string) as string[];
  const imposters = JSON.parse(params.imposters as string) as string[];
  const category = params.category as string;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVote, setSelectedVote] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [eliminated, setEliminated] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<
    "crew" | "imposter" | "continue" | null
  >(null);

  // 🗳 CAST VOTE
  const castVote = () => {
    if (!selectedVote) return;

    setVotes((prev) => {
      const updated = {
        ...prev,
        [selectedVote]: (prev[selectedVote] || 0) + 1,
      };

      // last vote → compute result safely here
      if (currentIndex + 1 === players.length) {
        setTimeout(() => handleResult(updated), 100);
      }

      return updated;
    });

    setSelectedVote(null);
    setCurrentIndex((prev) => prev + 1);
  };

  // 🧠 FIND MOST VOTED + CHECK WIN
  const handleResult = (finalVotes: Record<string, number>) => {
    const sorted = Object.entries(finalVotes).sort((a, b) => b[1] - a[1]);

    const mostVoted = sorted[0]?.[0];
    setEliminated(mostVoted);

    const updatedPlayers = players.filter((p) => p !== mostVoted);

    const remainingImposters = updatedPlayers.filter((p) =>
      imposters.includes(p),
    );

    const remainingCrew = updatedPlayers.filter((p) => !imposters.includes(p));

    let result: "crew" | "imposter" | "continue" = "continue";

    // 😇 Crew wins
    if (remainingImposters.length === 0) {
      result = "crew";
    }

    // 😈 Imposter wins
    else if (remainingImposters.length === updatedPlayers.length) {
      result = "imposter";
    }

    setGameResult(result);
    setShowResult(true);
  };

  // 🔄 CONTINUE GAME (NEXT ROUND)
  const restartRound = () => {
    const updatedPlayers = players.filter((p) => p !== eliminated);

    router.replace({
      pathname: "/game",
      params: {
        players: JSON.stringify(updatedPlayers),
        category,
        isRestart: "true",
      },
    });
  };

  // ─────────────────────────────
  // 🗳 VOTING UI
  // ─────────────────────────────
  if (!showResult) {
    return (
      <View style={styles.screen}>
        <Text style={styles.playerName}>{players[currentIndex]}'s Vote</Text>

        <Text style={styles.playerSubtitle}>Who is the Imposter? 🕵️</Text>

        <View style={styles.voteBox}>
          {players.map((p) => (
            <TouchableOpacity
              key={p}
              onPress={() => setSelectedVote(p)}
              style={[
                styles.voteItem,
                selectedVote === p && styles.voteSelected,
              ]}
            >
              <Text
                style={[
                  styles.voteText,
                  selectedVote === p && styles.voteTextSelected,
                ]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={castVote}>
          <Text style={styles.nextBtnText}>
            {currentIndex + 1 === players.length
              ? "Finish Voting 🗳"
              : "Pass Phone 📱"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ─────────────────────────────
  // 🏁 RESULT UI
  // ─────────────────────────────
  return (
    <View style={styles.screen}>
      <Text style={styles.playerName}>🗳 Result</Text>

      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>Eliminated Player</Text>

        <Text style={styles.resultText}>❌ {eliminated}</Text>

        {gameResult === "crew" && (
          <Text style={styles.resultSub}>
            😇 Crew Wins! All imposters are eliminated
          </Text>
        )}

        {gameResult === "imposter" && (
          <Text style={styles.resultSub}>
            😈 Imposter Wins! They dominated the game
          </Text>
        )}

        {gameResult === "continue" && (
          <Text style={styles.resultSub}>🎮 Game continues to next round</Text>
        )}
      </View>

      {gameResult === "continue" && (
        <TouchableOpacity style={styles.nextBtn} onPress={restartRound}>
          <Text style={styles.nextBtnText}>🔄 Next Round</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
