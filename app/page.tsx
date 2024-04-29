import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-screen items-center justify-center flex-col gap-y-4">
            <h1 className="font-bold text-3xl">Demo mongoDB with member's data ❤️</h1>
            <Button size={"lg"} asChild>
                <Link href="/member">Let's start</Link>
            </Button>
        </main>
    );
}
