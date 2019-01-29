import Header from "./Header";

const Layout = ({ children, className }) => {
    
    return(
        <div className="layout-container">
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    { children }
                </div>
            </main>
        </div>
    )
}

export default Layout;