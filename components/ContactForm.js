import classNames from "classnames";
import { useRef, useState } from "react";
import Spinner from "./Spinner";

const fetchData = json => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(json)
});

export default function ContactForm({ formName = 'contact' }) {
    const [isFormValid, setFormValidity] = useState(0);
    const [isSending, setSending] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const formRef = useRef(null);

    const checkFormValidity = e => {
        if (formRef.current.checkValidity()) {
            setFormValidity(true);
        } else {
            setFormValidity(false);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        setSending(true);
        const object = {};
        const fd = new FormData(formRef.current);
        fd.forEach((value, key) => object[key] = value);
        const res = await fetch('/api/send-email', fetchData(object));
        const data = await res.json();

        if (data.type == 'success') {
            setSuccess(true);
            formRef.current.reset();
        } else {
            alert('Error occured when submiting a form. Please try submiting form again.');
            setSuccess(false);
        }

        setSending(false);
    }

    const formClasses = classNames({
        "text-left": true,
    });

    const buttonClasses = classNames({
        'border-0 text-center h-16 justify-center flex items-center mt-7 bg-space-default text-white inline-block hover:bg-white hover:text-space-default hover:border-space-default transition-all font-semibold text-lg w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none': true,
        'pointer-events-none': isSending,
        'bg-green-600 pointer-events-none': isSuccess
    });

    return (
        <>
            <form className={formClasses} ref={formRef} action="post" onSubmit={submitForm}>
                <div className="-mx-2 flex flex-wrap">
                    <div className="w-full sm:w-1/2 p-2">
                        <label htmlFor={`${formName}-name`} className="block mb-2">Your Name</label>
                        <input type="text" name="name" id={`${formName}-name`} onInput={checkFormValidity} className="block w-full border-space-default" minLength={2} required />
                    </div>
                    <div className="w-full sm:w-1/2 p-2">
                        <label htmlFor={`${formName}-email`} className="block mb-2">Your E-mail</label>
                        <input type="email" name="email" id={`${formName}-email`} onInput={checkFormValidity} className="block w-full border-space-default" minLength={4} required />
                    </div>
                    <div className="w-full p-2">
                        <label htmlFor={`${formName}-message`} className="block mb-2">Your message</label>
                        <textarea name="message" id={`${formName}-message`} onInput={checkFormValidity} className="block w-full border-space-default h-32" required></textarea>
                    </div>

                    <div className="w-full px-2">
                        <button className={buttonClasses} type="submit" disabled={!isFormValid}>
                            {isSending && <Spinner color="white" size="medium" />}
                            {!isSending && !isSuccess && <span>Send Message</span>}
                            {isSuccess && <span>Success!</span>}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}