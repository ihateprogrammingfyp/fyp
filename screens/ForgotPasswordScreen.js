import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    // Implement the logic for continuing to the next screen or any other action
    // For example:
    // navigation.navigate('NextScreen');
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    if (option === 'SMS') {
      // Navigate to the "Verify Again" screen
      navigation.navigate('VerifyAgain');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/forget.json')} // Your Lottie animation file
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.infoText}>Select which contact details should we use to reset your password:</Text>
      <TouchableOpacity
        style={[styles.buttonContainer, selectedOption === 'SMS' && styles.selectedOption]}
        onPress={() => handleOptionSelection('SMS')}
      >
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faMobileAlt} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>via SMS</Text>
          <Text style={styles.buttonText}>03******97</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, selectedOption === 'Email' && styles.selectedOption]}
        onPress={() => handleOptionSelection('Email')}
      >
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>via Email</Text>
          <Text style={styles.buttonText}>sa******@gmail.com</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  animation: {
    width: '100%', // Adjusted to occupy full width
    height: 250,
    marginBottom: 20, // Added margin to separate animation from other elements
  },
  infoText: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'black', // Change background color to black
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'white', // Change border color to white
    width: '80%',
  },  
  selectedOption: {
    borderColor: '#4A4A4A',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    color: 'black',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#808836',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 70, // Adjusted to have smaller width
    marginTop: 20,
    width: '60%', // Adjusted to occupy 60% of screen width
    alignItems: 'center', // Center align the text
  },
});

export default ForgotPasswordScreen;
