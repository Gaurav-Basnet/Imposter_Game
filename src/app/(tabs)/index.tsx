import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CategoryCard from "../../components/categoryCard";
import words from "../../data/words.json";
import styles from "../../styles/styles";

export default function HomeScreen() {
  const router = useRouter();

  const categories = useMemo(() => {
    const map = new Map();
    words.forEach((item) => {
      if (!map.has(item.category))
        map.set(item.category, { category: item.category, icon: item.icon });
    });
    return Array.from(map.values());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const startGame = () => {
    router.push({
      pathname: "/setup",
      params: { category: selectedCategory?.category },
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Imposter</Text>
      <Text style={styles.subtitle}>
        Pick a category and trick your friends 😈
      </Text>

      {/* CATEGORY GRID */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.category}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            icon={item.icon}
            title={item.category}
            selected={selectedCategory?.category === item.category}
            onPress={() => setSelectedCategory(item)}
          />
        )}
      />

      {/* START BUTTON */}
      <TouchableOpacity
        style={styles.startBtn}
        onPress={startGame}
        activeOpacity={0.85}
      >
        <Text style={styles.startText}>Start Game →</Text>
      </TouchableOpacity>
    </View>
  );
}

const local = StyleSheet.create({
  badge: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: -4,
    backgroundColor: "#EDE9FE",
    borderWidth: 1,
    borderColor: "#C4B8F8",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 30,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#6C4FF6",
    letterSpacing: 2,
  },
  hint: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EAE7F8",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#C4BBEE",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  hintText: {
    fontSize: 13,
    color: "#8E8AAA",
  },
  hintBold: {
    color: "#6C4FF6",
    fontWeight: "700",
  },
});
