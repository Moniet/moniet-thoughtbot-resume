const breakpoints = [300, 576, 768, 992, 1200]
export const minW = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export const maxW = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
