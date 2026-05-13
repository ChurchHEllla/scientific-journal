import { defineConfig, globalIgnores } from "eslint/config"
import next from "eslint-config-next"
import tseslint from "typescript-eslint"

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
            "@typescript-eslint/semi": "off",
            "semi": ["error", "never"],

            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",

            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],

            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "warn",

            "react/react-in-jsx-scope": "off",
            "react-hooks/exhaustive-deps": "warn",

            "prefer-const": "error",
            "no-var": "error",
        },
    },
])
