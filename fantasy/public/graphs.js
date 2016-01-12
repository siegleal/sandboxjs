(function(){
    $('#goButton').on('click', function(e){
        var id = $('#players').val();
        
        $.get('/points/' + id, function(data){
            var totals = data.points.map(function(element){
                return element.total;
            });
            console.log(totals);

            drawChart(totals);

        });

    });


    $.get('/players', function(data){
        data.players.forEach(function(elem, index){

            $('#players').append('<option value="' + elem.cbsid + '">' + elem.name + '</option>');

        });

    });

    google.charts.load('current', {'packages':['corechart']});
//    google.charts.setOnLoadCallback(drawChart);

    function drawChart(points) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Week');
        data.addColumn('number', 'Points');
        points.forEach(function(elem, index){
            data.addRow([(index +1).toString(), elem]);

        });


        var options = {
            title: 'Company Performance',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chartcontent'));

                                                    chart.draw(data, options);
                                                          }

})();
