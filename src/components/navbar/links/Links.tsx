import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

export interface LinkItem {
    title: string;
    path: string;
}

const Links = () => {
    const links: LinkItem[] = [
        { title: "Homepage", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" },
    ];

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title}></NavLink>
            ))}
            {session ? (
                <>
                    {isAdmin && (
                        <NavLink item={{ title: "Admin", path: "/admin" }} />
                    )}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
            )}
        </div>
    );
};

export default Links;
