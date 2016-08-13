var chart =

/*setTimeout(function () {*/
  c3.generate({
      data: {
          // iris data from R
          columns: [
              ["some college credit, no degree", 2268],
              ["high school diploma or equivalent (GED)", 1356],
              ["bachelor's degree", 5644],
              ["master's degree (non-professional)", 1445],
              ["professional degree (MBA, MD, JD, etc.)", 692],
              ["trade, technical, or vocational training", 443],
              ["associate's degree", 649],
              ["some high school", 764],
              ["Ph.D.", 160],
              ["no high school (secondary school)", 258],
          ],
          type : 'pie',
          onclick:
            function () {chart.resize({height:700, width:700});},
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

/*  c3.generate({
      data: {
          // iris data from R
          columns: [
              ["some college credit, no degree", 2268],
              ["high school diploma or equivalent (GED)", 1356],
              ["bachelor's degree", 5644],
              ["master's degree (non-professional)", 1445],
              ["professional degree (MBA, MD, JD, etc.)", 692],
              ["trade, technical, or vocational training", 443],
              ["associate's degree", 649],
              ["some high school", 764],
              ["Ph.D.", 160],
              ["no high school (secondary school)", 258],
          ],
          type : 'pie',
          onclick: function () {chart.resize({height:700, width:700});},
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });*/
/*}, 1500);*/

/*
setTimeout(function () {
  chart.resize({height:700, width:700});
}, 2000);
*/

/*setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
    chart.unload({
        ids: 'data2'
    });
}, 500);*/



/*setTimeout(function () {
    chart.load({
        columns: [
            ["setosa", 1],
            ["versicolor", 2],
            ["virginica", 3],
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
    chart.unload({
        ids: 'data2'
    });
}, 2500);
*/



/*
var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ["setosa", 1],
            ["versicolor", 2],
            ["virginica", 3],
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
    chart.unload({
        ids: 'data2'
    });
}, 2500);
*/