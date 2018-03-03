Vue.component("card",{props:["row","index","x"],template:"#card",methods:{update:function(){this.$emit("update")}}});var pg=new Vue({el:"#pg",data:{rows:[{id:"connection",title:"Type of Connection",snippet:"An encrypted connection prevents eavesdropping of any personal information you send to a website.",toggle:!1,desc:"You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…",points:0},{id:"trackers",title:"Tracker Networks",snippet:"Tracker networks aggregate your web history into a data profile about you.",toggle:!1,desc:"You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…",points:0},{id:"majornetworks",title:"Major Tracker Networks",snippet:"These are more harmful because they can track and target you across more of the internet.",toggle:!1,desc:"You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…",points:0},{id:"ismajornetwork",title:"Is this a Major Tracker Network?",snippet:"Is this site itself a major tracker network?",toggle:!1,desc:"You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…",points:0}],score:0,grade:"A",toggle:{title:!0,snippet:!0,url:!0,favicon:!0,result:!0,misc:!1,export:!1},x:{},presets:{default:{isencrypted:!1,trackers:10,major:{google:!0,facebook:!0,twitter:!1,amazon:!1,appnexus:!0,oracle:!1},isthismajor:!0}}},methods:{showhide:function(e){this.toggle[e]=!this.toggle[e]},setPreset:function(e){this.x=this.presets[e]},changePreset:function(e){var t=e.target.value;this.setPreset(t)},calculateScore:function(){this.rows[0].points=this.x.isencrypted?0:-1,this.rows[1].points=-Math.floor(this.x.trackers/4),this.rows[2].points=-_.filter(this.x.major,function(e,t){return 1==e}).length,this.rows[3].points=this.x.isthismajor?-1:0;var e=0,t=_.pluck(this.rows,"points");_.each(t,function(t){e+=t}),this.score=e}},created:function(){this.setPreset("default"),this.calculateScore()}});