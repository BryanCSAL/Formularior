import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Switch,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function Main() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        placeholder="Digite sua idade"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={sexo}
          onValueChange={setSexo}
          style={styles.picker}
          dropdownIconColor="white"
        >
          <Picker.Item label="Selecione" value="" color="#888" />
          <Picker.Item label="Masculino" value="Masculino" color="white" />
          <Picker.Item label="Feminino" value="Feminino" color="white" />
          <Picker.Item label="Outro" value="Outro" color="white" />
        </Picker>
      </View>

      <Text style={styles.label}>Escolaridade:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={escolaridade}
          onValueChange={setEscolaridade}
          style={styles.picker}
          dropdownIconColor="white"
        >
          <Picker.Item label="Selecione" value="" color="#888" />
          <Picker.Item label="Ensino Médio" value="Ensino Médio" color="white" />
          <Picker.Item label="Ensino Superior" value="Ensino Superior" color="white" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" color="white" />
        </Picker>
      </View>

      <Text style={styles.label}>Limite: R$ {limite.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        minimumTrackTintColor="white"
        maximumTrackTintColor="#555"
        thumbTintColor="white"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch
          value={brasileiro}
          onValueChange={setBrasileiro}
          trackColor={{ false: '#777', true: 'white' }}
          thumbColor={brasileiro ? 'black' : '#ccc'}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Confirmar" onPress={() => setMostrar(true)} color="white" />
      </View>

      {mostrar && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Nome: {nome}</Text>
          <Text style={styles.resultadoTexto}>Idade: {idade}</Text>
          <Text style={styles.resultadoTexto}>Sexo: {sexo}</Text>
          <Text style={styles.resultadoTexto}>Escolaridade: {escolaridade}</Text>
          <Text style={styles.resultadoTexto}>Limite: R$ {limite.toFixed(2)}</Text>
          <Text style={styles.resultadoTexto}>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 5,
    color: 'white',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 12,
  },
  picker: {
    color: 'white',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#111',
    borderRadius: 5,
  },
  resultadoTexto: {
    color: 'white',
    marginBottom: 4,
  },
});
