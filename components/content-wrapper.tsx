import { columns } from "@/app/member/columns";
import { AddMemberButton } from "./add-member-button"
import { MemberTable } from "@/app/member/member-table";
import { getMembers } from "@/data/db";

export const ContentWrapper = async () => {
    const data = await getMembers();
    
    return (
        <div className="flex flex-col items-center gap-y-4">
            <MemberTable columns={columns} data={JSON.parse(JSON.stringify(data.members))} />
            <AddMemberButton />
        </div>
    )
}