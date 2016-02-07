import _ from 'lodash';

export default function ($scope, todoFactory) {

  let params = {
    createHasInput: false
  };

  $scope.todos = [
    {
      task: "do dishes",
      isCompleted: false,
      isEditing: false
    },
    {
      task: "walk the dog",
      isCompleted: true,
      isEditing: false
    }
  ];

// gives a strikethrough class to completed task
  $scope.onCompletedClick = todo => {
    todo.isCompleted = !todo.isCompleted;
  };

// cancel editing
  $scope.onCancelClick = todo => {
    todo.isEditing = false;
  };

// saves updated task
  $scope.updateTask = _.partial(todoFactory.updateTask);

// edit a task
  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

// delete a task
  $scope.deleteTask = _.partial(todoFactory.deleteTask, $scope);

// create a new task
  $scope.createTask = _.partial(todoFactory.createTask, $scope, params);

// watch input for two way binding
  $scope.$watch('createTaskInput', _.partial(todoFactory.watchCreateTaskInput, $scope, params));
};
