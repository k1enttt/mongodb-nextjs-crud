'use client';
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  deleteMemberById, 
  updateMember 
} from "@/actions/member";

export type MemberColumn = {
    _id: string;
    name: string;
    age: number;
}

export const columns: ColumnDef<MemberColumn>[] = [
    {
      accessorKey: "_id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const member = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => updateMember(member)}
              >
                Sửa
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => deleteMemberById(member._id)}
              >
                Xóa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
