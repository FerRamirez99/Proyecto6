"use client"
import ContactForm from "./ContactForm"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const EmailSection = () => {
    const { t } = useTranslation()

    return (
        <section className='my-2 md:my-12 py-8' id="contact">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className='text-4xl font-bold text-white my-2 text-center'>{t('nav_contact')}</h2>
                <p className='text-center text-xl last:text-[#ADB7BE] my-4'>
                    {" "}
                    {t('contact_sub')}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ContactForm />
            </motion.div>
        </section>
    )
}

export default EmailSection