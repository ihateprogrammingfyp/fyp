import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DriverDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/animations/driver.jpg')} // Use local image from assets folder
          style={styles.profileImage}
        />
        <Text style={styles.name}>Daniel Austin</Text>
        <Text style={styles.phone}>+1-202-555-0161</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoBox}>
          <Icon name="star" size={24} color="gold" />
          <Text style={styles.infoText}>4.8 Ratings</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="car" size={24} color="black" />
          <Text style={styles.infoText}>279 Trips</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="time" size={24} color="black" />
          <Text style={styles.infoText}>5 years</Text>
        </View>
      </View>
      <View style={styles.detailsSection}>
        <Text style={styles.detailText}>Member Since: July 15, 2019</Text>
        <Text style={styles.detailText}>Car Model: Mercedes-Benz E-Class</Text>
        <Text style={styles.detailText}>Plate Number: HSW 4736 XK</Text>
      </View>
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubbles" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="call" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FDF4E8',
  },
  backButton: {
    marginBottom: 16,
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: 'gray',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoText: {
    marginTop: 4,
    fontSize: 16,
  },
  detailsSection: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 16,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 4,
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 50,
  },
});

export default DriverDetailsScreen;

