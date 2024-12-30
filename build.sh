# This is how I build and test locally. I included this just in case anyone wanted to learn how to do this.

npm run build

touch ../PluginTesting/.obsidian/plugins/obsidian-bible-downloader/.hotreload

cp main.js ../PluginTesting/.obsidian/plugins/obsidian-bible-downloader/main.js
cp manifest.json ../PluginTesting/.obsidian/plugins/obsidian-bible-downloader/manifest.json
cp styles.css ../PluginTesting/.obsidian/plugins/obsidian-bible-downloader/styles.css