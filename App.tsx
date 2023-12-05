import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./pages/Home";
import LearnScreen from "./pages/Learn";
import SettingsScreen from "./pages/Settings";
import SettingsLearnScreen from "./pages/SettingsLearn";

import { RootStackParamList } from "./types";
import LearnResultsScreen from "./pages/LearnResults";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";

          if (route.name === "Home") {
            iconName = focused ? "syllabary-hiragana" : "syllabary-hiragana";
          } else if (route.name === "Settings") {
            iconName = focused ? "account-outline" : "account-outline";
          }

          const newColor = color === "#8E8E8F" ? color : "#9A7861";

          return <Ionicons name={iconName} size={size} color={newColor} />;
        },
        tabBarActiveTintColor: "#9A7861",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Kana", headerTransparent: true, headerTitle: "" }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingsLearn"
            component={SettingsLearnScreen}
            options={{ title: "Start Learn" }}
          />
          <Stack.Screen
            name="Learn"
            component={LearnScreen}
            options={{
              headerBackVisible: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="LearnResults"
            component={LearnResultsScreen}
            options={{
              headerBackVisible: false,
              gestureEnabled: false,
              title: "Results",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
