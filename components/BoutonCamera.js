import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function BoutonCamera({title, onPress, icon, color}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={40} color={color ? color: '#f1f1f1'}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#f1f1f1',
        marginLeft: 10,
    }
})