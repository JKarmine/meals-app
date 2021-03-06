import React from 'react';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
