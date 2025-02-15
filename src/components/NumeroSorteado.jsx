import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles/styles';

const NumeroSorteado = ({ numero, carregando }) => {
  return (
    <View style={styles.numeroContainer}>
      {carregando ? (
        <ActivityIndicator size="large" color="#FF4500" />
      ) : (
        <Text style={styles.numeroSorteado}>{numero !== null ? numero : "?"}</Text>
      )}
    </View>
  );
};

export default NumeroSorteado;
