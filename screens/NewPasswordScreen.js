import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faCheckCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const navigation = useNavigation();

  const handleSavePassword = () => {
    setShowCongratulations(true);
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 2000); // Navigate to Home Screen after 2 seconds
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your New Password</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.lockIcon} />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={faEye} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.lockIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={faEye} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.rememberMeContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          tintColors={{ true: 'white', false: 'gray' }}
          boxType="square"
          style={styles.checkBox}
        />
        <Text style={styles.rememberMeText}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleSavePassword}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      {showCongratulations && (
        <View style={styles.overlay}>
          <View style={styles.congratulationsContainer}>
            <FontAwesomeIcon icon={faCheckCircle} style={styles.verifyIcon} size={80} />
            <Text style={styles.congratulationsText}>Congratulations!</Text>
            <Text style={styles.successText}>Password changed successfully</Text>
            <ActivityIndicator size="large" color="blue" style={styles.loadingIcon} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    paddingLeft: 10,
  },
  lockIcon: {
    color: 'white',
    marginRight: 10,
  },
  eyeIcon: {
    color: 'white',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  rememberMeText: {
    color: 'white',
    marginLeft: 10,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
  continueButton: {
    backgroundColor: '#808836',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  congratulationsContainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  verifyIcon: {
    color: 'green',
    fontSize: 80, // Increased the icon size
  },
  congratulationsText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  successText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  loadingIcon: {
    marginTop: 20,
  },
});

export default NewPasswordScreen;

