Package.describe({
    summary: 'FlightDeck custom theme for Telescope.',
    version: '0.1.0',
    name: 'telescope-theme-flight'
});

Package.onUse(function(api) {
    api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

    api.addFiles([
        /*'lib/client/stylesheets/screen.scss'*/
        'lib/client/scss/screen.scss'
    ], ['client']);
});
