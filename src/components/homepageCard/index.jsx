import dummyImg from '../../asset/images/natureDummy.png'
import userDummyImg from '../../asset/images/userImg.png'
import { Link } from 'react-router-dom' 

const index = (props) => {
    return (
        <>
        <div className='h-[362px] w-[251px] object-cover flex flex-col gap-[10px]'>
            <Link to={`/preview/${props.imgID}`} className='overflow-hidden w-[251px] h-[377px]'>
                <img className='hover:scale-[1.1] ease-in-out duration-300 h-[362px] w-[251px] object-cover' src={props.img} alt="" />
            </Link>
        <div className='flex items-center gap-[7px]'>
            <div>
                <img className="w-[33px] h-[33px]" src={props.userImg} alt="" />
            </div>
            <div>
                <span className='text-[13px] font-medium'>{props.userName}</span>
                <p className='text-[10px] font-normal text-[#BABABA]'>{props.userTitle}</p>
            </div>
        </div>
    </div>           
        </>
    )
}
export default index;
