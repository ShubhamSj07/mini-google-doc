import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = state => {
    setEditorState(state);
  };

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbarClassName="flex sticky top-0 z-50"
        editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10"
        toolbar={{
          options: [
            "history",
            "fontFamily",
            "fontSize",
            "inline",
            "colorPicker",
            "list",
            "textAlign",
          ],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
            ],
          },
          list: {
            options: ["unordered", "ordered"],
          },
          textAlign: {
            options: ["left", "center", "right"],
          },
        }}
      />
    </div>
  );
};
