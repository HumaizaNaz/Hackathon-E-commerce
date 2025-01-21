// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";

// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { client } from "@/sanity/lib/client";

// export async function GET() {
//   const session = await getServerSession(authOptions);

//   // Check if session and session.user are valid
//   if (!session || !session.user || !session.user.id) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const userId = session.user.id;
//   const cart = await client.fetch(`*[_type == "cart" && userId == $userId][0]`, { userId });
//   return NextResponse.json(cart);
// }

// export async function POST(req: Request) {
//   const session = await getServerSession(authOptions);

//   // Check if session and session.user are valid
//   if (!session || !session.user || !session.user.id) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { productId, quantity } = await req.json();
//   const userId = session.user.id;

//   const existingCart = await client.fetch(`*[_type == "cart" && userId == $userId][0]`, { userId });

//   if (existingCart) {
//     const updatedCart = await client
//       .patch(existingCart._id)
//       .setIfMissing({ items: [] })
//       .append("items", [{ productId, quantity }])
//       .commit();
//     return NextResponse.json(updatedCart);
//   } else {
//     const newCart = await client.create({
//       _type: "cart",
//       userId,
//       items: [{ productId, quantity }],
//     });
//     return NextResponse.json(newCart);
//   }
// }

// export async function PUT(req: Request) {
//   const session = await getServerSession(authOptions);

//   // Check if session and session.user are valid
//   if (!session || !session.user || !session.user.id) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { productId, quantity } = await req.json();
//   const userId = session.user.id;

//   const existingCart = await client.fetch(`*[_type == "cart" && userId == $userId][0]`, { userId });

//   if (existingCart) {
//     const updatedCart = await client
//       .patch(existingCart._id)
//       .set({
//         items: existingCart.items.map((item: any) =>
//           item.productId === productId ? { ...item, quantity } : item
//         ),
//       })
//       .commit();
//     return NextResponse.json(updatedCart);
//   } else {
//     return NextResponse.json({ error: "Cart not found" }, { status: 404 });
//   }
// }

// export async function DELETE(req: Request) {
//   const session = await getServerSession(authOptions);

//   // Check if session and session.user are valid
//   if (!session || !session.user || !session.user.id) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { productId } = await req.json();
//   const userId = session.user.id;

//   const existingCart = await client.fetch(`*[_type == "cart" && userId == $userId][0]`, { userId });

//   if (existingCart) {
//     const updatedCart = await client
//       .patch(existingCart._id)
//       .set({
//         items: existingCart.items.filter((item: any) => item.productId !== productId),
//       })
//       .commit();
//     return NextResponse.json(updatedCart);
//   } else {
//     return NextResponse.json({ error: "Cart not found" }, { status: 404 });
//   }
// }
