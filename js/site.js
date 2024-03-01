// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function showError(xhr, status, error) {
    if (typeof error != 'undefined' && error != '') {
        alert("ERROR:" + error, true);
    } else {
        alert("ERROR:" + xhr.responseText, true);
    }
}