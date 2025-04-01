"use client";

import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import {Form} from "@/components/ui/form";
import FormField from "@/components/FormField";
import {useRouter} from "next/navigation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/firebase/client";
import {signIn, signUp} from "@/lib/actions/auth.actions";
import {Loader2} from "lucide-react";


const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const AuthForm = ({type}: { type: FormType }) => {
    const router = useRouter();
    const formSchema = authFormSchema(type)
    const isSignIn = type === "sign-in";
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-in") {
                const {email, password} = values;
                const userCredentials = await signInWithEmailAndPassword(auth, email, password)

                const idToken = await userCredentials.user.getIdToken();

                if (!idToken) {
                    toast.error("Sign in failed.");
                    return
                }

                await signIn({email, idToken});
                toast.success("Signed In successfully!");
                router.push("/");
            } else {
                const {name, email, password} = values;
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

                const result = await signUp({
                    uid: userCredentials.user.uid,
                    name: name!,
                    password,
                    email
                })

                if (!result?.success) {
                    toast.error(result?.message);
                    return;
                }
                toast.success("Account Created successfully!");
                router.push("/sign-in")
            }
        } catch (error) {
            console.log(error);
            toast.error(`There is an error: ${error}`);
        }
    }

    return (
        <div className={"card-border lg:min-w-[566px]"}>
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={"/logo.svg"} alt="Logo" height={32} width={38}/>
                    <h2 className="text-primary-100">PrepWise</h2>
                </div>
                <h3 className="text-center">Practice job interview with AI</h3>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 w-full mt-4 form"
                    >
                        {!isSignIn &&
                            <FormField control={form.control} name={"name"} label={"Name"} placeholder={"Your Name"}/>}
                        <FormField control={form.control} name={"email"} label={"Email"} placeholder={"Your Email"}
                                   type={"email"}/>
                        <FormField control={form.control} name={"password"} label={"Password"}
                                   placeholder={"Your Password "} type={"password"}/>
                        <Button type="submit" className="btn" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting && <Loader2 className="animate-spin"/>}
                            {isSignIn ? "Sign In" : "Create an account"}
                        </Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                    <Link
                        href={isSignIn ? "/sign-up" : "/sign-in"}
                        className="font-bold text-user-primary ml-1"
                    >
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default AuthForm;
