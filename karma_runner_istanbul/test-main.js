var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',
    paths: {
        'src': 'js/modules',
        'specs': 'tests/spec/',
        'jquery': 'bower_components/jquery/dist/jquery'
    },
    deps: tests,
    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
