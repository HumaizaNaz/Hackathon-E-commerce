import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();

    // Attempt to find the order based on the provided orderId
    const existingOrder = await client.fetch(
      `*[_type == "suborder" && _id == $orderId][0] { _id, subscription-> { name } }`,
      { orderId }
    );

    if (!existingOrder) {
      return NextResponse.json(
        { success: false, error: 'Order not found.' },
        { status: 404 }
      );
    }

    // Delete the order from the database (unsubscribe the user)
    await client.delete(existingOrder._id);

    return NextResponse.json({
      success: true,
      message: 'Unsubscribed successfully.',
    });
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to unsubscribe. Please try again.' },
      { status: 500 }
    );
  }
}
