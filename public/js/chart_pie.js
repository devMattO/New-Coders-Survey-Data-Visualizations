var chart =
  c3.generate({
      data: {

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