import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const existingOrder = await client.fetch(
      `*[_type == "suborder" && email == $email][0] {
        _id,
        subscription-> { name }
      }`,
      { email }
    );

    if (existingOrder) {
      return NextResponse.json({
        exists: true,
        orderId: existingOrder._id,
        subscriptionName: existingOrder.subscription.name,
      });
    }

    return NextResponse.json({ exists: false });
  } catch (error) {
    console.error('Error checking order:', error);
    return NextResponse.json({ success: false, error: 'Failed to check order.' }, { status: 500 });
  }
}
