(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{"9D32":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=l(n("7DT3")),r=l(n("ERkP")),o=l(n("OkZJ"));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[o.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},LzTg:function(e,t,n){"use strict";n.r(t);n("cI1W");var a=n("PJYZ"),r=n.n(a),o=n("VbXa"),l=n.n(o),c=n("lSNA"),s=n.n(c),i=n("ERkP"),u=n("dcwb"),d=n("wrlS"),m=n("3XMw"),p=n.n(m),g=n("9D32"),f=n.n(g),h=n("o570"),w=n.n(h),E=n("UZ11"),v=n.n(E),b=n("6m7o"),y=n.n(b),C=n("k/Am"),_=n.n(C),x=n("3c1N"),I=n.n(x),S=n("1eTX"),k=n("7CKV"),L=n.n(k),A=n("Irs7"),M=n("/yvb"),T=n("zfvc"),z=n("t62R"),O=n("rHpw"),P=p.a.c6432564,B=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,s()(r()(t),"_handlePress",(function(e){t.props.analytics.scribe({component:"new_tweet_button",action:"click"})})),t}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.composeOptions,n=e.withLabel,a=e.withIcon,r=e.testID;return i.createElement(M.a,{accessibilityLabel:P,icon:a?i.createElement(L.a,null):void 0,link:{pathname:"/compose/tweet",state:t},onPress:this._handlePress,size:"normalLarge",style:H.button,testID:r,type:"primary"},n?i.createElement(T.b,{animateMount:!0,duration:"long",show:!0,type:"fade"},i.createElement(z.b,null,P)):null)},t}(i.Component),H=O.a.create((function(e){return{button:{boxShadow:"0px 8px 28px rgba(0, 0, 0, 0.08)"}}})),N=Object(A.a)(B),R=n("N5qz"),j=(n("yIC7"),n("rxPX")),D=n("0KEI"),U=n("auX9"),V=n("G6rE"),F=Object(j.a)().propsFromState({loggedInUser:V.e.selectLoggedInUser,selectTwoMostRecentUsers:U.j,hasMultiAccountBadges:U.g}).propsFromActions({switchAccount:U.k}).adjustStateProps((function(e){var t=e.loggedInUser,n=e.selectTwoMostRecentUsers,a=e.hasMultiAccountBadges;return{createLocalApiErrorHandler:Object(D.b)("SIDENAV_FOOTER_ACCOUNT_SWITCH"),hasMultiAccountBadges:!!t&&a,loggedInUser:t,multiAccountUsers:n,switchAccount:U.k}})),J=n("SKmd"),X=n.n(J),Z=n("3xO4"),K=n.n(Z),W=n("cm6r"),G=n("XP29"),Y=n("Znyr"),q=n("jV+4"),Q=p.a.h54dfaeb,$=p.a.d133d3e5,ee=O.a.create((function(e){return{avatarContainer:{alignItems:"center"},centerComponent:{justifyContent:"center"},footerContainer:{display:"flex",flexDirection:"row",padding:e.spaces.xSmall,borderRadius:e.borderRadii.infinite,width:"fit-content"},chevronDown:{color:e.colors.text},nameContainer:{flexGrow:1,marginLeft:e.spaces.xSmall,marginRight:e.spaces.large},pip:{position:"absolute",right:"calc(-1 * "+e.spaces.xxSmall+")",marginTop:e.spaces.xxSmall}}})),te=F((function(e){e.createLocalApiErrorHandler;var t=e.isExpanded,n=e.hasMultiAccountBadges,a=e.loggedInUser;e.multiAccountUsers,e.switchAccount;if(!a)return null;var r=a.name,o=a.screen_name,l=a.profile_image_url_https;return i.createElement(W.a,{style:[ee.footerContainer,!t&&ee.centerComponent]},i.createElement(K.a,{style:ee.avatarContainer},i.createElement(G.a,{screenName:o,size:"xLarge",uri:l}),!t&&n?i.createElement(Y.a,{pip:!0,truncatedCountFormatter:$,unreadCountLabel:Q}):null),t?i.createElement(i.Fragment,null,i.createElement(q.a,{name:r,screenName:o,style:ee.nameContainer,withStackedLayout:!0}),i.createElement(K.a,{style:ee.centerComponent},i.createElement(X.a,{style:ee.chevronDown}),t&&n?i.createElement(Y.a,{pip:!0,style:ee.pip,truncatedCountFormatter:$,unreadCountLabel:Q}):null)):null)})),ne="SideNav_NewTweet_Button",ae=n("cHvH");n.d(t,"default",(function(){return oe}));var re=p.a.f92bc7c1,oe=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,s()(r()(t),"_newMultiAccountEnabled",d.a.isTrue("responsive_web_new_multi_account_ux_enabled")),t}l()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props,n=t.isCollapsedSmall,a=t.isLoggedIn,r=t.widthStyle,o=[le.root,r,n?le.rootPaddingSmall:le.rootPaddingNormal];return i.createElement(ae.a,null,(function(t){var n=t.windowHeight;return i.createElement(K.a,{style:o},a?e._renderLoggedIn(n):e._renderLoggedOut())}))},n._renderLoggedIn=function(e){var t=this.props,n=t.composeOptions,a=t.isExpanded,r=t.isTwoColumn,o=t.location,l=t.onTabRefresh;return i.createElement(i.Fragment,null,i.createElement(K.a,{style:[le.topSection,!a&&le.alignItemsCenter]},i.createElement(K.a,{style:le.topControl},i.createElement(S.a,{onClick:l,pullLeft:!1,size:"large"})),i.createElement(K.a,{style:[le.appTabBar,!a&&le.alignItemsCenter]},i.createElement(u.a,{bookmarksActiveIcon:f.a,bookmarksIcon:w.a,layout:"vertical",listsActiveIcon:v.a,listsIcon:y.a,location:o,moreMenuItemsIcon:_.a,onTabRefresh:l,wideMode:r,withExtendedItems:!0,withLabel:a})),i.createElement(K.a,{style:[le.tweetButton,!a&&le.alignItemsCenter,R.a.isTallHeight(e)&&le.withTallHeight]},i.createElement(N,{composeOptions:n,testID:ne,withIcon:!a,withLabel:a}))),this._newMultiAccountEnabled?i.createElement(K.a,{style:[le.footerContainer,!a&&le.alignItemsCenter]},i.createElement(te,{isExpanded:a})):null)},n._renderLoggedOut=function(){var e=this.props,t=e.isExpanded,n=e.onTabRefresh;return i.createElement(K.a,{style:[le.loggedOut,!t&&le.alignItemsCenter]},i.createElement(K.a,{style:le.topControl},i.createElement(S.a,{onClick:n,pullLeft:!1,size:"large"})),i.createElement(M.a,{accessibilityLabel:re,icon:i.createElement(I.a,null),link:"/settings",style:le.settingsButton,type:"neutral"}))},t}(i.Component),le=O.a.create((function(e){return{root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.medium},rootPaddingSmall:{paddingHorizontal:e.spaces.xSmall},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.micro,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.xxSmall,marginTop:e.spaces.micro,width:"100%"},tweetButton:{marginVertical:e.spaces.xxSmall,width:"90%"},withTallHeight:{marginVertical:e.spaces.small},alignItemsCenter:{alignItems:"center"},loggedOut:{alignItems:"flex-end",height:"100%",justifyContent:"space-between"},settingsButton:{marginBottom:e.spaces.medium,marginHorizontal:e.spaces.xxSmall},footerContainer:{marginBottom:e.spaces.medium}}}))},"k/Am":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=l(n("7DT3")),r=l(n("ERkP")),o=l(n("OkZJ"));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[o.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"}),r.default.createElement("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"})))};c.metadata={height:24,width:24};var s=c;t.default=s},o570:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=l(n("7DT3")),r=l(n("ERkP")),o=l(n("OkZJ"));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[o.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"})))};c.metadata={height:24,width:24};var s=c;t.default=s}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.SideNav.7b868154.js.map