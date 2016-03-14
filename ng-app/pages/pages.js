app
.controller('AboutCtrl', function($scope){
  
  $scope.aboutInfo = [
    {subTitle: '쉬운 교육', icon: 'videocam', info: ['어느 누구나 영상을 따라 쉽게 코딩을 배울 수 있습니다. 진도 속도를 본인이 원하데로 조절할 수 있어서 편리하게 소프트웨어를 개발할 수 있습니다.'], classInfo: 'col s12 m5 offset-m1'},
    {subTitle: '신속한 개발', icon: 'trending_up', info: ['본인이 원하는 것을 직접 해결한다면 개발이 신속해지고 범실도 줄일 수 있습니다.'], classInfo: 'col s12 m5'},
    {subTitle: '문제 해결', icon: 'question_answer', info: ['코딩과 스타트업은 문제를 해결하는 것이 핵심입니다. 문제를 빨리 해결할 수 있는 환경이 있다는 것은 소프트웨어 개발에 큰 도움이 될 것입니다.'], classInfo: 'col s12 m5 offset-m1'},
    {subTitle: '저렴한 비용', icon: 'payment', info: ['스타트업에 있어서 시간은 가장 소중한 자산중에 하나입니다. 그러므로 빠른 개발이 비용을 줄이고 성공의 확율을 높 수 있습니다.'], classInfo: 'col s12 m5'}
  ];

})
.controller('ContactCtrl', function($scope, userStatus){
  // var user = userStatus.getUserModel();
  
});

