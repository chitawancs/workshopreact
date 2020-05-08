import React,{ useState, useEffect }from 'react'
import Header from '../components/้Header'
import HeaderLogin from '../components/้HeaderLogin'

export default function MainHeader() {

    const [userlogin, setUserLogin] = useState(localStorage.getItem('MyUser'));
    var show;
    if (userlogin != null) {
        show = <HeaderLogin></HeaderLogin>
    }
    else
        show = <Header></Header>
    
    
     
    return (
        <div>
            {show}
        </div>
    )
}
