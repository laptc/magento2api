/*
 * Copyright © 2017 Magestore. All rights reserved.
 * See COPYING.txt for license details.
 */
define(['jquery'], function ($) {
    'use strict';

    return {
        /**
         * Perform asynchronous GET request to server.
         * @param {String} url
         * @param {Boolean} global
         * @param {String} contentType
         * @param {Array} requestHeaders
         * @returns {Deferred}
         */
        get: function (url, global, contentType, requestHeaders) {
            global = global === undefined ? true : global;
            contentType = contentType || 'application/json';

            return $.ajax({
                url: url,
                type: 'GET',
                global: global,
                contentType: contentType,
                showLoader: true,
                beforeSend: function(xhr){
                    if($.isArray(requestHeaders)){
                        $.each(requestHeaders, function(index, header){
                            xhr.setRequestHeader(header.key, header.value);
                        });
                    }
                    //Empty to remove magento's default handler
                }
            });
        },
        /**
         * Perform asynchronous POST request to server.
         * @param {String} url
         * @param {String} data
         * @param {Boolean} global
         * @param {String} contentType
         * @param {Array} requestHeaders
         * @returns {Deferred}
         */
        post: function (url, data, global, contentType, requestHeaders) {
            global = global === undefined ? true : global;
            contentType = contentType || 'application/json';

            return $.ajax({
                url: url,
                type: 'POST',
                data: data,
                global: global,
                contentType: contentType,
                showLoader: true,
                beforeSend: function(xhr){
                    if($.isArray(requestHeaders)){
                        $.each(requestHeaders, function(index, header){
                            xhr.setRequestHeader(header.key, header.value);
                        });
                    }
                    //Empty to remove magento's default handler
                }
            });
        },
        /**
         * Perform asynchronous PUT request to server.
         * @param {String} url
         * @param {String} data
         * @param {Boolean} global
         * @param {String} contentType
         * @param {Array} requestHeaders
         * @returns {Deferred}
         */
        put: function(url, data, global, contentType, requestHeaders) {
            global = global === undefined ? true : global;
            contentType = contentType || 'application/json';

            return $.ajax({
                url: url,
                type: 'PUT',
                data: data,
                global: global,
                contentType: contentType,
                showLoader: true,
                beforeSend: function(xhr){
                    if($.isArray(requestHeaders)){
                        $.each(requestHeaders, function(index, header){
                            xhr.setRequestHeader(header.key, header.value);
                        });
                    }
                    //Empty to remove magento's default handler
                }
            });
        },
        /**
         * Perform asynchronous DELETE request to server.
         * @param {String} url
         * @param {Boolean} global
         * @param {String} contentType
         * @param {Array} requestHeaders
         * @returns {Deferred}
         */
        delete: function(url, global, contentType, requestHeaders) {
            global = global === undefined ? true : global;
            contentType = contentType || 'application/json';

            return $.ajax({
                url: url,
                type: 'DELETE',
                global: global,
                contentType: contentType,
                showLoader: true,
                beforeSend: function(xhr){
                    if($.isArray(requestHeaders)){
                        $.each(requestHeaders, function(index, header){
                            xhr.setRequestHeader(header.key, header.value);
                        });
                    }
                    //Empty to remove magento's default handler
                }
            });
        }
    };
});
