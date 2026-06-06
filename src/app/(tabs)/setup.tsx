import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import s from "../../styles/setupStyles";

export default function Setup() {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category?: string }>();

  const [name, setName] = useState("");
  const [players, setPlayers] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  const addPlayer = () => {
    if (name.trim() === "") return;
    setPlayers((prev) => [...prev, name.trim()]);
    setName("");
  };

  const removePlayer = (index: number) => {
    setPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (players.length < 3) {
      alert("Need at least 3 players to start!");
      return;
    }
    router.push({
      pathname: "/game",
      params: {
        players: JSON.stringify(players),
        category,
      },
    });
  };

  const canStart = players.length >= 3;

  return (
    <View style={s.container}>
      {/* HEADER */}
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={14}
          color="#6C4FF6"
        ></MaterialIcons>
      </TouchableOpacity>

      <Text style={s.title}>Add Players</Text>
      <Text style={s.subtitle}>Minimum 3 players to start the game</Text>

      <View style={s.badge}>
        <Text style={s.badgeText}>
          {category ? category.toUpperCase() : "SETUP"}
        </Text>
      </View>
      {/* INPUT ROW */}
      <View style={s.inputRow}>
        <TextInput
          value={name}
          style={[s.input, focused && s.inputFocused]}
          placeholder="Enter player name…"
          onChangeText={setName}
          placeholderTextColor={Colors.muted}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onSubmitEditing={addPlayer}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={s.addBtn}
          onPress={addPlayer}
          activeOpacity={0.8}
        >
          <Text style={s.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* COUNTER */}
      {players.length > 0 && (
        <View style={s.counterPill}>
          <View style={s.counterDot} />
          <Text style={s.counterText}>
            <Text style={s.counterBold}>{players.length}</Text> player
            {players.length !== 1 ? "s" : ""} added
            {players.length < 3
              ? ` · need ${3 - players.length} more`
              : " · ready to play!"}
          </Text>
        </View>
      )}

      {/* SECTION LABEL */}
      {players.length > 0 && <Text style={s.sectionLabel}>PLAYERS</Text>}

      {/* PLAYER LIST */}
      <FlatList
        data={players}
        style={s.playerList}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={s.emptyState}>
            <Text style={s.emptyIcon}>👥</Text>
            <Text style={s.emptyText}>No players yet</Text>
            <Text style={s.emptySubtext}>Type a name above to get started</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={s.playerCard}>
            <View style={s.playerLeft}>
              <View style={s.playerAvatar}>
                <Text style={s.playerAvatarText}>
                  {item.charAt(0).toUpperCase()}
                </Text>
              </View>
              <Text style={s.playerName}>{item}</Text>
            </View>

            <TouchableOpacity
              style={s.removeBtn}
              onPress={() => removePlayer(index)}
              activeOpacity={0.7}
            >
              <Text style={s.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* START BUTTON */}
      <TouchableOpacity
        style={[s.startBtn, !canStart && s.startBtnDisabled]}
        onPress={startGame}
        activeOpacity={0.85}
        disabled={!canStart}
      >
        <Text style={s.startText}>
          {canStart
            ? "Start Game →"
            : `Need ${3 - players.length} more player${3 - players.length !== 1 ? "s" : ""}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
