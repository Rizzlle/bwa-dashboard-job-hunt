"use client";

import { jobFormSchema } from "@/lib/form-schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
	const form = useForm<z.infer<typeof jobFormSchema>>({
		resolver: zodResolver(jobFormSchema),
		defaultValues: {
			requiredSkills: [],
		},
	});

	return <div>PostJobPage</div>;
};

export default PostJobPage;
