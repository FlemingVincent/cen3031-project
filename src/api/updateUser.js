import { BASE_URL } from "@env";

export const updateUser = async (userId, key, value) => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/user/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userId, [key]: value }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
