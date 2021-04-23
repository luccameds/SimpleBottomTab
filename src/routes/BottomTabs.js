import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../constants";

import Home from "../pages/BrowseScreen/index";
import Horários from "../pages/ScheduleScreen/index";
import Salão from "../pages/SalonScreen/index";
import Menu from "../pages/MenuScreen/index";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: theme.colors.white,
    height: 100,
  },
  headerLeft: null,
  headerTitleStyle: theme.fonts.h3,
  headerTintColor: theme.colors.primary,
  headerBackTitle: "white",
  headerTitleAlign: "center",
  gestureEnabled: true,
  gestureDirection: "horizontal",
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function HoráriosStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Horários" component={Horários} />
    </Stack.Navigator>
  );
}
const SalãoStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Salão" component={Salão} />
    </Stack.Navigator>
  );
};
const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray,
        labelStyle: {
          fontFamily: "Rubik-Regular",
          marginBottom: 5,
          fontSize: 10,
          letterSpacing: 0.6,
        },
        style: {
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? "ios-home" : "ios-home-outline"}
              size={15}
              style={{ color: focused ? `${theme.colors.primary}` : tintColor }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Horários"
        component={HoráriosStack}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? "ios-calendar" : "ios-calendar-outline"}
              size={15}
              style={{ color: focused ? `${theme.colors.primary}` : tintColor }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Salão"
        component={SalãoStack}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={15}
              style={{ color: focused ? `${theme.colors.primary}` : tintColor }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? "ios-menu" : "ios-menu-outline"}
              size={15}
              style={{ color: focused ? `${theme.colors.primary}` : tintColor }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
