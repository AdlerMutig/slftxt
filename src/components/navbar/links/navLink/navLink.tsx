"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { LinkItem } from "../Links";

interface NavLinkProps {
    item: LinkItem; // Define item prop type as LinkItem
}

const NavLink = ({ item }: NavLinkProps) => {
    const pathName = usePathname();

    return (
        <Link
            href={item.path}
            className={`${styles.container} ${
                pathName === item.path && styles.active
            }`}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;
