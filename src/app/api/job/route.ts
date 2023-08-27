import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
	const data = await request.json();

	const result = await prisma.job.create({
		data,
	});

	return NextResponse.json(result);
}
