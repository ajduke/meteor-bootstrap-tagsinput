Package.describe({
    summary: "jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor"
});

Package.on_use(function (api) {
    // dependecies required by package
    api.use('jquery', 'client'); 
    api.use('bootstrap-3', 'client');
    
    // adding the required file for package
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular.js', 'client');
});
