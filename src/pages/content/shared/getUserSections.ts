import { postWithAuth } from "@pages/content/shared/requestHandler";

export const getUserSections = async (accessToken, email) => {
  const result = await postWithAuth("/fetch_sections_by_user", accessToken, {
    user_email: email,
  });

  if (result && result.status == "success") {
    return result.response.sections.filter((section) => {
      return section["first?"] === true;
    })[0];
  } else {
    return null;
  }
};
