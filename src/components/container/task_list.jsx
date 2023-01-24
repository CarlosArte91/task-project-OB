import React from 'react';
import { Task } from '../../models/task.class';
import { LEVEL } from '../../models/level.enum';
import TaskComponent from '../pure/task';

// Importar hoja de estilos
import '../../styles/task.scss';

function TaskList() {
  const defaultTask = new Task('Example', 'default description', false, LEVEL.NORMAL);

  return (
    <div>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
