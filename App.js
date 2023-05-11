import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/home";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigation/bottom-navigation";

const App = () => {
    return (

        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>

    )
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})