# vscode插件

- **Atom One Dark Theme - 主题色**
- **Auto Close Tag - 自动闭合标签**
- **Auto Rename Tag - 自动重名标签名**
- **Better Comments - 注释高亮**
- **Code Runner - 文件启动**
- **Color HighLight - 颜色高亮**
- **Code Novel - 代码注释小说**
- **Carbon Product Icons - vscode图标更改**
- **Code Spell Checker - 单词检查**
- **Error Lens - 错误在同一行展示**
- **Git History - git历史提交**
- **GitLens - git信息**
- **Goto definition alias - 去到定义的文件而不是.d.ts文件**
- **HTML CSS Support - HTML CSS支持**
- **Iconify IntelliSense - 图标展示、提示**
- **Image preview - 图片预览**
- **JavaScript (ES6) code snippets - ES6支持**
- **Live Server - 开启服务器**
- **Move TS - Move TypeScript files and update relative imports - 修改文件路径时，其他文件的引入路径也一起修改（详情看操作->右键move xxx）**
- **open in browser - 在浏览器打开**
- **Path Intellisense - 路径提示（需要配置）**
- **Prettier - Code formatter 格式化**
- **SVG - SVG语法补全，预览**
- **Time Master - 记录每日代码时间数量**
- **TypeScript Importer - ts导入支持**
- **Vetur - Vue2插件 与Volar有冲突**
- **Volar - Vue2插件 与Volar有冲突**
- **Vite - Vite插件，Vite项目自动启动**
- **vscode-icons - 文件图标**
- **Where Am I? - 获知当前文件名，展示在左下角提示**

---

- **vscode settings.json 配置 [源自antfu配置](https://github.com/antfu/vscode-settings/blob/main/.vscode/settings.json)**

```json
{
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "args": [
        "-noLogo"
      ]
    }
  },
  "typescript.inlayHints.parameterTypes.enabled": true,
  "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
  "typescript.inlayHints.parameterNames.enabled": "literals",
  "typescript.suggest.paths": false,
  "javascript.suggest.paths": false,
  "editor.accessibilitySupport": "off",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.find.addExtraSpaceOnTop": false,
  "editor.fontSize": 14,
  "editor.glyphMargin": true,
  "editor.guides.bracketPairs": "active",
  "editor.inlineSuggest.enabled": true,
  "editor.lineNumbers": "interval",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.renderWhitespace": "boundary",
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true, // this allows ESLint to auto fix on save
    "source.organizeImports": false
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[markdown]": {
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "window.autoDetectColorScheme": true,
  "window.dialogStyle": "custom",
  "window.nativeTabs": true, // this is great, macOS only
  "window.titleBarStyle": "custom",
  "window.commandCenter": false,
  "window.menuBarVisibility": "compact",
  "workbench.iconTheme": "vscode-icons",
  "workbench.activityBar.visible": true,
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.tabCloseButton": "right",
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  "workbench.editor.limit.value": 5,
  "workbench.preferredDarkColorTheme": "Atom One Dark",
  "workbench.preferredLightColorTheme": "Atom One Dark",
  "workbench.colorTheme": "Atom One Dark",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "workbench.fontAliasing": "antialiased",
  "workbench.list.smoothScrolling": true,
  "workbench.productIconTheme": "icons-carbon",
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.tree.expandMode": "singleClick",
  "workbench.tree.indent": 10,
  "extensions.autoUpdate": "onlyEnabledExtensions",
  "extensions.ignoreRecommendations": true,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.simpleDialog.enable": true,
  "files.autoSave": "onFocusChange",
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.untrackedChanges": "separate",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.fontWeight": "300",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "scm.diffDecorationsGutterWidth": 2,
  "debug.onTaskErrors": "debugAnyway",
  "debug.javascript.autoAttachFilter": "disabled",
  "diffEditor.ignoreTrimWhitespace": false,
  "search.exclude": {
    "**/.git": true,
    "**/.github": true,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  // Extension configs
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.triggerExpansionOnTab": false,
  "errorLens.enabledDiagnosticLevels": [
    "warning",
    "error"
  ],
  "errorLens.excludeBySource": [
    "cSpell",
    "Grammarly",
    "eslint"
  ],
  // ESLint config: https://github.com/antfu/eslint-config
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.quiet": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en,en-US",
  "css.lint.hexColorLength": "ignore",
  "githubIssues.workingIssueFormatScm": "#${issueNumberLabel}",
  "githubPullRequests.fileListLayout": "tree",
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.enabled": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.menus": {
    "editor": {
      "blame": false,
      "clipboard": true,
      "compare": true,
      "history": false,
      "remote": false
    },
    "editorGroup": {
      "blame": true,
      "compare": false
    },
    "editorTab": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true
    },
    "explorer": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true
    },
    "scm": {
      "authors": true
    },
    "scmGroup": {
      "compare": true,
      "openClose": true,
      "stash": true
    },
    "scmGroupInline": {
      "stash": true
    },
    "scmItem": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": false,
      "stash": true
    }
  },
  "i18n-ally.autoDetection": false,
  "i18n-ally.displayLanguage": "en",
  "i18n-ally.ignoredLocales": [],
  "iconify.annotations": true,
  "iconify.inplace": true,
  "svg.preview.mode": "svg",
  "volar.autoCompleteRefs": false,
  "volar.codeLens.pugTools": false,
  "volar.codeLens.scriptSetupTools": true,
  "volar.completion.preferredTagNameCase": "pascal",
  "volar.showWelcomePage": false,
  "volar.takeOverMode.enabled": "auto",
  "windicss.enableCodeFolding": false,
  "prettier.enable": false, // I only use Prettier for manually formatting
  "prettier.printWidth": 200,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  // File Nesting
  // this might not be up to date with the repo, please check yourself
  // updated 2023-02-01 09:11
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
    "*.asax": "$(capture).*.cs, $(capture).*.vb",
    "*.ascx": "$(capture).*.cs, $(capture).*.vb",
    "*.ashx": "$(capture).*.cs, $(capture).*.vb",
    "*.aspx": "$(capture).*.cs, $(capture).*.vb",
    "*.bloc.dart": "$(capture).event.dart, $(capture).state.dart",
    "*.c": "$(capture).h",
    "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cjs": "$(capture).cjs.map, $(capture).*.cjs, $(capture)_*.cjs",
    "*.component.ts": "$(capture).component.html, $(capture).component.spec.ts, $(capture).component.css, $(capture).component.scss, $(capture).component.sass, $(capture).component.less",
    "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.cs": "$(capture).*.cs",
    "*.cshtml": "$(capture).cshtml.cs",
    "*.csproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.css": "$(capture).css.map, $(capture).*.css",
    "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx",
    "*.dart": "$(capture).freezed.dart, $(capture).g.dart",
    "*.ex": "$(capture).html.eex, $(capture).html.heex, $(capture).html.leex",
    "*.go": "$(capture)_test.go",
    "*.java": "$(capture).class",
    "*.js": "$(capture).js.map, $(capture).*.js, $(capture)_*.js",
    "*.jsx": "$(capture).js, $(capture).*.jsx, $(capture)_*.js, $(capture)_*.jsx",
    "*.master": "$(capture).*.cs, $(capture).*.vb",
    "*.mjs": "$(capture).mjs.map, $(capture).*.mjs, $(capture)_*.mjs",
    "*.module.ts": "$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts",
    "*.pubxml": "$(capture).pubxml.user",
    "*.resx": "$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb",
    "*.tex": "$(capture).acn, $(capture).acr, $(capture).alg, $(capture).aux, $(capture).bbl, $(capture).blg, $(capture).fdb_latexmk, $(capture).fls, $(capture).glg, $(capture).glo, $(capture).gls, $(capture).idx, $(capture).ind, $(capture).ist, $(capture).lof, $(capture).log, $(capture).lot, $(capture).out, $(capture).pdf, $(capture).synctex.gz, $(capture).toc, $(capture).xdv",
    "*.ts": "$(capture).js, $(capture).d.ts.map, $(capture).*.ts, $(capture)_*.js, $(capture)_*.ts",
    "*.tsx": "$(capture).ts, $(capture).*.tsx, $(capture)_*.ts, $(capture)_*.tsx",
    "*.vbproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.vue": "$(capture).*.ts, $(capture).*.js, $(capture).story.vue",
    "*.xaml": "$(capture).xaml.cs",
    "+layout.svelte": "+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js",
    "+page.svelte": "+page.server.ts,+page.server.js,+page.ts,+page.js ",
    ".clang-tidy": ".clang-format, .clangd, compile_commands.json",
    ".env": "*.env, .env.*, .envrc, env.d.ts",
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    ".project": ".classpath",
    "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
    "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json",
    "I*.cs": "$(capture).cs",
    "artisan": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, server.php, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, webpack.mix.js, windi.config.*",
    "astro.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "cargo.toml": ".clippy.toml, .rustfmt.toml, cargo.lock, clippy.toml, cross.toml, rust-toolchain.toml, rustfmt.toml",
    "composer.json": ".php*.cache, composer.lock, phpunit.xml*, psalm*.xml",
    "default.nix": "shell.nix",
    "deno.json*": "*.env, .env.*, .envrc, api-extractor.json, env.d.ts, import-map.json, import_map.json, jsconfig.*, tsconfig.*, tsdoc.*",
    "dockerfile": ".dockerignore, docker-compose.*, dockerfile*",
    "flake.nix": "flake.lock",
    "gatsby-config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, gatsby-browser.*, gatsby-node.*, gatsby-ssr.*, gatsby-transformer.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "gemfile": ".ruby-version, gemfile.lock",
    "go.mod": ".air*, go.sum",
    "go.work": "go.work.sum",
    "mix.exs": ".credo.exs, .dialyzer_ignore.exs, .formatter.exs, .iex.exs, .tool-versions, mix.lock",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, next-env.d.ts, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "package.json": ".browserslist*, .circleci*, .commitlint*, .cz-config.js, .czrc, .dlint.json, .dprint.json, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json, firebase.json, grunt*, gulp*, jenkins*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-tasks.sh, renovate*, rollup.config.*, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, xo.config.*, yarn*",
    "pubspec.yaml": ".metadata, .packages, all_lint_rules.yaml, analysis_options.yaml, build.yaml, pubspec.lock, pubspec_overrides.yaml",
    "pyproject.toml": ".pdm.toml, pdm.lock, pyproject.toml",
    "quasar.conf.js": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, quasar.extensions.json, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "readme*": "authors, backers*, changelog*, citation*, code_of_conduct*, codeowners, contributing*, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors*",
    "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, remix.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "rush.json": ".browserslist*, .circleci*, .commitlint*, .cz-config.js, .czrc, .dlint.json, .dprint.json, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json, firebase.json, grunt*, gulp*, jenkins*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-tasks.sh, renovate*, rollup.config.*, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, xo.config.*, yarn*",
    "shims.d.ts": "*.d.ts",
    "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, mdsvex.config.js, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
  }
}
```
