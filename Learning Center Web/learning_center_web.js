



$(document).ready(function()
{
	populateTutorEval();
  populateStudentEval();

	});


var populateTutorEval = function (){


	//var Firebase = require("firebase");
	var url = "https://learning-center-app.firebaseio.com/Evaluations";

	var myFirebaseRef = new Firebase(url);

	myFirebaseRef.on("value", function(snapshot) {
  		snapshot.forEach(function(childSnapshot) {
  		 //create row for data to be put into
  		 var dataRow = document.createElement("tr");

  		 var tutorName = document.createElement("td");
  		 var studentName = document.createElement("td");
  		 var classYear = document.createElement("td");
  		 var ESL = document.createElement("td");
  		 var attitude =  document.createElement("td");
  		 var atmosphere =  document.createElement("td");
  		 var knowledge =  document.createElement("td");
  		 var understanding =  document.createElement("td");
  		 var general =  document.createElement("td");
  		 var purpose = document.createElement("td");
  		 var comment = document.createElement("td");



  		 tutorName.innerHTML = childSnapshot.child("Tutor Evaluated").val();
  		 studentName.innerHTML = childSnapshot.child("Evaluator").val();
  		 classYear.innerHTML = childSnapshot.child("Class Year").val();
  		 ESL.innerHTML = childSnapshot.child("ESL").val();
	 	   attitude.innerHTML = childSnapshot.child("Attitude").val();
	 	   atmosphere.innerHTML = childSnapshot.child("Atmosphere").val();
  		 knowledge.innerHTML = childSnapshot.child("Overall Knowledge").val();
  		 understanding.innerHTML = childSnapshot.child("Understanding").val();
  		 general.innerHTML = childSnapshot.child("General").val();
  		 purpose.innerHTML = childSnapshot.child("Purpose").val();
  		 comment.innerHTML = childSnapshot.child("Comment").val();




  		 dataRow.appendChild(tutorName);
  		 dataRow.appendChild(studentName);
  		 dataRow.appendChild(classYear);
  		 dataRow.appendChild(ESL);
  		 dataRow.appendChild(attitude);
  		 dataRow.appendChild(atmosphere);
  		 dataRow.appendChild(knowledge);
  		 dataRow.appendChild(understanding);
  		 dataRow.appendChild(general);
  		 dataRow.appendChild(purpose);
  		 dataRow.appendChild(comment);

		   $("#tutor_eval_body").append(dataRow);
  	

		  });
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});

}

var populateStudentEval  = function () {
  var url = "https://learning-center-app.firebaseio.com/Users";

  var myFirebaseRef = new Firebase(url);


  myFirebaseRef.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
         //create row for data to be put into
         console.log("count")
        
        if (childSnapshot.child("IsATutor/Evaluations").val()!== null){
         // var newFirebase = myFirebaseRef.appendChild()
         childSnapshot.child("IsATutor/Evaluations").forEach(function(childchildSnap){
         console.log(childchildSnap.val())
         console.log(childchildSnap.child("Student").val());


         var dataRow = document.createElement("tr");

         var studentName = document.createElement("td");
         var classYear = document.createElement("td");
         var date = document.createElement("td");
         var time = document.createElement("td");
         var professor =  document.createElement("td");
         var course =  document.createElement("td");
         var help =  document.createElement("td");
         var attitude =  document.createElement("td");
         var tutor =  document.createElement("td");

         
         studentName.innerHTML = childchildSnap.child("Student").val();
         classYear.innerHTML = childchildSnap.child("Year").val();
         date.innerHTML = childchildSnap.child("Date").val();
         time.innerHTML = childchildSnap.child("Time").val();
         professor.innerHTML = childchildSnap.child("Professor").val();
         course.innerHTML = childchildSnap.child("Course").val();
         help.innerHTML = childchildSnap.child("Help Needed").val();
         attitude.innerHTML = childchildSnap.child("Attitude").val();
         tutor.innerHTML = childchildSnap.child("Tutor").val();
        
         dataRow.appendChild(studentName);
         dataRow.appendChild(classYear);
         dataRow.appendChild(date);
         dataRow.appendChild(time);
         dataRow.appendChild(professor);
         dataRow.appendChild(course);
         dataRow.appendChild(help);
         dataRow.appendChild(attitude);
         dataRow.appendChild(tutor);

         $("#student_eval_body").append(dataRow);
         })
      
        }

      });
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}








