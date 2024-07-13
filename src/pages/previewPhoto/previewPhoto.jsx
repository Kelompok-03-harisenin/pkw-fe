import Navbar from "../../components/navbar/index"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseAuthStore from '../../store/authStore.js'
import axios from "axios";


const index = () => {
  const jwt = UseAuthStore((state) => state.jwt);
  const { photoID } = useParams();
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (jwt == null) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, [jwt])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/photo/${photoID}`).then((res) => {
      if (res.status == 200) {
        setApiData(res.data.data)
        if (isLoggedIn) {
          axios.get(`http://localhost:3000/api/likes/photo/${photoID}/usercheck`, {
            headers: {
              Authorization: `Bearer ${jwt}`
            }
          }).then((res) => {
            if (res.status == 200) {
              setIsLiked(res.data.data.status)
            }
          })
        }
        setIsLoading(false)
      }
    })
  }, [isLoading, photoID, isLiked, isLoggedIn])

  const handleLike = () => {
    if (isLiked == false) {
      axios.post(`http://localhost:3000/api/likes/photo/${photoID}`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(() => {
        setIsLoading(true)
      })
    } else if (isLiked == true) {
      axios.delete(`http://localhost:3000/api/likes/photo/${photoID}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(() => {
        setIsLoading(true)
      })
    }
  }


  return (
    <div>
      <Navbar />
      {isLoading ? (<div></div>) :
        (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row w-full h-full max-w-5xl">
              <div className="p-4 flex items-center">
                <img
                  className=""
                  src={apiData.photo_url} // Make sure to replace this path with the correct path to your image
                  alt={apiData.title}
                />

              </div>
              <div className="p-20">
                <span className=" bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-br-lg">
                  {apiData.categoryName}
                </span>
                <h2 className="text-2xl font-bold mb-2">{apiData.title}</h2>
                <p className="text-gray-700 mb-4 min-w-[300px]">
                  {apiData.description}
                </p>
                <div className="flex items-center mb-4">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={apiData.userProfilePicture} // Replace this with the correct path to the profile image
                    alt={apiData.userTitle}
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-semibold">{apiData.userName}</span>
                    <span className="text-gray-500 ">{apiData.userTitle}</span>
                  </div>
                </div>
                <div className="flex items-center align-center">
                  {
                    isLoggedIn ? (
                      <div className="flex align-center">
                        {
                          isLiked ? (
                            <span className="text-red-500 mr-2" onClick={handleLike}>
                              <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3422 28.4134L17.3392 28.415C17.2351 28.4707 17.1185 28.5 17 28.5C16.8815 28.5 16.7649 28.4707 16.6608 28.415L16.6578 28.4134C16.3392 28.2455 12.2707 26.038 8.28932 22.5676C4.28127 19.0739 0.500138 14.4197 0.5 9.36707C0.502738 7.01697 1.44188 4.76343 3.11217 3.10094C4.78253 1.43837 7.04774 0.502728 9.41098 0.5C12.4001 0.500076 14.9916 1.77705 16.6008 3.91035L17 4.4395L17.3992 3.91035C19.0084 1.77705 21.5999 0.500077 24.589 0.5C26.9523 0.502728 29.2175 1.43837 30.8878 3.10094C32.5582 4.7635 33.4973 7.01716 33.5 9.36736C33.4997 14.4199 29.7187 19.074 25.7107 22.5676C21.7293 26.038 17.6608 28.2455 17.3422 28.4134Z" fill="#E60023" stroke="#E60023" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-gray-500 mr-2" onClick={handleLike}>
                              <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3422 28.4134L17.3392 28.415C17.2351 28.4707 17.1185 28.5 17 28.5C16.8815 28.5 16.7649 28.4707 16.6608 28.415L16.6578 28.4134C16.3392 28.2455 12.2707 26.038 8.28932 22.5676C4.28127 19.0739 0.500138 14.4197 0.5 9.36707C0.502738 7.01697 1.44188 4.76343 3.11217 3.10094C4.78253 1.43837 7.04774 0.502728 9.41098 0.5C12.4001 0.500076 14.9916 1.77705 16.6008 3.91035L17 4.4395L17.3992 3.91035C19.0084 1.77705 21.5999 0.500077 24.589 0.5C26.9523 0.502728 29.2175 1.43837 30.8878 3.10094C32.5582 4.7635 33.4973 7.01716 33.5 9.36736C33.4997 14.4199 29.7187 19.074 25.7107 22.5676C21.7293 26.038 17.6608 28.2455 17.3422 28.4134Z" fill="#808080" stroke="#E60023" />
                              </svg>
                            </span>
                          )
                        }
                      </div>
                    ) : (
                      <div></div>
                    )
                  }


                  <span className="text-gray-700 font-semibold">{`${apiData.likesCount} Likes`} </span>
                </div>
                {
                  isLoggedIn ? (
                    <div className="mt-4">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a comment"
                      />
                    </div>
                  ) : (
                    <div className="mt-4">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please log in to add a comment"
                        readOnly
                      />
                    </div>
                  )
                }

                <div className="mt-2 text-blue-500">
                  <a href="#">See 5 Comment</a>
                </div>
              </div>
            </div>
          </div>
        )
      }




    </div>
  )
};

export default index;
