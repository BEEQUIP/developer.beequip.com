import { GraphQLClient } from 'graphql-request'
import { getSdk, Sdk } from '@/__generated__/beehive'

export function createBeehiveSdk(): Sdk {
    return getSdk(
        new GraphQLClient(process.env.NEXT_PUBLIC_BEEHIVE_ENDPOINT!, {
            credentials: 'include',
        })
    )
}
