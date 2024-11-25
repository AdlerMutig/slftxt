"use client";
import { useState } from "react";
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

    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}></NavLink>
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink
                        item={{ title: "Login", path: "/login" }}
                    ></NavLink>
                )}
            </div>
            <button
                className={styles.menuButton}
                onClick={() => setOpen((prev) => !prev)}
            >
                Menu
            </button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
