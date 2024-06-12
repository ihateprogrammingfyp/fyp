import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const signup = async (userDetails) => {
  try {
    const response = await api.post('/signup', userDetails);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// Export other API methods as needed
