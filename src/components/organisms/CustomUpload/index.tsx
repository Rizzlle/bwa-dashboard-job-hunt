"use client";

import { supabaseGetPublicUrl } from "@/lib/supabase";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface CustomUploadProps {
	form: any;
	name: string;
}

export default function CustomUpload({ form, name }: CustomUploadProps) {
	const [previewImg, setPreviewImg] = useState("");

	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setPreviewImg(URL.createObjectURL(e.target.files[0]));
			form.setValue(name, e.target.files[0]);
		}
	};

	const handleUploadFile = () => {
		inputRef.current?.click();
	};

	useEffect(() => {
		async function getImage() {
			const { publicUrl } = await supabaseGetPublicUrl(
				form.getValues(name),
				"company"
			);
			setPreviewImg(publicUrl);
		}

		if (form.getValues(name) !== "") {
			getImage();
		}
	}, []);

	return (
		<div className="inline-flex items-center gap-8">
			<div>
				{previewImg !== "" && (
					<Image
						width={120}
						height={120}
						src={previewImg}
						alt={previewImg}
					/>
				)}
			</div>
			<div
				className="py-6 px-10 border-2 cursor-pointer border-bluePrimary border-dashed w-max rounded-sm"
				onClick={handleUploadFile}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 text-bluePrimary mx-auto mb-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
					/>
				</svg>
				<div className="text-center">
					<span className="text-bluePrimary font-medium">
						Click to replace
					</span>{" "}
					<span className="text-gray-500">or drag and drop</span>
				</div>
				<div className="text-gray-600 text-sm">
					PNG, JPG, JPEG (max. 400 x 400px)
				</div>
				<input
					ref={inputRef}
					type="file"
					className="hidden"
					onChange={handleFileChange}
					accept="image/png, image/jpeg, image/jpg"
				/>
			</div>
		</div>
	);
}
