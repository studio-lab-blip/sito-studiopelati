import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host === "www.studiopelati.it") {
    const destination =
      "https://portale.studiopelati.it" +
      request.nextUrl.pathname +
      request.nextUrl.search;
    return NextResponse.redirect(destination, { status: 301 });
  }
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
