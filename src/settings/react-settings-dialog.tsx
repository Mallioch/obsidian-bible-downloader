import React, { useState } from 'react';
import BibleChapterDownloaderPlugin from '../../main';
import InputSetting from '../components/input-setting';
import SelectSetting from '../components/select-setting';
import SelectOption from '../components/select-option';

interface ReactSettingsDialogProps {
    plugin: BibleChapterDownloaderPlugin
}

export default function ReactSettingsDialog(props: ReactSettingsDialogProps) {

    const { plugin } = props;

    const [fileLocation, setFileLocation] = useState(plugin.settings.fileLocation);
    const [defaultTranslation, setDefaultTranslation] = useState(plugin.settings.defaultTranslation);

    const onFileLocationChange = (newValue: string) => {
        setFileLocation(newValue);
        plugin.settings.fileLocation = newValue;
        plugin.saveSettings();
    };

    const onDefaultTranslationChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = evt.target.value;
        setDefaultTranslation(newValue);
        plugin.settings.defaultTranslation = newValue;
        plugin.saveSettings();
    }

    const options: SelectOption[] = [
        { value: "NET", text: "NET" },
        { value: "ESV", text: "ESV" },
    ];

    return (
        <>
            <h2>Settings for the Bible Downloader</h2>

            <InputSetting
                value={fileLocation}
                handleChange={onFileLocationChange}
                settingName="File Location"
                settingDescription="In what folder do you store your Bible files?"
            />
            
            <SelectSetting
                handleChange={onDefaultTranslationChange}
                options={options}
                selectedValue={defaultTranslation}
                settingName="Default Translation"
                settingDescription="Choose what will be your primary Bible translation."
            />
        </>
    );
}
