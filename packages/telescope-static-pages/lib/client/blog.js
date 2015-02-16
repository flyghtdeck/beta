Meteor.startup(function() {
    Router.map(function() {
        this.route('blog', {
            path: '/blog',
            template: getTemplate('blogPage')
        });
    });
});

