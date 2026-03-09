'use client'

import { useCategoriesQuery } from '@/graphql/useCategoriesQuery'
import { Loader } from './Loader'
import styles from './CategoryTable.module.css'

export const CategoryTable = () => {
    const { isLoading, data } = useCategoriesQuery()

    if (isLoading) return <Loader />

    const categories = data?.categoryGroups

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.header} style={{ width: '48px' }}>
                        Id
                    </th>
                    <th className={styles.header}>Category</th>
                </tr>
            </thead>
            <tbody>
                {categories?.map((category) => {
                    const subcategories = category.categories

                    return (
                        <tr key={category.id}>
                            <td className={styles.cell}>{category.id}</td>
                            <td className={styles.cell}>
                                <details>
                                    <summary>{category.name}</summary>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th
                                                    className={styles.subheader}
                                                >
                                                    Id
                                                </th>
                                                <th
                                                    className={styles.subheader}
                                                >
                                                    Subcategory
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subcategories.map(
                                                (subcategory) => (
                                                    <tr key={subcategory.id}>
                                                        <td
                                                            className={
                                                                styles.cell
                                                            }
                                                        >
                                                            {subcategory.id}
                                                        </td>
                                                        <td
                                                            className={
                                                                styles.cell
                                                            }
                                                        >
                                                            {subcategory.name}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </details>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
