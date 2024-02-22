import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ParentComponent />} /> {}
            <Route path="/recipe-list" element={<RecipeList />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
