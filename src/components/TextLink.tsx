import Link from 'next/link'
import styles from './TextLink.module.css'

interface TextLinkProps {
    href: string
    children: string
}

export function TextLink({ href, children }: TextLinkProps) {
    return (
        <Link className={styles.root} href={href}>
            {children}
        </Link>
    )
}
