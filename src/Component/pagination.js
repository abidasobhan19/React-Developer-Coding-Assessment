import React, { useState } from "react";
import useUser from "../Hooks/useUserHook";
import PaginationHelper from "../Helper/pagination";
import UserList from "./userList";
const Pagination = () => {
  const { users } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users?.users?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPosts);
  console.log(currentPage);
  return (
    <>
      <UserList posts={currentPosts} />
      <PaginationHelper
        postsPerPage={postsPerPage}
        totalPosts={users?.users?.length}
        paginate={paginate}
      />
    </>
  );
};

export default Pagination;
