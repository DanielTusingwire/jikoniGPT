module.exports = [
"[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/chef-gemini-clone/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/chef-gemini-clone/lib/time-greeting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeBasedGreeting",
    ()=>getTimeBasedGreeting
]);
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return {
            greeting: "Good morning, Cheff!",
            placeholder: "What are you making for breakfast?",
            mealType: "breakfast"
        };
    } else if (hour >= 12 && hour < 17) {
        return {
            greeting: "Good afternoon, Chef!",
            placeholder: "What are you making for lunch?",
            mealType: "lunch"
        };
    } else {
        return {
            greeting: "Good evening, Cheff!",
            placeholder: "What are you making for dinner?",
            mealType: "dinner"
        };
    }
}
}),
"[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAwareHeader",
    ()=>ScrollAwareHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollAwareHeader({ rightContent, maxWidth = "max-w-2xl", className }) {
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controlNavbar = ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
        window.addEventListener("scroll", controlNavbar);
        return ()=>window.removeEventListener("scroll", controlNavbar);
    }, [
        lastScrollY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 w-full bg-white px-4 py-4 transition-transform duration-300 shadow-sm", showHeader ? "translate-y-0" : "-translate-y-full", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex items-center justify-between", maxWidth),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/chef-logo.png",
                    alt: "Chef",
                    className: "h-10"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                rightContent
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ __turbopack_context__.s([
    "api",
    ()=>api,
    "components",
    ()=>components,
    "internal",
    ()=>internal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["componentsGeneric"])();
}),
"[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeedbackModal",
    ()=>FeedbackModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FeedbackModal({ isOpen, onClose }) {
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const submitFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].mutations.submitFeedback);
    if (!isOpen) return null;
    const ratings = [
        {
            value: 1,
            emoji: "😖",
            label: "Poor"
        },
        {
            value: 2,
            emoji: "🙁",
            label: "Bad"
        },
        {
            value: 3,
            emoji: "😐",
            label: "Okay"
        },
        {
            value: 4,
            emoji: "🙂",
            label: "Good"
        },
        {
            value: 5,
            emoji: "🤩",
            label: "Amazing"
        }
    ];
    const handleSubmit = async ()=>{
        if (!rating) return;
        setIsSubmitting(true);
        try {
            await submitFeedback({
                rating,
                comment: comment.trim() || undefined
            });
            // Show success message
            setShowSuccess(true);
            // Auto-close after 2 seconds
            setTimeout(()=>{
                setRating(null);
                setComment("");
                setShowSuccess(false);
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Failed to submit feedback:", error);
            alert("Failed to submit feedback. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200",
                children: showSuccess ? // Success Message
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 text-6xl",
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-neutral-900 mb-2",
                            children: "Thank you!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-600 text-sm",
                            children: "Your feedback has been submitted successfully"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this) : // Feedback Form
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-neutral-900",
                                    children: "Enjoying Chef?"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-500 text-xs sm:text-sm px-2 sm:px-4",
                                    children: "Your feedback will help us improve to give you a better experience in future"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 76,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-1 mb-1",
                            children: ratings.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setRating(r.value),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-3xl sm:text-4xl p-1.5 sm:p-2 transition-all duration-300 transform hover:scale-110 relative group", rating === r.value ? "scale-110" : "grayscale opacity-40 hover:grayscale-0 hover:opacity-100"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: r.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 16
                                        }, this),
                                        rating === r.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-yellow-400/20 blur-xl rounded-full z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, r.value, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 14
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 84,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center h-5 sm:h-6 mb-6 sm:mb-8 font-bold text-neutral-900 text-base sm:text-lg",
                            children: rating ? ratings.find((r)=>r.value === rating)?.label : ""
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: comment,
                            onChange: (e)=>setComment(e.target.value),
                            placeholder: "Why this experience? You can leave it empty",
                            className: "w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-3 sm:p-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none h-28 sm:h-32 mb-6 sm:mb-8 text-sm sm:text-base"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 108,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: isSubmitting || !rating,
                            className: "w-full bg-neutral-900 text-white font-bold py-3.5 sm:py-4 rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base",
                            children: isSubmitting ? "Sending..." : "Send Feedback"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeInput",
    ()=>RecipeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/time-greeting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$feedback$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function RecipeInput({ onGenerate, isLoading }) {
    const [youtubeUrl, setYoutubeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [recipeText, setRecipeText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [inputType, setInputType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("text");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [placeholder, setPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFeedback, setShowFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { greeting: g, placeholder: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeBasedGreeting"])();
        setGreeting(g);
        setPlaceholder(p);
        const interval = setInterval(()=>{
            const { greeting: newG, placeholder: newP } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeBasedGreeting"])();
            setGreeting(newG);
            setPlaceholder(newP);
        }, 60000);
        return ()=>clearInterval(interval);
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        const input = inputType === "youtube" ? youtubeUrl : recipeText;
        if (!input.trim()) {
            setError("Please enter a YouTube URL or recipe text");
            return;
        }
        try {
            await onGenerate(input, inputType);
        } catch  {
            setError("Failed to generate recipe. Please try again.");
        }
    };
    const textareaClass = "flex-grow text-3xl sm:text-4xl md:text-5xl font-medium placeholder:text-neutral-300 text-neutral-900 " + "bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none " + "focus:ring-0 focus:ring-transparent shadow-none resize-none p-0 leading-tight";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-neutral-100 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                        rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFeedback(true),
                            className: "px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-semibold rounded-full transition-colors",
                            children: "Feedback"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow flex flex-col px-4 pt-24 pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-2xl mx-auto space-y-4 sm:space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 sm:space-y-6 text-left sm:text-left pl-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight",
                                        children: greeting
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 sm:space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-8 border-b border-transparent px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInputType("text"),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-2 text-lg font-semibold transition-all relative", inputType === "text" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"),
                                                    children: [
                                                        "Describe",
                                                        inputType === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInputType("youtube"),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-2 text-lg font-semibold transition-all relative", inputType === "youtube" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"),
                                                    children: [
                                                        "Youtube",
                                                        inputType === "youtube" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex flex-col transition-all duration-200", isFocused ? "border-2 border-neutral-900 shadow-md" : "border border-transparent"),
                                                children: [
                                                    inputType === "youtube" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Place the YouTube url here",
                                                        value: youtubeUrl,
                                                        onChange: (e)=>setYoutubeUrl(e.target.value),
                                                        onFocus: ()=>setIsFocused(true),
                                                        onBlur: ()=>setIsFocused(false),
                                                        className: textareaClass,
                                                        disabled: isLoading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: placeholder,
                                                        value: recipeText,
                                                        onChange: (e)=>{
                                                            const val = e.target.value;
                                                            setRecipeText(val.charAt(0).toUpperCase() + val.slice(1));
                                                        },
                                                        onFocus: ()=>setIsFocused(true),
                                                        onBlur: ()=>setIsFocused(false),
                                                        className: textareaClass,
                                                        disabled: isLoading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm font-medium mt-2",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            size: "lg",
                                                            className: "w-full h-14 bg-neutral-900 hover:bg-neutral-800 text-white text-lg font-medium rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]",
                                                            disabled: isLoading,
                                                            children: isLoading ? "Cooking..." : "Create Recipe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$feedback$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedbackModal"], {
                isOpen: showFeedback,
                onClose: ()=>setShowFeedback(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeOverview",
    ()=>RecipeOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function RecipeOverview({ recipe, onStartCooking, onBack }) {
    const originalServings = Number.parseInt(recipe.servings) || 4;
    const [currentServings, setCurrentServings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(originalServings);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const servingsMultiplier = currentServings / originalServings;
    const decreaseServings = ()=>{
        setCurrentServings(Math.max(1, currentServings - 1));
    };
    const increaseServings = ()=>{
        setCurrentServings(currentServings + 1);
    };
    // Calculate adjusted calories based on servings
    const adjustedCalories = recipe.nutritional_info?.calories ? Math.round(Number.parseInt(recipe.nutritional_info.calories) * servingsMultiplier) : null;
    // Determine which image to use: YouTube thumbnail or AI-generated
    const imageUrl = recipe.youtube_thumbnail ? recipe.youtube_thumbnail : `https://pollinations.ai/p/${encodeURIComponent(recipe.image_keywords || recipe.recipe_name)}?width=1280&height=720&seed=42&model=flux`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                maxWidth: "max-w-4xl",
                rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full aspect-video bg-neutral-100 rounded-3xl overflow-hidden mb-8 shadow-sm relative",
                        children: [
                            !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-neutral-100 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/loadLogo.png",
                                    alt: "Loading...",
                                    className: "w-20 h-20 animate-spin object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: recipe.recipe_name,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover transition-opacity duration-700", imageLoaded ? "opacity-100" : "opacity-0"),
                                loading: "lazy",
                                onLoad: ()=>setImageLoaded(true)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-5xl font-bold text-foreground",
                                    children: recipe.recipe_name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-2xl text-muted-foreground hover:text-foreground transition-colors",
                                    children: "🔗"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl p-5 sm:p-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-muted-foreground leading-relaxed mb-8",
                                children: recipe.summary
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Cooking time"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: recipe.prep_time
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Servings"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: currentServings
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    adjustedCalories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Calories"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: [
                                                    adjustedCalories,
                                                    " kcal"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: decreaseServings,
                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors",
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "Cooking for ",
                                            currentServings
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: increaseServings,
                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mb-6 pl-2",
                                children: "Things to note"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl p-5 sm:p-6",
                                children: [
                                    recipe.tools && recipe.tools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-foreground mb-4",
                                                children: "Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: recipe.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 bg-neutral-100 rounded-xl text-sm text-foreground font-medium",
                                                        children: tool
                                                    }, tool, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    recipe.allergens && recipe.allergens.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground",
                                                        children: "Potential Allergens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground cursor-help",
                                                        title: "Allergen information",
                                                        children: "ⓘ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: recipe.allergens.map((allergen)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-sm font-medium border border-yellow-100",
                                                        children: allergen
                                                    }, allergen, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onStartCooking,
                            className: "w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-full shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Start Cooking"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceControlButton",
    ()=>VoiceControlButton,
    "VoiceHelpModal",
    ()=>VoiceHelpModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function VoiceControlButton({ isListening, isSupported, lastCommand, error, onStartListening, onStopListening, onShowHelp }) {
    const [showFeedback, setShowFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isSupported) {
        return null; // Don't show if browser doesn't support voice
    }
    const handleClick = ()=>{
        if (isListening) {
            onStopListening();
        } else {
            onStartListening();
            setShowFeedback(true);
            setTimeout(()=>setShowFeedback(false), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 z-50 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-end gap-3 pointer-events-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: (showFeedback || lastCommand || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            x: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            x: 20,
                            scale: 0.9
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-2xl shadow-lg backdrop-blur-xl border text-sm font-medium max-w-xs", error ? "bg-red-50/90 border-red-200 text-red-700" : isListening ? "bg-blue-50/90 border-blue-200 text-blue-700" : "bg-green-50/90 border-green-200 text-green-700"),
                        children: error || (isListening ? "Listening..." : lastCommand || "Ready")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onShowHelp,
                    className: "p-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95",
                    title: "Voice commands help",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClick,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative p-5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95", isListening ? "bg-red-500 hover:bg-red-600 text-white animate-pulse" : "bg-neutral-900 hover:bg-neutral-800 text-white"),
                    title: isListening ? "Stop listening" : "Start voice control",
                    children: [
                        isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 rounded-full bg-red-400 animate-pulse opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                className: "w-7 h-7"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "w-7 h-7"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function VoiceHelpModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const commands = [
        {
            category: "Navigation",
            items: [
                {
                    command: "Next step",
                    description: "Move to the next cooking step"
                },
                {
                    command: "Previous step",
                    description: "Go back to previous step"
                },
                {
                    command: "Go to step [number]",
                    description: "Jump to a specific step"
                },
                {
                    command: "Repeat",
                    description: "Read current step again"
                }
            ]
        },
        {
            category: "Timers",
            items: [
                {
                    command: "Start timer",
                    description: "Start the timer for current step"
                },
                {
                    command: "Pause timer",
                    description: "Pause the running timer"
                },
                {
                    command: "Resume timer",
                    description: "Resume the paused timer"
                }
            ]
        },
        {
            category: "View",
            items: [
                {
                    command: "Show ingredients",
                    description: "Switch to ingredients tab"
                },
                {
                    command: "Show directions",
                    description: "Switch to directions tab"
                },
                {
                    command: "Read step",
                    description: "Read current step aloud"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            onClick: (e)=>e.stopPropagation(),
            className: "bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-neutral-100 sticky top-0 bg-white rounded-t-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-blue-100 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            className: "w-6 h-6 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-neutral-900",
                                                children: "Voice Commands"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-500",
                                                children: "Hands-free cooking made easy"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-neutral-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-neutral-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        commands.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-neutral-900 mb-3",
                                        children: section.category
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 bg-blue-100 rounded-lg mt-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                            className: "w-4 h-4 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-neutral-900",
                                                                children: [
                                                                    '"',
                                                                    item.command,
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-neutral-600",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.command, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, section.category, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-blue-50 rounded-xl border border-blue-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "💡 Tip:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    " Click the microphone button and speak clearly. The app will confirm what it heard and execute the command."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/hooks/use-voice-control.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceControl",
    ()=>useVoiceControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useVoiceControl(options) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isListening: false,
        isSupported: false,
        lastCommand: null,
        error: null
    });
    // Awake state (internal to avoid frequent re-renders if not needed, but we might want UI feedback)
    const [isAwake, setIsAwake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wakeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs to avoid closure staleness
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(state);
    const isAwakeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isAwake);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const synthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(options);
    // Keep refs updated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        stateRef.current = state;
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isAwakeRef.current = isAwake;
    }, [
        isAwake
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        optionsRef.current = options;
    }, [
        options
    ]);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        if (!synthRef.current) return;
        synthRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        synthRef.current.speak(utterance);
    }, []);
    const activateAwakeMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsAwake(true);
        // Play a subtle sound or give feedback?
        // speak("Yes?"); // Optional: might be annoying if too frequent
        if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
        wakeTimeoutRef.current = setTimeout(()=>{
            setIsAwake(false);
        // speak("Sleeping"); // Optional debug
        }, 10000); // Stay awake for 10 seconds
    }, []);
    const readCurrentStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (optionsRef.current.currentStepText) {
            speak(optionsRef.current.currentStepText);
        }
    }, [
        speak
    ]);
    const processCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((transcript)=>{
        const lowerTranscript = transcript.toLowerCase().trim();
        console.log('Heard:', lowerTranscript);
        // Direct processing - No wake word required
        setState((prev)=>({
                ...prev,
                lastCommand: lowerTranscript,
                error: null
            }));
        const opts = optionsRef.current;
        // Navigation
        if (lowerTranscript.includes('next') || lowerTranscript.includes('forward')) {
            opts.onNextStep?.();
            speak('Moving to next step');
        } else if (lowerTranscript.includes('previous') || lowerTranscript.includes('back')) {
            opts.onPreviousStep?.();
            speak('Going back');
        } else if (lowerTranscript.includes('repeat') || lowerTranscript.includes('read')) {
            readCurrentStep();
        } else if (lowerTranscript.match(/step (\d+)/)) {
            const match = lowerTranscript.match(/step (\d+)/);
            if (match) {
                const stepNum = parseInt(match[1]);
                if (stepNum > 0 && stepNum <= (opts.totalSteps || 0)) {
                    opts.onGoToStep?.(stepNum - 1);
                    speak(`Going to step ${stepNum}`);
                }
            }
        } else if (lowerTranscript.includes('start timer')) {
            opts.onStartTimer?.();
            speak('Timer started');
        } else if (lowerTranscript.includes('pause timer') || lowerTranscript.includes('stop timer')) {
            opts.onPauseTimer?.();
            speak('Timer paused');
        } else if (lowerTranscript.includes('resume timer')) {
            opts.onResumeTimer?.();
            speak('Timer resumed');
        } else if (lowerTranscript.includes('ingredients')) {
            opts.onShowIngredients?.();
            speak('Showing ingredients');
        } else if (lowerTranscript.includes('directions') || lowerTranscript.includes('steps')) {
            opts.onShowDirections?.();
            speak('Showing directions');
        }
    }, [
        speak,
        readCurrentStep
    ]);
    // Wake Lock Ref
    const wakeLockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestWakeLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if ('wakeLock' in navigator) {
            try {
                wakeLockRef.current = await navigator.wakeLock.request('screen');
                console.log('Wake Lock active');
            } catch (err) {
                console.error('Wake Lock error:', err);
            }
        }
    }, []);
    const releaseWakeLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (wakeLockRef.current) {
            try {
                await wakeLockRef.current.release();
                wakeLockRef.current = null;
                console.log('Wake Lock released');
            } catch (err) {
                console.error('Wake Lock release error:', err);
            }
        }
    }, []);
    // Initialize Speech Recognition
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const SpeechRecognition = undefined;
    }, [
        processCommand,
        requestWakeLock,
        releaseWakeLock
    ]);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!recognitionRef.current || state.isListening) return;
        try {
            recognitionRef.current.start();
        } catch (error) {
            let msg = 'Failed to start';
            if (error.name === 'NotAllowedError') msg = 'Microphone denied';
            setState((prev)=>({
                    ...prev,
                    error: msg
                }));
        }
    }, [
        state.isListening
    ]);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!recognitionRef.current) return;
        setState((prev)=>({
                ...prev,
                isListening: false
            }));
        recognitionRef.current.stop();
        setIsAwake(false);
        if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
    }, []);
    return {
        ...state,
        isAwake,
        startListening,
        stopListening,
        speak,
        readCurrentStep
    };
}
}),
"[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileBottomNav",
    ()=>MobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-ssr] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
"use client";
;
;
;
function MobileBottomNav({ activeTab, onTabChange, currentStep, totalSteps, progressPercentage, isScrollingDown, isVoiceListening, isVoiceSupported, onVoiceToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isVoiceSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onVoiceToggle,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("md:hidden fixed z-[60] transition-all duration-500 ease-in-out flex flex-col items-center justify-center rounded-full shadow-xl active:scale-95 text-white overflow-hidden w-16 h-16", isScrollingDown ? "bottom-8 right-6 bg-neutral-900 border-0" // Floating: Lowered to bottom-8 (32px)
                 : "bottom-5 left-1/2 -translate-x-1/2 border-4 border-gray-50 bg-neutral-900", isVoiceListening && "bg-red-500 animate-pulse ring-4 ring-red-200 border-red-100"),
                children: isVoiceListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                    className: "w-7 h-7"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                    lineNumber: 45,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                    className: "w-7 h-7"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("md:hidden fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex flex-col", isScrollingDown ? "translate-y-[150%]" : "translate-y-0", "bottom-0"),
                children: [
                    activeTab === "directions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full bg-neutral-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-neutral-900 transition-all duration-300",
                                    style: {
                                        width: `${progressPercentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-1.5 flex justify-between text-[10px] text-neutral-500 font-medium uppercase tracking-wider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Step ",
                                            currentStep + 1,
                                            " of ",
                                            totalSteps
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            progressPercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white/80 backdrop-blur-xl border-t border-neutral-200 pb-[env(safe-area-inset-bottom)]", activeTab !== "directions" && "shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-8 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onTabChange("ingredients"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]", activeTab === "ingredients" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", activeTab === "ingredients" && "stroke-[2.5px]")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold",
                                            children: "Ingredients"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onTabChange("directions"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]", activeTab === "directions" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", activeTab === "directions" && "stroke-[2.5px]")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold",
                                            children: "Directions"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookingInterface",
    ()=>CookingInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$voice$2d$control$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/voice-control-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$hooks$2f$use$2d$voice$2d$control$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/hooks/use-voice-control.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$mobile$2d$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/mobile-bottom-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function AutoFitText({ children, className, isActive }) {
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive || !textRef.current) return;
        const el = textRef.current;
        // Reset to initial state (remove inline style) to check if default size fits
        el.style.fontSize = "";
        const checkOverflow = ()=>{
            // Check if content height is greater than visible height
            // 1px buffer for sub-pixel rendering differences
            return el.scrollHeight > el.clientHeight + 1;
        };
        // If it fits naturally, do nothing!
        if (!checkOverflow()) return;
        // Safety check: If content is WAY too long (e.g. > 1.3x container),
        // don't even try to shrink it. Just let it scroll.
        // This prevents shrinking text for massive paragraphs where it won't help anyway.
        if (el.scrollHeight > el.clientHeight * 1.3) return;
        // Start from the computed style
        let size = parseFloat(window.getComputedStyle(el).fontSize);
        const minSize = 24; // High floor - keep text readable!
        // Reduce incrementally until it fits or hits minimum
        while(checkOverflow() && size > minSize){
            size -= 0.5;
            el.style.fontSize = `${size}px`;
            el.style.lineHeight = "1.4"; // Ensure tight but readable line height
        }
    }, [
        isActive,
        children
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: textRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className, isActive && "flex-1 overflow-y-auto scrollbar-hide"),
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function CookingInterface({ recipe, onBack }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ingredients");
    const [checkedIngredients, setCheckedIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentStepIndex, setCurrentStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Store timers as a map: "stepIndex-partIndex" -> { remaining: number, isRunning: boolean, minTime: number, maxTime: number }
    const [timers, setTimers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isScrollingDown, setIsScrollingDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showVoiceHelp, setShowVoiceHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Substitution State
    const [subModalOpen, setSubModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIngredient, setSelectedIngredient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [substitutions, setSubstitutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubLoading, setIsSubLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const getSubstitutions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].actions.getIngredientSubstitutions);
    const handleSubstitute = async (ingredient)=>{
        // Extract just the name part for better AI results
        const name = ingredient.split(",")[0].trim();
        setSelectedIngredient(name);
        setSubstitutions(null);
        setSubModalOpen(true);
        setIsSubLoading(true);
        try {
            const result = await getSubstitutions({
                ingredient: name,
                recipeName: recipe.recipe_name
            });
            setSubstitutions(result.substitutions);
        } catch (error) {
            console.error("Failed to get substitutions", error);
        } finally{
            setIsSubLoading(false);
        }
    };
    const directionsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stepRefsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // For TikTok-style snap scroll
    const isSnappingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wheelTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Touch handling refs
    const touchStartYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchLastYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep a ref of currentStepIndex for handlers (avoid stale closures)
    const currentStepIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(currentStepIndex);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        currentStepIndexRef.current = currentStepIndex;
    }, [
        currentStepIndex
    ]);
    // Helper function to find and control timer in current step
    const findCurrentStepTimer = ()=>{
        if (activeTab !== "directions") return null;
        const instruction = recipe.instructions[currentStepIndex];
        const timeMatch = instruction.match(/(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/i);
        if (timeMatch) {
            // Find the index of this time text in the split instruction
            const parts = instruction.split(/(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/gi);
            const timePartIndex = parts.findIndex((part)=>/\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?)/i.test(part));
            if (timePartIndex !== -1) {
                return `${currentStepIndex}-${timePartIndex}`;
            }
        }
        return null;
    };
    const startCurrentStepTimer = ()=>{
        const timerKey = findCurrentStepTimer();
        if (!timerKey) {
            console.log("No timer found in current step");
            return;
        }
        const instruction = recipe.instructions[currentStepIndex];
        const t = extractTimer(instruction);
        if (t) {
            setTimers((prev)=>{
                const current = prev[timerKey];
                if (current) {
                    // Timer exists, start it if paused
                    if (!current.isRunning) {
                        return {
                            ...prev,
                            [timerKey]: {
                                ...current,
                                isRunning: true
                            }
                        };
                    }
                    return prev;
                } else {
                    // Initialize and start new timer
                    return {
                        ...prev,
                        [timerKey]: {
                            remaining: t.min,
                            isRunning: true,
                            minTime: t.min,
                            maxTime: t.max
                        }
                    };
                }
            });
            console.log("Timer started for step", currentStepIndex + 1);
        }
    };
    const pauseCurrentStepTimer = ()=>{
        const timerKey = findCurrentStepTimer();
        if (!timerKey) {
            console.log("No timer found in current step");
            return;
        }
        setTimers((prev)=>{
            const current = prev[timerKey];
            if (current && current.isRunning) {
                return {
                    ...prev,
                    [timerKey]: {
                        ...current,
                        isRunning: false
                    }
                };
            }
            return prev;
        });
        console.log("Timer paused for step", currentStepIndex + 1);
    };
    const resumeCurrentStepTimer = ()=>{
        const timerKey = findCurrentStepTimer();
        if (!timerKey) {
            console.log("No timer found in current step");
            return;
        }
        setTimers((prev)=>{
            const current = prev[timerKey];
            if (current && !current.isRunning) {
                return {
                    ...prev,
                    [timerKey]: {
                        ...current,
                        isRunning: true
                    }
                };
            }
            return prev;
        });
        console.log("Timer resumed for step", currentStepIndex + 1);
    };
    // Voice Control Integration
    const voiceControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$hooks$2f$use$2d$voice$2d$control$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVoiceControl"])({
        onNextStep: ()=>{
            if (activeTab === "directions" && currentStepIndex < recipe.instructions.length - 1) {
                const nextIndex = currentStepIndex + 1;
                setCurrentStepIndex(nextIndex);
                stepRefsRef.current[nextIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        },
        onPreviousStep: ()=>{
            if (activeTab === "directions" && currentStepIndex > 0) {
                const prevIndex = currentStepIndex - 1;
                setCurrentStepIndex(prevIndex);
                stepRefsRef.current[prevIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        },
        onGoToStep: (stepIndex)=>{
            if (activeTab === "directions" && stepIndex >= 0 && stepIndex < recipe.instructions.length) {
                setCurrentStepIndex(stepIndex);
                stepRefsRef.current[stepIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        },
        onStartTimer: startCurrentStepTimer,
        onPauseTimer: pauseCurrentStepTimer,
        onResumeTimer: resumeCurrentStepTimer,
        onShowIngredients: ()=>setActiveTab("ingredients"),
        onShowDirections: ()=>setActiveTab("directions"),
        onReadStep: undefined,
        currentStepText: activeTab === "directions" ? recipe.instructions[currentStepIndex] : undefined,
        totalSteps: recipe.instructions.length
    });
    const extractTimer = (text)=>{
        // Match time ranges like "14-20 minutes" or "1-2 hours"
        const rangeMatch = text.match(/(\d+)\s*[-–to]+\s*(\d+)\s*(minutes?|mins?|hours?|hrs?)/i);
        if (rangeMatch) {
            const minVal = parseInt(rangeMatch[1]);
            const maxVal = parseInt(rangeMatch[2]);
            const unit = rangeMatch[3].toLowerCase();
            const multiplier = unit.includes("hour") ? 3600 : 60;
            return {
                min: minVal * multiplier,
                max: maxVal * multiplier
            };
        }
        // Match single time like "15 minutes" - treat as both min and max
        const singleMatch = text.match(/(\d+)\s*(minutes?|mins?|hours?|hrs?)/i);
        if (!singleMatch) return null;
        const val = parseInt(singleMatch[1]);
        const unit = singleMatch[2].toLowerCase();
        const seconds = unit.includes("hour") ? val * 3600 : val * 60;
        return {
            min: seconds,
            max: seconds
        };
    };
    const formatTime = (seconds)=>{
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };
    // Timer Logic - Decrement all running timers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setTimers((prev)=>{
                const next = {
                    ...prev
                };
                let hasChanges = false;
                Object.keys(next).forEach((key)=>{
                    if (next[key].isRunning && next[key].remaining > 0) {
                        next[key] = {
                            ...next[key],
                            remaining: next[key].remaining - 1
                        };
                        hasChanges = true;
                    // Don't auto-pause - let it continue to maxTime
                    // User can manually pause/stop
                    }
                });
                return hasChanges ? next : prev;
            });
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    const getStepIngredients = (step)=>recipe.ingredients.filter((ing)=>step.toLowerCase().includes(ing.split(",")[0].toLowerCase()));
    // Detect active step (keep this untouched)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab !== "directions") return;
        const observer = new IntersectionObserver((entries)=>{
            let topIndex = currentStepIndexRef.current;
            let maxRatio = 0;
            for (const entry of entries){
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    const idx = Number(entry.target.getAttribute("data-step-index"));
                    if (!isNaN(idx)) topIndex = idx;
                }
            }
            if (maxRatio > 0.4) setCurrentStepIndex(topIndex);
        }, {
            threshold: 0.5
        });
        stepRefsRef.current.forEach((r)=>r && observer.observe(r));
        return ()=>observer.disconnect();
    }, [
        activeTab
    ]);
    // 👉 **TikTok Vertical Feed Scroll (wheel + touch)**
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab !== "directions") return;
        const container = directionsContainerRef.current;
        if (!container) return;
        /* ---------- WHEEL (desktop) ---------- */ const onWheel = (e)=>{
            // If already snapping, prevent default and ignore
            if (isSnappingRef.current) {
                e.preventDefault();
                return;
            }
            // Prevent the browser's default smooth continuous scroll
            e.preventDefault();
            const direction = e.deltaY > 0 ? "down" : "up";
            if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
            // Buffer multiple wheel events into one snapping action
            wheelTimeoutRef.current = setTimeout(()=>{
                isSnappingRef.current = true;
                const idx = currentStepIndexRef.current;
                if (direction === "down" && idx < recipe.instructions.length - 1) {
                    stepRefsRef.current[idx + 1]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                } else if (direction === "up" && idx > 0) {
                    stepRefsRef.current[idx - 1]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
                // keep snapping locked briefly while animation runs
                setTimeout(()=>{
                    isSnappingRef.current = false;
                }, 450);
            }, 50);
        };
        container.addEventListener("wheel", onWheel, {
            passive: false
        });
        /* ---------- TOUCH (mobile / touch devices) ---------- */ const SWIPE_THRESHOLD = 40; // px — Option A: very sensitive (TikTok-like)
        const FLING_VELOCITY_THRESHOLD = 0.3; // px per ms, if user flicks quickly
        const onTouchStart = (ev)=>{
            if (isSnappingRef.current) {
                // If snapping in progress, do nothing
                ev.preventDefault();
                return;
            }
            const t = ev.touches[0];
            touchStartYRef.current = t.clientY;
            touchLastYRef.current = t.clientY;
            touchStartTimeRef.current = Date.now();
            // clear any pending timeouts
            if (touchTimeoutRef.current) {
                clearTimeout(touchTimeoutRef.current);
                touchTimeoutRef.current = null;
            }
        };
        const onTouchMove = (ev)=>{
            // Prevent native scroll while we're detecting a vertical swipe for our feed
            // Only prevent if we have a single touch (no pinch)
            if (ev.touches.length === 1) {
                ev.preventDefault();
                const t = ev.touches[0];
                touchLastYRef.current = t.clientY;
            }
        };
        const attemptSnap = (direction)=>{
            if (isSnappingRef.current) return;
            isSnappingRef.current = true;
            const idx = currentStepIndexRef.current;
            if (direction === "down" && idx < recipe.instructions.length - 1) {
                stepRefsRef.current[idx + 1]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            } else if (direction === "up" && idx > 0) {
                stepRefsRef.current[idx - 1]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
            // unlock after animation time
            setTimeout(()=>{
                isSnappingRef.current = false;
            }, 450);
        };
        const onTouchEnd = (ev)=>{
            const startY = touchStartYRef.current;
            const lastY = touchLastYRef.current;
            const startTime = touchStartTimeRef.current;
            touchStartYRef.current = null;
            touchLastYRef.current = null;
            touchStartTimeRef.current = null;
            if (startY == null || lastY == null || startTime == null) return;
            const deltaY = startY - lastY;
            const elapsed = Date.now() - startTime;
            const velocity = Math.abs(deltaY) / Math.max(1, elapsed); // px per ms
            // Quick fling with small move => should still count
            if (Math.abs(deltaY) >= SWIPE_THRESHOLD || velocity >= FLING_VELOCITY_THRESHOLD) {
                if (deltaY > 0) {
                    // swipe up -> go to next (down direction)
                    attemptSnap("down");
                } else {
                    // swipe down -> go to previous (up direction)
                    attemptSnap("up");
                }
            } else {
                // Not enough movement — snap back to current card to avoid partial scroll
                const idx = currentStepIndexRef.current;
                stepRefsRef.current[idx]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
            // tiny safety unlock if something went wrong
            if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
            touchTimeoutRef.current = setTimeout(()=>{
                isSnappingRef.current = false;
                touchTimeoutRef.current = null;
            }, 800);
        };
        container.addEventListener("touchstart", onTouchStart, {
            passive: false
        });
        container.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
        container.addEventListener("touchend", onTouchEnd, {
            passive: false
        });
        container.addEventListener("touchcancel", onTouchEnd, {
            passive: false
        });
        // Clean up
        return ()=>{
            container.removeEventListener("wheel", onWheel);
            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchmove", onTouchMove);
            container.removeEventListener("touchend", onTouchEnd);
            container.removeEventListener("touchcancel", onTouchEnd);
            if (wheelTimeoutRef.current) {
                clearTimeout(wheelTimeoutRef.current);
                wheelTimeoutRef.current = null;
            }
            if (touchTimeoutRef.current) {
                clearTimeout(touchTimeoutRef.current);
                touchTimeoutRef.current = null;
            }
        };
    }, [
        activeTab,
        recipe.instructions.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollY
    ]);
    const toggleAllIngredients = ()=>setCheckedIngredients((prev)=>{
            const allChecked = recipe.ingredients.every((_, i)=>prev[i]);
            if (allChecked) return {};
            return Object.fromEntries(recipe.ingredients.map((_, i)=>[
                    i,
                    true
                ]));
        });
    const copyIngredients = ()=>navigator.clipboard.writeText(recipe.ingredients.join("\n"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .timer-shine {
          background: linear-gradient(to right, #15803d 20%, #fbbf24 40%, #fbbf24 60%, #15803d 80%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear 1 forwards;
        }
      `
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                maxWidth: "max-w-4xl",
                rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowVoiceHelp(true),
                            className: "p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                            title: "Voice Commands Help",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 631,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 626,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 637,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 633,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 625,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("sticky z-30 hidden md:flex justify-center px-4 py-4 pointer-events-none transition-all duration-500 ease-in-out", isScrollingDown ? "top-2" : "top-[80px]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto bg-white/70 backdrop-blur-xl shadow-lg rounded-full p-1.5 flex items-center gap-1 border border-white/20 ring-1 ring-black/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("ingredients"),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300", activeTab === "ingredients" ? "bg-neutral-900 text-white shadow-md transform scale-105" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"),
                            children: "Ingredients"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("directions"),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300", activeTab === "directions" ? "bg-neutral-900 text-white shadow-md transform scale-105" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"),
                            children: "Directions"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 px-4 sm:px-6 pb-4 max-w-4xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl sm:text-4xl font-bold text-neutral-900",
                    children: recipe.recipe_name
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 678,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden",
                children: activeTab === "ingredients" ? // -------------------------
                // INGREDIENTS TAB (unchanged)
                // -------------------------
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 py-8 max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-neutral-900",
                                                children: "Recommended Ingredients"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 694,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-500 text-sm mt-1",
                                                children: "Select the ingredients you have missing to view nearby store options or add to your list."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 697,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 693,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleAllIngredients,
                                        className: "text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 hover:text-neutral-600 whitespace-nowrap ml-4",
                                        children: "Select All"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 702,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 692,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 691,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl p-2 border border-neutral-100 mb-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: recipe.ingredients.map((ingredient, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex items-center gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors cursor-pointer",
                                        onClick: ()=>setCheckedIngredients((prev)=>({
                                                    ...prev,
                                                    [idx]: !prev[idx]
                                                })),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: (()=>{
                                                    // Split ingredient into name and measurement
                                                    const parts = ingredient.split(",");
                                                    const name = parts[0]?.trim() || ingredient;
                                                    const measurement = parts.slice(1).join(",").trim();
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold transition-all", checkedIngredients[idx] ? "text-neutral-400 line-through" : "text-neutral-900"),
                                                                children: name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 29
                                                            }, this),
                                                            measurement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm mt-1 transition-all", checkedIngredients[idx] ? "text-neutral-300 line-through" : "text-neutral-500"),
                                                                children: measurement
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                lineNumber: 744,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 27
                                                    }, this);
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 724,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    handleSubstitute(ingredient);
                                                },
                                                className: "p-2 text-neutral-300 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                                                title: "Find substitutes",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 760,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all", checkedIngredients[idx] ? "bg-neutral-900 border-neutral-900" : "border-neutral-200 group-hover:border-neutral-300"),
                                                children: checkedIngredients[idx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 771,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 714,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 712,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 711,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 gap-4 w-full max-w-md px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: copyIngredients,
                                    className: "flex-1 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this),
                                        "Copy List"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 802,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this),
                                        "Find Stores"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 809,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 801,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden fixed bottom-24 left-6 z-40 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-12 h-12 bg-neutral-900 text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 818,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 817,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: copyIngredients,
                                    className: "w-12 h-12 bg-white text-neutral-900 border border-neutral-200 rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 820,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 816,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 690,
                    columnNumber: 11
                }, this) : // -------------------------
                // DIRECTIONS TAB
                // -------------------------
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: directionsContainerRef,
                    className: "h-full overflow-y-scroll px-4 sm:px-6 py-8 max-w-4xl mx-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-32",
                        children: recipe.instructions.map((instruction, idx)=>{
                            const isActive = idx === currentStepIndex;
                            const stepIngredients = getStepIngredients(instruction);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>stepRefsRef.current[idx] = el,
                                "data-step-index": idx,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-500 rounded-3xl overflow-hidden snap-center snap-always mb-6 last:mb-0", "h-[calc(100vh-280px)] md:h-auto md:min-h-[calc(100vh-280px)]", isActive ? "bg-white scale-100 opacity-100" : "bg-neutral-200 scale-95 opacity-50 cursor-pointer hover:opacity-70"),
                                onClick: ()=>!isActive && stepRefsRef.current[idx]?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center"
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-lg flex items-center gap-2", isActive ? "bg-neutral-100" : "bg-neutral-300"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-neutral-900",
                                                        children: [
                                                            "Step ",
                                                            idx + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-500",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 863,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 862,
                                            columnNumber: 23
                                        }, this),
                                        isActive && stepIngredients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-6",
                                            children: stepIngredients.map((ing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-neutral-100 rounded-lg text-sm text-neutral-600 font-medium",
                                                    children: ing.split(",")[0]
                                                }, i, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 29
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 877,
                                            columnNumber: 25
                                        }, this),
                                        (()=>{
                                            // Extract subheader if present (pattern: **Title:** at start)
                                            const subheaderMatch = instruction.match(/^\*\*(.+?):\*\*\s*/);
                                            const subheader = subheaderMatch ? subheaderMatch[1] : null;
                                            const mainText = subheader && subheaderMatch ? instruction.slice(subheaderMatch[0].length) : instruction;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    subheader && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl sm:text-3xl font-bold text-neutral-900 mb-4",
                                                        children: subheader
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoFitText, {
                                                        isActive: isActive,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium transition-all", isActive ? "text-3xl sm:text-4xl leading-[1.5] text-neutral-900" : "text-lg text-neutral-600 line-clamp-3 leading-relaxed"),
                                                        children: isActive ? mainText.split(/(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/gi).map((part, i)=>{
                                                            if (/\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?)/i.test(part)) {
                                                                const t = extractTimer(part);
                                                                const timerKey = `${idx}-${i}`;
                                                                const timerState = timers[timerKey];
                                                                const hasTimer = timerState && timerState.remaining > 0;
                                                                // Determine timer state for color coding
                                                                let timerStatus = "inactive";
                                                                if (hasTimer) {
                                                                    const elapsed = timerState.minTime - timerState.remaining;
                                                                    if (elapsed < 0) {
                                                                        // Still counting down to minTime
                                                                        timerStatus = "running";
                                                                    } else {
                                                                        // Past minTime - check if we're in the range or past maxTime
                                                                        const totalRange = timerState.maxTime - timerState.minTime;
                                                                        const timeIntoRange = elapsed;
                                                                        if (timeIntoRange <= totalRange) {
                                                                            // Still in check zone (between min and max)
                                                                            timerStatus = "check";
                                                                        } else {
                                                                            // Past max time
                                                                            timerStatus = "max";
                                                                        }
                                                                    }
                                                                }
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        if (t) {
                                                                            setTimers((prev)=>{
                                                                                const current = prev[timerKey];
                                                                                if (current) {
                                                                                    // Toggle running state
                                                                                    return {
                                                                                        ...prev,
                                                                                        [timerKey]: {
                                                                                            ...current,
                                                                                            isRunning: !current.isRunning
                                                                                        }
                                                                                    };
                                                                                } else {
                                                                                    // Initialize and start at minTime
                                                                                    return {
                                                                                        ...prev,
                                                                                        [timerKey]: {
                                                                                            remaining: t.min,
                                                                                            isRunning: true,
                                                                                            minTime: t.min,
                                                                                            maxTime: t.max
                                                                                        }
                                                                                    };
                                                                                }
                                                                            });
                                                                        }
                                                                    },
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-bold cursor-pointer inline-flex items-center gap-2 px-3 py-1 rounded-2xl transition-all", timerStatus === "running" && "bg-green-50 text-green-600 border-2 border-green-200", timerStatus === "check" && "bg-yellow-50 text-yellow-700 border-2 border-yellow-300 animate-pulse", timerStatus === "max" && "bg-red-50 text-red-600 border-2 border-red-300 animate-pulse", timerStatus === "inactive" && "text-green-600 hover:bg-green-50", isActive && timerStatus === "inactive" && "timer-shine"),
                                                                    style: {
                                                                        WebkitTextFillColor: isActive && timerStatus === "inactive" ? "transparent" : "initial"
                                                                    },
                                                                    children: hasTimer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono flex items-center gap-1.5",
                                                                        children: [
                                                                            formatTime(timerState.remaining),
                                                                            timerStatus === "check" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-bold",
                                                                                children: "✓ Check"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                                lineNumber: 1027,
                                                                                columnNumber: 51
                                                                            }, this),
                                                                            timerStatus === "max" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-bold",
                                                                                children: "⚠ Max"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                                lineNumber: 1032,
                                                                                columnNumber: 51
                                                                            }, this),
                                                                            !timerState.isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs",
                                                                                children: "(Paused)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                                lineNumber: 1037,
                                                                                columnNumber: 51
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                        lineNumber: 1022,
                                                                        columnNumber: 47
                                                                    }, this) : part
                                                                }, i, false, {
                                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                    lineNumber: 966,
                                                                    columnNumber: 43
                                                                }, this);
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: part
                                                            }, i, false, {
                                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 46
                                                            }, this);
                                                        }) : instruction
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 861,
                                    columnNumber: 21
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 842,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                        lineNumber: 836,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 832,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this),
            activeTab === "directions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-2xl rounded-2xl p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-neutral-900",
                                    children: [
                                        "Step ",
                                        currentStepIndex + 1,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-400",
                                            children: [
                                                "of ",
                                                recipe.instructions.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 1071,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-neutral-900",
                                    children: [
                                        Math.round((currentStepIndex + 1) / recipe.instructions.length * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 1068,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 h-3",
                            children: recipe.instructions.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full flex-1 rounded-full transition-all duration-300", i <= currentStepIndex ? "bg-neutral-900" : "bg-neutral-100")
                                }, i, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 1085,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 1083,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 1067,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 1066,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$voice$2d$control$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceControlButton"], {
                    isListening: voiceControl.isListening,
                    isSupported: voiceControl.isSupported,
                    lastCommand: voiceControl.lastCommand,
                    error: voiceControl.error,
                    onStartListening: voiceControl.startListening,
                    onStopListening: voiceControl.stopListening,
                    onShowHelp: ()=>setShowVoiceHelp(true)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 1100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 1099,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$voice$2d$control$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceHelpModal"], {
                isOpen: showVoiceHelp,
                onClose: ()=>setShowVoiceHelp(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 1111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$mobile$2d$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileBottomNav"], {
                activeTab: activeTab,
                onTabChange: setActiveTab,
                currentStep: currentStepIndex,
                totalSteps: recipe.instructions.length,
                progressPercentage: Math.round((currentStepIndex + 1) / recipe.instructions.length * 100),
                isScrollingDown: isScrollingDown,
                isVoiceListening: voiceControl.isListening,
                isVoiceSupported: voiceControl.isSupported,
                onVoiceToggle: ()=>{
                    if (voiceControl.isListening) {
                        voiceControl.stopListening();
                    } else {
                        voiceControl.startListening();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 1117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
        lineNumber: 607,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingModal",
    ()=>LoadingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LoadingModal({ onCancel }) {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setProgress((prev)=>{
                if (prev >= 95) return prev;
                const increment = Math.random() * 30;
                return Math.min(prev + increment, 95);
            });
        }, 500);
        return ()=>clearInterval(interval);
    }, []);
    // Food icons for the spinner circle
    const foodEmojis = [
        "🍗",
        "🍅",
        "🍎",
        "🥦",
        "🍲",
        "🥕",
        "🍄",
        "🥒"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl p-12 max-w-sm w-full mx-4 text-center space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-40 h-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 animate-spin",
                                style: {
                                    animationDuration: "4s"
                                },
                                children: foodEmojis.map((emoji, i)=>{
                                    const angle = i / foodEmojis.length * 360;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-12 h-12 flex items-center justify-center text-2xl",
                                        style: {
                                            transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                                            top: "50%",
                                            left: "50%",
                                            marginLeft: "-24px",
                                            marginTop: "-24px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full w-12 h-12 flex items-center justify-center",
                                            children: emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-bold text-neutral-900",
                            children: "Extracting recipe..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500",
                            children: "Estimated time: 15 to 25 seconds"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-neutral-200 rounded-full h-2 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-neutral-900 h-full rounded-full transition-all duration-300 ease-out",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCancel,
                    className: "w-full py-3 px-4 text-neutral-600 hover:bg-neutral-100 rounded-2xl transition-colors text-sm font-medium",
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/components/app-loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLoader",
    ()=>AppLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function AppLoader() {
    const fullText = "Preparing your kitchen...";
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Typing animation logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let index = 0;
        const typingInterval = setInterval(()=>{
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(typingInterval);
                // Wait 2 seconds before hiding loader
                setTimeout(()=>{
                    setIsLoading(false);
                }, 2000);
            }
        }, 70); // typing speed
        return ()=>clearInterval(typingInterval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
            className: "fixed inset-0 z-[200] bg-neutral-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: "/loadLogo.png",
                        alt: "Chef Logo",
                        className: "w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-6 object-contain",
                        animate: {
                            scale: [
                                1,
                                1.15,
                                1
                            ]
                        },
                        transition: {
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-neutral-900 text-sm sm:text-base font-medium tracking-wide",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            displayedText,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-pulse",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/app-loader.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/chef-gemini-clone/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$cooking$2d$interface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$loading$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$app$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/app-loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function HomePage() {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [generatedRecipe, setGeneratedRecipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const generateRecipeAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].actions.generateRecipe);
    const handleGenerateRecipe = async (input, inputType)=>{
        setIsLoading(true);
        try {
            // const response = await fetch("/api/generate-recipe", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ input, inputType }),
            // })
            // if (!response.ok) {
            //   const errorData = await response.json()
            //   throw new Error(errorData.error || "Failed to generate recipe")
            // }
            // const recipe = await response.json()
            const recipe = await generateRecipeAction({
                input,
                inputType
            });
            setGeneratedRecipe(recipe);
            setCurrentPage("overview");
        } catch (error) {
            console.error("Error generating recipe:", error);
            alert(error.message || "Failed to generate recipe. Please try again.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleStartCooking = ()=>{
        setCurrentPage("cooking");
    };
    const handleBackHome = ()=>{
        setCurrentPage("home");
        setGeneratedRecipe(null);
    };
    const handleBackToOverview = ()=>{
        setCurrentPage("overview");
    };
    const handleCancelLoading = ()=>{
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-neutral-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$app$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLoader"], {}, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$loading$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingModal"], {
                onCancel: handleCancelLoading
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 67,
                columnNumber: 21
            }, this),
            currentPage === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecipeInput"], {
                onGenerate: handleGenerateRecipe,
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : currentPage === "overview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecipeOverview"], {
                    recipe: generatedRecipe,
                    onStartCooking: handleStartCooking,
                    onBack: handleBackHome
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$cooking$2d$interface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CookingInterface"], {
                recipe: generatedRecipe,
                onBack: handleBackToOverview
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_chef-gemini-clone_d4a8c618._.js.map