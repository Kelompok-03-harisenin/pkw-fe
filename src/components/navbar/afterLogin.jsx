import { Link } from 'react-router-dom'
import Image1 from '../../assets/layer-2.svg'
import ProfilePic from '../../assets/photo-1543610892-0b1f7e6d8ac1.avif'

const afterLogin = () => {
  return (
    <header className="w-full bg-[#f7f7f7] overflow-hidden items-center pt-[51px] px-[0] pb-[0] gap-[78px] leading-[normal] tracking-[normal] flex justify-center">
      <section className="w-[1260px] flex-row justify-end pt-[0] pl-[74px] pr-[74px] pb-[25px] box-border">
        <div className="flex-[1] flex-col justify-start gap-[50px]">
          <div className="[box-shadow:0_4px_8px_rgba(0,_0,_0,_0.05)] bg-[#fff] flex-col justify-start px-[20px] py-[30px] box-border gap-[30px] top-[0] sticky max-w-full">
            <div className="self-stretch rounded-[79px] flex flex-row items-end justify-between gap-[49px] max-w-full">
              <Link to="/" className='pl-[46px] cursor-pointer pb-[8px]'>
                <img src={Image1} alt="" />
              </Link>
              <div className="flex items-start flex-col justify-end pt-[0] px-[0]">
                <div className="flex items-start  flex-direction: row; justify-content: flex-start; gap: 10px;">
                  <Link to="/userProfile" className='cursor-pointer w-[40px] flex [clip-path:circle()]'>
                    <img src={ProfilePic} alt="" />
                  </Link>
                  <button className="cursor-pointer border-[0] px-[60px] pt-[20px] flex-row justify-start">
                    <Link to="" className="no-underline justify-center relative text-[18px] text-[#e60023] text-left flex min-w-[71px] whitespace-nowrap hover:text-[#ff264a]">Log out</Link>
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-[24px] mx-[0] mb-[0px] rounded-[79px] flex-row justify-center text-left text-[18px] text-[#353535] flex">
              <ul className='flex gap-[53px] cursor-pointer'>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to={"/category/1"}>
                    Nature
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  < Link to="/category/2">
                    Wallpaper
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to="/category/3">
                    Fashion
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to="/category/4">
                    Street Photography
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to="/category/5">
                    Travel
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to="/category/6">
                    People
                  </Link>
                </li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">
                  <Link to="/category/7">
                    Etc
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}


export default afterLogin
