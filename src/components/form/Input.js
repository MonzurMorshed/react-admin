const fixedInputClass = " appearence-none relative block w-full px-2 py-2 text-gray-900 focus:z-10 sm:text-sm";

export default function Input({
    labelText,
    labelFor,
    placeholder,
    type,
    value,
    handleChange,
    id,
    customClass,
    isRequired=false,
    name

}){

    return(
        <div className={fixedInputClass}>
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                className={fixedInputClass+customClass}
                id={id}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                name={name}
                required={isRequired}
            />
        </div>

        
    )

}