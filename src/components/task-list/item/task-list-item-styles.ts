import styled from "styled-components/macro";

export const TaskListItemContainer = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 3rem;
  width: 100%;
  background: white;
  transition: all ease-out 150ms;
  &:hover {
    background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
  }
`;

export const TaskListItemCheckbox = styled.label`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  width: 44px;
`;

export const TaskListItemTitle = styled.div`
  flex: 1 1;
  width: 100%;
  line-height: 48px;
`;

interface ITaskListItemActionsProps {
  pinned: boolean;
}

export const TaskListItemActions = styled.div`
  padding-right: 40px;
  background: ${(props: ITaskListItemActionsProps) => props.pinned ? "palevioletred" : "lightpink"};
`;