import React, { FC, useState } from "react";
import DialogAddBenefit from "./DialogAddBenefit";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { PartyPopper, X } from "lucide-react";

interface InputBenefitsProps {
	form: any;
}

const InputBenefits: FC<InputBenefitsProps> = ({ form }) => {
	const [benefits, setBenefits] = useState<any[]>([]);

	const deleteBenefit = (item: any) => {
		const deletedBenefits = benefits.filter(
			(benefit: any) => item !== benefit
		);
		setBenefits([...deletedBenefits]);
		form.setValue("benefits", deletedBenefits);
	};

	const updateBenefits = (item: any) => {
		const newValue: any[] = [...benefits, item];

		setBenefits(newValue);
		form.setValue("benefits", newValue);
	};

	return (
		<div className="block">
			<DialogAddBenefit updateBenefits={updateBenefits} />
			<div className="grid grid-cols-3 gap-5 mt-5">
				{benefits.map((item: any, i: number) => (
					<div
						className="border border-gray-200 rounded-sm p-3 relative w-[200px]"
						key={i}
					>
						<PartyPopper className="w-7 h-7 mb-5 text-primary" />

						<div
							className="absolute top-2 right-2 cursor-pointer"
							onClick={() => deleteBenefit(item)}
						>
							<X className="w-6 h-6" />
						</div>

						<div className="text-xl font-semibold mb-3">
							{item.benefit}
						</div>
						<div className="text-gray-500 text-sm">
							{item.description}
						</div>
					</div>
				))}
			</div>

			<FormField
				control={form.control}
				name="benefits"
				render={({ field }) => (
					<FormItem>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default InputBenefits;
