import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!!,
	process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!
);

const createId = (length: number) => {
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
		counter += 1;
	}
	return result;
};

export const supabaseUploadFile = async (
	file: File | string,
	bucket: "company" | "applicant"
) => {
	const filename = `${createId(6)}.jpg`;

	const { data, error } = await supabaseClient.storage
		.from(bucket)
		.upload("public/" + filename, file, {
			cacheControl: "3600",
			upsert: false,
		});

	return {
		data,
		error,
		filename,
	};
};

export const supabaseGetPublicUrl = (
	filename: string,
	bucket: "company" | "applicant"
) => {
	const { data } = supabaseClient.storage
		.from(bucket)
		.getPublicUrl("public/" + filename);

	return {
		publicUrl: data.publicUrl,
	};
};

export const supabaseDeleteFile = async (
	filename: string,
	bucket: "company" | "applicant"
) => {
	const { data, error } = await supabaseClient.storage
		.from(bucket)
		.remove(["public/" + filename]);

	return {
		data,
		error,
	};
};

export const supabaseUpdateFile = async (
	file: File | string,
	filename: string,
	bucket: "company" | "applicant"
) => {
	const { data, error } = await supabaseClient.storage
		.from(bucket)
		.update("public/" + filename, file, {
			cacheControl: "3600",
			upsert: true,
		});

	return {
		data,
		error,
	};
};
