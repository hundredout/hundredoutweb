# HundredOut Website File Structure

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── App.tsx                          # Main app entry point
│   │   └── components/
│   │       ├── Header.tsx                   # Site header/navigation
│   │       ├── Hero.tsx                     # Homepage hero section
│   │       ├── HowItWorks.tsx              # How it works section
│   │       ├── WhyHundredOut.tsx           # Main features + rewards banner
│   │       ├── SideActionSection.tsx       # Side bets/stakes section
│   │       ├── FinalCTA.tsx                # Download CTA section
│   │       ├── GearTeaser.tsx              # Gear brand teaser
│   │       ├── Footer.tsx                  # Site footer
│   │       ├── AppFeatures.tsx             # (unused - consolidated)
│   │       ├── MomentsSection.tsx          # (unused - consolidated)
│   │       ├── RewardsSection.tsx          # (unused - consolidated)
│   │       ├── SocialSection.tsx           # (unused - consolidated)
│   │       ├── ClubSection.tsx             # (unused - not on homepage)
│   │       ├── GearSection.tsx             # (unused - not on homepage)
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx   # Image component
│   │       └── ui/                         # Shadcn UI components
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           └── [50+ UI components]
│   │
│   ├── imports/
│   │   ├── BEERS.png                       # Drinks stake image
│   │   ├── CASH.png                        # Cash stake image
│   │   ├── PUSHUPS.png                     # Pushups stake image
│   │   ├── DARES.png                       # Dares stake image
│   │   ├── BRAGGING.png                    # Bragging Rights stake image
│   │   ├── WHATEVER.png                    # Whatever stake image
│   │   └── pasted_text/                    # Design documents
│   │       ├── hundredout-brand-refinement.md
│   │       ├── hundredout-homepage-revised.md
│   │       └── hundredout-homepage-revamp.md
│   │
│   └── styles/
│       ├── theme.css                       # Brand colors, design tokens
│       ├── fonts.css                       # Proxima Nova font imports
│       ├── tailwind.css                    # Tailwind imports
│       └── index.css                       # Global styles
│
├── package.json                            # Dependencies
├── vite.config.ts                          # Vite configuration
├── postcss.config.mjs                      # PostCSS config
└── __figma__entrypoint__.ts               # Auto-generated (do not edit)
```

## Current Homepage Structure (7 sections)

1. **Header** - Navigation
2. **Hero** - "Golf with More Action / More Banter"
3. **HowItWorks** - Process explanation
4. **WhyHundredOut** - Features + rewards banner
5. **SideActionSection** - Side bets/stakes with images
6. **FinalCTA** - Download call-to-action
7. **GearTeaser** - Brand moment
8. **Footer** - Links and info

## Brand Colors

- Coral: #EE455F
- Bright Blue: #45B9ED
- Golf Green: #2D5016
- Dark Navy: #0d1b28

## Typography

- Font: Proxima Nova
- Weights: Black (900), Semi-bold (600), Regular (400)
