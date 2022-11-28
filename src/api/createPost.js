import { BASE_URL } from "@env";

export const createPost = async (userId, body) => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/post/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: userId,
        body: body,
      }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
