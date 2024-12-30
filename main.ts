import { Plugin } from 'obsidian';
import ReactTextSelectionModalRoot from './src/text-selection-modal/react-text-selection-modal';
import { BibleChapterDownloaderSettings, DEFAULT_SETTINGS } from 'src/settings/bible-chapter-downloader-settings';
import ReactSettingsDialog from './src/settings/react-settings-dialog-root';


export default class BibleDownloaderPlugin extends Plugin {
	settings: BibleChapterDownloaderSettings;

	async onload() {
		console.log('Bible downloader plugin loaded.');
		await this.loadSettings();

		const invokeDownloadDialog = () => {
			new ReactTextSelectionModalRoot(this.app, this.settings).open();
		}

		// This creates the icon in the left ribbon.
		this.addRibbonIcon('book-down', 'Bible Downloader', (evt: MouseEvent) => {
			invokeDownloadDialog();
		});

		// This adds a command to invoke the download modal.
		this.addCommand({
			id: 'download-bible-chapter',
			name: 'Download Bible',
			callback: () => {
				invokeDownloadDialog();
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ReactSettingsDialog(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
