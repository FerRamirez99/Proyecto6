import { useState } from "react"
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
    const { t } = useTranslation()

    const [formData, setFormData] = useState({
        // Your form fields here
        email: '',
        subject: '',
        message: '',
    });
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);
    const alertBG = alertType ? "border-[#59A310]" : "border-[#CC2F2C]"
    const alertText = alertType ? "text-[#59A310]" : "text-[#CC2F2C]"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                // Form submission successful, handle it accordingly
                console.log('Form submitted successfully.');
                setAlertMessage(`${t('form_alert_success')}`);
                setAlertType(true);
                // Clear form inputs after successful submission
                setFormData({
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                // Form submission failed, handle it accordingly
                console.error(data.error);
                setAlertMessage(`Error: ${data.error}.`);
                setAlertType(false);
            }
            // Clear the alert after 3 seconds (adjust the duration as needed)
            setTimeout(() => {
                setAlertMessage(null);
                setAlertType(null);
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setAlertMessage(`${t('form_alert_fail')}`);
            setAlertType(false);

            // Clear the alert after 3 seconds (adjust the duration as needed)
            setTimeout(() => {
                setAlertMessage(null);
                setAlertType(null);
            }, 3000);
        }
    };
    return (
        <div className="flex justify-center items-center border-white">
            <form className="sm:w-3/6 border-white" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        {t('contact_form_email_label')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        required
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={t('contact_form_email_ph')}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                        {t('contact_form_subject_label')}
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={t('contact_form_subject_ph')}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">{t('contact_form_msg_label')}</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={t('contact_form_msg_ph')}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary hover:bg-secondary text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    {t('contact_form_button')}
                </button>
                <br />
                {alertMessage && <div className={`alert bg-transparent border-2 ${alertBG} ${alertText} p-2 mt-4 rounded-lg text-center`}>{alertMessage}</div>}
            </form>
        </div>
    )
}

export default ContactForm