import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useThemeContext } from "@/hooks/theme-context";
import EducationDraw from "@/pages/education/education-draw/education-draw";
import EducationKanaQuickSelectionPage from "@/pages/education/education-kana-quick-selection/education-kana-quick-selection";
import EducationLearning from "@/pages/education/education-learning/ui/education-learning";
import EducationPracticePage from "@/pages/education/education-practice/ui/education-practice";
import EducationResultPage from "@/pages/education/education-result/education-result";
import EducationWelcome from "@/pages/education/education-welcome/education-welcome";
import KanaInfo from "@/pages/education/kana-info/ui";
import Kana from "@/pages/kana/kana";
import ProfilePage from "@/pages/profile/profile";
import { darkTheme } from "@/shared/themes/dark";
import { lightTheme } from "@/shared/themes/light";
import { RootStackParamList } from "@/shared/types/navigationTypes";


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const headerSettings = {
  headerTitle: "",
  headerTransparent: true,
  gestureEnabled: false,
  headerBackVisible: false,
};

function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";

          if (route.name === "Learning") {
            iconName = focused ? "school-outline" : "school-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-outline" : "account-outline";
          } else if (route.name === "Kana") {
            iconName = focused ? "syllabary-hiragana" : "syllabary-hiragana";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Learning" component={EducationWelcome} options={{ title: t("tabs.learning"), headerTransparent: true, headerTitle: "", }} />
      <Tab.Screen name="Kana" component={Kana} options={{ title: t("tabs.kana"), headerTransparent: true, headerTitle: "", lazy: true }} />
      <Tab.Screen name="Profile" component={ProfilePage} options={{ title: t("tabs.profile"), headerTransparent: true, headerTitle: "", }} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

const Layout = () => {
  const { colors } = useThemeContext();
  const { i18n } = useTranslation();  

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedLang = await AsyncStorage.getItem("lang");
        if (savedLang) {
          i18n.changeLanguage(savedLang);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadTheme();
  }, []);

  return (
    <>
      <StatusBar barStyle={colors._theme === "dark" ? "light-content" : "dark-content"} />
      <NavigationContainer
        theme={colors._theme === "dark" ? { dark: true, colors: darkTheme } : { dark: false, colors: lightTheme }} >
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="ChooseAlphabet" component={EducationKanaQuickSelectionPage} options={{ headerShown: false }} />
          <Stack.Screen name="Practice" component={EducationPracticePage} options={{ title: "Practice", ...headerSettings }} />
          <Stack.Screen name="LearningPage" component={EducationLearning} options={{ title: "Learning", ...headerSettings }} />
          <Stack.Screen name="DrawKana" component={EducationDraw} options={{ headerShown: false }} />
          <Stack.Screen name="Results" component={EducationResultPage} options={{ title: "Results", ...headerSettings }} />
          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen 
              name="KanaInfo" 
              component={KanaInfo}
              options={{
                headerTitle: "",
                headerTransparent: true,
              }} />
          </RootStack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Layout;