import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
	const categories = await prisma.categoryJob.findMany();

	return NextResponse.json(categories);
}
