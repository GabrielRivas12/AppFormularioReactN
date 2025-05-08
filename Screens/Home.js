import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.botonContainer}>
                <Button
                    title="Ir al Formulario"
                    onPress={() => navigation.navigate('Formulario')}
                />
            </View>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    botonContainer: {
        margin: 5,
    }
});
