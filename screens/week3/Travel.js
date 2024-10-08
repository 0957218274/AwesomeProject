import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";
import Menu from "../../components/week3/Menu";

import Signup from "../../components/week3/Signup";
import MyIcon from "../../components/week3/MyIcon";
// import MyIcon from "../../components/week3/MyIcon";

export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Menu />
                <MyIcon/>
                <Card />
                <Hotel />
                <Signup />
            </View>
        </ScrollView>
    );
}