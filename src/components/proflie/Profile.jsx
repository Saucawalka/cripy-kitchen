import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import avatar from "../../assets/download.jpeg";
import back from "../../assets/back-button.png";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", bio: "", image: "",phone:''});
  const [previewImage, setPreviewImage] = useState(null);
  const token = localStorage.getItem("token");
  const fileInputRef = useRef(); // Create a ref for the file input

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const userProfile = async () => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const decoded = JSON.parse(jsonPayload);
    const userEmail = decoded.email;

    const response = await axios.get(
      `${import.meta.env.VITE_DEV_URL}/userProfile/${userEmail}`
    );

    setUser(response.data.user);
    setPreviewImage(response.data.user.image); // Set initial image
  };

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    userProfile();
  }, [navigate, token]);

  if (!user) {
  navigate('/signin')
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setPreviewImage(user.image); // Reset preview image
    } else {
      fileInputRef.current.value = ""; // Clear file input when toggling off edit mode
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Update preview image
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("bio", user.bio);
    formData.append("phone", user.phone);
    
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_DEV_URL}/userProfile/${user.email}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        setUser({ ...user, ...response.data.user }); // Update user state with returned data
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };
  const backbutton=()=>{
    navigate('/home')
  }

  return (
    <div className="containera ms-5 mt-5">
        <div><img src={back} alt="" width={25} onClick={backbutton} /></div>
     
      <div className="container shadow-sm p-2 mb-2 bg-body w-75 rounded-4">
      <h4 className="mb-4 ms-5">Profile</h4>
       <div className=" d-flex ">
       <img
          src={previewImage ?? avatar}
          alt="Profile"
          className="profile-pictures"
        />
        <div className="ms-auto">
        <button className="btan btn  btn-primary text-white border-bottom-1 border  " onClick={handleEditToggle}>
            Edit Profile
          </button>
        </div>
       </div>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="container  mt-3  p-3 mb-2 bg-body  rounded-4 justify-content-center">
            
           <div className="d-flex align-items-center fs-6 fw-bold  ">
            <label htmlFor="image"> Update Profile picture</label>
           <input
              type="file"
              name="image"
              accept="image/*"
              ref={fileInputRef} // Attach ref to the file input
              onChange={handleFileChange} 
              className=" form-control w-75"
            />
           </div>
           <div className="d-flex align-items-center fs-6 fw-bold mt-3 ">
            <label htmlFor="image"> Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              required
               className=" form-control w-75"
            />
           </div>
           <div className="d-flex align-items-center fs-6 fw-bold mt-3 ">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className=" form-control w-75"
            />
           </div>
           <div className="d-flex align-items-center fs-6 fw-bold mt-3 ">
            <label htmlFor="phone"> Phone</label>
            <input
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="phone"
              required
              className=" form-control w-75"
            />
           </div>
           <div className="d-flex align-items-center fs-6 fw-bold mt-3 mb-3">
            <label htmlFor="bio"> Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              placeholder="Bio"
              required
               className=" form-control w-75"
            />
           </div>
           
            
            
            <button type="submit" className="btn btn-success">Save</button>
            <button type="button" onClick={handleEditToggle}  className="btn btn-danger ms-3">Cancel</button>
          </form>
        ) : (
          <>
          <div className="container-fluid mt-3  p-3 mb-2 bg-body  rounded-4">
          <p className='text-dark fs-5 fw-bold'>Personal Info</p>
          <div className=" d-flex justify-content-between pe-3">
          <div>
            <label htmlFor="Full Name" className="fs-6 fw-bold text-secondary"> Full Name</label>
            <p>{user.name}</p>
          </div>
          <div>
            <label htmlFor="email" className="fs-6 fw-bold text-secondary"> Email</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label htmlFor="phone" className="fs-6 fw-bold text-secondary"> Phone</label>
            <p>{user.phone}</p>
          </div>
          </div>
          </div>
          <div className="container mt-3  p-3 mb-5 bg-body   rounded-4">
          <div>
            <label htmlFor="bio" className="fs-6 fw-bold text-dark"> Bio</label>
            <p>{user.bio}</p>
          </div>
          </div>
          
          </>
        )}
        <div className="profile-actions">
          
          <button className="btan btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
