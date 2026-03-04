import styles from './ProductGrid.module.css'

interface ProductGridProps {
    children: React.ReactNode
}

export function ProductGrid({ children }: ProductGridProps) {
    return <div className={styles.root}>{children}</div>
}
