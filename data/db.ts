import { clientPromise } from "@/lib/db";
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

;(async () => {
    await run();
})();


export async function getMembers() {
    // TODO: Lấy hết dữ liệu
    if (!collection) await run();
    const data = await collection.find().toArray();
    console.log("Đã lấy hết dữ liệu! \n", data);
    return { members: data };
}

export const getMemberById = async (id: string) => {
    // TODO: Lấy dữ liệu theo id
    console.log(`Đã lấy dữ liệu theo id là ${id}!`);
};
