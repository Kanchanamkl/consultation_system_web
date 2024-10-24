import React, { useState } from "react";
import "./ProfileStyles.scss";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    firstName: "Fohne",
    lastName: "Doeint",
    country: "USA",
    city: "Prownton",
    occupation: "Engineer",
    mobile: "076 0570 695",
    email: "fohndoe@gmail.com",
    birthday: "1990-01-01",
    profilePic: "path_to_profile_picture.jpg",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleProfileUpdate = () => {
    console.log("Profile updated", clientInfo);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <SectionContainer>
        <div className="profile-section">
          <div className="left-container">
            <div className="profile-picture-card">
              <img
                src={`https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg`}
                alt="Profile"
              />
              {isEditing && (
                <input
                  type="file"
                  name="profilePic"
                  onChange={(e) =>
                    setClientInfo({
                      ...clientInfo,
                      profilePic: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
              )}
            </div>
          </div>
          <div className="right-container">
            <div className="bio-section">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="firstName"
                    value={clientInfo.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={clientInfo.lastName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="country"
                    value={clientInfo.country}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="occupation"
                    value={clientInfo.occupation}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="mobile"
                    value={clientInfo.mobile}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={clientInfo.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="date"
                    name="birthday"
                    value={clientInfo.birthday}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleProfileUpdate}>Save</button>
                </>
              ) : (
                <>
                  <h2>
                    {clientInfo.firstName} {clientInfo.lastName}
                  </h2>

                  <p>
                    <label style={{ marginRight: '60px' }}>Email:</label> {clientInfo.email}
                  </p>
                  <p>
                    <label style={{ marginRight: '47px' }}>Mobile:</label> {clientInfo.mobile}
                  </p>

                  <p>
                    <label style={{ marginRight: '36px' }}>Birthday:</label> {clientInfo.birthday}
                  </p>
                  <p>
                    <label style={{ marginRight: '15px' }}>Occupation:</label> {clientInfo.occupation}
                  </p>
                  <p>
                    <label style={{ marginRight: '45px' }}>Country: </label> {clientInfo.country}
                  </p>
                  <p>
                    <label style={{ marginRight: '78px' }}>City: </label> {clientInfo.city}
                  </p>

                  <button onClick={handleEditToggle}>Edit</button>
                </>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
    // </div>
  );
};

export default Profile;
