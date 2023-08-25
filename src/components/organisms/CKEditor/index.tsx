import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FC, useEffect, useRef } from "react";

interface CKEditorProps {
	form: any;
	name: any;
	editorLoaded?: boolean;
}

const CKEditor: FC<CKEditorProps> = ({ form, name, editorLoaded }) => {
	const editorRef = useRef<any>();
	const { CKEditor, ClassicEditor } = editorRef.current || {};

	useEffect(() => {
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
	}, []);

	return (
		<>
			{editorLoaded ? (
				<div>
					<CKEditor
						editor={ClassicEditor}
						data={form.getValues(name)}
						onChange={(event: any, editor: any) => {
							const data = editor.getData();
							form.setValue(name, data);
						}}
					/>
					<FormField
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem>
								<FormMessage className="mt-3" />
							</FormItem>
						)}
					/>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default CKEditor;
