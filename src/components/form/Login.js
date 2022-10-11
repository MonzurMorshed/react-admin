import { useState } from "react";
import { loginFields, socialBtn } from "../../constants/FormFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const fields = loginFields;
let fieldState = {};
fields.forEach((field => fieldState[field.id]));

const btns = socialBtn;
let socialBtnState = {};
btns.forEach((btn => socialBtnState[btn.id]));

export default function Login(){
    const [loginState,setLoginState]=useState(fieldState);

    const handleChange= (e) => {
        setLoginState({
            ...loginState,[e.target.id]:e.target.value
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(loginState.email.length > 0 && loginState.password.length > 0) {
            const payload = {
                email: loginState.email,
                password: loginState.password
            }
        }
    }

    //Handle Login API Integration here
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
            <FormExtra/>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
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