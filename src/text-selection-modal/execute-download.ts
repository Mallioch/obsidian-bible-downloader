import { App, Notice } from 'obsidian';
import { DataFetcher } from '../data-fetcher';
import { BibleChapterDownloaderSettings } from '../settings/bible-chapter-downloader-settings';

export interface TextSelectionResult {
    bookId: number
    bookAbbreviation: string
    chapterNumber: number
	translation: string
}

function createHeader(translation: string) {
    const now = new Date();
    return `---
bible-version: ${translation}
date-downloaded: ${now.toISOString()}
---
`;
}

async function executeDownload (a: TextSelectionResult, settings: BibleChapterDownloaderSettings, app: App) {
    const fileContents = createHeader(a.translation) + await DataFetcher.getBook(a.translation, a.bookId, a.chapterNumber)

    const folderPath = `${settings.fileLocation}/${a.translation}/${a.bookAbbreviation}`;	
    const folderExists = await app.vault.adapter.exists(folderPath);

    if (!folderExists) {
        await app.vault.createFolder(folderPath)
        new Notice(`Created folder '${folderPath}'.`);
    }

    let filePath = `${folderPath}/${a.bookAbbreviation} ${a.chapterNumber}.md`;
    if (a.translation !== settings.defaultTranslation && '' !== settings.defaultTranslation) {
        filePath = `${folderPath}/${a.translation} ${a.bookAbbreviation} ${a.chapterNumber}.md`;
    }
    const fileExists = await app.vault.adapter.exists(filePath);

    if (fileExists) {
        new Notice(`File '${folderPath}' has already been downloaded.`);
    }
    else {
        const fileCreateResult = await app.vault.create(filePath, fileContents);
        new Notice(`Created file '${filePath}'.`);
    }
}

export default executeDownload;