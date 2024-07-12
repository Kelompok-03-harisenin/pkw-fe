import { Link } from 'react-router-dom'
import Image1 from '../../assets/layer-2.svg'

const index = () => {
  return (
    <header className="bg-[#f7f7f7] w-full overflow-hidden items-center pt-[51px] px-[0] pb-[0] gap-[78px] leading-[normal] tracking-[normal] flex justify-center">
      <section className="flex w-[1260px] flex-row justify-center pt-[0] pl-[74px] pr-[74px] pb-[25px] box-border">
        <div className="flex-[1] flex-col justify-start gap-[50px]">
          <div className="[box-shadow:0_4px_8px_rgba(0,_0,_0,_0.05)] bg-[#fff] flex-col justify-start px-[20px] py-[30px] box-border gap-[30px] top-[0] sticky max-w-full">
            <div className="self-stretch rounded-[79px] flex flex-row items-end justify-between gap-[49px] max-w-full">
              <Link to="/" className='pl-[46px] cursor-pointer pb-[8px]'>
                <img src={Image1} alt="" />
              </Link>
              <div className="flex items-start flex-col justify-end pt-[0] px-[24px]">
                <div className="flex items-start flex-direction: row; justify-content: flex-start; gap: 10px;">
                  <button className="cursor-pointer border-[0] px-[30px] py-[10px] bg-transparent rounded-[4px] flex flex-row items-start justify-start">
                    <a className="no-underline relative text-[18px] text-[#e60023] text-left flex min-w-[47px] whitespace-nowrap cursor-pointer hover:text-[#ff264a]">Login</a>
                  </button>
                  <button className="cursor-pointer border-[0] px-[30px] py-[10px] bg-[#e60023] flex-row justify-start hover:bg-[#ff264a]">
                    <a className="no-underline flex justify-center relative text-[18px] text-[#fff] text-left min-w-[71px] whitespace-nowrap">Register</a>
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-[24px] mx-[0] mb-[0px] rounded-[79px] flex-row justify-center text-left text-[18px] text-[#353535] flex">
              <ul className='flex gap-[53px] cursor-pointer'>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Nature</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Wallpaper</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Fashion</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Street Photography</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Travel</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">People</li>
                <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full">Etc</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}


export default index
