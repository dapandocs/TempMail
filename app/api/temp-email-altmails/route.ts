import { NextRequest, NextResponse } from "next/server";
import { Success, Error } from "@/utils/util";
import fetch from "node-fetch";

// create a email
export async function POST() {
  const response = await fetch(
    "https://tempmail.altmails.com/random-email-address",
    {
      method: "GET",
    }
  ).then((res: any) => res.text());
  console.log("create email response: ", response);
  if (response) {
    return NextResponse.json(Success({ data: response }));
  }
  return NextResponse.json(Error({ error: response }));
}

// read inbox
export async function GET(req: NextRequest) {
  const amsResult = await fetch("https://tempmail.altmails.com/");
  const allCookies = amsResult.headers.get("set-cookie");
  const htmlText = await amsResult.text();
  let cookie = "";
  if (allCookies && typeof allCookies === "string") {
    cookie = allCookies
      .split("; ")
      .filter(
        (item) =>
          item.includes("altmails_session") || item.includes("XSRF-TOKEN")
      )
      .reduce((pre: any[], cur) => {
        if (cur.includes("samesite=lax")) {
          return [...pre, cur.replace("samesite=lax,", "").trim()];
        }
        return [...pre, cur.trim()];
      }, [])
      .join("; ");
  }
  let token = "";
  if (htmlText && typeof htmlText === "string") {
    const tokenArr = htmlText.match(/'_token':\s*'(\w+)'/);
    if (Array.isArray(tokenArr) && tokenArr.length) {
      token = tokenArr[1];
    }
  }
  console.log("token: ", token);
  console.log("cookie: ", cookie);
  if (!token || !cookie) {
    return NextResponse.json(Error({ error: "Missing token or cookie" }));
  }
  const { searchParams } = new URL(req.nextUrl);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json(Error({ error: "Missing email parameter" }));
  }
  const response = await fetch(
    `https://tempmail.altmails.com/fetch-emails/${email}`,
    {
      headers: {
        cookie,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: `_token=${token}`,
    }
  ).then((res: any) => res.json());

  if (Array.isArray(response)) {
    return NextResponse.json(Success({ data: response }));
  }
  return NextResponse.json(Error({ error: response }));
}

// view
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const mailId = searchParams.get("mailId");
  console.log("mailId: ", mailId);
  const amsResult = await fetch(
    `https://tempmail.altmails.com/view/${mailId}#content`
  );
  const htmlText = await amsResult.text();
  var pattern = /decodeURIComponent\(atob\("([A-Za-z0-9+/=]+)"\)\)/;
  var match = htmlText.match(pattern);
  if (Array.isArray(match) && match.length) {
    const content = decodeURIComponent(atob(match[1]));
    return NextResponse.json(Success({ data: content }));
  }
  return NextResponse.json(Error({ error: "No content" }));
}
