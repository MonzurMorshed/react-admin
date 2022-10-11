import { useState } from "react";
import { signupFields, socialBtn } from "../../constants/FormFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormText from "./FormText";

const fields = signupFields;
let fieldState = {};
fields.forEach((field => fieldState[field.id]));

const btns = socialBtn;
let socialBtnState = {};
btns.forEach((btn => socialBtnState[btn.id]));

export default function Signup(){
    const [signupState,setsignupState]=useState(fieldState);

    const handleChange= (e) => {
        setsignupState({
            ...signupState,[e.target.id]:e.target.value
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(signupState.email.length > 0 ) {
            const payload = {
                email: signupState.email
            }
        }
    }

    //Handle signup API Integration here
    const authenticateUser = () =>{

    }

    return (
        <form className="mt-2 space-y-3" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )

                }
            </div>
            <FormText />
            <FormAction handleSubmit={handleSubmit} text="signup"/>
            <p className="text-center">OR</p>
            
            {
                btns.map(btn =>
                    <div>
                        <button className="text-center w-full border py-1 text-xs font-semibold"
                            id={btn.id}
                        >
                            {btn.labelText} {' '}
                            <img alt={btn.labelText} src={btn.iconImg} className="float-right w-5 mx-2 my-1"/></button>
                    </div>
                )

            }
            
        </form>
    )

}