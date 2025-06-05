# Skip Selection Redesign

A modern, responsive React application for selecting skip hire services. This project completely redesigns the original skip selection page with improved UI/UX, mobile responsiveness, and clean, maintainable code.

## 🎯 Project Overview

This is a complete redesign of the skip selection page that maintains all original functionality while introducing:
- Modern, clean design language
- Fully responsive layout for mobile and desktop
- Improved user experience with clear visual hierarchy
- Real-time data fetching from the API
- Interactive elements and animations
- Accessibility considerations

## 🚀 Features

### Core Functionality
- **Dynamic Data Loading**: Fetches skip data from the live API endpoint
- **Skip Selection**: Users can select from available skip sizes
- **Price Calculation**: Automatic calculation of total prices including VAT
- **Sorting Options**: Sort by size or price
- **Progress Tracking**: Visual progress indicator showing current step

### UI/UX Improvements
- **Modern Card Design**: Clean, card-based layout with hover effects
- **Authentic Skip Images**: Real We Want Waste skip container photos based on size categories
- **Visual Hierarchy**: Clear typography and spacing for better readability
- **Interactive Elements**: Smooth animations and transitions
- **Loading States**: Professional loading spinner during data fetch
- **Error Handling**: User-friendly error messages with retry functionality
- **Popular Options**: Highlighted "Most Popular" badges for common sizes
- **Image Fallbacks**: Graceful degradation if images fail to load

### Responsive Design
- **Mobile First**: Optimized for mobile devices with touch-friendly interactions
- **Grid Layout**: Responsive grid that adapts from 1 column (mobile) to 3 columns (desktop)
- **Navigation**: Horizontal scrollable progress breadcrumbs on mobile
- **Typography**: Scalable text sizes across all breakpoints

## 🛠 Technical Approach

### Architecture
- **Component-Based**: Modular React components for reusability and maintainability
- **State Management**: React hooks for local state management
- **API Integration**: Async/await pattern for API calls with proper error handling
- **CSS Methodology**: Utility-first CSS approach with custom design system

### Component Structure
```
src/
├── components/
│   ├── Header.js           # Navigation breadcrumbs and branding
│   ├── SkipSelection.js    # Main container with data fetching logic
│   ├── SkipCard.js         # Individual skip option display
│   ├── LoadingSpinner.js   # Loading state component
│   ├── ErrorMessage.js     # Error handling component
│   └── Footer.js           # Footer with company information
├── App.js                  # Main app container
├── index.js               # React entry point
└── index.css              # Global styles and design system
```

### Key Technologies
- **React 18**: Latest React with functional components and hooks
- **CSS3**: Modern CSS with custom properties (CSS variables)
- **Fetch API**: Native browser API for HTTP requests
- **CSS Grid & Flexbox**: Modern layout techniques for responsiveness

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563eb (brand color, buttons, highlights)
- **Secondary Green**: #10b981 (success states, popular badges)
- **Accent Orange**: #f59e0b (skip imagery, warnings)
- **Gray Scale**: #f9fafb to #111827 (text, backgrounds, borders)

### Typography
- **Font Family**: Inter (professional, readable)
- **Scale**: Modular type scale from 0.75rem to 2.25rem
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Layout
- **Grid System**: CSS Grid with responsive breakpoints
- **Spacing Scale**: 0.25rem to 6rem in logical increments
- **Border Radius**: Consistent rounded corners (0.375rem to 1rem)
- **Shadows**: Layered shadow system for depth and hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column grid, stacked navigation)
- **Tablet**: 640px - 1024px (2 column grid, horizontal navigation)
- **Desktop**: > 1024px (3 column grid, full layout)

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone/Download the project files**
   ```bash
   # Navigate to the project directory
   cd skip-selection-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will automatically reload when you make changes

### Build for Production
```bash
npm run build
```

## 🖼️ Image Configuration

The application supports configurable image base URLs for different deployment environments:

### Environment Variable Setup

Create a `.env` file in the project root to configure the image base URL:

```bash
# For local development (default - images served from public folder)
REACT_APP_IMAGE_BASE_URL=

# For production with CDN
REACT_APP_IMAGE_BASE_URL=https://cdn.yoursite.com

# For production with different domain
REACT_APP_IMAGE_BASE_URL=https://assets.yoursite.com

# For staging environment
REACT_APP_IMAGE_BASE_URL=https://staging-assets.yoursite.com
```

### Usage Examples

- **Local Development**: Leave `REACT_APP_IMAGE_BASE_URL` empty or unset to serve images from the `public/images/` folder
- **Production with CDN**: Set to your CDN domain to load images from a content delivery network
- **Different Domain**: Point to a separate assets server or subdomain

### How It Works

The `SkipCard` component automatically prepends the base URL to all image paths:
- If `REACT_APP_IMAGE_BASE_URL` is empty: `/images/4-yarder-skip.jpg`
- If `REACT_APP_IMAGE_BASE_URL` is set: `https://cdn.yoursite.com/images/4-yarder-skip.jpg`

This allows for flexible image hosting without code changes between environments.

## 🌟 Key Improvements Over Original

### Visual Design
- **Modern Aesthetics**: Clean, contemporary design with proper whitespace
- **Better Information Hierarchy**: Clear visual distinction between elements
- **Consistent Branding**: Professional color scheme and typography
- **Interactive Feedback**: Hover states, selections, and animations

### User Experience
- **Faster Decision Making**: Clear price display and feature comparison
- **Mobile Optimization**: Touch-friendly interface with proper spacing
- **Visual Feedback**: Loading states, error handling, and success indicators
- **Accessibility**: Proper contrast ratios and semantic HTML

### Technical Quality
- **Performance**: Optimized component rendering and API calls
- **Maintainability**: Modular components with single responsibilities
- **Scalability**: Reusable design system and component architecture
- **Error Resilience**: Proper error boundaries and fallback states

## 🔮 Future Enhancements

Potential improvements for future iterations:
- Add skip size comparison tool
- Implement advanced filtering (by features, price range)
- Add customer reviews and ratings
- Include delivery calendar integration
- Implement progressive web app features
- Add analytics and conversion tracking

## 📊 API Integration

The application integrates with the We Want Waste API:
- **Endpoint**: `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- **Response Format**: JSON array of skip objects
- **Error Handling**: Graceful fallbacks for network issues
- **Price Calculation**: Dynamic VAT calculation based on API data

## 🎯 Conclusion

This redesign transforms the original skip selection interface into a modern, user-friendly experience while maintaining all essential functionality. The focus on responsive design, clear information architecture, and smooth interactions creates a professional impression that should improve conversion rates and user satisfaction.