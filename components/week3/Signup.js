import React from 'react';
import { View, TextInput, Button } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
            <TextInput placeholder="Input ID" />
            <TextInput placeholder="Input Email" />
            <TextInput placeholder="Input address" />
            <Button title="Sign up" color="green" />            
            
        </View>    
    );
}