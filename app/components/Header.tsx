import Button from "./Button";

export const Header = () => {
    return (
			<>
            <header className="container flex bg-red-100">header</header>
            <Button></Button>
			</>
		);
};

export default Header;



// ssr, csr, ssg, isr(ssgにrevalidate: 60s)
