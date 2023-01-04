import { GET_RECIPES_ENDPOINT } from '../../consts/endpoints';
import { Recipe } from '../../store/recipes';
import HttpHelper from '../../utils/http-helper/HttpHelper';

export default class RecipeService {
  /**
   * @desc - Returns recipes from the database
   *
   * @returns {Promise<Recipe[]>}
   */
  public static async getRecipes(): Promise<Recipe[]> {
    const ah = new HttpHelper();

    const recipeUrl = `${process.env.REACT_APP_BACKEND_URL}${GET_RECIPES_ENDPOINT}`;

    return ah.get(recipeUrl);
  }
}
