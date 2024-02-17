import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Footer from "@/components/Global/Header/Footer";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="  flex flex-col h-screen items-center" >
			<Head />
			<Navbar />
			<main className="container mx-auto px-8 ">
				{children}
			</main>
			{/*<Footer />*/}
		</div>
	);
}
