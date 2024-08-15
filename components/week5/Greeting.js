import { View, Text } from "react-native/types";

export default function Greeting(props){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}