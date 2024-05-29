export const PrimaryButton = ({ children }) => {
    return <button className="bg-primary px-6 text-[22px] py-2 h-fit w-fit text-black font-red-rose font-bold">
        {children}
    </button>
}
export const SecondaryButton = ({ children }) => {
    return <button className="relative font-red-hat-display uppercase font-bold text-[20px] px-6 py-4 h-fit w-fit bg-gradient-to-r from-[#000000]/50 to-[#000000]/0">
        <div className="w-[4px] h-full left-0 top-0 absolute bg-primary"></div>
        {children}
    </button>
}