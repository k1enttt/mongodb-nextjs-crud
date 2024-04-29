'use server';
import { Member } from "@/app/member/columns"

export const addMember = async (member: Member) => {
    // TODO: Thêm dữ liệu
    console.log(`Đã thêm Member mới vói id là ${member.id}!`);
}

export const updateMember = async (member: Member) => {
    // TODO: Cập nhật dữ liệu có sẵn
    console.log('Đã cập nhật Member!');
}

export const deleteMember = async (id: string) => {
    // TODO: Xóa dữ liệu theo id
    console.log(`Đã xóa Member có id là ${id}!`);
}