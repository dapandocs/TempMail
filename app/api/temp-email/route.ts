import { NextRequest, NextResponse } from "next/server";
import { request } from "@/app/api/common";
import { Success, Error } from "@/utils/util";

// create a email
export async function POST(req: NextRequest) {
  const response = await request(
    "https://temp-mail44.p.rapidapi.com/api/v3/email/new",
    {
      headers: {
        "x-rapidapi-host": "temp-mail44.p.rapidapi.com",
        "x-rapidapi-key": "ed9f78ffd1mshfdd48bcbab93990p1dacc5jsn0df5a78e17e8",
      },
      method: "POST",
    }
  );
  if (response.email) {
    return NextResponse.json(Success({ data: response.email }));
  }
  return NextResponse.json(Error({ error: "Email not found" }));
}

// read inbox
export async function GET(req: NextRequest) {
  // const { email } = req.body;
  // const response = await request(
  //   "https://temp-mail44.p.rapidapi.com/api/v3/email/p1amvpvxfh@bestparadize.com/messages",
  //   {
  //     headers: {
  //       "x-rapidapi-host": "temp-mail44.p.rapidapi.com",
  //       "x-rapidapi-key": "ed9f78ffd1mshfdd48bcbab93990p1dacc5jsn0df5a78e17e8",
  //     },
  //     method: "GET",
  //   }
  // );
  // if (response.email) {
  //   return NextResponse.json(Success({ data: response.email }));
  // }
  return NextResponse.json(Error({ error: "Email not found" }));
}
