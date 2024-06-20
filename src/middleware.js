// import { NextRequest  } from "next/server";
import { NextResponse } from "next/server"
// import { useEffect } from "react";
export function middleware(req) {
  const loggedin = req.cookies.has('jwt')    
  console.log(loggedin)             //not login
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
//  return NextResponse.next();


// }

 export const config = {
  matcher: [
 "/profile",
  "/login",
  "/createblog",
 "/signup",
 "/changepassword"
  ]
 }

//sample
// import { NextResponse } from "next/server";
// // import jwt from "jsonwebtoken";

// export async function middleware(req) {
//   const token = req ? req.cookies?.token : null;
//   let userId=null;
//    if (token) {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     userId = decodedToken?.issuer;
//   }
//   const { pathname } = req.nextUrl;
//   // if user sends request to "/api/login", it has no token. so let the request pass
//   if (
//     pathname.includes("/api/auth/login") || userId
//   ) {
//     return NextResponse.next();
//   }
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect("/login");
//   }
// }