import { type NextRequest, NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"


export async function POST(request: NextRequest) {
  try {
    const { voucherCode } = await request.json()

    // Fetch voucher from Sanity
    const voucher = await client.fetch(
      `*[_type == "voucher" && code == $voucherCode][0]{
        discount,
        expiryDate
      }`,
      { voucherCode }
    );
    
    if (!voucher) {
      return NextResponse.json({ message: "Voucher not found" }, { status: 404 })
    }

    if (new Date(voucher.expiryDate) < new Date()) {
      return NextResponse.json({ message: "Voucher has expired" }, { status: 400 })
    }

    return NextResponse.json({ discount: voucher.discount })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}

