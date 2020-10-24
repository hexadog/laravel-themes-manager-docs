# Errors views
**Themes Manager** allows you to override error views by creating Theme's specific error views into `resources/views/errors` directory of your theme.

For example, if you want to override `404.blade.php` error view
```bash
    themes
        ├── vendorName
        │   ├── themeName
        │   │   ├── public
        │   │   └── resources
        │   │       └── views
        │   │           ├── layouts
        │   │           └── errors
        │   │           │   └── 404.blade.php
        │   │           └── ...
        │   └── ...
        └── ...
```