import BeforeLogin from "./beforeLogin.jsx"
import AfterLogin from './afterLogin.jsx'
import UseAuthStore from '../../store/authStore.js'
import { useState, useEffect } from "react"
import axios from "axios"

const index = () => {
  const jwt = UseAuthStore((state) => state.jwt);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ( jwt == null ) {
      return
    }

    axios.get(`http://localhost:3000/api/users/token`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }).then((res) => {
      if (res.status == 200) {
        setApiData(res.data.data)
        setIsLoading(false)
      }
    })
  }, [ jwt ])

  if (jwt == null) {
    return (
      < div >
        < BeforeLogin />
      </div>
    )
  } else {
    return (
      <div>
        {isLoading ? (
          < AfterLogin profile_photo={""} />
        ) : (
          < AfterLogin profile_photo={apiData.profile_picture} />
        )}
      </div>
    )
  }
}

export default index
