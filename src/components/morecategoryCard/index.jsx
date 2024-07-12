import { Link } from "react-router-dom";
const index = (props) => {
  return (
    <>
      <Link to={`/preview/${props.imgID}`}>
        <div className='h-[362px] w-[251px] object-cover overflow-hidden relative'>
          <div className='absolute flex translate-y-[6rem] pl-[15px] pb-[15px] hover:-translate-y-[0rem] h-full w-full items-end ease-in-out duration-300'>
            <div className='flex gap-[15px] items-center'>
              <div>
                <img className="w-[33px] h-[33px]" src={props.userImg} alt="" />
              </div>
              <div className='text-[#fff]'>
                <span className='text-[13px] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-medium'>{props.userName}</span>
                <p className='text-[10px] font-normal [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-[#BABABA]'>{props.userTitle}</p>
              </div>
            </div>
          </div>
          <img className='h-[362px] w-[251px] object-cover' src={props.img} alt="" />
        </div>
      </Link>
    </>
  )
}

export default index;
