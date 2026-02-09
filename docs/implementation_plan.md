# Asset Analysis and Organization Plan

Analyze the newly provided photos and documents in `local-assets` to understand their content and propose how they can be integrated into the website.

## Proposed Changes

### Documentation Component
- Analyze staff details from `MAHATHMA PU COLLEGE staff detail - 2026.docx`.
- Use the content from `About Mahathma PU College - Jan - 2026.docx` for the "About Us" section or institution-specific pages.
- Translate or verify Kannada content from `ಮಹಾತ್ಮ ಪದವಿ ಪೂರ್ವ ಕಾಲೇಜು.docx`.

## Staff Section Implementation

### Image Assets
- Create `public/images/staff` directory.
- Copy staff images from `local-assets/Lectures photos and detail/` with normalized names:
    - `puttegowda-m-c.jpg`
    - `swarnagowri-s.jpg`
    - `anitha-h-b.jpg`
    - `radha-m-m.jpeg`
    - `nagendraswamy-j.jpg`
    - `harshitha-r.jpg`

### Component Development
- Create `sections/Staff.tsx` using a premium grid layout.
- Use `next-intl` for all text (names, designations, subjects).

## Gallery Collection Update

### Image Assets
- Create `public/images/gallery/pu-college` directory.
- Copy all valid images (jpg, jpeg, png) from `local-assets/college MAHATHMA Web collection/`.
- Normalize filenames to avoid issues (e.g., `pu-college-1.jpg`, `pu-college-2.jpg`, etc.).

### Component Update
- Update `sections/Gallery.tsx` to use the localized gallery data.
- Ensure the gallery supports filtering by "PU College" or display them in the "All" section.

## Gallery Route Implementation

### Routing
- Create `app/[locale]/gallery/page.tsx`.
- Use `useSearchParams` or similar to detect the `school` or `category` filter from the URL.
- Ensure the gallery route can be shared with a direct filter (e.g., `/gallery?filter=PU College`).

### Navigation
- Update `sections/Gallery.tsx` and `sections/Activities.tsx` to link to the new gallery page.
- Add a "View All" button in the Home page Gallery section that redirects to the full gallery.

## Resend Email Integration

### Infrastructure
- Install `resend` package.
- Create an API route `app/api/send-email/route.ts` to handle POST requests.
- Use an environment variable `RESEND_API_KEY`.

### Integration
- **Registration Form:** Update `handleSubmit` to call the `/api/admission` endpoint (as it already exists and is configured for admissions).
- **Contact Section:** 
    - Add a new "Submit a Query" form in `Contact.tsx`.
    - Create `app/api/contact/route.ts` for general inquiries.
- **Localization:** Add form labels and placeholders for the contact form in `en.json` and `kn.json`.

### Verification
- Test submissions with various inputs.
- Verify that emails are received by the target address.

## Admin Portal Fixes

### Layout Restructuring
- **[NEW]** [layout.tsx](file:///Users/shrivatsabhat/Code/harohalli-edu-web/app/layout.tsx): Create a root layout with `<html>`, `<body>`, and `globals.css` to provide a shell for all routes (including `/admin`).
- **[MODIFY]** [[locale]/layout.tsx](file:///Users/shrivatsabhat/Code/harohalli-edu-web/app/[locale]/layout.tsx): Remove `<html>` and `<body>` tags, keeping only the `NextIntlClientProvider` and `LanguageSwitcher`.

### Admin Routes
- **[MODIFY]** [login/page.tsx](file:///Users/shrivatsabhat/Code/harohalli-edu-web/app/admin/login/page.tsx): Updated to use server-side API for authentication.
- **[MODIFY]** [dashboard/page.tsx](file:///Users/shrivatsabhat/Code/harohalli-edu-web/app/admin/dashboard/page.tsx): Ensured dashboard layout is functional.
- **[NEW]** [/api/admin/login/route.ts](file:///Users/shrivatsabhat/Code/harohalli-edu-web/app/api/admin/login/route.ts): Created secure API to validate comma-separated `ADMIN_USER` and `ADMIN_PASS`.

### Verification
- Navigate to `/admin/login` and verify it displays properly.
- Test login with multiple user/pass combinations from `.env.local`.
- Verify the dashboard loads and sidebar navigation works.
- Check both English and Kannada versions of the main site.
