"use strict";var app=angular.module("app",[]);app.controller("PlanetsController",function(e,a){a.search="planets",a.tab="Celestial Bodies",e.ui=a,e.planets=[{name:"sun",type:"Star",expand:0},{name:"mercury",type:"Planet",expand:0},{name:"venus",type:"Planet",expand:0},{name:"earth",type:"Planet",expand:0},{name:"moon",type:"Satellite",expand:0},{name:"mars",type:"Planet",expand:0}],e.info=[{name:"Surface Area",info:"177.7 million sq miles"},{name:"Radius",info:"3,760 miles"},{name:"Length of Day",info:"116d 18h 0m"},{name:"Mass",info:"4.867E24 kg"},{name:"Distance from Sun",info:"67,240,000 miles"},{name:"Orbital Period",info:"225 days"}]}),app.controller("IndexController",function(){}),app.factory("ui",function(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.",search:"",tab:"Info"}});