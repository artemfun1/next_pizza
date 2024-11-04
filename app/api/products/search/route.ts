import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get("query") || "";

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		take: 5,
	});

	return NextResponse.json(products);
}

// export async function POST(req: NextRequest) {
// 	const data = await req.json();

// 	const user = await prisma.user.create({
// 		data,
// 	});

// 	return NextResponse.json(user);
// }
