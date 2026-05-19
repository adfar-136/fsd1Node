import { NextResponse } from "next/server";

export function middleware(request){
    console.log(request.method)
   const {pathname,method} = request.nextUrl;
   console.log(` Pathanme : ${pathname} , Method : ${method}`);
   if(pathname === "/products"){
    return NextResponse.redirect("/api/products",request.url)
   }
}

export const config = {
    matcher : ['/api/:path*',"/products"]
}