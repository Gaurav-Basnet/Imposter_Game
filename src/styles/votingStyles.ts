import { Colors } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  headerSection: {
    marginBottom: 20,
  },

  progressContainer: {
    marginBottom: 20,
  },

  progressBarContainer: {
    width: "100%",
    height: 6,
    backgroundColor: Colors.faint,
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 8,
  },

  progressBar: {
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },

  progressText: {
    fontSize: 12,
    color: Colors.muted,
    textAlign: "center",
    fontWeight: "600",
  },

  voterCard: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },

  voterBadge: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FFFFFFCC",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  voterName: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  instruction: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 16,
  },

  voteBox: {
    flex: 1,
  },

  voteBoxContent: {
    gap: 12,
    paddingBottom: 20,
  },

  voteItem: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.cardBorder,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  voteItemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  voteAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  voteAvatarText: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.primary,
  },

  voteText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },

  voteSelected: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    transform: [{ scale: 1.02 }],
  },

  voteTextSelected: {
    color: Colors.primary,
  },

  voteCountBadge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  voteCountText: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.primary,
  },

  nextBtn: {
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  nextBtnDisabled: {
    opacity: 0.5,
  },

  nextBtnText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },

  resultHeader: {
    alignItems: "center",
    marginBottom: 20,
  },

  resultTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.text,
    marginBottom: 12,
  },

  wordReveal: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },

  wordRevealLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.muted,
    letterSpacing: 1,
    marginBottom: 4,
  },

  wordRevealValue: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.primary,
  },

  resultScrollView: {
    flex: 1,
  },

  resultContentContainer: {
    paddingBottom: 20,
  },

  resultCard: {
    flex: 1,
  },

  eliminatedSection: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Colors.danger,
    shadowColor: Colors.danger,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  eliminatedLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: Colors.danger,
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  eliminatedName: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.danger,
  },

  voteSummary: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },

  voteSummaryTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.text,
    marginBottom: 16,
  },

  voteSummaryItem: {
    marginBottom: 12,
  },

  voteSummaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  voteSummaryPlayer: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },

  voteSummaryCount: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.primary,
  },

  voteSummaryBarContainer: {
    width: "100%",
    height: 6,
    backgroundColor: Colors.faint,
    borderRadius: 3,
    overflow: "hidden",
  },

  voteSummaryBar: {
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },

  resultMessage: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginTop: 30,
  },

  crewWin: {
    borderTopWidth: 4,
    borderTopColor: Colors.success,
  },

  imposterWin: {
    borderTopWidth: 4,
    borderTopColor: Colors.danger,
  },

  continueGame: {
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
  },

  resultMessageIcon: {
    fontSize: 48,
    marginBottom: 12,
  },

  resultMessageTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.text,
    marginBottom: 8,
  },

  resultMessageText: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
    lineHeight: 20,
  },

  footerButtons: {
    marginTop: 8,
    marginBottom: 20,
  },

  playAgainBtn: {
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  playAgainText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  imposterRevealSection: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.danger + "40",
    shadowColor: Colors.danger,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  imposterRevealTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.danger,
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  imposterCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 12,
  },

  imposterNumber: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.danger,
    backgroundColor: Colors.danger + "15",
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "hidden",
  },

  imposterAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.danger + "20",
    justifyContent: "center",
    alignItems: "center",
  },

  imposterAvatarText: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.danger,
  },

  eliminatedTag: {
    backgroundColor: Colors.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  eliminatedTagText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  simpleImposterList: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },

  simpleImposterTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.danger,
    marginBottom: 12,
  },

  simpleImposterItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
  },

  simpleImposterName: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.text,
    flex: 1,
  },

  simpleEliminatedBadge: {
    fontSize: 12,
    color: Colors.danger,
    fontWeight: "700",
    backgroundColor: Colors.danger + "15",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  simpleAliveBadge: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: "700",
    backgroundColor: Colors.success + "15",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  noEliminatedText: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
    paddingVertical: 12,
    fontStyle: "italic",
  },
  imposterList: {
    marginTop: 12,
    alignItems: "center",
  },

  imposterListTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.muted,
    marginBottom: 6,
  },

  imposterName: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.danger,
    marginVertical: 2,
  },
  tieInfo: {
    fontSize: 12,
    color: Colors.muted,
    marginTop: 8,
    textAlign: "center",
    fontStyle: "italic",
  },

  tiedPlayerText: {
    color: Colors.accent,
    fontWeight: "800",
  },

  tiedBar: {
    backgroundColor: Colors.accent,
  },
});
