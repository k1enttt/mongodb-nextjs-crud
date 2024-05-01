import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AddMemberForm } from "@/components/add-member-form";
export const AddMemberButton = () => {
    return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">Add member</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add member</DialogTitle>
                        <DialogDescription>
                            Add a new member here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                   <AddMemberForm />
                </DialogContent>
            </Dialog>
    );
};
