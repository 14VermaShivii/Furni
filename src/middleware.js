// import { NextRequest  } from "next/server";
import  { NextResponse } from "next/server"
export function middleware(request ) {
    const user=true       //not login
    if(!user){
        return NextResponse.redirect(
            new URL('/',request.url)
        )
    }
   
   
    
    return NextResponse.next();
  
}

export const config={
    matcher:[
        "/login",
        "/signup",
        "/profile",
        "/createblog",
        "/changepassword"
    ]
}