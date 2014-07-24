define(['handlebars', 'requireText!views/home.hbs', ],function(hbs,home) {
    var container;

    var DSurvey = function(containerId) {
        this.container = document.getElementById(containerId);
    };

    DSurvey.prototype.init = function() {
        this.home = hbs.default.compile(home);
    };

    DSurvey.prototype.render = function(data) {
        this.data = data;
        this.container.innerHTML = this.home(this.data);
        var settingTool = document.getElementById('setting-tool');
        var editTool = document.getElementById('edit-tool');

        settingTool.addEventListener('click', this.onclickEvent.bind(this), true);

    }

    DSurvey.prototype.onclickEvent = function(e) {
        alert('hello');
    };
    return DSurvey;
});
