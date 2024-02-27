import { axiosClient } from "@/lib/client";

export default async function Home() {
  const data = await axiosClient.get("/store/products");

  return (
    <main className="p-10 flex grid-cols-4 gap-3">
      {data.data.products.map((product) => {
        return (
          <a
            key={""}
            href={`/product/${product.id}`}
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </a>
        );
      })}
    </main>
  );
}
