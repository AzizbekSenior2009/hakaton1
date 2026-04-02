import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./User.css"
import img from "../assets/Curator avatar.png"

const User = () => {
  return (
    <div className="users">
      <h1>User Management</h1>
      <div className="comment">
        <p> 
          Curate your organization's access hierarchy. Manage roles,
          permissions, and active status for all digital curators within the
          Fiscal Atelier ecosystem.
        </p>
        <button>+ Add User</button>
      </div>
      <div className="input_info">
        <input type="text" placeholder="Find user by name or email..."/>
        <button>All Roles  <IoIosArrowDown /></button>
        <div className="number">
            <h2>Total Curators</h2>
            <h3>142</h3>
        </div>

        <div className="number">
            <h2>Active Now</h2>
            <h3>12</h3>
        </div>
      </div>
       <div className="add_user">
        <div className="title">
            <div className="access_a">Curator Name</div>
            <div className="access">Access Role</div>
            <div className="access">Onboarding Date</div>
            <div className="access">Current Status</div>
            <div className="access">Actions</div>
        </div>
        <div className="users_second">
            <img src={img} alt="" />
            <div className="u_email">
                <h3>Elena Rodriguez</h3>
                <h4>elena.r@fiscalatelier.com</h4>
            </div>
            <button className="green">ADMIN</button>
            <p>Oct 12, 2023</p>
            <h5>Active</h5>
            <div className="btn">
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
               <div className="users_second">
            <img src={img} alt="" />
            <div className="u_email">
                <h3>Elena Rodriguez</h3>
                <h4>elena.r@fiscalatelier.com</h4>
            </div>
            <button className="green">ADMIN</button>
            <p>Oct 12, 2023</p>
            <h5>Active</h5>
            <div className="btn">
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
               <div className="users_second">
            <img src={img} alt="" />
            <div className="u_email">
                <h3>Elena Rodriguez</h3>
                <h4>elena.r@fiscalatelier.com</h4>
            </div>
            <button className="green">ADMIN</button>
            <p>Oct 12, 2023</p>
            <h5>Active</h5>
            <div className="btn">
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
               <div className="users_second">
            <img src={img} alt="" />
            <div className="u_email">
                <h3>Elena Rodriguez</h3>
                <h4>elena.r@fiscalatelier.com</h4>
            </div>
            <button className="green">ADMIN</button>
            <p>Oct 12, 2023</p>
            <h5>Active</h5>
            <div className="btn">
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
               <div className="users_second">
            <img src={img} alt="" />
            <div className="u_email">
                <h3>Elena Rodriguez</h3>
                <h4>elena.r@fiscalatelier.com</h4>
            </div>
            <button className="green">ADMIN</button>
            <p>Oct 12, 2023</p>
            <h5>Active</h5>
            <div className="btn">
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </div>
       </div>
    </div>
  );
};

export default User;
