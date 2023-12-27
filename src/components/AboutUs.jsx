const AboutUs = () => {
    return (
        <div className="bg-[#fee2b3] ">
            <div className="app-padding">
                <div className='grid grid-cols-1 gap-5 sm:gap-9 md:grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-5'>

                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col gap-5 text-black space-y-10 '>
                            <h5 className='text-[50px] md:text-[100px] leading-3 font-[200]' style={{ fontFamily: 'Cormorant Garamond ' }}>
                                About Us
                            </h5>
                            <h4 className='font-[600] tracking-wide	text-[25px] font-medium leading-9 font-serif'>
                                Welcome to “Savorful Delights” – where culinary artistry meets your palate in a symphony of flavors and textures! Nestled in the heart of the bustling city, our restaurant beckons you to embark on a gastronomic journey like no other.
                            </h4>
                        </div>

                    </div>

                    <div className='order-first'>
                        <img
                            className=' w-full md:h-[70vh] md:w-[70%] overflow-hidden rounded-lg'
                            src='https://themewagon.github.io/feane/images/about-img.png'
                            alt='Acu care'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs