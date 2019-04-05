module.exports = {
    "extends": "stylelint-config-standard",
    "ignoreFiles": ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "extend",
                    "include",
                    "import",
                    "function",
                    "return",
                    "if",
                    "content",
                    "mixin",
                    "else",
                    "each"
                ]
            }
        ],
        "declaration-colon-newline-after": null,
        "declaration-empty-line-before": null,
        "no-eol-whitespace": null,
        "color-hex-case": null,
        "function-comma-space-after": null,
        "comment-empty-line-before": [
            "always",
            {
                "ignore": ["stylelint-commands"]
            }
        ],
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignore": ["consecutive-duplicates-with-different-values"]
            }
        ],
        "declaration-colon-space-after": "always",
        "indentation": null,
        "selector-pseudo-element-colon-notation": null,
        "max-empty-lines": 2,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["export", "import", "global", "local"]
            }
        ],
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": ["composes"]
            }
        ],
        "at-rule-empty-line-before": null,
        "block-closing-brace-newline-after": null
    }
}