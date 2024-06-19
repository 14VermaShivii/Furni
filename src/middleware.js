// import { NextRequest  } from "next/server";
import { NextResponse } from "next/server"
export function middleware(req) {
  const loggedin = true                     //not login
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
}
// return NextResponse.next();


// }

export const config = {
  matcher: [
  //  "profile",
  //  "login",
  //  "createblog",
  //  "signup",
  //  "changepassword"
  ]
}

//sample
// import  { NextResponse } from 'next/server'
 
// export function middleware(request) {
//   const currentUser = request.cookies.get('currentUser')?.value
 
//   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
//   }
// }
 
// export const config = {
//   matcher: ["profile",
//     "login",
//    "createblog",
//    "signup",
//     "changepassword"],
// }