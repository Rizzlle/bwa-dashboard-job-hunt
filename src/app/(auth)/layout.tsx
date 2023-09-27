import { Epilogue } from "next/font/google";
import "../globals.css";

import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Metadata } from "next";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
	viewport: ''
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (session !== null) {
		return redirect("/");
	}

	return (
		<html lang="en">
			<body className={epilogue.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
