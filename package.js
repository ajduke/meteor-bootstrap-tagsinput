Package.describe({
    name: 'ajduke:bootstrap-tagsinput',
    summary: 'jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor',
    version: '0.7.1',
    git: "https://github.com/ajduke/meteor-bootstrap-tagsinput.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.4');
    // dependecies required by package
    api.use('jquery@1.0.1', 'client');
    api.use('twbs:bootstrap@3.3.5','client');
    // adding the required file for package
    api.addFiles('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
    api.addFiles('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
   // api.addFiles('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular.js', 'client');
});
