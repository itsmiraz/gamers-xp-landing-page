import Header from "@/components/shared/header"


const RootLayout = ({ children }) => {
    return (
        <div
            className="mx-auto max-w-[1927px] relative transition-all duration-300 ease-in-out overflow-hidden">
            <Header />
            {children}
        </div>
    )
}

export default RootLayout