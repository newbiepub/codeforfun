Router.configure({
    layoutTemplate: 'layout'
});

Router.route("/", {
    name: "home",
    template: "home"
});

Router.route("/heartbeat", {
    name: 'heartbeat',
    template: 'heartbeat'
});

Router.route("/myheart", {
    name: "myheart",
    template: "myheart"
});