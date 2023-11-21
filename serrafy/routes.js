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
    <Tab.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="tomato" />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarBadge: 3,
        }}
      />
      <Stack.Screen
        name="Musicas"
        component={Musicas}
        options={{
          tabBarIcon: () => <Octicons name="tools" size={24} color="black" />,
        }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: () => <Octicons name="tools" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};
