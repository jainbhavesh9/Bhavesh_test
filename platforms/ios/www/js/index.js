/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        navigator.splashscreen.show();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

//to varify if touchid is configured by user
window.plugins.touchid.isAvailable(
    
    function(type) {alert(type)}, // type returned to success callback: 'face' on iPhone X, 'touch' on other devices
    function(msg) {alert('not available, message: ' + msg)} // error handler: no TouchID available
  );

  //to varify fingerprint/facesacn
  window.plugins.touchid.verifyFingerprint(
    'Scan your fingerprint please', // this will be shown in the native scanner popup
     function(msg) {alert('ok: ' + msg)}, // success handler: fingerprint accepted
     function(msg) {alert('not ok: ' + JSON.stringify(msg))} // error handler with errorcode and localised reason
  );











