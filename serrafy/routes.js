import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Musicas from "./src/pages/Musicas";
import Sobre from "./src/pages/Sobre";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const TabNavigate = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        tabBarStyle: {
          borderTopColor: "transparent",
          paddingTop: 4,
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home-outline" size={28} color="blue" />;
            }
            return <Ionicons name="home-outline" size={26} color="black" />;
          },
          // tabBarActiveTintColor: "tomato",
          // tabBarInactiveTintColor: "gray",
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Músicas"
        component={Musicas}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons name="musical-notes-outline" size={28} color="blue" />
              );
            }
            return (
              <Ionicons name="musical-notes-outline" size={26} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="people-outline" size={28} color="blue" />;
            }
            return <Ionicons name="people-outline" size={26} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
