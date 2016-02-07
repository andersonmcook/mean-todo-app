import _ from 'lodash';

export default function ($scope) {
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
  $scope.updateTask = todo => {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  };

// edit a task
  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

// delete a task
  $scope.deleteTask = todoToDelete => {
    _.remove($scope.todos, todo => todo.task === todoToDelete.task);
  };

// create a new task
  $scope.createTask = () => {
    params.createHasInput = false;
    $scope.createTaskInput = '';
  };

// watch input for two way binding
  $scope.$watch('createTaskInput', val => {
    if (!val && params.createHasInput) {
      $scope.todos.pop();
      params.createHasInput = false;
    } else if (val && !params.createHasInput) {
      $scope.todos.push({task: val, isCompleted: false});
      params.createHasInput = true;
    } else if (val && params.createHasInput) {
      $scope.todos[$scope.todos.length - 1].task = val;
    }
  });
};
