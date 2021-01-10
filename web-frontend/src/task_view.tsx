import * as React from "react";

export function TaskView({ task }) {
  const Component = get_task_view_component(task.type);
  if (Component === undefined) {
    return <span>"Unknown task type."</span>;
  }
  return <Component task={task} />;
}

function get_task_view_component(task_type: string) {
  switch (task_type) {
    case "multiple-choice":
      return MultipleChoiceTaskView;
    case "just-text":
      return JustTextTaskView;
    default:
      return undefined;
  }
}

function MultipleChoiceTaskView({ task }) {
  const on_submit = () => {
    console.log("Submit");
  };

  return (
    <div>
      <p>{task.question}</p>
      {task.answers.map((answer, index) => (
        <div key={index}>
          <input type="checkbox" />
          <label>{answer}</label>
          <br />
        </div>
      ))}
      <SubmitButton on_submit={on_submit} />
    </div>
  );
}

function JustTextTaskView({ task }) {
  return <div>{task.text}</div>;
}

function SubmitButton({ on_submit }) {
  return <button onClick={on_submit}>Submit</button>;
}
