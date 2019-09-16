import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TaskListItem } from '.';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('TaskListItem', module)
  .add('default', () => <TaskListItem task={task} {...actions} />)
  .add('pinned', () => <TaskListItem task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <TaskListItem task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);