import React from "react";
import { IDBTask } from "../../types/interfaces/db-interfaces";
import { TaskList } from "../../components/task-list";
import { RouteComponentProps } from '@reach/router';

export interface ITaskListProps {
  tasks: IDBTask[];
}

const HomeView: React.FC<RouteComponentProps<ITaskListProps>> = ({
  tasks,
}) => {

  return (
    <div>
      {/* this should came from somewhere of course, redux, firebase or something */}
      <TaskList
        tasks={[
          { state: "TASK_INBOX", id: "1", title: "Task 1" },
          { state: "TASK_ARCHIVED", id: "2", title: "Task 2" },
          { state: "TASK_PINNED", id: "3", title: "Task 3" }
        ]}
        onPinTask={() => console.log("pinned")}
        onArchiveTask={() => console.log("archived")}
      />{" "}
    </div>
  );
};

export default HomeView;
