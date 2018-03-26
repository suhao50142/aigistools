webpackJsonp([2],{23:function(t,e,a){"use strict";t.exports={app:a(44),view:a(49),style:a(47),script:a(45),server:a(46),tools:a(48),api:a(43)}},355:function(t,e,a){"use strict";(function(t){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),i=function(){function e(t){a(this,e),this.api=t}return n(e,[{key:"endpoint",value:function(t){return this.api.url+"/"+t}},{key:"fetch",value:function(e){var a=this;return new Promise(function(n,i){return t.ajax(a.endpoint("missions/"+e.mission_id+"/drops"),{type:"get",dataType:"json",crossDomain:!0}).then(function(t){n(t)}).fail(i)})}}]),e}();e.default=i}).call(e,a(2))},356:function(t,e,a){"use strict";(function(t){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),i=function(){function e(t,n){a(this,e),this.api=t,this.credentials=n,this.account=null}return n(e,[{key:"endpoint",value:function(t){return this.api.url+"/"+t}},{key:"signup",value:function(){var e=this;return new Promise(function(a,n){return t.ajax(e.endpoint("account/signup"),{type:"post",dataType:"json",crossDomain:!0}).then(function(t){a(t.player)}).fail(n)})}},{key:"login",value:function(e){var a=this;return new Promise(function(n,i){return t.ajax(a.endpoint("account/login"),{type:"post",dataType:"json",data:{name:e},crossDomain:!0}).then(function(t){n(t.player)}).fail(i)})}},{key:"record",value:function(e){var a=this;return new Promise(function(n,i){return t.ajax(a.endpoint("missions/"+e.mission_id+"/drops"),{type:"post",dataType:"json",data:e,headers:{Authorization:"Bearer "+a.account.api_token},crossDomain:!0}).then(function(t){n()}).fail(i)})}},{key:"deleteRecord",value:function(e){var a=this;return new Promise(function(n,i){return t.ajax(a.endpoint("missions/"+e.mission_id+"/drops_clear"),{type:"post",headers:{Authorization:"Bearer "+a.account.api_token},crossDomain:!0}).then(function(t){n()}).fail(i)})}},{key:"loginOrSignup",value:function(){var t=this;return this.account?Promise.resolve(this.account):this.credentials?this.login(this.credentials).then(function(t){return t}).catch(function(){t.credentials=null}):this.signup().then(function(t){return t})}},{key:"send",value:function(t){var e=this;return this.loginOrSignup().then(function(a){return e.account=a,e.record(t).then(function(){return a})})}},{key:"clear",value:function(t){var e=this;return this.loginOrSignup().then(function(a){return e.account=a,e.deleteRecord(t).then(function(){return a})})}}]),e}();e.default=i}).call(e,a(2))},357:function(t,e,a){"use strict";(function(t){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),i=function(){function e(t){a(this,e),this.api=t}return n(e,[{key:"endpoint",value:function(t){return this.api.url+"/"+t}},{key:"fetch",value:function(e){var a=this;return new Promise(function(n,i){return t.ajax(a.endpoint("missions/"+e.mission_id+"/drops_stats"),{type:"get",dataType:"json",data:e.filter,crossDomain:!0}).then(function(t){n(t)}).fail(i)})}}]),e}();e.default=i}).call(e,a(2))},358:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(628),r=n(i),o=a(627),s=n(o);e.default={ja:r.default,"en-US":s.default}},384:function(t,e){t.exports=[{id:"20171109",mission_id:6,periods:[["2017/11/09 15:00:00","2017/11/16 10:00:00"],["2017/11/16 15:00:00","2017/11/23 10:00:00"]],objectives:[{value:10,title:"堕姫が仲間になる",icon:"ochihime"},{value:30,title:"スキルレベル2",icon:"ochihime"},{value:50,title:"初期レベル10",icon:"ochihime"},{value:100,title:"スキルレベル3",icon:"ochihime"},{value:150,title:"出撃コスト-1",icon:"ochihime"},{value:200,title:"スキルレベル4",icon:"ochihime"},{value:250,title:"出撃コスト-2",icon:"ochihime"},{value:300,title:"スキルレベル5",icon:"ochihime"},{value:350,title:"初期レベル20",icon:"ochihime"},{value:400,title:"スキルレベル6",icon:"ochihime"},{value:500,title:"出撃コスト-3",icon:"ochihime"},{value:600,title:"スキルレベル7",icon:"ochihime"},{value:700,title:"初期レベル30",icon:"ochihime"},{value:800,title:"スキルレベル8",icon:"ochihime"},{value:900,title:"出撃コスト-4",icon:"ochihime"},{value:1e3,title:"初期レベル40",icon:"ochihime"},{value:1100,title:"スキルレベル9",icon:"ochihime"},{value:1200,title:"出撃コスト-5",icon:"ochihime"},{value:1300,title:"スキルレベル10",icon:"ochihime"},{value:1400,title:"初期レベル50",icon:"ochihime"}],prizes:[],maps:[{id:2017110901,name:"華の国の妖狐",charisma:20,stamina:1,expectation:3,drops:[{name:"赤い彼岸花3",icon:"red-lycoris-3",set:1},{name:"花束",icon:"flower"}],experience:150,gold:900,max_drop:3},{id:2017110902,name:"誘惑の赤き花",charisma:30,stamina:2,expectation:3,drops:[{name:"赤い彼岸花3",icon:"red-lycoris-3",set:1},{name:"山賊バーガン",icon:"bagan"},{name:"魔水晶",icon:"demon-crystal-1"}],experience:200,gold:1200,max_drop:3},{id:2017110903,name:"王子の逃避行",charisma:40,stamina:4,expectation:6,drops:[{name:"赤い彼岸花3",icon:"red-lycoris-3",set:2},{name:"忍者カゲロウ",icon:"kagerou"},{name:"見習い拳士マオ",icon:"mao"},{name:"魔術師パレス",icon:"palace"}],experience:280,gold:1800,max_drop:6},{id:2017110904,name:"炎を纏いし邪仙",charisma:50,stamina:7,expectation:13,drops:[{name:"赤い彼岸花5",icon:"red-lycoris-5",set:2},{name:"赤い彼岸花3",icon:"red-lycoris-3",set:1},{name:"魔女カリオペ",icon:"calliope"},{name:"白金の聖霊",icon:"platinum-sprit"}],experience:360,gold:2100,max_drop:13},{id:2017110905,name:"滅びを奏でし銃口",charisma:80,stamina:9,expectation:15,drops:[{name:"赤い彼岸花5",icon:"red-lycoris-5",set:3},{name:"槍騎兵エレイン",icon:"elain"},{name:"プラチナアーマー",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}],experience:450,gold:2700,max_drop:15},{id:2017110906,name:"(未定)",charisma:40,stamina:5,expectation:9,drops:[{name:"赤い彼岸花3",icon:"red-lycoris-3",set:3},{name:"???",icon:""},{name:"聖霊女王",icon:"gladys"},{name:"プラチナアーマー",icon:"platinum-bucket"}],experience:300,gold:1950,max_drop:9,unused:!0},{id:2017110907,name:"(未定)",charisma:70,stamina:8,expectation:13,drops:[{name:"赤い彼岸花5",icon:"red-lycoris-5",set:2},{name:"赤い彼岸花3",icon:"red-lycoris-3",set:1},{name:"???",icon:""},{name:"ルビー",icon:"ruby"}],experience:400,gold:2550,max_drop:13,unused:!0},{id:2017110908,name:"(未定)",charisma:90,stamina:12,expectation:25,drops:[{name:"赤い彼岸花5",icon:"red-lycoris-5",set:5},{name:"???",icon:""},{name:"技強化の聖霊",icon:"rainbow-sprit"}],experience:620,gold:3e3,max_drop:25,unused:!0},{id:2017110909,name:"(未定)",charisma:100,stamina:2,expectation:0,drops:[{name:"金の聖霊",icon:"gold-sprit"},{name:"白金の聖霊",icon:"platinum-sprit"},{name:"黒の聖霊",icon:"black-sprit"},{name:"技強化の聖霊",icon:"rainbow-sprit"}],experience:250,gold:1800,max_drop:0,unused:!0}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucke"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"bonds-nina"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"crystal-fragment"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"bonds-celia"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"crystal-fragment"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"bonds-frorica"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"black-sprit"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"}]}]},385:function(t,e){t.exports=[{id:1,name:"ドロップ率UPなし (100%)",rate:1},{id:2,name:"シーフあり (103%)",rate:1.03},{id:3,name:"トレジャーハンターあり (105%)",rate:1.05}]},43:function(t,e,a){"use strict";t.exports={url:"https://aigis.woodlouze.tech/api"}},44:function(t,e,a){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}var i=a(8),r=n(i);t.exports={path:r.default.resolve(e,"../"),name:"千年戦争アイギスツール",author:"Seiji Nitta",thumbnail:r.default.resolve(e,"../assets/thumbnails"),version:"201706152010"}}).call(e,"/")},45:function(t,e,a){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}var i=a(8),r=n(i);t.exports={path:r.default.resolve(e,"../scripts"),optimize:!1}}).call(e,"/")},46:function(t,e,a){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}var i=a(8),r=n(i);t.exports={root:r.default.resolve(e,"../../public"),protocol:"http",host:"localhost",port:8080,base:"/",asset:"assets/",thumbnail:"thumbnails/"}}).call(e,"/")},47:function(t,e,a){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}var i=a(8),r=n(i);t.exports={path:r.default.resolve(e,"../styles")}}).call(e,"/")},48:function(t,e,a){"use strict";t.exports=[{name:"キャリーさんもそう思うジェネレーター",id:"carrie",path:"carrie"},{name:"ダメージビジュアライザー",id:"visualizer",path:"visualizer"},{name:"漆黒の射手リタさんがチラチラ見てくる",id:"aigisrita",path:"https://chrome.google.com/webstore/detail/ememknmjckfbganihedbodegbdddlhhl"},{name:"隠密測定",id:"onmitsu",path:"onmitsu/"},{name:"ご飯計算機",id:"exp",path:"exp/"},{name:"千年マスゲーム",id:"massgame",path:"massgame/"},{name:"赤い彼岸花タイマー",id:"red-lycoris-timer",path:"red-lycoris-timer/"},{name:"勝利メダルタイマー",id:"victory-medal-timer",path:"victory-medal-timer/",deprecated:!0},{name:"定風珠の欠片タイマー",id:"teifushu-fragment-timer",path:"teifushu-fragment-timer/",deprecated:!0},{name:"グリモワールの書片タイマー",id:"grimoire-fragment-timer",path:"grimoire-fragment-timer/",deprecated:!0},{name:"龍玉の欠片タイマー",id:"dragon-bead-timer",path:"dragon-bead-timer/",deprecated:!0},{name:"呪いの武器タイマー",id:"cursed-weapon-timer",path:"cursed-weapon-timer/",deprecated:!0},{name:"血判状タイマー",id:"blood-petition-timer",path:"blood-petition-timer/",deprecated:!0},{name:"封印の魂タイマー",id:"sealing-talisman2-timer",path:"sealing-talisman2-timer/",deprecated:!0},{name:"英霊の魂タイマー",id:"soldier-soul-timer",path:"soldier-soul-timer/",deprecated:!0},{name:"至宝のカケラタイマー",id:"treasure-fragment2-timer",path:"treasure-fragment2-timer/",deprecated:!0},{name:"住民の魂タイマー",id:"resident-soul-timer",path:"resident-soul-timer/",deprecated:!0},{name:"魔神の骨片タイマー",id:"demon-bone-timer",path:"demon-bone-timer/",deprecated:!0},{name:"ミスリル鉱タイマー",id:"mithril-timer",path:"mithril-timer/",deprecated:!0},{name:"封印の札タイマー(旧)",id:"sealing-talisman-timer",path:"sealing-talisman-timer/",deprecated:!0},{name:"刻水晶タイマー",id:"time-crystal-timer",path:"time-crystal-timer/",deprecated:!0},{name:"至宝のカケラタイマー(旧)",id:"treasure-fragment-timer",path:"treasure-fragment-timer",deprecated:!0},{name:"竜水晶タイマー",id:"dragon-crystal-timer",path:"dragon-crystal-timer/",deprecated:!0}]},49:function(t,e,a){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}var i=a(8),r=n(i);t.exports={path:r.default.resolve(e,"../views"),helper:r.default.resolve(e,"../helpers")}}).call(e,"/")},627:function(t,e){t.exports={translation:{"データ{{no}}":"Slot #{{no}}","残り{{lap}}周":"{{lap}} laps remain","{{amount}}個":"{{amount}}","{{amount}}個 <small>({{samples}}件)</small>":"{{amount}} <small>({{samples}} samples)</small>","{{percentage}}%経過":"{{percentage}}% elapsed","{{percentage}}%達成":"{{percentage}}% completed","現在の赤い彼岸花":"Current","目標":"Objective","イベント期間":"Event period","このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。":"Expected result <strong>{{result}}</strong> at the current pace.","<strong>{{date}}</strong>頃に目標達成できそうよ":"Completion date is <strong>{{date}}</strong>.","周回MAP":"Mission","見積り":"Estimate","ランク":"Rank","結晶回復":"Use crystal for","カリスマ＆スタミナ":"Charisma & Stamina","カリスマのみ":"Charisma","スタミナのみ":"Stamina","使用しない":"N/A","自然回復を計算に含める":"Take normal time recovers into calc.","消費結晶":"Required crystals","個":"","カリスマ":"Charisma","スタミナ":"Stamina","到達収集数":"Expected result","対目標数":"Objective","周回数":"Laps","消費カリスマ":"Consumed charisma","対要求":"Requirement","消費スタミナ":"Consumed stamina","獲得EXP":"Got exp","獲得ゴールド":"Got gold","対要求周回":"Requirement","1パリン":"per crystal","アンナさんからのアドバイス":"Advice from Anna","見積りをご利用する際は":"If estimate required crystals, must ","マップの期待値":"fill drop rate","を入力してください":"of maps","わかった":"OK","追加報酬":"Rewards","収集数":"Achived","報酬":"Reward","交換":"Exchange","ノルマ":"Quota","1時間当たり":"Per hour","30分当たり":"Per 30 minutes","1日当たり":"Per day","残り{{days}}日":"Remain {{days}} days","残り{{hours}}時間":"Remain {{hours}} hours","残り{{minutes}}分":"Remain {{minutes}} minutes","ドロップ":"Drop","ドロップ÷周回数で期待値を算出":"Rate = Drop / Laps","期待値を直接入力":"Rate = Input","1週の期待値":"Per lap","カリスマ1当たり":"Per charisma","スタミナ1当たり":"Per stamina","ドロップ合計と現在の収集数を同期する":"Synchronize total and current items","データの保存先":"Save to","動かなくなったとき":"Trouble shooting","設定とデータを初期化する":"Initialize settings and saved data","カリスタ":"Ch/St","言語":"Language","1周の期待値":"Drop rate","周回":"Lap","周":"","ドロップ合計":"Drop Σ","試験運用中":"Experimental","参照データ":"Drop rate source","個人集計":"Local data","全体集計":"Global data","ドロップ情報を匿名で報告する":"Report drop information anonymously","更新":"Refresh","マップ":"Mission","ドロップ数":"Drops","1週当たり":"Per lap","編成":"Team drop rate","初回確定":"Initial bonus","込み":"Include","除外":"Exclude","で報告":"Report","更新日時":"Updated at","すべて":"All",'{{amount}}個 <small class="barchart-label-sub">(標本{{samples}}件, {{laps}}周)</small>':'{{amount}} <small class="barchart-label-sub">({{samples}} samples, {{laps}} laps)</small>','{{laps}}週 <small class="barchart-label-sub">(標本{{samples}}件)</small>':'{{laps}} <small class="barchart-label-sub">({{samples}} samples)</small>',"{{amount}}週":"{{amount}} laps","自分の報告を削除":"Remove own reports","初回確定ドロップを含んだ数を報告":"Report as include initial drop bonus","堕姫が仲間になる":"Available Ochihime","スキルレベル2":"Skill level 2","初期レベル10":"Initial level 10","スキルレベル3":"Skill level 3","出撃コスト-1":"Cost -1","スキルレベル4":"Skill level 4","出撃コスト-2":"Cost -2","スキルレベル5":"Skill level 5","初期レベル20":"Initial level 20","スキルレベル6":"Skill level 6","出撃コスト-3":"Cost -3","スキルレベル7":"Skill level 7","初期レベル30":"Initial level 30","絆のニナ":"Bond Nina","スキルレベル8":"Skill level 8","出撃コスト-4":"Cost -4","初期レベル40":"Initial level 40","絆のセリア":"Bond Ceria","スキルレベル9":"Skill level 9","出撃コスト-5":"Cost -5","絆のフローリカ":"Bond Florika","スキルレベル10":"Skill level 10","初期レベル50":"Initial level 50","プラチナアーマー":"Platinum armor","結晶のカケラ":"Fragment of crystal","ゴールドアーマー":"Gold armor","黒聖霊":"Spirit of Black","虹聖霊":"Spirit of Rainbow","ドロップ率UPなし (100%)":"Normal (100%)","シーフあり (103%)":"With thief (103%)","トレジャーハンターあり (105%)":"With treasure hunter (105%)",ja:"Japanese","en-US":"English (Engrish)"}}},628:function(t,e){t.exports={translation:{ja:"日本語","en-US":"英語 (Engrish)"}}},726:function(t,e,a){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}function n(e){T.default.init({lng:e,resources:z.default},function(e,a){e&&console.error(e),V=a,A.default.init(T.default,t,{}),t("body").localize()})}function i(t){return 27+(t<=100?3*t:300+t-100)}function r(t){return 12+(t<=100?0:Math.floor((t-100)/20)+1)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var a=t.toFixed(e).split("."),n=parseInt(a[0]);return n.toLocaleString()+(1===a.length?"":"."+a[1])}function s(){if(lt&&"direct"!==ct){var e=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,e){return t+e},0);t("input[name=current]").val(e).trigger("change")}}function c(){var e=void 0;try{e=JSON.parse(t.cookie(ot+"_storage"))}catch(t){console.warn(t),e=gt}return e}function l(e){t.cookie(ot+"_storage",JSON.stringify(e),{expires:30})}function u(e){var a=void 0;try{a=JSON.parse(t.cookie(ot+e.active))}catch(t){console.warn(t),a={}}return t.extend(!0,vt,a)}function p(e){t.cookie(ot+ut.active,JSON.stringify(e),{expires:30})}function m(){if(rt){var e=45,a=7,n=parseInt(pt.val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),r=i.attr("data-amount")-n;if(r<-e)i.hide();else if(r<0)i.css("opacity",.5).show();else if(r<e)i.addClass("active").css("opacity",1).show();else if(r<e*a){var o=1-Math.floor(r/e)*e/(e*(a+1));i.show().css("opacity",o)}else i.hide();var s=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",c=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(s).text(c)})}}function d(){if("exchange"===it){var e=parseInt(pt.val());et.forEach(function(a){for(var n=t('[data-prize="'+a.unit+'"]').empty(),i=0;i<e;i+=a.value){var r=t("<i />").addClass("icon icon-"+a.unit),o=25*Math.min(e-i,a.value)/a.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-o})).append(r.clone().css({width:o+"px"})).appendTo(n)}})}}function f(){var e=t("[name=expectation]:input").val(),a=1/0,n=0,i="drop"===e?null:e,r=void 0;r="lap"==e?at.map(function(t,e){var i=e in $.maps?$.maps[e].numLaps:0,r=X&&t.id in X?X[t.id].lap_sum:0;return a=0,n=Math.max(n,i,r),{own:i,theirs:r}}):at.map(function(t){var e=t.expectation/(i&&t[i]||1),r=X&&t.id in X?X[t.id].drop_average/(i&&t[i]||1):0;return a=0,n=Math.max(n,e,r),{own:e,theirs:r}});var s="lap"===e?0:3;at.forEach(function(i,c){var l=t("[data-chart="+c+"]"),u=r[c].theirs,p=u/(n-a),m=120*p+240,d="lap"===e?'{{laps}}週 <small class="barchart-label-sub">(標本{{samples}}件)</small>':'{{amount}}個 <small class="barchart-label-sub">(標本{{samples}}件, {{laps}}周)</small>';l.find(".barchart-theirs > .barchart-label").html(V(d,{amount:o(u,s),samples:X&&i.id in X?o(X[i.id].samples,0):"?",laps:X&&i.id in X?o(X[i.id].lap_sum,0):"?"})),l.find(".barchart-theirs > .barchart-bar").css({width:100*p+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"}),u=r[c].own,p=u/(n-a),m=120*p+240,d="lap"===e?"{{amount}}週":"{{amount}}個",l.find(".barchart-own > .barchart-label").html(V(d,{amount:o(u,s)})),l.find(".barchart-own > .barchart-bar").css({width:100*p+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"})})}function h(){var e=parseInt(mt.val()),a=parseInt(pt.val()),n=Math.max(e-a,0);at.forEach(function(e,a){var i=t("[data-chart="+a+"]"),r=X&&e.id in X?X[e.id].drop_average:0,s=n?Math.ceil(n/r):0;i.find(".barchart-theirs > .marathon").text(V("残り{{lap}}周",{lap:o(s)})),r=e.expectation,s=n?Math.ceil(n/r):0,i.find(".barchart-own > .marathon").text(V("残り{{lap}}周",{lap:o(s)}))}),t("#expectation_drop_total").text(o(a))}function v(){var e=parseInt(pt.val()),a=parseInt(mt.val()),n=at[parseInt(t("[name=estimate_map]:input").val())],s=Math.max(a-e,0),c="local"==$.source?n.expectation:X&&n.id in X?X[n.id].drop_average:0,l=Math.ceil(s/c);t("#estimate_required_marathon").text(o(l));var u=(new Date).getTime(),p=Z.reduce(function(t,e){return t+Math.max(e[1],u)-Math.max(e[0],u)},0),m=0+t("[name=estimate_natural_recovery]:input").prop("checked"),d=Math.floor(p/18e4)*m,f=Math.floor(p/36e5)*m,h=parseInt(t("[name=estimate_rank]").val()),v=i(h),g=r(h),b=Math.ceil(n.charisma*l),_=Math.ceil(n.stamina*l),x=t("[name=estimate_use_crystal]:input").val(),y=0+("both"===x||"charisma"===x),k=0+("both"===x||"stamina"===x),w=y?b:d,M=k?_:f,j=Math.floor(Math.min(w/n.charisma,M/n.stamina));t("#estimate_available_marathon").text(o(j));var C=Math.ceil(Math.max(n.charisma*j-d,0)/v),T=Math.ceil(Math.max(n.stamina*j-f,0)/g),I=C+T;t("#estimate_required_crystal").text(o(I));var D=0===C?"diff-eq":C>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",D).text(o(C)),D=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",D).text(o(T));var R=j-l;D=0===R?"diff-eq":R>0?"diff-plus":"diff-minus";var E=(R>=0?"+":"")+o(R);t("#estimate_available_marathon_diff").attr("class",D).text(E);var S=n.charisma*j;t("#estimate_using_charisma").text(o(S)),R=S-b,D=0===R?"diff-eq":R>0?"diff-plus":"diff-minus",E=(R>=0?"+":"")+o(R),t("#estimate_using_charisma_diff").attr("class",D).text(E);var z=Math.ceil(n.stamina*j);t("#estimate_using_stamina").text(o(z)),R=z-_,D=0===R?"diff-eq":R>0?"diff-plus":"diff-minus",E=(R>=0?"+":"")+o(R),t("#estimate_using_stamina_diff").attr("class",D).text(E);var P=e+Math.floor(c*j);t("#estimate_result_collection").text(o(P)),R=P-a,D=0===R?"diff-eq":R>0?"diff-plus":"diff-minus",E=(R>=0?"+":"")+o(R),t("#estimate_result_collection_diff").attr("class",D).text(E);var A=Math.floor(n.experience*j);E=(A>0?"+":"")+o(A),t("#estimate_experience").text(E);var O=I?A/I:0;E=(O>0?"+":"")+o(O),t("#estimate_avg_experience").text(E);var q=Math.floor(n.gold*j);E=(q>0?"+":"")+o(q),t("#estimate_gold").text(E);var L=I?q/I:0;E=(L>0?"+":"")+o(L),t("#estimate_avg_gold").text(E)}function g(){var e=parseInt(pt.val()),a=parseInt(mt.val()),n=(new Date).getTime(),i=Z.reduce(function(t,e){return t+Math.max(e[1],n)-Math.max(e[0],n)},0),r=Math.max(a-e,0),s=i/864e5,c=r/Math.max(s,1),l=i/36e5,u=r/Math.max(l,1),p=i/18e5,m=r/Math.max(p,1),d=o(c,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=o(u,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=o(m,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(V("残り{{days}}日",{days:o(s,0)})),t("#remains_hours").text(V("残り{{hours}}時間",{hours:o(l,0)})),t("#remains_minutes").text(V("残り{{minutes}}分",{minutes:o(60*l,0)}));var f=100*Math.min(e,a),h=parseInt(f/a)||0,v=tt-i,g=parseInt(100*v/tt)||0,b=void 0;b=100===h?"progress-bar-success":h>=g?"progress-bar-success":h>.7*g?"progress-bar-info":h>.4*g?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(h+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(b).children("span").text(V("{{percentage}}%達成",{percentage:h})),t("#period_progress > .progress-bar").width(g+"%").children("span").text(V("{{percentage}}%経過",{percentage:g}));var _=e*tt/v;t("#prediction_label").empty().append(V("このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。",{result:o(Math.floor(_))}));var x=Math.min(_/a,1),y=t("#objective_progress").width(),k=y*x-47;t(".pointer").css("left",k+"px");var w=y-k<230?-250:0;if(t(".pointer-label").css("margin-left",w+"px"),e<a&&_>=a){var M=void 0,j=void 0;Z.forEach(function(t){M=M||t[0],j=j||t[1]});var C=a/_*tt,T=Z.reduce(function(t,e){if(t)return t;var a=e[1]-e[0];return a<C?(C-=a,null):new Date(e[0]+C)},null),I=T.getMonth(),D=T.getDate(),R=T.getHours(),E=T.getMinutes(),S=I+1+"/"+D+" "+(R<10?"0"+R:R)+":"+(E<10?"0"+E:E),z=V("<strong>{{date}}</strong>頃に目標達成できそうよ",{date:S});t("#prediction_label").append("<span> </span>").append(t("<span />").html(z))}}function b(){var t="animated bounce",e="",a="Webkit Moz O ms Khtml".split(" "),n="",i=document.createElement("div");if(void 0!==i.style.animationName)return!0;for(var r=0;r<a.length;r++)if(void 0!==i.style[a[r]+"AnimationName"])return n=a[r],t=n+"Animation",e="-"+n.toLowerCase()+"-",!0;return!1}function _(e){var a=Y.objectives.find(function(t){return t.value==e.id});return t("<div />").append(t("<i />").addClass("icon icon-"+a.icon)).append(t("<span />").text(" ")).append(t("<span />").text(V(a.title))).append(t("<span />").text(" ")).append(t('<span class="label label-default" />').text(a.value)).each(function(e,n){a.unconfirmed&&t(n).append(t("<span> </span>")).append(t('<span class="label label-danger">未確認</span>'))}).html()}function x(){t("[data-chart]").css("opacity",.4),t("#recent_report").css("opacity",.4);var e={mission_id:Y.mission_id};return e.drops=t("#map tr[data-map]").map(function(){var e=t(this),a=at[parseInt(e.attr("data-map"))],n=Math.max(parseInt(e.find("input[name=num_laps]").val())||0,0),i=Math.max(parseInt(e.find("input[name=num_drops]").val())||0,0);return{map_id:a.id,lap:n,quantity:i,rate:$.dropRate,contains_initial_bonus:$.contains_initial_bonus?1:0}}).toArray(),W.send(e).then(function(t){$.credentials=t.api_token,p($)}).catch(function(t){console.error("Failed to reporting.")}).then(function(){w(),M()})}function y(){$.report&&(bt&&clearTimeout(bt),bt=setTimeout(x,1e3))}function k(){t("#recent_report").css("opacity",.4);var e={mission_id:Y.mission_id};W.clear(e).then(function(){w(),M()}).catch(function(){console.error("Failed to delete reports.")})}function w(){t("[data-chart]").css("opacity",.4);var e={mission_id:Y.mission_id,filter:{drop_rate:$.statDropRateFilter}};K.fetch(e).then(function(t){X=t.maps.reduce(function(t,e){return t[e.id]=e,t},{})}).then(function(){f(),h(),v(),t("[data-chart]").css("opacity",1)})}function M(){t("#recent_report").css("opacity",.4);var e={mission_id:Y.mission_id,filter:{drop_rate:$.statDropRateFilter}};Q.fetch(e).then(function(e){var a=t("#recent_report_list").empty();e.data.forEach(function(e){t("<tr />").toggleClass("invalid",!e.verified).append(t("<td />").text(e.player_uuid)).append(t("<td />").text(e.map)).append(t('<td class="text-right" />').text(o(e.lap))).append(t('<td class="text-right" />').text(o(e.drop))).append(t('<td class="text-right" />').text(o(e.drop/e.lap,3))).append(t('<td class="text-right" />').text(o(100*e.rate)+"%")).append(t('<td class="text-right" />').text(V(e.contains_initial_bonus?"込み":"除外"))).append(t("<td />").text((0,D.default)(e.updated_at).tz("Asia/Tokyo").format("LLLL"))).appendTo(a)}),t("#report_total").text(V("全{{total}}件",{total:e.total}))}).catch(function(){console.error("Failed to load recent report.")}).then(function(){t("#recent_report").css("opacity",1)})}function j(){ut=c(),$=u(ut),n($.language),pt=t("[name=current]:input");var e=(new Date).getTime(),a=t("#period_dates");if(Z.forEach(function(n){var i=n[1]-n[0],r=100*i/tt+"%",o=new Date(n[0]),s=new Date(n[1]-1),c=o.getMonth()+1+"/"+o.getDate()+"-"+(s.getMonth()+1)+"/"+s.getDate(),l=e>=n[0]&&e<n[1],u=e>=n[1],p=l?"progress-bar-active":u?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(c).addClass(p).appendTo(a)}),t('[data-objective-mode="'+it+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+it+'"]').remove(),pt.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),mt=t("[name=objective]:input"),"achievement"===it)Y.objectives.map(function(e){t("<option />").attr("value",e.value).text(e.title+" ("+e.value+"個)").appendTo(mt)}),mt.select2({formatSelection:_,formatResult:_});else{t("select[name=objective]").click(function(){this.select()});var g=t("#increse_objective_list");et.forEach(function(e){t('<button class="btn btn-default" name="add"  type="button" />').val(e.value).attr("title",e.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+e.unit)).appendTo(g)})}t("button[name=add]").click(function(e){e.preventDefault();var a=parseInt(t(this).val()),n=parseInt(mt.val());mt.val(n+a).trigger("change")}),t("button[name=reset]").click(function(t){t.preventDefault(),mt.val(0).trigger("change")}),t("[name=expectation]:input").change(function(){f(),h()}).val(st);var x=t("#prize_list");et.forEach(function(e){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(e.name).append(t('<span class="prize-value" />').text("@"+e.value))).append(t('<div class="prize-list-body" />').attr("data-prize",e.unit)).appendTo(x)});var j=at.reduce(function(t,e){return Math.max(t,e.drops.length)},0);$.maps.forEach(function(t,e){at[e].expectation=t.expectation}),lt=$.syncCurrentEnabled;var C=void 0,T=function(){C&&clearTimeout(C),setTimeout(function(){var e=t("#map");at.forEach(function(t,a){var n=e.find("tr[data-map="+a+"]"),i=Math.max(parseInt(n.find("input[name=num_laps]").val())||0,0),r=Math.max(parseInt(n.find("input[name=num_drops]").val())||0,0),s=n.find("input[name=actual_expectation]"),c=Math.max(parseFloat(s.val())||0,0);"aggregate"===ct&&(c=r/i||0,s.val(c));var l=Math.floor(c);n.find("button[name=increase]").val(l).text("+"+o(l)),$.maps[a].numLaps=i,$.maps[a].numDrops=r,t.expectation=$.maps[a].expectation=c}),p($),v(),f(),h()},100)},I=t("#map").on("keyup","input[name=num_laps], input[name=actual_expectation]",function(){T()}).on("keyup","input[name=num_drops]",function(){T(),s()}).on("change","input[name=actual_expectation]",function(){T()}).on("change","input[name=num_laps]",function(){T(),y()}).on("change","input[name=num_drops]",function(){T(),s(),y()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(e){e.preventDefault();var a=t(this).closest("tr"),n=a.find("input[name=num_laps]"),i=parseInt(n.val())+1;n.val(i);var r=a.find("input[name=num_drops]"),o=parseInt(r.val())+parseInt(this.value);r.val(o),r.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){ct=t(this).val(),$.expectationInputMode=ct,p($),I.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===ct).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===ct).end().end().find("input[name=sync]"),t("[data-report]").toggle("aggregate"===ct),T()}).on("click","input[name=sync]",function(){$.syncCurrentEnabled=lt=this.checked,p($),s()}),D=t("#map_list");if(at.forEach(function(e,a){var n=$.maps[a],i=t('<td class="barchart-container" />').attr("data-chart",a).append(t('<span class="barchart barchart-own"><span class="barchart-bar" /><span class="barchart-label" /><span class="marathon" />')).append(t('<span class="barchart barchart-theirs"><span class="barchart-bar" /><span class="barchart-label" /><span class="marathon" />')).append();t("<tr />").attr("data-map",a).append(t("<th />").text(e.name)).append(t("<td />").text(""+e.charisma+"/"+e.stamina)).append(function(){for(var a=e.drops.map(function(e){var a=e.icon?t("<i />").attr("title",e.name).addClass("icon icon-"+e.icon):t("<span />").text(e.name),n=e.set?t('<span class="badge" />').text("x"+e.set):null;return t("<td />").append(a).append(n)}),n=e.drops.length;n<j;n++)a.push(t("<td />"));return a}).append(function(){var e=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon"></span>').text(V("1周の期待値"))).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(n.expectation)),a=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon"></span>').text(V("周回"))).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(n.numLaps)).append(t('<span class="input-group-addon"></span>').text(V("ドロップ"))).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(n.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(a).append(e)}).append(i).prependTo(D)}),t("#map thead th.drops").attr("colspan",j),rt){var R=t("#rewards tbody");nt.forEach(function(e){var a=t('<span class="icon" />').addClass("icon-"+e.unit);t("<tr />").attr("data-amount",e.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+e.amount)).append(t("<td />").html(a)).appendTo(R);
})}var E=t("[name=estimate_map]:input").change(function(){v(),$.estimateMap=parseInt(t(this).val()),p($)});at.forEach(function(e,a){t("<option />").val(a).text(e.name+" ("+e.charisma+"/"+e.stamina+")").prependTo(E)});for(var S=t("[name=estimate_rank]:input").change(function(){v(),$.estimateRank=parseInt(t(this).val()),p($)}),P=1;P<=200;P++){var A=i(P),O=r(P),L=""+P+" ("+A+"/"+O+")";t("<option />").val(P).text(L).appendTo(S)}var F=t("[name=estimate_use_crystal]").change(function(){v(),$.estimateUseCrystal=t(this).val(),p($)}),B=t("[name=estimate_natural_recovery]:input").change(function(){v(),$.estimateNaturalRecovery=this.checked,p($)});t("*[title]").tooltip(),pt.val($.current),"exchange"===it?mt.val($.objective):mt.select2("val",$.objective),t("[name=current]:input, [name=objective]:input").change(function(){$[this.name]=t(this).val(),p($),m(),d(),h(),v()}),E.val($.estimateMap),S.val($.estimateRank),F.val($.estimateUseCrystal),B.prop("checked",$.estimateNaturalRecovery),"exchange"===it&&d(),rt&&m(),I.find("input[name=sync]").prop("checked",lt).end().find('input[name=expectation_input_mode][value="'+$.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(ot),t.removeCookie(ot+"_storage"),window.location.reload()});var G=b(),X=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");t("#estimate_tutorial").on("click","a",function(e){t("#map .expectation").each(function(){var e=t(this);G&&e.addClass("animated flash").one(X,function(){e.removeClass("animated flash")})})}).on("click","button",function(e){$.estimateTutorialHidden=!0,p($),t(e.delegateTarget).each(function(){var e=t(this);G?e.addClass("animated zoomOutRight").one(X,function(){e.hide()}):e.hide()})}).toggle(!$.estimateTutorialHidden).each(function(){var e=t(this),a=e.find(".anna");e.on("mouseenter",function(){a.addClass("animated bounce")}).on("mouseleave",function(){a.removeClass("animated bounce")})});var vt=t("[name=slot]").change(function(){ut.active=t(this).val(),l(ut),window.location.reload()});t.map(ut.slots,function(e,a){var n=a===ut.active;t("<option />").val(a).text(e+(n?" *":"")).attr("selected",n).appendTo(vt)});var gt=t("[name=lang]:input").change(function(){$.language=t(this).val(),p($),window.location.reload()});t.each(z.default,function(e){t("<option />").val(e).text(V(e)).appendTo(gt)}),gt.val($.language),t("[name=report]:input").prop("checked",$.report).change(function(){$.report=this.checked,p($),$.report&&y()}),t("#refresh_stat_button").click(function(t){t.preventDefault(),w()}),t('a[href="#map"]').click(function(e){e.preventDefault();var a=t("#map");t("html, body").stop().animate({scrollTop:a.offset().top-(t(window).height()-a.height())/2},400)}),t("#switch_aggregate_input_mode").click(function(e){e.preventDefault(),t("[name=expectation_input_mode]").closest(".btn").removeClass("active"),t('[name=expectation_input_mode][value="aggregate"]:input').prop("checked",!0).trigger("change").closest(".btn").addClass("active")}),t("#refresh_recent_report_button").click(function(t){t.preventDefault(),M()}),t("#delete_report_button").click(function(t){t.preventDefault(),k()}),dt=t("[name=drop_rate]").on("change",function(){$.dropRate=t(this).val(),p($),y()}),H.default.forEach(function(e){t("<option />").val(e.rate).text(V(e.name)).appendTo(dt)}),null!==$.dropRate&&dt.val($.dropRate),ft=t("[name=stat_drop_rate_filter]").on("change",function(){$.statDropRateFilter=t(this).val(),p($),w()}),t("<option />").val("").text(V("すべて")).appendTo(ft),H.default.forEach(function(e){t("<option />").val(e.rate).text(V(e.name)).appendTo(ft)}),null!==$.statDropRateFilter&&ft.val($.statDropRateFilter),t("[name=source]:input").on("change",function(){$.source=t(this).val(),p($),v()}).val($.source),ht=t("[name=contains_initial_bonus]:input").change(function(){$.contains_initial_bonus=t(this).prop("checked"),p($),y()}).prop("checked",$.contains_initial_bonus),W=new q.default(J.default.api,$.credentials),K=new N.default(J.default.api),Q=new U.default(J.default.api),w(),M(),v(),$.version}a(15);var C=a(16),T=e(C),I=a(34),D=e(I),R=a(384),E=e(R),S=a(358),z=e(S),P=a(17),A=e(P),O=a(356),q=e(O),L=a(357),N=e(L),F=a(355),U=e(F),B=a(23),J=e(B),G=a(385),H=e(G),W=void 0,K=void 0,Q=void 0,X=void 0,$=void 0,V=void 0;D.default.locale("ja");var Y=E.default[0],Z=Y.periods.map(function(t){return t.map(Date.parse)}),tt=Z.reduce(function(t,e){return t+e[1]-e[0]},0);Y.maxObjective=null===Y.maxObjective?1/0:Y.maxObjective;var et=Y.prizes,at=Y.maps,nt=Y.rewards,it="achievement",rt=!0,ot="red-lycoris-timer",st="drop",ct="aggregate",lt=!0,ut=void 0,pt=void 0,mt=void 0,dt=void 0,ft=void 0,ht=void 0,vt={current:20,objective:1400,estimateMap:4,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:ct,syncCurrentEnabled:lt,maps:at.map(function(t){return{numLaps:t.unused?0:1,numDrops:t.unused?0:t.max_drop,expectation:t.unused?0:t.expectation}}),estimateTutorialHidden:!1,version:2,language:window.navigator.language||window.navigator.userLanguage,report:!1,credentials:null,dropRate:1,statDropRateFilter:null,source:"local",contains_initial_bonus:!0},gt={active:"",slots:{"":1,_2:2,_3:3}},bt=null;t(function(){j(),setInterval(g,1e3)})}).call(e,a(2))},8:function(t,e,a){(function(t){function a(t,e){for(var a=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),a++):a&&(t.splice(n,1),a--)}if(e)for(;a--;a)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var a=[],n=0;n<t.length;n++)e(t[n],n,t)&&a.push(t[n]);return a}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return i.exec(t).slice(1)};e.resolve=function(){for(var e="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var o=r>=0?arguments[r]:t.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,i="/"===o.charAt(0))}return e=a(n(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),r="/"===o(t,-1);return t=a(n(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&r&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,a){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var a=t.length-1;a>=0&&""===t[a];a--);return e>a?[]:t.slice(e,a-e+1)}t=e.resolve(t).substr(1),a=e.resolve(a).substr(1);for(var i=n(t.split("/")),r=n(a.split("/")),o=Math.min(i.length,r.length),s=o,c=0;c<o;c++)if(i[c]!==r[c]){s=c;break}for(var l=[],c=s;c<i.length;c++)l.push("..");return l=l.concat(r.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),a=e[0],n=e[1];return a||n?(n&&(n=n.substr(0,n.length-1)),a+n):"."},e.basename=function(t,e){var a=r(t)[2];return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},e.extname=function(t){return r(t)[3]};var o="b"==="ab".substr(-1)?function(t,e,a){return t.substr(e,a)}:function(t,e,a){return e<0&&(e=t.length+e),t.substr(e,a)}}).call(e,a(3))}},[726]);