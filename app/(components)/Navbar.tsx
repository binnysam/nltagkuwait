"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <div className="w-full flex flex-col  dark:bg-black sticky top-0 bg-white z-50">
      <header className="w-full border-b border-zinc-200/60 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Left Side: Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-primary"
          >
            NLTAG
          </Link>

          {/* Right Side: Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About NLTAG</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/service-timing">Service Timing</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
