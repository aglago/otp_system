import { useState, useEffect } from "react"
import OTPpage from "./otppage"

const loginDetails = {
    username: "ideation",
    password: "axis123"
}

export default function Login() {

    const [detailsInputed, setdetailsInputed] = useState({
        username: "",
        password: ""
    })
    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {
        console.log(detailsInputed.username);
    }, [detailsInputed.username]);

    function handleUsernameChange(e) {
        setdetailsInputed({
           ...detailsInputed,
            username: e.target.value
        })
    }

    function handlePasswordChange(e) {
        setdetailsInputed({
           ...detailsInputed,
            password: e.target.value
        })
    }

    function letsLogIn(e) {
        e.preventDefault()
        console.log(detailsInputed.username, detailsInputed.password);
        if (!detailsInputed.username || !detailsInputed.password) {
            alert("Please fill all the fields")
            return;
        }
        if (detailsInputed.username === loginDetails.username && detailsInputed.password === loginDetails.password) {
            // window.location.href = "/dashboard"
            setisLoggedIn(true)
        } else {
            alert("Incorrect username or password")
        }
    }

  return (
    (isLoggedIn)
    ? (
        <OTPpage />
    )
    : (
        <div className="flex justify-center items-center flex-col h-screen">
          <h1 className="font-serif">Welcome to <span className="text-[#72FF26]">Ideation Axis</span></h1>
          <form action="" className="flex justify-center items-center flex-col gap-3">
              <input type="text" placeholder='Username' className="block w-96 p-3 rounded-lg" onChange={handleUsernameChange} />
              <input type="password" placeholder='Password' className="block w-96 p-3 rounded-lg" onChange={handlePasswordChange} />
              <input type="submit" className="block w-40 p-2 bg-black border-none text-white" onClick={letsLogIn} />
          </form>
        </div>
    )
  )
}
