import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Heading } from './Heading'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    deck: string
    icon: IconDefinition
    title: string
    url: string
}

export function ProductCard({ deck, icon, title, url }: ProductCardProps) {
    return (
        <article className={styles.root}>
            <>
                <div className={styles['text-container']}>
                    <Heading level="3">
                        <a className={styles['heading-link']} href={url}>
                            {title}
                        </a>
                    </Heading>
                    <p className={styles.deck}>{deck}</p>
                </div>
                <FontAwesomeIcon
                    className={styles.icon}
                    width="48"
                    height="48"
                    icon={icon}
                />
            </>
        </article>
    )
}
