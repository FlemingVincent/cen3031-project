import { BASE_URL } from "@env";

export const fetchPosts = async (userId) => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/post/feed/${userId}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
