import {
    faCalculator,
    faNetworkWired,
    faStore,
} from '@fortawesome/free-solid-svg-icons'
import { Heading } from '@/components/Heading'
import { Jumbotron } from '@/components/Jumbotron'
import { MessageCard } from '@/components/MessageCard'
import { ProductCard } from '@/components/ProductCard'
import { ProductGrid } from '@/components/ProductGrid'
import { ProductSection } from '@/components/ProductSection'
import { TextLink } from '@/components/TextLink'

export default function HomePage() {
    return (
        <>
            <Jumbotron>
                <Heading level="1" tag="h1">
                    Start building with Beequip integrations
                </Heading>
                <Heading level="2" tag="h2" variant="light">
                    Beequip helps you sell equipment using our widgets and
                    API’s. Explore how to integrate your software with ours.
                </Heading>
            </Jumbotron>
            <ProductSection>
                <ProductGrid>
                    <ProductCard
                        deck="Let your website’s visitors see our leasing
                                prices for your equipment."
                        icon={faCalculator}
                        title="Embed our leasing widgets"
                        url="/leasing/widgets"
                    />
                    <ProductCard
                        deck="Create your own custom lease calculator."
                        icon={faNetworkWired}
                        title="Use our leasing API"
                        url="/leasing/api"
                    />
                    <ProductCard
                        deck="Push equipment to our marketplace."
                        icon={faStore}
                        title="Use our marketplace API"
                        url="/marketplace"
                    />
                    <MessageCard
                        deck={
                            <>
                                If you want to integrate in any other way, give
                                us a call at{' '}
                                <TextLink href="tel:0103400844">
                                    010 - 340 0844
                                </TextLink>
                                .
                            </>
                        }
                        title="Other integrations"
                    />
                </ProductGrid>
            </ProductSection>
        </>
    )
}
