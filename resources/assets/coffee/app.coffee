app = angular.module 'map', []
app.controller 'MapController', ($scope) ->
  $scope.todos = [
    body: 'Go to store'
    completed: true
  ,
    body: 'Finish video'
    completed: false
  ]

  $scope.remaining = () ->
    count = 0
    angular.foreach $scope.todos, (todo) ->
    count += if todo.completed then 0 else 1;

    return count
  return
