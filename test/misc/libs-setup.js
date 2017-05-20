import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import moment from 'moment';
import React from 'react';
import Cookies from 'js-cookie';

//
// Libs
//
Backbone.$ = $
global.Backbone = Backbone
global.$ = $
global._ = _
global.moment = moment
global.React = React
global.Cookies = Cookies

global._.mixin({
    includes(str = '', token) {
        if (token === '') return true;
        return str.indexOf(token) !== -1;
    },
    titleize(str = '') {
        return str.toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
            return c.toUpperCase();
        });
    },
    trim(str = '') {
        return str.trim ? str.trim() : str;
    }
});
