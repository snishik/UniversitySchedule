const schoolData = [...dataUni]; 

const columnsData = [ "Course Code", "Course Name", "Schedule Days","ScheduleTime","Location", "Max Enrollment", "Current Enrollment", "Enrollment Availability", "Instructor"];
const columnsDataForMobileView = ["CourseCode","CourseName","ScheduleDays","ScheduleTime","Location","MaxEnrollment","CurrentEnrollment","EnrollmentAvailability","Instructor"];


CreateTable("schoolTable", "schoolDetails",columnsData);
PopulateTable(schoolData);

function CreateTable(id, where, data) {
    var table = "<table id='" + id + "'><caption>SCHOOL DETAILS</caption><thead><tr>";
    for (var i = 0; i < data.length; i++) {
        table = table + "<th>" + data[i] + "</th>";
    }
    table = table + "</tr></thead><tbody></tbody></table>";
    document.getElementById(where).innerHTML += table;
}

function TableRowAdd(table, data) {
    var row = "<tr>";
    for (var i = 0; i < data.length; i++) {
        row = row + "<td data-label="+ columnsDataForMobileView[i] +">" + data[i] + "</td>";
    }
    row = row + "</tr>";
    document.getElementById(table).getElementsByTagName("tbody")[0].innerHTML += row;
}

function PopulateTable(schoolData){
    const d = document.getElementById("schoolTable");
    d.remove();
    CreateTable("schoolTable", "schoolDetails",columnsData );
    
    for(let i = 0; i < schoolData.length ; i++ ){
        TableRowAdd("schoolTable", [...Object.values(schoolData[i])]);
    }
}

// Searching stuff

function searchChanged(){
    let key = document.getElementById("search-input").value;
    const res = schoolData.filter(item =>
        item.courseName.toLowerCase().startsWith(key.toLowerCase())
    );

    PopulateTable(res);
}

document.getElementById("search-input").addEventListener("input",searchChanged);
