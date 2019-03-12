import Header from "./Header";

const Layout = (props) => {

    const {children, className, isAuthenticated, user} = props;

    const headerType = props.headerType || 'default';
    
    return(
        <div className="layout-container">

            <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>

            <main className={`cover ${className}`}>
                <div className="wrapper">
                    { children }
                </div>
            </main>
        </div>
    )
};

export default Layout;