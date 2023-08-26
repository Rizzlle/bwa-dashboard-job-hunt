import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import DialogAddTeam from "./DialogAddTeam";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
	return (
		<FieldInput
			title="Basic Information"
			subtitle="Add team members of your company"
		>
			<div className="w-[65%] mb-5">
				<div className="flex flex-row justify-between items-center">
					<div className="text-lg font-semibold">2 Members</div>
					<DialogAddTeam />
				</div>
				<div className="grid grid-cols-3 gap-5 mt-6">
					{[0, 1, 2].map((item: number) => (
						<div key={item} className="p-3 shadow text-center">
							<div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
							<div className="mt-4 font-semibold">Hariyanto</div>
							<div className="text-sm text-gray-500">CEO</div>

							<div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
								<InstagramIcon className="w-4 h-4" />
								<LinkedinIcon className="w-4 h-4" />
							</div>
						</div>
					))}
				</div>
			</div>
		</FieldInput>
	);
};

export default TeamForm;
