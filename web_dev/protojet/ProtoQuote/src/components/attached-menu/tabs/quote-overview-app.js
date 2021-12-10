// import { CustomerInfo } from '../../overview/customer-information'
// import { EdmRipArea } from '../../overview/edm-rib-areas'
// import { PartOverall } from '../../overview/part-overall'
// import { SpecialToolFeature } from '../../overview/special-tool-feature'
// import { UnitizedManifold } from '../../overview/unitized-manifold'
import { QuoteSelectionMenu } from '../../overview/quote-selector-menu'
import { OverviewContent } from '../../overview/overview-content'

import { Container } from "semantic-ui-react";




export function QuoteOverviewApp(props) {
    return (
        <Container id={props.id} fluid>
            <QuoteSelectionMenu />
            <OverviewContent />
        </Container>
        )
}