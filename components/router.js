import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import Decks from "./Decks";
import AddCard from "./AddCard";
import AddDeck from "./AddDeck";

import DeckInfo from "./DeckInfo";
import Quiz from "./Quiz";

import { Entypo } from "@expo/vector-icons";

import { charcoal, white, black } from "./utils/colors";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="list" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="add-to-list" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? charcoal : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : charcoal,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckInfo: {
    screen: DeckInfo,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      },
      headerBackTitle: null
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Add Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Quiz"
    }
  }
});
