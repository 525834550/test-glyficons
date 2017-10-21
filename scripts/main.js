$(document).ready(function(){
			// Employeebuilder.init();
			// $.ajax({
			// 	url:"./index.html",
			// 	dataType:"html",
			// 	success:function(data){  		
			//   		 // $("#page-content-display").html(data);
			// 	},
			// 	complete:function(){
			// 		Employeebuilder.init();
			// 	},
			// 	error:function(){
			//   		console.log('Error in displaying page requested');
			// 	}

			// });



CreateTableFromJSON();


function CreateTableFromJSON() {
        var myEmp = [
            {
                "Emp ID": "1",
                "Emp Name": "Rhiana",
                "Category": "Computers",
                "Actions": "",

            },
            {
                "Emp ID": "2",
                "Emp Name": "Susan",
                "Category": "Programming",
                "Actions": ""
            },
            {
                "Emp ID": "3",
                "Emp Name": "Randy",
                "Category": "Science",
                "Actions": ""
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Emp ID', 'Emp Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myEmp.length; i++) {
            for (var key in myEmp[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
       	table.classList.add("employee__home__List", "table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

		

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myEmp.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
               
                 tabCell.innerHTML = myEmp[i][col[j]];

            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        $("tr:not(:first-child) td:last-child").addClass("glyphicon  glyphicon-pencil");
    }


///////////////////////////
    for (var i = 0; i < myEmp.length; i++) {
	    for (var key in myEmp[i]) {
	        col.push(key);
	        console.log (key);
	    }
	}


	var table = document.createElement("table");
	var tr = table.insertRow(-1); 

	for (var i = 0; i < col.length; i++) {
	    var th = document.createElement("th");      // TABLE HEADER.
	    th.innerHTML = col[i];
	    tr.appendChild(th);
	}

	tabCell.innerHTML = myEmp[i][col[j]];  
  


});

