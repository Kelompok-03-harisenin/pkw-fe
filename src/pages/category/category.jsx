import dummyImg from '../../asset/images/natureDummy.png'
import userDummyImg from '../../asset/images/userImg.png'
import Card from '../../components/morecategoryCard/index.jsx'
import NavBar from '../../components/navbar/index.jsx'

const index = () => {
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

        {/* card all category */}
        <div className='px-[150px] flex flex-wrap gap-[15px] pt-[151px]'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>


        </div>
      </div>
    </>
  )
}

export default index;
