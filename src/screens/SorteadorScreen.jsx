import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NumeroSorteado from '../components/NumeroSorteado';
import styles from '../styles/styles';

const SorteadorScreen = () => {
  const [numero, setNumero] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const numerosSorteados = new Set();

  const sortearNumero = () => {
    setCarregando(true);
    setTimeout(() => {
      let novoNumero;
      do {
        novoNumero = Math.floor(Math.random() * 75) + 1;
      } while (numerosSorteados.has(novoNumero));

      numerosSorteados.add(novoNumero);
      setNumero(novoNumero);
      setCarregando(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎱 Sorteador de números</Text>
      <NumeroSorteado numero={numero} carregando={carregando} />
      <TouchableOpacity style={styles.botaoSortear} onPress={sortearNumero} disabled={carregando}>
        <Text style={styles.textoBotao}>Sortear Número</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SorteadorScreen;
