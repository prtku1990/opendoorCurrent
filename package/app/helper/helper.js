function _31f6d612665783e5eec36b435525377300235571(){};var LRM_TAG="&lrm;";var ENABLE_SPINNER_DELAY;var SPINNER_DELAY=500;var userName="";var userEmail="";var userGender="";var isloggedIn="";var user_Id="1";var serviceIdSelected="";var orderStartTime="";var userProfile="";function handleAuthResult(a){this.userDetails(a);TheOpenDoor.app.getController("TheOpenDoor.controller.LoginController").handleSignInDataSend(a)}function userDetails(b){userName=b.displayName;userEmail=b.email;var a=b.imageUrl;userGender=b.gender}function showSpinner(b){function a(d){var c;if(d==="undefined"||d===null){c="Loading"}else{c=d}Ext.Viewport.setMasked({xtype:"loadmask",message:c,indicator:true,zIndex:2000})}if(ENABLE_SPINNER_DELAY==="undefined"){ENABLE_SPINNER_DELAY=Ext.os.is.Android}if(ENABLE_SPINNER_DELAY){Ext.defer(function(){a(b)},SPINNER_DELAY)}else{a(b)}}function isOnLine(){if(Ext.device.Connection!==undefined){return Ext.device.Connection.isOnline()}else{return navigator.onLine}}function hideSpinner(){if(ENABLE_SPINNER_DELAY){Ext.defer(function(){Ext.Viewport.setMasked(false)},SPINNER_DELAY)}else{Ext.Viewport.setMasked(false)}}function showErrorDialog(d,a,c){var b="";if(typeof a==="undefined"){a=false}if(typeof c=="undefined"){c=false}if(typeof d!=="undefined"&&d!==""){b=d}else{b=localeString.errorGenericMessage}Ext.Msg.show({title:"",message:b,buttons:Ext.MessageBox.OK,cls:"confirmation_box",})}function onNativeBackKeyDown(a){Ext.Msg.show({title:"Exit",message:localeString.appExitErrorMessage,buttons:[{text:"NO",ui:"null"},{html:"<b>YES</b>",ui:"null",text:"YES"}],fn:function(b){b=b.toLowerCase();if(b==="no"){}else{navigator.app.exitApp()}}});a.preventDefault();a.stopPropagation();return false}function convertDateToTimestamp(b){if(!b){return null}var e=b.split("-");var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var d=a[e[1]-1];var c=e[2]+" "+d+", "+e[0];return c}function convertTimeToTimestamp(a){if(!a){return""}a=a.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[a];if(a.length>1){a=a.slice(1);a[5]=+a[0]<12?"am":"pm";a[0]=+a[0]%12||12}return a.join("")}function getLangParamFromURL(){var c="lang",e=window.location.search.substr(1),f=e.split("&"),a,d=false;for(a=0;a<f.length;a++){var b=f[a].split("=");if(b[0]&&b[0]===c){d=b[1]}}return d}function splitDateAndTimeRetTime(c){var b=c;var a=convertTimeToTimestamp(b.slice(11,19));return conTime}function splitDateAndTimeRetDate(c){var b=c;var a=convertDateToTimestamp(b.slice(0,9));return a}function genericErrorCheck(b){var c=false,a=localeString.unable_process_error;if(b.status!=null&&b.status==401){a=localeString.session_timeout_error;c=true}if(c){showErrorDialog(null,true,true)}return c};