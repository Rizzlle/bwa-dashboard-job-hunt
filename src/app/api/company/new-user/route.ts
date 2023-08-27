import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hashPassword } from "@/lib/utils";

export async function POST(request: Request) {
	const data = await request.json();

	const hashedPassword = await hashPassword(data.password);

	const result = await prisma.company.create({
		data: {
			name: data.name,
			email: data.email,
			password: hashedPassword,
		},
	});

	return NextResponse.json(result);
}
