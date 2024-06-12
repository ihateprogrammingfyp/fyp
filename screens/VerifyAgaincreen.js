/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const VerifyAgainScreen = () => {
  const [timer, setTimer] = useState(60);

  const timerRef = useRef(null);
  const textInputsRef = useRef([]);
  const navigation = useNavigation(); // Initialize useNavigation hook

  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }, [timer]);

  const handleResendCode = () => {
    setTimer(60);
  };

  const handleCodeChange = (index, value) => {
    if (value !== '' && index < 3) {
      // Move cursor to the next TextInput
      textInputsRef.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    // Navigate to the NewPasswordScreen
    navigation.navigate('NewPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Code has been sent to 03******97</Text>
      <View style={styles.codeContainer}>
        {[...Array(4)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            onChangeText={(value) => handleCodeChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (textInputsRef.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode} disabled={timer > 0}>
        <Text style={[styles.resendText, { color: timer > 0 ? 'gray' : 'white' }]}>
          Resend code in {timer}s
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
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
  infoText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 7,
  },
  codeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  codeInput: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  resendButton: {
    marginBottom: 10,
  },
  resendText: {
    color: 'white',
    fontSize: 18,
    marginTop: 50,
  },
  verifyButton: {
    backgroundColor: '#808836',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 100,
    marginTop: 210,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default VerifyAgainScreen;


