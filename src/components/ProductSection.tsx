import { Container } from './Container'
import styles from './ProductSection.module.css'

interface ProductSectionProps {
    children: React.ReactNode
}

export function ProductSection({ children }: ProductSectionProps) {
    return (
        <div className={styles.root}>
            <Container>{children}</Container>
        </div>
    )
}
