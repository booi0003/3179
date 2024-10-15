var vg_1 = "homework week 9/visualization.vl.json";
var vg_2 = "homework week 9/bar_chart_google.json";
var vg_3 = "homework week 9/bar_chart_tripadvisor.json";

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar_chart_google", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar_chart_tripadvisor", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);