import axios from "axios";

const facebookId = "681108301";
export const FAKE_USER = {
  firstName: "Byungdae",
  lastName: "Sohn",
  username: "guest",
  avatar: `https://graph.facebook.com/${facebookId}/picture?type=normal`
};
export function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "guest" && password === "pass") {
      axios.get("/auth").then(({ data }) => {
        console.log("axios 호출 결과:", data);
        resolve(data);
      });
    } else {
      reject({ message: "Invalid username or password" });
    }
  });
}
