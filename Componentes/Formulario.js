import { Text, View, StyleSheet, TextInput, Button,Alert } from 'react-native';
import React, { useState } from 'react';


import {Picker} from '@react-native-picker/picker';

function Formulario () {
  
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
  
  setCliente ([nuevoCliente, ...clientes])
  Alert.alert('Datos almacenados',`
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
      <View style={styles.conatinerf}>
            <Text style= {styles.label}> Cedula </Text>
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
                  <Picker.Item label="Seleccione.."value="" />
                  <Picker.Item label="Masculino"value="Masculino" />
                  <Picker.Item label="Femenino"value="Femenino" />
                </Picker>
                </View>
                <Button title="Guardar" onPress={guardar}></Button>
      </View>
      

    )
    
}

export default Formulario;

const styles = StyleSheet.create({
  conatinerf:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    width: 300,
    height: 55
  },
  picker: {
    borderWidth: 1,
    borderColor: '#999',
    marginTop: 5,
    marginBottom: 15,
    width: 300
  }


})
