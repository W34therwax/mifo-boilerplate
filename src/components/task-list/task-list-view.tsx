import React from "react";
import { IDBTask } from "../../types/interfaces/db-interfaces";
import { TaskListItem } from "./item";

export interface ITaskListProps {
  loading?: boolean;
  tasks: IDBTask[];
  onArchiveTask: Function;
  onPinTask: Function;
}

const TaskListView: React.FC<ITaskListProps> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (tasks.length === 0) {
    return <div>empty</div>;
  }

  return (
    <div>
      {tasks.map(task => <TaskListItem key={task.id} task={task} {...events} />)}
    </div>
  );
};

export default TaskListView;
