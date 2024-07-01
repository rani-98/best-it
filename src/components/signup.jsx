
import Phoneotpform from "./phone_otp_form"

export default function signUp(){
    return(
        <div className="flex justify-center m-7">
        <h1 className="font-extrabold pr-2">Login With Phone Number:  </h1>
        <Phoneotpform/>
        </div>
    )
}
