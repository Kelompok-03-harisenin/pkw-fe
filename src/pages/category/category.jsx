import Card from '../../components/morecategoryCard/index.jsx'
import NavBar from '../../components/navbar/index.jsx'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const index = () => {
  const { categoryID } = useParams();
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/categories/${categoryID}`).then((res) => {
      setApiData(res.data.data)
      setIsLoading(false)
    })
  }, [ categoryID ])

  return (
    <>
      <NavBar></NavBar>
      <div className='font-inter'>
        <div className="flex justify-center gap-[153px] h-[190px] mt-[106px] lg:px-[100px]">
          <div className="w-[653px] break-words">
            <h1 className="font-semibold text-[40px]">CaptureCloud</h1>
            <p className="font-normal text-[26px]">Capturing Every Precious Second, Uniting in Visual Harmony that Connects Us All</p>
          </div>
          <div className="flex items-end">
            <div className=" break-words bg-[#EEEEEE] pt-[26px] pb-[50px] pr-[22px] pl-[22px]">
              <p className="w-[222px] font-normal text-[15px]">Yes, it's totally free. All images can be downloaded and used for personal or commercial projects</p>
            </div>
          </div>
        </div>

        < div>
          {
            isLoading ? (<div></div>) : (<h2 className='text-[40px] font-semibold text-center'>{apiData.category_name}</h2>)
          }
        </div>

        {/* card all category */}
        <div className='px-[150px] justify-center flex flex-wrap gap-[15px] pt-[151px] mb-10'>
          {isLoading ? (
            <div></div>
          ) : (apiData.photos.map((item) =>
            < Card img={item.photo_url} key={item.id}  userImg={item.user_profile_picture} userName={item.user_name} userTitle={item.user_title} />
          )
          )}
        </div>
      </div>
    </>
  )
}

export default index;
