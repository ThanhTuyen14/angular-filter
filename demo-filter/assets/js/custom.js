angular.module('demoFilter2', []).controller('adminControl2', function($scope) {
    $scope.sample_db = [{
      title: 'Food Kitchen',
      id: 'food',
      contents: [
        { name: 'banana' },
        { name: 'banana is best' },
        { name: 'love banana' }
      ],
    },
    {
      title: 'Bar/Pub/Coffee',
      id: 'bar',
      contents: [
        { name: 'banana ba ba na na' },
        { name: 'banana seven color' }
      ]
    },
    {
      title: 'Bathroom',
      id: 'bathroom',
      contents: [
        { name: 'A1' },
        { name: 'B2' }
      ]
    }
  ];
  
});

