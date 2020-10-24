# How it works

**Themes Manager** will prepend theme views paths to the existing Laravel View Finder locations. This way you can easily override any default view (even any third package published views).

Suppose you request to display `welcome.blade.php` view
```php
return view('welcome');
```

1. View will be searched into the current active theme `resources/views` folder 
2. If the view is not found in active theme then search into parents themes recursively
3. If the view is still not found then search laravel default view folder `resources/views`
