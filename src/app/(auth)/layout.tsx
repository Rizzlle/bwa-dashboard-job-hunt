import { Epilogue } from "next/font/google";
import "../globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={epilogue.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
