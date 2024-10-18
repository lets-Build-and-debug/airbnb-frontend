import { Link, NavLink } from "react-router-dom"

export const NavigationBar = () => {
    return <div className="pt-5 flex flex-col border-b fixed top-0 right-0 left-0 mb-12 z-10">

        <div className="flex px-10  md:px-12 ">

            {/* images */}
            <div className="grow shrink-0 basis-[140px] flex">

                {/* images1 */}
                <div className=" w-[100px] h-auto flex flex-col justify-center ">
                    <img src="/images/airbnb1.png" className="w-full h-full object-contain" />
                </div>

                {/* image2 */}
                {/* <div className=" flex flex-col justify-center w-[70px]">
                    <img src="/images/airbnb2.png" className="w-full h-full object-contain"/>
                </div> */}

            </div>
            {/* images end */}

            {/* mid bar */}
            <div className="flex justify-center flex-col">
                <div className=" md:block hidden">
                    <MidBar />
                </div>
            </div>
            {/* mid bar end */}


            {/* right bar */}
            <div className="grow shrink-0 basis-[140px]">
                <div className="flex flex-row-reverse gap-6 ">


                    <div className="flex justify-center items-center border rounded-full hover:shadow-md hover:shadow-gray-300 cursor-pointer pr-2 pl-4 py-1.5 gap-3 border">
                        <div className="flex flex-col w-[18px] h-[18px] justify-center ">
                            <img src="/images/3lines.png" />
                        </div>
                        <div className="w-[40px] h-[40px] flex justify-center">
                            <img src="/images/avatarIcon.png" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="w-[20px] h-[20px]">
                            <img src="/images/globeIcon.png" />
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="text-black font-medium text-sm">
                            <Link tp="/Stays">
                                Airbnb your home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* right bar end */}



        </div>
        <div className="md:hidden">
            <div className=" flex justify-center gap-5 mx-8 ">
                {/* col mid bar  */}
                <MidBar />
            </div>
        </div>

        <div className={`flex justify-center hidden sm:block`}>
            <SearchBar />
        </div>
    </div>
}

const MidBar = () => {
    return <div>
        <div className={` text-center grow-0 shrink-1 basis-[24px]`}>
            <div className="flex gap-6 mx-8 text-base">
                <div>
                    <NavLink to="/Stays" className={({ isActive }) =>
                        isActive ? "font-medium text-black " : "font-light text-gray-400 "
                    }>
                        Stays
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Experiences" className={({ isActive }) =>
                        isActive ? "font-medium text-black" : "font-light text-gray-400"
                    }>
                        Experiences
                    </NavLink>
                </div>
            </div>
        </div>
    </div>

}

const SearchBar = () => {
    return <div className="flex w-full justify-center px-10 mt-8 mb-8">
        <div className="flex grow w-[650px] max-w-[860px] gap-0.5 border rounded-full h-[70px] items-center bg-white shadow-lg">

            <div className="flex-[1_1_420px] w-full hover:bg-zinc-200 rounded-full h-full  flex flex-col justify-center">
                <div className="  flex flex-col justify-center  h-8 px-8 ">
                    <div className="text-xs font-medium text-black  ">
                        Where
                    </div>
                    <div className="text-[15px] text-gray-500 whitespace-nowrap">
                        Search destinations
                    </div>
                </div>
            </div>

            <div className="flex-[1_1_250px] w-full hover:bg-zinc-200 rounded-full h-full  flex flex-col justify-center">
                <div className=" flex flex-col justify-center border-l hover:border-transparent h-8 px-8">
                    <div className="text-xs font-medium text-black ">Check in</div>
                    <div className="text-[15px] text-gray-500 whitespace-nowrap">Add dates</div>
                </div>
            </div>

            <div className="flex-[1_1_250px] w-full hover:bg-zinc-200 rounded-full h-full  flex flex-col justify-center ">
                <div className=" flex flex-col justify-center border-l border-r hover:border-transparent h-8 px-8">
                    <div className="text-xs font-medium text-black">Check in</div>
                    <div className="text-[15px] text-gray-500 whitespace-nowrap">Add dates</div>
                </div>
            </div>

            <div className="flex-[1_1_420px] w-full hover:bg-zinc-200 rounded-full h-full  flex flex-col justify-center">
                <div className=" flex justify-between items-center pl-8 pr-2">

                    <div className="flex flex-col justify-center">
                        <div className="text-xs font-medium text-black">Who</div>
                        <div className="text-[15px] text-gray-500 ">Add guests</div>
                    </div>

                    <div className="rounded-full bg-red-500 hover:bg-red-600 w-[45px] h-[45px] flex justify-center">
                        <div className="flex flex-col justify-center">
                            <img src="/images/searchlogo.png" className="w-[22px] h-[22px] " />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

