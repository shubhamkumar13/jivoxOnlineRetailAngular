angular.module("myapp",[]).controller("MyController",function($scope,$http)

{$scope.myForm={}

;$scope.myForm.name="";

$scope.myForm.email="";

$scope.myForm.phone="";

$scope.myForm.pass="";

$scope.myForm.add="";

$scope.myForm.city="";

$scope.myForm.submitTheForm=function(item,event)

{console.log("--> Submitting form");

var dataObject={

name:$scope.myForm.name,

email:$scope.myForm.email,

phone:$scope.myForm.phone,

password:$scope.myForm.pass,

address:$scope.myForm.add,

city:$scope.myForm.city};

var responsePromise=$http.post("WebService2.asmx/Helloworld2",dataObject,{});

responsePromise.success(function(data,status,headers,config)

{

var data2=data.replace(/{"d":null}/g,'');

var myjson=JSON.parse(data2);$scope.questions=JSON.parse(myjson);});

responsePromise.error(function(data,status,headers,config){alert(data);

alert("Submitting form failed!");});

}});
