export default function Footer() {
  return (
    <div className="w-full min-h-[15rem] p-4 mt-[4rem] bg-green-500 text-white flex justify-center flex-col items-center">
      <h1 className="text-[2.3rem] font-bold">Dev. Phantom</h1>
      <div className="flex wrap text-white text-md">
        <a className="pr-3" href="">GitHub</a>
        <a className="pr-3" href="">Twitter</a>
        <a className="pr-3" href="">Facebook</a>
       </div>
      <p>Copyright © 2023</p>
    </div>
  );
}
