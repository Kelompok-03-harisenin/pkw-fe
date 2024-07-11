import React, { useState } from 'react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Angelina Stoichkov',
    title: 'Photographer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <section className="max-w-3xl mx-auto pt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-40 bg-cover bg-center" style={{backgroundImage: 'url("/path-to-cover-image.jpg")'}}>
          <img
            src="../../../assets/UserPhotoDefault.jpeg"
            alt="Profile"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
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
                name="description"
                value={profileData.description}
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
              <p className="text-sm text-gray-700 mb-4">{profileData.description}</p>
              <button onClick={handleEdit} className="px-4 py-2 border rounded mr-2">
                Edit profile
              </button>
            </>
          )}
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Upload Photo
          </button>
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