import { Link } from "react-router-dom";


export default function FormText(){
    return(
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              By signin up, I accept the AmharcTech <a alt="Terms of Service" href="">terms of service</a>
              and acknowledge the <a alt="Privacy Policy" href="">privacy policy</a> 
            </label>
          </div>
        </div>

    )
}