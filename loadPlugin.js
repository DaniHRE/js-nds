import Lang from './plugins/filepond/languages/index.js'

class Plugin {
    loadPlugin() {
        const lang = new Lang();
        lang.pt()
        FilePond.parse(document.body);
    }
}

const plugin = new Plugin();
plugin.loadPlugin();