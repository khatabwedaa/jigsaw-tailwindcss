<?php

use Illuminate\Support\Str;

return [
    'production' => false,
    'baseUrl' => '',
    'title' => 'Jigsaw starter ',
    'description' => 'Website description.',
    'collections' => [],
    'selected' => function ($page, $section) {
        if ($page->getPath() == null && $section == null) {
            return true;
        }
        
        return Str::contains($page->getPath(), $section);
    },
];
