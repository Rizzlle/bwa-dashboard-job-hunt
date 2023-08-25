import { z } from "zod";

export const jobFormSchema = z.object({
	title: z
		.string({ required_error: "Job Title is required" })
		.min(2, { message: "Job Title must be at least 2 characters" }),
	jobType: z.string({
		required_error: "You need to select a job type",
	}),
	salaryFrom: z.string({ required_error: "Salary From must be filled" }),
	salaryTo: z.string({ required_error: "Salary To must be filled" }),
	categoryId: z.string({ required_error: "You need to select a category" }),
	requiredSkills: z
		.string()
		.array()
		.nonempty({ message: "Required skill must be at least 1 skill" }),
	jobDescription: z
		.string({ required_error: "Content must be filled" })
		.min(10, { message: "Content must be at least 10 characters" }),
	responsibility: z
		.string({ required_error: "Content must be filled" })
		.min(10, { message: "Content must be at least 10 characters" }),
	whoYouAre: z
		.string({ required_error: "Content must be filled" })
		.min(10, { message: "Content be at least 10 characters" }),
	NiceTohaves: z
		.string({ required_error: "Content must be filled" })
		.min(10, { message: "Content must be at least 10 characters" }),
	benefits: z
		.object({
			benefit: z.string(),
			description: z.string(),
		})
		.array()
		.nonempty({ message: "Benefits must be at least 1 benefit" }),
});
