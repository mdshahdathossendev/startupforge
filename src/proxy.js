import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const pathname = request.nextUrl.pathname;

if(!session){
  return NextResponse.redirect(
  new URL(
    `/login?redirect=${encodeURIComponent(pathname)}`,
    request.url
  )
);
}
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/detlas/:path*",
  ],
};