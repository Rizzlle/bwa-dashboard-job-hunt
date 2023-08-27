import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
	const industries = await prisma.industry.findMany();

	return NextResponse.json(industries);
}
