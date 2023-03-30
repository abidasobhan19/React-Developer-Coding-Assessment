import React, { useEffect } from "react";
import "../Css/profile.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useUser from "../Hooks/useUserHook";
const ProfilePage = () => {
  const { users, selectedUser, setSelectedUser, userPosts } = useUser();
  const { state } = useLocation();
  const item = state.item;
  console.log(item);

  useEffect(() => {
    setSelectedUser(item);
  });
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="profile card card-body px-3 pt-3 pb-0">
            <div class="profile-head">
              <div class="photo-content">
                <div class="cover-photo rounded"></div>
              </div>
              <div class="profile-info">
                <div class="profile-photo">
                  <img
                    src={item.image}
                    class="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <div class="profile-details">
                  <div class="profile-name px-3 pt-2">
                    <h4 class="text-primary mb-0">
                      {item?.firstName} {item?.lastName}
                    </h4>
                    <p>Date of Birth : {item?.birthDate}</p>
                  </div>
                  <div class="profile-email  pt-2">
                    <p>Email : {item.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <h3> All Posts</h3>
        {userPosts?.map((item, index) => {
          console.log(item);
          return (
            <Card style={{ marginTop: 10 }}>
              <Card.Header>{item.title}</Card.Header>
              <Card.Body>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProfilePage;
