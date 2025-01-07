import Image from 'next/image';

export default function BlogDetailPage() {
    return (
        <>
              {/* main div */}
            <div className='w-full flex bg-white mt-10'> 
                {/* left side */}
                <div className='w-2/3 text-[#4F4F4F] mt-[130px] mx-auto'>
                    <Image 
                        src='/blog/pdp/1.png'
                        alt=''
                        width={872}
                        height={520}
                    />
                    <div className='flex mt-3'>
                        <Image 
                            src='/blog/Calendar.png'
                            alt=''
                            width={24}
                            height={24}
                            className='cursor-pointer'
                        />
                        
                       
                        <Image 
                            src='/blog/userCirclePlus.png'
                            alt='Admin'
                            width={24}
                            height={24}
                            className='cursor-pointer ml-3'
                        />
                    </div>
                    <h1 className='font-bold text-2xl py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
                    <p className='py-[30px] text-[#4F4F4F]'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
                    <br/>
                    <p className='py-[30px] text-[#4F4F4F]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>

                    <div className='bg-[#FF9F0D] mt-[80px] py-10 px-6'>
                        <div className='flex items-center'>
                            <Image 
                                src='/blog/pdp/3.png'
                                alt=''
                                width={48}
                                height={48}
                                className='mt-[50px]'
                            />
                            <p className='ml-[50px] text-xl font-bold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>

                    <p className='mt-[100px] text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                    <div className='flex mt-[60px]'>
                        <div className='w-1/2 text-[#4F4F4F] gap-3'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        </div>
                        <div className='ml-4 w-1/2'>
                            <Image 
                                src='/blog/pdp/2.png'
                                alt=''
                                width={424}
                                height={366}
                            />
                        </div>
                    </div>
                    <p className='mt-20'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <p className='mt-[50px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <Image 
                        src='/blog/pdp/Share.png'
                        alt=''
                        width={872}
                        height={60}
                        className='mt-10'
                    />

                    {/* Comment Section */}
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold'></h1>
                        <div className='mt-10'>
                            <Image 
                                src='/blog/pdp/MD sojib.png'
                                alt=''
                                width={872}
                                height={112}
                                className='cursor-pointer'
                            />
                            <Image 
                                src='/blog/pdp/MD sojib (1).png'
                                alt=''
                                width={672}
                                height={112}
                                className='ml-[200px] mt-5 cursor-pointer'
                            />
                            <Image 
                                src='/blog/pdp/MD sojib (2).png'
                                alt=''
                                width={872}
                                height={112}
                                className='cursor-pointer mt-5'
                            />
                        </div>
                    </div>

                    {/* Post a comment */}
                    <div className='mt-5'>
                        <h1 className='text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold'>Post a Comment</h1>
                        <div className='flex mt-5'>
                            <input 
                                placeholder='Name'
                                type='name'
                                className='w-1/2 text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 border-[#E0E0E0] h-[56px]'
                            />
                            <input 
                                placeholder='Email'
                                type='email'
                                className='w-1/2 text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 ml-3 border-[#E0E0E0] h-[56px]'
                            />
                        </div>
                        <input 
                            placeholder='Write a Comment'
                            type='text'
                            className='leading-[24px] h-[117px] border-[1px] text-lg text-[#4F4F4F] font-semibold border-[#E0E0E0] w-full mt-5 px-3'
                        />
                        <div className='mt-8'>
                            <button className='bg-[#FF9F0D] rounded-none text-white py-3 px-10'>Post Comment</button>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className='flex items-center mt-[100px] justify-center'>
                        <Image 
                            src='/blog.pdp/3.png'
                            alt=''
                            width={13}
                            height={13}
                            className='cursor-pointer'
                        />
                        <Image 
                            src='/blog/pdp/.png'
                            alt=''
                            width={62}
                            height={27}
                            className='ml-3 cursor-pointer'
                        />
                        <Image 
                            src='/blog/pdp/.png'
                            alt=''
                            width={13}
                            height={13}
                            className='cursor-pointer ml-3'
                        />
                    </div>
                </div>

                {/* right side */}
                <div className='w-1/3 h-[2937px]'>
                    <div className='w-[365px] h-[840px] bg-[#F2F2F2] mt-[80px] ml-[50px]'>
                        <h1 className='text-[#333333] font-bold text-2xl mt-[50px] ml-10'>Search</h1>
                        <div className='flex mt-[30px]'>
                            <input 
                                placeholder='Search for blog'
                                type='name'
                                className='w-[265px] text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 ml-10 border-[#E0E0E0] h-[56px]'
                            />
                    
                            <Image 
                                src='/blog/pdp/3.png'
                                alt=''
                                width={24}
                                height={24}
                                className='cursor-pointer -ml-[35px]'
                                />
                            </div>
                    </div>

                    <div className='w-[365px] h-[725px] bg-[#F2F2F2] mt-[100px] ml-[50px]'>
                        <h1 className='text-[#333333] font-bold text-2xl mt-[50px] ml-10'>Categories</h1>
                        <Image 
                            src='/blog/pdp/4.png'
                            alt=''
                            width={285}
                            height={200}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                    </div>

                    <div className='w-[365px] h-[815px] bg-[#F2F2F2] mt-[100px] ml-[50px]'>
                        <h1 className='text-[#333333] font-bold text-2xl mt-[50px] ml-10'>Popular Post</h1>
                        <Image 
                            src='/blog/pdp/5.png'
                            alt=''
                            width={285}
                            height={135}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                        <Image 
                            src='/blog/pdp/6.png'
                            alt=''
                            width={285}
                            height={135}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                        <Image 
                            src='/blog/pdp/7.png'
                            alt=''
                            width={285}
                            height={135}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                        <Image 
                            src='/blog/pdp/8.png'
                            alt=''
                            width={285}
                            height={135}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                    </div>

                    <div className='w-[365px] h-[725px] bg-[#F2F2F2] mt-[100px] ml-[50px]'>
                        <h1 className='text-[#333333] font-bold text-2xl mt-[50px] ml-10'>Popular Tags</h1>
                        <Image 
                            src='/blog/pdp/5.png'
                            alt=''
                            width={285}
                            height={200}
                            className='cursor-pointer mt-[30px] ml-10'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}