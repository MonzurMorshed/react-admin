import { Link } from "react-router-dom";


export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Stay signed in
            </label>
          </div>

          <div className="text-sm">
            <Link href="#" className="no-underline font-medium text-purple-600 hover:text-purple-500 text-direction:none">
              Forgot your password?
            </Link>
          </div>
        </div>

    )
}