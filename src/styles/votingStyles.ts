import { Colors } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  // ─────────────────────────────
  // ROOT SCREEN
  // ─────────────────────────────
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: "center",
  },

  // ─────────────────────────────
  // HEADER TEXT
  // ─────────────────────────────
  playerName: {
    fontSize: 26,
    fontWeight: "900",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
  },

  playerSubtitle: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
    marginBottom: 20,
  },

  // ─────────────────────────────
  // VOTING BOX
  // ─────────────────────────────
  voteBox: {
    width: "100%",
    marginTop: 20,
    gap: 12,
  },

  voteItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#F2F2F2",
    borderWidth: 2,
    borderColor: "transparent",
    alignItems: "center",
  },

  voteSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },

  voteText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  voteTextSelected: {
    color: "#fff",
  },

  // ─────────────────────────────
  // BUTTON
  // ─────────────────────────────
  nextBtn: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  nextBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // ─────────────────────────────
  // RESULT CARD
  // ─────────────────────────────
  resultCard: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    padding: 24,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.text,
    marginBottom: 10,
  },

  resultText: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.danger,
    marginBottom: 8,
  },

  resultSub: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
  },
});
