import React from "react";
import { IDBTask } from "../../../types/interfaces/db-interfaces";
import {
  TaskListItemContainer,
  TaskListItemCheckbox,
  TaskListItemTitle,
  TaskListItemActions
} from "./task-list-item-styles";

export interface ITaskProps {
  task: IDBTask;
  onArchiveTask: Function;
  onPinTask: Function;
}

const TaskListItemView: React.FC<ITaskProps> = ({
  task,
  onArchiveTask,
  onPinTask
}) => {
  return (
    <TaskListItemContainer>
      <TaskListItemCheckbox>
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          onClick={() => onArchiveTask(task.id)}
          disabled={true}
          name="checked"
        />
      </TaskListItemCheckbox>
      <TaskListItemTitle>{task.title}</TaskListItemTitle>
      {task.state !== "TASK_ARCHIVED" && (
        <TaskListItemActions
          pinned={task.state === "TASK_PINNED"}
          onClick={() => onPinTask(task.id)}
        />
      )}
    </TaskListItemContainer>
  );
};

export default TaskListItemView;
