# Cache
Themes Manager works with Laravel Cache Manager to improve its performances when find all available themes. This way, if cache enabled, filesystem will not be browsed to discover available themes.

You can enable/disable cache with `themes-manager.cache.enabled` configuration value. The `themes-manager.cache.lifetime` configuration value allows you to customize cache retention lifetime.

_If you want to customize the cache key in which cache is stored, change `themes-manager.cache.key` configuration value._

## Clear cache
You can manually clear cache using artisan command:
```bash
php artisan theme:cache
```

## Force cache generation
Use the following command if you need to clear cache manually:
```bash
php artisan theme:cache:clear
```