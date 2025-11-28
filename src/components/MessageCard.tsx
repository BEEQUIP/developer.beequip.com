import React from 'react'
import { Heading } from './Heading'
import styles from './MessageCard.module.css'

interface MessageCardProps {
    deck: React.ReactNode
    title: string
}

export function MessageCard({ deck, title }: MessageCardProps) {
    return (
        <article className={styles.root}>
            <Heading level="3">{title}</Heading>
            <p className={styles.deck}>{deck}</p>
        </article>
    )
}
