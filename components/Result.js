import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ nome, idade, sexo, escolaridade, limite, brasileiro }) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.resultadoTitulo}>Dados informados:</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite: R$ {limite.toFixed(2)}</Text>
      <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    marginTop: 30,
    borderTopWidth: 1,
    paddingTop: 20,
  },
  resultadoTitulo: {
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
