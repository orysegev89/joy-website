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
