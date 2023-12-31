const AboutUs = () => {
    return (
        <div className="bg-[#fee2b3] " id='about-us'>
            <div className="app-padding pb-5">
                <div className='grid grid-cols-1 gap-5 sm:gap-9 md:grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-5'>

                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col gap-5 text-black space-y-10 '>
                            <h5 className='text-[50px] md:text-[100px] leading-3 font-[200]' style={{ fontFamily: 'Cormorant Garamond ' }}>
                                About Us
                            </h5>
                            <h4 className='font-[600] tracking-wide	text-[25px] font-medium leading-9 font-serif'>
                                Welcome to “Kings Chippy” , your go-to Fish & Chips takeaway nestled in the heart of Glasgow. Immerse yourself in the authentic flavors of Scotland with our signature Irn Bru and indulge in the rich tradition of Scottish cuisine with our mouthwatering Scottish Haggis.
                            
                            </h4>
                        </div>

                    </div>

                    <div className='order-last'>
                        <img
                            className=' w-full w-[100%] md:h-[100%] md:w-[100%] overflow-hidden rounded-lg'
                            src='/kings_chippy.png' //https://themewagon.github.io/feane/images/about-img.png
                            alt='Acu care'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs