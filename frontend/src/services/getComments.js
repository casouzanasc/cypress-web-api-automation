import api from "./api";
import errorHandler from "../helpers/errorHandler";

async function getComments({ slug }) {
  try {
    const { data } = await api({ url: `api/articles/${slug}/comments` });

    return data.comments;
  } catch (error) {
    errorHandler(error);
  }
}

export default getComments;
