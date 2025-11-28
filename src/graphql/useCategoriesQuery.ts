import useSWR, { type Fetcher } from 'swr'
import { CategoriesQuery } from '@/__generated__/beehive'
import { createBeehiveSdk } from './client'

export function useCategoriesQuery() {
    const fetcher: Fetcher<CategoriesQuery, string> = async () => {
        const beehive = createBeehiveSdk()
        return await beehive.Categories()
    }

    const { data, isLoading, error } = useSWR('Categories', fetcher)

    return { data, isLoading, error }
}
