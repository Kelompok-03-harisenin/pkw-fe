import image1 from '../../assets/'
import image2 from '../../assets/'

const index = () => {
    return (
    <header class="w-full bg-[#f7f7f7] overflow-hidden items-center pt-[51px] px-[0] pb-[0] gap-[78px] leading-[normal] tracking-[normal]">
      <section class="w-[1260px] flex-row justify-end pt-[0] pl-[268px] pr-[74px] pb-[25px] box-border">
        <div class="flex-[1] flex-col justify-start gap-[50px]">
          <div class="[box-shadow:0_4px_8px_rgba(0,_0,_0,_0.05)] bg-[#fff] flex-col justify-start px-[20px] py-[30px] box-border gap-[30px] top-[0] sticky max-w-full">
            <div class="self-stretch rounded-[79px] flex flex-row items-end justify-start gap-[49px] max-w-full">
              <img src=" {image1} " alt="" />

              <div class="w-[683px] border-b-[1px] box-border flex flex-row items-start justify-start px-[19px] py-[10px] gap-[23.3px] max-w-full">
                <div class="vector-stroke-wrapper">
                  <img src="{image2}" alt="" />
                </div>
                <input class="w-[60px] text-[18px] bg-transparent h-[22px] relative text-[#d2d2d2] text-left inline-block p-0" placeholder="Search" type="text" />
              </div>

              <div class="flex items-start flex-col justify-end pt-[0] px-[0] pb-px">
                <div class="flex items-start flex-direction: row; justify-content: flex-start; gap: 10px;">
                  <button class="cursor-pointer border-[0] px-[30px] py-[10px] bg-transparent rounded-[4px] flex flex-row items-start justify-start">
                    <a class="no-underline relative text-[18px] text-[#e60023] text-left flex min-w-[47px] whitespace-nowrap cursor-pointer">Login</a>
                  </button>
                  <button class="cursor-pointer border-[0] px-[30px] py-[10px] bg-[#e60023] flex-row justify-start hover:bg-[#ff264a]">
                    <a class="no-underline relative text-[18px] text-[#fff] text-left flex min-w-[71px] whitespace-nowrap">Register</a>
                  </button>
                </div>
              </div>
            </div>

            <nav class="mt-[24px] mx-[0] mb-[0px] rounded-[79px] flex-row justify-center text-left text-[18px] text-[#353535] flex">
              <ul class='flex gap-[53px] cursor-pointer'>
              <li>Nature</li>
              <li>Wallpaper</li>
              <li>Fashion</li>
              <li>Street Photography</li>
              <li>Travel</li>
              <li>People</li>
              <li>Etc</li>
              </ul>
            </nav>
          </div>
          </div>
      </section>
    </header>
    )
}


export default index