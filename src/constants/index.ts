import { EnumValues } from "zod";
import { benefitType } from "./types";

export const JOB_TYPES: EnumValues = [
	"Full-Time",
	"Part-Time",
	"Remote",
	"Internship",
];

export const BENEFITS: benefitType[] = [
	{
		benefit: "Full Healthcare",
		desc: "We believe in thriving communities and that starts with our team being happy and healthy.",
	},
	{
		benefit: "Unlimited Vacation",
		desc: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
	},
	{
		benefit: "Skill Development",
		desc: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
	},
];
