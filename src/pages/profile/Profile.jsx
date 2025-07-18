import React from "react";
import "./profile.css";
import { assets } from "../../assets/asset";

const Profile = () => {
  return (
    <div class="profile-wrapper">
      <div class="profile-container">
        <div class="avatar-wrapper">
          <div class="avatar-img">
            <img src={assets.profileLogo} alt="" />
          </div>

          <div class="avatar-control">
            <i class="bx bx-edit edit-icon"></i>
            <i class="bx bx-trash"></i>
          </div>
        </div>

        <form action="">
          <div class="info-group">
            <label for="">Email</label>
            <input type="text" />
          </div>

          <div class="info-group">
            <label for="">Full Name</label>
            <input type="text" />
          </div>

          <button class="infoUpdate-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
