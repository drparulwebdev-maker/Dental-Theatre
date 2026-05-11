"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetFooter } from "@/components/ui/sheet";
import { Menu, Phone, MessageSquare, Home, Info, Stethoscope, Image as ImageIcon, Mail, Instagram, Facebook, Youtube, Users } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

const navItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: Info },
  { title: "Dr. Parul", href: "/dr-parul-jangra", icon: Users },
  { title: "Dr. Bijender", href: "/dr-bijender-duhan", icon: Users },
  { title: "Services", href: "/services", icon: Stethoscope },
  { title: "Gallery", href: "/gallery", icon: ImageIcon },
  { title: "Contact", href: "/#locations", icon: Phone },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-10 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2.5 -ml-1.5">
            <Image src="/Logo.png" alt="Dental Theatre Logo" width={32} height={32} className="h-8 w-auto object-contain" />
            <span className="text-2xl font-bold tracking-tight text-primary">
              Dental <span className="text-foreground/80">Theatre</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                      pathname === item.href && "text-primary font-semibold"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button nativeButton={false} render={<Link href={`tel:${siteConfig.locations[0].phone}`} />}>
            <Phone className="mr-2 size-4" />
            Call Us
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button nativeButton={false} variant="ghost" size="icon" render={<Link href={`tel:${siteConfig.locations[0].phone}`} />} className="md:hidden">
            <Phone className="size-5" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            } />
            <SheetContent side="right" className="w-75 sm:w-87.5 p-0 flex flex-col">
              <SheetHeader className="p-6 border-b border-border/40">
                <SheetTitle className="text-left flex items-center gap-2.5">
                  <Image src="/Logo.png" alt="Dental Theatre Logo" width={28} height={28} className="h-7 w-auto object-contain" />
                  <span className="text-xl font-bold tracking-tight text-primary">
                    Dental <span className="text-foreground/80">Theatre</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all",
                          isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground/70")} />
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>
                
                <div className="mt-8 px-4">
                  <Button 
                    nativeButton={false} 
                    className="w-full h-11 text-base font-semibold shadow-sm" 
                    render={<Link href={siteConfig.links.whatsapp} target="_blank" />} 
                    onClick={() => setIsOpen(false)}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>

              <SheetFooter className="p-6 border-t border-border/40 bg-muted/20">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Contact Info</p>
                    <a href={`tel:${siteConfig.locations[0].phone}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
                      <Phone className="size-4 text-primary/70" />
                      {siteConfig.locations[0].phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
                      <Mail className="size-4 text-primary/70" />
                      {siteConfig.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <Link href={siteConfig.links.instagram} target="_blank" className="p-2 rounded-full bg-background border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <Instagram className="size-4" />
                    </Link>
                    <Link href={siteConfig.links.facebook} target="_blank" className="p-2 rounded-full bg-background border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <Facebook className="size-4" />
                    </Link>
                    <Link href={siteConfig.links.youtube} target="_blank" className="p-2 rounded-full bg-background border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <Youtube className="size-4" />
                    </Link>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
