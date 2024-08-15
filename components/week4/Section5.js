import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section5() {
    return (
        <View style = {{flexDirection: 'row',marginHorizontal: 20 , justifyContent:'space-between' , marginVertical: 10 }}>
            <FontAwesome style = {{color : 'red' }} name='wifi' size={30} />
            <FontAwesome style = {{color : 'red'}} name='coffee' size={30} />
            <FontAwesome style = {{color : 'red'}} name='bath' size={30}/>
            <FontAwesome style = {{color : 'red'}} name='car' size={30}/>
            <FontAwesome style = {{color : 'red'}} name='paw' size={30}/>
            
        </View>
    );
}