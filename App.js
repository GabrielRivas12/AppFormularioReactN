import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Formulario from './Componentes/Formulario';
import guardar from './Componentes/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario>


      </Formulario>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
