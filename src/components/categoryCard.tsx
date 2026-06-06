import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/theme";

type Props = {
  title: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
};

export default function CategoryCard({
  title,
  icon,
  selected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <View style={[styles.iconWrap, selected && styles.iconWrapSelected]}>
        <MaterialIcons
          name={icon as any}
          size={22}
          color={selected ? "#FFFFFF" : Colors.primary}
        />
      </View>

      <Text
        style={[styles.text, selected && styles.textSelected]}
        numberOfLines={1}
      >
        {title}
      </Text>

      {selected && (
        <View style={styles.checkDot}>
          <MaterialIcons name="check" size={10} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    gap: 10,
    borderWidth: 1.5,
    borderColor: "#EAE7F8",
    position: "relative",
    shadowColor: "#C4BBEE",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },

  cardSelected: {
    backgroundColor: "#EDE9FE",
    borderColor: "#6C4FF6",
    shadowColor: "#6C4FF6",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },

  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#F0EEFF",
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapSelected: {
    backgroundColor: "#6C4FF6",
  },

  text: {
    color: Colors.muted,
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: 0.2,
    textAlign: "center",
  },

  textSelected: {
    color: "#1A1535",
    fontWeight: "700",
  },

  checkDot: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#6C4FF6",
    alignItems: "center",
    justifyContent: "center",
  },
});
