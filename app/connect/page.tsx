"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function Connect() {
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Connect</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email and remarks...
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="remarks">Remarks</Label>
              </div>
              <Textarea
                id="remarks"
                placeholder="I am facing xyz problem..."
                rows={7}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Not interested?{" "}
            <Link href="/" className="underline">
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
