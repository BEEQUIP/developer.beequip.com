import React from 'react'
import { Container } from './Container'
import styles from './Jumbotron.module.css'

interface JumbotronProps {
    children: React.ReactNode
}

export function Jumbotron(props: JumbotronProps) {
    return (
        <section className={styles.root}>
            <Container>
                <div className={styles['heading-container']}>
                    {props.children}
                </div>
            </Container>
        </section>
    )
}
