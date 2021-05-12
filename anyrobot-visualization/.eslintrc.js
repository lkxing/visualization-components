// const files = require('./eslintUtFile');
const moment = require('moment');
// 文件注释配置
const jsdocConfig = {
  files: [], // 想要使用该规则的文件
  plugins: ['jsdoc', 'header'], // jsdoc插件
  rules: {
    // jsdoc注释规则
    'jsdoc/require-jsdoc': [
      0,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: ['TSInterfaceDeclaration']
      }
    ], // 检查函数是否写注释
    'jsdoc/check-alignment': 'warn', // 注释的*号是否对齐
    'jsdoc/check-indentation': 'warn', // 注释内有空格无效填充
    'jsdoc/check-param-names': ['warn'], // 检查函数参数名称和注释是否匹配
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': 'warn', // 检查标签名是否有效
    'jsdoc/check-types': 'warn', // 报告无效类型
    'jsdoc/no-undefined-types': 'warn', // 写的类型不在规则里面
    'jsdoc/require-description': ['warn', { descriptionStyle: 'tag' }], // 别要求写描述
    'jsdoc/require-param': 'warn', // 别要求写参数
    'jsdoc/require-param-description': 'warn', // 参数必须写描述
    'jsdoc/require-param-name': 'warn', // 参数必须写名字
    'jsdoc/require-param-type': 'warn', // 参数必须下类型jsdoc
    'jsdoc/require-returns': 'warn', // 要求写return注释
    'jsdoc/require-returns-description': 'warn', // 要求写return藐视
    'jsdoc/require-returns-type': 'warn', // 要求写return类型
    'jsdoc/valid-types': 'warn', // 有效的类型
    'header/header': [
      0,
      'block',
      [
        '',
        { pattern: ' @Description: \\S', template: ' * @Description: ' },
        { pattern: ' @Author: \\w', template: ' * @Author: ' },
        { pattern: ' @Date: \\S', template: ' * @Date: ' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') },
        ' '
      ]
    ]
  }
};

const overrides = [
  {
    files: ['*.js', '*.jsx'],
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended'
    ],
    plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
    rules: {
      'react/display-name': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-onchange': 'off',
      'require-atomic-updates': 'off',
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
    }
  },
  {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended'
      // 'plugin:jsdoc/recommended'
      // 'plugin:jsx-a11y/recommended'
    ],
    plugins: ['@typescript-eslint', 'typescript', 'react', 'react-hooks', 'import'],
    rules: {
      '@typescript-eslint/explicit-member-accessibility': ['error'],
      // '@typescript-eslint/indent': ['error', 2],
      // 'react/jsx-indent': ['error', 2],
      '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
      '@typescript-eslint/no-triple-slash-reference': 0,
      '@typescript-eslint/prefer-interface': 0,
      '@typescript-eslint/no-object-literal-type-assertion': 0,
      'object-curly-spacing': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
      // 'react/prop-types': 'off'
      // indent: ['error', 2]
    }
  }
];

overrides.length && overrides.push(jsdocConfig);
module.exports = {
  overrides,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    MOCK: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // Possible Errors
    'no-await-in-loop': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',

    // Best Practices
    'array-callback-return': ['error', { allowImplicit: true }],
    curly: ['warn', 'multi-line'],
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    'dot-notation': ['warn', { allowKeywords: true }],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'warn',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'error',
    'no-multi-spaces': ['warn', { ignoreEOLComments: false }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-proto': 'error',
    'no-return-assign': 'error',
    // 'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],
    radix: 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',

    // Variables
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: false }],

    // Node.js and CommonJS
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // Stylistic Issues
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    // camelcase: ['warn', { properties: 'never' }],
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': ['error', 'always'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-params': ['warn', 5],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
    'no-array-constructor': 'warn',
    'no-continue': 'warn',
    'no-lonely-if': 'warn',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
    'no-new-object': 'warn',
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'warn',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', { words: true, nonwords: false, overrides: {} }],
    'spaced-comment': ['warn', 'always', { exceptions: ['-', '+'], markers: ['=', '!'] }],
    'switch-colon-spacing': ['warn', { after: true, before: false }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],

    // ECMAScript 6
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-var': 'error',
    'object-shorthand': ['warn', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': ['warn', { array: false, object: true }, { enforceForRenamedProperties: false }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'symbol-description': 'warn',
    'template-curly-spacing': 'warn',
    'yield-star-spacing': ['warn', 'after'],

    // eslint-plugin-react
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn', // TODO: 解决方法
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': 'warn',
    'react/no-unused-prop-types': ['warn', { customValidators: [], skipShapeProps: true }],
    'react/no-unused-state': 'warn', // TODO: 与生命周期`getDerivedStateFromProps`冲突
    'require-atomic-updates': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'propTypes',
            'statics',
            'defaultProps',
            'constructor',
            'state',
            'getDerivedStateFromProps',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': ['warn', 'never', { always: [] }],
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-curly-spacing': ['warn', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        ignoreDOMComponents: true
      }
    ],
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
    'react/jsx-props-no-multi-spaces': 'warn',

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // eslint-plugin-import
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        ignore: [
          '^@/',
          'Actions',
          'Assets',
          'Utils',
          'Components',
          'PublicAssets',
          'PublicUtils',
          'PublicComponents',
          'Pages',
          'Store',
          'Services',
          'Locales'
        ]
      }
    ],
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-useless-path-segments': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/extensions': ['warn', 'ignorePackages', { js: 'never', jsx: 'never' }],
    'import/order': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-named-default': 'warn',

    // eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-onchange': 'off'
  }
};
