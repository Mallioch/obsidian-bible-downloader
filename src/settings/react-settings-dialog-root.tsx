import React, { StrictMode } from 'react';
import { App, PluginSettingTab } from 'obsidian';
import { Root, createRoot } from 'react-dom/client';
import BibleChapterDownloaderPlugin from '../../main';
import ReactSettingsDialog from './react-settings-dialog';

export default class ReactSettingsDialogRoot extends PluginSettingTab {
	root: Root | null = null;

	plugin: BibleChapterDownloaderPlugin;

	constructor(app: App, plugin: BibleChapterDownloaderPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
        this.root = createRoot(this.containerEl);
		this.root.render(
			<StrictMode>
				<ReactSettingsDialog plugin={this.plugin} />
			</StrictMode>,
		);
    }
}