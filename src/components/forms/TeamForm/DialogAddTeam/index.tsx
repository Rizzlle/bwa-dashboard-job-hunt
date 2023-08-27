"use client";

import React, { FC } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { socialMediaFormSchema, teamFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface DialogAddTeamProps {}

const DialogAddTeam: FC<DialogAddTeamProps> = ({}) => {
	const form = useForm<z.infer<typeof teamFormSchema>>({
		resolver: zodResolver(teamFormSchema),
	});

	const { data: session } = useSession();
	const { toast } = useToast();
	const router = useRouter();

	const onSubmit = async (val: z.infer<typeof teamFormSchema>) => {
		try {
			const body = {
				...val,
				companyId: session?.user.id,
			};

			await fetch("/api/company/teams", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			toast({
				title: "Success",
				description: "Add member success",
			});

			await router.refresh();
		} catch (error) {
			toast({
				title: "Error",
				description: "Please try again",
			});
			console.log(error);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<PlusIcon className="h-4 w-4 mr-2" />
					Add member
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add new team</DialogTitle>
					<DialogDescription>
						Fill the field to add new team
					</DialogDescription>
				</DialogHeader>

				<Separator />

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-5"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="position"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Position</FormLabel>
									<FormControl>
										<Input
											placeholder="Position"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-3">
							<FormField
								control={form.control}
								name="instagram"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Instagram</FormLabel>
										<FormControl>
											<Input
												placeholder="Instagram"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="linkedin"
								render={({ field }) => (
									<FormItem>
										<FormLabel>LinkedIn</FormLabel>
										<FormControl>
											<Input
												placeholder="LinkedIn"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button>Save</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogAddTeam;
