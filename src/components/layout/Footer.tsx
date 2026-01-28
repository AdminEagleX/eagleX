import React from "react";
import Link from "next/link";
import Container from "./Container";
import navigation from "@/content/navigation.json";
import siteContent from "@/content/site.json";

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 text-slate-400 py-16 lg:py-20">
            {/* Premium gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-2xl font-medium text-white tracking-tight mb-4 block">
                            Eagle<span className="text-accent">X</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            {siteContent.site.description}
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            {navigation.footer.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            {navigation.footer.resources.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                                    Contact Us
                                </Link>
                            </li>
                            <li>{siteContent.site.address.city}, {siteContent.site.address.state}</li>
                            <li>{siteContent.site.email}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} {siteContent.site.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {navigation.footer.legal.map((link) => (
                            <Link key={link.label} href={link.href} className="hover:text-white transition-colors duration-300">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
