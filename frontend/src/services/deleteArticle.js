import api from "./api";
import errorHandler from "../helpers/errorHandler";

async function deleteArticle({ slug, headers }) {
  try {
    const { data } = await api({
      headers,
      method: "DELETE",
      url: `api/articles/${slug}/`,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default deleteArticle;
