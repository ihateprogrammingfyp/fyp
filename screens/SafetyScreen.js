import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShield, faAmbulance, faCar, faLightbulb, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SafetyScreen = ({ navigation }) => {
  const handleOptionPress = (option) => {
    switch (option) {
      case 'Ambulance':
        Linking.openURL('tel:115');
        break;
      case 'Police':
        Linking.openURL('tel:15');
        break;
      case 'Safety Tips':
        navigation.navigate('Next');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.safetyIconContainer}>
          <FontAwesomeIcon icon={faShield} size={50} color="green" />
        </View>
      </View>
      <Text style={styles.title}>Who do you want to contact?</Text>
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Ambulance')}>
        <View style={styles.optionIcon}>
          <FontAwesomeIcon icon={faAmbulance} size={20} color="#D2DE32" />
        </View>
        <Text style={styles.optionText}>Ambulance</Text>
        <FontAwesomeIcon icon={faChevronRight} size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Police')}>
        <View style={styles.optionIcon}>
          <FontAwesomeIcon icon={faCar} size={20} color="#D2DE32" />
        </View>
        <Text style={styles.optionText}>Police</Text>
        <FontAwesomeIcon icon={faChevronRight} size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Safety Tips')}>
        <View style={styles.optionIcon}>
          <FontAwesomeIcon icon={faLightbulb} size={20} color="#D2DE32" />
        </View>
        <Text style={styles.optionText}>Safety Tips</Text>
        <FontAwesomeIcon icon={faChevronRight} size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  iconContainer: {
    marginBottom: 20,
  },
  safetyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
});

export default SafetyScreen;
