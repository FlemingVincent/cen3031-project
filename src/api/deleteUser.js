import { BASE_URL } from "@env";

export const deleteUser = async (userId) => {
  try {
    const res = await fetch(`http://${BASE_URL}:4000/api/user/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
