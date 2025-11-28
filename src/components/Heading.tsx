import React from 'react'
import styles from './Heading.module.css'

type Level = '1' | '2' | '3'
type Tag = `h${Level}`

interface HeadingProps {
    children: React.ReactNode
    level: Level
    tag?: Tag
    variant?: 'light' | 'strong'
}

export function Heading({
    children,
    level,
    tag,
    variant = 'strong',
}: HeadingProps) {
    const Component = tag ?? `h${level}`

    return (
        <Component
            className={`${styles.root} ${styles[`root--level-${level}`]} ${styles[`root--variant-${variant}`]}`}
        >
            {children}
        </Component>
    )
}
