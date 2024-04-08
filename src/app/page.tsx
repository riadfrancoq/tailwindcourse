import Image from "next/image";

export default function Home() {
  return (
   <div>
    <p className="break-all"> This is a long sentence with a lot of words to explain 
    lamamadelamamadelamamdelamamadelamadelamaa
    that truncate will truncate my sentence</p>
    {/* {<h1 className="text-3xl italic underline decoration-red-500 decoration-double"> Title 1</h1>
    <h2 className="text-2xl line-through decoration-dotted"> Title 2</h2>
    <h3 className="text-xl italic underline decoration-wavy decoration-1 underline-offset-8"> Title 3</h3>
    <p className="text-base uppercase">A regular paragraph</p>
    <p className="text-sm">A description paragraph</p>
    <p className="text-xs note"> A little note </p>} */}
   </div>

  );
}
