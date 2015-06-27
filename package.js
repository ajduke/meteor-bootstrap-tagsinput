Package.describe({
    name: 'ajduke:bootstrap-tagsinput',
    summary: 'jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor',
    version: '0.7.0',
    git: "https://github.com/ajduke/meteor-bootstrap-tagsinput.git"
});

Package.on_use(function (api) {
    // dependecies required by package
    api.use('jquery@1.0.1', 'client');
    api.use('twbs:bootstrap@3.3.5','client')
    // adding the required file for package
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
   // api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular.js', 'client');
});
