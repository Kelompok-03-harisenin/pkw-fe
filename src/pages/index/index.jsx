import NavBar from '../../components/navbar/index'
import Login from '../../components/login/index'
import Register from '../../components/login/register'
import AfterLogin from '../../components/navbar/afterLogin'

const index = () => {
    return(
        <div>
            <NavBar/>
            <AfterLogin/>
            <Login/>
            <Register/>

        </div>
    )
};

export default index;