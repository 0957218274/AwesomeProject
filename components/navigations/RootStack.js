import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Health from "../../screens/week5/Heatlth";
import Resort from "../../screens/week4/Resort";
import Travel from "../../screens/week3/Travel";
import Location from "../../screens/week10/Location";
import LocationQuiz from "../../screens/week10/LocationQuiz";

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="LocationQuiz" component={LocationQuiz} />
            <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: "Pokemon World" }} />
            <Stack.Screen name="Travel" component={Travel} options={{ title: "Travel" }} />
            <Stack.Screen name="Resort" component={Resort} options={{ title: "Resort" }} />
            <Stack.Screen name="Health" component={Health} options={{ title: "Health" }} />
        </Stack.Navigator>
    );
}
