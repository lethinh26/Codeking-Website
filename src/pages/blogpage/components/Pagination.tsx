export default function Pagination() {
    return (
        <div className='py-7 flex items-center justify-center gap-3 border-[#333333] border-b-2'>
            <span className='text-gray-500 flex justify-center items-center font-bold hover:text-black hover:bg-[#E91E63] hover:w-10 hover:h-10 hover:rounded-full active:bg-[#4d071e] cursor-pointer'>
                &lt;
            </span>
            <div className='flex gap-3'>
                <button className='w-10 h-10 cursor-pointer font-bold rounded-lg bg-[#E91E63]'>1</button>
                <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>2</button>
                <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>3</button>
                <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>4</button>
                <button className='font-bold'>...</button>
                <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>10</button>
            </div>
            <span className='text-gray-500 flex justify-center items-center font-bold hover:text-black hover:bg-[#E91E63] hover:w-10 hover:h-10 hover:rounded-full active:bg-[#4d071e] cursor-pointer'>
                &gt;
            </span>
        </div>
    );
}
