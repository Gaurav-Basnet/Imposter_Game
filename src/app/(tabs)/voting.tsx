import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/votingStyles";

export default function VotingScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const intialPlayers = params.initialPlayers
    ? JSON.parse(params.initialPlayers as string)
    : [];
  const players = JSON.parse(params.players as string) as string[];
  const imposters = JSON.parse(params.imposters as string) as string[];
  const category = params.category as string;
  const word = params.word as string;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVote, setSelectedVote] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [eliminated, setEliminated] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<
    "crew" | "imposter" | "continue" | null
  >(null);
  const [isTie, setIsTie] = useState(false);
  const [tiePlayers, setTiePlayers] = useState<string[]>([]);

  const castVote = () => {
    if (!selectedVote) return;

    setVotes((prev) => {
      const updated = {
        ...prev,
        [selectedVote]: (prev[selectedVote] || 0) + 1,
      };

      if (currentIndex + 1 === players.length) {
        setTimeout(() => handleResult(updated), 100);
      }

      return updated;
    });

    setSelectedVote(null);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleResult = (finalVotes: Record<string, number>) => {
    // Find highest vote count
    const maxVotes = Math.max(...Object.values(finalVotes));

    // Find all players with max votes
    const tiedPlayers = Object.entries(finalVotes)
      .filter(([_, count]) => count === maxVotes)
      .map(([player]) => player);

    let mostVoted: string;

    // Handle tie
    if (tiedPlayers.length > 1) {
      setIsTie(true);
      setTiePlayers(tiedPlayers);

      // Randomly select one player from the tie
      const randomIndex = Math.floor(Math.random() * tiedPlayers.length);
      mostVoted = tiedPlayers[randomIndex];
    } else {
      setIsTie(false);
      mostVoted = tiedPlayers[0];
    }

    setEliminated(mostVoted);

    const updatedPlayers = players.filter((p) => p !== mostVoted);

    if (imposters.length === 0) {
      setGameResult("crew");
      setShowResult(true);
      return;
    }

    const remainingImposters = updatedPlayers.filter((p) =>
      imposters.includes(p),
    );

    let result: "crew" | "imposter" | "continue" = "continue";

    if (remainingImposters.length === 0) {
      result = "crew";
    } else if (remainingImposters.length === updatedPlayers.length) {
      result = "imposter";
    } else if (players.length <= 3) {
      const imposterWasVoted = mostVoted && imposters.includes(mostVoted);
      if (!imposterWasVoted) {
        result = "imposter";
      }
    }

    setGameResult(result);
    setShowResult(true);
  };

  const restartRound = () => {
    const updatedPlayers = players.filter((p) => p !== eliminated);
    const updatedImposters = imposters.filter((imp) =>
      updatedPlayers.includes(imp),
    );

    router.replace({
      pathname: "/game",
      params: {
        players: JSON.stringify(updatedPlayers),
        initialPlayers: JSON.stringify(intialPlayers),
        category,
        isRestart: "true",

        usedWord: word,
        imposters: JSON.stringify(updatedImposters),
      },
    });
  };

  if (!showResult) {
    return (
      <View style={styles.screen}>
        <View style={styles.headerSection}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(currentIndex / players.length) * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {currentIndex} of {players.length} voted
            </Text>
          </View>

          <View style={styles.voterCard}>
            <Text style={styles.voterBadge}>🗳️ CASTING VOTE</Text>
            <Text style={styles.voterName}>{players[currentIndex]}</Text>
          </View>

          <Text style={styles.instruction}>Who is the Imposter? 🕵️</Text>
        </View>

        <ScrollView
          style={styles.voteBox}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.voteBoxContent}
        >
          {players.map((p) => (
            <TouchableOpacity
              key={p}
              onPress={() => setSelectedVote(p)}
              style={[
                styles.voteItem,
                selectedVote === p && styles.voteSelected,
              ]}
              activeOpacity={0.7}
            >
              <View style={styles.voteItemContent}>
                <View style={styles.voteAvatar}>
                  <Text style={styles.voteAvatarText}>{p.charAt(0)}</Text>
                </View>
                <Text
                  style={[
                    styles.voteText,
                    selectedVote === p && styles.voteTextSelected,
                  ]}
                >
                  {p}
                </Text>
              </View>
              {votes[p] > 0 && (
                <View style={styles.voteCountBadge}>
                  <Text style={styles.voteCountText}>{votes[p]}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[styles.nextBtn, !selectedVote && styles.nextBtnDisabled]}
          onPress={castVote}
          disabled={!selectedVote}
          activeOpacity={0.8}
        >
          <Text style={styles.nextBtnText}>
            {currentIndex + 1 === players.length
              ? "Finish Voting 🗳"
              : "Pass Phone 📱"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.resultHeader}>
        <Text style={styles.resultTitle}>🗳 Voting Results</Text>
        <View style={styles.wordReveal}>
          <Text style={styles.wordRevealLabel}>The word was</Text>
          <Text style={styles.wordRevealValue}>"{word}"</Text>
        </View>
      </View>

      <ScrollView
        style={styles.resultScrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.resultContentContainer}
      >
        <View style={styles.resultCard}>
          <View style={styles.eliminatedSection}>
            <Text style={styles.eliminatedLabel}>ELIMINATED</Text>
            <Text style={styles.eliminatedName}>❌ {eliminated}</Text>
            {isTie && (
              <Text style={styles.tieInfo}>
                (Randomly chosen from tie between: {tiePlayers.join(", ")})
              </Text>
            )}
          </View>

          <View style={styles.voteSummary}>
            <Text style={styles.voteSummaryTitle}>Vote Distribution</Text>
            {Object.entries(votes).map(([player, count]) => {
              const maxVotes = Math.max(...Object.values(votes), 0);
              const percentage = maxVotes > 0 ? (count / maxVotes) * 100 : 0;
              const isTiedPlayer = tiePlayers.includes(player);
              return (
                <View key={player} style={styles.voteSummaryItem}>
                  <View style={styles.voteSummaryHeader}>
                    <Text
                      style={[
                        styles.voteSummaryPlayer,
                        isTiedPlayer && styles.tiedPlayerText,
                      ]}
                    >
                      {player} {isTiedPlayer && "(Tie)"}
                    </Text>
                    <Text
                      style={[
                        styles.voteSummaryCount,
                        isTiedPlayer && styles.tiedPlayerText,
                      ]}
                    >
                      {count} vote{count !== 1 ? "s" : ""}
                    </Text>
                  </View>
                  <View style={styles.voteSummaryBarContainer}>
                    <View
                      style={[
                        styles.voteSummaryBar,
                        { width: `${percentage}%` },
                        isTiedPlayer && styles.tiedBar,
                      ]}
                    />
                  </View>
                </View>
              );
            })}
          </View>

          {/* Show ONLY Eliminated Imposters */}
          <View style={styles.simpleImposterList}>
            <Text style={styles.simpleImposterTitle}>
              😈 Eliminated Imposters
            </Text>
            {imposters
              .filter((imp) => imp === eliminated)
              .map((imposter) => (
                <View key={imposter} style={styles.simpleImposterItem}>
                  <Text style={styles.simpleImposterName}>• {imposter}</Text>
                  <Text style={styles.simpleEliminatedBadge}>
                    🗳️ Eliminated
                  </Text>
                </View>
              ))}
            {imposters.filter((imp) => imp === eliminated).length === 0 && (
              <Text style={styles.noEliminatedText}>
                No imposters eliminated this round
              </Text>
            )}
          </View>

          {gameResult === "crew" && (
            <View style={[styles.resultMessage, styles.crewWin]}>
              <Text style={styles.resultMessageIcon}>🎉</Text>
              <Text style={styles.resultMessageTitle}>Crew Wins!</Text>
              <Text style={styles.resultMessageText}>
                All imposters are eliminated
              </Text>
            </View>
          )}

          {gameResult === "imposter" && (
            <View style={[styles.resultMessage, styles.imposterWin]}>
              <Text style={styles.resultMessageIcon}>😈</Text>
              <Text style={styles.resultMessageTitle}>Imposter Wins!</Text>

              <View style={styles.imposterList}>
                {imposters.map((imp) => (
                  <Text key={imp} style={styles.imposterName}>
                    • {imp}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {gameResult === "continue" && (
            <View style={[styles.resultMessage, styles.continueGame]}>
              <Text style={styles.resultMessageIcon}>🎮</Text>
              <Text style={styles.resultMessageTitle}>Game Continues</Text>
              <Text style={styles.resultMessageText}>
                Next round starting...
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footerButtons}>
        {gameResult === "continue" && (
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={restartRound}
            activeOpacity={0.8}
          >
            <Text style={styles.nextBtnText}>🔄 Next Round</Text>
          </TouchableOpacity>
        )}

        {(gameResult === "crew" || gameResult === "imposter") && (
          <TouchableOpacity
            style={styles.playAgainBtn}
            onPress={() =>
              router.replace({
                pathname: "/setup",
                params: {
                  players: JSON.stringify(intialPlayers),
                  category,
                  isRestart: "true",
                  initialPlayers: JSON.stringify(intialPlayers),
                  usedWord: word,
                },
              })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.playAgainText}>Play Again →</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
