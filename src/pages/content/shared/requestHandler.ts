import axios from "axios";

export const postWithoutAuth = async (path: string, data = {}) => {
  try {
    const response = await axios.post(
      `https://app.garde-robe.com/version-81fld/api/1.1/wf${path}`,
      data,
      {
        headers: {

         'Authorization': 'Bearer 2720f025bb2b120bf870705165985d29',
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (e) {
    return null;
  }
};

export const postWithAuth = async (
  path: string,
  accessToken: string,
  data = {}
) => {
  try {
    const response = await axios.post(
      `https://app.garde-robe.com/version-81fld/api/1.1/wf${path}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    return null;
  }
};
