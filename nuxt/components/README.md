# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

### Component Directory Structure
#### Primitives
Layout and Positioning components, with no UI included.  
Examples: `Wrapper`, `Cluster`, `Grid`

#### Partials
Dumb components and their containers.

The dumb components form the foundation of the site's visuals and UI. They have no connection to store, and almost 
always no internal state. Usually start with the word Base.  
Examples: `BaseButton`, `BaseCarousel`.

The containers are smarter, 'application aware' components that contain only logic (no presentation and no impact on
visuals or layout). Used to connect dumb components with the application or maintain state (e.g. StatefulAccordion), or for HoCs.  
Examples: `CarouselContainer`,  `ValidationProvider`.

#### Functional
Components that perform a specific task or function. This is usually some logic or encapsulation.  
Examples: `Suspense`.

#### Prefabs
Full pre-fabricated blocks that can be dropped into pages, usually without the need to pass in configuration.
They often just contain other pre-formatted and pre-configured partials.     
Examples: `TheNavbar`, `TheFooter`, `GiftBanner`, `CurrentPromotionBlock`.

#### Features
Components tied specifically to features. Split into directories that match their feature to keep those components 
together and make them easier to work across at once.  
Examples: `TheLoginForm`, `ProfileButton`, `TheCart`
