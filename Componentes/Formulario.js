import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Picker } from '@react-native-picker/picker';



function Formulario() {

  const navigation = useNavigation();

  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, SetFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [clientes, setCliente] = useState([]);

  const guardar = () => {
    if (!cedula || !nombres) return null;
    const nuevoCliente = {
      nuevacedula: cedula,
      nuevonombres: nombres,
      nuevoapellidos: apellidos,
      nuevofechanac: fechaNacimiento,
      nuevosexo: sexo,
    }

    setCliente([nuevoCliente, ...clientes])
    Alert.alert('Datos almacenados', `
    Cédula: ${cedula}
    Nombres: ${nombres}
    Apellidos: ${apellidos}
    Fecha Nacimiento: ${fechaNacimiento}
    Sexo: ${sexo}
`
    );

    setCedula('');
    setNombres('');
    setApellidos('');
    SetFechaNacimiento('');
    setSexo('');
  }


  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> Guardar Nuevo cliente </Text>

      <View style={styles.containerInput}>

        <Text style={styles.label}> Cedula </Text>
        <TextInput
          style={styles.input}
          value={cedula}
          onChangeText={setCedula}
          placeholder='Ej: 365-440955-0002h'
        />

        <Text style={styles.label}>Nombres: </Text>
        <TextInput
          style={styles.input}
          value={nombres}
          onChangeText={setNombres}
          placeholder='Ej: Juan carlos '>
        </TextInput>

        <Text style={styles.label}>Apellidos</Text>
        <TextInput
          style={styles.input}
          value={apellidos}
          onChangeText={setApellidos}
          placeholder='Apellidos'
        ></TextInput>

        <Text style={styles.label}>Fecha de nacimiento</Text>
        <TextInput
          style={styles.input}
          value={fechaNacimiento}
          onChangeText={SetFechaNacimiento}
          placeholder='YYYY-MM-DD'
        ></TextInput>


        <Text style={styles.label}>Sexo</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Seleccione.." value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Femenino" value="Femenino" />
          </Picker>
        </View>
      </View>
      <View style={styles.botonGuardar}>
        <Button title="Guardar" onPress={guardar}></Button>
      </View>

      <View style={styles.botonContainer}>
        <Button title="Lista"
          onPress={() => navigation.navigate('Lista')} />
      </View>

    </View>


  )

}

export default Formulario;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#C9E0BD'
  },
  containerInput: {

  },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: '#358B47',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    width: 300,
    height: 55
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    marginTop: 5,
    marginBottom: 15,
    width: 300,
    borderColor: '#358B47',
  },
  titulo: {
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#4F8B2E',
    alignContent: 'center'
  },
  botonGuardar: {
    margin: 10,
  },
})
