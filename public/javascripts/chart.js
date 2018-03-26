window.test=5;
google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawMarkersMap);
    function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
    ['Province',   'Livestock Count', 'Farmers'],
    ['Saint James',parseInt($(".james").attr('data-livestock')),parseInt($(".james").attr('data-farmercount'))],
    ['Saint Mary',parseInt($(".mary").attr('data-livestock')),parseInt($(".james").attr('data-farmercount')) ],
    ['Saint Andrew',parseInt($(".and").attr('data-livestock')),parseInt($(".and").attr('data-farmercount')) ],
    ['Clarendon',parseInt($(".cc").attr('data-livestock')),parseInt($(".cc").attr('data-farmercount')) ],
    ['Westmoreland',parseInt($(".west").attr('data-livestock')),parseInt($(".west").attr('data-farmercount')) ],
    ['Hanover',parseInt($(".han").attr('data-livestock')),parseInt($(".han").attr('data-farmercount')) ],
    ['Manchester',parseInt($(".man").attr('data-livestock')),parseInt($(".man").attr('data-farmercount')) ],
    ['Saint Ann',parseInt($(".ann").attr('data-livestock')),parseInt($(".ann").attr('data-farmercount')) ],
    ['Trelawny',parseInt($(".trel").attr('data-livestock')),parseInt($(".trel").attr('data-farmercount')) ],
    ['Portland',parseInt($(".port").attr('data-livestock')),parseInt($(".port").attr('data-farmercount')) ],
    ['Saint Thomas',parseInt($(".thom").attr('data-livestock')),parseInt($(".thom").attr('data-farmercount')) ],
    ['Saint Elizabeth',parseInt($(".eliza").attr('data-livestock')),parseInt($(".eliza").attr('data-farmercount')) ],
    ['Saint Catherine',parseInt($(".cath").attr('data-livestock')),parseInt($(".cath").attr('data-farmercount')) ],
   

    ]);
    var options = {
    region: 'JM',
    displayMode: 'markers',
    resolution: 'provinces',
    colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#06D6A0',
    defaultColor: '#f5f5f5',
    };
    var chart = new google.visualization.GeoChart(document.getElementById('geo-chart'));
    chart.draw(data, options);
    };