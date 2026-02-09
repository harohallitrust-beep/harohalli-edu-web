import { NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const userIndex = config.admin.users.indexOf(username);

    if (userIndex !== -1 && config.admin.passwords[userIndex] === password) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
