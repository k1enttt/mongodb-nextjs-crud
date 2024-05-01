'use server';
import crypto from 'crypto';
import { Member } from "@/app/member/columns"

export const addMember = async (member: Member) => {
    // TODO: Thêm dữ liệu
    console.log(`Đã thêm Member mới vói id là ${member.id}!`);

    const id = crypto.randomInt(1_000, 100_000).toString();


    // Create member in mongoDB

}

export const updateMember = async (member: Member) => {
    // TODO: Cập nhật dữ liệu có sẵn
    console.log('Đã cập nhật Member!');
}

export const deleteMemberById = async (id: string) => {
    // TODO: Xóa dữ liệu theo id
    console.log(`Đã xóa Member có id là ${id}!`);
    
}

export const deleteMemberByName = async (name: string) => {
    // TODO: Xóa dữ liệu theo name
    console.log(`Đã xóa Member có tên là ${name}!`);
}