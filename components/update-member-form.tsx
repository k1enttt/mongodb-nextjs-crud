"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";

import { MemberSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormField,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateMember } from "@/data/db";
import { MemberProps } from "@/app/member/columns";
export const UpdateMemberForm = ({ member }: { member: MemberProps }) => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof MemberSchema>>({
        resolver: zodResolver(MemberSchema),
        defaultValues: {
            name: "",
            age: 0,
        },
    });

    const handleSubmit = (values: z.infer<typeof MemberSchema>) => {
        startTransition(() => {
            updateMember({ _id: member._id, ...values });
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
            >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        defaultValue={member.name}
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        defaultValue={member.age}
                                        type="number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button disabled={isPending} type="submit" className="w-full">
                    Update
                </Button>
            </form>
        </Form>
    );
};
