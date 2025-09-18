# Ray Galloway Bookkeeping Website - Setup Guide

## 🚀 Quick Start

This guide will help you customize the website with Ray's actual content, photos, and business information.

## 📋 Table of Contents

- [Photos & Images](#photos--images)
- [Business Information](#business-information)
- [Contact Information](#contact-information)
- [Calendly Integration](#calendly-integration)
- [Testimonials & Reviews](#testimonials--reviews)
- [Service Areas](#service-areas)
- [SEO & Meta Tags](#seo--meta-tags)
- [Lead Magnet System](#lead-magnet-system)
- [Email Integration](#email-integration)

---

## 📸 Photos & Images

### Ray's Profile Photo

**File to edit:** `src/components/AboutSection.tsx`

**Current code (lines 12-20):**
```tsx
<PhotoUpload 
  placeholder="RG"
  onPhotoChange={(file) => {
    if (file) {
      console.log('Photo uploaded:', file.name);
      // Here you would typically upload to your server
    }
  }}
/>
```

**Replace with:**
```tsx
<div className='w-64 h-64 rounded-xl shadow-lg overflow-hidden'>
  <Image
    src="/images/ray-profile.jpg"
    alt="Ray Galloway - QuickBooks ProAdvisor"
    width={256}
    height={256}
    className="object-cover w-full h-full"
  />
</div>
```

**Steps:**
1. Add Ray's professional headshot to `public/images/ray-profile.jpg`
2. Recommended size: 512x512px or larger (square aspect ratio)
3. Format: JPG or PNG
4. Add the import at the top: `import Image from 'next/image';`

### Business Logo (Optional)

**Files to update:**
- `src/components/Footer.tsx` (lines 11-15)
- `src/app/page.tsx` (lines 28-32)

**Current placeholder:**
```tsx
<div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
  <span className='text-qb-green-900 font-bold'>RG</span>
</div>
```

**Replace with logo:**
```tsx
<Image
  src="/images/logo.png"
  alt="Ray Galloway Bookkeeping"
  width={32}
  height={32}
  className="rounded-lg"
/>
```

---

## 💼 Business Information

### Company Name & Tagline

**File:** `src/app/page.tsx` (line 31)
**Current:** `Ray Galloway`
**Update to:** Your preferred business name

**File:** `src/components/Footer.tsx` (line 17)
**Current:** `Ray Galloway`
**Update to:** Match your business name

### About Section Content

**File:** `src/components/AboutSection.tsx` (lines 40-72)

**Key areas to customize:**
- **Personal background** (lines 40-45): Update with Ray's actual story
- **Education details** (lines 47-52): Verify degree and certifications
- **Local references** (lines 54-66): Add specific Delaware/Columbus details
- **Business experience** (lines 68-72): Update with actual client count and years

### Service Descriptions

**File:** `src/components/ServicesSection.tsx`
**Update:** Service offerings, pricing hints, and process descriptions

---

## 📞 Contact Information

### Phone Number

**Files to update:**
- `src/components/ContactSection.tsx` (line 222)
- `src/components/Footer.tsx` (line 61)
- `src/app/book-a-call/page.tsx` (line 185)

**Current:** `(555) 123-4567`
**Replace with:** Ray's actual business phone

### Email Address

**Files to update:**
- `src/components/ContactSection.tsx` (line 244)
- `src/components/Footer.tsx` (line 65)

**Current:** `ray@gallowaybookkeeping.com`
**Replace with:** Ray's actual email address

### Business Address (Optional)

**File:** `src/components/Footer.tsx` (lines 69-71)
**Current:** `Delaware, OH & Columbus Area`
**Update to:** Specific address or keep as service area

---

## 📅 Calendly Integration

### Step 1: Get Your Calendly Link

1. Set up your Calendly account at [calendly.com](https://calendly.com)
2. Create a 30-minute "Free Consultation" meeting type
3. Copy your Calendly scheduling link (e.g., `https://calendly.com/ray-galloway/consultation`)

### Step 2: Update Components

**File:** `src/components/CalendlyModal.tsx` (line 18)
**Current:** `calendlyUrl = 'https://calendly.com/your-link'`
**Replace with:** Your actual Calendly URL

**File:** `src/app/book-a-call/page.tsx` (lines 95-110)
**Replace the placeholder div with:**
```tsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/your-calendly-link"
  style={{minWidth: '320px', height: '630px'}}
></div>
<script 
  type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  async
></script>
```

### Step 3: Test Integration

1. Visit `/book-a-call` page
2. Verify the calendar widget loads
3. Test booking a sample appointment

---

## ⭐ Testimonials & Reviews

### Client Testimonials

**File:** `src/components/TrustSection.tsx` (lines 21-95)

**Current placeholders:**
- John Miller, Miller Construction
- Sarah Kim, Kim's Kitchen  
- David Thompson, Thompson Consulting

**Replace with actual client testimonials:**
```tsx
<p className='text-sm text-muted-foreground mb-4 italic'>
  "[Actual client testimonial quote]"
</p>
<div className='flex items-center'>
  <div className='w-10 h-10 bg-qb-green-100 rounded-full flex items-center justify-center mr-3'>
    <span className='text-primary font-semibold text-sm'>[Initials]</span>
  </div>
  <div>
    <p className='font-semibold text-sm'>[Client Name]</p>
    <p className='text-xs text-muted-foreground'>
      [Business Name, Location]
    </p>
  </div>
</div>
```

### Google Reviews Integration

**File:** `src/components/TestimonialsSection.tsx`
**Add:** Google Reviews widget or individual review components

---

## 🗺️ Service Areas

### Local Cities/Areas

**Files to update:**
- `src/components/Footer.tsx` (lines 45-52)
- `src/components/AboutSection.tsx` (lines 131-138)

**Current areas:**
- Delaware, OH
- Powell, OH
- Dublin, OH
- Worthington, OH
- Westerville, OH
- Columbus

**Customize:** Add or remove cities based on your actual service area

---

## 🔍 SEO & Meta Tags

### Page Titles & Descriptions

**File:** `src/app/layout.tsx`
**Add meta tags:**
```tsx
export const metadata = {
  title: 'Ray Galloway Bookkeeping - Delaware, OH | QuickBooks ProAdvisor',
  description: 'Professional bookkeeping services for Delaware and Columbus area businesses. Save 60+ hours per year with expert QuickBooks management.',
  keywords: 'bookkeeping, QuickBooks, Delaware Ohio, Columbus, accounting, small business',
}
```

### Individual Page SEO

**Files to create/update:**
- `src/app/book-a-call/page.tsx` - Add metadata export
- `src/app/dashboard/page.tsx` - Add metadata export
- Future pages: `/pricing`, `/services`, etc.

---

## 📥 Lead Magnet System

The website includes a comprehensive lead magnet system with "7 Financial Tricks for Delaware Service Businesses" PDF download.

### PDF Creation

**Create the actual PDF guide:**
1. **Content Topics** (suggested 15-20 pages):
   - Delaware-specific tax advantages
   - Cash flow optimization strategies
   - QuickBooks shortcuts and tips
   - Expense tracking systems
   - Year-end tax preparation
   - Local business resources
   - Audit-proof documentation

2. **Design Tools:**
   - **Canva**: Easy templates for professional PDFs
   - **Adobe InDesign**: Professional layout design
   - **Google Docs/Word**: Simple option, export as PDF

3. **File Requirements:**
   - **Name**: `7-financial-tricks-delaware-service-businesses.pdf`
   - **Location**: `public/downloads/`
   - **Size**: Keep under 5MB for fast downloads
   - **Format**: PDF with proper bookmarks and navigation

### Lead Capture Forms

**Files that handle lead capture:**
- `src/app/free-guide/page.tsx` - Main landing page
- `src/components/LeadMagnetForm.tsx` - Reusable form component
- `src/components/LeadMagnetSection.tsx` - Homepage section

**Form data collected:**
- First Name (required)
- Last Name
- Email Address (required)
- Business Name
- Business Type (dropdown)

### Email Integration Setup

**Current status:** Forms log to console (development mode)

**To integrate with email service:**

1. **ConvertKit Integration** (recommended):
```tsx
// In LeadMagnetForm.tsx, replace the TODO section:
const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    api_key: 'YOUR_API_KEY',
    email: formData.email,
    first_name: formData.firstName,
    fields: {
      last_name: formData.lastName,
      business_name: formData.businessName,
      business_type: formData.businessType,
    }
  }),
});
```

2. **Mailchimp Integration**:
```tsx
// Alternative integration with Mailchimp API
const response = await fetch('/api/mailchimp-subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Download Functionality

**Current implementation:**
- Forms redirect to thank you page
- Thank you page has download button
- PDF placeholder in `public/downloads/`

**To enable actual downloads:**
1. Add your PDF to `public/downloads/7-financial-tricks-delaware-service-businesses.pdf`
2. Update download button in thank you page:
```tsx
onClick={() => {
  window.open('/downloads/7-financial-tricks-delaware-service-businesses.pdf', '_blank');
}}
```

### Customization Options

**Landing Page Content** (`src/app/free-guide/page.tsx`):
- Hero headline and description
- Benefit list (currently 7 benefits)
- Testimonials (replace with real ones)
- Social proof numbers

**Form Variants** (`src/components/LeadMagnetForm.tsx`):
- `default` - Full form with all fields
- `compact` - Minimal form for sidebars
- Custom styling and messaging

**Homepage Integration** (`src/components/LeadMagnetSection.tsx`):
- Section appears after Benefits section
- Can be moved or duplicated elsewhere
- Includes social proof and testimonials

### Email Sequence Setup

**Recommended follow-up sequence:**
1. **Email 1** (immediate): Download link + welcome
2. **Email 2** (day 2): Implementation tips
3. **Email 3** (day 5): Local Delaware resources
4. **Email 4** (day 7): Case study + consultation offer
5. **Email 5** (day 14): Advanced strategies + booking reminder

### Analytics Tracking

**Track lead magnet performance:**
```javascript
// Add to Google Analytics
gtag('event', 'lead_magnet_download', {
  event_category: 'Lead Generation',
  event_label: 'Financial Guide',
  value: 1
});
```

**Key metrics to monitor:**
- Landing page conversion rate
- Email open rates
- PDF download completion
- Consultation bookings from leads

---

## 📧 Email Integration

### Contact Form Setup

**File:** `src/components/ContactSection.tsx` (lines 33-55)

**Current:** Form shows alert message
**Update to:** Send actual emails

**Options:**
1. **Netlify Forms** (if using Netlify hosting)
2. **Formspree** - Easy email form service
3. **EmailJS** - Client-side email sending
4. **Custom API** - Your own email handling

**Example with Formspree:**
```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  className='space-y-4'
>
  {/* existing form fields */}
</form>
```

### Email Marketing

**Recommended services:**
- **ConvertKit** - For email sequences
- **Mailchimp** - All-in-one marketing
- **ActiveCampaign** - Advanced automation

**Integration points:**
- Newsletter signup in footer
- Lead magnet email capture
- Contact form submissions

---

## 🎯 Professional Certifications

### QuickBooks ProAdvisor Badge

**File:** `src/components/TrustBadges.tsx` (lines 125-135)

**Current:** Placeholder logos
**Replace with:** Official QuickBooks ProAdvisor badge from Intuit

**Steps:**
1. Download official badge from Intuit Partner Portal
2. Add to `public/images/quickbooks-proadvisor-badge.png`
3. Replace placeholder with actual image

### Professional Associations

**Add logos for:**
- AICPA (American Institute of CPAs)
- NACPB (National Association of Certified Public Bookkeepers)
- Local business associations

---

## 🚀 Deployment Checklist

### Before Going Live:

- [ ] Replace all placeholder content
- [ ] Add Ray's professional photo
- [ ] Update all contact information
- [ ] Set up Calendly integration
- [ ] Add real client testimonials
- [ ] Configure email forms
- [ ] Test all booking flows
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Test mobile responsiveness
- [ ] Check page load speeds

### Post-Launch:

- [ ] Submit sitemap to Google
- [ ] Set up Google My Business
- [ ] Monitor form submissions
- [ ] Track Calendly bookings
- [ ] Collect client feedback
- [ ] Regular content updates

---

## 📱 Testing Guide

### Desktop Testing:
- Chrome, Firefox, Safari, Edge
- Test all form submissions
- Verify Calendly modal and page
- Check responsive design

### Mobile Testing:
- iOS Safari, Chrome
- Android Chrome, Samsung Internet
- Test touch interactions
- Verify mobile navigation

### Performance Testing:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

---

## 🆘 Support & Maintenance

### Regular Updates Needed:
- Client testimonials (quarterly)
- Service offerings (as needed)
- Contact information (as needed)
- Photos and content (annually)

### Technical Maintenance:
- Dependency updates (monthly)
- Security patches (as released)
- Performance monitoring (ongoing)
- Backup verification (weekly)

---

## 📞 Need Help?

If you need assistance with any of these customizations:

1. Check the component files mentioned above
2. Look for TODO comments in the code
3. Test changes on development server first
4. Keep backups of working versions

**Remember:** Always test changes locally before deploying to production!
