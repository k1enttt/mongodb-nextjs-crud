import { Member, columns } from "./columns"; 
import { MemberTable } from "./member-table";

async function getData(): Promise<Member[]> {
    // Fetch data from your API here.
    return [
      {
        id: '1', 
        name: 'Kiên', 
        age: 22
      },
      {
        id: '2', 
        name: 'Châu', 
        age: 18
      },
      {
        id: '3', 
        name: 'Khải', 
        age: 21
      },
      {
        id: '4', 
        name: 'Nghĩa', 
        age: 22
      },
      {
        id: '5', 
        name: 'Đức', 
        age: 21
      },
    ]
  }

const MemberPage = async () => {
    const data = await getData();
    return (
        <div className="flex h-screen items-center justify-center flex-col gap-y-4">
            <h1 className="text-3xl font-bold">Member Page</h1>
            <MemberTable 
            columns={columns} 
            data={data} />
        </div>
    );
};

export default MemberPage;
