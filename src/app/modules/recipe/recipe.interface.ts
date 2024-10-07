import { Types } from 'mongoose';

export interface IRecipe {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  name: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  cookingTime: number; // in minutes
  tags: string[]; // e.g., "vegetarian", "gluten-free"
  ratings: number[];
  comments: Types.ObjectId[];
  upvotes: number;
  downvotes: number;
  isPublished: boolean;
}

export interface IRecipeCreate {
  name: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  cookingTime: number;
  tags: string[];
}

export interface IRecipeUpdate {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  ingredients?: string[];
  cookingTime?: number;
  tags?: string[];
}

export interface IRecipeFilter {
  name?: string;
  title?: string;
  ingredients?: string[]; // Search recipes containing any of these ingredients
  minCookingTime?: number;
  maxCookingTime?: number;
  tags?: string[];
  keyword?: string; // Search by any keyword in name, title, or description
}
