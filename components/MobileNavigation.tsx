"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { div } from "motion/react-client"
import ThemeToggle from "./ThemeToggle"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { navItems } from "@/lib/constant"
import Link from "next/link"
import { useState } from "react";

export default function MobileNavigation(){
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
        <Menu className="w-5 h-5"/>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetTitle></SheetTitle>
    <div className="flex flex-col space-y-4 mt-8 p-8">
        {navItems.map(Item => 
        <Link
          key={Item.name}
          href={Item.href}
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">
          {Item.name}
        </Link>
        )}
    </div>
  </SheetContent>
  
</Sheet>
        </div>
    )
}