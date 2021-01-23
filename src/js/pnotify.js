// import '@pnotify/core/dist/BrightTheme.css';
  // import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import {
  error,
  success,
  info,
  notice,
  defaults,
  defaultModules,
  Stack,
} from '@pnotify/core/dist/PNotify.js';


import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.icons = 'material';
//   defaultModules.set(PNotifyMobile, {});

//  const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info'
// });
 
// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice."
// });
 
// const myInfo = info({
//   text: "I'm an info message."
// });
 
// const mySuccess = success({
//   text: "I'm a success message."
// });
 
// const myError = error({
//   text: "I'm an error message."
// });

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 60,
  firstpos2: 70,
  maxStrategy: 8,
  // positioned: false,
});
defaults.mode = 'light';
defaults.delay = 3000;
defaults.stack = myStack;

export { error, success, info };