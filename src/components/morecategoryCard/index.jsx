import dummyImg from '../../asset/images/natureDummy.png'
import userDummyImg from '../../asset/images/userImg.png'

const index = () => {
    return (
        <>
        <div className='h-[362px] overflow-hidden relative'>
                <div className='absolute flex translate-y-[6rem] pl-[15px] pb-[15px] hover:-translate-y-[0rem] h-full w-full items-end ease-in-out duration-300'>
                   <a href=""> <div className='flex gap-[15px] items-center'>
                        <div>
                            <img src={userDummyImg} alt="" />
                        </div>
                        <div className='text-[#fff]'>
                            <span className='text-[13px] font-medium'>Username</span>
                            <p className='text-[10px] font-normal text-[#BABABA]'>Photographer</p>
                        </div>
                    </div></a>
                </div>
                <img className='' src={dummyImg} alt="" />
            </div>
        </>
)
}

export default index;