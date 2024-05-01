"use server";
import { clientPromise } from "@/lib/db";
import { MemberProps } from "@/app/member/columns";
import { ObjectId } from "mongodb";

let client, database, collection: any;

async function run() {
    try {
        client = await clientPromise;
        database = client.db("db_plant");
        collection = database.collection("test");
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

(async () => {
    await run();
})();

export async function getMembers() {
    // TODO: Lấy hết dữ liệu
    if (!collection) await run();
    const data = await collection.find().toArray();
    console.log("Đã lấy hết dữ liệu! \n", data);
    return { data: data };
}

export const getMemberById = async (id: string) => {
    // TODO: Lấy dữ liệu theo id
    console.log(`Đã lấy dữ liệu theo id là ${id}`);
    const member = await collection.findOne({ _id: new ObjectId(id) });
    return { data: member };
};

export const addMember = async ({
    name,
    age,
}: {
    name: string;
    age: number;
}) => {
    const response = await collection.insertOne({
        _id: new ObjectId(),
        name,
        age,
    });
    const formatedResponse = JSON.parse(JSON.stringify(response));
    console.log('Đã thêm Member mới\n', formatedResponse);
    return { data: formatedResponse };
};

export const updateMember = async (member: MemberProps) => {
    // TODO: Cập nhật dữ liệu có sẵn
    console.log("Đã cập nhật Member");
    const data = JSON.parse(JSON.stringify(await getMemberById(member._id)));
    console.log(data);
    const newMem = {
        _id: data._id,
        name: member.name,
        age: member.age,
    };
    return { data: newMem };
};

export const deleteMemberById = async (id: string) => {
    const existingMember = await getMemberById(id);
    if (!existingMember) {
        console.log(`Không tìm thấy Member có id là ${id}`);
        return;
    }
    await collection.deleteOne({ _id: new ObjectId(id) });

    console.log(`Đã xóa Member có id là ${id}`);
};

export const deleteMemberByName = async (name: string) => {
    // TODO: Xóa dữ liệu theo name
    console.log(`Đã xóa Member có tên là ${name}`);
};
