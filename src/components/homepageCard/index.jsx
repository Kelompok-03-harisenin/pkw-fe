import { Link, useNavigate } from 'react-router-dom'

const index = (props) => {
  const navigate = useNavigate()

  const handleUserClick = () => {
    navigate(`/user/${props.userID}`)
  }
  return (
    <>
      <div className='h-[362px] w-[251px] object-cover flex flex-col gap-[10px]'>
        <Link to={`/preview/${props.imgID}`} className='overflow-hidden w-[251px] h-[377px]'>
          <img className='hover:scale-[1.1] ease-in-out duration-300 h-[362px] w-[251px] object-cover' src={props.img} alt="" />
        </Link>
        <div className='flex items-center gap-[7px]'>
          <div>
            <img className="w-[33px] h-[33px] hover:cursor-pointer" src={props.userImg} alt="" onClick={handleUserClick} />
          </div>
          <div>
            <span className='text-[13px] font-medium hover:cursor-pointer' onClick={handleUserClick}>{props.userName}</span>
            <p className='text-[10px] font-normal text-[#BABABA]'>{props.userTitle}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default index;
