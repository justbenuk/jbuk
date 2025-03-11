import Image from 'next/image'
export default function Logo() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image alt='Profile Picture' src='/assets/me.png' width={150} height={150} className='h-10 w-10 rounded-full border-2 border-green-500' />
      <h1 className="hidden lg:block uppercase font-semibold">Ben Andrews</h1>
    </div>
  )
}
