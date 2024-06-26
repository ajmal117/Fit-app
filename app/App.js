import { View, Text } from "react-native";
import React, { Profiler } from "react";
import { useTheme } from "react-native-paper";

import Register from "@/screens/auth/Register";
import Login from "@/screens/auth/Login";
import ForgetPassword from "@/screens/auth/ForgetPassword";

// import WorkOutPlan from "@/screens/WorkOutPlan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "@/screens/home/Homepage";
import WorkOutPlan from "@/screens/WorkOutPlan";
import DietPlan from "@/screens/DietPlan";
import ConsultSchedule from "@/screens/ConsultSchedule";
import Profile from "@/screens/profile/Profile";

const App = () => {
  const theme = useTheme();
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    satoshiRegular: require("../assets/fonts/Satoshi-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConsultSchedule"
        component={ConsultSchedule}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="WorkOutPlan"
        component={WorkOutPlan}
        options={{
          // headerShown: false,
          // headerStyle: {
          backgroundColor: "#000",
          // },
          // headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="DietPlan"
        component={DietPlan}
        options={{
          // headerShown: false,
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
