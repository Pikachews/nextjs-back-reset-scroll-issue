import Link from "next/link";

const TestPage = () => {
    const links = [];
   
    for (let i = 0; i < 1000; i++) {
        links.push(
            <li key={i}>
                <Link href="#next-page">
                    {i}
                </Link>
            </li>
        );
    }

    return <ul>{links}</ul>;
}

export default TestPage;