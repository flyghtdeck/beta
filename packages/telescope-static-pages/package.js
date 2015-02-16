Package.describe({
    summary: 'Telescope static pages for flightdeck.',
    version: '0.1.0',
    name: 'telescope-static-pages'
});

Package.onUse(function(api) {
    api.use([
        'templating'
    ], ['client']);

    api.use([
        'telescope-lib',
        'telescope-base',
        'iron:router'
    ], ['client', 'server']);

    api.add_files([
        'lib/client/templates/about_page.html',
        'lib/client/templates/about_link.html',
        'lib/client/about.js',

        'lib/client/templates/blog_page.html',
        'lib/client/blog.js',

        'lib/client/templates/faq_page.html',
        'lib/client/faq.js',

        'lib/client/templates/jobs_page.html',
        'lib/client/jobs.js',

        'lib/client/templates/radio_page.html',
        'lib/client/radio.js',

        'lib/client/templates/omni_link.html',
        'lib/client/omni.js'
    ], ['client']);
});
