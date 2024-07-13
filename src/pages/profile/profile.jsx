import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar/index'
import UseAuthStore from '../../store/authStore.js'
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

const ProfilePage = () => {
  const navigate = useNavigate()
  const { userID } = useParams()
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    photo: '',
    name: '',
    title: '',
    biography: ''
  });
  const jwt = UseAuthStore((state) => state.jwt);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    if (jwt == null) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, [jwt, userID])

  useEffect(() => {
    if (isLoggedIn == false) {
      return
    }

    axios.get(`http://localhost:3000/api/users/token`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then((res) => {
      if (res.status == 200) {
        const data = res.data.data

        if (data.id == userID) {
          setIsCurrentUser(true)
        } else {
          setIsCurrentUser(false)
        }
      }
    })
  }, [isLoggedIn, userID])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${userID}`, {
    }).then((res) => {
      if (res.status == 200) {
        setApiData(res.data.data)
        const data = res.data.data
        setProfileData({
          photo: data.profile_picture,
          name: data.name,
          title: data.title,
          biography: data.biography
        })
        setIsLoading(false)
      }
    })
  }, [isLoading, userID])

  /**
  * @param {React.ChangeEvent<HTMLInputElement>} e
  */
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0])
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (photo) {
      axios.patch(`http://localhost:3000/api/users/${userID}`, {
        image: photo
      }, {
        headers: {
          "Content-Type": 'multipart/form-data',
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        setIsLoading(true)
      })
    }

    axios.patch(`http://localhost:3000/api/users/${userID}`, {
      name: profileData.name,
      biography: profileData.biography,
      title: profileData.title,
    }, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then(res => {
      setIsLoading(true)
    })


    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = (_e => {
    return navigate("/upload")
  })

  if (isLoading == true) {
    return (
      <div></div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar></Navbar>

      <section className="max-w-3xl mx-auto pb-8 pt-8 bg-white rounded-lg shadow-md overflow-hidden">
        {isEditing ? (
          <div className="flex flex-col h-40 bg-cover bg-center justify-center items-center gap-4 pt-10">
            <img
              src={profileData.photo}
              alt="Profile"
              className="bottom-0 left-1/2 transform w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <div className="flex justify-center flex-col">
              <input
                type="file"
                className=" border-solid border-2 p-3 rounded-lg"
                accept="image/jpeg, image/jpg, image/png"
                onChange={handleFileChange}
              />
              <p className="font-light text-xs text-gray-500">Accepted file types : JPEG, JPG, PNG</p>

            </div>

          </div>
        ) :
          (
            <div className="relative h-40 bg-cover bg-center">
              <img
                src={profileData.photo}
                alt="Profile"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>)

        }

        <div className="mt-16 p-6 text-center">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="text-2xl font-bold mb-2 text-center"
              />
              <input
                type="text"
                name="title"
                value={profileData.title}
                onChange={handleChange}
                className="text-gray-600 mb-4 text-center"
              />
              <textarea
                name="biography"
                value={profileData.biography}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
              />
              <button onClick={handleSave} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-gray-600 mb-4">{profileData.title}</p>
              <p className="text-sm text-gray-700 mb-4">{profileData.biography}</p>
              {
                isCurrentUser ? (
                  <div>
                    <button onClick={handleEdit} className="px-4 py-2 border rounded mr-2">
                      Edit profile
                    </button>
                    <button onClick={handleUpload} className="px-4 py-2 bg-red-600 text-white rounded">
                      Upload Photo
                    </button>
                  </div>
                ) : (<div></div>)
              }
            </>
          )}

        </div>
      </section>


      <section className="max-w-7xl mx-auto mt-8 px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
              <img
                src={`https://via.placeholder.com/300x300?text=Photo${index + 1}`}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
