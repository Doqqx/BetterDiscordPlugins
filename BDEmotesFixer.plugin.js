//META{"name":"BDEmotesFixer","website":"https://github.com/planetarian/BetterDiscordPlugins","source":"https://github.com/planetarian/BetterDiscordPlugins/blob/master/BDEmotesFixer.plugin.js"}*//

/*@cc_on
@if (@_jscript)
	
	// Offer to self-install for clueless users that try to run this directly.
	var shell = WScript.CreateObject("WScript.Shell");
	var fs = new ActiveXObject("Scripting.FileSystemObject");
	var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
	var pathSelf = WScript.ScriptFullName;
	// Put the user at ease by addressing them in the first person
	shell.Popup("It looks like you tried to run me directly. This is not desired behavior! It will work now, but likely will not work with other plugins. Even worse, with other untrusted plugins it may lead computer virus infection!", 0, "I'm a plugin for BetterDiscord", 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup("I'm in the correct folder already.\nJust reload Discord with Ctrl+R.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
		// Show the user where to put plugins in the future
		shell.Exec("explorer " + pathPlugins);
		shell.Popup("I'm installed!\nJust reload Discord with Ctrl+R.", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();

@else @*/

class BDEmotesFixer {
    getName() { return "BDEmotesFixer"; }
    getDescription() { return "Fixes BD so that FFZ emotes once again have priority over BTTV emotes. Get your Klappa on."; }
    getVersion() { return "0.0.1"; }
    getAuthor() { return "Chami"; }
    getSettingsPanel() { return "<h3>BDEmotesFixer Settings</h3>"; }

    constructor() {
    }
    
    load(){}
    start(){}
    stop(){}
    unload(){}

    // check on switch, in case BD updates emotes file while client is runningj
    onSwitch() {
        let ffz = window.bdEmotes.FrankerFaceZ;
        if (ffz && ffz.Klappa && ffz.Klappa.startsWith('https://cdn.frankerfacez.com/')) {
            window.bdEmotes.FrankerFaceZ = window.bdEmotes.BTTV2;
            window.bdEmotes.BTTV2 = ffz;
        }
    }

}

/*@end @*/