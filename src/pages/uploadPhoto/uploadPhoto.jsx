import Navbar from "../../components/navbar/index"
import { useState, useEffect } from 'react';
import UseAuthStore from '../../store/authStore.js'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const index = () => {
  const navigate = useNavigate()
  const [photo, setPhoto] = useState(null)
  const [data, setData] = useState({
    title: '',
    description: '',
    category_id: 0
  });
  const jwt = UseAuthStore((state) => state.jwt);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (jwt == null) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, [jwt])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0])
  }

  const handleSubmit = () => {
    if (data.title == '') {
      return
    }

    if (data.description == '') {
      return
    }

    if (data.category_id == 0) {
      return
    }

    if (photo == null) {
      return
    }

    axios.post(`http://localhost:3000/api/photo`, {
      image: photo,
      title: data.title,
      description: data.description,
      id_category: data.category_id
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
        Authorization: `Bearer ${jwt}`
      }
    }).then(res => {
      const data = res.data.data
      navigate(`/preview/${data.id}`)
    })
  }

  if (!isLoggedIn) {
    return (
      <div>
        <Navbar></Navbar>

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-5xl p-16 px-40 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-8 gap-4">
              <div className=" flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.365 5.64511C21.057 2.18896 18.2451 0 13.9975 0C8.59305 0 4.81168 3.99545 4.48671 9.20816C1.88104 10.0379 0 12.6844 0 15.682C0 19.3516 2.89734 22.4515 6.32601 22.4515H9.03576C9.55351 22.4515 9.97372 22.0331 9.97372 21.5176C9.97372 21.0017 9.55351 20.5838 9.03576 20.5838H6.32601C3.91359 20.5838 1.84634 18.3393 1.84634 15.682C1.84634 13.3339 3.49995 11.2155 5.57424 10.8606L6.42543 10.7144L6.34993 9.85858L6.34289 9.84784C6.34289 5.29909 9.34951 1.86815 13.9975 1.86815C17.7231 1.86815 19.8162 3.69568 20.7842 6.81285L20.9848 7.4558L21.6606 7.47028C25.1451 7.54312 28.2001 10.3577 28.2001 13.8546C28.2001 17.0371 26.0817 20.5838 22.8744 20.5838H20.7311C20.2134 20.5838 19.7932 21.0022 19.7932 21.5176C19.7932 22.0336 20.2134 22.4515 20.7311 22.4515L22.8673 22.4487C27.5571 22.3254 30 17.865 30 13.8546C30 9.54396 26.6069 6.09948 22.365 5.64517L22.365 5.64511ZM15.7103 13.0859C15.7051 13.0803 15.7032 13.0756 15.6999 13.0709L15.4626 12.8239C15.3327 12.6871 15.1596 12.6194 14.9866 12.6204C14.8135 12.619 14.6414 12.6871 14.5091 12.8239L14.2719 13.0709C14.2672 13.0756 14.2662 13.0812 14.262 13.0859L10.8765 16.8138C10.6143 17.0865 10.6143 17.5277 10.8765 17.8013L11.1128 17.961C11.375 18.2337 11.7999 18.1454 12.0616 17.8727L14.058 15.6568V25.0662C14.058 25.5816 14.4782 26 14.996 26C15.5138 26 15.934 25.5816 15.934 25.0662V15.6656L17.9965 17.9311C18.2587 18.2038 18.6826 18.292 18.9443 18.0193L19.1807 17.8597C19.4429 17.586 19.4429 17.1448 19.1807 16.8721L15.7103 13.0859Z" fill="#E60023" /></svg>
              </div>
              <h2 className="text-2xl font-semibold">Please log in to upload a photo</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (

    <div>
      <Navbar></Navbar>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-5xl p-16 px-40 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-8 gap-4">
            <div className=" flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.365 5.64511C21.057 2.18896 18.2451 0 13.9975 0C8.59305 0 4.81168 3.99545 4.48671 9.20816C1.88104 10.0379 0 12.6844 0 15.682C0 19.3516 2.89734 22.4515 6.32601 22.4515H9.03576C9.55351 22.4515 9.97372 22.0331 9.97372 21.5176C9.97372 21.0017 9.55351 20.5838 9.03576 20.5838H6.32601C3.91359 20.5838 1.84634 18.3393 1.84634 15.682C1.84634 13.3339 3.49995 11.2155 5.57424 10.8606L6.42543 10.7144L6.34993 9.85858L6.34289 9.84784C6.34289 5.29909 9.34951 1.86815 13.9975 1.86815C17.7231 1.86815 19.8162 3.69568 20.7842 6.81285L20.9848 7.4558L21.6606 7.47028C25.1451 7.54312 28.2001 10.3577 28.2001 13.8546C28.2001 17.0371 26.0817 20.5838 22.8744 20.5838H20.7311C20.2134 20.5838 19.7932 21.0022 19.7932 21.5176C19.7932 22.0336 20.2134 22.4515 20.7311 22.4515L22.8673 22.4487C27.5571 22.3254 30 17.865 30 13.8546C30 9.54396 26.6069 6.09948 22.365 5.64517L22.365 5.64511ZM15.7103 13.0859C15.7051 13.0803 15.7032 13.0756 15.6999 13.0709L15.4626 12.8239C15.3327 12.6871 15.1596 12.6194 14.9866 12.6204C14.8135 12.619 14.6414 12.6871 14.5091 12.8239L14.2719 13.0709C14.2672 13.0756 14.2662 13.0812 14.262 13.0859L10.8765 16.8138C10.6143 17.0865 10.6143 17.5277 10.8765 17.8013L11.1128 17.961C11.375 18.2337 11.7999 18.1454 12.0616 17.8727L14.058 15.6568V25.0662C14.058 25.5816 14.4782 26 14.996 26C15.5138 26 15.934 25.5816 15.934 25.0662V15.6656L17.9965 17.9311C18.2587 18.2038 18.6826 18.292 18.9443 18.0193L19.1807 17.8597C19.4429 17.586 19.4429 17.1448 19.1807 16.8721L15.7103 13.0859Z" fill="#E60023" /></svg>
            </div>
            <h2 className="text-2xl font-semibold">Choose your photo</h2>
          </div>
          <div className="mb-8">
            <label className=" bg-[#D9D9D911] flex flex-col items-center justify-center w-full min-h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500">
              {
                photo ? (
                  <div>
                    <img className="overflow-hidden min-h-40 w-[770px] object-cover" src={URL.createObjectURL(photo)} />
                  </div>
                ) : (
                  <div>
                    <p className="text-[#1E1E1E] font-medium">Upload images</p>
                    <p className="text-[#6D6D6D] text-sm">Your image will be uploaded as attachment</p>
                  </div>
                )
              }
              <input
                type="file"
                className="hidden"
                accept="image/jpeg, image/jpg, image/png"
                onChange={handleFileChange}
              />
            </label>
            <p className="font-light text-xs text-gray-500">Accepted file types : JPEG, JPG, PNG</p>
          </div>
          <div className="mb-8">
            <p className="text-sm font-medium text-[#6D6D6D] pl-2 mb-2">Title</p>
            <input name="title" onChange={handleChange} type="text" className="bg-[#f8f8f8] border-2 border-solid border-gray-300 transition-all ring-0 outline-none focus:ring-0 focus:transition-all resize-none grow h-11 w-full px-4 py-2 rounded focus:outline-none " placeholder="Enter title here" />
          </div>
          <div className="mb-8">
            <p className="text-sm font-medium text-[#6D6D6D] pl-2 mb-2">Description</p>
            <textarea name="description" onChange={handleChange} className="bg-[#f8f8f8] transition-all ring-0 border-2 border-solid border-gray-300 outline-none focus:ring-0 focus:transition-all resize-none grow h-36 w-full px-4 py-2 rounded focus:outline-none " placeholder="Enter description here" />
          </div>
          <div className="mb-8">
            <p className="text-sm font-medium text-[#6D6D6D] pl-2 mb-2">Category</p>
            <select name="category_id" onChange={handleChange} className="bg-[#f8f8f8] transition-all ring-0 border-2 border-solid border-gray-300 outline-none focus:ring-0 focus:transition-all resize-none grow h-11 w-full px-4 py-2 rounded focus:outline-none " placeholder="Enter category here" >
              <option disabled defaultValue>Select category here</option>
              <option value={1}>Nature</option>
              <option value={2}>Wallpaper</option>
              <option value={3}>Fashion</option>
              <option value={4}>Street Photography</option>
              <option value={5}>Travel</option>
              <option value={6}>People</option>
              <option value={7}>Etc</option>
            </select>
          </div>
          <button onClick={handleSubmit} type="submit" className="w-full py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600">
            Upload
          </button>
        </div>
      </div>
    </div>

  )
};

export default index;
