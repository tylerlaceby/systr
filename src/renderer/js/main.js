const { ipcRenderer } = require('electron');
let ThemeSettings, PerformanceSettings;
/**
 * This is a string that contains the name of the current page in view of the renderer.Default is "cpu", however this can change due to settings as well.
 * @global
 */
let current_page = "cpu";
