/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated, Easing, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const SelectionScreen = ({ navigation }) => {
  const handlePassengerPress = () => {
    // Navigate to fill profile screen
    navigation.navigate('FillProfile');
  };

  const handleDriverPress = () => {
    // Navigate to driver profile screen
    navigation.navigate('DriverProfile');
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground source={require('../assets/animations/background_image.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <LottieView
            source={require('../assets/animations/pic.json')}
            autoPlay
            loop
            style={styles.animation}
          />
          <Text style={styles.title}>Who are You?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePassengerPress}>
              <Text style={styles.buttonText}>Passenger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDriverPress}>
              <Text style={styles.buttonText}>Driver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: 340, // Set a fixed width for the button, for example, 200 pixels
    height: 40,
    backgroundColor: '#135D66', // Button color
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SelectionScreen;
