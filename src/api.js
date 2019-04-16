const facebookId = "681108301";
export const FAKE_USER = {
  firstName: "Byungdae",
  lastName: "Sohn",
  username: "guest",
  avatar: `https://graph.facebook.com/${facebookId}/picture?type=normal`
};
export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "guest" && password === "pass") {
        resolve(FAKE_USER);
      } else {
        reject({ message: "Invalid username or password" });
      }
    }, 300);
  });
}
