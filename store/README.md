src
├── store
│   └── modules
│       ├
│       └── itamaster
│           ├── actions.js
│           ├── getters.js
│           ├── index.js
│           └── mutations.js
└── store.js

・store.jsより、itamasterディレクトリにアクセスする。
　-> itamaster/indexが参照される
・itamaster/indexでは、stateを持つ
・/indexより、getter.js ,actions.js ,mutations.js が呼び出される
・getter.js ,actions.js ,mutations.js は、通常のstoreのデータサイクルと同様の処理を持つ