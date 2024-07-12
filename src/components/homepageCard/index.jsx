import dummyImg from '../../asset/images/natureDummy.png'
import userDummyImg from '../../asset/images/userImg.png'

const index = () => {
    return (
        <>
        <div className='flex flex-col gap-[10px]'>
            <div className='overflow-hidden w-[251px] h-[377px]'>
                <img className='hover:scale-[1.1] ease-in-out duration-300' src={dummyImg} alt="" />
            </div>
        <div className='flex items-center gap-[7px]'>
            <div>
                <img src={userDummyImg} alt="" />
            </div>
            <div>
                <span className='text-[13px] font-medium'>Username</span>
                <p className='text-[10px] font-normal text-[#BABABA]'>Photographer</p>
            </div>
        </div>
    </div>           
        </>
    )
}
export default index;
