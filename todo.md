# Joy Website - Development TODO

## Phase 1: Design System & Layout
- [x] Set up color scheme (black background, white text)
- [x] Configure Tailwind theme for Joy branding
- [x] Create global layout with navigation (ABOUT | DIRECTORS | CONTACT)
- [x] Add Joy logo to header

## Phase 2: Core Pages
- [x] Home page with hero section
- [x] Video carousel component for home page
- [x] About page with different background
- [x] Directors landing page
- [ ] Individual director page template
- [x] Contact page with form

## Phase 3: Video Integration
- [ ] Set up video player component
- [ ] Implement carousel navigation (dots indicator)
- [ ] Add video thumbnails/posters
- [ ] Optimize video loading (lazy loading)
- [ ] Prepare for Cloudflare Stream integration

## Phase 4: Content Structure
- [ ] Create data structure for directors
- [ ] Create data structure for videos
- [ ] Add sample content from Keynote
- [ ] Implement dynamic routing for director pages

## Phase 5: Responsive Design
- [ ] Mobile navigation
- [ ] Tablet layouts
- [ ] Desktop optimization
- [ ] Test video playback on all devices

## Phase 6: Polish & Performance
- [ ] Smooth page transitions
- [ ] Loading states
- [ ] Error handling
- [ ] Performance optimization
- [ ] SEO meta tags

## Future: CMS Integration (Post-MVP)
- [ ] Set up Sanity CMS
- [ ] Create director schema
- [ ] Create video schema
- [ ] Connect frontend to CMS
- [ ] Admin interface for adding directors

## Immediate Fixes
- [x] Add About page route to App.tsx
- [x] Add Directors page route to App.tsx
- [x] Add Contact page route to App.tsx

## Logo Integration
- [x] Update Navigation component to use real Joy Productions logo
- [x] Ensure logo is properly sized and positioned in top-left

## Mux Video Integration
- [x] Install @mux/mux-player-react package
- [x] Create video data structure with Mux playback IDs
- [x] Update VideoCarousel to use Mux Player
- [x] Add video titles and director names
- [ ] Test video playback and carousel navigation

## Video Player UI Refinement
- [x] Hide all Mux player controls except center play button
- [x] Remove player frame/chrome for cleaner look
- [x] Only show play button when video is paused

## Video Player Auto-Play Update
- [x] Implement auto-play when video is shown
- [x] Remove all visible controls (including play button)
- [x] Add click-to-pause/play functionality
- [x] Ensure no controls appear on hover or during playback

## About Page Redesign
- [x] Add Mux video background to About page
- [x] Add content overlay with company description
- [x] Style text overlay to match Keynote design
- [x] Ensure video loops and auto-plays

## Logo Update
- [x] Update Joy logo to include "PRODUCTIONS" subtitle
- [x] Match logo style from Keynote presentation
- [x] Apply updated logo across all pages

## Director Profile Pages
- [x] Copy all portfolio images to project public folder
- [x] Create directors data structure with bios and portfolio images
- [x] Create individual director profile page component
- [x] Add routing for /directors/[name] pages
- [x] Test all three director pages (Ella, Maurus, Axel)

## Logo and Directors Page Fixes
- [x] Update logo SVG to match Keynote design (stylized JOY with blue glowing O and star)
- [x] Fix Directors page layout (quote left, image right pattern)
- [x] Ensure logo appears consistently across all pages

## Homepage Tagline Overlay
- [x] Add text overlay to video carousel: "Joy is an AI production company built by people who have spent their careers making commercials."
- [x] Position text in left/center area matching Keynote design
- [x] Style text with appropriate size and readability
- [x] Add multi-line tagline support with line breaks

## Static Image Carousel Slide
- [x] Update carousel data structure to support both videos and static images
- [x] Add rhino image as carousel slide with tagline
- [x] Update VideoCarousel component to render both media types

## Carousel Text Display Fix
- [x] Remove title and director text overlays from video slides that don't have taglines
- [x] Only show text overlay when tagline exists
- [x] Fix rhino image path - currently showing black background instead of image

## Video Loading Performance Optimization
- [x] Optimize HLS.js configuration for faster initial buffering
- [x] Implement video preloading for carousel
- [x] Optimize About page video loading
- [x] Reduce time to first frame for all videos
- [x] Test video loading speed on both pages

## Critical Performance & Mobile Fixes
- [x] Implement instant video playback with aggressive preloading
- [x] Add loading spinner for immediate visual feedback
- [x] Optimize HLS.js for zero-delay playback
- [x] Fix mobile responsiveness for homepage carousel
- [x] Fix mobile responsiveness for About page
- [x] Fix mobile responsiveness for Directors pages
- [x] Test all pages on mobile viewport (375px, 414px widths)
- [x] Ensure text is readable and properly sized on mobile
- [x] Fix navigation and layout centering on mobile

## UI Cleanup
- [x] Remove carousel dot indicators from homepage for cleaner look

## Typography Adjustments
- [x] Increase "Powered by AI. Driven by Joy." tagline size by 50%

## Layout Adjustments
- [x] Reposition carousel tagline to upper-left area to match Keynote presentation
- [x] Make tagline text larger and left-aligned
- [x] Ensure proper spacing from top and left edges

## Text Size Corrections
- [x] Reduce tagline text size to match Keynote (currently too large)
- [x] Make container narrower for taller, narrower text block
- [x] Match exact proportions from Keynote presentation

## Rhino Slide Tagline
- [x] Add tagline to rhino slide: "We work with brands who are ready to embrace AI without abandoning the creative process they trust."
- [x] Ensure text matches same narrow container and size as other slides

## Powered by AI Tagline Fixes
- [x] Move "Powered by AI. Driven by Joy." to bottom center (not bottom-left)
- [x] Increase font size to match Keynote screenshots

## Logo Update
- [x] Extract logo from PDF file
- [x] Ensure transparent background
- [x] Replace current logo in website

## Directors Dropdown Menu
- [x] Convert Directors nav item to dropdown menu
- [x] List all directors/producers in dropdown
- [x] Ensure mobile-friendly dropdown behavior

## Dropdown Clickability Fix
- [x] Ensure dropdown menu items are clickable and navigate properly
- [x] Fix any z-index or pointer-events issues

## Dropdown Navigation Fix
- [x] Prevent Directors button from navigating to /directors page
- [x] Show dropdown menu instead of navigating
- [x] Keep "View All Directors" option in dropdown for full page access
