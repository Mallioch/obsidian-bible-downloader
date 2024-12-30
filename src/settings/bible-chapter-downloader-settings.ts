export interface BibleChapterDownloaderSettings {
	fileLocation: string;
	defaultTranslation: string;
}

export const DEFAULT_SETTINGS: BibleChapterDownloaderSettings = {
	fileLocation: 'Texts/Bible',
	defaultTranslation: ''
}