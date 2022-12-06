import { BASE_URL } from "@env";

export const fetchProfilePosts = async (userId) => {
  try {
    const res = await fetch(
      `http://${BASE_URL}:4000/api/post/fetchPosts/${userId}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
