import axios from "axios";

export default class CardService {
  static async getAll(page = 1) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character",
        { params: { page: page } }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/" + id
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
