import React, { StrictMode } from 'react';
import { App, Modal } from 'obsidian';
import { Root, createRoot } from 'react-dom/client';
import { BibleChapterDownloaderSettings } from '../settings/bible-chapter-downloader-settings';
import TextSelectionUI from './text-selection-ui';

export default class ReactTextSelectionModal extends Modal {
	root: Root | null = null;
    private settings: BibleChapterDownloaderSettings;

	constructor(app: App, settings: BibleChapterDownloaderSettings) {
        super(app);

        this.settings = settings;
    }

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<TextSelectionUI
					settings={this.settings}
					app={this.app}
				/>
			</StrictMode>,
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
