import api from "./api";
import errorHandler from "../helpers/errorHandler";

async function getProfile({ headers, username }) {
  try {
    const { data } = await api({ headers, url: `api/profiles/${username}` });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default getProfile;
