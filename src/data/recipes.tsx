import Chilli from "./chilli.json";
import Porridge from "./porridge.json";

export type RecipeData = {
  id: string;
  name: string;
  zutaten: {
    einheit: string;
    zutat: string;
  }[];
  dauer: string;
  schritte: string[];
  portionen: number;
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
  };
  bild: string;
};

export const getRecipes = () => [Chilli, Porridge];

export const getRecipeParams = () =>
  getRecipes().map((recipe) => ({
    params: {
      id: recipe.id,
    },
  }));

export const getRecipe = (id: string) =>
  getRecipes().find((recipe) => recipe.id === id) || null;
