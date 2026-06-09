import { StyleSheet } from "react-native";

const setupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8FF",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 16,
    padding: 8,
  },
  backBtn: {
    alignSelf: "flex-start",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#EAE7F8",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    shadowColor: "#C4BBEE",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  backText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6C4FF6",
  },

  badge: {
    alignSelf: "center",
    backgroundColor: "#EDE9FE",
    borderWidth: 1,
    borderColor: "#C4B8F8",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 30,
    marginBottom: 8,
  },

  badgeText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#6C4FF6",
    letterSpacing: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1A1535",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 13,
    color: "#8E8AAA",
    textAlign: "center",
    marginBottom: 28,
  },

  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#EAE7F8",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1A1535",
    shadowColor: "#C4BBEE",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  inputFocused: {
    borderColor: "#6C4FF6",
    shadowOpacity: 0.25,
    shadowColor: "#6C4FF6",
  },

  addBtn: {
    backgroundColor: "#6C4FF6",
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6C4FF6",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },

  addBtnText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "300",
    lineHeight: 30,
    marginTop: -2,
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8E8AAA",
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  playerList: {
    flex: 1,
    marginBottom: 16,
  },

  playerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  emptyState: {
    alignItems: "center",
    paddingVertical: 36,
    gap: 8,
  },

  emptyIcon: {
    fontSize: 36,
    marginBottom: 4,
  },

  emptyText: {
    fontSize: 14,
    color: "#8E8AAA",
    fontWeight: "500",
  },

  emptySubtext: {
    fontSize: 12,
    color: "#C4BBEE",
  },

  startBtn: {
    backgroundColor: "#6C4FF6",
    paddingVertical: 17,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 36,
    shadowColor: "#6C4FF6",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 10,
  },

  startBtnDisabled: {
    backgroundColor: "#C4B8F8",
    shadowOpacity: 0.1,
  },

  startText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.3,
  },

  counterPill: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#EAE7F8",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginBottom: 14,
    shadowColor: "#C4BBEE",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },

  counterDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6C4FF6",
  },

  counterText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8E8AAA",
  },

  counterBold: {
    color: "#6C4FF6",
    fontWeight: "700",
  },
  // Add these to your existing styles object

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: "100%",
    maxHeight: "80%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    letterSpacing: 0.5,
  },

  modalCloseBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#f8f9fa",
  },

  categoryItemSelected: {
    backgroundColor: "#f0ebff",
    borderWidth: 1,
    borderColor: "#6C4FF6",
  },

  categoryItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    letterSpacing: 0.5,
  },

  categoryItemTextSelected: {
    color: "#6C4FF6",
    fontWeight: "600",
  },

  // Player card styles (updated)
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6C4FF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  playerAvatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  playerName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  removeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#fee",
  },

  removeText: {
    color: "#ff4444",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default setupStyles;
