import React from "react";
import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "hskang9";

function Decks() {
  return {
    Blockchain: {
      title: "Blockchain",
      questions: [
        {
          question: "What is blockchain?",
          answer: "An array of encrypted data called block"
        },
        {
          question: "How do you make transaction on blockchain?",
          answer:
            "You sign the transaction data with private key and send it to the blockchain node."
        }
      ]
    },
    Bitcoin: {
      title: "Bitcoin",
      questions: [
        {
          question: "Who is the father of Bitcoin?",
          answer: "Satoshi Nakamoto"
        }
      ]
    }
  };
}

function parseDecks(results) {
  return results ? JSON.parse(results) : Decks();
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(parseDecks);
}

export function getDeck(id) {
  return getDecks().then(decks => decks[id]);
}

export function saveDeckTitle(deckTitle) {
  getDecks().then(decks => {
    if (!decks[deckTitle]) {
      decks[deckTitle] = {
        title: deckTitle,
        questions: []
      };
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
  });
}

export function clearDB() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, "");
}

export function addCardToDeck(deckTitle, { question, answer }) {
  getDecks().then(decks => {
    if (decks[deckTitle] && decks[deckTitle]["questions"]) {
      decks[deckTitle]["questions"].push({ question, answer });
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}
