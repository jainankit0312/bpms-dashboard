 $(document).ready(function() {
    
		
		/*$("#dashlet1,#dashlet2,#dashlet3,#dashlet4,#dashlet5,#dashlet6").click(function () {
		      $(this).effect("shake", { times:1 }, 10);
		});*/
		$("#task1d").click(function () {
		      //alert("task1d");
			$("#tasklist").empty();	
			$("#tasklist").append("<li>You got 5 new tasks.</li>");
			$("#tasklist").append("<li>2 tasks were claimed by user 'intalio\\admin'.</li>");
			$("#tasklist").append("<li>'intalio\\admin' re-assigned 1 task to you.</li>");
		

		});
		$("#task2d").click(function () {
		     $("#tasklist").empty();	
			$("#tasklist").append("<li>You got 10 new tasks.</li>");
			$("#tasklist").append("<li>4 tasks were claimed by user 'intalio\\admin'.</li>");
			$("#tasklist").append("<li>'intalio\\admin' re-assigned 5 task to you.</li>");
		});
		$("#task1w").click(function () {
		     $("#tasklist").empty();	
			$("#tasklist").append("<li>You got 100 new tasks.</li>");
			$("#tasklist").append("<li>40 tasks were claimed by user 'intalio\\admin'.</li>");
			$("#tasklist").append("<li>'intalio\\admin' re-assigned 20 task to you.</li>");
		});
		$("#task1m").click(function () {
		      $("#tasklist").empty();	
			$("#tasklist").append("<li>You got 400 new tasks.</li>");
			$("#tasklist").append("<li>100 tasks were claimed by user 'intalio\\admin'.</li>");
			$("#tasklist").append("<li>'intalio\\admin' re-assigned 200 task to you.</li>");
		});

		// code for the days of Notification

		$("#not1d").click(function () {
		     $("#nots").empty();	
			$("#nots").append("<li>10 instances got failed.</li>");
			$("#nots").append("<li>20 instances got terminated.</li>");
			$("#nots").append("<li>30 instances got completed.</li>");
			$("#nots").append("<li>40 instances are running.</li>");
		});
		$("#not2d").click(function () {
		     $("#nots").empty();	
			$("#nots").append("<li>50 instances got failed.</li>");
			$("#nots").append("<li>70 instances got terminated.</li>");
			$("#nots").append("<li>90 instances got completed.</li>");
			$("#nots").append("<li>160 instances are running.</li>");
		});
		$("#not1w").click(function () {
		      $("#nots").empty();	
			$("#nots").append("<li>60 instances got failed.</li>");
			$("#nots").append("<li>100 instances got terminated.</li>");
			$("#nots").append("<li>300 instances got completed.</li>");
			$("#nots").append("<li>700 instances are running.</li>");
		});
		$("#not1m").click(function () {
		      $("#nots").empty();	
			$("#nots").append("<li>500 instances got failed.</li>");
			$("#nots").append("<li>700 instances got terminated.</li>");
			$("#nots").append("<li>900 instances got completed.</li>");
			$("#nots").append("<li>1600 instances are running.</li>");
		});

		// code for the days of Events

		$("#eve1d").click(function () {
		      //alert("eve1d");
		});
		$("#eve2d").click(function () {
		      //alert("eve2d");
		});
		$("#eve1w").click(function () {
		     // alert("eve1w");
		});
		$("#eve1m").click(function () {
		      //alert("eve1m");
		});

		// code for the days of Charting

		var s1 = [10, 20, 30, 40];

		$("#cha1d").click(function () {
		      //alert("cha1d");
		    var s1 = [10, 20, 30, 40];
		    chartAgain(s1);
		});
		$("#cha2d").click(function () {
		     // alert("cha2d");
			var s1 = [50, 70, 90, 160];
			chartAgain(s1);
		});
		$("#cha1w").click(function () {
		     // alert("cha1w");
		     var s1 = [60, 100, 300, 700];
		     chartAgain(s1);
		});
		$("#cha1m").click(function () {
		    // alert("cha1m");
		   var s1 = [500, 700, 900, 1600];
		   chartAgain(s1);
		});

		
		// Code for the chart
		var s1 = [10, 20, 30, 40];
		    chartAgain(s1);
		
		//$("#dashlet1").scrollbars();

  });
function reload()
{
	location.reload();
	return false;
}
function chartAgain(s1)
{
		$("#barChart").empty();		
		$.jqplot.config.enablePlugins = true;
		
		var ticks = ['Failed', 'Terminated', 'Completed', 'In Progress'];

		plot1 = $.jqplot('barChart', [s1], {
		// Only animate if we're not using excanvas (not in IE 7 or IE 8)..
		animate: !$.jqplot.use_excanvas,
		seriesDefaults:{
		renderer:$.jqplot.BarRenderer,
		pointLabels: { show: true }
		},
		axes: {
		xaxis: {
		    renderer: $.jqplot.CategoryAxisRenderer,
		    ticks: ticks
		}
		
		},
		highlighter: { show: false }
		});

		

}
