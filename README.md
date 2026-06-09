# 😈 Imposter

A local multiplayer social deduction game built with **React Native** and **Expo Router**, inspired by the classic "Spyfall" genre. One (or more) players are secretly assigned the role of **Imposter**  they receive only a vague hint instead of the real word. Everyone else discusses clues, and the group votes to eliminate who they think is faking it.

All words are rooted in **Nepali culture**  food, festivals, places, animals, tools, and more.

---

## 📲 Download

[![Download on Android](https://img.shields.io/badge/Android-Download%20APK-green?style=for-the-badge&logo=android)](https://expo.dev/accounts/gauravbasnet/projects/imposter/builds/f73f5165-9661-4a20-bc7b-5a34bc5b1d46)

---

## 🎮 How to Play

1. **Pick a category** — Food, Festival, Animal, Place, Sports, Tools, or Object.
2. **Add players** — minimum 3, no upper limit.
3. **Choose the number of imposters** (1–3, based on player count).
4. **Each player holds the phone privately** and press-holds the card to reveal their role:
   - 😇 **Crewmates** see the secret word.
   - 😈 **Imposters** see only a vague hint — they must blend in.
5. **Everyone discusses** — give clues without making it obvious what the word is.
6. **Vote** — each player casts a vote for who they think is the Imposter.
7. **Result** — the most-voted player is eliminated. The game continues until the crew roots out all imposters or the imposters gain the majority.

---

## ✨ Features

- 🗂 **8 Nepali-themed categories** — 120+ culturally rich words
- 😈 **Configurable imposters** — 1, 2, or 3 based on group size
- 🃏 **Animated flip cards** — press and hold to reveal your role privately
- 🎨 **Unique player colors** — each player gets a distinct color every game
- 🗳 **Voting system** — sequential voting with live vote counts and tie-breaking
- 📊 **Vote distribution chart** — see who got what after voting
- 🔄 **Multi-round support** — eliminated players are removed; game continues until win/loss
- 🔁 **Play Again** — restart with same players and category
- 📱 **Fully offline** — no internet, no accounts, no ads

---

## 🗂 Project Structure

```
app/
├── _layout.tsx          # Root layout with Expo Router stack
├── index.tsx            # Home screen — category selection
├── setup.tsx            # Player setup — add/remove players, choose category
├── game.tsx             # Game screen — card flip & role reveal
└── voting.tsx           # Voting screen — cast votes & view results

components/
└── categoryCard.tsx     # Reusable category selection card

constants/
└── theme.ts             # App-wide color tokens

data/
└── words.json           # All words with category, hint, and icon

styles/
├── styles.ts            # Home screen styles
├── setupStyles.ts       # Setup screen styles
├── gameStyles.ts        # Game screen styles
└── votingStyles.ts      # Voting screen styles

global.css               # Google Fonts import (Poppins, Comic Neue, Chelsea Market)
```

---

## 🛠 Tech Stack

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| React Native          | Cross-platform mobile UI               |
| Expo SDK              | Build tooling, dev client, OTA updates |
| Expo Router           | File-based navigation (Stack)          |
| Expo Vector Icons     | Material Icons                         |
| React Native Animated | Card flip animations                   |
| TypeScript            | Type safety throughout                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator / Android Emulator, or the **Expo Go** app on your phone

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Gaurav-Basnet/Imposter_Game.git
cd imposter

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Then scan the QR code with **Expo Go** (Android) or the Camera app (iOS), or press `i` / `a` to open in a simulator.

### Build for Production

```bash
# iOS
eas build --platform ios

# Android
eas build --platform android
```

> Requires [EAS CLI](https://docs.expo.dev/build/introduction/) and an Expo account.

---

## 📦 Word Categories

| Category    | Example Words                               |
| ----------- | ------------------------------------------- |
| 🍱 Food     | Momo, Gundruk, Yomari, Sel Roti, Chhurpi    |
| 🐄 Animal   | Danphe, Kasturi, Chituwa, Chauri, Munal     |
| 🪔 Object   | Khukuri, Dhyangro, Sarangi, Mandala, Diyo   |
| 🎉 Festival | Dashain, Tihar, Bisket, Indrajatra, Chhath  |
| 🏔 Place    | Sagarmatha, Lumbini, Mustang, Rara, Tilicho |
| ⚽ Sports   | Kabaddi, Dandibiyo, Paragliding, Rafting    |
| 🔨 Tools    | Kodalo, Hasiya, Naanglo, Okhli, Janto       |

---

## 🤝 Contributing

Pull requests are welcome! To add new words, edit `data/words.json` following the existing schema:

```json
{
  "category": "Food",
  "word": "YourWord",
  "hint": "VagueHint",
  "icon": "material-icon-name"
}
```

Icon names must be valid [Material Icons](https://fonts.google.com/icons) identifiers supported by `@expo/vector-icons`.

---

## 📄 License

MIT © 2025 — Feel free to fork, adapt, and share.
