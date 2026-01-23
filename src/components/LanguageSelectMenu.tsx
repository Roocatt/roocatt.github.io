import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import i18n from "../util/i18n";
import { useTranslation } from "react-i18next";

interface LanguageSelectMenuProps {
    xs?: {}
}

export default function LanguageSelectMenu({xs}: LanguageSelectMenuProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);

    const {t} = useTranslation();
    const languageList = Object.keys(i18n.options.resources ?? {})

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = async (
        _event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        await i18n.changeLanguage(languageList[index]);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        <Button key={'language-button'} sx={{color: '#fff', ...xs}}
                onClick={handleClickListItem}>{t('lanuages.' + languageList[selectedIndex])}</Button>
        <Menu id="language-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{
            list: {
                'aria-labelledby': 'lock-button',
                role: 'listbox',
            },
        }}>
            {languageList.map((language, index) => (
                <MenuItem
                    key={language}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}>
                    {t('lanuages.' + language)}
                </MenuItem>
            ))}
        </Menu>
    </>)
}