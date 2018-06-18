/////// Start //////
/////// Start //////
/////// Start //////


/// local false ///
var added = false;
var pushed = false;
/// local false ///


/// check for notes from previous ///
if (window.localStorage.getItem("addedNotes1") == null) {
}
else {
    var scheduleNotes = JSON.parse(window.localStorage.getItem("addedNotes1"));
    buildAnote(scheduleNotes);
};
/// check for notes from previous ///


/////// Start //////
/////// Start //////
/////// Start //////





















/////////// FUN ///////////
/////////// FUN ///////////
/////////// FUN ///////////


////// fun - input :) /////
var myForm = document.getElementsByTagName('form')[1];
myForm.addEventListener("mouseover", function () {
    myForm.style.transform = "scale(1)";
    sessionStorage.setItem("biggerInput", "true");
});
if (window.sessionStorage.getItem("biggerInput") != null) {
    var biggerInput = window.sessionStorage.getItem("biggerInput");
    if (biggerInput == 'true') {
        myForm.style.transform = "scale(1)";
    }
};
////// fun - input :) /////



///// fun - textarea-lines //////
var textarea = document.getElementsByTagName("textarea")[0];
textarea.onkeyup = function () {
    var lines = textarea.value.split("\n");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    for (let l = 0; l < lines.length; l++) {
        if (lines[l].length <= 64) continue;
        var j = 0; space = 64;
        while (j++ <= 64) {
            if (lines[l].charAt(j) === " ") space = j;
        }
        lines[l + 1] = lines[l].substring(space + 1) + (lines[l + 1] ? " " + lines[l + 1] : "");
        lines[l] = lines[l].substring(0, space);
    }
    textarea.value = lines.slice(0, 6).join("\n");
    if (start == end) {
        textarea.setSelectionRange(start, end);
    }
};
///// fun - textarea-lines //////


/////////// FUN ///////////
/////////// FUN ///////////
/////////// FUN ///////////



















//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////



/////////// Pure Functions ////////////
/////////// Pure Functions ////////////
/////////// Pure Functions ////////////
function isFutureDateSlash(idate, itime) {
    var today = new Date().getTime();
    idate = idate.split(/\.|-|\//);

    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();

    if (itime.length > 0 && (today - idate) == 0) {
        var nowH = new Date().getHours();
        var nowM = new Date().getMinutes();
        itime = itime.split(':');
        return ((today - idate) < 86400000 && itime[0] >= nowH && itime[1] > nowM) ? true : false;
    }
    else {
        return (today - idate) < 86400000 ? true : false;
    }
};

function isTime(itime) {
    itime = itime.split(':');
    if (parseInt(itime[1]) <= 59) {
        return true;
    }
    else {
        return false;
    }
};

function validTime() {
    let patternz = dateInputCheck.pattern;

    if (dateInputCheck.value.match(patternz)) {
        return true;
    }
    else {
        return false;
    }
};

function validTime2() {
    let patternz = timeInputCheck.pattern;

    if (timeInputCheck.value.match(patternz)) {
        return true;
    }
    else {
        return false;
    }
};
/////////// Pure Functions ////////////
/////////// Pure Functions ////////////
/////////// Pure Functions ////////////






/////////// Local Vars ////////////
/////////// Local Vars ////////////
var dateInputCheck = document.getElementById('dateInput');
var timeInputCheck = document.getElementById('timeInput');
var descInputCheck = document.getElementsByTagName('textarea')[0];
/////////// Local Vars ////////////
/////////// Local Vars ////////////







/////////// Event Listeners   ////////////
/////////// Event Listeners  ////////////
/////////// Event Listeners   ////////////
/////////// Event Listeners  ////////////


/////////// Event Listeners - Clear Button ////////////
/////////// Event Listeners - Clear Button ////////////
var clearBTN = document.getElementById('clearBTN');
clearBTN.addEventListener("click", function () {
    if (window.localStorage.getItem("addedNotes1") != null) {
        localStorage.removeItem("addedNotes1");
        window.location.reload();
    }
});
/////////// Event Listeners - Clear Button ////////////
/////////// Event Listeners - Clear Button ////////////



/////////// Event Listeners - Submit Button ////////////
/////////// Event Listeners - Submit Button ////////////
var submitBTN = document.getElementsByTagName('button')[0];
submitBTN.addEventListener("click", function (e) {
    dateInput = dateInputCheck.value;
    timeInput = timeInputCheck.value;
    descInput = descInputCheck.value;

    var isDateIsValid = isFutureDateSlash(dateInput, timeInput);

    var saveTheDate = validTime();
    var nowH = new Date().getHours();
    var nowM = new Date().getMinutes();

    let temptimeInputValue = timeInput.split(':');

    var timeCheck = validTime2(timeInput);
    var today = new Date().getTime();
    dateInputValue = dateInput.split(/\.|-|\//);
    dateInputValue = new Date(dateInputValue[2], dateInputValue[1] - 1, dateInputValue[0]).getTime();
    if (dateInput.length <= 0 && descInput.length <= 0) {
    }
    else {
        letAdd = true;
        if ((isDateIsValid == true && today - dateInputValue > 86400000 && temptimeInputValue[0] < nowH) || (isDateIsValid == true && today - dateInputValue > 86400000 && temptimeInputValue[0] == nowH && temptimeInputValue[1] <= nowM) || isDateIsValid == false && saveTheDate == true) {
            letAdd = false;
            e.preventDefault();
        }
        else if (letAdd == true && saveTheDate == true) {
            if (timeInput.length > 0) {
                if (temptimeInputValue[0] > nowH || temptimeInputValue[0] == nowH && temptimeInputValue[1] > nowM) {
                    letAdd = false;
                    addAote();
                }
                else {
                    if (today - dateInputValue < 86400000 && timeCheck == true) {
                        if (dateInputValue - today < 0) {
                            letAdd = false;
                            e.preventDefault();
                        }
                        if (isDateIsValid == false) {
                            letAdd = false;
                            e.preventDefault();
                        }
                    }
                    else {
                        if (letAdd == true) {
                            letAdd = false;
                            addAote();
                        }
                    }
                }
            }
            else {
                if (letAdd == true) {
                    letAdd = false;
                    addAote();
                }
            }
        }
        else if (letAdd == false) {
            letAdd = true;
            e.preventDefault();
        };
    }
    if (letAdd == true && saveTheDate == true && timeCheck == true && isDateIsValid == true && dateInputValue - today < 86400000 && descInput.length > 0 || letAdd == true && saveTheDate == true && timeCheck == true && isDateIsValid == true && (dateInputValue - today) > 86400000 && descInput.length > 0) {
        letAdd = false;
        addAote();
    }
});
/////////// Event Listeners - Submit Button ////////////
/////////// Event Listeners - Submit Button ////////////





/////////// Event Listeners - Date Input Check - Oninput() ////////////
/////////// Event Listeners - Date Input Check - Oninput() ////////////
dateInputCheck.addEventListener("input", function () {
    dateInputValue = dateInputCheck.value;
    timeInputValue = timeInputCheck.value;
    var dateAllowed = validTime();
    var isDateIsValid = isFutureDateSlash(dateInputValue, timeInputValue);

    var popUpDate = document.getElementById('futureNotePopup');

    var nowH = new Date().getHours();
    var nowM = new Date().getMinutes();
    var timeInputSplit = timeInputValue.split(':');

    var today = new Date().getTime();
    TempDateInputValue = dateInputValue.split(/\.|-|\//);
    TempDateInputValue = new Date(TempDateInputValue[2], TempDateInputValue[1] - 1, TempDateInputValue[0]).getTime();

    var validTimeTime = validTime2();

    if (isDateIsValid == false && dateAllowed == true) {
        if (timeInputValue > 0 && validTimeTime == true) {
            popUpDate.style.display = "block";
        }
        else if (timeInputValue == 0) {
            popUpDate.style.display = "block";
        }
    }
    else if (isDateIsValid == true && timeInputValue.length == 0) {
        if (dateAllowed == false && timeInputValue[0] >= nowH && timeInputValue[1] > nowM) {
            dateInputCheck.setAttribute("oninput", "this.setCustomValidity('')");
        };
        popUpDate.style.display = "none";
    };
    if (isDateIsValid == true) {
        if (timeInputValue.length == 0) {
            popUpDate.style.display = "none";
        }
        else if (timeInputValue.length > 0 && timeInputSplit[0] <= nowH && timeInputSplit[1] <= nowM) {
            if ((today - TempDateInputValue) < 0) {
                popUpDate.style.display = "none";
            };
        }
    };
    if (isDateIsValid == true && timeInputValue.length == 0) {
        popUpDate.style.display = "none";
    }
    if ((today - TempDateInputValue) < 0) {
        popUpDate.style.display = "none";
    }
    else if ((isDateIsValid == true && timeInputSplit[0] < nowH) || (isDateIsValid == true && timeInputSplit[0] == nowH && timeInputSplit[1] <= nowM)) {
        popUpDate.style.display = "block";
        if (timeInputValue.length == 0) {
            popUpDate.style.display = "none";
        }
    }
    if (dateInputCheck.validity.patternMismatch) {
        dateInputCheck.setCustomValidity('Please fill in the required dd/mm(0-12)/yyyy exact format.');
    }
    else {
        if (dateInputValue.length > 8) {
            dateInputCheck.setCustomValidity('');
        }
    }
});
/////////// Event Listeners - Date Input Check - Oninput() ////////////
/////////// Event Listeners - Date Input Check - Oninput() ////////////



/////////// Event Listeners - Date Input Check - Onchange() ////////////
/////////// Event Listeners - Date Input Check - Onchange() ////////////
dateInputCheck.addEventListener("change", function () {
    dateInputValue = dateInputCheck.value;
    timeInputValue = timeInputCheck.value;
    var dateAllowed = validTime();
    var isDateIsValid = isFutureDateSlash(dateInputValue, timeInputValue);

    var popUpDate = document.getElementById('futureNotePopup');

    var nowH = new Date().getHours();
    var nowM = new Date().getMinutes();
    var timeInputSplit = timeInputValue.split(':');

    var today = new Date().getTime();
    TempDateInputValue = dateInputValue.split(/\.|-|\//);
    TempDateInputValue = new Date(TempDateInputValue[2], TempDateInputValue[1] - 1, TempDateInputValue[0]).getTime();

    var validTimeTime = validTime2();
    if (isDateIsValid == false && dateAllowed == true) {
        if (timeInputValue > 0 && validTimeTime == true) {
            popUpDate.style.display = "block";
        }
        else if (timeInputValue == 0) {
            popUpDate.style.display = "block";
        }
    }
    else if (isDateIsValid == true && timeInputValue.length > 0) {
        popUpDate.style.display = "none";
    };
    if (isDateIsValid == true) {
        if (timeInputValue.length == 0) {
            popUpDate.style.display = "none";
        }
        else if (timeInputValue.length > 0 && timeInputSplit[0] <= nowH && timeInputSplit[1] <= nowM) {
            if ((today - TempDateInputValue) < 0) {
                popUpDate.style.display = "none";
            };
        }
    };
    if (isDateIsValid == true && timeInputValue.length == 0) {
        popUpDate.style.display = "none";
    }
    if ((today - TempDateInputValue) < 0) {
        popUpDate.style.display = "none";
    }
    else if ((isDateIsValid == true && timeInputSplit[0] < nowH) || (isDateIsValid == true && timeInputSplit[0] == nowH && timeInputSplit[1] <= nowM)) {
        popUpDate.style.display = "block";
        if (timeInputValue.length == 0) {
            popUpDate.style.display = "none";
        }
    }
    else if (isDateIsValid == false && dateAllowed == true) {
        popUpDate.style.display = "block";
    }
});
/////////// Event Listeners - Date Input Check - Onchange() ////////////
/////////// Event Listeners - Date Input Check - Onchange() ////////////



/////////// Event Listeners - Time Input Check - Oninput() ////////////
/////////// Event Listeners - Time Input Check - Oninput() ////////////
timeInputCheck.addEventListener("input", function () {
    dateInputValue = dateInputCheck.value;
    timeInputValue = timeInputCheck.value;
    var dateAllowed = validTime();
    var isDateIsValid = isFutureDateSlash(dateInputValue, timeInputValue);

    var nowH = new Date().getHours();
    var nowM = new Date().getMinutes();
    var temptimeInputValue = timeInputValue.split(':');

    var today = new Date().getTime();
    dateInputValue = dateInputValue.split(/\.|-|\//);
    dateInputValue = new Date(dateInputValue[2], dateInputValue[1] - 1, dateInputValue[0]).getTime();

    var popUpDate = document.getElementById('futureNotePopup')
    if (dateAllowed == true && timeInputValue.length > 0) {
        var validTimeTime = validTime2();
        if ((isDateIsValid == true && temptimeInputValue[0] == nowH && temptimeInputValue[1] <= nowM) || (isDateIsValid == true && temptimeInputValue[0] < nowH)) {

            popUpDate.style.display = "block";
            event.preventDefault();
            if ((today - dateInputValue) < 0) {
                popUpDate.style.display = "none";
            };
        }
        else if (((isDateIsValid == true && today - dateInputValue) < 86400000 && (temptimeInputValue[0] > nowH) || (isDateIsValid == true && today - dateInputValue) < 86400000 && (temptimeInputValue[0] == nowH && temptimeInputValue[1] > nowM))) {
            popUpDate.style.display = "none";
        }
        else {
            if (validTimeTime == true) {
                popUpDate.style.display = "block";
            }
            else if (timeInputValue.length > 0 && isDateIsValid == false) {
                popUpDate.style.display = "none";
            }
            else if ((temptimeInputValue[0] == nowH && temptimeInputValue[1] > nowM && validTimeTime == true) || (temptimeInputValue[0] > nowH && validTimeTime == true)) {
                popUpDate.style.display = "none";
            };
        };
    }
    else if (isDateIsValid == true && timeInputValue.length > 0) {
        popUpDate.style.display = "none";
    }
    else if (timeInputValue[0] >= nowH && timeInputValue[1] > nowM) {
        popUpDate.style.display = "none";
    }
    else if (isDateIsValid == true) {
        popUpDate.style.display = "none";
    }
    if (timeInputCheck.validity.patternMismatch) {
        timeInputCheck.setCustomValidity('Please fill in the required hh(0-24):mm(0-59) format.');
    }
    else {
        if (timeInputValue.length > 4) {
            timeInputCheck.setCustomValidity('');
        }
    }
    if ((today - dateInputValue) > 0) {
        popUpDate.style.display = "block";
        if ((today - dateInputValue) < 86400000 && nowH < parseInt(temptimeInputValue[0]) || (today - dateInputValue) < 86400000 && nowH == parseInt(temptimeInputValue[0]) && nowM < parseInt(temptimeInputValue[1])) {
            popUpDate.style.display = "none";
        }
    }
});
/////////// Event Listeners - Time Input Check - Oninput() ////////////
/////////// Event Listeners - Time Input Check - Oninput() ////////////





/////////// Event Listeners - Time Input Check - Onkeydown() ////////////
/////////// Event Listeners - Time Input Check - Onkeydown() ////////////
timeInputCheck.addEventListener("keydown", function () {
    dateInputValue = dateInputCheck.value;
    timeInputValue = timeInputCheck.value;
    var popUpDate = document.getElementById('futureNotePopup');

    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            if (timeInputValue.length == 1) {
                var today = new Date().getTime();
                dateInputValue = dateInputValue.split(/\.|-|\//);
                dateInputValue = new Date(dateInputValue[2], dateInputValue[1] - 1, dateInputValue[0]).getTime();

                if ((today - dateInputValue) >= 0) {
                    popUpDate.style.display = "none";
                };
            };
            break;
        default:
            break;
    }
});
/////////// Event Listeners - Time Input Check - Onkeydown() ////////////
/////////// Event Listeners - Time Input Check - Onkeydown() ////////////



/////////// Event Listeners   ////////////
/////////// Event Listeners  ////////////
/////////// Event Listeners   ////////////
/////////// Event Listeners  ////////////



//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////
//////////// My Validation - Sensitive Future Only Check ///////////

















////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////

////// helper Popup ////////
var helperLocal = document.getElementById('helperLocal');
helperLocal.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("helper-popup-message").style.display = "block";
});
var popBTNhelper = document.getElementById('popBTNhelper');
popBTNhelper.addEventListener("click", function () {
    helperLocal.style.display = "none";
});
var spanOfPopup = document.getElementById("spanOfPopup");
spanOfPopup.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("helper-popup-message").style.display = "none";
});
////// helper Popup ////////


//// Google ////
var spiderPopup = document.getElementById('googleSpiderPopup');
var dontinterrupt = sessionStorage.getItem("dontinterrupt");
if (dontinterrupt != 'true') {
    setTimeout(function () {
        var userTime = new Date().getHours();
        if (userTime >= 6 && userTime < 12) {
        } else if (userTime >= 12 && userTime < 18) {
            spiderPopup.children[2].innerText = "Good Afternoon!";
        } else if (userTime >= 18 && userTime < 24) {
            spiderPopup.children[2].innerText = "Good Evening!";
        }
        else if (userTime < 6) {
            spiderPopup.children[2].innerText = "Good Night!";
        }
        spiderPopup.style.display = "block"
        document.getElementById("overlay").style.display = "block";
    }, 6000);
};
var spanOfSpider = document.getElementById('spanOfSpider');
spanOfSpider.addEventListener("click", function () {
    spanOfSpider.parentNode.style.display = "none";
    document.getElementById("overlay").style.display = "none";
    sessionStorage.setItem("dontinterrupt", 'true');
})
///// Google ////


//// Jewish Bryce Advertisment ////
var closeAdv = document.getElementById('close-adv');
closeAdv.addEventListener("click", function (e) {
    e.preventDefault();
    closeAdv.parentNode.style.display = "none";
})
//// Jewish Bryce Advertisment ////


////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////
////////// Default Popups /////////


















//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////




////////// Build A Note   ////////
////////// Build A Note   ////////
////////// Build A Note   ////////
function buildAnote(obj) {

    var myRow = document.getElementById('notesRow');

    for (let index = 0; index < obj.length; index++) {

        var myNoteDiv = document.createElement('div');
        myNoteDiv.setAttribute("class", "col-md-2 col-sm-6 col-xs-12");
        var myNote = document.createElement('div');
        myNote.setAttribute("class", "note");
        var noteTrash = document.createElement('div');
        noteTrash.setAttribute('class', "glyphicon glyphicon-trash noteDelete fade-in");
        noteTrash.setAttribute('slot', index);
        noteTrash.setAttribute('onclick', "deleteNote(this)");
        noteTrash.setAttribute('onclick', 'deleteNote(this);'); // for FF
        noteTrash.onclick = function () { deleteNote(this); }; // for IE
        var noteDesc = document.createElement('div');
        noteDesc.setAttribute("class", 'noteInnerDescription');
        noteDesc.innerText = obj[index].desc;
        var noteDate = document.createElement('div');
        noteDate.setAttribute("class", "noteDateValue");
        noteDate.innerText = obj[index].date;
        var noteTime = document.createElement('div');
        noteTime.setAttribute("class", "noteTimeValue");
        noteTime.innerText = obj[index].time;
        ////
        myNote.appendChild(noteTrash);
        myNote.appendChild(noteDesc);
        myNote.appendChild(noteDate);
        myNote.appendChild(noteTime);
        ////
        myNoteDiv.appendChild(myNote);
        ////
        myRow.appendChild(myNoteDiv);
    }
};
////////// Build A Note   ////////
////////// Build A Note   ////////
////////// Build A Note   ////////




////////// Delete A Note   ////////
////////// Delete A Note   ////////
////////// Delete A Note   ////////
function deleteNote(element) {
    if (scheduleNotes.length == 1) {
        localStorage.removeItem("addedNotes1");
    }
    else {
        scheduleNotes.splice(element.slot, 1);
        scheduleNotes = JSON.stringify(scheduleNotes);
        localStorage.setItem("addedNotes1", scheduleNotes);
    };

    element.parentNode.parentNode.style.opacity = '0';

    setTimeout(function () {
        element.parentNode.parentNode.remove();
    }, 2000);

    setTimeout(function () {
        window.location.reload();
    }, 2100);

};
////////// Delete A Note   ////////
////////// Delete A Note   ////////
////////// Delete A Note   ////////





////////// Add A Note Kickback  ////////
////////// Add A Note Kickback  ////////
////////// Add A Note Kickback  ////////
var myNotes = [];

function addAote() {
    dateInput = dateInputCheck.value;
    timeInput = timeInputCheck.value;
    descInput = descInputCheck.value;

    var checkTheDate = isFutureDateSlash(dateInput, timeInput);
    if (checkTheDate == true) {
        if (dateInput.length > 0 && descInput.length > 0) {
            if (scheduleNotes != null && scheduleNotes.length > 0 && added == false) {
                for (let index = 0; index < scheduleNotes.length; index++) {
                    myNotes.push(scheduleNotes[index]);
                };
                added = true;
            };
            if (timeInput.length > 0) {
                var isTimeValid = true;
                var isTimeValid = isTime(timeInput);
                var validationDateCheck = validTime();
                if (isTimeValid == true && validationDateCheck == true) {
                    if (checkTheDate == true) {
                        myNotes.push({ date: dateInput, time: timeInput, desc: descInput });
                        var addedNotes = JSON.stringify(myNotes);
                        localStorage.setItem("addedNotes1", addedNotes);
                        pushed = true;
                    }
                    else {
                        letAdd = false;
                    }
                }
                else {
                    document.getElementById('timeInput').setCustomValidity('Please fill in the required hh(0-24):mm(0-59) format.');
                }
            };
            if (pushed == true) {
            }
            else if (pushed == false && timeInput.length == 0) {
                myNotes.push({ date: dateInput, time: timeInput, desc: descInput });
                var addedNotes = JSON.stringify(myNotes);
                localStorage.setItem("addedNotes1", addedNotes);
            }
        }
    }
};
////////// Add A Note Kickback  ////////
////////// Add A Note Kickback  ////////
////////// Add A Note Kickback  ////////




//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////


















////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////


//////    Local Vars    ///////
var findError = document.getElementById("find-error");
var searchVector = document.getElementById('searchVector');
var searchNote = document.getElementById('searchNote');
//////    Local Vars    ///////



/////////// Event Listeners - Search Button Validation - Onclick() ////////////
searchNote.addEventListener("click", function (ev) {
    userstring = searchVector.value;
    if (userstring.length < 1) {
        searchVector.style.border = "3px solid red";
        searchVector.oninvalid = "this.setCustomValidity('Please fill in keywords to search..')";
    }
    else {
        var foundedArray = findAnote(userstring, ev);
        if (foundedArray.length == 0) {
            ev.preventDefault();
            findError.innerHTML = "<strong>&#9940;</strong> Couldn't find any match to: " + '"' + userstring + '"' + ".\n Please try another word.";
            findError.style.display = "block";
        }
        else {
            foundedArray = JSON.stringify(foundedArray);
            sessionStorage.setItem("foundedNotes", foundedArray);
        };
    };
});
/////////// Event Listeners - Search Button Validation - Onclick() ////////////



/////////// Event Listeners - Search Input Error Close - Onkeypress() ////////////
searchVector.addEventListener("keypress", function () {
    searchVector.oninvalid = "this.setCustomValidity('')";
    userstring = searchVector.value;
    if (userstring.length > 0) {
        searchVector.style.border = "unset";
        searchVector.oninvalid = "this.setCustomValidity('')";
    }
    else {
        findError.style.display = "none";
        searchVector.oninvalid = "this.setCustomValidity('')";
    }
});
/////////// Event Listeners - Search Input Close Error - Onkeypress() ////////////



/////////// Event Listeners - Search Input Close Error - Onkeydown() ////////////
searchVector.addEventListener("keydown", function () {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            findError.style.display = "none";
            break;
        default:
            break;
    }
});
/////////// Event Listeners - Search Input Close Error - Onkeydown() ////////////



////////// Function - Search For a description Match - indexOf() ///////////
function findAnote(userstring, ev) {
    var foundedArray = [];
    if (window.localStorage.getItem("addedNotes1") == null) {
        ev.preventDefault();
        findError.innerHTML = "<strong>&#9940;</strong> Couldn't find any match to: " + '"' + userstring + '"' + ".\n Please try another word.";
        findError.style.display = "block";
    }
    else {
        var findFrom = JSON.parse(window.localStorage.getItem("addedNotes1"));
    }
    for (let index = 0; index < findFrom.length; index++) {
        if (findFrom[index].desc.indexOf(userstring.toString()) != -1) {
            foundedArray.push(findFrom[index]);
        }
    }
    return foundedArray;
}
////////// Function - Search For a description Match - indexOf() ///////////


////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////
////// Search For A Note //////