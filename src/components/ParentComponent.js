import React from 'react';
import SearchForm from './SearchForm';
import { fetchRecipesByQuery } from '../apiService'; // Assuming fetchRecipesByQuery is defined in apiService.js

const ParentComponent = () => {
  const handleSearch = async (query) => {
    try {
      const recipes = await fetchRecipesByQuery(query);
      // Handle the fetched recipes, such as updating state or displaying them in a list
      console.log('Recipes:', recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default ParentComponent;
