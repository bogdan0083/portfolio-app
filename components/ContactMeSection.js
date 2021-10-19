import ContactForm from "./ContactForm";

export default function ContactMeSection({ view = 'page' }) {
    return (
        <>
            <section className="w-full bg-white z-10 py-9 md:py-20 text-center">
                <div className="container mx-auto px-3">
                    <h2 className="font-bold text-2xl w-80 mx-auto sm:w-full sm:text-5xl md:text-5xl sm:leading-tight md:leading-tight md:w-3/4 lg:w-full text-gray-900 mb-3 sm:mb-4">Enjoy my work?</h2>
                    <p className="text-1xl mx-auto sm:text-2xl sm:w-8/12 mb-6 sm:mb-10">Send me a message. Let's chat!</p>
                    <div className="lg:w-10/12 xl:w-6/12 mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}