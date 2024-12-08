import Image from "next/image"
export default function About() {
    return (
        <div>
            <div className="w-[114px] h-[21px] flex relative left-[135px] mt-10">
            <p className="w-[42px] h-[21px]">Home 

</p>
<p className="w-[42px] h-[21px] ml-1"> About

</p>

            </div>
           <div className="flex gap-[170px] mt-8 ">
            <div className="w-[525px] h-[326px] gap-[30px] relative left-[135px] ">
                <div className="w-[277px] h-[64px] font-semibold tracking-[6%] text-[54px] leading-[64px] ">
                    Our Story
                </div>

                <div className="w-[525px] h-[232px] mt-[78px] ">
                    <p className="h-[232px]">Launced in 2015, Exclusive is South Asia s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className="w-[505px] h-[78px] font-bold mt-[-54px]">
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
            </div>

            {/*pic div  */}
            <div className="w-[705px]  gap-[30px] relative left-[px] bg-[#EB7EA8] ">
                <Image src={'/img2/africa.jpg'} alt='image' width={837} height={609} />

            </div>
            </div>

            {/*  four image selller active*/}
            <div className="w-[1170px] mt-[80px] h-[230px] gap-[30px] relative left-[135px] flex">
                <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] ">
                    <div className="w-[169px] h-[170px]  ">
                    <div className="w-[80px] h-[80px]  ">
                            <div className="w-[58px] rounded-[58px] h-[58px] bg-black pl-[11px] pt-[11px] ">
                            <Image src={'/img2/icon-Shopping.png'} alt='image' width={51} height={53} />

                            </div>
                        </div>


                        <div className='w-[169px] h-[66px] gap-[12px]'>
                            <h3 className='font-bold text-[32px] tracking-[4%]  ' >10.5k </h3>
                            <p className='h-[24px] font-bold text-[16px] tracking-[4%] ' >Sallers active our site</p>

                        </div>
                    </div>


                </div>
                {/*2nd  */}
                <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] bg-[#DB4444] ">
                    <div className="w-[169px] h-[170px]  ">
                        {/*  image*/}
                        <div className="w-[80px] h-[80px]  ">
                            <div className="w-[58px] h-[58px] rounded-[58px]  pl-[11px] pt-[11px] ">
                            <Image src={'/img2/icon-delivery.png'} alt='image' width={51} height={53} />

                            </div>
                        </div>


                        <div className='w-[169px] h-[66px] gap-[12px]'>
                            <h3 className='font-bold text-[32px] tracking-[4%]  ' >33k</h3>
                            <p className='h-[24px] font-bold text-[16px] tracking-[4%] ' >Mopnthly Produduct Sale</p>

                        </div>
                    </div>


                </div>
                {/* 3rd */}
                <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] ">
                    <div className="w-[169px] h-[170px]  ">
                        {/*  image*/}
                        <div className="w-[80px] h-[80px]  ">
                            <div className="w-[58px] h-[58px] rounded-[58px] bg-black pl-[11px] pt-[11px] ">
                            <Image src={'/img2/icon-Secure.png'} alt='image' width={51} height={53} />

                            </div>
                        </div>


                        <div className='w-[169px] h-[66px] gap-[12px]'>
                            <h3 className='font-bold text-[32px] tracking-[4%]  ' >45.5k </h3>
                            <p className='h-[24px] font-bold text-[16px] tracking-[4%] ' >Customer active in our site</p>

                        </div>
                    </div>


                </div>

                {/*4th  */}
                <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] ">
                    <div className="w-[169px] h-[170px] ">
                        {/*  image*/}
                        <Image src={'/img2/icon-delivery.png'} alt='image' width={51} height={53} />

                        <div className="w-[80px] h-[80px]  ">
                            <div className="w-[58px] h-[58px] rounded-[58px] bg-black pl-[11px] pt-[11px] ">
                            <Image src={'/img2/icon-Moneybag.png'} alt='image' width={51} height={53} />

                            </div>
                        </div>


                        <div className='w-[169px] h-[66px] gap-[12px]'>
                            <h3 className='font-bold text-[32px] tracking-[4%]  ' >25k </h3>
                            <p className='h-[24px] font-bold text-[16px] tracking-[4%] ' >Anual gross sale in our site</p>

                        </div>
                    </div>


                </div>



            </div>

            {/*  */}
            <div className="w-[1170px] mt-[80px] h-[564px] gap-[30px] relative left-[135px] flex">
                <div className="w-[370px] h-[564px] gap-[32px] ">
                <Image src={'/img2/image46.png'} alt='image' width={370} height={430} />

                    <div className="w-[370px] h-[430px] rounded-[4px] bg-[#F5F5F5] ">
                        <div className='w-[236px] h-[391px] rounded-[4px] relative left-[7px] '>
                        </div>
                    </div>

                    <div className="w-[185px] h-[102px] gap-[16px] ">
                        <h3 className="w-[185px] h-[30px] mt-[-380px] relative left-5 ml-6 ">Tom Cruise
                        </h3>
                        <p>Founder & Chairman</p>
                        {/*  social icons*/}
                        {/* <div></div> */}
                    </div>

                </div>
                {/* image 2 */}
                <div className="w-[370px] h-[100px] gap-[32px]  ">
                <Image src={'/img2/image51.png'} alt='image' width={370} height={50} />

                    <div className="w-[370px] h-[430px] rounded-[4px] bg-[#F5F5F5] ">
                        <div className='w-[236px] h-[391px] rounded-[4px] relative left-[7px] '>
                        </div>
                    </div>

                    <div className="w-[185px] h-[102px] gap-[16px] mt-[230px] ">
                        <h3 className="w-[185px] h-[30px] mt-[-580px] ">Tom Cruise
                        </h3>
                        <p>Founder & Chairman</p>
                        {/*  social icons*/}
                        {/* <div></div> */}
                    </div>

                </div>


                {/* image 3 */}
                <div className="w-[370px] h-[564px] gap-[32px] ">
                <Image src={'/img2/image47.png'} alt='image' width={370} height={350} />

                    <div className="w-[370px] h-[430px] rounded-[4px] bg-[#F5F5F5] ">
                        <div className='w-[236px] h-[391px] rounded-[4px] relative left-[7px] '>
                        </div>
                    </div>

                    <div className="w-[185px] h-[102px] gap-[16px] ">
                        <h3 className="w-[185px] h-[30px] mt-[-380px] ">Tom Cruise
                        </h3>
                        <p>Founder & Chairman</p>
                        {/*  social icons*/}
                        {/* <div></div> */}
                    </div>

                </div>
                </div>



                {/* free and fast delivery 3 image   */}
                <div className="w-[943px] h-[161px] mt-[220px] gap-[88px] relative left-[248px] flex">
                    {/* image */}
                    <Image src={'/img2/icon-Customer.png'} alt='image' width={370} height={430} />

                    <div className="w-[249px] h-[161px] gap-[24px] rounded-[4px] border-[1px] ">
                        <div className="w-[249px] h-[57px]  ">
                            <p className="w-[242px] h-[28px]  ">FREE AND FAST DELIVERY</p>
                            <p className='w-[249px] h-[21px]' >Free delivery for all orders over $140</p>
                            <div className="w-[249px] h-[21px] bg-black pl-[11px] pt-[11px] ">

                            </div>



                            <div className='w-[169px] h-[66px] gap-[12px]'>
                                <h3 className='font-bold text-[32px] tracking-[4%]  ' >10.5k </h3>
                                <p className='h-[24px] font-bold text-[32px] tracking-[4%] ' >Sallers active our site</p>

                            </div>
                        </div>


                    </div>
                    {/*2nd  */}
                    <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] ">
                        <div className="w-[169px] h-[170px]  ">
                            {/*  image*/}
                            <div className="w-[80px] h-[80px]  ">
                                <div className="w-[58px] h-[58px] bg-black pl-[11px] pt-[11px] ">

                                </div>
                            </div>


                            <div className='w-[169px] h-[66px] gap-[12px]'>
                                <h3 className='font-bold text-[32px] tracking-[4%]  ' >33k</h3>
                                <p className='h-[24px] font-bold text-[32px] tracking-[4%] ' >Friendly 24/7 customer support</p>

                            </div>
                        </div>


                    </div>
                    {/* 3rd */}
                    <div className="w-[270px] h-[230px] rounded-[4px] border-[1px] ">
                        <div className="w-[169px] h-[170px]  ">
                            {/*  image*/}
                            <div className="w-[80px] h-[80px]  ">
                                <div className="w-[58px] h-[58px] bg-black pl-[11px] pt-[11px] ">

                                </div>
                            </div>


                            <div className='w-[169px] h-[66px] gap-[12px]'>
                                <h3 className='font-bold text-[32px] tracking-[4%]  ' >MONEY BACK GUARANTEE </h3>
                                <p className='h-[24px] font-bold text-[32px] tracking-[4%] ' >We reurn money within 30 days</p>

                            </div>
                        </div>


                    </div>




                </div>



        </div>

    )

}