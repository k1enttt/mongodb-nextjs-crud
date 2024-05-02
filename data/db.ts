"use server";
import { clientPromise } from "@/lib/db";
import { MemberProps } from "@/app/member/columns";
import { ObjectId } from "mongodb";

let client: any, database, collection: any;

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
    if (!collection) await run();
    const data = await collection.find().toArray();
    console.log("Đã lấy hết dữ liệu! \n", data);

    return { data: data };
}

export const getMemberById = async (id: string) => {
    if (!collection) await run();

    const member = await collection.findOne({ _id: new ObjectId(id) });
    console.log(`Đã lấy dữ liệu theo id là ${id}`);

    return { data: member };
};

export const addMember = async ({
    name,
    age,
}: {
    name: string;
    age: number;
}) => {
    if (!collection) await run();

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
    if (!collection) await run();

    const existingMember = await getMemberById(member._id);
    if (!existingMember) {
        console.log(`Không tìm thấy Member có id là ${member._id}`);
        return;
    }
    const response = await collection.updateOne({
        _id: new ObjectId(member._id),
    }, {
        $set: {
            name: member.name,
            age: member.age,
        },
    });
    console.log("Đã cập nhật Member");
    console.log(response);

    return { data: response };
};

export const deleteMemberById = async (id: string) => {
    const existingMember = await getMemberById(id);
    if (!existingMember) {
        console.log(`Không tìm thấy Member có id là ${id}`);
        return;
    }
    const response = await collection.deleteOne({ _id: new ObjectId(id) });

    console.log(`Đã xóa Member có id là ${id}`);
    console.log(response);
    return { data: response };
};