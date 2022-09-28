import { getProviders, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Container from "../components/atoms/Container";
import TextInput from "../components/composites/TextInput";

interface FormValues {
  email: string;
}

export default function SignInPage(): JSX.Element {
  const { register, handleSubmit } = useForm<FormValues>();

  function onSubmit(values: FormValues) {
    if (values) {
      signIn("credentials", {
        email: values.email,
        callbackUrl: "http://localhost:3000",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="min-h-screen bg-indigo-100 pt-8">
        <section>
          <Container>
            <h1 className="py-12 text-4xl font-bold">Sign in</h1>
          </Container>
        </section>
        <section>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Email"
                {...register("email", { required: "Email required" })}
              />
              <div className="flex justify-end gap-3">
                <button
                  className="rounded bg-red-600 text-white hover:bg-red-700 font-medium px-3 py-2"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
                <button
                  className="rounded bg-indigo-600 text-white hover:bg-indigo-700 font-medium px-3 py-2"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </Container>
        </section>
      </div>
    </>
  );
}
