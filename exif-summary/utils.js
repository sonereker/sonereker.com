/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-var */

(function (window) {
    'use strict';

    window.exifReaderError = function (message) {
        var errorContainer = document.querySelector('.error');
        errorContainer.innerHTML = message;
        errorContainer.classList.remove('hidden');
    };

    window.exifReaderClear = function () {
        var errorContainer;

        errorContainer = document.querySelector('.error');
        errorContainer.classList.add('hidden');
        errorContainer.innerHTML = '';
    };
}(window));
