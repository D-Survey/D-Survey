define(['handlebars', 'requireText!views/home.hbts'],function(handlebar,home) {
    var container;

    var dSurvey = function(containerId) {
        this.container = document.getElementById(containerId);
    };

    dSurvey.prototype.init = function() {

        //this.home = handlebar.default.compile(home);
        this.container.innerHTML = home;
    };

    return dSurvey;
});
