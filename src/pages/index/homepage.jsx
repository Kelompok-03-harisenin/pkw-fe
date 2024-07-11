import deerImg from '../../asset/images/deer.png'
import kidImg from '../../asset/images/kid.png'
import natureImg from '../../asset/images/nature.png'
import bestieImg from '../../asset/images/bestie.png'
import friendsImg from '../../asset/images/friends.png'
import bikecycleImg from '../../asset/images/bikecycle.png'
import monumentImg from '../../asset/images/monument.png'
import buildingImg from '../../asset/images/building.png'
import dummyImg from '../../asset/images/natureDummy.png'
import userDummyImg from '../../asset/images/userImg.png'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/index.jsx'

const index = () => {
    return(
        <>
<div className='flex justify-center font-inter'>
    <div className='flex flex-col w-fit overflow-hidden'>

        <div>
           
        </div>
        {/* start hero Section */}
        <div className='flex flex-row gap-[15px] justify-center' >
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

        {/* Start category section */}
    <div className='flex flex-col gap-[18px] pt-[98px]'>
        <div>
            <h1 className='text-[#141414] text-center font-semibold text-[31px] '>Our Gallery</h1>
            <p className='text-center font-normal text-[#BFBFBF] text-[20px] '>Make yourself one of us</p>
        </div>
        <div className='flex justify-center'>
            <ul className='flex gap-[32px] text-[#ADADAD] text-[28px] items-center'>
                <li><button className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' href="#">Nature</button></li>
                <li><button className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' href="#">Wallpaper</button></li>
                <li><button className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' href="#">Fashion</button></li>
                <li><button className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' href="#">Street Photography</button></li>
                <li><button className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' href="#">Travel</button></li>
                <li><Link className='border-b-[1px] border-b-[#fff] p-[10px] hover:text-[#E60023] hover:border-b-[1px] hover:border-[#E60023] focus:text-[#E60023] focus:border-b-[1px] focus:border-[#E60023]' to={"/moreCategory"} href="#">More</Link></li>
            </ul>
        </div>
    
    <div className='flex flex-col gap-[31px] w-[1080px]'>
        <div className='flex flex-col gap-[5px]'>
            <h1 className='text-[45px] font-semibold'>Nature</h1>
            <p className='text-[22px] font-normal'>Footsteps on Earth, Breathing Peace into Every Leaf</p>
        </div>

        <div className='flex gap-[15px] flex-wrap'>
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
            
        </div>
    </div>

    </div>
    {/* end category Section */}
    </div>
</div>    
    </>
    )
};

export default index;