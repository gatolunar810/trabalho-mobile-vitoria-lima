import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/meubanco.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo,usuario</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PIX"
/>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
            <ThemedText type="defaultSemiBold">Ultima transferência feita:29/03/2025</ThemedText>
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Cartões"
/>''
        <ThemedText type="subtitle">saldo em credito:</ThemedText>
        <ThemedText> R$4,521
       
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Depósitos"
/>
        <ThemedText type="subtitle">Ultimo deposito feito dia: </ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">10/10/2024</ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
