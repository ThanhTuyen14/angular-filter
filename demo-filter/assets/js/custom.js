// angular.module('demoFilter', []).controller('adminControl', function($scope) {
//   $scope.sample_db = [{
//       title: 'Food Kitchen',
//       id: 'food',
//       contents: [
//         { name: 'Texas' },
//         { name: 'KFC' },
//         { name: 'Lotteria' }
//       ],
//     },
//     {
//       title: 'Bar/Pub/Coffee',
//       id: 'bar',
//       contents: [
//         { name: 'GongCha' },
//         { name: 'KOI' }
//       ]
//     },
//     {
//       title: 'Bathroom',
//       id: 'bathroom',
//       contents: [
//         { name: 'A1' },
//         { name: 'B2' }
//       ]
//     }
//   ];
//   // $scope.categoryList = Object.keys($scope.sample_db);
//   // console.log($scope.categoryList);
//   // $scope.getRecordByCategory = [];
//   // var t = function(category) {
//   //   return $scope.sample_db[category];
//   // }
//   $scope.getRecordByCategory = function (category) {
//     return $scope.sample_db[category];
//   }
// });


angular.module('demoFilter2', []).controller('adminControl2', function($scope) {
  $scope.food = [
    {name: 'Texas'},
    {name: 'KFC'},
    {name: 'Lotteria'}
  ];
  $scope.bar = [
    {name: 'GongCha'},
    {name: 'KOI'},
    {name: 'Doremon'}
  ];
  $scope.bathroom = [
    {name: 'A1'},
    {name: 'B2'},
    {name: 'C3'}
  ];
});