import Link from 'next/link';
export default function resetpassword() {
    return(
        <>
        <div className="wrapper">
        <div className="logo">
            <img src="./images/profile2.jpg" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Furni
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="newPassword" id="newPassword" placeholder="Newpassword"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="conformPassword" id="pwd" placeholder="Conformpassword"/>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <Link href={"/forgotpassword"}>Forget password?</Link> or <Link href={"/signup"}>Sign up</Link>
        </div>
    </div>
        
        </>
    )
    
}