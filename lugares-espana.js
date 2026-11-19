// Posiciones calibradas sobre el mapa de relieve de Atlas Abierto.
const categories = {
  "agua": [
    "Océanos y mares",
    "#096d92"
  ],
  "mesetas": [
    "Mesetas",
    "#854f15"
  ],
  "relieve": [
    "Sistemas montañosos y picos",
    "#95451d"
  ],
  "rios": [
    "Ríos",
    "#2258bd"
  ],
  "costa": [
    "Golfos, cabos y estrechos",
    "#794883"
  ],
  "islas": [
    "Archipiélagos, islas y provincias",
    "#405c31"
  ]
};
const places = [
  {"id":0,"type":"agua","name":"Mar Cantábrico","x":490,"y":35,"clue":"Baña la costa norte peninsular, entre Galicia y el País Vasco.","line":null,"area":null,"aliases":[],"zones":null,"markers":null,
    "waterRegions":[[
      [215,0], [824,0], [809,51], [793,69], [733,72], [685,67], [619,76],
      [555,78], [507,62], [440,48], [387,43], [328,54], [271,50], [237,44],
      [215,37]
    ]]
  },
  {"id":1,"type":"agua","name":"Mar Mediterráneo","x":1145,"y":799,"clue":"Baña el litoral oriental y parte del sur peninsular, además de Baleares.","line":null,"area":null,"aliases":[],"zones":null,"markers":null,
    "waterRegions":[[
      [432,1015], [465,988], [479,967], [510,965], [566,950], [625,956], [655,949],
      [703,949], [742,936], [770,947], [789,923], [800,885], [822,856], [855,852],
      [902,827], [910,787], [937,752], [950,722], [996,672], [970,628], [952,602],
      [944,576], [960,524], [1000,498], [1029,446], [1054,429], [1041,401], [1084,383],
      [1151,365], [1183,339], [1227,332], [1249,301], [1291,265], [1297,224], [1284,177],
      [1305,110], [1338,80], [1364,66], [1440,66], [1440,902], [1354,922], [1268,929],
      [1157,977], [1101,969], [1036,983], [983,1029], [940,1052], [885,1100], [848,1131],
      [793,1124], [767,1144], [735,1128], [687,1151], [644,1140], [601,1125], [544,1091],
      [480,1071], [434,1052]
    ]],
    "landExclusions": [
      [[1094,666],[1091,653],[1123,637],[1134,650],[1127,667],[1102,679]],
      [[1203,586],[1224,570],[1254,556],[1289,536],[1327,552],[1310,572],[1319,606],[1271,624],[1259,604],[1233,609],[1225,594]],
      [[1350,535],[1366,515],[1381,509],[1403,520],[1411,541],[1388,542]]
    ]
  },
  {"id":2,"type":"agua","name":"Océano Atlántico","x":170,"y":965,"clue":"Baña la costa occidental peninsular y rodea las islas Canarias.","line":null,"area":null,"aliases":[],"zones":null,"markers":null,
    "waterRegions":[[
      [0,0], [215,0], [215,37], [155,41], [126,65], [114,89], [85,103],
      [62,125], [72,159], [98,173], [81,202], [82,245], [69,273], [63,323],
      [75,355], [67,400], [51,456], [46,503], [30,551], [34,585], [20,628],
      [2,661], [2,689], [39,700], [88,667], [96,712], [84,752], [75,792],
      [72,833], [61,874], [99,899], [149,911], [198,903], [247,897], [275,904],
      [304,926], [332,937], [354,961], [360,994], [383,1030], [424,1046], [411,1081],
      [388,1119], [358,1179], [0,1179]
    ]],
    "landExclusions": [
      [[5,1087],[6,1066],[24,1068],[34,1091],[18,1104]],
      [[39,1099],[40,1074],[54,1069],[62,1081],[55,1100]],
      [[60,1124],[74,1111],[87,1120],[85,1134],[65,1137]],
      [[98,1119],[99,1101],[115,1097],[123,1111],[116,1122]],
      [[121,1108],[118,1085],[134,1078],[151,1084],[145,1101]],
      [[156,1141],[159,1123],[179,1116],[198,1126],[196,1144],[174,1150]],
      [[222,1139],[222,1120],[249,1110],[262,1085],[267,1059],[284,1053],[285,1084],[268,1110],[247,1133]],
      [[281,1063],[283,1042],[308,1017],[326,1019],[319,1041],[299,1067]],
      [[358,1047],[385,1047],[419,1073],[400,1115],[374,1160],[358,1179]]
    ]
  },
  {"id":3,"type":"mesetas","name":"Meseta Central","x":468,"y":412,"clue":"Ocupa gran parte del interior peninsular. El Sistema Central la divide en dos.","line":null,"area":[468,412,169,174],"aliases":[],"zones":null,"markers":null},
  {"id":4,"type":"mesetas","name":"Submeseta Norte","x":470,"y":306,"clue":"La parte de la Meseta que queda al norte del Sistema Central. La atraviesa el Duero.","line":null,"area":[470,306,151,72],"aliases":[],"zones":null,"markers":null},
  {"id":5,"type":"mesetas","name":"Submeseta Sur","x":546,"y":592,"clue":"La parte de la Meseta que queda al sur del Sistema Central. Por ella discurren el Tajo y el Guadiana.","line":null,"area":[546,592,182,95],"aliases":[],"zones":null,"markers":null},
  {"id":6,"type":"relieve","name":"Macizo Galaico","x":194,"y":186,"clue":"Se sitúa en el noroeste peninsular, en Galicia.","line":[[104,144],[154,197],[194,186],[222,245]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":7,"type":"relieve","name":"Montes de León","x":357,"y":194,"clue":"Entre Galicia y la cuenca del Duero, en el borde occidental de la Meseta.","line":[[259,241],[323,224],[357,194],[357,157]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":8,"type":"relieve","name":"Cordillera Cantábrica","x":468,"y":125,"clue":"Se extiende paralela a la costa cantábrica, al norte de la Meseta.","line":[[260,145],[345,137],[415,130],[468,125],[501,112],[572,125],[650,131]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":9,"type":"relieve","name":"Picos de Europa","x":497,"y":106,"clue":"Conjunto montañoso de la Cordillera Cantábrica.","line":null,"area":[497,106,19,18],"aliases":[],"zones":null,"markers":null},
  {"id":10,"type":"relieve","name":"Montes Vascos","x":733,"y":134,"clue":"Enlazan la Cordillera Cantábrica y los Pirineos.","line":[[645,125],[697,134],[733,134],[766,142]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":11,"type":"relieve","name":"Pirineos","x":1117,"y":192,"clue":"Se extienden entre el Cantábrico y el Mediterráneo, junto a la frontera con Francia.","line":[[809,144],[861,160],[934,180],[1041,198],[1117,192],[1185,201],[1246,208],[1287,218]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":12,"type":"relieve","name":"Aneto","x":1041,"y":197,"clue":"Cumbre más alta de los Pirineos.","line":null,"area":[1041,197,14,14],"aliases":["Pico Aneto","Pico del Aneto","Aneto (pico)"],"zones":null,"markers":null},
  {"id":13,"type":"relieve","name":"Cordillera Costero-Catalana","x":1221,"y":317,"clue":"Se extiende en paralelo a buena parte del litoral catalán.","line":[[1020,431],[1073,398],[1156,364],[1221,317],[1258,283],[1277,247]],"area":null,"aliases":["Cordillera Costero Catalana","Cordilleras Costeras Catalanas","Cordillera Litoral Catalana"],"zones":null,"markers":null},
  {"id":14,"type":"relieve","name":"Sistema Ibérico","x":830,"y":397,"clue":"Borde oriental de la Meseta. Separa parte de la cuenca del Ebro del interior peninsular.","line":[[674,267],[705,270],[755,303],[805,327],[830,397],[823,471],[887,510],[918,562]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":15,"type":"relieve","name":"Sierra de Tramontana","x":1250,"y":553,"clue":"Recorre el noroeste de Mallorca.","line":[[1215,579],[1232,568],[1250,553],[1274,544],[1296,537]],"area":null,"aliases":["Serra de Tramuntana","Tramuntana","Tramontana"],"zones":null,"markers":null},
  {"id":16,"type":"relieve","name":"Puig Major","x":1257,"y":549,"clue":"Cumbre de la Sierra de Tramontana, en Mallorca.","line":null,"area":[1257,549,13,13],"aliases":["Puig Mayor","Puig Major (pico)","Pico Puig Major"],"zones":null,"markers":null},
  {"id":17,"type":"relieve","name":"Teide","x":121,"y":1112,"clue":"Pico volcánico situado en la isla de Tenerife.","line":null,"area":[121,1112,12,10],"aliases":["Pico del Teide","Pico Teide","Teide (pico)"],"zones":null,"markers":null},
  {"id":18,"type":"relieve","name":"Sistema Central","x":527,"y":474,"clue":"Cadena montañosa que separa la Submeseta Norte de la Submeseta Sur.","line":[[299,503],[366,483],[432,505],[463,500],[527,474],[573,446],[598,435],[634,407]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":19,"type":"relieve","name":"Sierra de Guadarrama","x":583,"y":434,"clue":"Sierra del Sistema Central, entre Madrid y Segovia.","line":[[551,459],[576,444],[583,434],[604,423]],"area":null,"aliases":["Guadarrama","Sierra del Guadarrama"],"zones":null,"markers":null},
  {"id":20,"type":"relieve","name":"Montes de Toledo","x":505,"y":598,"clue":"Entre las cuencas del Tajo y el Guadiana, en la Submeseta Sur.","line":[[422,602],[465,598],[505,598],[543,600],[601,612]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":21,"type":"relieve","name":"Sierra Morena","x":480,"y":761,"clue":"Reborde sur de la Meseta, al norte del valle del Guadalquivir.","line":[[300,787],[365,785],[420,773],[480,761],[547,759],[609,749],[650,752]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":22,"type":"relieve","name":"Cordilleras Béticas","x":713,"y":781,"clue":"El gran conjunto montañoso del sur y sureste peninsular.","line":[[426,955],[495,927],[550,923],[610,881],[664,823],[713,781],[778,764],[843,746],[919,721],[986,697]],"area":null,"aliases":["Sistemas Béticos","Béticas","Sistema Bético"],"zones":null,"markers":null,"extraLines":[[[432,990],[473,966],[520,962],[576,944],[615,936],[645,916],[708,910],[750,893]]]},
  {"id":23,"type":"relieve","name":"Cordillera Subbética","x":713,"y":781,"clue":"Sector interior de las Cordilleras Béticas.","line":[[426,955],[495,927],[550,923],[610,881],[664,823],[713,781],[778,764],[843,746],[919,721],[986,697]],"area":null,"aliases":["Subbética","Sierras Subbéticas"],"zones":null,"markers":null},
  {"id":24,"type":"relieve","name":"Cordillera Penibética","x":615,"y":936,"clue":"Sector de las Béticas más cercano al litoral mediterráneo andaluz.","line":[[432,990],[473,966],[520,962],[576,944],[615,936],[645,916],[708,910],[750,893]],"area":null,"aliases":["Penibética"],"zones":null,"markers":null},
  {"id":25,"type":"relieve","name":"Sierra Nevada","x":649,"y":916,"clue":"Está en la Penibética. En ella se sitúan el Veleta y el Mulhacén.","line":[[621,920],[636,916],[649,916],[671,911],[692,904]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":26,"type":"relieve","name":"Veleta","x":643,"y":915,"clue":"Pico de Sierra Nevada situado al oeste del Mulhacén.","line":null,"area":[643,915,10,10],"aliases":["Pico del Veleta","Pico Veleta"],"zones":null,"markers":null},
  {"id":27,"type":"relieve","name":"Mulhacén","x":649,"y":916,"clue":"Cumbre más alta de la península ibérica, en Sierra Nevada.","line":null,"area":[649,916,10,10],"aliases":["Pico del Mulhacén","Pico Mulhacén"],"zones":null,"markers":null},
  {"id":28,"type":"rios","name":"Tambre","x":96,"y":130,"clue":"Río gallego que desemboca en la ría de Muros y Noia.","line":[[153,129],[120,138],[96,130],[73,148],[69,151]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":29,"type":"rios","name":"Miño","x":162,"y":230,"clue":"Río del noroeste peninsular. Su tramo final marca parte de la frontera con Portugal.","line":[[234,101],[201,136],[190,176],[178,215],[162,230],[134,260],[90,275],[73,297]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":30,"type":"rios","name":"Sil","x":255,"y":221,"clue":"Afluente del Miño que pasa por El Bierzo.","line":[[360,130],[334,151],[315,198],[302,200],[255,221],[226,215],[193,219],[178,215]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":31,"type":"rios","name":"Duero","x":452,"y":347,"clue":"Atraviesa la Submeseta Norte y desemboca en el Atlántico, en Oporto.","line":[[695,278],[732,315],[729,349],[666,339],[615,323],[570,334],[498,339],[452,347],[396,347],[334,333],[312,384],[291,407],[198,394],[115,399]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":32,"type":"rios","name":"Pisuerga","x":552,"y":257,"clue":"Afluente del Duero que pasa por Valladolid.","line":[[547,143],[558,163],[555,217],[552,257],[535,292],[507,325],[499,333]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":33,"type":"rios","name":"Tajo","x":493,"y":543,"clue":"Pasa por Toledo y desemboca en Lisboa, en el Atlántico.","line":[[806,507],[767,460],[719,475],[694,502],[617,540],[575,559],[493,543],[430,561],[307,569],[238,573],[117,625],[38,702]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":34,"type":"rios","name":"Guadiana","x":344,"y":670,"clue":"Pasa por Mérida y Badajoz y desemboca entre España y Portugal.","line":[[605,655],[563,666],[508,662],[474,659],[420,646],[344,670],[281,671],[251,686],[228,757],[242,892]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":35,"type":"rios","name":"Tinto","x":312,"y":862,"clue":"Río de Huelva que se une al Odiel cerca de su desembocadura.","line":[[323,824],[328,848],[312,862],[304,883],[288,890]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":36,"type":"rios","name":"Odiel","x":280,"y":866,"clue":"Río de Huelva que se une al Tinto cerca de su desembocadura.","line":[[322,797],[298,823],[286,840],[280,866],[284,887],[288,890]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":37,"type":"rios","name":"Guadalquivir","x":503,"y":812,"clue":"Pasa por Córdoba y Sevilla. Desemboca en el Atlántico, en Sanlúcar de Barrameda.","line":[[676,799],[667,789],[634,793],[600,796],[560,798],[503,812],[452,834],[417,847],[382,875],[381,906],[353,960]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":38,"type":"rios","name":"Genil","x":523,"y":896,"clue":"Afluente del Guadalquivir que pasa por Granada.","line":[[643,910],[620,904],[597,904],[566,904],[523,896],[503,861],[465,856],[453,834]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":39,"type":"rios","name":"Guadalete","x":390,"y":977,"clue":"Pasa cerca de Jerez y desemboca en la bahía de Cádiz.","line":[[445,956],[435,948],[410,962],[390,977],[375,984],[365,996]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":40,"type":"rios","name":"Segura","x":843,"y":786,"clue":"Pasa por Murcia y desemboca en el Mediterráneo, en Guardamar.","line":[[701,784],[713,754],[744,749],[800,760],[829,768],[843,786],[855,798],[876,788],[904,780],[908,777]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":41,"type":"rios","name":"Júcar","x":836,"y":654,"clue":"Pasa por Cuenca y desemboca en el Mediterráneo, en Cullera.","line":[[791,510],[763,538],[760,602],[796,648],[836,654],[872,657],[912,660],[950,653]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":42,"type":"rios","name":"Turia","x":873,"y":581,"clue":"Pasa por la ciudad de Valencia y desemboca en el Mediterráneo.","line":[[801,494],[863,504],[853,540],[873,581],[898,603],[925,614],[943,620]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":43,"type":"rios","name":"Ebro","x":864,"y":310,"clue":"Discurre por Zaragoza y desemboca formando un delta en el Mediterráneo.","line":[[548,129],[590,132],[625,167],[690,183],[736,217],[778,250],[816,278],[864,310],[890,331],[942,351],[983,382],[1019,381],[1035,433],[1072,444]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":44,"type":"rios","name":"Llobregat","x":1186,"y":296,"clue":"Río catalán que desemboca junto al Prat de Llobregat, al sur de Barcelona.","line":[[1189,225],[1178,241],[1185,272],[1186,296],[1193,321],[1211,341],[1220,347]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":45,"type":"rios","name":"Bidasoa","x":797,"y":116,"clue":"Desemboca en el Cantábrico, junto a Hondarribia y Hendaya.","line":[[813,128],[799,128],[797,116],[790,107],[786,93]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":46,"type":"rios","name":"Nervión","x":704,"y":107,"clue":"Río que se une al Ibaizábal y da paso a la ría de Bilbao.","line":[[686,147],[689,131],[704,107],[695,103],[688,90]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":47,"type":"rios","name":"Nalón","x":388,"y":96,"clue":"Principal río de Asturias. Llega al Cantábrico cerca de San Esteban de Pravia.","line":[[459,125],[436,112],[408,93],[388,96],[372,84],[363,69],[370,60]],"area":null,"aliases":[],"zones":null,"markers":null},
  {"id":48,"type":"costa","name":"Golfo de Vizcaya","x":737,"y":40,"clue":"En el extremo este del Cantábrico, entre las costas del norte de España y el oeste de Francia.","line":null,"area":[737,40,65,30],"aliases":["Golfo de Bizkaia"],"zones":null,"markers":null},
  {"id":49,"type":"costa","name":"Cabo de Ajo","x":629,"y":65,"clue":"Cabo cántabro al este de Santander.","line":null,"area":[629,65,14,14],"aliases":["Cabo Ajo","Ajo"],"zones":null,"markers":null},
  {"id":50,"type":"costa","name":"Cabo de Peñas","x":390,"y":47,"clue":"Saliente de la costa asturiana, al norte de Oviedo.","line":null,"area":[390,47,14,14],"aliases":["Cabo Peñas","Peñas"],"zones":null,"markers":null},
  {"id":51,"type":"costa","name":"Punta de Estaca de Bares","x":204,"y":29,"clue":"Extremo septentrional de la península ibérica, en Galicia.","line":null,"area":[204,29,15,15],"aliases":["Estaca de Bares","Punta Estaca de Bares"],"zones":null,"markers":null},
  {"id":52,"type":"costa","name":"Cabo Finisterre","x":46,"y":135,"clue":"Cabo de la costa occidental de Galicia.","line":null,"area":[46,135,15,15],"aliases":["Finisterre","Cabo de Finisterre","Fisterra","Cabo Fisterra"],"zones":null,"markers":null},
  {"id":53,"type":"costa","name":"Cabo de San Vicente","x":77,"y":914,"clue":"Cabo del suroeste de Portugal, en el Algarve.","line":null,"area":[77,914,15,15],"aliases":["Cabo San Vicente","San Vicente"],"zones":null,"markers":null},
  {"id":54,"type":"costa","name":"Golfo de Cádiz","x":285,"y":936,"clue":"Entre el sur de Portugal y el suroeste andaluz, en el Atlántico.","line":null,"area":[285,936,52,31],"aliases":[],"zones":null,"markers":null},
  {"id":55,"type":"costa","name":"Punta de Tarifa","x":407,"y":1042,"clue":"Extremo meridional de la península ibérica.","line":null,"area":[407,1042,14,14],"aliases":["Tarifa","Punta Tarifa"],"zones":null,"markers":null},
  {"id":56,"type":"costa","name":"Estrecho de Gibraltar","x":430,"y":1057,"clue":"Separa Europa y África y une el Atlántico con el Mediterráneo.","line":null,"area":[430,1057,61,15],"aliases":["Gibraltar"],"zones":null,"markers":null},
  {"id":57,"type":"costa","name":"Golfo de Almería","x":716,"y":966,"clue":"En el Mediterráneo andaluz, al oeste del cabo de Gata.","line":null,"area":[716,966,25,13],"aliases":[],"zones":null,"markers":null},
  {"id":58,"type":"costa","name":"Cabo de Gata","x":747,"y":950,"clue":"Saliente costero al sureste de la provincia de Almería.","line":null,"area":[747,950,14,14],"aliases":["Cabo Gata"],"zones":null,"markers":null},
  {"id":59,"type":"costa","name":"Cabo de Palos","x":900,"y":833,"clue":"Cabo de la Región de Murcia, al sur de La Manga.","line":null,"area":[900,833,14,14],"aliases":["Cabo Palos"],"zones":null,"markers":null},
  {"id":60,"type":"costa","name":"Cabo de la Nao","x":997,"y":688,"clue":"Cabo alicantino situado en el extremo oriental de Xàbia.","line":null,"area":[997,688,14,14],"aliases":["Cabo La Nao","Cabo de Nao","La Nao"],"zones":null,"markers":null},
  {"id":61,"type":"costa","name":"Golfo de Valencia","x":1018,"y":568,"clue":"En el Mediterráneo, entre el entorno del delta del Ebro y el cabo de la Nao.","line":null,"area":[1018,568,49,92],"aliases":[],"zones":null,"markers":null},
  {"id":62,"type":"costa","name":"Cabo de Creus","x":1301,"y":220,"clue":"Cabo situado en el extremo oriental de la península ibérica, en Girona.","line":null,"area":[1301,220,14,14],"aliases":["Cabo Creus","Cap de Creus"],"zones":null,"markers":null},
  {"id":63,"type":"islas","name":"Menorca","x":1380,"y":532,"clue":"Isla situada al noreste de Mallorca.","line":null,"area":[1380,532,24,14],"aliases":[],"zones":null,"markers":null},
  {"id":64,"type":"islas","name":"Mallorca","x":1261,"y":582,"clue":"La isla más grande de las Baleares.","line":null,"area":[1261,582,39,27],"aliases":[],"zones":null,"markers":null},
  {"id":65,"type":"islas","name":"Cabrera","x":1270,"y":635,"clue":"Pequeña isla al sur de Mallorca.","line":null,"area":[1270,635,9,9],"aliases":[],"zones":null,"markers":null},
  {"id":66,"type":"islas","name":"Ibiza","x":1117,"y":657,"clue":"Isla situada al suroeste de Mallorca y al norte de Formentera.","line":null,"area":[1117,657,17,15],"aliases":["Eivissa"],"zones":null,"markers":null},
  {"id":67,"type":"islas","name":"Formentera","x":1119,"y":692,"clue":"Pequeña isla situada al sur de Ibiza.","line":null,"area":[1119,692,10,10],"aliases":[],"zones":null,"markers":null},
  {"id":68,"type":"islas","name":"El Hierro","x":39,"y":1144,"clue":"La isla más suroccidental del archipiélago canario.","line":null,"area":[39,1144,10,8],"aliases":["Hierro"],"zones":null,"markers":null},
  {"id":69,"type":"islas","name":"La Palma","x":50,"y":1088,"clue":"Isla del noroeste del archipiélago canario.","line":null,"area":[50,1088,12,16],"aliases":[],"zones":null,"markers":null},
  {"id":70,"type":"islas","name":"La Gomera","x":88,"y":1120,"clue":"Isla situada entre Tenerife y El Hierro.","line":null,"area":[88,1120,9,8],"aliases":["Gomera"],"zones":null,"markers":null},
  {"id":71,"type":"islas","name":"Tenerife","x":123,"y":1114,"clue":"Es la isla canaria en la que está el Teide.","line":null,"area":[123,1114,27,14],"aliases":[],"zones":null,"markers":null},
  {"id":72,"type":"islas","name":"Gran Canaria","x":181,"y":1132,"clue":"Isla situada entre Tenerife y Fuerteventura.","line":null,"area":[181,1132,18,15],"aliases":[],"zones":null,"markers":null},
  {"id":73,"type":"islas","name":"Fuerteventura","x":260,"y":1106,"clue":"Isla alargada situada al sur de Lanzarote.","line":null,"area":[260,1106,19,25],"aliases":[],"zones":null,"markers":null},
  {"id":74,"type":"islas","name":"Lanzarote","x":288,"y":1073,"clue":"Isla situada al noreste de Fuerteventura.","line":null,"area":[288,1073,15,14],"aliases":[],"zones":null,"markers":null},
  {"id":75,"type":"islas","name":"Islas Baleares","x":1270,"y":635,"clue":"Archipiélago del Mediterráneo situado al este de la península.","line":null,"area":null,"aliases":["Baleares","Archipiélago balear","Illes Balears"],"zones":[[1380,532,24,14],[1261,582,39,27],[1270,635,9,9],[1117,657,17,15],[1119,692,10,10]],"markers":[[1380,532],[1261,582],[1270,635],[1117,657],[1119,692]]},
  {"id":76,"type":"islas","name":"Islas Canarias","x":123,"y":1114,"clue":"Archipiélago del Atlántico situado al noroeste de África.","line":null,"area":null,"aliases":["Canarias","Archipiélago canario"],"zones":[[39,1144,10,8],[50,1088,12,16],[88,1120,9,8],[123,1114,27,14],[181,1132,18,15],[260,1106,19,25],[288,1073,15,14]],"markers":[[39,1144],[50,1088],[88,1120],[123,1114],[181,1132],[260,1106],[288,1073]]},
  {"id":77,"type":"islas","name":"Provincia de Santa Cruz de Tenerife","x":88,"y":1120,"clue":"La provincia occidental incluye El Hierro, La Palma, La Gomera y Tenerife.","line":null,"area":null,"aliases":["Santa Cruz de Tenerife","Provincia Santa Cruz de Tenerife"],"zones":[[39,1144,10,8],[50,1088,12,16],[88,1120,9,8],[123,1114,27,14]],"markers":[[39,1144],[50,1088],[88,1120],[123,1114]]},
  {"id":78,"type":"islas","name":"Provincia de Las Palmas","x":260,"y":1106,"clue":"La provincia oriental incluye Gran Canaria, Fuerteventura y Lanzarote.","line":null,"area":null,"aliases":["Las Palmas","Provincia Las Palmas"],"zones":[[181,1132,18,15],[260,1106,19,25],[288,1073,15,14]],"markers":[[181,1132],[260,1106],[288,1073]]}
];
