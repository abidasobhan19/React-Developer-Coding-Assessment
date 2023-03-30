import React, { useState, useMemo } from "react";
import { Row } from "react-bootstrap";
import "../Css/userList.css";
import { useNavigate } from "react-router-dom";
const UserList = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="event-schedule-area-two bg-color pad100">
        <div className="container">
          <Row className="table_container">
            <div className="col-lg-12 ">
              <div className="content">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          Sl No.
                        </th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email </th>
                        <th scope="col">Company </th>
                        <th className="text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts?.map((item, index) => {
                        return (
                          <tr className="inner-box" key={index}>
                            <th scope="row">
                              <div className="event-date">
                                <span>{index + 1}</span>
                              </div>
                            </th>
                            {/* <td>
                              <div className="event-img">
                                {item.gender === "male" ? (
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="img-1"
                                  />
                                ) : (
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                    alt="img-2"
                                  />
                                )}
                              </div>
                            </td> */}
                            <td>
                              <div
                                className="event-wrap"
                                onClick={() => {
                                  navigate("/profile", { state: { item } });
                                }}
                              >
                                <h3>
                                  <a>{item.firstName + " " + item.lastName}</a>
                                </h3>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>{item.email}</span>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>{item?.company.address.address}</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default UserList;
