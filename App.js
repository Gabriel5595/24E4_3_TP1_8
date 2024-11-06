import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <View style={styles.container}>
      <MovieCard
        title="O Rei Leão"
        image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3429E72F594CA84B8448FE5F8BDE1773505217A9541297CB1E85719EC8D686C/scale?width=1200&aspectRatio=1.78&format=webp"
        cinema="Cinemark Shopping"
        startTime="18:30"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default App;
