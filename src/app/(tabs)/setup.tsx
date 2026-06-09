import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import words from "../../data/words.json";
import s from "../../styles/setupStyles";

export default function Setup() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const routeCategory = params.category as string | undefined;

  // ✅ NEW: editable category state
  const [selectedCategory, setSelectedCategory] = useState(routeCategory ?? "");

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const previousPlayers = params.initialPlayers
    ? JSON.parse(params.initialPlayers as string)
    : [];

  const [name, setName] = useState("");
  const [players, setPlayers] = useState<string[]>(() => {
    if (previousPlayers.length > 0) return previousPlayers;
    return [];
  });

  const [focused, setFocused] = useState(false);

  // example categories (you can replace with your JSON list)
  const categories = Array.from(new Set(words.map((w) => w.category)));

  const addPlayer = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") return;

    const isDuplicate = players.some(
      (p) => p.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (isDuplicate) {
      alert("Player already exists!");
      return;
    }

    setPlayers((prev) => [...prev, trimmedName]);
    setName("");
  };

  const removePlayer = (index: number) => {
    setPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (players.length < 3) {
      alert("Need at least 3 players!");
      return;
    }

    router.push({
      pathname: "/game",
      params: {
        players: JSON.stringify(players),
        initialPlayers: JSON.stringify(players), // ✅ Pass initial players for restart
        category: selectedCategory, // ✅ IMPORTANT FIX
      },
    });
  };

  const canStart = players.length >= 3;

  return (
    <View style={s.container}>
      {/* HEADER */}
      <TouchableOpacity onPress={() => router.push("/")} style={s.backButton}>
        <MaterialIcons name="arrow-back-ios" size={14} color="#6C4FF6" />
      </TouchableOpacity>

      <Text style={s.title}>Add Players</Text>
      <Text style={s.subtitle}>Minimum 3 players to start the game</Text>

      {/* ✅ CATEGORY BOX (CLICKABLE) */}
      <TouchableOpacity
        onPress={() => setShowCategoryModal(true)}
        style={s.badge}
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={s.badgeText}>
            {selectedCategory
              ? selectedCategory.toUpperCase()
              : "SELECT CATEGORY"}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#6C4FF6" />
        </View>
      </TouchableOpacity>

      {/* CATEGORY MODAL - MODERN STYLED */}
      <Modal
        visible={showCategoryModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCategoryModal(false)}
      >
        <View style={s.modalOverlay}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalTitle}>Choose Category</Text>
              <TouchableOpacity
                onPress={() => setShowCategoryModal(false)}
                style={s.modalCloseBtn}
              >
                <MaterialIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    s.categoryItem,
                    selectedCategory === item && s.categoryItemSelected,
                  ]}
                  onPress={() => {
                    setSelectedCategory(item);
                    setShowCategoryModal(false);
                  }}
                >
                  <Text
                    style={[
                      s.categoryItemText,
                      selectedCategory === item && s.categoryItemTextSelected,
                    ]}
                  >
                    {item.toUpperCase()}
                  </Text>
                  {selectedCategory === item && (
                    <MaterialIcons name="check" size={20} color="#6C4FF6" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* INPUT */}
      <View style={s.inputRow}>
        <TextInput
          value={name}
          style={[s.input, focused && s.inputFocused]}
          placeholder="Enter player name…"
          onChangeText={setName}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onSubmitEditing={addPlayer}
        />
        <TouchableOpacity style={s.addBtn} onPress={addPlayer}>
          <Text style={s.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* PLAYER LIST */}
      <FlatList
        data={players}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={s.playerCard}>
            <View style={s.playerAvatar}>
              <Text style={s.playerAvatarText}>
                {item.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text style={s.playerName}>{item}</Text>
            <TouchableOpacity
              onPress={() => removePlayer(index)}
              style={s.removeBtn}
            >
              <Text style={s.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* START */}
      <TouchableOpacity
        style={[s.startBtn, !canStart && s.startBtnDisabled]}
        onPress={startGame}
        disabled={!canStart}
      >
        <Text style={s.startText}>
          {canStart ? "Start Game →" : "Need more players"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
