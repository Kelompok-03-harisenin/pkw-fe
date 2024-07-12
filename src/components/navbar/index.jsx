import BeforeLogin from "./beforeLogin.jsx"
import AfterLogin from './afterLogin.jsx'
import UseAuthStore from '../../store/authStore.js'

const index = () => {
  const jwt = UseAuthStore((state) => state.jwt);

  if (jwt == null) {
    return (
      < div >
        < BeforeLogin />
      </div>
    )
  } else {
    return (
      <div>
        < AfterLogin />
      </div>
    )
  }
}

export default index
