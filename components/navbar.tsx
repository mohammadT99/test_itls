import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Login, LoginCurve, UserAdd } from "iconsax-react";
import { symbolName } from "typescript";
import styles from '@/styles/navbar.module.scss'

export const Navbar = () => {

	return (
		<NextUINavbar  position="sticky" className={styles.navbar_width}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1	" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-5 justify-start ml-2 mx-10">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}  className={`${styles.navitem}`}>
							<NextLink
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				
				<NavbarItem className=" flex gap-2 md:flex">
					<Button
						isExternal
						as={Link}
						className="text-md font-bold text-default-600 bg-0  hover:bg-blue-200 "
					>
					ورود	
									
					</Button>
					<Button
						isExternal
						as={Link}
						className="text-md font-bold  bg-blue-500 text-white  px-5"
					
					>
						<span>
							<UserAdd />
						</span>
						ثبت نام
					</Button>
				</NavbarItem>
			</NavbarContent>
      <NavbarMenu>
				
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
