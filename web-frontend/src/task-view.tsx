import * as React from "react";
import "./task-view.scss";

export function TaskView({ task }) {
  return (
    <div>
      <p>{task.body}</p>
      <p>{task.answer}</p>
    </div>
  );
}
