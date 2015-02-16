Meteor.startup(function() {
    Router.map(function() {
        this.route('radio', {
            path: '/radio',
            template: getTemplate('radioPage')
        });
    });
});

