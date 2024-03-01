

/*GET START*/
function getRequest(url, successCallBack, errorCallBack, ...args) {
    
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        error: function (xhr, status, error) {
            errorCallBack(xhr, status, error);
        },
        success: function (response) {
            successCallBack(response, args);
        }
    });
}
/*GET END*/


/*DELETE START*/
function deleteRequest(url, successCallBack, errorCallBack) {
    $.ajax({
        type: "DELETE",
        cache: false,
        url: url,
        contentType: false,
        processData: false,
        error: function (xhr, status, error) {
            errorCallBack(xhr, status, error);
        },
        success: function (response) {
            successCallBack(response);
        }
    });
}
/*DELETE END*/

/*SET START*/
function submitForm(formData, url, successCallBack, errorCallBack, successCallBackParams, ...args) {
    $.ajax({
        type: "POST",
        url: url,        
        processData: false,
        data: formData,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (xhr, status, error, args) {
            errorCallBack(xhr, status, error);
        },
        success: function (response) {
            successCallBack(response, successCallBackParams, args);
        }
    });
}


function submitFormJSON(formData, url, successCallBack, errorCallBack, successCallBackParams, ...args) {
    
    $.ajax({
        type: "POST",
        url: url,
        processData: false,
        data: JSON.stringify(formData),
        contentType: 'application/json; charset=utf-8',        
        error: function (xhr, status, error, args) {
            errorCallBack(xhr, status, error);
        },
        success: function (response) {
            console.log('submitFormJSON :' + response);
            successCallBack(response, successCallBackParams, args);
        }
    });
}
/*SET END*/

/*FILE START*/


/*FILE END*/
