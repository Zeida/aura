import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LIGHT_PINK } from '../constants/Colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen'); 
    }, 8000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PINK, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
});

export default SplashScreen;
