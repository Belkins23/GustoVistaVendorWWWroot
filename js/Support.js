function deleteFromArray(array, value) {

    var tmp = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] != value)
            tmp.push(value);
    }

    return tmp;
}
function deleteFromArrayByValue(array, value) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function setErrorForField(id, error) {

    var div = document.getElementById('input_wrap_' + id);

    if (typeof div === 'undefined' || div === null)
        return;
    var hint = document.createElement('span');
    hint.id = 'hint_span_' + id;
    hint.classList.add('hint');
    var i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-chevron-left');
    var errorText = document.createElement('span');
    errorText.innerHTML = error;
    hint.appendChild(i);
    hint.appendChild(errorText);

    div.appendChild(hint);
}
function deleteFromArrayByField(array, field, value) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][field] !== value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function deleteFromArrayById(array, id) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].id !== id);
        if (array[i].id !== id) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function deleteFromArrayByIndex(array, index) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i !== index) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function isInArrayByValue(array, value) {
    if (typeof array === 'undefined')
        return false;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value)
            return true;
    }
    return false;
}
function isInArrayByField(array, field, value) {

    if (!!array) {

        for (var i = 0; i < array.length; i++) {
            
            if (array[i][field] === value)
                return true;
        }
    }
    return false;
}
function FindInArrayByField(array, field, value) {

    if (!!array) {

        for (var i = 0; i < array.length; i++) {
            
            if (array[i][field] === value)
                return array[i];
        }
    }
    return null;
}
function isInAddArray(array, value) {
    if(!!array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === value)
                return true;
        }
    }
    return false;
}
function isInArray(array, value) {
    if(!!array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value)
                return true;
        }
    }
    return false;
}


function clearTable(id) {
    var table = document.getElementById(id);
    var row = table.getElementsByTagName('tbody')[0];
    deleteRow();

    function deleteRow() {
        row.parentNode.removeChild(row);
    };
}
function toggle(S, x) {
    S[x] = 1 - (S[x] | 0);
}
function timeConverter(UNIX_timestamp) {

    var a = new Date(UNIX_timestamp * 1000);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    date = date < 10 ? "0" + date : date;
    var hour = a.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    var min = a.getMinutes();
    min = min < 10 ? "0" + min : min;
    var sec = a.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;
    var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}
function deleteElementChilds(element) {
    if (element !== null) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}

Date.prototype.mmddyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(mm > 9 ? '' : '0') + mm + '/', (dd > 9 ? '' : '0') + dd + '/', this.getFullYear()].join('');
};

Date.prototype.mmddyyyyString = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(mm > 9 ? '' : '0') + mm + '/', (dd > 9 ? '' : '0') + dd + '/', this.getFullYear()].join('');
};
Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd > 9 ? '' : '0') + dd + '.', (mm > 9 ? '' : '0') + mm + '.', this.getFullYear()].join('');
};
Date.prototype.ddmmyyyyString = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd > 9 ? '' : '0') + dd + '.', (mm > 9 ? '' : '0') + mm + '.', this.getFullYear()].join('');
};
Date.prototype.ddmmyyyyStringSl = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd > 9 ? '' : '0') + dd + '/', (mm > 9 ? '' : '0') + mm + '/', this.getFullYear()].join('');
};
Date.prototype.ddMMyyyyHHmmss = function () {
    var MM = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    var HH = this.getHours(); // getMonth() is zero-based
    var mm = this.getMinutes();

    var ss = this.getSeconds(); // getMonth() is zero-based



    let DateSrtting = [(dd > 9 ? '' : '0') + dd + '/', (MM > 9 ? '' : '0') + MM + '/', this.getFullYear()].join('');
    let TimeString = [(HH > 9 ? '' : '0') + HH + ':', (mm > 9 ? '' : '0') + mm + ':', (ss > 9 ? '' : '0') + ss].join('');
    return DateSrtting + ' ' + TimeString;
};

if (!String.prototype.trim) {
    (function () {
        // Вырезаем BOM и неразрывный пробел
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    })();
}

function genUID() {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
        let r = Math.random();

        return (r * 16 | 0).toString(16);
    }).toLowerCase();
}
function FillForm(obj, form) {
    for (key in obj) {
        form.append(key, obj[key]);
    }
    return form;
}

function setCaretPosition(elem, caretPos) {
    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}


function AddError(errorText, DivId, fieldId) {
    hideLoader();
    var divBlock;
    if (!!DivId)
        divBlock = document.getElementById(DivId);
    else
        divBlock = document.getElementById('errorFieldDIV');
    if (divBlock != null) {
        divBlock.style.display = 'block';
        divBlock.classList.remove("success");
        divBlock.classList.add("error");
        if (!!fieldId) {
            if (document.getElementById(fieldId) != null)
                document.getElementById(fieldId).innerText = errorText;
        } else {
            if (document.getElementById('errorField') != null)
                document.getElementById('errorField').innerText = errorText;
        }
    }
}
function AddSuccess(successText, DivId, fieldId) {
    hideLoader();
    clearError();
    if (!!DivId)
        divBlock = document.getElementById(DivId);
    else
        divBlock = document.getElementById('errorFieldDIV');
    if (divBlock != null) {
        divBlock.style.display = 'block';
        divBlock.classList.remove("error");
        divBlock.classList.add("success");
        if (!!fieldId) {
            if (document.getElementById(fieldId) != null)
                document.getElementById(fieldId).innerText = successText;
        } else {
            if (document.getElementById('errorField') != null)
                document.getElementById('errorField').innerText = successText;
        }
    }

}
function clearError() {
    if (document.getElementById('errorFieldDIV') != null)
        document.getElementById('errorFieldDIV').style.display = 'none';
    if (document.getElementById('errorField') != null)
        document.getElementById('errorField').innerHTML = '';
}

function deepEqual(object1, object2, ignoreFields) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        console.log('deepEqual length');
        console.log('deepEqual keys1: ' + keys1);
        console.log('deepEqual keys2: ' + keys2);
        return false;
    }

    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        let ignore = false;
        if (!!ignoreFields)
            ignore = isInArray(ignoreFields, key);

        const areObjects = isObject(val1) && isObject(val2);
        if (!ignore &&
            (areObjects && !deepEqual(val1, val2, ignoreFields) ||
                !areObjects && val1 !== val2)
        ) {
            if (!!ignoreFields)
                console.log('isInArray(ignoreFields, key):' + isInArray(ignoreFields, key));
            console.log('key:' + key);
            console.log('is array val1:' + Array.isArray(val1));
            console.log('is array val2:' + Array.isArray(val2));

            if (Array.isArray(val1) == true && Array.isArray(val2) == true) {
                if (val1.length != val2.length) {
                    console.log('deepEqual 2 length');
                    return false;
                } else {
                    for (let i = 0; i < val1.length; i++) {
                        if (val1[i] !== val2[i] && !deepEqual(val1[i], val2[i]))
                            return false;
                    }
                    return true;
                }
            } else {
                console.log('isObject(val1):' + isObject(val1));
                console.log('isObject(val2):' + isObject(val2));
                console.log('val1:' + val1);
                console.log('val2:' + val2);
                console.log('val1 !== val2:' + val1 !== val2);
                var result = false;
                if (typeof val1 === 'string' && typeof val2 === 'string') {
                    try {
                        result = JSON.stringify(JSON.parse(val2)) === JSON.stringify(JSON.parse(val1));
                        console.log('JSON.stringify(JSON.parse(val2)) === JSON.stringify(JSON.parse(val1)): ' + result);
                    }
                    catch (e) {
                        console.log(e);
                        result = val2.replace(/\r\n/gi, "\n") === val1.replace(/\r\n/gi, "\n");
                        console.log('val2.replace(/\r\n/gi, "\n") === val1.replace(/\r\n/gi, "\n"): ' + result);
                    }
                } else if ((Array.isArray(val1) == true || Array.isArray(val2) == true) &&
                    ((val1 == null && val2.length == 0) ||
                        (val2 == null && val1.length == 0))) {
                    result = true;
                }
                else {
                    result = val1 === val2;
                }
                if (!result)
                    console.log("123");
                return result;
            }
        }
    }

    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

function createAlertToast(str,error) {    
    let divToast = document.createElement('div');
    divToast.setAttribute('aria-live', 'assertive');
    divToast.setAttribute('aria-atomic', 'true');
    divToast.setAttribute('role', 'alert');
    divToast.classList.add('toast');
    
    let divHeader = document.createElement('div');
    divHeader.classList.add('toast-header');
    let Title = document.createElement('strong');
    Title.classList.add('me-auto');
    Title.innerText = 'NMira event';
    let TimeString = document.createElement('small');
    TimeString.classList.add('text-muted');
    TimeString.innerText = 'just now';
    let CloseBtn = document.createElement('button');
    CloseBtn.classList.add('btn-close');
    CloseBtn.setAttribute('data-bs-dismiss', 'toast');
    CloseBtn.setAttribute('aria-label', 'Close');
    let ToastBody = document.createElement('div');
    ToastBody.classList.add('toast-body');
    let ToastText = document.createElement('span');
    if (error === true)
        ToastText.classList.add('text-danger');
    ToastText.innerText = str;
    ToastBody.appendChild(ToastText);
    divHeader.appendChild(Title);
    divHeader.appendChild(TimeString);
    divHeader.appendChild(CloseBtn);

    divToast.appendChild(divHeader);
    divToast.appendChild(ToastBody);
    divContainer = document.getElementById('ToastContainer');
    divContainer.appendChild(divToast);
    divToast.classList.add('show');
    setInterval(deleteElement, 5000, divToast);
}
function deleteElement(elem) {
    if (elem != null) {
        elem.remove();   
    }
}
function deleteElementChilds(element) {
    if (element !== null) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}

function getTimeSpanString(date1, date2) {
    

    let diff = date2.getTime() - date1.getTime();

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));    
    diff -= days * (1000 * 60 * 60 * 24);
    if (days > 28) {
        
        let CurrentDate = new Date();
        let monthDays = daysInThisMonth(CurrentDate.getMonth(), CurrentDate.getFullYear());
        
        if (days > monthDays)
            return 'monthes ago';
    }

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    let mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    let seconds = Math.floor(diff / (1000));
    diff -= seconds * (1000);
    return (days > 0 ? (days > 1 ? days + " days " : " day "): 
        hours > 0 ? (hours > 1 ? hours + " hours " : " hour ") :  
            mins > 0 ?( mins > 1 ? mins + " minutes " : " minute " ):
                seconds > 0 ?( seconds > 1 ? seconds + " seconds " : " second "): "moment") + ' ago';

    function daysInThisMonth(month, year) {        
        switch (month) {
            case 1://yan
            case 3://mart
            case 5://may
            case 7://july
            case 8://augest            
            case 11://nov
                return 31;
            case 2://feb       
                if (year % 4 == 0)
                    return 29;
                return 28;
            case 4://april            
            case 6://june
            case 8://sent
            case 10://okt
            case 12://dec
                return 30;
        }
    }
}
function DownloadFileBtn(url) {

    function fireClickEvent(element) {
        var evt = new window.MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        element.dispatchEvent(evt);
    }
    var a = document.createElement('a');
    a.href = url;
    fireClickEvent(a);
}
function isValidDate(dateString) {
    var regEx = /^\d{2}.\d{2}.2\d{3}$/;
    if(dateString.match(regEx) != null)
    {
        let MonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        let Month = parseInt(dateString.split('.')[1],10) - 1;

        let Day = parseInt(dateString.split('.')[0],10);
        let Year = parseInt(dateString.split('.')[2],10);
        if(Month <= 11 && Day <= MonthDays[Month])
        {
            return true;
        }

    }
    return false;
}

function transliterateToId(input) {
    const translitMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
        'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k',
        'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E',
        'Ё': 'YO', 'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K',
        'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
        'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS',
        'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
        'Э': 'E', 'Ю': 'YU', 'Я': 'YA', ' ': ''
    };

    let result = '';
    for (let i = 0; i < input.length; i++) {
        const c = input.charAt(i);
        if (translitMap.hasOwnProperty(c)) {
            result += translitMap[c];
        } else {
            result += c;
        }
    }

    return result.replace(/\t/g, '').toUpperCase();
}

function observeDOM(obj, callback) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (!obj || obj.nodeType !== 1)
        return;
    if (MutationObserver) {
        // define a new observer
        mutationObserver = new MutationObserver(callback)

        // have the observer observe for changes in children
        mutationObserver.observe(obj, { childList: true, subtree: true })
        return mutationObserver
    }// browser support fallback
    else {
        if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false)
            obj.addEventListener('DOMNodeRemoved', callback, false)

        }
    }
    return null;
}
function isElementInView(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    let navLinks = document.querySelectorAll('#menu-aside button');

    navLinks.forEach(function(link) {
        let sectionId = link.getAttribute('category_id');
        let section = document.getElementById('category'+sectionId);

        if (isElementInView(section)) {
            navLinks.forEach(function(link) {
                link.classList.remove('main-desktop-left-menu-item-active');
            });
            link.classList.add('main-desktop-left-menu-item-active');
        }
    });
}
function scrollToElement(targetElement_id) {
    let targetElement = document.getElementById(targetElement_id);
    if(targetElement !=null )
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}