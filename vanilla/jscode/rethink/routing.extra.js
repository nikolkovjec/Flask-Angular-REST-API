(function() {
'use strict';

angular.module('web')
 .constant('rethinkRoutes',

// EXTRA ROUTES
    {

    //////////////////////
//NOT LOGGED?
        'logged.specialsearch': {
            url: "/search/:text",
            views: {
                "loggedview": {
                    dir: 'blueprint',
                    templateUrl: 'search.html',
                }
            },
            onEnter: function ($rootScope) {
                $rootScope.avoidTheToolbar = true;
            },
            onExit: function ($rootScope) {
                $rootScope.avoidTheToolbar = false;
            },
        },

    //////////////////////
        'logged.details': {
            url: "/details/:id",
            views: {
                "loggedview": {
                    dir: 'blueprint',
                    templateUrl: 'details.html',
                }
            }
        },

    //////////////////////
        'logged.explore': {
            url: "/explore",
            views: {
                "loggedview": {
                    dir: 'blueprint',
                    templateUrl: 'explore.html',
                }
            },
        },
    //////////////////////
        'logged.submission': {
            url: "/create",
            views: {
                "loggedview": {
                    dir: 'blueprint',
                    templateUrl: 'submit.html',
                }
            },
        },

    //////////////////////
        'logged.admin': {
            url: "/admin/:tab?new",
// TO FIX:
// ONLY ADMIN ROLE IS ALLOWED
            views: {
                "loggedview": {
                    dir: 'blueprint',
                    templateUrl: 'admin.html',
                }
            },
            onEnter: function ($rootScope) {
              $rootScope.toolbarColor = 'red darken-4';
            },
            onExit: function ($rootScope) {
              $rootScope.toolbarColor =
                angular.copy($rootScope.originalColor);
            },
        },

    //////////////////////

    }

 ); // END CONSTANT

})();
