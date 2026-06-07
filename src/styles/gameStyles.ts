import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.text,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "88%",
    backgroundColor: Colors.card,
    paddingVertical: 28,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: 6,
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: 13,
    color: Colors.muted,
    marginBottom: 24,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 16,
  },

  option: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },

  selected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  optionText: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.muted,
  },

  selectedText: {
    color: "#fff",
  },

  infoText: {
    fontSize: 13,
    color: Colors.muted,
    marginBottom: 22,
    textAlign: "center",
  },

  startBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 0,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },

  startText: {
    fontWeight: "800",
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 0.5,
  },
});

export default styles;
