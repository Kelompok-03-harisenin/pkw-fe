import deerImg from '../../asset/images/deer.png'
import kidImg from '../../asset/images/kid.png'
import natureImg from '../../asset/images/nature.png'
import bestieImg from '../../asset/images/bestie.png'
import friendsImg from '../../asset/images/friends.png'
import bikecycleImg from '../../asset/images/bikecycle.png'
import monumentImg from '../../asset/images/monument.png'
import buildingImg from '../../asset/images/building.png'

const index = () => {
    return(
        <>
        {/* start hero Section */}
        <div className='flex flex-row gap-[15px] justify-center'>
            <div className='flex flex-col gap-[15px]'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300' src={deerImg} alt="" /> 
                </div>
                <div className='overflow-hidden'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300' src={kidImg} alt="" />
                </div>
            </div>

            <div className='overflow-hidden h-auto'>
                <img className='hover:scale-[1.1] ease-in-out duration-300 h-full' src={natureImg} alt="" />
            </div>

            <div className='flex flex-col gap-[15px]'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300' src={bestieImg} alt="" />
                </div>
                <div className='overflow-hidden'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300' src={friendsImg} alt="" />
                </div>
                <div className='overflow-hidden flex-auto'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300 h-full' src={bikecycleImg} alt="" />
                </div>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300' src={monumentImg} alt="" />   
                </div>
                <div className='overflow-hidden flex-auto'>
                    <img className='hover:scale-[1.1] ease-in-out duration-300 h-full' src={buildingImg} alt="" />   
                </div>
            </div>
        </div>
        {/* end hero Section */}

        </>
    )
};

export default index;