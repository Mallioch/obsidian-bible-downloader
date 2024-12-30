import React, { useState } from 'react';
import SelectSetting from 'src/components/select-setting';
import SelectOption from 'src/components/select-option';
import { App } from 'obsidian';
import { BibleChapterDownloaderSettings } from 'src/settings/bible-chapter-downloader-settings';
import { AVAILABLE_TRANSLATIONS } from '../available-translations';
import GetBookData from '../book-data';
import executeDownload from './execute-download';

interface ReactTextSelectionUIProps {
    settings: BibleChapterDownloaderSettings,
    app: App
}

const defaultBookId = '-';
const defaultChapterNumber = '1';

export default function TextSelectionUI(props: ReactTextSelectionUIProps) {

    const { settings, app } = props;

    const [translation, setTranslation] = useState(settings.defaultTranslation);
    const [bookId, setBookId] = useState(defaultBookId);
    const [chapterNumber, setChapterNumber] = useState(defaultChapterNumber);

    const translationOptions: SelectOption[] = AVAILABLE_TRANSLATIONS.map(x => { return { text: x, value: x }});
    let bookOptions: SelectOption[] = GetBookData().map(x => { return { text: x.name, value: x.id } });
    bookOptions.unshift({ text: '--Choose an option--', value: '-' });

    const onTranslationChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = evt.target.value;
        setTranslation(newValue);
        setBookId(defaultBookId);
        setChapterNumber(defaultChapterNumber);
    }

    const onBookChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = evt.target.value;
        setBookId(newValue);
        setChapterNumber(defaultChapterNumber);
    }

    const onChapterChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = evt.target.value;
        setChapterNumber(newValue);
    }

    let chapterSelect = null;
    let downloadButton = null;
    if (bookId !== '-') {

        const book = GetBookData().find(x => x.id === bookId);
        const chapterOptions: SelectOption[] = [];
        for (let i = 1; i <= book!.lastChapter; i++) {
            chapterOptions.push({ value: i.toString(), text: i.toString() });
        }

        chapterSelect = (<SelectSetting 
                settingName="Chapter"
                settingDescription=""
                selectedValue={chapterNumber}
                options={chapterOptions}
                handleChange={onChapterChange}
            />);

        downloadButton = (
            <button
                onClick={() => {
                    const currBook = GetBookData().find(x => x.id === bookId);
                    executeDownload(
                        {
                            bookId: Number.parseInt(bookId),
                            bookAbbreviation: currBook!.abbreviation,
                            chapterNumber: Number.parseInt(chapterNumber),
                            translation: translation
                        },
                        settings,
                        app
                    );
                }}
            >
                Download
            </button>
        );

    }

    return (
        <div>
            <h2>Download a Bible chapter</h2>

            <SelectSetting 
                settingName="Translation"
                settingDescription="Choose what translation you want to download."
                selectedValue={translation}
                options={translationOptions}
                handleChange={onTranslationChange}
            />

            <SelectSetting 
                settingName="Book"
                settingDescription="Choose which book of the Bible you want to download from."
                selectedValue={bookId}
                options={bookOptions}
                handleChange={onBookChange}
            />

            {chapterSelect}

            {downloadButton}
            
        </div>
    );
}