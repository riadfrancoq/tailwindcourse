import Image from "next/image";

export default function Home() {
  return (
  <div className="h-screen text-white Parent bg-slate-900">
    <div className="container mx-auto">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 ">
        <div className="p-6 rounded-lg bg-sky-500 col-span-2">01</div>
        <div className="p-6 rounded-lg bg-sky-500 col-span-2">02</div>
        <div className="p-6 rounded-lg bg-sky-500">03</div>
        <div className="p-6 rounded-lg bg-sky-500">04</div>
        <div className="p-6 rounded-lg bg-sky-500 ">05</div>
        <div className="p-6 rounded-lg bg-sky-500 col-span-2">06</div>
        <div className="p-6 rounded-lg bg-sky-500">07</div>
        <div className="p-6 rounded-lg bg-sky-500">08</div>
        <div className="p-6 rounded-lg bg-sky-500">09</div>
        <div className="p-6 rounded-lg bg-sky-500 col-span-2">10</div>
        <div className="p-6 rounded-lg bg-sky-500">11</div>
        <div className="p-6 rounded-lg bg-sky-500">12</div>

      </div>

    </div>
  </div>
  
);
}