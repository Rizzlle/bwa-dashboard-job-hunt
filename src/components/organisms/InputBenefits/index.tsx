import { BENEFITS } from "@/constants";
import { benefitType } from "@/constants/types";
import React, { FC, useState } from "react";
import DialogAddBenefit from "./DialogAddBenefit";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { PartyPopper, X } from "lucide-react";

interface InputBenefitsProps {
	form: any;
}

const InputBenefits: FC<InputBenefitsProps> = ({ form }) => {
	const [benefits, setBenefits] = useState<benefitType[]>(BENEFITS);

	const deleteBenefit = (item: benefitType) => {
		const deletedBenefits = benefits.filter(
			(benefit: benefitType) => item !== benefit
		);
		setBenefits([...deletedBenefits]);
		form.setValue("benefits", deletedBenefits);
	};

	const updateBenefits = (item: benefitType) => {
		const newValue: benefitType[] = [...benefits, item];

		setBenefits(newValue);
		form.setValue("benefits", newValue);
	};

	return (
		<>
			<DialogAddBenefit updateBenefits={updateBenefits} />
			<div className="grid grid-cols-3 gap-5 mt-5">
				{benefits.map((item: benefitType, i: number) => (
					<div
						className="border border-gray-200 rounded-sm p-3 relative"
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
						<div className="text-gray-500 text-sm">{item.desc}</div>
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
		</>
	);
};

export default InputBenefits;
