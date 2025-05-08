import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function Lista() {

    return (
        <View style={styles.container}>


        <Text style={styles.titulo}> Lista de clientes </Text>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C9E0BD'
    },
    titulo: {
        fontSize: 25,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#4F8B2E'
      },
});
