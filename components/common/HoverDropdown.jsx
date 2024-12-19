export function HoverDropdown({ mainChildren, children }) {
    return (
        <div className="relative group">
            {/* <p className="text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all relative" > */}
                {mainChildren}
            {/* </p> */}
            <div className="absolute group-hover:opacity-100 opacity-0 hidden group-hover:block  group-hover:z-10 bg-accent py-2 px-4 rounded-md">
                <div className="grid grid-cols gap-2 w-full">
                    {
                        children
                    }
                    {/* <Link href="/elek" className="text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all">
                        Elektromobillər
                    </Link>
                    <Link href="/qeydiyyat-nisanlariii" className="text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all">
                        Qeydiyyat nişanları
                    </Link> */}
                </div>
            </div>
        </div>
    )
}