cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-touch-id.TouchID",
      "file": "plugins/cordova-plugin-touch-id/www/TouchID.js",
      "pluginId": "cordova-plugin-touch-id",
      "clobbers": [
        "window.plugins.touchid"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-touch-id": "3.3.1",
    "cordova-plugin-whitelist": "1.3.3"
  };
});