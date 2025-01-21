/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

const orders: any = [];  

const API_SECRET_KEY = process.env.API_SECRET_KEY;

function isAuthorized(request: Request) {
  const authHeader = request.headers.get('Authorization');
  return authHeader === API_SECRET_KEY;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { userId, cartItems, totalAmount } = await request.json();
  const newOrder = {
    userId,
    cartItems,
    totalAmount,
    status: 'pending',
    orderId: orders.length + 1,
  };
  orders.push(newOrder);
  return NextResponse.json(newOrder);
}
