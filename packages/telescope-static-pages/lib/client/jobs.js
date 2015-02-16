Meteor.startup(function() {
    Router.map(function() {
        this.route('jobs', {
            path: '/jobs',
            template: getTemplate('jobsPage')
        });
    });
});

