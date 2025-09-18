# Downloads Directory

This directory contains downloadable resources for the Ray Galloway Bookkeeping website.

## Files to Add:

### Lead Magnet PDF
- **File**: `7-financial-tricks-delaware-service-businesses.pdf`
- **Description**: The main lead magnet PDF guide
- **Size**: Recommended 15-20 pages
- **Content**: Financial tips specifically for Delaware and Columbus area service businesses

### Bonus Materials (Optional)
- **File**: `delaware-business-tax-checklist.pdf`
- **Description**: Year-end tax preparation checklist
- **File**: `quickbooks-setup-guide.pdf`
- **Description**: Step-by-step QuickBooks setup for service businesses

## Implementation Notes:

1. **PDF Creation**: Create the actual PDF content using:
   - Canva (easy templates)
   - Adobe InDesign (professional)
   - Google Docs/Word (export as PDF)

2. **File Naming**: Use descriptive, SEO-friendly names
   - No spaces (use hyphens)
   - Include relevant keywords
   - Keep under 50 characters

3. **File Size**: Keep PDFs under 5MB for fast downloads

4. **Security**: Consider password protection for premium content

5. **Analytics**: Track downloads using Google Analytics events

## Integration:

The download functionality is integrated in:
- `/src/app/free-guide/page.tsx` (main landing page)
- `/src/components/LeadMagnetForm.tsx` (reusable form)
- `/src/components/LeadMagnetSection.tsx` (homepage section)

When the actual PDF is added, update the download buttons to link to:
`/downloads/7-financial-tricks-delaware-service-businesses.pdf`
