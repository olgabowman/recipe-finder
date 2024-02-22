import axios from 'axios';

const API_KEY = '4b12368b4bfce2535df01dfed823c667';
const APP_ID = 'df0872e3';

const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const fetchRecipesByQuery = async (query) => {
   
  };
  

export default searchRecipes;
