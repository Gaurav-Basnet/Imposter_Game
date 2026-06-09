import { Colors } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  // ── ROOT ──
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 32,
    alignItems: "center",
  },

  // ── MODAL ──
  overlay: {
    flex: 1,
    backgroundColor: "rgba(10, 8, 30, 0.85)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: width * 0.9,
    backgroundColor: Colors.card,
    borderRadius: 32,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },

  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#F0EBFF",
    borderRadius: 16,
    alignSelf: "center",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6C4FF6",
    letterSpacing: 0.5,
  },
  modalIconWrap: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  modalIcon: {
    fontSize: 36,
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },

  modalSubtitle: {
    fontSize: 15,
    color: Colors.muted,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },

  highlight: {
    color: Colors.primary,
    fontWeight: "700",
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.cardBorder,
    marginBottom: 20,
  },

  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.muted,
    letterSpacing: 1.2,
    marginBottom: 12,
    alignSelf: "flex-start",
  },

  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 24,
  },

  option: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: Colors.faint,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.cardBorder,
  },

  selected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  optionText: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.muted,
  },

  selectedText: {
    color: "#fff",
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.faint,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: "100%",
    marginBottom: 24,
  },

  statChip: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },

  statEmoji: {
    fontSize: 22,
    marginBottom: 2,
  },

  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.text,
  },

  statLabel: {
    fontSize: 11,
    color: Colors.muted,
    fontWeight: "600",
  },

  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.cardBorder,
    marginHorizontal: 8,
  },

  startBtn: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 10,
  },

  startText: {
    fontWeight: "800",
    fontSize: 17,
    color: "#fff",
    letterSpacing: 0.5,
  },

  // ── PROGRESS ──
  progressRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },

  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  progressDotActive: {
    width: 24,
    borderRadius: 4,
  },

  stepLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.muted,
    letterSpacing: 1,
    marginBottom: 20,
    textTransform: "uppercase",
  },

  // ── PLAYER INFO ──
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 6,
  },

  playerBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  playerBadgeText: {
    fontSize: 24,
  },

  playerName: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 6,
    letterSpacing: -0.3,
  },

  playerSubtitle: {
    fontSize: 14,
    marginBottom: 24,
    fontWeight: "500",
  },

  // ── CARD CONTAINER ──
  cardTouchable: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },

  roleCard: {
    position: "absolute",
    width: "100%",
    borderRadius: 32,
    padding: 28,
    alignItems: "center",
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
    backfaceVisibility: "hidden",
  },

  cardFront: {
    zIndex: 2,
  },

  cardBack: {
    zIndex: 1,
  },

  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  avatarText: {
    fontSize: 42,
    fontWeight: "900",
  },

  cardPromptText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },

  flipHint: {
    fontSize: 13,
    fontStyle: "italic",
    marginTop: 8,
  },

  cardDivider: {
    width: "70%",
    height: 1,
    marginVertical: 20,
  },

  wordBox: {
    width: "100%",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  hintBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  wordLabel: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  wordValue: {
    fontSize: 38,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  hintValue: {
    fontSize: 38,
    fontWeight: "700",
    letterSpacing: 0,
  },

  // ── NEXT BUTTON ──
  nextBtn: {
    marginTop: 28,
    paddingVertical: 16,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  nextBtnText: {
    fontWeight: "800",
    fontSize: 17,
    color: "#fff",
    letterSpacing: 0.5,
  },
});

export default styles;
