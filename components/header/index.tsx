import {
  CircleUser,
  Github,
  LibraryBig,
  Menu,
  Package2,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from "../theme/theme-toggle";

export function Header() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <LibraryBig className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Intro
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/connect"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Connect
          </Link>
          {/* <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden h-8 w-8"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <LibraryBig className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                Intro
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/connect"
                className="text-muted-foreground hover:text-foreground"
              >
                Connect
              </Link>
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link> */}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            {/* <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search here..."
                className="h-8 w-8 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div> */}
          </form>
          <ModeToggle />
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Button variant="outline" size="icon" className="h-8 w-8" asChild>
            <Link href="/">
              <Github className="h-4 w-4" />
              <span className="sr-only">Github</span>
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}
