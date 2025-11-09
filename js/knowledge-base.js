// ==========================================
// Zoho Sales Intelligence Platform
// Knowledge Base - Product Information
// ==========================================

const KNOWLEDGE_BASE = {
    
    // ==========================================
    // ZOHO APPS - Standalone Products
    // ==========================================
    apps: {
        crm: {
            name: "Zoho CRM",
            nameAr: "نظام إدارة علاقات العملاء",
            icon: "fas fa-users",
            color: "#E42527",
            category: "Sales & Marketing",
            pricing: {
                standard: 840, // EGP per user/month
                professional: 1400,
                enterprise: 2520
            },
            description: "نظام شامل لإدارة علاقات العملاء وعمليات المبيعات والتسويق",
            features: [
                "إدارة قاعدة بيانات العملاء والعملاء المحتملين",
                "تتبع فرص البيع ومسارات التحويل",
                "أتمتة سير عمل المبيعات والتسويق",
                "تقارير وتحليلات شاملة",
                "تكامل مع البريد الإلكتروني والهاتف",
                "تطبيقات موبايل لـ iOS و Android"
            ],
            benefits: [
                "زيادة معدلات التحويل بنسبة 40%",
                "تقليل وقت دورة المبيعات بنسبة 30%",
                "تحسين رضا العملاء",
                "تتبع دقيق لأداء المبيعات"
            ],
            industries: ["جميع الصناعات", "التجارة", "الخدمات", "التصنيع", "التكنولوجيا"],
            competitors: ["Salesforce", "HubSpot", "Microsoft Dynamics"]
        },
        
        inventory: {
            name: "Zoho Inventory",
            nameAr: "نظام إدارة المخزون",
            icon: "fas fa-boxes",
            color: "#FFB81C",
            category: "Operations",
            pricing: {
                standard: 700, // EGP per month
                professional: 1260,
                premium: 2100
            },
            description: "نظام متكامل لإدارة المخزون وطلبات الشراء والمبيعات",
            features: [
                "تتبع المخزون في الوقت الفعلي",
                "إدارة طلبات البيع والشراء",
                "إدارة المستودعات المتعددة",
                "تكامل مع منصات التجارة الإلكترونية",
                "تقارير المخزون والمبيعات",
                "باركود وماسح ضوئي"
            ],
            benefits: [
                "تقليل نقص المخزون بنسبة 60%",
                "توفير 25% من تكاليف التخزين",
                "تحسين دقة المخزون",
                "أتمتة عمليات الطلب"
            ],
            industries: ["التجارة", "التصنيع", "التجزئة", "التوزيع", "التجارة الإلكترونية"],
            competitors: ["TradeGecko", "Cin7", "Odoo Inventory"]
        },
        
        books: {
            name: "Zoho Books",
            nameAr: "نظام المحاسبة المالية",
            icon: "fas fa-calculator",
            color: "#28a745",
            category: "Finance",
            pricing: {
                standard: 630, // EGP per month
                professional: 1050,
                premium: 1890
            },
            description: "برنامج محاسبة شامل لإدارة الشؤون المالية",
            features: [
                "إصدار الفواتير وعروض الأسعار",
                "تتبع المصروفات والإيرادات",
                "إدارة الحسابات البنكية",
                "التقارير المالية والضريبية",
                "تكامل مع البنوك",
                "إدارة الرواتب"
            ],
            benefits: [
                "توفير 70% من وقت المحاسبة",
                "دقة 100% في الحسابات",
                "امتثال كامل للضرائب",
                "تقارير مالية فورية"
            ],
            industries: ["جميع الصناعات", "المالية", "الخدمات المهنية", "الشركات الصغيرة"],
            competitors: ["QuickBooks", "Xero", "FreshBooks"]
        },
        
        desk: {
            name: "Zoho Desk",
            nameAr: "نظام دعم العملاء",
            icon: "fas fa-headset",
            color: "#007bff",
            category: "Customer Support",
            pricing: {
                standard: 560, // EGP per agent/month
                professional: 1050,
                enterprise: 2100
            },
            description: "منصة متكاملة لإدارة خدمة العملاء والدعم الفني",
            features: [
                "نظام تذاكر ذكي ومتقدم",
                "قاعدة معرفية للعملاء",
                "دعم متعدد القنوات (بريد، شات، هاتف)",
                "أتمتة سير العمل",
                "تقارير أداء الدعم",
                "تكامل مع وسائل التواصل الاجتماعي"
            ],
            benefits: [
                "تحسين رضا العملاء بنسبة 45%",
                "تقليل وقت الاستجابة بنسبة 50%",
                "زيادة إنتاجية فريق الدعم",
                "حل أسرع للمشاكل"
            ],
            industries: ["التكنولوجيا", "الخدمات", "التجارة الإلكترونية", "SaaS"],
            competitors: ["Zendesk", "Freshdesk", "Intercom"]
        },
        
        workplace: {
            name: "Zoho Workplace",
            nameAr: "منصة العمل التعاوني",
            icon: "fas fa-building",
            color: "#6f42c1",
            category: "Collaboration",
            pricing: {
                standard: 210, // EGP per user/month
                professional: 420
            },
            description: "مجموعة متكاملة لأدوات التعاون والإنتاجية",
            features: [
                "بريد إلكتروني احترافي بنطاق خاص",
                "معالج نصوص وجداول بيانات",
                "تخزين سحابي آمن",
                "مكالمات فيديو واجتماعات",
                "أدوات إدارة المشاريع",
                "تطبيقات موبايل متكاملة"
            ],
            benefits: [
                "توفير 50% من تكاليف Microsoft 365",
                "تعاون سلس بين الفرق",
                "أمان وخصوصية عالية",
                "إنتاجية محسّنة"
            ],
            industries: ["جميع الصناعات", "الشركات الناشئة", "الشركات المتوسطة"],
            competitors: ["Microsoft 365", "Google Workspace", "Slack"]
        },
        
        sites: {
            name: "Zoho Sites",
            nameAr: "منشئ المواقع الإلكترونية",
            icon: "fas fa-globe",
            color: "#ff6b6b",
            category: "Web & Marketing",
            pricing: {
                starter: 280, // EGP per month
                pro: 490
            },
            description: "أداة سهلة لإنشاء مواقع ويب احترافية",
            features: [
                "منشئ مواقع بالسحب والإفلات",
                "قوالب احترافية جاهزة",
                "تحسين محركات البحث (SEO)",
                "تصميم متجاوب تلقائياً",
                "نماذج وأدوات تفاعلية",
                "استضافة آمنة وسريعة"
            ],
            benefits: [
                "إنشاء موقع في ساعات بدلاً من أسابيع",
                "توفير 80% من تكاليف التطوير",
                "لا حاجة لمهارات برمجية",
                "أداء سريع وموثوق"
            ],
            industries: ["الأعمال الصغيرة", "الخدمات المهنية", "المطاعم", "التسويق"],
            competitors: ["Wix", "Squarespace", "WordPress"]
        }
    },
    
    // ==========================================
    // ZOHO ONE - Complete Suite
    // ==========================================
    zohoOne: {
        name: "Zoho One",
        nameAr: "حزمة Zoho الكاملة",
        description: "منظومة متكاملة من 45+ تطبيق لإدارة كامل أعمالك",
        pricing: {
            monthly: 4200 // EGP per user/month
        },
        includes: [
            "جميع التطبيقات الستة المستقلة",
            "40+ تطبيق إضافي",
            "تكامل سلس بين جميع التطبيقات",
            "دعم فني مخصص",
            "تخصيص متقدم",
            "تحديثات مجانية مدى الحياة"
        ],
        savings: "توفير يصل إلى 60% مقارنة بشراء التطبيقات منفصلة",
        bundlingRules: {
            mandatory: "إلزامي عند الحاجة لـ 3 تطبيقات أو أكثر",
            recommended: "موصى به للشركات المتوسطة والكبيرة",
            advanced: "يشمل تطبيقات متقدمة غير متوفرة منفصلة"
        }
    },
    
    // ==========================================
    // INDUSTRIES & PAIN POINTS
    // ==========================================
    industries: {
        manufacturing: {
            nameAr: "التصنيع",
            painPoints: [
                "صعوبة تتبع المخزون والمواد الخام",
                "عدم كفاءة عمليات الإنتاج",
                "تأخر في تلبية طلبات العملاء",
                "صعوبة إدارة سلسلة التوريد",
                "نقص الرؤية في الأداء المالي"
            ],
            recommendedApps: ["crm", "inventory", "books"],
            recommendZohoOne: true
        },
        
        retail: {
            nameAr: "التجارة والتجزئة",
            painPoints: [
                "صعوبة إدارة المخزون متعدد الفروع",
                "فقدان فرص البيع بسبب نقص المخزون",
                "عدم تكامل نقاط البيع مع المحاسبة",
                "صعوبة تتبع ولاء العملاء",
                "نقص في البيانات التحليلية"
            ],
            recommendedApps: ["crm", "inventory", "books"],
            recommendZohoOne: true
        },
        
        services: {
            nameAr: "الخدمات المهنية",
            painPoints: [
                "صعوبة تتبع المشاريع والمهام",
                "فوضى في إدارة الفواتير والمدفوعات",
                "نقص التواصل بين الفريق",
                "صعوبة إدارة علاقات العملاء",
                "عدم وضوح في الربحية"
            ],
            recommendedApps: ["crm", "books", "workplace"],
            recommendZohoOne: false
        },
        
        ecommerce: {
            nameAr: "التجارة الإلكترونية",
            painPoints: [
                "صعوبة تتبع الطلبات والشحنات",
                "عدم تزامن المخزون بين المنصات",
                "صعوبة إدارة خدمة العملاء",
                "نقص في أدوات التسويق",
                "تحديات في إدارة الإرجاع والاستبدال"
            ],
            recommendedApps: ["crm", "inventory", "desk"],
            recommendZohoOne: true
        },
        
        marketing: {
            nameAr: "التسويق والإعلان",
            painPoints: [
                "صعوبة إدارة العملاء والحملات",
                "نقص في أدوات التعاون",
                "فوضى في إدارة المشاريع",
                "صعوبة تتبع الأداء المالي",
                "نقص في أدوات إنشاء المحتوى"
            ],
            recommendedApps: ["crm", "workplace", "sites"],
            recommendZohoOne: false
        }
    },
    
    // ==========================================
    // PRICING CALCULATION RULES
    // ==========================================
    pricingRules: {
        // Minimum users for standalone apps
        minimumUsers: {
            crm: 3,
            desk: 2,
            workplace: 5,
            inventory: 1,
            books: 1,
            sites: 1
        },
        
        // Bundling logic
        bundling: {
            threshold: 3, // If 3+ apps needed, recommend Zoho One
            zohoOnePricePerUser: 4200,
            
            calculate: function(selectedApps, userCount) {
                let standaloneTotal = 0;
                
                selectedApps.forEach(app => {
                    const appData = KNOWLEDGE_BASE.apps[app];
                    if (appData && appData.pricing) {
                        // Use professional tier as default
                        const pricePerUser = appData.pricing.professional || appData.pricing.standard;
                        const users = KNOWLEDGE_BASE.pricingRules.minimumUsers[app] || userCount;
                        standaloneTotal += pricePerUser * Math.max(users, userCount);
                    }
                });
                
                const zohoOneTotal = this.zohoOnePricePerUser * userCount;
                
                return {
                    standalone: standaloneTotal,
                    zohoOne: zohoOneTotal,
                    savings: standaloneTotal - zohoOneTotal,
                    savingsPercent: ((standaloneTotal - zohoOneTotal) / standaloneTotal * 100).toFixed(0),
                    recommended: selectedApps.length >= this.threshold ? 'zohoOne' : 'standalone'
                };
            }
        }
    },
    
    // ==========================================
    // SALES SCRIPTS
    // ==========================================
    salesScripts: {
        opening: "مرحباً، أنا هنا لمساعدتك في اختيار الحلول المناسبة من Zoho لتحسين عملياتك التجارية.",
        
        discovery: [
            "ما هي أكبر التحديات التي تواجهها في إدارة أعمالك؟",
            "كم عدد الموظفين في شركتك؟",
            "هل تستخدم حالياً أي أنظمة رقمية؟",
            "ما هي أهم 3 أولويات لتحسين عملياتك؟"
        ],
        
        valueProposition: {
            cost: "توفير كبير في التكاليف - حتى 60% مقارنة بالمنافسين",
            integration: "تكامل سلس بين جميع الأنظمة - لا حاجة لربط تطبيقات منفصلة",
            support: "دعم فني مخصص باللغة العربية على مدار الساعة",
            scalability: "حلول قابلة للتطوير تنمو مع نمو أعمالك"
        },
        
        objectionHandling: {
            price: "السعر مرتفع جداً",
            response: "دعني أريك العائد على الاستثمار. التوفير في الوقت والأخطاء يغطي التكلفة خلال 3 أشهر فقط."
        }
    },
    
    // ==========================================
    // COMPETITOR COMPARISON
    // ==========================================
    competitors: {
        salesforce: {
            name: "Salesforce",
            advantages: [
                "Zoho أرخص بنسبة 70%",
                "واجهة أسهل للاستخدام",
                "تكامل أفضل بين التطبيقات",
                "دعم باللغة العربية"
            ]
        },
        
        microsoft: {
            name: "Microsoft Dynamics",
            advantages: [
                "Zoho أرخص بنسبة 60%",
                "إعداد أسرع وأسهل",
                "تكاليف تشغيل أقل",
                "تخصيص أكثر مرونة"
            ]
        },
        
        odoo: {
            name: "Odoo",
            advantages: [
                "واجهة مستخدم أفضل",
                "دعم فني أكثر احترافية",
                "تكامل أسهل",
                "تطبيقات موبايل أفضل"
            ]
        }
    }
};

// ==========================================
// Helper Functions
// ==========================================

function getAppInfo(appKey) {
    return KNOWLEDGE_BASE.apps[appKey];
}

function getIndustryPainPoints(industry) {
    return KNOWLEDGE_BASE.industries[industry];
}

function calculateROI(selectedApps, userCount) {
    return KNOWLEDGE_BASE.pricingRules.bundling.calculate(selectedApps, userCount);
}

function getRecommendedApps(industry) {
    const industryData = KNOWLEDGE_BASE.industries[industry];
    if (industryData) {
        return industryData.recommendedApps.map(appKey => KNOWLEDGE_BASE.apps[appKey]);
    }
    return [];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KNOWLEDGE_BASE, getAppInfo, getIndustryPainPoints, calculateROI, getRecommendedApps };
}
