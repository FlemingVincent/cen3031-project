import { BASE_URL } from "@env";

export const followUser = async (currentUser, targetUser) => {
  try {
    const res = await fetch(
      `http://${BASE_URL}:4000/api/user/${targetUser}/follow`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: currentUser,
        }),
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
