import Logo from "./Logo";

export default function Footer() {
    return (
        <>
            <footer className="px-2 pt-7 pb-6 bg-gray-800 z-10 w-full text-center text-white">
                <Logo />
                <div className="mt-3">Built with ❤️ by Bogdan Dolin</div>
                {/* <div className="mt-3 opacity-80">The source code of the website is available at <a href="">GitHub</a></div> */}
            </footer>
        </>
    )
}