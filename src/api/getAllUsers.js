import { BASE_URL } from "@env";

export const getAllUsers = async () => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/user/all/users`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
