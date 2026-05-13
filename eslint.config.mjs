import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";

export default defineConfig([
    // Next.js базовые правила (включая React + Core Web Vitals)
    ...next,

    // TypeScript правила (строгие, но адекватные)
    ...tseslint.configs.recommended,

    // Игнорируем сборки и мусор
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "node_modules/**",
        "next-env.d.ts",
    ]),

    // Кастомные улучшения
    {
        rules: {
            // 🚨 ловит реальные ошибки
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",

            // 🔥 TS-улучшения
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],

            "@typescript-eslint/no-explicit-any": "off", // можно включить later
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/semi": ["error", "never"],

            "react/react-in-jsx-scope": "off",
            "react-hooks/exhaustive-deps": "warn",

            "prefer-const": "error",
            "no-var": "error",
        },
    },
]);
