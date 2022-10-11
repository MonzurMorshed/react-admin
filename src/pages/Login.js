import React  from "react";
import Header from "../components/form/Header";
import Login from "../components/form/Login";
import LoginImage from "../assets/images/front/illus-1.png";
import FormAction from "../components/form/FormAction";

export default function AuthLogin(){
    return(
        <div class="grid grid-cols-3 gap-5  h-full">
            <div className=" m-0 m-auto">
                <>
                <Header
                    paragraph="Sign in for your account"
                    linkName="Signup"
                    linkUrl="signup"
                />
                <Login />
                </>    
            </div>
            <div className="col-span-2 bg-blue-900 py-4">
                <div className="m-0 m-auto">
                   <img alt="AT AhmarcTech" src={LoginImage} className="w-4/12 m-0 m-auto px-4 py-5" />
                   <div className="m-0 m-auto w-4/6 pt-1">
                       <p className="text-center text-bold text-white text-2xl">Turn your ideas to reality</p>
                       <p className="text-center text-white text-sm pb-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       </p>
                   </div>
                   <div className="m-0 m-auto w-48 px-2 pt-2 mb-4">
                        <FormAction text="Learn How"/>
                   </div>
                </div>
            </div>
        </div>
    );
}