// models/User.js

class User {
    constructor(firstName, lastName, nationality, email, uid) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.nationality = nationality;
      this.email = email;
      this.uid = uid;
    }

    // Getters
    getFirstName() {
      return this.firstName;
    }

    getLastName() {
      return this.lastName;
    }

    getNationality() {
      return this.nationality;
    }

    getEmail() {
      return this.email;
    }

    getUid() {
      return this.uid;
    }

    // Setters
    setFirstName(firstName) {
      this.firstName = firstName;
    }

    setLastName(lastName) {
      this.lastName = lastName;
    }

    setNationality(nationality) {
      this.nationality = nationality;
    }

    setEmail(email) {
      this.email = email;
    }

    setUid(uid) {
      this.uid = uid;
    }
  }

  module.exports = User;
