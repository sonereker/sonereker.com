/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

(function (window, document) {
    'use strict';

    if (!supportsFileReader()) {
        alert('Sorry, your web browser does not support the FileReader API.');
        return;
    }

    window.addEventListener('load', function () {
        document.querySelector('form').addEventListener('submit', handleSubmit, false);
    }, false);

    // >>> IGNORE: Helper code for interactive example.
    document.querySelector('html').setAttribute('data-initialized', '');
    // <<<

    function supportsFileReader() {
        return window.FileReader !== undefined;
    }

    function handleSubmit(event) {
        // >>> IGNORE: Helper code for interactive example.
        window.exifReaderClear();
        // <<<
        event.preventDefault();

        const file = event.target.elements.file.files[0];

        ExifReader.load(file, {async: true}).then(function (tags) {
            // The MakerNote tag can be really large. Remove it to lower
            // memory usage if you're parsing a lot of files and saving the
            // tags.
            delete tags['MakerNote'];

            // Use the tags now present in `tags`.

            // >>> IGNORE: Helper code for interactive example.

            var summary = document.getElementById('summary');
            var created = new Date(tags['Digital Creation Date'].description);
            var options = {
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            summary.innerHTML = '—<br />' + created.toLocaleString('en', options) + '<br />' + tags['LensModel'].description + '<br />' + tags['FocalLengthIn35mmFilm'].description + 'mm • ƒ' + tags['FNumber'].description.replace('f/','') + ' • ISO' + tags['ISOSpeedRatings'].description;
            // <<<
        }).catch(function (error) {
            // Handle error.

            // >>> IGNORE: Helper code for interactive example.
            window.exifReaderError(error.toString());
            // <<<
        });
    }
})(window, document);
