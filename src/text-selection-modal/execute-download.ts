import { App, Notice } from 'obsidian';
import DataFetcher, { DataFetchResult, Verse } from '../data-fetcher';
import { BibleChapterDownloaderSettings } from '../settings/bible-chapter-downloader-settings';

export interface TextSelectionResult {
    bookId: number
    bookAbbreviation: string
    chapterNumber: number
	translation: string
}

function createHeader(translation: string, source: string) {
    const now = new Date();
    return `---
bible-version: ${translation}
date-downloaded: ${now.toISOString()}
source: ${source}
---
`;
}

function formatContentsToMarkdown(translation: string, apiResult: DataFetchResult) {
    const header = createHeader(translation, apiResult.source);

    let contents = '';
    apiResult.content.forEach((v: Verse) => {
        contents += '###### ' + v.verseIdentifier + '\n';
        contents += v.text.trim() + '\n';
    });

    return header + contents;
}

async function executeDownload (a: TextSelectionResult, settings: BibleChapterDownloaderSettings, app: App) {
    const apiResult = await DataFetcher.getBook(a.translation, a.bookId, a.chapterNumber)
    const fileContents = formatContentsToMarkdown(a.translation, apiResult);

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