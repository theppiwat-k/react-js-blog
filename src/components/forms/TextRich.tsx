import React, {useState} from "react";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import {Editor} from "@tinymce/tinymce-react";
import {isFormInvalid} from "../../utils/isFormInvalid";
import {findInputError} from "../../utils/findInputError";
import {FileManagementModal} from "../file-management/FileManagementModal";

interface Props {
  id: string;
  validation?: RegisterOptions<FieldValues, string> | undefined;
  initValue?: string;
}

export const TextRich = ({id, validation, initValue = ""}: Props) => {
  const [value, setValue] = useState(initValue);

  const tinyInit = {
    height: 500,
    // menubar: true,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "image",
      "charmap",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "table",
      "preview",
      "wordcount",
    ],
    toolbar:
      "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    file_picker_callback: (
      callback: unknown,
      value: string,
      meta: Record<string, unknown>,
    ) => {
      if (meta.filetype === "image") {
        const modal = document.getElementById("file_modal");
        modal?.classList.toggle("hidden");
      }
    },
  };

  const {
    control,
    formState: {errors},
  } = useFormContext();

  const inputError = findInputError({errors: errors, id: id});
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-between">
          {isInvalid && (
            <InputError message={inputError.error.message} key={id} />
          )}
        </div>
        <FileManagementModal modalId="file_modal" />
        <Controller
          name={id}
          control={control}
          rules={validation}
          defaultValue={value}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              onInit={(evt, editor) => {
                onChange && onChange(editor.getContent());
              }}
              onBlur={onBlur}
              onEditorChange={newValue => {
                setValue(newValue);
                onChange && onChange(newValue);
              }}
              init={tinyInit}
              ref={editor => {
                if (editor?.forceUpdate()) {
                  ref({
                    focus: editor?.editor?.focus(),
                  });
                }
              }}
            />
          )}
        />
      </div>
    </>
  );
};

const InputError = ({message}: {message: string}) => {
  return (
    <p className="flex items-center gap-1 rounded-md bg-red-100 px-2 font-semibold text-red-500">
      {message}
    </p>
  );
};
