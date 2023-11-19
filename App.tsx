import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./pages/Home";
import LearnScreen from "./pages/Learn";
import SettingsScreen from "./pages/Settings";
import SettingsLearnScreen from "./pages/SettingsLearn";

import { RootStackParamList } from "./types";
import LearnResultsScreen from "./pages/LearnResults";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SettingsLearn" component={SettingsLearnScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="LearnResults" component={LearnResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;