import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="bg-black text-green-400 border-4 border-green-300 ">
        Hello world!
      </h1>
      <h1 className="text-customColor-100">
        Hello world!
      </h1>

      <p className="sm:text-sm md:text-2xl lg:text-6xl">
        According to the screen
      </p>
      <p className="text-[#206a6c] text-6xl my-8">
        plugin
      </p>
      
      <p className="text-5xl">Hello from 5xl</p>
      <p className="text-4xl">Hello from 4xl</p>
      <p className="text-3xl">Hello from 3xl</p>
      <p className="text-2xl">Hello from 2xl</p>
      <p className="text-1xl">Hello from xl</p>
      <p className="text-sm mb-6">Hello from sm</p>
      
      <div>
        <p className="text-5xl my-8 note italic font-mono">Fonts</p>
        <p className="text-5xl my-8 note underline decoration-red-700 decoration-double ">Fonts</p>
        <p className="text-5xl my-8 note underline decoration-red-700 decoration-wavy ">Fonts</p>
        <p className="text-5xl my-8 note italic line-through decoration-wavy decoration-2 ">Fonts</p>
        <p className="text-5xl my-8 note overline decoration-dotted decoration-4">Fonts</p>
        
        <p className="text-xl my-8 truncate">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="bg-red-200">
        margin
        <div className="bg-slate-400 w-4/6 m-6 p-5">
          padding
          <div className="bg-zinc-500 w-4/6 ">text</div>
        </div>
      </div>
      <div className="w-full h-28 bg-red-500 "></div>
      <div className=" bg-red-500 "></div>

      <div className="flex w-full">
       <div className="w-1/4 h-28 bg-green-500 "></div>
       <div className=" bg-blue-500 w-3/4 h-28"></div>
      </div>

    </div>
  );
}
