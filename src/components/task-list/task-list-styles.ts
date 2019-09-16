import styled from "styled-components/macro";

export const TaskContainer = styled.div`
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

export const TaskCheckbox = styled.label`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  width: 44px;
`;

export const TaskTitle = styled.div`
  flex: 1 1;
  width: 100%;
  line-height: 48px;
`;

interface ITaskActionsProps {
  pinned: boolean;
}

export const TaskActions = styled.div`
  padding-right: 40px;
  background: ${(props: ITaskActionsProps) => props.pinned ? "palevioletred" : "lightpink"};
`;