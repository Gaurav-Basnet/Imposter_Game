import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8FF",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1A1535",
    textAlign: "center",
    marginTop: 40,
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 14,
    color: "#8E8AAA",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 28,
    letterSpacing: 0.1,
  },

  list: {
    paddingBottom: 20,
  },

  startBtn: {
    backgroundColor: "#6C4FF6",
    paddingVertical: 17,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 36,
    shadowColor: "#6C4FF6",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 10,
  },

  startText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.3,
  },
});

export default styles;
