interface InputSettingProps {
    settingName: string;
    settingDescription: string;
    value: string;
    handleChange: (newValue: string) => void;
}


export default function InputSetting(props: InputSettingProps) {

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.handleChange(evt.target.value);
    }

    return (
        <div className="setting-item">
            <div className="setting-item-info">
                <div className="setting-item-name">{props.settingName}</div>
                <div className="setting-item-description">{props.settingDescription}</div>
            </div>
            <div className="setting-item-control">
                <input type="text" spellCheck={false} placeholder="Folder name" value={props.value} onChange={onInputChange} />
            </div>
        </div>
    );
}