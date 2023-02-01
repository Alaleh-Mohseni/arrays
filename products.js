const productsItem = [
    { "parentName": null, "name": "دسته‌بندی‌های دیجی‌کالا" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "کالای دیجیتال" },
    { "parentName": "کالای دیجیتال", "name": "لوازم جانبی گوشی" },
    { "parentName": "لوازم جانبی گوشی", "name": "کیف و کاور گوشی" },
    { "parentName": "لوازم جانبی گوشی", "name": "پاور بانک (شارژر همراه)" },
    { "parentName": "کالای دیجیتال", "name": "اسپیکر بلوتوث" },
    { "parentName": "کالای دیجیتال", "name": "کامپیوتر و تجهیزات جانبی" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "تجهیزات مخصوص بازی" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "مانیتور" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "قطعات داخلی کامپیوتر" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "کالاهای سوپرمارکتی" },
    { "parentName": "کالاهای سوپرمارکتی", "name": "کالای اساسی و خوار و بار" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "نان" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "برنج" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "روغن" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "قند" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "خانه و آشپزخانه" },
]


function nested(f) {
    return f.sort((a, b) => a.name.length < b.name.length ? 1 : a.name.length == b.name.length ? a.name < b.name ? -1 : 1 : -1)
        .reduce((p, c, i, a) => {
            let parent = !!c.parentName && a.find(e => e.name === c.parentName);
            !!parent ? !!parent.subCategories && parent.subCategories.push(c) || (parent.subCategories = [c]) : p.push(c);
            return p;
        }, []);
};
console.log("\x1b[35m", JSON.stringify(nested(productsItem), null, 2))

// question 15
console.log('\x1b[31m', '15.nested')
// question 16
console.log('16.nested')