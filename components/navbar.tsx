import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "@/public/Images/logo.png";
import styles from '@/styles/navbar.module.scss'
import Image from "next/image";
import config from "tailwindcss/defaultConfig";
import {siteConfig} from "@/config/site";
import {Login, UserAdd} from "iconsax-react";

export default function NavbarSite() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className={`${styles.navbar_width}`}
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3 " justify="center">
				<NavbarBrand >
					<Image src={Logo} alt={''}  />
					<p className=" text-gray-500">text</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 " justify="center" >
				<NavbarBrand>
					<Image src={Logo} alt={''}  />
					<p className="font-bold text-inherit mx-2"><span className={`text-blue-500`}>Ed</span>ucation</p>
				</NavbarBrand>
				{siteConfig.navItems.map((item)=>{
					return (
						<NavbarItem>
							<Link color="foreground" href={item.href} className={styles.navitem}>
								{item.label}
							</Link>
						</NavbarItem>
					)
				})}

			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/login">ورود</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} className={styles.login_btn} href="/login" >
						ثبت نام
						<span><UserAdd size={18}/></span>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu className={`mt-5`}>
				{siteConfig.navMenuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
							}
							href={item.href}
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
