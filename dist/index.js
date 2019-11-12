"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaults = {
    path: '/',
    expiryDays: 1,
};
function setCookieExpiryDays(days) {
    days = days ? days : defaults.expiryDays;
    var date = new Date();
    var nextDay = date.setDate(date.getDate() + days);
    return new Date(nextDay).toUTCString();
}
var Cookies = {
    set: function (key, value, isJson, expires) {
        if (isJson === true)
            value = JSON.stringify(value);
        try {
            document.cookie = key + "=" + value + "; expires=" + setCookieExpiryDays(expires) + "; path=" + defaults.path;
            return true;
        }
        catch (e) {
            return false;
        }
    },
    get: function (cookieName) {
        var currentCookies;
        try {
            currentCookies = document ? document.cookie : '';
        }
        catch (e) { }
        if (currentCookies) {
            var cookies = currentCookies.split(';');
            cookies = cookies.map(function (item) {
                item = item.split('=');
                var cookieValuePair = {
                    name: item[0].trim(),
                    value: item[1].trim(),
                };
                return cookieValuePair;
            });
            return cookies.find(function (item) {
                return item.name === cookieName;
            });
        }
        else {
            return false;
        }
    },
};
exports.default = Cookies;
