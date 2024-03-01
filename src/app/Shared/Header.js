import Link from "next/link"

export default function Header() {
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    {/* <Link className="navbar-brand" href={"/"}>Furni<span>.</span></Link> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0"> 

                        <li className="nav-item active">
                            <Link className="nav-link" href={"/"}>Home</Link></li>
						<li><Link className="nav-link" href={"/blog"}>Blog</Link></li>
						<li><Link className="nav-link" href={"/contact"}>Contact</Link></li>
						<li><Link className="nav-link" href={"/fashion"}>Fashion</Link></li>
						<li><Link className="nav-link" href={"/lifestyle"}>Lifestyle</Link></li>
						<li><Link className="nav-link" href={"/food"}>Food</Link></li>
						<li><Link className="nav-link" href={"/tech"}>Tech</Link></li>
                        <li><Link className="nav-link" href={"/travel"}>Travel</Link></li> 
                         </ul>




              
                             {/* <li className="nav-item active"> </li> */}
{/* 
                            <Link className="active" href={"/"}>Home</Link>
                            <Link href={"/tech"}>Tech</Link>
                            <Link href={"/blog"}>Blog</Link>
                            <Link href={"/contact"}>Contact</Link>
                            <Link href={"/fashion"}>Fashion</Link>
                            <Link href={"/food"}>Food</Link>
                            <Link href={"/lifestyle"}>Lifestyle</Link>
                            <Link href={"/tech"}>Tech</Link>
                            <Link href={"/travel"}>Travel</Link>  */}



                       

                        {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5"> */}
                            {/* <li><Link className="nav-link" href="#"><img src="images/user.svg"></Link></li>
            <li><Link className="nav-link" href="cart.html"><img src="images/cart.svg"></Link></li> */}
                        {/* </ul> */}
                    </div>
                </div>

            </nav>
        </>
    )

}