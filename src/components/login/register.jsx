const register = () => {
    return (
        <div className="w-full relative overflow-hidden items-center pt-[40px] px-[440px] pb-[218px] gap-[63.3px] leading-[normal] tracking-[normal] text-left text-[24px] text-[#000]">
      <div className="main">
        <img
          class="layer-2-icon"
          loading="lazy"
          alt=""
          src="./public/layer-2.svg"
        />
      </div>
      <div className="w-[600px] h-[468px] [box-shadow:0_4px_24px_rgba(0,_0,_0,_0.25)] rounded-[24px] items-start pt-[48px] px-[73px] pb-[63px] gap-[40px] max-w-full">
        <div className="login-form-child"></div>
        <div className="flex flex-row items-start justify-start pt-[0] px-[0] pb-[20px] text-[28px]">
          <h1 className="create-account">Let's create your account</h1>
        </div>
        <div className="flex-col pt-[0] px-[0] pb-[20px] gap-[40px]">
          <input
            className="w-full border-[0] outline-[0] bg-[rgba(217,_217,_217,_0.5)] h-[40px] rounded-[20px] flex-row p-[20px] box-border font-light text-[20px] text-[rgba(0,_0,_0,_0.5)] min-w-[250px]"
            placeholder="Enter your email"
            type="text"
          />
        </div>
        <div className="flex-col pt-[0] px-[0] pb-[20px] gap-[40px]">
          <input
            className="w-full border-[0] outline-[0] bg-[rgba(217,_217,_217,_0.5)] h-[40px] rounded-[20px] flex-row p-[20px] box-border font-light text-[20px] text-[rgba(0,_0,_0,_0.5)] min-w-[250px]"
            placeholder="Confirm your email"
            type="text"
          />
        </div>
        <div className="flex-col pt-[0] px-[0] pb-[20px] gap-[40px]">
          <input
            className="w-full border-[0] outline-[0] bg-[rgba(217,_217,_217,_0.5)] h-[40px] rounded-[20px] flex-row p-[20px] box-border font-light text-[20px] text-[rgba(0,_0,_0,_0.5)] min-w-[250px]"
            placeholder="Create a password"
            type="text"
          />
        </div>
        <h5 className="text-[10px] flex justify-center pb-[20px]"
                >By signing up, you accept Pinterest Terms of Service and Privacy Policy
              </h5>
        
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full cursor-pointer" id="loginButtonContainer">
          <button className="cursor-pointer border-[0] pl-[64px] pr-[20px] py-[10px] bg-[#e60023] self-stretch rounded-[24px] flex flex-row items-start justify-center box-border max-w-full hover:bg-[#ff264a]">
            <img
              className="button-label-child"
              alt=""
              src="./public/rectangle-24.svg"
            />

            <div className="relative text-[20px] font-light text-[#fff] text-left inline-block min-w-[92px] whitespace-nowrap">Sign up</div>
          </button>
          <img
            className="login-button-child"
            alt=""
            src="./public/rectangle-25.svg"
          />
        </div>
        <div className="self-stretch justify-between gap-[20px] flex flex-row items-start pb-[20px]">
          <div className="">
            <div className="relative text-[20px] text-[#000]">Already have an account ?</div>
          </div>
          <button className="sign-up" id="signUp">
            <img className="sign-up-child" alt="" src="./public/rectangle-26.svg" />

            <div className="relative text-[20px] text-[#000]">Log in</div>
          </button>
        </div>
      </div>
    </div>
    )
}

export default register