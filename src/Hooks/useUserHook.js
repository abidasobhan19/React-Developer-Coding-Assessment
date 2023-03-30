import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Api/Base_Url";
const useUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // all users retrieved from api
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.log(error));

    axios
      .get(BASE_URL + "users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedUser) {
      // Fetch the posts of the selected user
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.id}`
      )
        .then((response) => response.json())
        .then((data) => setUserPosts(data))
        .catch((error) => console.log(error));
    } else {
      setUserPosts([]);
    }
  }, [selectedUser]);

  return { users, selectedUser, setSelectedUser, userPosts };
};

export default useUser;
