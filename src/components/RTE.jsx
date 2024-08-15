import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && (
                <label className='block text-gray-700 font-medium mb-2'>
                    {label}
                </label>
            )}
            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, name } }) => (
                    <Editor
                        name={name}
                        value={value}
                        onEditorChange={onChange}
                        onBlur={onBlur}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table help wordcount"
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style:
                                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; background-color: white; }",
                            skin: 'oxide-dark',
                            content_css: 'dark',
                            branding: false,
                        }}
                    />
                )}
            />
        </div>
    );
}
