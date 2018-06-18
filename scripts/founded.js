/////// Start //////
/////// Start //////
/////// Start //////
/////// Start //////
/////// Start //////
if (window.sessionStorage.getItem("foundedNotes") == null) {
    window.location.href="mySchedule.html";
}
else {
    var foundedArray = JSON.parse(window.sessionStorage.getItem("foundedNotes"));
    buildAnote(foundedArray);
};
/////// Start //////
/////// Start //////
/////// Start //////
/////// Start //////
/////// Start //////
















//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////

/////////// Build Something To view ////////////
function buildAnote(obj) {

    var notesCont = document.getElementById("notesCont");
    for (let index = 0; index < obj.length; index++) {
        var myRow = document.createElement('div');
        myRow.setAttribute("class" , 'row notesRow');
        myRow.setAttribute("id" , 'notesRow');
        var myNoteDiv = document.createElement('div');
        myNoteDiv.setAttribute("class", "col-xs-12");
        var myNote = document.createElement('div');
        myNote.setAttribute("class", "note");
        var noteDesc = document.createElement('div');
        noteDesc.setAttribute("class", 'noteInnerDescription');
        noteDesc.innerText = obj[index].desc;
        var noteDate = document.createElement('div');
        noteDate.setAttribute("class", "noteDateValue");
        noteDate.innerText = obj[index].date;
        var noteTime = document.createElement('div');
        noteTime.setAttribute("class", "noteTimeValue");
        noteTime.innerText = obj[index].time;
        var airDiv = document.createElement('div');
        airDiv.setAttribute("class" , "row airDiv");
        ////
        myNote.appendChild(noteDesc);
        myNote.appendChild(noteDate);
        myNote.appendChild(noteTime);
        ////
        myNoteDiv.appendChild(myNote);
        ////
        myRow.appendChild(myNoteDiv);
        ///
        notesCont.appendChild(myRow);
        ///
        if((obj.length-index) > 1){
            notesCont.appendChild(airDiv);
        };

    }
    sessionStorage.removeItem("foundedNotes");
};
/////////// Build Something To view ////////////

//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////
//////////// Function - Notes Creation & Delete ///////////////