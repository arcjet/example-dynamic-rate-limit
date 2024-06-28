import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RLForm } from "@/components/RLForm";
import { SignIn } from "@/components/SignIn";
import { SignOut } from "@/components/SignOut";
import { auth } from "@/lib/auth";

export default async function IndexPage() {
  const session = await auth();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Arcjet dynamic rate limit example
        </h1>
        <p className="max-w-[700px]">
          <Link
            href="https://arcjet.com"
            target="_blank"
            className="font-bold decoration-1 underline-offset-2 hover:underline"
          >
            Arcjet
          </Link>{" "}
          helps developers protect their apps in just a few lines of code.
          Implement rate limiting, bot protection, email verification & defend
          against common attacks.
        </p>
      </div>
      <h2 className="text-xl font-bold">Try it</h2>
      <p className="max-w-[700px]">
        This application shows a dynamic rate limit based on the user. The code
        is{" "}
        <Link
          href="https://github.com/arcjet/example-dynamic-rate-limit"
          target="_blank"
          rel="noreferrer"
          className="font-bold decoration-1 underline-offset-2 hover:underline"
        >
          on GitHub
        </Link>
        .
      </p>

      <RLForm />

      {session?.user ? (
        <>
          <p className="text-green-500">
            You are authenticated as {session.user?.email}. The limit is set to{" "}
            {session.user.apiLimit} requests every 60 seconds.
          </p>
        </>
      ) : (
        <>
          <p className="text-red-400">
            You are not authenticated. The limit is set to 2 requests every 60
            seconds.
          </p>
        </>
      )}

      <h2 className="text-xl font-bold">Authenticate</h2>
      <p className="max-w-[700px]">
        Rate limit is{" "}
        <Link
          href="https://docs.arcjet.com/reference/nextjs#ad-hoc-rules"
          className="font-bold decoration-1 underline-offset-2 hover:underline"
        >
          dynamically adjusted
        </Link>{" "}
        based configuration for the authenticated user in the database.
      </p>
      {session?.user ? <SignOut /> : <SignIn />}

      <h2 className="text-xl font-bold">What next?</h2>
      <div className="flex gap-4">
        <Link
          href="https://app.arcjet.com"
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          Sign up for Arcjet
        </Link>
        <Link
          href="https://docs.arcjet.com"
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          Arcjet docs
        </Link>
        <Link
          href="https://example.arcjet.com"
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          Full example app
        </Link>
        <Link
          href="https://discord.gg/TPra6jqZDC"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          Join our Discord
        </Link>
      </div>
    </section>
  );
}
