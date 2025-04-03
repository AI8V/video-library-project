<div dir="rtl" align="center">

# مكتبة الفيديوهات التعليمية 📚🎥

  
![لقطة شاشة للمشروع](https://github.com/AI8V/video-library-project/blob/main/video-library-project.png)

[![لغة JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/-Bootstrap%205-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[🔍 عرض المشروع](#مميزات-المشروع) | [🚀 تثبيت](#تثبيت-المشروع) | [💻 استخدام](#كيفية-الاستخدام) | [🔗 المساهمة](#المساهمة)

</div>

<div dir="rtl"

## 📋 نظرة عامة

**مكتبة الفيديوهات التعليمية** هي منصة ويب تفاعلية مصممة لعرض وتنظيم مجموعة من الفيديوهات التعليمية بواجهة سهلة الاستخدام وجذابة. تم تصميم المشروع باللغة العربية مع دعم كامل للواجهة بتنسيق RTL (من اليمين لليسار).

المشروع يقدم طريقة مبسطة لعرض قائمة من الفيديوهات التعليمية من YouTube مع تجربة مستخدم سلسة وحديثة، وذلك باستخدام تقنيات الويب القياسية مثل HTML5 وCSS3 وJavaScript بالإضافة إلى إطار العمل Bootstrap 5.

![صورة توضيحية للمشروع](https://github.com/AI8V/video-library-project/blob/main/ai8v-video-library-project.png)

## ✨ مميزات المشروع

- **واجهة مستخدم عربية كاملة** - تدعم تنسيق RTL (من اليمين لليسار)
- **تصميم متجاوب** - يعمل على جميع أحجام الشاشات (الهواتف، الأجهزة اللوحية، أجهزة الكمبيوتر)
- **نظام ترقيم الصفحات** - لتصفح مجموعات مختلفة من الفيديوهات بسهولة
- **عرض الفيديوهات داخل نافذة منبثقة** - لتجربة مشاهدة مريحة دون مغادرة الموقع
- **تأثيرات حركية CSS** - عند التفاعل مع صور الفيديوهات
- **تحميل صور مصغرة تلقائيًا** - مع معالجة الأخطاء لضمان عرض الصور دائمًا
- **أداء محسن** - باستخدام JavaScript الحديثة وأفضل الممارسات في تحميل الصفحة والمحتوى

## 🛠️ التقنيات المستخدمة

- **HTML5** - لهيكلة الصفحة والمحتوى
- **CSS3** - للتنسيق والتصميم المرئي
- **JavaScript (ES6+)** - للوظائف التفاعلية ومعالجة الأحداث
- **Bootstrap 5** - لتصميم متجاوب وواجهة مستخدم حديثة
- **YouTube Embed API** - لعرض الفيديوهات داخل الموقع

## 🚀 تثبيت المشروع

### المتطلبات الأساسية

لا توجد متطلبات خاصة لتشغيل المشروع سوى متصفح ويب حديث.

### خطوات التثبيت

1. قم بتنزيل أو استنساخ المستودع:


</div>

<div dir="ltr">

```bash
git clone https://github.com/ai8v/video-library-project.git
cd video-library-project
```
</div>


2. افتح ملف `index.html` في متصفح الويب أو قم بتشغيل خادم محلي:



  
```bash
# باستخدام Python
python -m http.server 8000
# أو باستخدام Node.js وحزمة http-server
npx http-server
```


3. قم بزيارة `http://localhost:8000` (أو المنفذ الذي تم تعيينه) في متصفحك.

## 💻 كيفية الاستخدام

### تخصيص مجموعة الفيديوهات

يمكنك تخصيص قائمة الفيديوهات المعروضة عن طريق تعديل مصفوفة `allVideos` في ملف `script.js`:

<div dir="ltr">
  
```javascript
const allVideos = [
    { id: "VIDEO_ID_HERE", title: "عنوان الفيديو" },
    // أضف المزيد من الفيديوهات هنا
];
```
</div>


استبدل `VIDEO_ID_HERE` بمعرف فيديو YouTube (الجزء الأخير من رابط YouTube بعد `?v=`).

### تخصيص عدد الفيديوهات لكل صفحة

يمكنك تغيير عدد الفيديوهات المعروضة في كل صفحة عن طريق تعديل قيمة `videosPerPage` في ملف `script.js`:

  
```javascript
const videosPerPage = 8; // غيّر هذه القيمة حسب الحاجة
```

### تخصيص المظهر والتنسيق

يمكنك تعديل التنسيقات والألوان وخيارات التصميم في ملف `styles.css`.

## 📁 هيكل المشروع


<div dir="ltr">

```
.
├── index.html          # صفحة HTML الرئيسية
├── assets/
│   ├── bootstrap/
│   │   ├── css/
│   │   │   └── bootstrap.min.css
│   │   └── js/
│   │       └── bootstrap.min.js
│   ├── css/
│   │   └── styles.css  # ملف CSS المخصص
│   └── js/
│       └── script.js   # سكريبت JavaScript الرئيسي
└── README.md           # هذا الملف
```

</div>

## 🌟 الميزات المستقبلية

- [ ] إضافة خاصية البحث عن الفيديوهات
- [ ] تصنيف الفيديوهات حسب المواضيع
- [ ] إضافة إمكانية حفظ الفيديوهات المفضلة
- [ ] دعم قوائم التشغيل وليس فقط الفيديوهات الفردية
- [ ] إضافة واجهة للمسؤولين لإدارة المحتوى
- [ ] تضمين نظام تعليقات للمستخدمين

## 🔗 المساهمة

نرحب بمساهماتكم لتحسين هذا المشروع! للمساهمة:

1. قم بعمل Fork للمستودع
2. قم بإنشاء فرع لميزتك (`git checkout -b feature/amazing-feature`)
3. قم بإجراء تغييراتك (`git commit -m 'إضافة ميزة رائعة'`)
4. قم بدفع التغييرات إلى الفرع (`git push origin feature/amazing-feature`)
5. قم بفتح طلب دمج (Pull Request)

## 📄 الترخيص

هذا المشروع مرخص بموجب [رخصة MIT](https://opensource.org/licenses/MIT).

## 👤 المطور

- **عمرو عبدالسلام** - [اسم المطور](https://github.com/ai8v)

## 🙏 شكر وتقدير
- [Bootstrap](https://getbootstrap.com/) - لإطار العمل CSS الرائع
- [YouTube](https://www.youtube.com/) - لتوفير منصة الفيديو والـ API

---

<p align="center">
  صُنع بـ ❤️ في 2025
</p>

</div>
