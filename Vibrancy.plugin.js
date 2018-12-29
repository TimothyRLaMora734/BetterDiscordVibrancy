//META { "name": "Vibrancy", "website": "none" } *//
global.Vibrancy = function () {
    var electronVibrancy, remote, window
    
        class Vibrancy {
            getName() {
                return "VibrancyPlugin!";
            }
    
            getDescription()  {
                return "Enable it, to enable vibrancy in discord app";
            }
    
            getAuthor() {
                return "neoney#7957 (316226442721755137)";
            }
    
            getVersion() {
                return "1.0.0";
            }
    
            load(){}
    
            async start() {
                remote = require('electron').remote
                window = remote.getCurrentWindow()
                electronVibrancy = require('./VibrancyFiles/electron-vibrancy')
                electronVibrancy.SetVibrancy(window, 2)
            }
    
            stop() {
                remote = require('electron').remote
                window = remote.getCurrentWindow()
                electronVibrancy = require('./VibrancyFiles/electron-vibrancy')
                electronVibrancy.DisableVibrancy(window)
            }
    
        }
    
        return Vibrancy;
    }.call(this)