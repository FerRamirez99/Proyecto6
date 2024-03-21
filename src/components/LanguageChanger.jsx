"use client"

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '../../i18nConfig'

const LanguageChanger = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange = (e) => {
        const newLocale = e.target.value

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    }
    return (
        <>
            <select 
                onChange={handleChange} 
                value={currentLocale}
                id='language'
                className="text-sm rounded-md p-2 bg-[#181818] border-1 border-[#ADB7BE] placeholder-gray-400 text-[#ADB7BE] hover:text-white hover:border-white "
            >
                <option value="es">{t('lang_option_1')}</option> 
                <option value="en">{t('lang_option_2')}</option>
            </select>
        </>

    )
}

export default LanguageChanger