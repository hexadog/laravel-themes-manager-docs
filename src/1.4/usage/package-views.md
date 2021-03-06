
## Package views
**Themes Manager** allows you to override package views (published in `resources/views/vendor` by Laravel).
You have to place your theme views into the `resources/views/vendor/namespace` directory (where namespace is the package's views namespace) of your theme.

For example, if you want to override `authentication-card.blade.php` from `Jestream` package
```bash
    themes
        ├── vendorName
        │   ├── themeName
        │   │   ├── public
        │   │   └── resources
        │   │       └── views
        │   │           ├── layouts
        │   │           └── vendor
        │   │               ├── jetstream
        │   │               │   └── components
        │   │               │       ├── authentication-card.blade.php
        │   │               │       └── ...
        │   │               │
        │   │               └── ...
        │   └── ...
        └── ...
```

This way your views will be used first before the one published into the standard `resources/views/vendor` directory.
