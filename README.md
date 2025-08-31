Memory Cards – Professional README 
Memory Cards is a lightweight, dependency-free application built with HTML, CSS, and JavaScript that lets you create, view, and persist flash cards (front/back) directly in the browser using localStorage. The project embraces a concise tech stack—HTML for structure, CSS for clean styling, and JavaScript for the card logic and persistence—while remaining approachable for beginners and flexible enough for future enhancements. The core philosophy is to provide a fast, offline-capable tool for building and reviewing simple memorization cards without requiring a server or external services.
<img width="770" height="567" alt="Snap37" src="https://github.com/user-attachments/assets/bb55eab3-8f5e-4a86-9b14-3c11aa9aa5b1" />
Overview
The application presents users with a minimal, distraction-free interface where you can enter a card’s front (the prompt or question) and back (the answer or content) through a straightforward form. Cards appear in a responsive grid, making it easy to skim a collection of items on any screen size. Each card supports per-item actions—view details, and delete—with these actions placed close to the card to optimize the user experience. All data is stored locally in the browser to ensure privacy and offline accessibility. This persistence is achieved via a dedicated localStorage key named memoryCards_v1. Upon loading the page, the app reads from localStorage, reconstructs any previously saved cards, and renders them into the UI to provide a seamless continue-from-last-session experience.

Project Link
https://github.com/saberramim/memorycards

How to Run Locally
Open index.html in your preferred browser (no server is required). Use the form to create new cards. Each submission appends the new card to an in-memory array and persists the updated collection to localStorage automatically.
To reset the stored data, delete the memoryCards_v1 key from localStorage or implement a dedicated reset mechanism in the UI (not included in the initial version).

Data Model and Persistence
Storage key: memoryCards_v1
In-memory structure: an array named cards that holds card objects
Serialization: JSON.stringify(cards) converts the array to a JSON string for storage
Deserialization: JSON.parse(data) converts the stored string back into an array on load
Lifecycle: on every add/delete operation, the app updates the cards array and writes the new JSON string to localStorage; on page load, it reads from localStorage and renders the cards.


How to Create a Card
The interface provides a form with two fields: Front (the prompt or question) and Back (the answer or content). Submit the form to create a new card. The card is immediately added to the in-memory list and persisted to localStorage. The newly created card appears in the grid alongside existing cards and is fully interactive.

Card Interactions
View Details: Expand or reveal additional information about a card as needed.
Delete: Remove a card from the grid and from localStorage.
All actions are designed to be intuitive and accessible, with keyboard and mouse interactions supported.

Design and Accessibility
The UI uses a clean, minimal aesthetic with responsive CSS Grid to adapt to various screen sizes.
Accessible controls and clear labeling aim to support keyboard navigation and screen readers.
The codebase is organized to be approachable for contributors while remaining compact.

Usage Tips and Limitations
No backend server is required; everything runs in the browser. LocalStorage is limited by browser quotas; for very large collections, consider implementing an export/import workflow. If you reset the data, all cards will be lost; you can implement a dedicated reset button in a future iteration or manually clear localStorage.

Potential Enhancements (Future Ideas)
Add search and filter capabilities to quickly locate cards.Implement editing capabilities for existing cards.Introduce tagging, categories, or a Leitner-style spaced repetition system.

Provide export/import options (JSON/CSV) for cross-device syncing.
Add user preferences (themes, card density, font size) and accessibility improvements.
Quick Reference
Project: Memory Cards
Tech stack: HTML, CSS, JavaScript
Persistence: localStorage (memoryCards_v1)
How to run: Open index.html in a browser
Project link: https://github.com/saberramim/memorycards

..
.
Memory Cards 
  Memory Cards  یک برنامه سبک‌وزن، بدون وابستگی و با HTML، CSS و JavaScript است که به شما اجازه می‌دهد کارت‌های حافظه با فرمت Front/Back را مستقیم در مرورگر و با استفاده از localStorage ایجاد، مشاهده و ذخیره کنید.
 این پروژه از سه‌جنس فناوری به‌صورت مختصر استفاده می‌کن
 : HTML  برای ساختار، CSS: برای استایل تمیز و کاربرپسند، و JavaScript: برای منطق کارت‌ها و persistence 
فلسفه اصلی این پروژه ارائه ابزاری سریع، آفلاین و ساده برای ساخت و مرور کارت‌های حافظه، بدون نیاز به سرور یا خدمات خارجی است.

نمای کلی
این اپلیکیشن رابط کاربری ساده و کم‌حاشیه‌ای را ارائه می‌دهد که در آن می‌توانید Front (سوال یا عنوان) و Back (پاسخ یا محتوا) کارت را از طریق یک فرم ساده وارد کنید. 
کارت‌ها در یک شبکه پاسخگو (responsive grid) نمایش داده می‌شوند و هر کارت امکان اعمال جداگانه دارد: مشاهده جزئیات و حذف. تمامی داده‌ها به صورت محلی در مرورگر ذخیره می‌شوند تا حریم خصوصی و دسترسی آفلاین را تضمین کنند. این ذخیره‌سازی به‌وسیله کلید محلی memoryCards_v1 انجام می‌شود. 
با بارگذاری صفحه، برنامه از localStorage می‌خواند، کارت‌های پیشین را بازسازی می‌کند و UI را بر اساس داده‌های ذخیره‌شده رندر می‌کند تا تجربه کاربر از آخرین نشست ادامه یابد.

لینک پروژه
https://github.com/saberramim/memorycards
نحوه اجرا محلی
فایل index.html را در مرورگر ترجیحی خود باز کنید (نیازی به سرور نیست).
از فرم استفاده کنید تا کارت‌های جدید بسازید. هر ارسال، کارت جدید را به آرایه درون‌ذا اضافه کرده و مجموعه به‌روز شده را در localStorage پایدار می‌کند.
برای بازنشانی داده‌ها، کلید memoryCards_v1 را از localStorage حذف کنید یا یک مکانیزم بازنشانی اختصاصی در رابط کاربری اضافه کنید (در نسخه اولیه گنجانده نشده است).
مدل داده و Persistence
کلید ذخیره‌سازی: memoryCards_v1
ساختار درون‌ذا: آرایه‌ای به نام cards که شامل شیء کارت‌ها است
سریال‌سازی: JSON.stringify(cards) برای تبدیل آرایه به رشته JSON جهت ذخیره
دِسریال‌سازی: JSON.parse(data) برای بازسازی آرایه در زمان بارگذاری
چرخه عمر داده: در هر عملیات افزودن/حذف، آرایه cards به‌روزرسانی شده و رشته JSON جدید در localStorage  نوشته می‌شود؛ در بارگذاری صفحه از localStorage خوانده و کارت‌ها رندر می‌شوند

چگونگی ایجاد کارت
رابط کاربری یک فرم با دو فیلد ارائه می‌دهد: Front (لطف یا سوال) و Back (پاسخ یا محتوا)
با ارسال فرم، کارت جدید به صورت سریع به لیست درون‌ذا اضافه شده و به localStorage Persistence  می‌شود
کارت تازه ایجاد شده در_grid نمایش داده می‌شود و به طور کامل قابل تعامل است
تعاملات کارت
نمایش جزئیات: کارت را می‌توان برای نمایش اطلاعات بیشتر گسترش داد یا نمایش داد
حذف: کارت را از گرید و از localStorage حذف کنید
تمام اعمال به‌خصوص با طراحی کاربرپسند و قابل دسترس بودن، با پشتیبانی از تعامل‌های با صفحه‌کلید و موس هستند
طراحی و دسترس‌پذیری
UI با زیبایی تمیز و کم‌تعداد از CSS Grid برای سازگاری با اندازه‌های مختلف صفحه طراحی شده است
کنترل‌های قابل دسترس و برچسب‌گذاری واضح برای پشتیبانی از ناوبری با کیبورد و صفحه‌خوان‌ها در نظر گرفته شده‌اند
کد منبع به گونه‌ای سازمان‌یافته است تا برای مشارکت‌کنندگان قابل دسترس باشد و در عین حال فشرده باقی بماند
نکات استفاده و محدودیت‌ها
بدون نیاز به Backend یا سرور؛ همه چیز در مرورگر اجرا می‌شود
محدودیت‌های localStorage بسته بهQuotaهای مرورگر وجود دارد؛ در صورت داشتن کتابخانه‌های بزرگ بهتر است امکان خروجی/ورودی داده‌ها را پیاده‌سازی کنید
اگر داده‌ها را بازنشانی کنید، کارت‌ها از بین خواهند رفت؛ می‌توانید نسخه‌های آینده یک دکمه بازنشانی در UI اضافه کنید یا به‌طور دستی localStorage را پاک کنید
ایده‌های بهبود (Future Ideas)
افزودن جستجو و فیلتر برای پیدا کردن سریع کارت‌ها
افزودن قابلیت ویرایش کارت‌های موجود
معرفی برچسب‌ها، دسته‌بندی‌ها یا سیستم Leitner برای یادگیری با فاصله‌گذاری
ارائه گزینه‌های خروجی/ورودی (JSON/CSV) برای همگام‌سازی بین دستگاه‌ها
افزودن ترجیح‌های کاربری (تم‌ها، تراکم کارت، اندازه فونت) و بهبود Accessibility

مرجع سریع
پروژه:  Memory Card    
 تکنولوژی‌ها  HTML, CSS, JavaScript 
** persistence**: localStorage (memoryCards_v1)
نحوه اجرا: باز کردن index.html در مرورگر
لینک پروژه  https://github.com/saberramim/memorycards


