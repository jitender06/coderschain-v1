"use client";
import React, { useEffect, useMemo, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { BookmarkCheck, LogOut, MenuIcon, Settings, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AuthDialog } from "./AuthDialog";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
// import { useAuth } from "@/hooks/useAuth";
// import { useLogoutMutation } from "@/store/services/authService";
import { SearchBar } from "../common/SearchBar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import CommonLoading from "../common/CommonLoading";

export default function Header() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <NavbarUi className="top-2" />
        </div>
    );
}

function NavbarUi({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const { isAuthenticated, user, isLoading } = useAuth();
    const isAuthenticated = false;
    const user: any = null;
    const isLoading = false;
    const memoizedUser = useMemo(() => user, [user?.id]); // Only change when user id changes

    console.log(isAuthenticated, ">isAuthenticatedoij")
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    // const [logout, { isLoading: isLoggingOut, error }] = useLogoutMutation();
    const logout = (v: any) => ({ unwrap: () => Promise.resolve() });
    const isLoggingOut = false;
    const error = null;

    const pathname = usePathname();
    const isActiveRoute = (route: string) => {
        return pathname === route || pathname.startsWith(route + '/');
    };

    const handleLogout = async () => {
        try {
            await logout(undefined).unwrap();
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    // Toggle function for services
    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };


    // Dropdown menu component for both desktop and mobile
    const ProfileDropdown = ({ isMobile = false }: { isMobile?: boolean }) => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={cn(
                        "flex items-center",
                        isMobile ? "space-x-2" : "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    )}
                    aria-label="Open profile menu"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                        {user?.profilePicture ? (
                            <Image
                                src={user.profilePicture}
                                alt="User Avatar"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        ) : (
                            <User className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                        )}
                    </div>
                    {isMobile && (
                        <span className="text-sm text-gray-700 dark:text-gray-200">Profile</span>
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isMobile ? "start" : "end"} className="w-48">
                <DropdownMenuItem asChild>
                    <Link
                        href="/profile"
                        className="flex items-center space-x-2"
                        onClick={isMobile ? toggleMobileMenu : undefined}
                    >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                    <Link
                        href="/settings"
                        className="flex items-center space-x-2"
                        onClick={isMobile ? toggleMobileMenu : undefined}
                    >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem asChild>
                    <button
                        className="flex items-center space-x-2 bg-transparent border-none cursor-pointer w-full"
                        onClick={handleLogout}
                        aria-label="Logout"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                    </button>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    // ✅ Ensure consistent rendering between server and client
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isLoading) {
        return <CommonLoading />
    }

    return (
        <>
            <div
                className={cn(
                    "fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 flex items-center justify-between px-4",
                    className
                )}
            >
                <div className="md:hidden flex justify-between w-full pr-2 rounded-full border dark:bg-gray-950/50 dark:border-white bg-[#f7f4ed]/60 backdrop-blur-md shadow-2xs">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/CodersChain.png"
                                alt="Logo"
                                width={70}
                                height={70}
                                className="object-contain rounded-full"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center w-full justify-end">
                        {/* <SearchBar /> */}
                        {/* {isAuthenticated && <Link href="/bookmarks"> <BookmarkCheck className="cursor-pointer mr-3" /> </Link>} */}
                        <AnimatedThemeToggler />
                        {/* {
                            isAuthenticated ?
                                <ProfileDropdown />
                                :
                                <AuthDialog />
                        } */}
                    </div>
                    {/* Hamburger Menu Icon (visible on mobile) */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                        ) : (
                            <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                        )}
                    </button>
                </div>

                <Menu setActive={setActive}>
                    {/* Logo on the left */}
                    <div className="flex items-center w-full justify-start">
                        <Link href="/">
                            <Image
                                src="/CodersChain.png"
                                alt="Logo"
                                width={70}
                                height={70}
                                className="object-contain rounded-full"
                            />
                        </Link>
                    </div>

                    {/* Center Menu */}
                    <div className="flex items-center gap-10 justify-center">
                        <Link href={"/mentorship"}>
                            <div className="relative inline-block cursor-pointer">
                                {/* Badge */}
                                <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
                                    Free
                                </span>

                                {/* Button */}
                                <Button variant="secondary" className="px-6 py-2 rounded-lg cursor-pointer">
                                    Get Free Consultant
                                </Button>
                            </div>
                        </Link>

                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="flex flex-col space-y-4 text-sm min-w-[280px] p-4">
                                <HoveredLink href="/services/custom-website-development">
                                    Custom Website Development Company
                                </HoveredLink>
                                <HoveredLink href="/services/mobile-app-development">
                                    Mobile App Development Company
                                </HoveredLink>
                                <HoveredLink href="/services/ui-ux-design">
                                    Leading UI/UX Design Company
                                </HoveredLink>
                                <HoveredLink href="/services/mvp-development">
                                    MVP Development Services
                                </HoveredLink>
                                <HoveredLink href="/services/full-stack-development">
                                    Full Stack Development Services
                                </HoveredLink>
                                <HoveredLink href="/services/ar-vr-development">
                                    AR/VR Development Services
                                </HoveredLink>
                                <HoveredLink href="/services/ai-agent-development">
                                    AI Agent Development Services
                                </HoveredLink>
                                <HoveredLink href="/services/landing-page-development">
                                    Website & Landing Page Development
                                </HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Products">
                            <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="RoutineFlux"
                                    href="https://routineflux.coderschain.com"
                                    src="/routineflux.png"
                                    description="RoutineFlux is a web application that helps users create and manage their routines."
                                />
                                {/* <ProductItem
                                    title="Tailwind Master Kit"
                                    href="https://tailwindmasterkit.com"
                                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                    description="Production ready Tailwind css components for your next project"
                                />
                                <ProductItem
                                    title="Moonbeam"
                                    href="https://gomoonbeam.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                    description="Never write from scratch again. Go from idea to blog in minutes."
                                />
                                <ProductItem
                                    title="Rogue"
                                    href="https://userogue.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                /> */}
                            </div>
                        </MenuItem>

                        <Link href={"/contact"}>
                            <div className="relative inline-block cursor-pointer">
                                Contact
                            </div>
                        </Link>
                        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">Individual</HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                            </div>
                        </MenuItem> */}
                    </div>

                    {/* Right Side: Dark/Light Toggle, Sign In/Sign Up, Avatar */}
                    <div className="flex items-center gap-3 w-full justify-end">
                        {/* <SearchBar /> */}
                        {isAuthenticated && <Link href="/bookmarks"> <BookmarkCheck className="cursor-pointer" /> </Link>}
                        <AnimatedThemeToggler />
                        {/* {
                            isAuthenticated ?
                                <ProfileDropdown />
                                :
                                <AuthDialog />
                        } */}
                    </div>
                </Menu>
            </div>

            {/* Mobile Menu (slides in from right) */}
            <div
                className={cn(
                    "h-screen overflow-hidden fixed inset-y-0 right-0 w-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-4">
                    {/* Close Button */}
                    <button
                        className="self-end p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </button>

                    {/* Mobile Menu Items */}
                    <div className="flex flex-col space-y-4 mt-4">
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" onClick={toggleMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            {/* Services Dropdown for Mobile */}
                            <li>
                                <button
                                    onClick={toggleServices}
                                    className="flex items-center justify-between w-full py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    <span>Services</span>
                                    <span className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Services Submenu */}
                                {isServicesOpen && (
                                    <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                                        <li>
                                            <Link
                                                href="/services/custom-website-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                Custom Website Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/mobile-app-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                Mobile App Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/ui-ux-design"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                UI/UX Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/mvp-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                MVP Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/full-stack-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                Full Stack Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/ar-vr-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                AR/VR Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/ai-agent-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                AI Agent Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/landing-page-development"
                                                onClick={toggleMobileMenu}
                                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                Landing Page Development
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link href="/about-us" onClick={toggleMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={toggleMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/search" onClick={toggleMobileMenu}>
                                    Search
                                </Link>
                            </li>

                            {isAuthenticated && <li>
                                <Link href="/bookmarks" onClick={toggleMobileMenu}> Bookmarks </Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}