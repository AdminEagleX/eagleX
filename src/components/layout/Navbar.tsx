"use client";

import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "./Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import navigation from "@/content/navigation.json";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom easing
            className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-sm"
        >
            <Container>
                <div className="h-16 lg:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/asset/logowhite.png"
                            alt="eaglex"
                            width={320}
                            height={80}
                            priority
                            className="h-11 lg:h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.main.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-glow",
                                    isActive(link.href)
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Button href={navigation.cta.href} variant="primary" size="sm" showArrow>
                            {navigation.cta.label}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden p-4 border-t border-white/10 overflow-hidden bg-black/95 backdrop-blur-md"
                        >
                            <div className="flex flex-col space-y-4">
                                {navigation.main.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-base font-medium py-2 transition-colors",
                                            isActive(link.href)
                                                ? "text-white"
                                                : "text-slate-400 hover:text-white"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button
                                    href={navigation.cta.href}
                                    variant="primary"
                                    showArrow
                                    className="mt-4 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {navigation.cta.label}
                                </Button>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.nav >
    );
};

export default Navbar;
