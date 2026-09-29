import api from "./api";
import errorHandler from "../helpers/errorHandler";

async function postComment({ body, headers, slug }) {
  try {
    const { data } = await api({
      data: { comment: { body } },
      headers,
      method: "POST",
      url: `api/articles/${slug}/comments`,
    });

    return data.comment;
  } catch (error) {
    errorHandler(error);
  }
}

export default postComment;
