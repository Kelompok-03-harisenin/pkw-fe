import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import useAuthStore from "../../store/authStore"
import axios from "axios"

const index = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email == "") {
      return
    }

    if (password == "") {
      return
    }

    axios.post("http://localhost:3000/api/auth/login", {
      email: email,
      password: password
    }).then((res) => {
      if (res.status == 200) {
        useAuthStore.setState((prev) => ({ jwt: res.data.data.token }))
        return navigate("/")
      }
    })
  }

  return (
    <div className="w-full relative overflow-hidden pt-[40px] px-[440px] pb-[218px] gap-[63.3px] leading-[normal] tracking-[normal] text-left text-[24px] text-[#000] items-center">
      <div className="w-[600px] h-[468px] [box-shadow:0_4px_24px_rgba(0,_0,_0,_0.25)] rounded-[24px] items-start pt-[48px] px-[73px] pb-[63px] gap-[40px] max-w-full">
        <div className="flex flex-row items-start justify-start pt-[0] px-[0] pb-[20px] text-[28px]">
          <h1>Log in</h1>
        </div>
        <div className="flex-col pt-[0] px-[0] pb-[20px] gap-[40px]">
          <div className="pb-[10px] relative font-light inline-block min-w-[60px] leading-[normal] tracking-[normal] text-left text-[20px] text-[#000]">Email</div>
          <input
            className="w-full border-[0] outline-[0] bg-[rgba(217,_217,_217,_0.5)] h-[40px] rounded-[20px] flex-row p-[20px] box-border font-light text-[20px] text-[rgba(0,_0,_0,_0.5)] min-w-[250px]"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-col pt-[0] px-[0] pb-[20px] gap-[40px]">
          <div className="pb-[10px] relative font-light inline-block min-w-[60px] leading-[normal] tracking-[normal] text-left text-[20px] text-[#000]">Password</div>
          <input
            className="w-full border-[0] outline-[0] bg-[rgba(217,_217,_217,_0.5)] h-[40px] rounded-[20px] flex-row p-[20px] box-border font-light text-[20px] text-[rgba(0,_0,_0,_0.5)] min-w-[250px]"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full cursor-pointer">
          <button onClick={handleLogin} className="cursor-pointer border-[0] pl-[64px] pr-[20px] py-[10px] bg-[#e60023] self-stretch rounded-[24px] flex flex-row items-start justify-center box-border max-w-full hover:bg-[#ff264a]">
            <div className="relative text-[20px] font-light text-[#fff] text-left inline-block min-w-[92px] whitespace-nowrap">Log in</div>
          </button>
          <span></span>
        </div>
        <div className="self-stretch justify-between gap-[20px] flex flex-row items-start pb-[20px]">
          <div className="">
            <div className="relative text-[20px] text-[#000]">Don’t have an account ?</div>
          </div>
          <Link to={"/register"}>
            <div className="relative text-[20px] text-[#000]">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index