import Image from "next/image";

export default function Home() {
  return (
  <div className="h-screen p-4 Parent">
    <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
      <img src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" className="w-64 mb-4 sepia scale-150 origin-bottom-right skew-x-12" alt="" />
      <h1 className="text-2xl"> Hello </h1>
      <p className="mb-4"> This is my div </p>
      <button className="px-3 py-2 rounded-lg cursor-pointer hover:-translate-y-1 transition delay-1000 duration-1000
       bg-cyan-500 shadow-md shadow-cyan-500/50 text-white hover:opacity-50 animate-ping "> Say Hello </button>
    </div>
  </div>
  
);
}

