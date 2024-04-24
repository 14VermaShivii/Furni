// import { NextRequest  } from "next/server";
import { NextResponse } from "next/server"
export function middleware(req) {
  const loggedin = true  //not login
  const { pathname } = req.nextUrl;
  // if(!loggedin){
  //     return NextResponse.redirect(
  //         new URL('/',request.url)
  //     )
  // }

  if (loggedin && pathname === '/login' || pathname === '/signup') {
    console.log("login page")
    return NextResponse.redirect(new URL('/profile', req.url));
  }


  if (!loggedin && pathname !== '/login' && pathname !== '/signup') {
    console.log("not login")
    return NextResponse.redirect(new URL('/', req.url));
  }
// }
// return NextResponse.next();


}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/profile",
    "/createblog",
    "/changepassword"
  ]
}