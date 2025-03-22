"use client";

import React from "react";

interface MarkdownEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id?: string;
}

function MarkdownEditor({ value, setValue, id }: MarkdownEditorProps) {
  return (
    <div className="w-full sm:h-[80vh]">
      <textarea
      value={value}
      onChange={(e) => setValue(e.target.value || "")}
        id={id}
        className="p-2 w-full h-96 sm:h-full text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Project description..."
      ></textarea>
    </div>
  );
}

export default MarkdownEditor;
