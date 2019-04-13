import axios from "axios"

function aMonthAgo(date) {
  const day1 = Date.parse('25 Aug 2018 00:00:00 GMT')
  const day2 = Date.parse('25 Jul 2018 00:00:00 GMT')
  return new Date(date - (day1 - day2));
}


  export async function fetch311() {
    const base_url = 'https://lane-breach.herokuapp.com/api/sf311_cases'
    var today = new Date();
    const url_filters = [
      ['start_time', aMonthAgo(today).toISOString().substring(0, 10)],
      ['end_time', today.toISOString().substring(0, 10)],
      ['per_page', 500]
    ];

    var url = base_url;
    for (var i = 0; i < url_filters.length; i++) {
      var sep = '&';
      if (i == 0) { sep = '?' }
      url += sep + url_filters[i][0] + '=' + url_filters[i][1];
    }

    const { data: bikeLaneReports } = await axios.get(url);

    const formattedData = {
      "type": "FeatureCollection",
      "features": bikeLaneReports.data.map((report, i) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [report.long, report.lat],
        },
        properties: {
          title: `Point${i}`,
          icon: "harbor",
          color: "#FFFFFF"
        }
      }))
    };

    return formattedData;
  }  // fetch311
