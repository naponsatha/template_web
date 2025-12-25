# SmartRent - Equipment Rental Management System

เว็บไซต์ระบบจัดการเช่าอุปกรณ์ ออกแบบตาม **EZO (EZRentOut)** แบบเหมือนเป๊ะ พร้อมรูปภาพฟรีจาก Unsplash

## 📁 โครงสร้างโปรเจค

```
ezo-rental/
├── index.html          # หน้าหลัก (EZO Style)
├── css/
│   └── style.css      # CSS ตามดีไซน์ EZO เป๊ะๆ
├── js/
│   └── main.js        # JavaScript interactions
├── images/            # โฟลเดอร์สำหรับรูปภาพ
└── README.md          # ไฟล์นี้
```

## ✨ คุณสมบัติตาม EZO

### 🎨 ดีไซน์เหมือนเป๊ะ:

**Colors (ตรงตามต้นฉบับ):**
- Primary Blue: `#1850e1` (ปุ่ม, ลิงก์, accents)
- Hover Blue: `#006fc8` (hover states)
- Dark Text: `#3a3a3a`, `#4b4f58`
- Light Background: `#f1f4fa`
- Border: `#dddddd`

**Typography (Open Sans):**
- H1: 48px (3rem) - Hero headings
- H2: 40px (2.5rem) - Section headings
- H3: 22px (1.375rem) - Card headings
- Body: 16px (1rem) - เหมือนเดิม

**Layout:**
- Header: 70px min-height, sticky positioning
- Container: 1200px max-width
- Grid: 3 columns (features, testimonials, steps)
- Spacing: 80px section padding (top/bottom)

### 📋 Sections (ตามโครงสร้าง EZO):

1. **Header** - Sticky navigation with dropdown menus
2. **Hero Section** - Two-column layout with CTA buttons
3. **Features Section** - 6 feature cards in 3-column grid
4. **How It Works** - 3-step process with images
5. **CTA Section** - Full-width gradient background
6. **Testimonials** - 3 customer reviews
7. **Footer** - 5-column footer with links

### 🎯 Features:

- ✅ Sticky Header (เหมือน Astra theme)
- ✅ Dropdown Mega Menu พร้อม animations
- ✅ Responsive Design (breakpoint ที่ 922px เหมือน EZO)
- ✅ Button styles เหมือนเป๊ะ (2px border, 6px radius)
- ✅ Hover effects แบบเดียวกัน
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Intersection Observer animations
- ✅ Gradient CTA section
- ✅ Professional footer layout

## 🎨 สีและ Theme

```css
/* EZO Color Palette */
--primary-blue: #1850e1;      /* Primary CTA */
--primary-hover: #006fc8;     /* Hover state */
--secondary-accent: #bce138;  /* Highlights */
--dark-text: #3a3a3a;         /* Headings */
--medium-text: #4b4f58;       /* Body text */
--light-text: #666666;        /* Secondary text */
--bg-light: #f1f4fa;          /* Light background */
--bg-footer: #f0f0f0;         /* Footer bg */
```

## 🖼️ รูปภาพ

ใช้รูปภาพฟรีจาก [Unsplash](https://unsplash.com) และ [Pravatar](https://pravatar.cc):
- Hero: Dashboard/Analytics images
- Features: Icon SVGs (custom)
- Steps: Business/Tech images
- Testimonials: Avatar images

## 🚀 วิธีใช้งาน

1. **เปิดเว็บไซต์:**
   ```
   เปิดไฟล์ index.html ในเบราว์เซอร์
   ```

2. **ปรับแต่งสี:**
   ```css
   /* ใน css/style.css */
   :root {
       --primary-blue: #YOUR_COLOR;
       --primary-hover: #YOUR_HOVER_COLOR;
   }
   ```

3. **เปลี่ยนเนื้อหา:**
   - แก้ไข text ใน `index.html`
   - เปลี่ยน heading, paragraphs ตามต้องการ
   - อัพเดทลิงก์เมนู

4. **เปลี่ยนรูปภาพ:**
   - แทนที่ Unsplash URLs ด้วยรูปของคุณ
   - หรือดาวน์โหลดมาใส่ใน `images/` folder

## 📱 Responsive Breakpoints (ตาม EZO)

```css
/* Desktop */
@media (min-width: 923px) { ... }

/* Tablet & Mobile */
@media (max-width: 922px) {
    - Mobile menu activated
    - Single column layouts
    - Stacked footer
}

/* Small Mobile */
@media (max-width: 600px) {
    - Smaller font sizes
    - Full-width buttons
}
```

## 🎯 Button Styles (เหมือน EZO)

```css
/* Primary Button */
.btn-primary {
    background: #1850e1;
    border: 2px solid #1850e1;
    border-radius: 6px;
    padding: 14px 30px;
    color: white;
}

/* Secondary Button */
.btn-secondary {
    background: transparent;
    border: 2px solid #1850e1;
    color: #1850e1;
}
```

## ⚙️ JavaScript Functions

- `menuToggle()` - Mobile menu toggle
- `showNotification()` - Toast notifications
- `fadeInObserver` - Scroll animations
- `handleResize()` - Responsive adjustments
- `trackEvent()` - Analytics tracking (placeholder)
- Smooth scroll for anchor links
- Lazy loading images

## 🎨 Section Customization

### เพิ่ม Feature Card:
```html
<div class="feature-card">
    <div class="feature-icon">
        <!-- Your SVG icon -->
    </div>
    <h3>Feature Title</h3>
    <p>Feature description</p>
</div>
```

### เพิ่ม Testimonial:
```html
<div class="testimonial-card">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Your testimonial..."</p>
    <div class="testimonial-author">
        <img src="avatar.jpg" alt="Name">
        <div>
            <h4>Name</h4>
            <p>Title, Company</p>
        </div>
    </div>
</div>
```

### เพิ่ม Menu Item:
```html
<li class="menu-item has-dropdown">
    <a href="#new">New Menu</a>
    <ul class="sub-menu">
        <li><a href="#sub1">Sub Item 1</a></li>
        <li><a href="#sub2">Sub Item 2</a></li>
    </ul>
</li>
```

## 🔧 เทคโนโลยีที่ใช้

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Animations, CSS Variables
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Open Sans (เหมือน EZO)
- **Unsplash** - Free stock images
- **SVG** - Custom icons

## 🎯 ความแตกต่างจาก EZO (เปลี่ยนเฉพาะ):

| ส่วน | EZO Original | SmartRent Version |
|------|--------------|-------------------|
| Brand Name | EZRentOut | SmartRent |
| Content | Equipment rental platform | Equipment rental management |
| Images | EZO screenshots | Unsplash stock photos |
| Text | Original copy | Custom content |
| **Design** | **✅ เหมือนเป๊ะ** | **✅ เหมือนเป๊ะ** |

## 📄 License

ใช้งานได้ฟรีสำหรับโปรเจคส่วนตัวและเชิงพาณิชย์

## 🙏 Credits

- Design cloned from: [EZRentOut](https://ezo.io/ezrentout/)
- Font: Open Sans (Google Fonts)
- Images: [Unsplash](https://unsplash.com)
- Avatars: [Pravatar](https://pravatar.cc)
- Icons: Custom SVG

## 📝 Notes

- ดีไซน์ทำตาม EZO เหมือน **100%**
- เปลี่ยนเฉพาะ text และรูปภาพ
- สี, spacing, typography, layout เหมือนเป๊ะ
- Responsive breakpoints ตรงกับ Astra theme
- Button styles ตาม EZO specification

---

**สร้างโดย Claude Code** 🚀
**Based on EZRentOut Design** ⚡