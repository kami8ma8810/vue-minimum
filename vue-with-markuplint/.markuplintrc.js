module.exports = {
  extends: ['markuplint:recommended'],
  parser: {
    '\\.vue$': '@markuplint/vue-parser',
  },
  specs: {
    '\\.vue$': '@markuplint/vue-spec',
  },
  rules: {
    doctype: false,
    // TODO: required-attrを無効化したいが、falseにするだけでは無効化されないようなので、要調査
    'required-attr': false,
    'label-has-control': false,
    'require-accessible-name': false,
    'use-list': false,
    'attr-value-quotes': false,
    'character-reference': false,
    'attr-duplication': false,
    // TODO: invalid-attrを無効化したいが、falseにするだけでは無効化されないようなので、要調査
    'invalid-attr': false,

    // 以下、対応予定のルールだが可読性を確保するために一旦無効化
    'permitted-contents': false,
    'wai-aria': false,
  },
  // FIXME: rules の required-attr が無効化されないため、nodeRules で無効化しているが、iframe 以外の要素には適用されないため rules だけでなんとか無効化なるようにしたい
  nodeRules: [
    {
      selector: 'iframe',
      rules: {
        'required-attr': false,
      },
    },
  ],
}
