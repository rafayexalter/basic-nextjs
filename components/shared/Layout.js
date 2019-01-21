import Header from "./Header";

const Layout = ({ children, title }) => {
    return(
        <div>
            <h2>{title}</h2>

            <Header />

            { children }
            <style jsx global>{`
                body{
                    font-family: Arial;
                }
                `}
            </style>
        </div>
    )
}

export default Layout;