import { axiosClient } from "@/lib/client";

export default async function Home({params}) {
  const data = await axiosClient.get(`/store/products/${params.id}`);
  console.log(data);

  return (
    <main className="p-10 flex grid-cols-4 gap-3">
      {JSON.stringify(data.data)}
    </main>
  );
}
