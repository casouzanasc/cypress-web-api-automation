import api from "./api";
import errorHandler from "../helpers/errorHandler";

async function getTags() {
  try {
    const { data } = await api({ url: "/api/tags" });

    return data.tags;
  } catch (error) {
    errorHandler(error);
  }
}

export default getTags;
