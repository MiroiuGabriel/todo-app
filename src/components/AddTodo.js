import React, { useState } from "react";
import InputBox from "./InputBox";
import "./css/addtodo.css";
import clsx from "clsx";
import {
  FaMoon as DarkThemeIcon,
  FaSun as LightThemeIcon
} from "react-icons/fa";

const AddTodo = ({
  addTask,
  onEditCancel,
  editTask,
  saveEditTask,
  theme,
  changeTheme
}) => {
  const [title, setTitle] = useState(editTask ? editTask.title : "");
  const [content, setContent] = useState(editTask ? editTask.content : "");
  const [errors, setErrors] = useState({ title: false, content: false });

  const onChangeTitle = e => {
    setTitle(e.target.value);
    setErrors({ ...errors, title: !e.target.value });
  };
  const onChangeContent = e => {
    setContent(e.target.value);
    setErrors({ ...errors, content: !e.target.value });
  };
  const addTodo = () => {
    if (title.length > 0 && content.length > 0) {
      addTask(title, content);
      setTitle("");
      setContent("");
    }
    setErrors({ title: title.length === 0, content: content.length === 0 });
  };

  const onCancel = () => {
    onEditCancel();
    setTitle("");
    setContent("");
  };

  const addEditedTodo = (newTitle, newContent) => {
    if (newTitle.length > 0 && newContent.length > 0) {
      saveEditTask(editTask.id, title, content);
      setTitle("");
      setContent("");
    }
    setErrors({ title: title.length === 0, content: content.length === 0 });
  };
  const taskTracker = clsx("task-tracker", theme);
  const btn = clsx("btn", theme);
  const themeBtn = clsx("theme-button", theme);
  return (
    <div className="add-todo-container">
      <div className="task-tracker-container">
        <h2 className={taskTracker}>Task Tracker</h2>
        <div className="btns-container-add">
          <button className={themeBtn} onClick={changeTheme}>
            {theme == "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
          </button>

          {!editTask && (
            <button className={btn} onClick={addTodo}>
              Add
            </button>
          )}
        </div>
        {editTask && (
          <div>
            <button
              className="btn edit margin"
              onClick={() => addEditedTodo(title, content)}
            >
              Edit
            </button>
            <button className="btn cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="todo-create-container">
        <InputBox
          label="Title:"
          value={title}
          onChange={onChangeTitle}
          hasError={errors.title}
          theme={theme}
        />
        <InputBox
          label="Todo:"
          value={content}
          onChange={onChangeContent}
          hasError={errors.content}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default AddTodo;