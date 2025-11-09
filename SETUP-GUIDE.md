# 📘 دليل الإعداد الكامل - Zoho Sales Intelligence Platform

<div dir="rtl">

## 🎯 نظرة عامة
هذا الدليل يوضح خطوة بخطوة كيفية إعداد ونشر منصة Zoho الذكية للمبيعات.

---

## ⚙️ الإعداد الأساسي

### **الخطوة 1: تنزيل المشروع**

```bash
# استنساخ المشروع من GitHub
git clone https://github.com/your-username/zoho-sales-intelligence.git
cd zoho-sales-intelligence

# أو تنزيل ZIP مباشرة
# ثم فك الضغط
```

---

## 🌐 الخيار 1: النشر على GitHub Pages (الأسهل)

### **1. إنشاء Repository في GitHub**

1. اذهب إلى [github.com](https://github.com)
2. اضغط على "New Repository"
3. سمّه: `zoho-sales-intelligence`
4. اجعله Public أو Private
5. اضغط "Create Repository"

### **2. رفع الملفات**

```bash
# في مجلد المشروع
git init
git add .
git commit -m "Initial commit - Zoho Sales Intelligence Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zoho-sales-intelligence.git
git push -u origin main
```

### **3. تفعيل GitHub Pages**

1. اذهب إلى Repository Settings
2. اختر "Pages" من القائمة الجانبية
3. في "Source"، اختر "main" branch
4. اضغط "Save"
5. انتظر دقيقة، ثم ارجع للصفحة
6. سترى رابط موقعك: `https://YOUR_USERNAME.github.io/zoho-sales-intelligence/`

✅ **تم! التطبيق الآن متاح على الإنترنت**

---

## 🔗 الخيار 2: النشر على Netlify (بديل سريع)

### **1. إنشاء حساب Netlify**

1. اذهب إلى [netlify.com](https://netlify.com)
2. سجّل دخول بحساب GitHub

### **2. نشر الموقع**

1. اضغط "Add new site" → "Import an existing project"
2. اختر GitHub
3. اختر repository الخاص بك
4. Build settings: اتركها فارغة (static site)
5. اضغط "Deploy site"

✅ **سيعطيك Netlify رابط فوري مثل:** `https://random-name.netlify.app`

### **3. تخصيص الرابط (اختياري)**

1. Site settings → Site details → Change site name
2. غيّر إلى: `zoho-sales-intelligence`
3. الرابط الجديد: `https://zoho-sales-intelligence.netlify.app`

---

## 🤖 إعداد Google Gemini AI

### **الخطوة 1: الحصول على API Key**

1. اذهب إلى [Google AI Studio](https://makersuite.google.com/app/apikey)
2. سجّل دخول بحساب Google
3. اضغط "Create API Key"
4. انسخ الـ API Key (احتفظ به بأمان!)

### **الخطوة 2: إنشاء Google Apps Script**

1. اذهب إلى [script.google.com](https://script.google.com)
2. اضغط "+ New Project"
3. سمّه: "Zoho Sales Intelligence Backend"
4. احذف الكود الافتراضي
5. الصق كود من ملف `google-apps-script/Code.gs`

### **الخطوة 3: إضافة API Key**

في السطر 10، استبدل:
```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

بـ:
```javascript
const GEMINI_API_KEY = 'AIzaSy...'; // الـ API Key الخاص بك
```

### **الخطوة 4: نشر كـ Web App**

1. اضغط "Deploy" → "New Deployment"
2. Type: اختر "Web App"
3. Execute as: "Me"
4. Who has access: "Anyone" (أو "Anyone with Google account")
5. اضغط "Deploy"
6. **⚠️ مهم جداً:** انسخ "Web App URL" - ستحتاجه!

### **الخطوة 5: ربط Frontend بـ Backend**

في ملف `ai-chat.html`، ابحث عن السطر:

```javascript
const USE_REAL_API = false;
```

غيّره إلى:
```javascript
const USE_REAL_API = true;
const GEMINI_API_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

ضع Web App URL الذي نسخته في الخطوة السابقة.

**ثم ارفع التغييرات:**
```bash
git add ai-chat.html
git commit -m "Connect to Gemini API"
git push
```

✅ **الآن AI Chat يعمل بكامل قوته!**

---

## 📊 إعداد Google Sheets للتسجيل

### **الخطوة 1: إنشاء Google Sheet**

1. اذهب إلى [sheets.google.com](https://sheets.google.com)
2. اضغط "+ Blank" لإنشاء sheet جديد
3. سمّه: "Zoho Sales Data"
4. من URL، انسخ Sheet ID:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```

### **الخطوة 2: إضافة Sheet ID في Apps Script**

في `Code.gs`، السطر 13:
```javascript
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
```

استبدله بـ:
```javascript
const SHEET_ID = '1ABC...xyz'; // الـ Sheet ID الخاص بك
```

### **الخطوة 3: منح الأذونات**

1. في Apps Script، اضغط "Run" → اختر `testSaveProposal`
2. سيطلب منك Authorization
3. اضغط "Review Permissions"
4. اختر حسابك
5. اضغط "Advanced" → "Go to Project (unsafe)"
6. اضغط "Allow"

### **الخطوة 4: إعادة Deploy**

1. Deploy → Manage Deployments
2. اضغط Edit (أيقونة القلم)
3. New Version
4. Deploy

✅ **الآن البيانات تُحفظ تلقائياً في Google Sheets!**

---

## 🧪 اختبار التطبيق

### **اختبار 1: تسجيل الدخول**
1. افتح الموقع
2. أدخل اسم
3. تأكد من الانتقال لـ Dashboard

### **اختبار 2: AI Chat**
1. اختر "e& Smart"
2. اسأل: "ما هو Zoho CRM؟"
3. تأكد من الحصول على إجابة

### **اختبار 3: Sales Flow**
1. اختر "e& Self"
2. املأ معلومات شركة وهمية
3. أكمل حتى الخطوة الأخيرة
4. تأكد من ظهور المقترح

### **اختبار 4: Google Sheets**
1. افتح Google Sheet
2. تحقق من ظهور جدول "Proposals"
3. تأكد من حفظ البيانات

---

## 🎨 التخصيص (اختياري)

### **تغيير الشعارات**

في جميع الصفحات، استبدل روابط الشعارات:
```html
<!-- شعار e& Egypt -->
<img src="YOUR_E&_LOGO_URL" alt="e& Egypt">

<!-- شعار Zoho -->
<img src="YOUR_ZOHO_LOGO_URL" alt="Zoho">
```

**رفع الشعارات:**
1. استخدم [ImageKit](https://imagekit.io) أو أي CDN
2. ارفع الصور
3. انسخ الروابط
4. استبدل في الكود

### **تغيير الألوان**

في `css/main.css`:
```css
:root {
    --zoho-red: #YOUR_PRIMARY_COLOR;
    --zoho-dark: #YOUR_TEXT_COLOR;
    --zoho-gold: #YOUR_ACCENT_COLOR;
}
```

---

## 🔒 الأمان والإنتاج

### **قبل الإطلاق الرسمي:**

#### **1. تأمين API Keys**

⚠️ **لا تشارك API Keys علناً!**

في Apps Script:
- ✅ احفظ API Key في Script Properties بدلاً من الكود مباشرة
- ✅ قيّد الوصول لـ Web App

```javascript
// بدلاً من هذا:
const GEMINI_API_KEY = 'AIza...';

// استخدم هذا:
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_KEY');
```

لإضافة Script Property:
1. Project Settings (⚙️)
2. Script Properties
3. Add Property: `GEMINI_KEY` = `YOUR_API_KEY`

#### **2. تفعيل HTTPS**

GitHub Pages و Netlify يوفرون HTTPS تلقائياً. ✅

#### **3. إخفاء Google Sheet**

1. في Sheet، File → Share
2. غيّر من "Anyone with link" إلى "Restricted"
3. أضف فقط الأشخاص المصرح لهم

#### **4. مراقبة الاستخدام**

راقب:
- عدد استدعاءات Gemini API (لتجنب تجاوز الحصة)
- حجم Google Sheet (لتجنب الامتلاء)
- استخدام Apps Script (Execution quota)

---

## 🐛 حل المشاكل الشائعة

### **المشكلة: "Failed to fetch" في AI Chat**

**الأسباب المحتملة:**
1. Apps Script غير منشور
2. Permissions غير ممنوحة
3. API Key خاطئ
4. CORS issue

**الحلول:**
```javascript
// تأكد من:
1. Apps Script → Deploy → Active deployment موجود
2. "Who has access" = "Anyone"
3. API Key صحيح وفعّال
4. استخدمت Web App URL الصحيح
```

### **المشكلة: البيانات لا تُحفظ في Sheets**

**الحل:**
```javascript
// في Apps Script Console
1. Run → testSaveProposal
2. View → Logs
3. ابحث عن أي أخطاء
4. تأكد من Sheet ID صحيح
5. تأكد من Permissions ممنوحة
```

### **المشكلة: الموقع لا يظهر على GitHub Pages**

**الحل:**
```bash
# 1. تأكد من push الملفات
git status
git push

# 2. تأكد من Settings → Pages مفعّل
# 3. انتظر 5 دقائق وحاول مرة أخرى
# 4. افتح في Incognito mode
```

### **المشكلة: التصميم مكسور (RTL لا يعمل)**

**الحل:**
```html
<!-- تأكد من وجود هذا في كل صفحة -->
<html lang="ar" dir="rtl">
<head>
    <!-- ... -->
    <link rel="stylesheet" href="css/main.css">
</head>
```

---

## 📱 اختبار على الأجهزة المختلفة

### **Desktop:**
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### **Mobile:**
- ✅ iPhone Safari
- ✅ Android Chrome
- ✅ iPad

**أداة الاختبار:**
- استخدم Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
- اختبر على أحجام مختلفة

---

## 🚀 ما بعد الإطلاق

### **1. تدريب الفريق**

- اعقد جلسة تدريبية لفريق المبيعات
- وزّع دليل المستخدم
- أنشئ فيديو توضيحي قصير

### **2. جمع الملاحظات**

- اطلب feedback من المستخدمين الأوائل
- سجّل المشاكل والاقتراحات
- حدّث التطبيق بناءً على الملاحظات

### **3. المتابعة المستمرة**

- راجع Google Sheets أسبوعياً
- حدّث الأسعار عند التغيير
- أضف ميزات جديدة حسب الحاجة

---

## 📞 الدعم

إذا واجهت أي مشكلة:

1. راجع هذا الدليل أولاً
2. ابحث في [GitHub Issues](https://github.com/your-repo/issues)
3. افتح Issue جديد مع:
   - وصف المشكلة
   - الخطوات لإعادة إنتاج المشكلة
   - Screenshots إن أمكن

---

## ✅ قائمة التحقق النهائية

قبل الإطلاق الرسمي، تأكد من:

- [ ] الموقع يعمل على GitHub Pages/Netlify
- [ ] AI Chat يعمل ويعطي إجابات صحيحة
- [ ] Sales Flow يعمل من البداية للنهاية
- [ ] البيانات تُحفظ في Google Sheets
- [ ] التصميم responsive على جميع الأجهزة
- [ ] الشعارات صحيحة وواضحة
- [ ] الأسعار محدّثة
- [ ] API Keys مؤمنة
- [ ] HTTPS مفعّل
- [ ] تم تدريب الفريق
- [ ] دليل المستخدم جاهز

---

## 🎉 تهانينا!

إذا وصلت هنا، فقد أكملت الإعداد بنجاح! 🎊

التطبيق الآن جاهز للاستخدام ومساعدة فريق المبيعات في إنشاء مقترحات احترافية بسرعة وكفاءة.

**وقت إنشاء المقترح:** من 3 ساعات → **10 دقائق** ✅

</div>

---

<div align="center">

**Built with ❤️ for Etisalat Egypt**

*Need help? Open an issue on GitHub*

</div>
