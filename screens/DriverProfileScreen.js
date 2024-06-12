import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faEnvelope, faCalendarAlt, faPhoneAlt, faVenus, faFlag } from '@fortawesome/free-solid-svg-icons';
import FemaleIcon from '../assets/animations/female.jpg';

const DriverProfile = ({ navigation }) => {
  const handleSaveProfile = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleSaveProfile}>
          <Image source={FemaleIcon} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveProfile}>
          <FontAwesomeIcon icon={faPen} style={styles.penIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <FontAwesomeIcon  />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Nick Name" placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <FontAwesomeIcon  />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Date of Birth" placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone Number" placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <FontAwesomeIcon icon={faPhoneAlt} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Gender" editable={false} placeholderTextColor="gray" style={[styles.input, styles.placeholder]} />
        <TouchableOpacity>
          <FontAwesomeIcon  />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
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
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  penIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'white',
    paddingHorizontal: 20,
  },
  placeholder: {
    width: '50%', // Adjust as needed
  },
  saveButton: {
    backgroundColor: '#c9184a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 100, // Adjust width as needed
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DriverProfile;