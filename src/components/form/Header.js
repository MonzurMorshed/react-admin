import AuthLogo from "../../assets/images/front/amharctech-logo.png";

export default function Header({
    paragraph
}) {
    return (
        <header className="header">
            <div className="mt-10 mb-10">
                <div className="flex justify-center">
                    <img alt="" src={AuthLogo} className="w-2/3" />
                </div>
                <p className="mt-4 font-medium text-sm text-black">
                    {paragraph} {' '}
                </p>
            </div>
        </header>
    )
}