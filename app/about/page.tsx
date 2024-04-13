"use client";
import ComingSoon from "@/components/common/coming-soon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function About() {
  return (
    <>
      <div className="p-5 mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7" asChild>
            <Link href="/">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Rahul Panchal
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            Software developer
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button size="sm">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              Connect
            </Button>
          </div>
        </div>
        <ComingSoon />
      </div>
    </>
  );
}
