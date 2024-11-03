import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
	// const products = await prisma.product.findMany();
console.log('scfdcdcdcdcdc',req.nextUrl)



	return NextResponse.json({});
}

// export async function POST(req: NextRequest) {
// 	const data = await req.json();

// 	const user = await prisma.user.create({
// 		data,
// 	});

// 	return NextResponse.json(user);
// }
