import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Garlic Bread',
      imgUrl: '../../assets/img/garlic-bread.jpg',
      ingredients: ['Garlic', 'Bread']
    },
    {
      id: 'r2',
      title: 'Chicken Salad',
      imgUrl: '../../assets/img/chicken-salad.jpg',
      ingredients: ['Chicken', 'Salad']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
