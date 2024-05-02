import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UpdateMemberForm } from "@/components/update-member-form";
import { MemberProps } from "@/app/member/columns";
export const UpdateMemberButton = ({member}:{member: MemberProps}) => {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Button variant="ghost" className="h-8 w-full flex justify-start px-2">
                    Sửa
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update member</DialogTitle>
                    <DialogDescription>
                        Make changes to your member here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <UpdateMemberForm member={member}/>
            </DialogContent>
        </Dialog>
    );
};
