"use client";

import { ArrowRight, BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-[calc(100dvh-3.5rem)] w-full place-items-center">
      <div className="w-full px-6 md:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-foreground text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Welcome to Next.js
            </h1>
            <p className="text-muted-foreground text-base">
              To get started, edit{" "}
              <code className="bg-muted text-foreground rounded px-1.5 py-0.5 font-mono text-sm">
                app/page.tsx
              </code>
            </p>

            <p className="text-muted-foreground max-w-md text-lg leading-8 text-pretty">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="text-foreground font-medium underline underline-offset-4"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="text-foreground font-medium underline underline-offset-4"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className={cn(
                buttonVariants(),
                "h-12 w-full gap-2 rounded-full px-6 md:w-44",
              )}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
              <ArrowRight className="size-4" />
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 w-full gap-2 rounded-full px-6 md:w-44",
              )}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="size-4" />
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
