import { NextRequest, NextResponse } from "next/server";
import { request, getRequestHeader } from "@/app/api/common";
import { Success, Error } from "@/utils/util";
import { TempEmailType } from "@/utils/constant";

// create a email
export async function POST() {
  const response = await request(
    "https://temp-mail44.p.rapidapi.com/api/v3/email/new",
    {
      headers: getRequestHeader(TempEmailType.TempEmail44),
      method: "POST",
    }
  );
  console.log("create email response: ", response);
  if (response.email) {
    return NextResponse.json(Success({ data: response.email }));
  }
  return NextResponse.json(Error({ error: response.message }));
}

// read inbox
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json(Error({ error: "Missing email parameter" }));
  }
  const response = await request(
    `https://temp-mail44.p.rapidapi.com/api/v3/email/${email}/messages`,
    {
      headers: getRequestHeader(TempEmailType.TempEmail44),
      method: "GET",
    }
  );
  console.log("read inbox response: ", response);
  if (Array.isArray(response)) {
    return NextResponse.json(Success({ data: response }));
  }
  return NextResponse.json(Error({ error: response.message }));
}
