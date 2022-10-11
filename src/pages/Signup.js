import React  from "react";
import Header from "../components/form/Header";
import Signup from "../components/form/Signup";
import SignupImg1 from "../../src/assets/images/front/illus@2x.svg";
import SignupImg2 from "../../src/assets/images/front/lamp illus@2x.svg";

export default function Authsignup(){
    return(
        <div class="grid grid-cols-5 gap-3 h-full">
            <div className="col-span-2 relative">
                <img className="absolute bottom-0 left-0" alt="AT AhmarcTech" src={SignupImg1} />
            </div>
            <div className=" m-0 m-auto">
                <>
                <Header
                    paragraph="Sign up for your account"
                    linkName="Signup"
                    linkUrl="signup"
                />
                <Signup />
                </>    
            </div>
            <div className="col-span-2 relative">
                <img className="absolute bottom-0 right-0" alt="AT AhmarcTech" src={SignupImg2} />
            </div>
        </div>
    );
}