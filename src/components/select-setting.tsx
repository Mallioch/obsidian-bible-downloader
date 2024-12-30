import SelectOption from "./select-option";

interface SelectSettingProps {
    settingName: string;
    settingDescription: string;
    selectedValue: string;
    options: SelectOption[]
    handleChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectSetting(props: SelectSettingProps) {

    const { settingName, settingDescription, options, selectedValue, handleChange } = props;

    return (
        <div className="setting-item">
            <div className="setting-item-info">
                <div className="setting-item-name">{settingName}</div>
                <div className="setting-item-description">{settingDescription}</div>
            </div>
            <div className="setting-item-control">
                <select className="dropdown" value={selectedValue} onChange={handleChange}>
                    {options.map(x => <option value={x.value}>{x.text}</option>)}
                </select>
            </div>
        </div>
    );
}