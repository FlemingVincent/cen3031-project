import { BASE_URL } from "@env";

export const getUser = async (userId) => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/user/${userId}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
