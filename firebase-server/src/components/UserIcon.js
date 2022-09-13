import React from "react";

const UserIcon = ({ photoUrl }) => {
  console.log(photoUrl);
  return (
    <>
      <img src={photoUrl} alt="" />
    </>
  );
};

export default UserIcon;
