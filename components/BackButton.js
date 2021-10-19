import { useRouter } from "next/router";
import Icon from "./Icon";

export default function BackButton({ onClick = null }) {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="mr-2 -ml-1">
            <Icon theme="dark" className="p-2">
                <svg width="268" height="472" viewBox="0 0 268 472" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M165.135 2.25C163.306 3.552 127.837 52.341 80.987 118C2.479 228.025 0 231.637 0 236C0 240.363 2.479 243.975 80.987 354C127.837 419.659 163.306 468.448 165.135 469.75L168.296 472L213.898 471.996C257.288 471.993 259.655 471.898 262.686 470.05C266.966 467.44 268.252 464.7 267.803 459.148C267.462 454.93 260.868 444.461 196.542 346C157.555 286.325 125.656 236.825 125.655 236C125.653 235.175 157.552 185.675 196.54 126C260.872 27.534 267.462 17.07 267.803 12.852C268.252 7.3 266.966 4.56 262.686 1.95C259.655 0.102001 257.288 0.00699971 213.898 0.00399971L168.296 0L165.135 2.25Z" />
                </svg>
            </Icon>
        </button>
    );
}