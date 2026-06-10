const DEMO_SEASONS = [
  {
    season: "2004-05",
    teams: [
      {
        team: "Liverpool",
        players: [
          { id:1,  name:"Jerzy Dudek",              pos:"GK",  nationality:"Poland",       apps:13, goals:0, assists:0, cs:7,  saves:55, tackles:0,  passes:680,  rating:7.2 },
          { id:2,  name:"Jamie Carragher",           pos:"CB", nationality:"England",      apps:13, goals:0, assists:0, cs:7,  saves:0,  tackles:52, passes:820,  rating:7.6 },
          { id:3,  name:"Sami Hyypiä",               pos:"CB", nationality:"Finland",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:42, passes:740,  rating:7.3 },
          { id:4,  name:"Steve Finnan",              pos:"CB", nationality:"Ireland",      apps:11, goals:0, assists:1, cs:5,  saves:0,  tackles:36, passes:580,  rating:7.0 },
          { id:5,  name:"John Arne Riise",           pos:"CB", nationality:"Norway",       apps:12, goals:1, assists:2, cs:5,  saves:0,  tackles:30, passes:560,  rating:7.1 },
          { id:6,  name:"Steven Gerrard",            pos:"MID", nationality:"England",      apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:54, passes:1080, rating:8.6 },
          { id:7,  name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:4, cs:0,  saves:0,  tackles:44, passes:1240, rating:7.9 },
          { id:8,  name:"Didi Hamann",               pos:"MID", nationality:"Germany",      apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:58, passes:820,  rating:7.4 },
          { id:9,  name:"Luis García",               pos:"ST", nationality:"Spain",        apps:13, goals:6, assists:3, cs:0,  saves:0,  tackles:14, passes:540,  rating:7.7 },
          { id:10, name:"Milan Baroš",               pos:"ST", nationality:"Czech Republic",apps:11, goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:360,  rating:7.3 },
          { id:11, name:"Harry Kewell",              pos:"ST", nationality:"Australia",    apps:7,  goals:2, assists:1, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.0 },
          { id:12, name:"Djibril Cissé",             pos:"ST", nationality:"France",       apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.1 },
          { id:13, name:"Vladimir Šmicer",           pos:"MID", nationality:"Czech Republic",apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:20, passes:440,  rating:7.0 }
        ]
      },
      {
        team: "AC Milan",
        players: [
          { id:14, name:"Dida",                      pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:52, tackles:0,  passes:660,  rating:7.6 },
          { id:15, name:"Cafu",                      pos:"CB", nationality:"Brazil",       apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:40, passes:680,  rating:7.5 },
          { id:16, name:"Paolo Maldini",             pos:"CB", nationality:"Italy",        apps:12, goals:0, assists:1, cs:7,  saves:0,  tackles:44, passes:840,  rating:7.9 },
          { id:17, name:"Alessandro Nesta",          pos:"CB", nationality:"Italy",        apps:11, goals:0, assists:0, cs:7,  saves:0,  tackles:46, passes:800,  rating:7.8 },
          { id:18, name:"Kakha Kaladze",             pos:"CB", nationality:"Georgia",      apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:34, passes:520,  rating:6.9 },
          { id:19, name:"Andrea Pirlo",              pos:"MID", nationality:"Italy",        apps:13, goals:2, assists:6, cs:0,  saves:0,  tackles:36, passes:1420, rating:8.5 },
          { id:20, name:"Clarence Seedorf",          pos:"MID", nationality:"Netherlands",  apps:12, goals:3, assists:3, cs:0,  saves:0,  tackles:40, passes:1060, rating:7.9 },
          { id:21, name:"Gennaro Gattuso",           pos:"MID", nationality:"Italy",        apps:12, goals:0, assists:1, cs:0,  saves:0,  tackles:68, passes:880,  rating:7.5 },
          { id:22, name:"Kaká",                      pos:"MID", nationality:"Brazil",       apps:13, goals:8, assists:5, cs:0,  saves:0,  tackles:20, passes:1120, rating:8.9 },
          { id:23, name:"Andriy Shevchenko",         pos:"ST", nationality:"Ukraine",      apps:12, goals:7, assists:2, cs:0,  saves:0,  tackles:10, passes:440,  rating:8.3 },
          { id:24, name:"Hernán Crespo",             pos:"ST", nationality:"Argentina",    apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:320,  rating:7.8 },
          { id:25, name:"Filippo Inzaghi",           pos:"ST", nationality:"Italy",        apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.3 },
          { id:26, name:"Rui Costa",                 pos:"MID", nationality:"Portugal",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:18, passes:580,  rating:7.2 }
        ]
      },
      {
        team: "Chelsea",
        players: [
          { id:27, name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:10, goals:0, assists:0, cs:6,  saves:44, tackles:0,  passes:580,  rating:7.7 },
          { id:28, name:"John Terry",                pos:"CB", nationality:"England",      apps:10, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:780,  rating:7.9 },
          { id:29, name:"William Gallas",            pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:42, passes:660,  rating:7.4 },
          { id:30, name:"Wayne Bridge",              pos:"CB", nationality:"England",      apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:520,  rating:6.9 },
          { id:31, name:"Glen Johnson",              pos:"CB", nationality:"England",      apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:7.0 },
          { id:32, name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:40, passes:1020, rating:8.2 },
          { id:33, name:"Claude Makélélé",           pos:"MID", nationality:"France",       apps:9,  goals:0, assists:1, cs:0,  saves:0,  tackles:64, passes:960,  rating:7.6 },
          { id:34, name:"Tiago",                     pos:"MID", nationality:"Portugal",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:780,  rating:7.3 },
          { id:35, name:"Damien Duff",               pos:"ST", nationality:"Ireland",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:14, passes:480,  rating:7.4 },
          { id:36, name:"Eiður Guðjohnsen",          pos:"ST", nationality:"Iceland",      apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:360,  rating:7.3 },
          { id:37, name:"Joe Cole",                  pos:"ST", nationality:"England",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:440,  rating:7.2 },
          { id:38, name:"Didier Drogba",             pos:"ST", nationality:"Ivory Coast",  apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.5 },
          { id:39, name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:14, passes:340,  rating:7.8 }
        ]
      },
      {
        team: "PSV Eindhoven",
        players: [
          { id:40, name:"Gomes",                     pos:"GK",  nationality:"Netherlands",  apps:12, goals:0, assists:0, cs:6,  saves:48, tackles:0,  passes:580,  rating:7.2 },
          { id:41, name:"André Ooijer",              pos:"CB", nationality:"Netherlands",  apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:640,  rating:7.0 },
          { id:42, name:"Alex",                      pos:"CB", nationality:"Brazil",       apps:12, goals:2, assists:0, cs:6,  saves:0,  tackles:48, passes:740,  rating:7.4 },
          { id:43, name:"Wilfred Bouma",             pos:"CB", nationality:"Netherlands",  apps:11, goals:0, assists:1, cs:5,  saves:0,  tackles:36, passes:560,  rating:7.0 },
          { id:44, name:"Lee Young-pyo",             pos:"CB", nationality:"South Korea",  apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:480,  rating:6.9 },
          { id:45, name:"Philip Cocu",               pos:"MID", nationality:"Netherlands",  apps:12, goals:1, assists:3, cs:0,  saves:0,  tackles:46, passes:1020, rating:7.5 },
          { id:46, name:"Johann Vogel",              pos:"MID", nationality:"Switzerland",  apps:11, goals:0, assists:1, cs:0,  saves:0,  tackles:56, passes:880,  rating:7.2 },
          { id:47, name:"Mark van Bommel",           pos:"MID", nationality:"Netherlands",  apps:12, goals:2, assists:2, cs:0,  saves:0,  tackles:58, passes:940,  rating:7.6 },
          { id:48, name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:4,  goals:2, assists:1, cs:0,  saves:0,  tackles:10, passes:220,  rating:7.5 },
          { id:49, name:"Mateja Kežman",             pos:"ST", nationality:"Serbia",       apps:11, goals:7, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.8 },
          { id:50, name:"Park Ji-sung",              pos:"MID", nationality:"South Korea",  apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.4 },
          { id:51, name:"Arouna Koné",               pos:"ST", nationality:"Ivory Coast",  apps:9,  goals:4, assists:1, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.2 },
          { id:52, name:"Jan Vennegoor of Hesselink",pos:"ST", nationality:"Netherlands",  apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.0 }
        ]
      },
      {
        team: "Juventus",
        players: [
          { id:53, name:"Gianluigi Buffon",          pos:"GK",  nationality:"Italy",        apps:9,  goals:0, assists:0, cs:5,  saves:38, tackles:0,  passes:520,  rating:7.5 },
          { id:54, name:"Jonathan Zebina",           pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:32, passes:480,  rating:6.8 },
          { id:55, name:"Lilian Thuram",             pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:580,  rating:7.1 },
          { id:56, name:"Fabio Cannavaro",           pos:"CB", nationality:"Italy",        apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:620,  rating:7.6 },
          { id:57, name:"Gianluca Zambrotta",        pos:"CB", nationality:"Italy",        apps:9,  goals:1, assists:2, cs:4,  saves:0,  tackles:36, passes:620,  rating:7.4 },
          { id:58, name:"Emerson",                   pos:"MID", nationality:"Brazil",       apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:50, passes:780,  rating:7.3 },
          { id:59, name:"Pavel Nedvěd",              pos:"MID", nationality:"Czech Republic",apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:36, passes:840,  rating:8.0 },
          { id:60, name:"Mauro Camoranesi",          pos:"MID", nationality:"Italy",        apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:38, passes:640,  rating:7.4 },
          { id:61, name:"Zlatan Ibrahimović",        pos:"ST", nationality:"Sweden",       apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:12, passes:420,  rating:8.1 },
          { id:62, name:"Alessandro Del Piero",      pos:"ST", nationality:"Italy",        apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:10, passes:380,  rating:7.9 },
          { id:63, name:"David Trezeguet",           pos:"ST", nationality:"France",       apps:8,  goals:5, assists:1, cs:0,  saves:0,  tackles:6,  passes:240,  rating:7.7 },
          { id:64, name:"Marcelo Zalayeta",          pos:"ST", nationality:"Uruguay",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:6.9 },
          { id:65, name:"Patrick Vieira",            pos:"MID", nationality:"France",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:660,  rating:7.3 }
        ]
      },
      {
        team: "Monaco",
        players: [
          { id:1665, name:"Flavio Roma",              pos:"GK",  nationality:"Italy",       apps:8,  goals:0, assists:0, cs:3,  saves:34, tackles:0,  passes:440,  rating:7.0 },
          { id:1666, name:"Hugo Ibarra",              pos:"RB", nationality:"Argentina",   apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:28, passes:420,  rating:6.9 },
          { id:1667, name:"Julien Rodriguez",         pos:"CB", nationality:"France",      apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:7.1 },
          { id:1668, name:"Gaël Givet",               pos:"CB", nationality:"France",      apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:32, passes:440,  rating:7.0 },
          { id:1669, name:"Patrice Evra",             pos:"LB", nationality:"France",      apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:460,  rating:7.3 },
          { id:1670, name:"Edouard Cissé",            pos:"MID", nationality:"France",      apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:36, passes:560,  rating:7.0 },
          { id:1671, name:"Andreas Zikos",            pos:"MID", nationality:"Greece",      apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:40, passes:520,  rating:7.0 },
          { id:1672, name:"Jaroslav Plašil",          pos:"MID", nationality:"Czech Republic",apps:7, goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:540,  rating:7.1 },
          { id:1673, name:"Jérôme Rothen",            pos:"ST", nationality:"France",      apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.4 },
          { id:1674, name:"Fernando Morientes",       pos:"ST", nationality:"Spain",       apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.8 },
          { id:1675, name:"Dado Pršo",               pos:"ST", nationality:"Croatia",     apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:1676, name:"Shabani Nonda",            pos:"ST", nationality:"DR Congo",    apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.2 },
          { id:1677, name:"Emmanuel Adebayor",        pos:"ST", nationality:"Togo",        apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.0 }
        ]
      },
      {
        team: "CSKA Moscow",
        players: [
          { id:1678, name:"Igor Akinfeev",            pos:"GK",  nationality:"Russia",      apps:6,  goals:0, assists:0, cs:2,  saves:28, tackles:0,  passes:320,  rating:7.0 },
          { id:1679, name:"Aleksei Berezutsky",       pos:"CB", nationality:"Russia",      apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:380,  rating:7.0 },
          { id:1680, name:"Vasili Berezutsky",        pos:"CB", nationality:"Russia",      apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:380,  rating:7.0 },
          { id:1681, name:"Sergei Ignashevich",       pos:"CB", nationality:"Russia",      apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:400,  rating:7.2 },
          { id:1682, name:"Yuri Zhirkov",             pos:"CB", nationality:"Russia",      apps:6,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:360,  rating:7.1 },
          { id:1683, name:"Elvir Rahimić",            pos:"MID", nationality:"Bosnia",      apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:38, passes:440,  rating:7.1 },
          { id:1684, name:"Sergei Semak",             pos:"MID", nationality:"Russia",      apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:30, passes:460,  rating:7.2 },
          { id:1685, name:"Daniel Carvalho",          pos:"MID", nationality:"Brazil",      apps:5,  goals:1, assists:2, cs:0,  saves:0,  tackles:22, passes:400,  rating:7.3 },
          { id:1686, name:"Evgeni Aldonin",           pos:"MID", nationality:"Russia",      apps:5,  goals:0, assists:1, cs:0,  saves:0,  tackles:34, passes:380,  rating:7.0 },
          { id:1687, name:"Vágner Love",              pos:"ST", nationality:"Brazil",      apps:5,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.4 },
          { id:1688, name:"Ramón",                    pos:"ST", nationality:"Brazil",      apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:7.1 },
          { id:1689, name:"Mba Zé Calmon",            pos:"ST", nationality:"France",      apps:4,  goals:1, assists:1, cs:0,  saves:0,  tackles:6,  passes:140,  rating:6.9 },
          { id:1690, name:"Deivid",                   pos:"ST", nationality:"Brazil",      apps:4,  goals:1, assists:0, cs:0,  saves:0,  tackles:4,  passes:120,  rating:6.8 }
        ]
      }
    ]
  },
  {
    season: "2005-06",
    teams: [
      {
        team: "Barcelona",
        players: [
          { id:66, name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:13, goals:0, assists:0, cs:7,  saves:44, tackles:0,  passes:620,  rating:7.5 },
          { id:67, name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:13, goals:0, assists:0, cs:7,  saves:0,  tackles:52, passes:800,  rating:7.9 },
          { id:68, name:"Rafael Márquez",            pos:"CB", nationality:"Mexico",       apps:12, goals:1, assists:1, cs:6,  saves:0,  tackles:44, passes:740,  rating:7.5 },
          { id:69, name:"Giovanni van Bronckhorst",  pos:"CB", nationality:"Netherlands",  apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:34, passes:640,  rating:7.2 },
          { id:70, name:"Sylvinho",                  pos:"CB", nationality:"Brazil",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:30, passes:520,  rating:7.0 },
          { id:71, name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:13, goals:3, assists:7, cs:0,  saves:0,  tackles:38, passes:1560, rating:8.7 },
          { id:72, name:"Deco",                      pos:"MID", nationality:"Portugal",     apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:34, passes:1160, rating:8.2 },
          { id:73, name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:11, goals:1, assists:4, cs:0,  saves:0,  tackles:28, passes:1020, rating:8.0 },
          { id:74, name:"Edmílson",                  pos:"MID", nationality:"Brazil",       apps:10, goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:760,  rating:7.2 },
          { id:75, name:"Ronaldinho",                pos:"ST", nationality:"Brazil",       apps:13, goals:7, assists:8, cs:0,  saves:0,  tackles:18, passes:920,  rating:9.2 },
          { id:76, name:"Samuel Eto'o",              pos:"ST", nationality:"Cameroon",     apps:12, goals:8, assists:2, cs:0,  saves:0,  tackles:12, passes:400,  rating:8.6 },
          { id:77, name:"Ludovic Giuly",             pos:"RW", nationality:"France",       apps:11, goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.6 },
          { id:78, name:"Henrik Larsson",            pos:"ST", nationality:"Sweden",       apps:7,  goals:3, assists:3, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:79, name:"Jens Lehmann",              pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:5,  saves:46, tackles:0,  passes:580,  rating:7.5 },
          { id:80, name:"Sol Campbell",              pos:"CB", nationality:"England",      apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:40, passes:640,  rating:7.3 },
          { id:81, name:"Philippe Senderos",         pos:"CB", nationality:"Switzerland",  apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:560,  rating:6.9 },
          { id:82, name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:12, goals:0, assists:2, cs:5,  saves:0,  tackles:38, passes:660,  rating:7.5 },
          { id:83, name:"Emmanuel Eboué",            pos:"CB", nationality:"Ivory Coast",  apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:480,  rating:6.9 },
          { id:84, name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:6, cs:0,  saves:0,  tackles:30, passes:1180, rating:8.0 },
          { id:85, name:"Gilberto Silva",            pos:"MID", nationality:"Brazil",       apps:12, goals:1, assists:1, cs:0,  saves:0,  tackles:56, passes:840,  rating:7.3 },
          { id:86, name:"Mathieu Flamini",           pos:"MID", nationality:"France",       apps:9,  goals:1, assists:0, cs:0,  saves:0,  tackles:46, passes:600,  rating:7.0 },
          { id:87, name:"Thierry Henry",             pos:"ST", nationality:"France",       apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:14, passes:640,  rating:8.8 },
          { id:88, name:"Robert Pires",              pos:"ST", nationality:"France",       apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:480,  rating:7.7 },
          { id:89, name:"José Antonio Reyes",        pos:"ST", nationality:"Spain",        apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:16, passes:340,  rating:7.1 },
          { id:90, name:"Robin van Persie",          pos:"ST", nationality:"Netherlands",  apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:91, name:"Fredrik Ljungberg",         pos:"MID", nationality:"Sweden",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:22, passes:420,  rating:7.1 }
        ]
      },
      {
        team: "Lyon",
        players: [
          { id:92, name:"Grégory Coupet",            pos:"GK",  nationality:"France",       apps:12, goals:0, assists:0, cs:6,  saves:48, tackles:0,  passes:580,  rating:7.4 },
          { id:93, name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:12, goals:0, assists:1, cs:6,  saves:0,  tackles:38, passes:620,  rating:7.4 },
          { id:94, name:"Cris",                      pos:"CB", nationality:"Brazil",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:700,  rating:7.5 },
          { id:95, name:"Claudio Caçapa",            pos:"CB", nationality:"Brazil",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:580,  rating:7.0 },
          { id:96, name:"Patrick Müller",            pos:"CB", nationality:"Switzerland",  apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:520,  rating:6.9 },
          { id:97, name:"Juninho Pernambucano",      pos:"MID", nationality:"Brazil",       apps:12, goals:5, assists:6, cs:0,  saves:0,  tackles:32, passes:1020, rating:8.2 },
          { id:98, name:"Mahamadou Diarra",          pos:"MID", nationality:"Mali",         apps:11, goals:1, assists:1, cs:0,  saves:0,  tackles:60, passes:880,  rating:7.4 },
          { id:99, name:"Sébastien Squillaci",       pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:480,  rating:6.8 },
          { id:100,name:"Sylvain Wiltord",           pos:"ST", nationality:"France",       apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.3 },
          { id:101,name:"Florent Malouda",           pos:"ST", nationality:"France",       apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:18, passes:540,  rating:7.6 },
          { id:102,name:"John Carew",                pos:"ST", nationality:"Norway",       apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.5 },
          { id:103,name:"Sidney Govou",              pos:"ST", nationality:"France",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.3 },
          { id:104,name:"Michael Essien",            pos:"MID", nationality:"Ghana",        apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:42, passes:480,  rating:7.2 }
        ]
      },
      {
        team: "Villarreal",
        players: [
          { id:105,name:"Mariano Barbosa",           pos:"GK",  nationality:"Argentina",    apps:11, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:480,  rating:7.0 },
          { id:106,name:"Quique Álvarez",            pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:38, passes:540,  rating:6.9 },
          { id:107,name:"Marcos Senna",              pos:"MID", nationality:"Spain",        apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:56, passes:920,  rating:7.5 },
          { id:108,name:"Juan Román Riquelme",       pos:"MID", nationality:"Argentina",    apps:11, goals:4, assists:7, cs:0,  saves:0,  tackles:22, passes:1120, rating:8.4 },
          { id:109,name:"Diego Forlán",              pos:"ST", nationality:"Uruguay",      apps:11, goals:8, assists:3, cs:0,  saves:0,  tackles:10, passes:360,  rating:8.3 },
          { id:110,name:"José Mari",                 pos:"ST", nationality:"Spain",        apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.1 },
          { id:111,name:"Rodolfo Arruabarrena",      pos:"CB", nationality:"Argentina",    apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:500,  rating:6.9 },
          { id:112,name:"Gonzalo Rodríguez",         pos:"CB", nationality:"Argentina",    apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:40, passes:560,  rating:7.1 },
          { id:113,name:"Santi Cazorla",             pos:"MID", nationality:"Spain",        apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:26, passes:680,  rating:7.5 },
          { id:114,name:"Sonny Anderson",            pos:"ST", nationality:"Brazil",       apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 },
          { id:115,name:"Alessio Tacchinardi",       pos:"MID", nationality:"Italy",        apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:660,  rating:7.0 },
          { id:116,name:"Jorge López",               pos:"CB", nationality:"Spain",        apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:28, passes:380,  rating:6.7 },
          { id:117,name:"Martín Palermo",            pos:"ST", nationality:"Argentina",    apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:6.9 }
        ]
      },
      {
        team: "Juventus",
        players: [
          { id:118,name:"Gianluigi Buffon",          pos:"GK",  nationality:"Italy",        apps:9,  goals:0, assists:0, cs:5,  saves:36, tackles:0,  passes:500,  rating:7.6 },
          { id:119,name:"Fabio Cannavaro",           pos:"CB", nationality:"Italy",        apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:620,  rating:7.7 },
          { id:120,name:"Lilian Thuram",             pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:580,  rating:7.2 },
          { id:121,name:"Gianluca Zambrotta",        pos:"CB", nationality:"Italy",        apps:9,  goals:1, assists:1, cs:4,  saves:0,  tackles:36, passes:620,  rating:7.4 },
          { id:122,name:"Nicola Legrottaglie",       pos:"CB", nationality:"Italy",        apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:7.0 },
          { id:123,name:"Pavel Nedvěd",              pos:"MID", nationality:"Czech Republic",apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:34, passes:800,  rating:7.9 },
          { id:124,name:"Emerson",                   pos:"MID", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:48, passes:760,  rating:7.3 },
          { id:125,name:"Mauro Camoranesi",          pos:"MID", nationality:"Italy",        apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:580,  rating:7.3 },
          { id:126,name:"Zlatan Ibrahimović",        pos:"ST", nationality:"Sweden",       apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:12, passes:420,  rating:8.2 },
          { id:127,name:"Alessandro Del Piero",      pos:"ST", nationality:"Italy",        apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:10, passes:360,  rating:7.9 },
          { id:128,name:"David Trezeguet",           pos:"ST", nationality:"France",       apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.6 },
          { id:129,name:"Patrick Vieira",            pos:"MID", nationality:"France",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:640,  rating:7.4 },
          { id:130,name:"Adrian Mutu",               pos:"ST", nationality:"Romania",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.0 }
        ]
      },
      {
        team: "Werder Bremen",
        players: [
          { id:1691, name:"Andreas Reinke",           pos:"GK",  nationality:"Germany",     apps:8,  goals:0, assists:0, cs:3,  saves:36, tackles:0,  passes:480,  rating:7.0 },
          { id:1692, name:"Frank Baumann",            pos:"CB", nationality:"Germany",     apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:560,  rating:7.2 },
          { id:1693, name:"Per Mertesacker",          pos:"CB", nationality:"Germany",     apps:8,  goals:1, assists:0, cs:3,  saves:0,  tackles:40, passes:560,  rating:7.3 },
          { id:1694, name:"Naldo",                    pos:"CB", nationality:"Brazil",      apps:7,  goals:1, assists:0, cs:3,  saves:0,  tackles:38, passes:520,  rating:7.2 },
          { id:1695, name:"Petri Pasanen",            pos:"CB", nationality:"Finland",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:440,  rating:7.0 },
          { id:1696, name:"Torsten Frings",           pos:"MID", nationality:"Germany",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:46, passes:740,  rating:7.7 },
          { id:1697, name:"Johan Micoud",             pos:"MID", nationality:"France",      apps:7,  goals:2, assists:4, cs:0,  saves:0,  tackles:24, passes:680,  rating:7.7 },
          { id:1698, name:"Tim Borowski",             pos:"MID", nationality:"Germany",     apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.2 },
          { id:1699, name:"Aaron Hunt",               pos:"ST", nationality:"Germany",     apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:380,  rating:7.2 },
          { id:1700, name:"Miroslav Klose",           pos:"ST", nationality:"Germany",     apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.8 },
          { id:1701, name:"Ivan Klasnić",             pos:"ST", nationality:"Croatia",     apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.4 },
          { id:1702, name:"Boubacar Sanogo",          pos:"ST", nationality:"France",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:7.0 },
          { id:1703, name:"Thomas Öztürk",            pos:"MID", nationality:"Germany",     apps:5,  goals:0, assists:1, cs:0,  saves:0,  tackles:20, passes:320,  rating:6.8 }
        ]
      },
      {
        team: "Inter Milan",
        players: [
          { id:1704, name:"Julio Cesar",              pos:"GK",  nationality:"Brazil",      apps:6,  goals:0, assists:0, cs:1,  saves:30, tackles:0,  passes:380,  rating:6.9 },
          { id:1705, name:"Javier Zanetti",           pos:"CB", nationality:"Argentina",   apps:6,  goals:0, assists:1, cs:1,  saves:0,  tackles:30, passes:480,  rating:7.3 },
          { id:1706, name:"Marco Materazzi",          pos:"CB", nationality:"Italy",       apps:6,  goals:1, assists:0, cs:1,  saves:0,  tackles:34, passes:380,  rating:7.1 },
          { id:1707, name:"Ivan Córdoba",             pos:"CB", nationality:"Colombia",    apps:6,  goals:0, assists:0, cs:1,  saves:0,  tackles:32, passes:360,  rating:7.0 },
          { id:1708, name:"Nicolás Burdisso",         pos:"CB", nationality:"Argentina",   apps:5,  goals:0, assists:0, cs:1,  saves:0,  tackles:28, passes:320,  rating:6.9 },
          { id:1709, name:"Patrick Vieira",           pos:"MID", nationality:"France",      apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:40, passes:480,  rating:7.3 },
          { id:1710, name:"Dejan Stanković",          pos:"MID", nationality:"Serbia",      apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:30, passes:440,  rating:7.3 },
          { id:1711, name:"Juan Sebastián Verón",     pos:"MID", nationality:"Argentina",   apps:5,  goals:1, assists:2, cs:0,  saves:0,  tackles:22, passes:420,  rating:7.1 },
          { id:1712, name:"Adriano",                  pos:"ST", nationality:"Brazil",      apps:6,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.9 },
          { id:1713, name:"Obafemi Martins",          pos:"ST", nationality:"Nigeria",     apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:7.1 },
          { id:1714, name:"Álvaro Recoba",            pos:"ST", nationality:"Uruguay",     apps:5,  goals:2, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 },
          { id:1715, name:"Julio Cruz",              pos:"ST", nationality:"Argentina",   apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:6.9 },
          { id:1716, name:"Luis Figo",               pos:"ST", nationality:"Portugal",    apps:5,  goals:1, assists:2, cs:0,  saves:0,  tackles:12, passes:300,  rating:7.1 }
        ]
      }
    ]
  },
  {
    season: "2006-07",
    teams: [
      {
        team: "AC Milan",
        players: [
          { id:131,name:"Dida",                      pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:50, tackles:0,  passes:640,  rating:7.7 },
          { id:132,name:"Cafu",                      pos:"CB", nationality:"Brazil",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:38, passes:620,  rating:7.3 },
          { id:133,name:"Alessandro Nesta",          pos:"CB", nationality:"Italy",        apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:46, passes:780,  rating:7.9 },
          { id:134,name:"Paolo Maldini",             pos:"CB", nationality:"Italy",        apps:12, goals:0, assists:0, cs:7,  saves:0,  tackles:44, passes:820,  rating:7.9 },
          { id:135,name:"Marek Jankulovski",         pos:"CB", nationality:"Czech Republic",apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:32, passes:580,  rating:7.1 },
          { id:136,name:"Andrea Pirlo",              pos:"MID", nationality:"Italy",        apps:13, goals:3, assists:7, cs:0,  saves:0,  tackles:36, passes:1480, rating:8.7 },
          { id:137,name:"Clarence Seedorf",          pos:"MID", nationality:"Netherlands",  apps:12, goals:3, assists:4, cs:0,  saves:0,  tackles:38, passes:1040, rating:7.9 },
          { id:138,name:"Gennaro Gattuso",           pos:"MID", nationality:"Italy",        apps:12, goals:0, assists:1, cs:0,  saves:0,  tackles:66, passes:860,  rating:7.5 },
          { id:139,name:"Kaká",                      pos:"MID", nationality:"Brazil",       apps:13, goals:10,assists:7, cs:0,  saves:0,  tackles:20, passes:1160, rating:9.2 },
          { id:140,name:"Filippo Inzaghi",           pos:"ST", nationality:"Italy",        apps:11, goals:6, assists:1, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.9 },
          { id:141,name:"Alberto Gilardino",         pos:"ST", nationality:"Italy",        apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:300,  rating:7.5 },
          { id:142,name:"Andriy Shevchenko",         pos:"ST", nationality:"Ukraine",      apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.0 },
          { id:143,name:"Massimo Oddo",              pos:"CB", nationality:"Italy",        apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:7.0 }
        ]
      },
      {
        team: "Liverpool",
        players: [
          { id:144,name:"Pepe Reina",                pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:7,  saves:46, tackles:0,  passes:620,  rating:7.6 },
          { id:145,name:"Jamie Carragher",           pos:"CB", nationality:"England",      apps:12, goals:0, assists:0, cs:6,  saves:0,  tackles:50, passes:800,  rating:7.7 },
          { id:146,name:"Sami Hyypiä",               pos:"CB", nationality:"Finland",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:40, passes:700,  rating:7.2 },
          { id:147,name:"John Arne Riise",           pos:"CB", nationality:"Norway",       apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:28, passes:540,  rating:7.1 },
          { id:148,name:"Steve Finnan",              pos:"CB", nationality:"Ireland",      apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:520,  rating:7.0 },
          { id:149,name:"Steven Gerrard",            pos:"MID", nationality:"England",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:52, passes:1080, rating:8.5 },
          { id:150,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:42, passes:1200, rating:7.9 },
          { id:151,name:"Jermaine Pennant",          pos:"MID", nationality:"England",      apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:24, passes:600,  rating:7.2 },
          { id:152,name:"Luis García",               pos:"ST", nationality:"Spain",        apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:440,  rating:7.2 },
          { id:153,name:"Peter Crouch",              pos:"ST", nationality:"England",      apps:11, goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.4 },
          { id:154,name:"Dirk Kuyt",                 pos:"ST", nationality:"Netherlands",  apps:12, goals:4, assists:3, cs:0,  saves:0,  tackles:18, passes:400,  rating:7.5 },
          { id:155,name:"Robbie Fowler",             pos:"ST", nationality:"England",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.0 },
          { id:156,name:"Bolo Zenden",               pos:"MID", nationality:"Netherlands",  apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:20, passes:420,  rating:7.0 }
        ]
      },
      {
        team: "Chelsea",
        players: [
          { id:157,name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:11, goals:0, assists:0, cs:6,  saves:46, tackles:0,  passes:600,  rating:7.6 },
          { id:158,name:"John Terry",                pos:"CB", nationality:"England",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:780,  rating:7.9 },
          { id:159,name:"Ricardo Carvalho",          pos:"CB", nationality:"Portugal",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:700,  rating:7.6 },
          { id:160,name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:38, passes:660,  rating:7.6 },
          { id:161,name:"Paulo Ferreira",            pos:"CB", nationality:"Portugal",     apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:162,name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:40, passes:1020, rating:8.2 },
          { id:163,name:"Claude Makélélé",           pos:"MID", nationality:"France",       apps:10, goals:0, assists:1, cs:0,  saves:0,  tackles:62, passes:940,  rating:7.6 },
          { id:164,name:"Michael Ballack",           pos:"MID", nationality:"Germany",      apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:44, passes:900,  rating:7.8 },
          { id:165,name:"Didier Drogba",             pos:"ST", nationality:"Ivory Coast",  apps:11, goals:7, assists:3, cs:0,  saves:0,  tackles:14, passes:400,  rating:8.4 },
          { id:166,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.9 },
          { id:167,name:"Salomon Kalou",             pos:"ST", nationality:"Ivory Coast",  apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:168,name:"Andriy Shevchenko",         pos:"ST", nationality:"Ukraine",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:6.8 },
          { id:169,name:"Joe Cole",                  pos:"ST", nationality:"England",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:400,  rating:7.2 }
        ]
      },
      {
        team: "Manchester United",
        players: [
          { id:170,name:"Edwin van der Sar",         pos:"GK",  nationality:"Netherlands",  apps:11, goals:0, assists:0, cs:6,  saves:42, tackles:0,  passes:640,  rating:7.7 },
          { id:171,name:"Gary Neville",              pos:"CB", nationality:"England",      apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:32, passes:540,  rating:7.0 },
          { id:172,name:"Rio Ferdinand",             pos:"CB", nationality:"England",      apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:780,  rating:7.8 },
          { id:173,name:"Nemanja Vidić",             pos:"CB", nationality:"Serbia",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:720,  rating:7.9 },
          { id:174,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:10, goals:0, assists:2, cs:5,  saves:0,  tackles:36, passes:620,  rating:7.5 },
          { id:175,name:"Paul Scholes",              pos:"MID", nationality:"England",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:980,  rating:7.7 },
          { id:176,name:"Michael Carrick",           pos:"MID", nationality:"England",      apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:40, passes:1100, rating:7.5 },
          { id:177,name:"Ryan Giggs",                pos:"MID", nationality:"Wales",        apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:20, passes:740,  rating:7.7 },
          { id:178,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:11, goals:8, assists:4, cs:0,  saves:0,  tackles:20, passes:660,  rating:9.0 },
          { id:179,name:"Wayne Rooney",              pos:"ST", nationality:"England",      apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:18, passes:480,  rating:8.4 },
          { id:180,name:"Ole Gunnar Solskjaer",      pos:"ST", nationality:"Norway",       apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.1 },
          { id:181,name:"Louis Saha",                pos:"ST", nationality:"France",       apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.3 },
          { id:182,name:"Owen Hargreaves",           pos:"MID", nationality:"England",      apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.2 }
        ]
      },
      {
        team: "Valencia",
        players: [
          { id:183,name:"Santiago Cañizares",        pos:"GK",  nationality:"Spain",        apps:10, goals:0, assists:0, cs:4,  saves:40, tackles:0,  passes:500,  rating:7.0 },
          { id:184,name:"Miguel Ángel",              pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:560,  rating:7.0 },
          { id:185,name:"Carlos Marchena",           pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:620,  rating:7.1 },
          { id:186,name:"David Navarro",             pos:"CB", nationality:"Spain",        apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:540,  rating:6.9 },
          { id:187,name:"Emiliano Moretti",          pos:"CB", nationality:"Italy",        apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:500,  rating:6.9 },
          { id:188,name:"David Albelda",             pos:"MID", nationality:"Spain",        apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:58, passes:900,  rating:7.4 },
          { id:189,name:"Rubén Baraja",              pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:2, cs:0,  saves:0,  tackles:44, passes:760,  rating:7.3 },
          { id:190,name:"Joaquín",                   pos:"ST", nationality:"Spain",        apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:16, passes:540,  rating:7.5 },
          { id:191,name:"David Villa",               pos:"ST", nationality:"Spain",        apps:10, goals:7, assists:2, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.2 },
          { id:192,name:"Fernando Morientes",        pos:"ST", nationality:"Spain",        apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.4 },
          { id:193,name:"Angulo",                    pos:"ST", nationality:"Spain",        apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.0 },
          { id:194,name:"Marco Caneira",             pos:"CB", nationality:"Portugal",     apps:6,  goals:0, assists:0, cs:3,  saves:0,  tackles:26, passes:360,  rating:6.7 },
          { id:195,name:"Edu",                       pos:"MID", nationality:"Brazil",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:540,  rating:7.1 }
        ]
      },
      {
        team: "Celtic",
        players: [
          { id:1717, name:"Artur Boruc",              pos:"GK",  nationality:"Poland",      apps:8,  goals:0, assists:0, cs:3,  saves:38, tackles:0,  passes:420,  rating:7.3 },
          { id:1718, name:"Stephen McManus",          pos:"CB", nationality:"Scotland",    apps:8,  goals:1, assists:0, cs:3,  saves:0,  tackles:38, passes:440,  rating:7.1 },
          { id:1719, name:"Bobo Baldé",               pos:"CB", nationality:"Guinea",      apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:40, passes:380,  rating:7.0 },
          { id:1720, name:"Lee Naylor",               pos:"CB", nationality:"England",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:380,  rating:6.9 },
          { id:1721, name:"Paul Telfer",              pos:"CB", nationality:"Scotland",    apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:26, passes:320,  rating:6.8 },
          { id:1722, name:"Neil Lennon",              pos:"MID", nationality:"N. Ireland",  apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:40, passes:480,  rating:7.0 },
          { id:1723, name:"Shunsuke Nakamura",        pos:"MID", nationality:"Japan",       apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:20, passes:580,  rating:7.8 },
          { id:1724, name:"Stilian Petrov",           pos:"MID", nationality:"Bulgaria",    apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:34, passes:520,  rating:7.3 },
          { id:1725, name:"Paul Hartley",             pos:"MID", nationality:"Scotland",    apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:440,  rating:7.0 },
          { id:1726, name:"Aiden McGeady",            pos:"ST", nationality:"Ireland",     apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.2 },
          { id:1727, name:"Jan Vennegoor",            pos:"ST", nationality:"Netherlands", apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.3 },
          { id:1728, name:"Shaun Maloney",            pos:"ST", nationality:"Scotland",    apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.1 },
          { id:1729, name:"Kenny Miller",             pos:"ST", nationality:"Scotland",    apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.0 }
        ]
      },
      {
        team: "Inter Milan",
        players: [
          { id:1730, name:"Julio Cesar",              pos:"GK",  nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:3,  saves:36, tackles:0,  passes:440,  rating:7.2 },
          { id:1731, name:"Javier Zanetti",           pos:"CB", nationality:"Argentina",   apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:34, passes:520,  rating:7.5 },
          { id:1732, name:"Walter Samuel",            pos:"CB", nationality:"Argentina",   apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:480,  rating:7.3 },
          { id:1733, name:"Marco Materazzi",          pos:"CB", nationality:"Italy",       apps:7,  goals:1, assists:0, cs:3,  saves:0,  tackles:36, passes:400,  rating:7.0 },
          { id:1734, name:"Maxwell",                  pos:"CB", nationality:"Brazil",      apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:7.1 },
          { id:1735, name:"Esteban Cambiasso",        pos:"MID", nationality:"Argentina",   apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:760,  rating:7.7 },
          { id:1736, name:"Dejan Stanković",          pos:"MID", nationality:"Serbia",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.5 },
          { id:1737, name:"Patrick Vieira",           pos:"MID", nationality:"France",      apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:600,  rating:7.4 },
          { id:1738, name:"Luis Figo",               pos:"MID", nationality:"Portugal",    apps:7,  goals:1, assists:3, cs:0,  saves:0,  tackles:22, passes:520,  rating:7.3 },
          { id:1739, name:"Zlatan Ibrahimović",       pos:"ST", nationality:"Sweden",      apps:8,  goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:380,  rating:8.2 },
          { id:1740, name:"Hernán Crespo",            pos:"ST", nationality:"Argentina",   apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.4 },
          { id:1741, name:"Obafemi Martins",          pos:"ST", nationality:"Nigeria",     apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:7.0 },
          { id:1742, name:"Julio Cruz",              pos:"ST", nationality:"Argentina",   apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:6,  passes:140,  rating:6.8 }
        ]
      }
    ]
  },
  {
    season: "2007-08",
    teams: [
      {
        team: "Manchester United",
        players: [
          { id:196,name:"Edwin van der Sar",         pos:"GK",  nationality:"Netherlands",  apps:13, goals:0, assists:0, cs:8,  saves:44, tackles:0,  passes:680,  rating:8.0 },
          { id:197,name:"Rio Ferdinand",             pos:"CB", nationality:"England",      apps:12, goals:0, assists:0, cs:7,  saves:0,  tackles:46, passes:820,  rating:8.0 },
          { id:198,name:"Nemanja Vidić",             pos:"CB", nationality:"Serbia",       apps:12, goals:2, assists:0, cs:7,  saves:0,  tackles:56, passes:780,  rating:8.2 },
          { id:199,name:"Wes Brown",                 pos:"CB", nationality:"England",      apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:34, passes:580,  rating:7.2 },
          { id:200,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:38, passes:660,  rating:7.6 },
          { id:201,name:"Paul Scholes",              pos:"MID", nationality:"England",      apps:11, goals:3, assists:3, cs:0,  saves:0,  tackles:36, passes:1020, rating:7.9 },
          { id:202,name:"Michael Carrick",           pos:"MID", nationality:"England",      apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:1160, rating:7.7 },
          { id:203,name:"Owen Hargreaves",           pos:"MID", nationality:"England",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:720,  rating:7.5 },
          { id:204,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:22, passes:680,  rating:9.1 },
          { id:205,name:"Wayne Rooney",              pos:"ST", nationality:"England",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:18, passes:500,  rating:8.5 },
          { id:206,name:"Carlos Tevez",              pos:"ST", nationality:"Argentina",    apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:18, passes:400,  rating:8.0 },
          { id:207,name:"Ryan Giggs",                pos:"MID", nationality:"Wales",        apps:8,  goals:2, assists:4, cs:0,  saves:0,  tackles:18, passes:700,  rating:7.8 },
          { id:208,name:"Nani",                      pos:"ST", nationality:"Portugal",     apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.2 }
        ]
      },
      {
        team: "Chelsea",
        players: [
          { id:209,name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:13, goals:0, assists:0, cs:7,  saves:56, tackles:0,  passes:640,  rating:7.8 },
          { id:210,name:"John Terry",                pos:"CB", nationality:"England",      apps:13, goals:2, assists:0, cs:7,  saves:0,  tackles:52, passes:800,  rating:8.0 },
          { id:211,name:"Alex",                      pos:"CB", nationality:"Brazil",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:740,  rating:7.6 },
          { id:212,name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:40, passes:680,  rating:7.7 },
          { id:213,name:"Wayne Bridge",              pos:"CB", nationality:"England",      apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:28, passes:480,  rating:7.0 },
          { id:214,name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:13, goals:6, assists:4, cs:0,  saves:0,  tackles:42, passes:1060, rating:8.3 },
          { id:215,name:"Michael Ballack",           pos:"MID", nationality:"Germany",      apps:12, goals:4, assists:3, cs:0,  saves:0,  tackles:44, passes:920,  rating:7.9 },
          { id:216,name:"Michael Essien",            pos:"MID", nationality:"Ghana",        apps:11, goals:2, assists:2, cs:0,  saves:0,  tackles:54, passes:840,  rating:7.7 },
          { id:217,name:"Florent Malouda",           pos:"ST", nationality:"France",       apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:16, passes:540,  rating:7.5 },
          { id:218,name:"Didier Drogba",             pos:"ST", nationality:"Ivory Coast",  apps:13, goals:8, assists:3, cs:0,  saves:0,  tackles:14, passes:400,  rating:8.6 },
          { id:219,name:"Nicolas Anelka",            pos:"ST", nationality:"France",       apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.8 },
          { id:220,name:"Salomon Kalou",             pos:"ST", nationality:"Ivory Coast",  apps:7,  goals:2, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.0 },
          { id:221,name:"Joe Cole",                  pos:"ST", nationality:"England",      apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.1 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:222,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:11, goals:0, assists:0, cs:5,  saves:40, tackles:0,  passes:620,  rating:7.4 },
          { id:223,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:780,  rating:7.8 },
          { id:224,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:6,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:560,  rating:7.2 },
          { id:225,name:"Gabriel Milito",            pos:"CB", nationality:"Argentina",    apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:560,  rating:7.0 },
          { id:226,name:"Sylvinho",                  pos:"CB", nationality:"Brazil",       apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:460,  rating:6.9 },
          { id:227,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:6, cs:0,  saves:0,  tackles:36, passes:1480, rating:8.6 },
          { id:228,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:5, cs:0,  saves:0,  tackles:28, passes:1120, rating:8.3 },
          { id:229,name:"Deco",                      pos:"MID", nationality:"Portugal",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:30, passes:960,  rating:7.9 },
          { id:230,name:"Ronaldinho",                pos:"ST", nationality:"Brazil",       apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:16, passes:780,  rating:8.2 },
          { id:231,name:"Samuel Eto'o",              pos:"ST", nationality:"Cameroon",     apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:10, passes:380,  rating:8.3 },
          { id:232,name:"Thierry Henry",             pos:"ST", nationality:"France",       apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:10, passes:440,  rating:7.8 },
          { id:233,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:9,  goals:6, assists:3, cs:0,  saves:0,  tackles:14, passes:620,  rating:8.8 },
          { id:234,name:"Yaya Touré",                pos:"MID", nationality:"Ivory Coast",  apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:760,  rating:7.4 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:235,name:"Manuel Almunia",            pos:"GK",  nationality:"Spain",        apps:10, goals:0, assists:0, cs:4,  saves:42, tackles:0,  passes:520,  rating:7.0 },
          { id:236,name:"Gaël Clichy",               pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:580,  rating:7.0 },
          { id:237,name:"William Gallas",            pos:"CB", nationality:"France",       apps:10, goals:1, assists:0, cs:4,  saves:0,  tackles:40, passes:640,  rating:7.3 },
          { id:238,name:"Kolo Touré",                pos:"CB", nationality:"Ivory Coast",  apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:620,  rating:7.2 },
          { id:239,name:"Bacary Sagna",              pos:"CB", nationality:"France",       apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:32, passes:540,  rating:7.2 },
          { id:240,name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:10, goals:3, assists:6, cs:0,  saves:0,  tackles:30, passes:1180, rating:8.2 },
          { id:241,name:"Gilberto Silva",            pos:"MID", nationality:"Brazil",       apps:9,  goals:0, assists:1, cs:0,  saves:0,  tackles:52, passes:820,  rating:7.2 },
          { id:242,name:"Mathieu Flamini",           pos:"MID", nationality:"France",       apps:9,  goals:2, assists:1, cs:0,  saves:0,  tackles:50, passes:680,  rating:7.3 },
          { id:243,name:"Thierry Henry",             pos:"ST", nationality:"France",       apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.6 },
          { id:244,name:"Robin van Persie",          pos:"ST", nationality:"Netherlands",  apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.9 },
          { id:245,name:"Emmanuel Adebayor",         pos:"ST", nationality:"Togo",         apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.8 },
          { id:246,name:"Hleb",                      pos:"MID", nationality:"Belarus",      apps:8,  goals:1, assists:3, cs:0,  saves:0,  tackles:20, passes:560,  rating:7.3 },
          { id:247,name:"Júlio Baptista",            pos:"ST", nationality:"Brazil",       apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.0 }
        ]
      },
      {
        team: "Roma",
        players: [
          { id:248,name:"Doni",                      pos:"GK",  nationality:"Brazil",       apps:9,  goals:0, assists:0, cs:4,  saves:38, tackles:0,  passes:480,  rating:7.1 },
          { id:249,name:"Christian Panucci",         pos:"CB", nationality:"Italy",        apps:8,  goals:1, assists:0, cs:4,  saves:0,  tackles:34, passes:520,  rating:7.1 },
          { id:250,name:"Philippe Mexès",            pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:600,  rating:7.2 },
          { id:251,name:"Marco Cassetti",            pos:"CB", nationality:"Italy",        apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:480,  rating:6.9 },
          { id:252,name:"Max Tonetto",               pos:"CB", nationality:"Italy",        apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:6.8 },
          { id:253,name:"Daniele De Rossi",          pos:"MID", nationality:"Italy",        apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:54, passes:880,  rating:7.8 },
          { id:254,name:"Rodrigo Taddei",            pos:"MID", nationality:"Brazil",       apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:30, passes:580,  rating:7.2 },
          { id:255,name:"Simone Perrotta",           pos:"MID", nationality:"Italy",        apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:40, passes:640,  rating:7.1 },
          { id:256,name:"Francesco Totti",           pos:"ST", nationality:"Italy",        apps:9,  goals:5, assists:5, cs:0,  saves:0,  tackles:12, passes:580,  rating:8.4 },
          { id:257,name:"Mirko Vučinić",             pos:"ST", nationality:"Montenegro",   apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.5 },
          { id:258,name:"Mancini",                   pos:"ST", nationality:"Brazil",       apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.2 },
          { id:259,name:"Alberto Aquilani",          pos:"MID", nationality:"Italy",        apps:7,  goals:1, assists:3, cs:0,  saves:0,  tackles:28, passes:560,  rating:7.4 },
          { id:260,name:"David Pizarro",             pos:"MID", nationality:"Chile",        apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:36, passes:520,  rating:7.0 }
        ]
      },
      {
        team: "Fenerbahçe",
        players: [
          { id:1743, name:"Volkan Demirel",           pos:"GK",  nationality:"Türkiye",     apps:12, goals:0, assists:0, cs:5,  saves:52, tackles:0,  passes:560,  rating:7.6 },
          { id:1744, name:"Roberto Carlos",           pos:"LB", nationality:"Brazil",      apps:12, goals:1, assists:2, cs:5,  saves:0,  tackles:36, passes:680,  rating:7.8 },
          { id:1745, name:"André Santos",             pos:"CB", nationality:"Brazil",      apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:42, passes:560,  rating:7.2 },
          { id:1746, name:"Ümit Özat",                pos:"CB", nationality:"Türkiye",     apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:480,  rating:7.0 },
          { id:1747, name:"Lugano",                   pos:"CB", nationality:"Uruguay",     apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:460,  rating:7.1 },
          { id:1748, name:"Emre Belözoğlu",           pos:"MID", nationality:"Türkiye",     apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.6 },
          { id:1749, name:"Mehmet Aurelio",           pos:"MID", nationality:"Brazil",      apps:11, goals:2, assists:3, cs:0,  saves:0,  tackles:32, passes:640,  rating:7.5 },
          { id:1750, name:"Stéphane Sessègnon",       pos:"MID", nationality:"Benin",       apps:10, goals:3, assists:2, cs:0,  saves:0,  tackles:24, passes:520,  rating:7.4 },
          { id:1751, name:"Selçuk Şahin",             pos:"MID", nationality:"Türkiye",     apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:40, passes:560,  rating:7.2 },
          { id:1752, name:"Alex de Souza",            pos:"ST", nationality:"Brazil",      apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.4 },
          { id:1753, name:"Deivid",                   pos:"ST", nationality:"Brazil",      apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.5 },
          { id:1754, name:"Kazım-Kazım",              pos:"ST", nationality:"Türkiye",     apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.2 },
          { id:1755, name:"Semih Şentürk",            pos:"ST", nationality:"Türkiye",     apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.1 }
        ]
      },
      {
        team: "Schalke 04",
        players: [
          { id:1756, name:"Manuel Neuer",             pos:"GK",  nationality:"Germany",     apps:8,  goals:0, assists:0, cs:3,  saves:38, tackles:0,  passes:520,  rating:7.4 },
          { id:1757, name:"Rafinha",                  pos:"RB", nationality:"Brazil",      apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:540,  rating:7.2 },
          { id:1758, name:"Marcelo Bordon",           pos:"CB", nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:480,  rating:7.0 },
          { id:1759, name:"Mladen Krstajić",          pos:"CB", nationality:"Serbia",      apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:440,  rating:7.0 },
          { id:1760, name:"Heiko Westermann",         pos:"CB", nationality:"Germany",     apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:420,  rating:6.9 },
          { id:1761, name:"Hamit Altıntop",           pos:"MID", nationality:"Türkiye",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:28, passes:560,  rating:7.5 },
          { id:1762, name:"Levan Kobiashvili",        pos:"MID", nationality:"Georgia",     apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:38, passes:500,  rating:7.1 },
          { id:1763, name:"Lincoln",                  pos:"MID", nationality:"Brazil",      apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:480,  rating:7.2 },
          { id:1764, name:"Gerald Asamoah",           pos:"ST", nationality:"Germany",     apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.0 },
          { id:1765, name:"Kevin Kuranyi",            pos:"ST", nationality:"Germany",     apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.7 },
          { id:1766, name:"Halil Altıntop",           pos:"ST", nationality:"Türkiye",     apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:1767, name:"Kevin McKenna",            pos:"CB", nationality:"Canada",      apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:24, passes:280,  rating:6.7 },
          { id:1768, name:"Sébastien Ernst",          pos:"MID", nationality:"Germany",     apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:22, passes:320,  rating:6.9 }
        ]
      }
    ]
  },
  {
    season: "2008-09",
    teams: [
      {
        team: "Barcelona",
        players: [
          { id:261,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:13, goals:0, assists:0, cs:8,  saves:46, tackles:0,  passes:660,  rating:7.7 },
          { id:262,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:12, goals:1, assists:0, cs:7,  saves:0,  tackles:50, passes:840,  rating:8.0 },
          { id:263,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:44, passes:780,  rating:7.7 },
          { id:264,name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:11, goals:0, assists:1, cs:6,  saves:0,  tackles:36, passes:660,  rating:7.4 },
          { id:265,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:13, goals:2, assists:5, cs:6,  saves:0,  tackles:44, passes:840,  rating:8.2 },
          { id:266,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:13, goals:3, assists:9, cs:0,  saves:0,  tackles:40, passes:1720, rating:9.1 },
          { id:267,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:12, goals:3, assists:7, cs:0,  saves:0,  tackles:30, passes:1300, rating:8.9 },
          { id:268,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:54, passes:1200, rating:7.8 },
          { id:269,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:13, goals:9, assists:6, cs:0,  saves:0,  tackles:16, passes:840,  rating:9.4 },
          { id:270,name:"Samuel Eto'o",              pos:"ST", nationality:"Cameroon",     apps:12, goals:8, assists:3, cs:0,  saves:0,  tackles:12, passes:420,  rating:8.6 },
          { id:271,name:"Thierry Henry",             pos:"ST", nationality:"France",       apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:10, passes:460,  rating:7.9 },
          { id:272,name:"Seydou Keita",              pos:"MID", nationality:"Mali",         apps:8,  goals:1, assists:3, cs:0,  saves:0,  tackles:28, passes:540,  rating:7.2 },
          { id:273,name:"Yaya Touré",                pos:"MID", nationality:"Ivory Coast",  apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:48, passes:800,  rating:7.5 }
        ]
      },
      {
        team: "Manchester United",
        players: [
          { id:274,name:"Edwin van der Sar",         pos:"GK",  nationality:"Netherlands",  apps:13, goals:0, assists:0, cs:8,  saves:44, tackles:0,  passes:680,  rating:7.9 },
          { id:275,name:"Rio Ferdinand",             pos:"CB", nationality:"England",      apps:12, goals:0, assists:0, cs:7,  saves:0,  tackles:46, passes:820,  rating:8.0 },
          { id:276,name:"Nemanja Vidić",             pos:"CB", nationality:"Serbia",       apps:12, goals:2, assists:0, cs:7,  saves:0,  tackles:56, passes:780,  rating:8.1 },
          { id:277,name:"John O'Shea",               pos:"CB", nationality:"Ireland",      apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:34, passes:580,  rating:7.0 },
          { id:278,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:38, passes:660,  rating:7.7 },
          { id:279,name:"Paul Scholes",              pos:"MID", nationality:"England",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:1000, rating:7.8 },
          { id:280,name:"Michael Carrick",           pos:"MID", nationality:"England",      apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:1160, rating:7.6 },
          { id:281,name:"Anderson",                  pos:"MID", nationality:"Brazil",       apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:42, passes:680,  rating:7.0 },
          { id:282,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:22, passes:740,  rating:9.2 },
          { id:283,name:"Wayne Rooney",              pos:"ST", nationality:"England",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:18, passes:500,  rating:8.6 },
          { id:284,name:"Carlos Tevez",              pos:"ST", nationality:"Argentina",    apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:18, passes:400,  rating:8.1 },
          { id:285,name:"Ryan Giggs",                pos:"MID", nationality:"Wales",        apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:18, passes:740,  rating:7.7 },
          { id:286,name:"Dimitar Berbatov",          pos:"ST", nationality:"Bulgaria",     apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:6,  passes:260,  rating:7.4 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:287,name:"Manuel Almunia",            pos:"GK",  nationality:"Spain",        apps:10, goals:0, assists:0, cs:4,  saves:40, tackles:0,  passes:520,  rating:7.0 },
          { id:288,name:"Gaël Clichy",               pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:580,  rating:7.1 },
          { id:289,name:"William Gallas",            pos:"CB", nationality:"France",       apps:9,  goals:1, assists:0, cs:4,  saves:0,  tackles:40, passes:640,  rating:7.3 },
          { id:290,name:"Kolo Touré",                pos:"CB", nationality:"Ivory Coast",  apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:600,  rating:7.2 },
          { id:291,name:"Bacary Sagna",              pos:"CB", nationality:"France",       apps:10, goals:1, assists:2, cs:4,  saves:0,  tackles:32, passes:560,  rating:7.3 },
          { id:292,name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:10, goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:1120, rating:8.1 },
          { id:293,name:"Denílson",                  pos:"MID", nationality:"Brazil",       apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:48, passes:820,  rating:7.1 },
          { id:294,name:"Samir Nasri",               pos:"MID", nationality:"France",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:26, passes:720,  rating:7.6 },
          { id:295,name:"Robin van Persie",          pos:"ST", nationality:"Netherlands",  apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.8 },
          { id:296,name:"Emmanuel Adebayor",         pos:"ST", nationality:"Togo",         apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.7 },
          { id:297,name:"Andrei Arshavin",           pos:"ST", nationality:"Russia",       apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.1 },
          { id:298,name:"Nicklas Bendtner",          pos:"ST", nationality:"Denmark",      apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.1 },
          { id:299,name:"Abou Diaby",                pos:"MID", nationality:"France",       apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:36, passes:480,  rating:7.0 }
        ]
      },
      {
        team: "Chelsea",
        players: [
          { id:300,name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:12, goals:0, assists:0, cs:6,  saves:50, tackles:0,  passes:620,  rating:7.7 },
          { id:301,name:"John Terry",                pos:"CB", nationality:"England",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:780,  rating:7.9 },
          { id:302,name:"Ricardo Carvalho",          pos:"CB", nationality:"Portugal",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:700,  rating:7.7 },
          { id:303,name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:38, passes:660,  rating:7.6 },
          { id:304,name:"José Bosingwa",             pos:"CB", nationality:"Portugal",     apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:305,name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:12, goals:5, assists:4, cs:0,  saves:0,  tackles:40, passes:1040, rating:8.2 },
          { id:306,name:"Michael Ballack",           pos:"MID", nationality:"Germany",      apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:42, passes:880,  rating:7.7 },
          { id:307,name:"Michael Essien",            pos:"MID", nationality:"Ghana",        apps:10, goals:2, assists:2, cs:0,  saves:0,  tackles:54, passes:820,  rating:7.6 },
          { id:308,name:"Didier Drogba",             pos:"ST", nationality:"Ivory Coast",  apps:12, goals:7, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:8.4 },
          { id:309,name:"Nicolas Anelka",            pos:"ST", nationality:"France",       apps:10, goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.6 },
          { id:310,name:"Florent Malouda",           pos:"ST", nationality:"France",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:480,  rating:7.4 },
          { id:311,name:"Joe Cole",                  pos:"ST", nationality:"England",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.2 },
          { id:312,name:"Deco",                      pos:"MID", nationality:"Portugal",     apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:620,  rating:7.3 }
        ]
      },
      {
        team: "Villarreal",
        players: [
          { id:313,name:"Diego López",               pos:"GK",  nationality:"Spain",        apps:8,  goals:0, assists:0, cs:4,  saves:34, tackles:0,  passes:440,  rating:7.0 },
          { id:314,name:"Gonzalo Rodríguez",         pos:"CB", nationality:"Argentina",    apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:520,  rating:7.0 },
          { id:315,name:"Joan Capdevila",            pos:"CB", nationality:"Spain",        apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:316,name:"Sebastián Eguren",          pos:"CB", nationality:"Uruguay",      apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:32, passes:440,  rating:6.8 },
          { id:317,name:"Matías Marchena",           pos:"CB", nationality:"Spain",        apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:460,  rating:6.9 },
          { id:318,name:"Marcos Senna",              pos:"MID", nationality:"Spain",        apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:840,  rating:7.5 },
          { id:319,name:"Santi Cazorla",             pos:"MID", nationality:"Spain",        apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:24, passes:680,  rating:7.8 },
          { id:320,name:"Bruno",                     pos:"MID", nationality:"Spain",        apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:600,  rating:7.2 },
          { id:321,name:"Diego Forlán",              pos:"ST", nationality:"Uruguay",      apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:300,  rating:8.0 },
          { id:322,name:"Nihat Kahveci",             pos:"ST", nationality:"Turkey",       apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 },
          { id:323,name:"Robert Pires",              pos:"ST", nationality:"France",       apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:10, passes:380,  rating:7.3 },
          { id:324,name:"Cani",                      pos:"MID", nationality:"Spain",        apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:28, passes:440,  rating:7.0 },
          { id:325,name:"Giuseppe Rossi",            pos:"ST", nationality:"Italy",        apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.2 }
        ]
      },
      {
        team: "Porto",
        players: [
          { id:1769, name:"Helton",                   pos:"GK",  nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:3,  saves:36, tackles:0,  passes:480,  rating:7.2 },
          { id:1770, name:"Rolando",                  pos:"CB", nationality:"Portugal",    apps:8,  goals:1, assists:0, cs:3,  saves:0,  tackles:38, passes:520,  rating:7.3 },
          { id:1771, name:"Bruno Alves",              pos:"CB", nationality:"Portugal",    apps:8,  goals:1, assists:0, cs:3,  saves:0,  tackles:40, passes:500,  rating:7.4 },
          { id:1772, name:"Fucile",                   pos:"CB", nationality:"Uruguay",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:420,  rating:7.0 },
          { id:1773, name:"Álvaro Pereira",           pos:"CB", nationality:"Uruguay",     apps:7,  goals:0, assists:2, cs:2,  saves:0,  tackles:28, passes:440,  rating:7.1 },
          { id:1774, name:"Raúl Meireles",            pos:"MID", nationality:"Portugal",    apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:40, passes:640,  rating:7.5 },
          { id:1775, name:"Lucho González",           pos:"MID", nationality:"Argentina",   apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:36, passes:600,  rating:7.4 },
          { id:1776, name:"Fernando",                 pos:"MID", nationality:"Portugal",    apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:42, passes:560,  rating:7.2 },
          { id:1777, name:"Pedro Mendes",             pos:"MID", nationality:"Portugal",    apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:30, passes:400,  rating:7.0 },
          { id:1778, name:"Hulk",                     pos:"ST", nationality:"Brazil",      apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.9 },
          { id:1779, name:"Lisandro López",           pos:"ST", nationality:"Argentina",   apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 },
          { id:1780, name:"Mariano González",         pos:"MID", nationality:"Argentina",   apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:28, passes:400,  rating:7.0 },
          { id:1781, name:"Tarik Sektioui",           pos:"ST", nationality:"Morocco",     apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:6.8 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:1782, name:"Leo Franco",               pos:"GK",  nationality:"Argentina",   apps:8,  goals:0, assists:0, cs:3,  saves:34, tackles:0,  passes:420,  rating:7.0 },
          { id:1783, name:"Antonio López",            pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:500,  rating:7.1 },
          { id:1784, name:"Pernía",                   pos:"CB", nationality:"Spain",       apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:420,  rating:7.0 },
          { id:1785, name:"Tomáš Ujfaluši",           pos:"CB", nationality:"Czech Republic",apps:7,goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:440,  rating:7.0 },
          { id:1786, name:"Álvaro Domínguez",         pos:"CB", nationality:"Spain",       apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:360,  rating:6.8 },
          { id:1787, name:"Raúl García",             pos:"MID", nationality:"Spain",       apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.4 },
          { id:1788, name:"Maxi Rodríguez",           pos:"MID", nationality:"Argentina",   apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:28, passes:520,  rating:7.5 },
          { id:1789, name:"Simão Sabrosa",            pos:"ST", nationality:"Portugal",    apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.3 },
          { id:1790, name:"José Antonio Reyes",       pos:"ST", nationality:"Spain",       apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.3 },
          { id:1791, name:"Diego Forlán",             pos:"ST", nationality:"Uruguay",     apps:8,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.3 },
          { id:1792, name:"Sergio Agüero",            pos:"ST", nationality:"Argentina",   apps:8,  goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:8.1 },
          { id:1793, name:"Luis García",             pos:"MID", nationality:"Spain",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:22, passes:480,  rating:7.1 },
          { id:1794, name:"Cleber Santana",           pos:"MID", nationality:"Brazil",      apps:5,  goals:0, assists:1, cs:0,  saves:0,  tackles:26, passes:360,  rating:6.9 }
        ]
      }
    ]
  },
  {
    season: "2009-10",
    teams: [
      {
        team: "Inter Milan",
        players: [
          { id:326,name:"Júlio César",               pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:52, tackles:0,  passes:660,  rating:8.0 },
          { id:327,name:"Maicon",                    pos:"CB", nationality:"Brazil",       apps:13, goals:2, assists:4, cs:6,  saves:0,  tackles:48, passes:840,  rating:8.3 },
          { id:328,name:"Lúcio",                     pos:"CB", nationality:"Brazil",       apps:13, goals:1, assists:0, cs:7,  saves:0,  tackles:52, passes:860,  rating:7.9 },
          { id:329,name:"Walter Samuel",             pos:"CB", nationality:"Argentina",    apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:46, passes:720,  rating:7.6 },
          { id:330,name:"Javier Zanetti",            pos:"CB", nationality:"Argentina",    apps:13, goals:0, assists:2, cs:6,  saves:0,  tackles:44, passes:780,  rating:7.8 },
          { id:331,name:"Esteban Cambiasso",         pos:"MID", nationality:"Argentina",    apps:13, goals:2, assists:3, cs:0,  saves:0,  tackles:68, passes:1140, rating:8.1 },
          { id:332,name:"Wesley Sneijder",           pos:"MID", nationality:"Netherlands",  apps:13, goals:6, assists:6, cs:0,  saves:0,  tackles:36, passes:1240, rating:8.9 },
          { id:333,name:"Thiago Motta",              pos:"MID", nationality:"Brazil",       apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:54, passes:960,  rating:7.6 },
          { id:334,name:"Diego Milito",              pos:"ST", nationality:"Argentina",    apps:13, goals:8, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:8.5 },
          { id:335,name:"Samuel Eto'o",              pos:"ST", nationality:"Cameroon",     apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.6 },
          { id:336,name:"Goran Pandev",              pos:"ST", nationality:"North Macedonia",apps:9, goals:4, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.6 },
          { id:337,name:"Dejan Stanković",           pos:"MID", nationality:"Serbia",       apps:10, goals:2, assists:2, cs:0,  saves:0,  tackles:40, passes:760,  rating:7.5 },
          { id:338,name:"Sulley Muntari",            pos:"MID", nationality:"Ghana",        apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.2 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:339,name:"Hans-Jörg Butt",            pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:6,  saves:46, tackles:0,  passes:620,  rating:7.4 },
          { id:340,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:12, goals:1, assists:3, cs:5,  saves:0,  tackles:44, passes:920,  rating:8.1 },
          { id:341,name:"Daniel Van Buyten",         pos:"CB", nationality:"Belgium",      apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:48, passes:780,  rating:7.5 },
          { id:342,name:"Martín Demichelis",         pos:"CB", nationality:"Argentina",    apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.2 },
          { id:343,name:"Holger Badstuber",          pos:"CB", nationality:"Germany",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:620,  rating:7.2 },
          { id:344,name:"Bastian Schweinsteiger",    pos:"MID", nationality:"Germany",      apps:12, goals:3, assists:4, cs:0,  saves:0,  tackles:48, passes:1200, rating:8.2 },
          { id:345,name:"Mark van Bommel",           pos:"MID", nationality:"Netherlands",  apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:56, passes:960,  rating:7.5 },
          { id:346,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:11, goals:5, assists:5, cs:0,  saves:0,  tackles:20, passes:720,  rating:8.3 },
          { id:347,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:12, goals:5, assists:7, cs:0,  saves:0,  tackles:18, passes:660,  rating:8.7 },
          { id:348,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:540,  rating:8.4 },
          { id:349,name:"Ivica Olić",                pos:"ST", nationality:"Croatia",      apps:11, goals:7, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:8.1 },
          { id:350,name:"Miroslav Klose",            pos:"ST", nationality:"Germany",      apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.7 },
          { id:351,name:"Mario Gómez",               pos:"ST", nationality:"Germany",      apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.4 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:352,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:6,  saves:42, tackles:0,  passes:640,  rating:7.6 },
          { id:353,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:820,  rating:7.9 },
          { id:354,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:44, passes:780,  rating:7.8 },
          { id:355,name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:34, passes:640,  rating:7.4 },
          { id:356,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:12, goals:1, assists:4, cs:5,  saves:0,  tackles:42, passes:820,  rating:8.0 },
          { id:357,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:7, cs:0,  saves:0,  tackles:38, passes:1680, rating:8.8 },
          { id:358,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:5, cs:0,  saves:0,  tackles:28, passes:1220, rating:8.5 },
          { id:359,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:52, passes:1180, rating:7.8 },
          { id:360,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:12, goals:8, assists:5, cs:0,  saves:0,  tackles:14, passes:800,  rating:9.2 },
          { id:361,name:"David Villa",               pos:"ST", nationality:"Spain",        apps:7,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:8.0 },
          { id:362,name:"Pedro",                     pos:"LW", nationality:"Spain",        apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 },
          { id:363,name:"Seydou Keita",              pos:"MID", nationality:"Mali",         apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:26, passes:520,  rating:7.2 },
          { id:364,name:"Maxwell",                   pos:"CB", nationality:"Brazil",       apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:26, passes:460,  rating:7.1 }
        ]
      },
      {
        team: "Lyon",
        players: [
          { id:365,name:"Hugo Lloris",               pos:"GK",  nationality:"France",       apps:10, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:560,  rating:7.5 },
          { id:366,name:"Aly Cissokho",              pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:500,  rating:7.0 },
          { id:367,name:"Cris",                      pos:"CB", nationality:"Brazil",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:640,  rating:7.3 },
          { id:368,name:"Jean-Alain Boumsong",       pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:560,  rating:7.0 },
          { id:369,name:"Anthony Réveillère",        pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:480,  rating:6.9 },
          { id:370,name:"Juninho Pernambucano",      pos:"MID", nationality:"Brazil",       apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:28, passes:880,  rating:7.9 },
          { id:371,name:"Jeremy Toulalan",           pos:"MID", nationality:"France",       apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:58, passes:940,  rating:7.5 },
          { id:372,name:"Miralem Pjanić",            pos:"MID", nationality:"Bosnia-Herz.", apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:24, passes:680,  rating:7.5 },
          { id:373,name:"Lisandro López",            pos:"ST", nationality:"Argentina",    apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.9 },
          { id:374,name:"Sidney Govou",              pos:"ST", nationality:"France",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.3 },
          { id:375,name:"Bafétimbi Gomis",           pos:"ST", nationality:"France",       apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:376,name:"Kim Källström",             pos:"MID", nationality:"Sweden",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:38, passes:600,  rating:7.1 },
          { id:377,name:"Michel Bastos",             pos:"ST", nationality:"Brazil",       apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.2 }
        ]
      },
      {
        team: "Manchester United",
        players: [
          { id:378,name:"Edwin van der Sar",         pos:"GK",  nationality:"Netherlands",  apps:10, goals:0, assists:0, cs:5,  saves:38, tackles:0,  passes:620,  rating:7.6 },
          { id:379,name:"Rio Ferdinand",             pos:"CB", nationality:"England",      apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:42, passes:760,  rating:7.7 },
          { id:380,name:"Nemanja Vidić",             pos:"CB", nationality:"Serbia",       apps:9,  goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:720,  rating:7.8 },
          { id:381,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:9,  goals:0, assists:1, cs:5,  saves:0,  tackles:34, passes:600,  rating:7.5 },
          { id:382,name:"Gary Neville",              pos:"CB", nationality:"England",      apps:7,  goals:0, assists:0, cs:4,  saves:0,  tackles:28, passes:480,  rating:6.9 },
          { id:383,name:"Paul Scholes",              pos:"MID", nationality:"England",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:34, passes:920,  rating:7.6 },
          { id:384,name:"Michael Carrick",           pos:"MID", nationality:"England",      apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:40, passes:1080, rating:7.5 },
          { id:385,name:"Ryan Giggs",                pos:"MID", nationality:"Wales",        apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:18, passes:680,  rating:7.6 },
          { id:386,name:"Wayne Rooney",              pos:"ST", nationality:"England",      apps:10, goals:5, assists:4, cs:0,  saves:0,  tackles:16, passes:460,  rating:8.3 },
          { id:387,name:"Dimitar Berbatov",          pos:"ST", nationality:"Bulgaria",     apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:6,  passes:260,  rating:7.5 },
          { id:388,name:"Ji-sung Park",              pos:"MID", nationality:"South Korea",  apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:34, passes:520,  rating:7.3 },
          { id:389,name:"Nani",                      pos:"ST", nationality:"Portugal",     apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:16, passes:380,  rating:7.4 },
          { id:390,name:"Michael Owen",              pos:"ST", nationality:"England",      apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.2 }
        ]
      },
      {
        team: "Girondins de Bordeaux",
        players: [
          { id:1795, name:"Cédric Carrasso",          pos:"GK",  nationality:"France",      apps:10, goals:0, assists:0, cs:4,  saves:44, tackles:0,  passes:520,  rating:7.3 },
          { id:1796, name:"Matthieu Chalmé",          pos:"CB", nationality:"France",      apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:34, passes:520,  rating:7.1 },
          { id:1797, name:"Michaël Ciani",            pos:"CB", nationality:"France",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:40, passes:540,  rating:7.2 },
          { id:1798, name:"Marc Planus",              pos:"CB", nationality:"France",      apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:38, passes:500,  rating:7.1 },
          { id:1799, name:"Benoît Trémoulinas",       pos:"CB", nationality:"France",      apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:28, passes:440,  rating:7.0 },
          { id:1800, name:"Alou Diarra",              pos:"MID", nationality:"France",      apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:50, passes:720,  rating:7.3 },
          { id:1801, name:"Fernando",                 pos:"MID", nationality:"Brazil",      apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.4 },
          { id:1802, name:"Yoann Gourcuff",           pos:"MID", nationality:"France",      apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:24, passes:840,  rating:8.0 },
          { id:1803, name:"Marouane Chamakh",         pos:"ST", nationality:"Morocco",     apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.7 },
          { id:1804, name:"Gourcuff Yoann",           pos:"ST", nationality:"France",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.5 },
          { id:1805, name:"Wendel",                   pos:"ST", nationality:"Brazil",      apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.2 },
          { id:1806, name:"Jaroslav Plašil",          pos:"MID", nationality:"Czech Republic",apps:7,goals:1, assists:2, cs:0,  saves:0,  tackles:26, passes:520,  rating:7.2 },
          { id:1807, name:"Ludovic Sané",             pos:"CB", nationality:"France",      apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:420,  rating:6.9 }
        ]
      },
      {
        team: "Fiorentina",
        players: [
          { id:1808, name:"Sebastien Frey",           pos:"GK",  nationality:"France",      apps:9,  goals:0, assists:0, cs:3,  saves:42, tackles:0,  passes:460,  rating:7.2 },
          { id:1809, name:"Dario Dainelli",           pos:"CB", nationality:"Italy",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:520,  rating:7.0 },
          { id:1810, name:"Tomáš Ujfaluši",           pos:"CB", nationality:"Czech Republic",apps:8,goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:500,  rating:7.0 },
          { id:1811, name:"Massimo Gobbi",            pos:"CB", nationality:"Italy",       apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:420,  rating:6.9 },
          { id:1812, name:"Alessandro Gamberini",     pos:"CB", nationality:"Italy",       apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:440,  rating:7.0 },
          { id:1813, name:"Riccardo Montolivo",       pos:"MID", nationality:"Italy",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:760,  rating:7.5 },
          { id:1814, name:"Zdravko Kuzmanović",       pos:"MID", nationality:"Serbia",      apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:680,  rating:7.2 },
          { id:1815, name:"Stevan Jovetić",           pos:"ST", nationality:"Montenegro",  apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.6 },
          { id:1816, name:"Marco Donadel",            pos:"MID", nationality:"Italy",       apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:40, passes:580,  rating:7.0 },
          { id:1817, name:"Alberto Gilardino",        pos:"ST", nationality:"Italy",       apps:9,  goals:5, assists:1, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.5 },
          { id:1818, name:"Adrian Mutu",              pos:"ST", nationality:"Romania",     apps:7,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.4 },
          { id:1819, name:"Manuele Blasi",            pos:"MID", nationality:"Italy",       apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:34, passes:480,  rating:6.9 },
          { id:1820, name:"Cesare Natali",            pos:"CB", nationality:"Italy",       apps:5,  goals:0, assists:0, cs:1,  saves:0,  tackles:26, passes:320,  rating:6.7 }
        ]
      }
    ]
  },
  {
    season: "2010-11",
    teams: [
      {
        team: "Barcelona",
        players: [
          { id:391,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:13, goals:0, assists:0, cs:8,  saves:44, tackles:0,  passes:680,  rating:7.8 },
          { id:392,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:11, goals:1, assists:0, cs:7,  saves:0,  tackles:48, passes:820,  rating:8.0 },
          { id:393,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:12, goals:2, assists:1, cs:7,  saves:0,  tackles:44, passes:800,  rating:8.0 },
          { id:394,name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:6,  saves:0,  tackles:34, passes:640,  rating:7.5 },
          { id:395,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:13, goals:3, assists:5, cs:6,  saves:0,  tackles:44, passes:860,  rating:8.3 },
          { id:396,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:8, cs:0,  saves:0,  tackles:38, passes:1780, rating:9.0 },
          { id:397,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:12, goals:3, assists:7, cs:0,  saves:0,  tackles:28, passes:1320, rating:8.9 },
          { id:398,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:12, goals:0, assists:3, cs:0,  saves:0,  tackles:56, passes:1280, rating:8.1 },
          { id:399,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:13, goals:12,assists:7, cs:0,  saves:0,  tackles:18, passes:880,  rating:9.4 },
          { id:400,name:"David Villa",               pos:"ST", nationality:"Spain",        apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:12, passes:440,  rating:8.5 },
          { id:401,name:"Pedro",                     pos:"LW", nationality:"Spain",        apps:12, goals:5, assists:4, cs:0,  saves:0,  tackles:14, passes:420,  rating:7.9 },
          { id:402,name:"Maxwell",                   pos:"CB", nationality:"Brazil",       apps:7,  goals:0, assists:1, cs:4,  saves:0,  tackles:26, passes:460,  rating:7.1 },
          { id:403,name:"Seydou Keita",              pos:"MID", nationality:"Mali",         apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:26, passes:520,  rating:7.2 }
        ]
      },
      {
        team: "Manchester United",
        players: [
          { id:404,name:"Edwin van der Sar",         pos:"GK",  nationality:"Netherlands",  apps:13, goals:0, assists:0, cs:7,  saves:42, tackles:0,  passes:660,  rating:7.8 },
          { id:405,name:"Rio Ferdinand",             pos:"CB", nationality:"England",      apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:44, passes:800,  rating:7.8 },
          { id:406,name:"Nemanja Vidić",             pos:"CB", nationality:"Serbia",       apps:12, goals:2, assists:0, cs:7,  saves:0,  tackles:56, passes:780,  rating:8.2 },
          { id:407,name:"Fábio",                     pos:"CB", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:408,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:36, passes:640,  rating:7.6 },
          { id:409,name:"Paul Scholes",              pos:"MID", nationality:"England",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:34, passes:980,  rating:7.7 },
          { id:410,name:"Michael Carrick",           pos:"MID", nationality:"England",      apps:11, goals:0, assists:2, cs:0,  saves:0,  tackles:40, passes:1140, rating:7.6 },
          { id:411,name:"Ji-sung Park",              pos:"MID", nationality:"South Korea",  apps:10, goals:3, assists:2, cs:0,  saves:0,  tackles:36, passes:580,  rating:7.5 },
          { id:412,name:"Wayne Rooney",              pos:"ST", nationality:"England",      apps:13, goals:7, assists:5, cs:0,  saves:0,  tackles:18, passes:520,  rating:8.6 },
          { id:413,name:"Javier Hernández",          pos:"ST", nationality:"Mexico",       apps:11, goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.9 },
          { id:414,name:"Nani",                      pos:"ST", nationality:"Portugal",     apps:12, goals:4, assists:5, cs:0,  saves:0,  tackles:18, passes:480,  rating:7.9 },
          { id:415,name:"Ryan Giggs",                pos:"MID", nationality:"Wales",        apps:8,  goals:1, assists:3, cs:0,  saves:0,  tackles:16, passes:640,  rating:7.6 },
          { id:416,name:"Dimitar Berbatov",          pos:"ST", nationality:"Bulgaria",     apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:6,  passes:240,  rating:7.4 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:417,name:"Iker Casillas",             pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:6,  saves:50, tackles:0,  passes:680,  rating:7.9 },
          { id:418,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:12, goals:2, assists:1, cs:5,  saves:0,  tackles:54, passes:980,  rating:8.2 },
          { id:419,name:"Pepe",                      pos:"CB", nationality:"Portugal",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:50, passes:780,  rating:7.7 },
          { id:420,name:"Ricardo Carvalho",          pos:"CB", nationality:"Portugal",     apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.6 },
          { id:421,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:11, goals:1, assists:3, cs:5,  saves:0,  tackles:34, passes:820,  rating:7.7 },
          { id:422,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:5, cs:0,  saves:0,  tackles:44, passes:1480, rating:8.4 },
          { id:423,name:"Lassana Diarra",            pos:"MID", nationality:"France",       apps:9,  goals:0, assists:1, cs:0,  saves:0,  tackles:60, passes:880,  rating:7.3 },
          { id:424,name:"Mesut Özil",                pos:"MID", nationality:"Germany",      apps:12, goals:2, assists:7, cs:0,  saves:0,  tackles:22, passes:1180, rating:8.3 },
          { id:425,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:12, goals:10,assists:4, cs:0,  saves:0,  tackles:18, passes:640,  rating:9.1 },
          { id:426,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:12, goals:7, assists:4, cs:0,  saves:0,  tackles:12, passes:480,  rating:8.2 },
          { id:427,name:"Ángel Di María",            pos:"RW", nationality:"Argentina",    apps:11, goals:3, assists:6, cs:0,  saves:0,  tackles:20, passes:560,  rating:8.0 },
          { id:428,name:"Gonzalo Higuaín",           pos:"ST", nationality:"Argentina",    apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.8 },
          { id:429,name:"Esteban Granero",           pos:"MID", nationality:"Spain",        apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:24, passes:460,  rating:7.0 }
        ]
      },
      {
        team: "Schalke 04",
        players: [
          { id:430,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:6,  saves:56, tackles:0,  passes:660,  rating:8.0 },
          { id:431,name:"Benedikt Höwedes",          pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:42, passes:640,  rating:7.3 },
          { id:432,name:"Kyriakos Papadopoulos",     pos:"CB", nationality:"Greece",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:600,  rating:7.3 },
          { id:433,name:"Christoph Metzelder",       pos:"CB", nationality:"Germany",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:560,  rating:7.0 },
          { id:434,name:"Atsuto Uchida",             pos:"RB", nationality:"Japan",        apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:520,  rating:7.0 },
          { id:435,name:"Lewis Holtby",              pos:"MID", nationality:"Germany",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:30, passes:680,  rating:7.5 },
          { id:436,name:"Joel Matip",                pos:"CB", nationality:"Cameroon",     apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:36, passes:480,  rating:7.0 },
          { id:437,name:"Raúl González",             pos:"ST", nationality:"Spain",        apps:12, goals:7, assists:4, cs:0,  saves:0,  tackles:10, passes:440,  rating:8.1 },
          { id:438,name:"Klaas-Jan Huntelaar",       pos:"ST", nationality:"Netherlands",  apps:11, goals:7, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.9 },
          { id:439,name:"Jefferson Farfán",          pos:"ST", nationality:"Peru",         apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.6 },
          { id:440,name:"José Manuel Jurado",        pos:"MID", nationality:"Spain",        apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:26, passes:580,  rating:7.3 },
          { id:441,name:"Marcelo Bordon",            pos:"CB", nationality:"Brazil",       apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:440,  rating:6.9 },
          { id:442,name:"Christian Fuchs",           pos:"LB", nationality:"Austria",      apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:420,  rating:6.9 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:443,name:"Wojciech Szczęsny",         pos:"GK",  nationality:"Poland",       apps:9,  goals:0, assists:0, cs:3,  saves:38, tackles:0,  passes:480,  rating:7.0 },
          { id:444,name:"Bacary Sagna",              pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:540,  rating:7.2 },
          { id:445,name:"Laurent Koscielny",         pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:560,  rating:7.1 },
          { id:446,name:"Johan Djourou",             pos:"CB", nationality:"Switzerland",  apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:6.9 },
          { id:447,name:"Gaël Clichy",               pos:"CB", nationality:"France",       apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:520,  rating:7.0 },
          { id:448,name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:1080, rating:8.0 },
          { id:449,name:"Samir Nasri",               pos:"MID", nationality:"France",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:24, passes:760,  rating:7.7 },
          { id:450,name:"Song Billong",              pos:"MID", nationality:"Cameroon",     apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:50, passes:780,  rating:7.3 },
          { id:451,name:"Robin van Persie",          pos:"ST", nationality:"Netherlands",  apps:9,  goals:6, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.2 },
          { id:452,name:"Andrei Arshavin",           pos:"ST", nationality:"Russia",       apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.4 },
          { id:453,name:"Marouane Chamakh",          pos:"ST", nationality:"Morocco",      apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.3 },
          { id:454,name:"Jack Wilshere",             pos:"MID", nationality:"England",      apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:580,  rating:7.3 },
          { id:455,name:"Abou Diaby",                pos:"MID", nationality:"France",       apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:32, passes:480,  rating:7.0 }
        ]
      },
      {
        team: "Tottenham Hotspur",
        players: [
          { id:1821, name:"Heurelho Gomes",           pos:"GK",  nationality:"Brazil",      apps:10, goals:0, assists:0, cs:4,  saves:46, tackles:0,  passes:540,  rating:7.2 },
          { id:1822, name:"Vedran Ćorluka",           pos:"CB", nationality:"Croatia",     apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:580,  rating:7.2 },
          { id:1823, name:"Ledley King",              pos:"CB", nationality:"England",     apps:8,  goals:1, assists:0, cs:3,  saves:0,  tackles:38, passes:560,  rating:7.3 },
          { id:1824, name:"William Gallas",           pos:"CB", nationality:"France",      apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:40, passes:540,  rating:7.2 },
          { id:1825, name:"Benoît Assou-Ekotto",      pos:"CB", nationality:"Cameroon",    apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:28, passes:480,  rating:7.0 },
          { id:1826, name:"Gareth Bale",              pos:"RW", nationality:"Wales",       apps:10, goals:7, assists:4, cs:0,  saves:0,  tackles:20, passes:560,  rating:8.5 },
          { id:1827, name:"Luka Modrić",              pos:"MID", nationality:"Croatia",     apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:38, passes:940,  rating:8.2 },
          { id:1828, name:"Rafael van der Vaart",     pos:"MID", nationality:"Netherlands", apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:28, passes:740,  rating:8.0 },
          { id:1829, name:"Wilson Palacios",          pos:"MID", nationality:"Honduras",    apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:600,  rating:7.1 },
          { id:1830, name:"Robbie Keane",             pos:"ST", nationality:"Ireland",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.4 },
          { id:1831, name:"Jermain Defoe",            pos:"ST", nationality:"England",     apps:9,  goals:5, assists:1, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.6 },
          { id:1832, name:"Peter Crouch",             pos:"ST", nationality:"England",     apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.1 },
          { id:1833, name:"Tom Huddlestone",          pos:"MID", nationality:"England",     apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:32, passes:560,  rating:7.1 }
        ]
      },
      {
        team: "Valencia",
        players: [
          { id:1834, name:"Diego Alves",              pos:"GK",  nationality:"Brazil",      apps:10, goals:0, assists:0, cs:4,  saves:44, tackles:0,  passes:500,  rating:7.3 },
          { id:1835, name:"Hedwiges Maduro",          pos:"CB", nationality:"Netherlands", apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:34, passes:520,  rating:7.0 },
          { id:1836, name:"Ricardo Costa",           pos:"CB", nationality:"Portugal",    apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:540,  rating:7.1 },
          { id:1837, name:"Jeremy Mathieu",           pos:"CB", nationality:"France",      apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:520,  rating:7.1 },
          { id:1838, name:"Miguel",                   pos:"CB", nationality:"Portugal",    apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:440,  rating:7.0 },
          { id:1839, name:"David Albelda",            pos:"MID", nationality:"Spain",       apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:50, passes:760,  rating:7.2 },
          { id:1840, name:"Éver Banega",              pos:"MID", nationality:"Argentina",   apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:30, passes:720,  rating:7.5 },
          { id:1841, name:"Juan Mata",                pos:"ST", nationality:"Spain",       apps:10, goals:5, assists:5, cs:0,  saves:0,  tackles:14, passes:600,  rating:8.2 },
          { id:1842, name:"Pablo Hernández",          pos:"ST", nationality:"Spain",       apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.4 },
          { id:1843, name:"Roberto Soldado",          pos:"ST", nationality:"Spain",       apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:300,  rating:7.9 },
          { id:1844, name:"David Villa",              pos:"ST", nationality:"Spain",       apps:5,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:8.2 },
          { id:1845, name:"Tino Costa",               pos:"MID", nationality:"Argentina",   apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:500,  rating:7.1 },
          { id:1846, name:"Aritz Aduriz",             pos:"ST", nationality:"Spain",       apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.2 }
        ]
      }
    ]
  },
  {
    season: "2011-12",
    teams: [
      {
        team: "Chelsea",
        players: [
          { id:456,name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:13, goals:0, assists:0, cs:7,  saves:54, tackles:0,  passes:640,  rating:7.8 },
          { id:457,name:"Branislav Ivanović",        pos:"CB", nationality:"Serbia",       apps:13, goals:3, assists:1, cs:6,  saves:0,  tackles:48, passes:740,  rating:8.1 },
          { id:458,name:"John Terry",                pos:"CB", nationality:"England",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:52, passes:780,  rating:7.8 },
          { id:459,name:"Gary Cahill",               pos:"CB", nationality:"England",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:620,  rating:7.3 },
          { id:460,name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:13, goals:0, assists:2, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.7 },
          { id:461,name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:12, goals:5, assists:3, cs:0,  saves:0,  tackles:42, passes:1060, rating:8.2 },
          { id:462,name:"Michael Essien",            pos:"MID", nationality:"Ghana",        apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:54, passes:780,  rating:7.4 },
          { id:463,name:"Ramires",                   pos:"MID", nationality:"Brazil",       apps:11, goals:3, assists:2, cs:0,  saves:0,  tackles:52, passes:820,  rating:7.7 },
          { id:464,name:"Juan Mata",                 pos:"ST", nationality:"Spain",        apps:13, goals:4, assists:8, cs:0,  saves:0,  tackles:18, passes:800,  rating:8.5 },
          { id:465,name:"Didier Drogba",             pos:"ST", nationality:"Ivory Coast",  apps:12, goals:9, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:8.8 },
          { id:466,name:"Fernando Torres",           pos:"ST", nationality:"Spain",        apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:467,name:"Ryan Bertrand",             pos:"CB", nationality:"England",      apps:5,  goals:0, assists:1, cs:2,  saves:0,  tackles:20, passes:360,  rating:6.7 },
          { id:468,name:"Salomon Kalou",             pos:"ST", nationality:"Ivory Coast",  apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.1 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:469,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:7,  saves:50, tackles:0,  passes:800,  rating:8.1 },
          { id:470,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:13, goals:2, assists:4, cs:6,  saves:0,  tackles:48, passes:1000, rating:8.4 },
          { id:471,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:12, goals:0, assists:0, cs:6,  saves:0,  tackles:46, passes:860,  rating:7.7 },
          { id:472,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:38, passes:840,  rating:7.7 },
          { id:473,name:"Dante",                     pos:"CB", nationality:"Brazil",       apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:840,  rating:7.6 },
          { id:474,name:"Bastian Schweinsteiger",    pos:"MID", nationality:"Germany",      apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:50, passes:1280, rating:8.5 },
          { id:475,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:12, goals:4, assists:6, cs:0,  saves:0,  tackles:34, passes:1500, rating:8.7 },
          { id:476,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:13, goals:7, assists:7, cs:0,  saves:0,  tackles:22, passes:840,  rating:8.8 },
          { id:477,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:12, goals:8, assists:5, cs:0,  saves:0,  tackles:18, passes:600,  rating:8.7 },
          { id:478,name:"Mario Gómez",               pos:"ST", nationality:"Germany",      apps:12, goals:9, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.3 },
          { id:479,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:12, goals:5, assists:8, cs:0,  saves:0,  tackles:20, passes:680,  rating:8.9 },
          { id:480,name:"Rafinha",                   pos:"RB", nationality:"Brazil",       apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:520,  rating:7.0 },
          { id:481,name:"Mario Mandžukić",           pos:"ST", nationality:"Croatia",      apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.5 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:482,name:"Iker Casillas",             pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:6,  saves:52, tackles:0,  passes:700,  rating:8.0 },
          { id:483,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:12, goals:3, assists:1, cs:5,  saves:0,  tackles:56, passes:1000, rating:8.4 },
          { id:484,name:"Pepe",                      pos:"CB", nationality:"Portugal",     apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:52, passes:800,  rating:7.8 },
          { id:485,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:660,  rating:7.3 },
          { id:486,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:12, goals:1, assists:4, cs:5,  saves:0,  tackles:34, passes:860,  rating:7.9 },
          { id:487,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:6, cs:0,  saves:0,  tackles:44, passes:1520, rating:8.5 },
          { id:488,name:"Sami Khedira",              pos:"MID", nationality:"Germany",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:54, passes:960,  rating:7.8 },
          { id:489,name:"Mesut Özil",                pos:"MID", nationality:"Germany",      apps:11, goals:2, assists:7, cs:0,  saves:0,  tackles:20, passes:1160, rating:8.4 },
          { id:490,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:12, goals:10,assists:4, cs:0,  saves:0,  tackles:16, passes:620,  rating:9.2 },
          { id:491,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:12, passes:500,  rating:8.3 },
          { id:492,name:"Ángel Di María",            pos:"RW", nationality:"Argentina",    apps:11, goals:3, assists:6, cs:0,  saves:0,  tackles:20, passes:560,  rating:8.1 },
          { id:493,name:"Gonzalo Higuaín",           pos:"ST", nationality:"Argentina",    apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.8 },
          { id:494,name:"Kaká",                      pos:"MID", nationality:"Brazil",       apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:480,  rating:7.4 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:495,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:7,  saves:40, tackles:0,  passes:660,  rating:7.7 },
          { id:496,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:760,  rating:7.7 },
          { id:497,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:12, goals:2, assists:1, cs:6,  saves:0,  tackles:46, passes:820,  rating:8.0 },
          { id:498,name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:5,  saves:0,  tackles:32, passes:620,  rating:7.4 },
          { id:499,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:12, goals:2, assists:4, cs:5,  saves:0,  tackles:42, passes:840,  rating:8.1 },
          { id:500,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:7, cs:0,  saves:0,  tackles:36, passes:1720, rating:8.9 },
          { id:501,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:11, goals:3, assists:6, cs:0,  saves:0,  tackles:26, passes:1280, rating:8.8 },
          { id:502,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:12, goals:0, assists:3, cs:0,  saves:0,  tackles:54, passes:1260, rating:8.1 },
          { id:503,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:12, goals:14,assists:5, cs:0,  saves:0,  tackles:16, passes:860,  rating:9.4 },
          { id:504,name:"David Villa",               pos:"ST", nationality:"Spain",        apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:380,  rating:7.9 },
          { id:505,name:"Pedro",                     pos:"LW", nationality:"Spain",        apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.7 },
          { id:506,name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:8,  goals:2, assists:4, cs:0,  saves:0,  tackles:26, passes:860,  rating:7.9 },
          { id:507,name:"Alexis Sánchez",            pos:"ST", nationality:"Chile",        apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.6 }
        ]
      },
      {
        team: "Napoli",
        players: [
          { id:508,name:"Morgan De Sanctis",         pos:"GK",  nationality:"Italy",        apps:9,  goals:0, assists:0, cs:4,  saves:38, tackles:0,  passes:480,  rating:7.2 },
          { id:509,name:"Christian Maggio",          pos:"CB", nationality:"Italy",        apps:9,  goals:1, assists:2, cs:3,  saves:0,  tackles:34, passes:560,  rating:7.3 },
          { id:510,name:"Salvatore Aronica",         pos:"CB", nationality:"Italy",        apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:500,  rating:6.9 },
          { id:511,name:"Camilo Zuniga",             pos:"CB", nationality:"Colombia",     apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:480,  rating:7.0 },
          { id:512,name:"Federico Fernández",        pos:"CB", nationality:"Argentina",    apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:460,  rating:7.0 },
          { id:513,name:"Gokhan Inler",              pos:"MID", nationality:"Switzerland",  apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:880,  rating:7.4 },
          { id:514,name:"Marek Hamšík",              pos:"MID", nationality:"Slovakia",     apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:30, passes:860,  rating:7.9 },
          { id:515,name:"Walter Gargano",            pos:"MID", nationality:"Uruguay",      apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:50, passes:720,  rating:7.2 },
          { id:516,name:"Edinson Cavani",            pos:"ST", nationality:"Uruguay",      apps:9,  goals:8, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:8.5 },
          { id:517,name:"Ezequiel Lavezzi",          pos:"ST", nationality:"Argentina",    apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.8 },
          { id:518,name:"Lorenzo Insigne",           pos:"ST", nationality:"Italy",        apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:519,name:"Paolo Cannavaro",           pos:"CB", nationality:"Italy",        apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:380,  rating:6.8 },
          { id:520,name:"Hugo Campagnaro",           pos:"CB", nationality:"Argentina",    apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:30, passes:360,  rating:6.9 }
        ]
      },
      {
        team: "FC Basel",
        players: [
          { id:1847, name:"Yann Sommer",              pos:"GK",  nationality:"Switzerland", apps:10, goals:0, assists:0, cs:4,  saves:48, tackles:0,  passes:520,  rating:7.5 },
          { id:1848, name:"Philipp Degen",            pos:"RB", nationality:"Switzerland", apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:1849, name:"Markus Steinhofer",        pos:"CB", nationality:"Germany",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:6.9 },
          { id:1850, name:"Aleksandar Dragović",      pos:"CB", nationality:"Austria",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:520,  rating:7.1 },
          { id:1851, name:"Fabian Schär",             pos:"CB", nationality:"Switzerland", apps:8,  goals:1, assists:0, cs:2,  saves:0,  tackles:36, passes:480,  rating:7.1 },
          { id:1852, name:"Granit Xhaka",             pos:"MID", nationality:"Switzerland", apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:680,  rating:7.3 },
          { id:1853, name:"Gökhan Inler",             pos:"MID", nationality:"Switzerland", apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:40, passes:640,  rating:7.4 },
          { id:1854, name:"Benjamin Huggel",          pos:"MID", nationality:"Switzerland", apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:38, passes:540,  rating:6.9 },
          { id:1855, name:"Mohamed Salah",            pos:"RW", nationality:"Egypt",       apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:14, passes:400,  rating:7.8 },
          { id:1856, name:"Xherdan Shaqiri",          pos:"RW", nationality:"Switzerland", apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:420,  rating:7.7 },
          { id:1857, name:"Valentin Stocker",         pos:"ST", nationality:"Switzerland", apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.2 },
          { id:1858, name:"Marco Streller",           pos:"ST", nationality:"Switzerland", apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.4 },
          { id:1859, name:"Fabian Frei",              pos:"MID", nationality:"Switzerland", apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:26, passes:440,  rating:7.1 }
        ]
      },
      {
        team: "APOEL Nicosia",
        players: [
          { id:1860, name:"Dionisis Chiotis",         pos:"GK",  nationality:"Greece",      apps:10, goals:0, assists:0, cs:3,  saves:48, tackles:0,  passes:380,  rating:7.0 },
          { id:1861, name:"Mário Sergio",             pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:32, passes:400,  rating:7.0 },
          { id:1862, name:"Nuno Morais",              pos:"LB", nationality:"Portugal",    apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:380,  rating:7.0 },
          { id:1863, name:"Inácio",                   pos:"CB", nationality:"Portugal",    apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:380,  rating:6.9 },
          { id:1864, name:"Konstantinos Charalambidis",pos:"RB",nationality:"Cyprus",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:340,  rating:6.8 },
          { id:1865, name:"Hélio Pinto",              pos:"MID", nationality:"Portugal",    apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:36, passes:480,  rating:7.0 },
          { id:1866, name:"Gustavo Manduca",          pos:"MID", nationality:"Brazil",      apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:26, passes:440,  rating:7.1 },
          { id:1867, name:"Ailton",                   pos:"MID", nationality:"Brazil",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:28, passes:420,  rating:7.1 },
          { id:1868, name:"Esteban Solari",           pos:"ST", nationality:"Argentina",   apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:1869, name:"Pieros Soteriou",          pos:"ST", nationality:"Cyprus",      apps:7,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:6.9 },
          { id:1870, name:"Nektarios Alexandrou",     pos:"ST", nationality:"Cyprus",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.0 },
          { id:1871, name:"Adriano Pinto",            pos:"LB", nationality:"Portugal",    apps:6,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:320,  rating:6.8 },
          { id:1872, name:"William Boaventura",       pos:"MID", nationality:"Brazil",      apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:24, passes:340,  rating:6.9 }
        ]
      }
    ]
  },
  {
    season: "2012-13",
    teams: [
      {
        team: "Bayern Munich",
        players: [
          { id:521,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:8,  saves:48, tackles:0,  passes:820,  rating:8.3 },
          { id:522,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:13, goals:1, assists:3, cs:7,  saves:0,  tackles:46, passes:1020, rating:8.4 },
          { id:523,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:12, goals:0, assists:0, cs:7,  saves:0,  tackles:50, passes:880,  rating:7.9 },
          { id:524,name:"Dante",                     pos:"CB", nationality:"Brazil",       apps:13, goals:1, assists:0, cs:7,  saves:0,  tackles:52, passes:880,  rating:7.9 },
          { id:525,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:12, goals:1, assists:2, cs:6,  saves:0,  tackles:38, passes:860,  rating:7.9 },
          { id:526,name:"Bastian Schweinsteiger",    pos:"MID", nationality:"Germany",      apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:50, passes:1300, rating:8.5 },
          { id:527,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:12, goals:5, assists:6, cs:0,  saves:0,  tackles:32, passes:1560, rating:8.8 },
          { id:528,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:13, goals:9, assists:7, cs:0,  saves:0,  tackles:22, passes:860,  rating:9.0 },
          { id:529,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:12, goals:9, assists:5, cs:0,  saves:0,  tackles:18, passes:600,  rating:9.0 },
          { id:530,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:13, goals:6, assists:9, cs:0,  saves:0,  tackles:22, passes:700,  rating:9.0 },
          { id:531,name:"Mario Gómez",               pos:"ST", nationality:"Germany",      apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.0 },
          { id:532,name:"Mario Mandžukić",           pos:"ST", nationality:"Croatia",      apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.7 },
          { id:533,name:"Rafinha",                   pos:"RB", nationality:"Brazil",       apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:520,  rating:7.1 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:534,name:"Roman Weidenfeller",        pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:6,  saves:54, tackles:0,  passes:660,  rating:7.7 },
          { id:535,name:"Łukasz Piszczek",           pos:"CB", nationality:"Poland",       apps:12, goals:1, assists:2, cs:5,  saves:0,  tackles:40, passes:720,  rating:7.7 },
          { id:536,name:"Neven Subotić",             pos:"CB", nationality:"Serbia",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:780,  rating:7.7 },
          { id:537,name:"Mats Hummels",              pos:"CB", nationality:"Germany",      apps:13, goals:2, assists:1, cs:6,  saves:0,  tackles:52, passes:960,  rating:8.2 },
          { id:538,name:"Marcel Schmelzer",          pos:"CB", nationality:"Germany",      apps:12, goals:0, assists:2, cs:5,  saves:0,  tackles:34, passes:660,  rating:7.4 },
          { id:539,name:"İlkay Gündoğan",            pos:"MID", nationality:"Germany",      apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:40, passes:1120, rating:8.2 },
          { id:540,name:"Sven Bender",               pos:"MID", nationality:"Germany",      apps:11, goals:0, assists:1, cs:0,  saves:0,  tackles:58, passes:940,  rating:7.5 },
          { id:541,name:"Mario Götze",               pos:"MID", nationality:"Germany",      apps:12, goals:5, assists:6, cs:0,  saves:0,  tackles:24, passes:920,  rating:8.5 },
          { id:542,name:"Marco Reus",                pos:"ST", nationality:"Germany",      apps:12, goals:7, assists:6, cs:0,  saves:0,  tackles:20, passes:680,  rating:8.7 },
          { id:543,name:"Robert Lewandowski",        pos:"ST", nationality:"Poland",       apps:13, goals:10,assists:5, cs:0,  saves:0,  tackles:10, passes:380,  rating:8.9 },
          { id:544,name:"Jakub Błaszczykowski",      pos:"ST", nationality:"Poland",       apps:11, goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.7 },
          { id:545,name:"Kevin Großkreutz",          pos:"ST", nationality:"Germany",      apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.2 },
          { id:546,name:"Sebastian Kehl",            pos:"MID", nationality:"Germany",      apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:42, passes:620,  rating:7.1 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:547,name:"Iker Casillas",             pos:"GK",  nationality:"Spain",        apps:11, goals:0, assists:0, cs:5,  saves:48, tackles:0,  passes:680,  rating:7.8 },
          { id:548,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:12, goals:2, assists:1, cs:5,  saves:0,  tackles:54, passes:980,  rating:8.3 },
          { id:549,name:"Pepe",                      pos:"CB", nationality:"Portugal",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:50, passes:780,  rating:7.7 },
          { id:550,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:40, passes:700,  rating:7.5 },
          { id:551,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:11, goals:1, assists:3, cs:5,  saves:0,  tackles:32, passes:840,  rating:7.8 },
          { id:552,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:11, goals:1, assists:5, cs:0,  saves:0,  tackles:42, passes:1480, rating:8.4 },
          { id:553,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:11, goals:2, assists:5, cs:0,  saves:0,  tackles:44, passes:1360, rating:8.5 },
          { id:554,name:"Mesut Özil",                pos:"MID", nationality:"Germany",      apps:9,  goals:2, assists:6, cs:0,  saves:0,  tackles:18, passes:1060, rating:8.2 },
          { id:555,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:12, goals:12,assists:3, cs:0,  saves:0,  tackles:16, passes:620,  rating:9.3 },
          { id:556,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:11, goals:7, assists:4, cs:0,  saves:0,  tackles:12, passes:480,  rating:8.3 },
          { id:557,name:"Gonzalo Higuaín",           pos:"ST", nationality:"Argentina",    apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.0 },
          { id:558,name:"Ángel Di María",            pos:"RW", nationality:"Argentina",    apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:18, passes:520,  rating:8.0 },
          { id:559,name:"Kaká",                      pos:"MID", nationality:"Brazil",       apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:460,  rating:7.3 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:560,name:"Víctor Valdés",             pos:"GK",  nationality:"Spain",        apps:11, goals:0, assists:0, cs:6,  saves:38, tackles:0,  passes:660,  rating:7.7 },
          { id:561,name:"Carles Puyol",              pos:"CB", nationality:"Spain",        apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:700,  rating:7.6 },
          { id:562,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:44, passes:800,  rating:7.9 },
          { id:563,name:"Eric Abidal",               pos:"CB", nationality:"France",       apps:7,  goals:0, assists:0, cs:4,  saves:0,  tackles:30, passes:560,  rating:7.2 },
          { id:564,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:11, goals:2, assists:4, cs:5,  saves:0,  tackles:40, passes:820,  rating:8.0 },
          { id:565,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:7, cs:0,  saves:0,  tackles:34, passes:1680, rating:8.8 },
          { id:566,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:5, cs:0,  saves:0,  tackles:26, passes:1220, rating:8.7 },
          { id:567,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:11, goals:0, assists:3, cs:0,  saves:0,  tackles:52, passes:1240, rating:8.1 },
          { id:568,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:11, goals:8, assists:5, cs:0,  saves:0,  tackles:14, passes:820,  rating:9.2 },
          { id:569,name:"Pedro",                     pos:"LW", nationality:"Spain",        apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.7 },
          { id:570,name:"Alexis Sánchez",            pos:"ST", nationality:"Chile",        apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:400,  rating:7.9 },
          { id:571,name:"Cesc Fàbregas",             pos:"MID", nationality:"Spain",        apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:26, passes:880,  rating:8.0 },
          { id:572,name:"David Villa",               pos:"ST", nationality:"Spain",        apps:7,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:300,  rating:7.7 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:573,name:"Salvatore Sirigu",          pos:"GK",  nationality:"Italy",        apps:10, goals:0, assists:0, cs:5,  saves:42, tackles:0,  passes:540,  rating:7.3 },
          { id:574,name:"Gregory van der Wiel",      pos:"CB", nationality:"Netherlands",  apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:580,  rating:7.1 },
          { id:575,name:"Thiago Silva",              pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:860,  rating:8.2 },
          { id:576,name:"Alex",                      pos:"CB", nationality:"Brazil",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:700,  rating:7.4 },
          { id:577,name:"Maxwell",                   pos:"CB", nationality:"Brazil",       apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:28, passes:560,  rating:7.2 },
          { id:578,name:"Thiago Motta",              pos:"MID", nationality:"Italy",        apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:980,  rating:7.7 },
          { id:579,name:"Blaise Matuidi",            pos:"MID", nationality:"France",       apps:10, goals:2, assists:2, cs:0,  saves:0,  tackles:56, passes:860,  rating:7.7 },
          { id:580,name:"Javier Pastore",            pos:"MID", nationality:"Argentina",    apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:24, passes:720,  rating:7.8 },
          { id:581,name:"Zlatan Ibrahimović",        pos:"ST", nationality:"Sweden",       apps:10, goals:8, assists:4, cs:0,  saves:0,  tackles:10, passes:440,  rating:8.7 },
          { id:582,name:"Edinson Cavani",            pos:"ST", nationality:"Uruguay",      apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:8.2 },
          { id:583,name:"Ezequiel Lavezzi",          pos:"ST", nationality:"Argentina",    apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.6 },
          { id:584,name:"Lucas Moura",               pos:"ST", nationality:"Brazil",       apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.4 },
          { id:585,name:"Marco Verratti",            pos:"MID", nationality:"Italy",        apps:7,  goals:0, assists:2, cs:0,  saves:0,  tackles:38, passes:820,  rating:7.5 }
        ]
      },
      {
        team: "Galatasaray",
        players: [
          { id:1873, name:"Fernando Muslera",         pos:"GK",  nationality:"Uruguay",     apps:10, goals:0, assists:0, cs:3,  saves:40, tackles:0,  passes:480,  rating:7.0 },
          { id:1874, name:"Sabri Sarıoğlu",           pos:"RB", nationality:"Turkey",      apps:9,  goals:0, assists:1, cs:2,  saves:0,  tackles:32, passes:440,  rating:7.0 },
          { id:1875, name:"Semih Kaya",               pos:"CB", nationality:"Turkey",      apps:9,  goals:0, assists:0, cs:2,  saves:0,  tackles:38, passes:460,  rating:6.9 },
          { id:1876, name:"Carlos Meira",             pos:"CB", nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:420,  rating:6.9 },
          { id:1877, name:"Aurélien Chedjou",         pos:"CB", nationality:"Cameroon",    apps:9,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:440,  rating:6.9 },
          { id:1878, name:"Selçuk İnan",              pos:"MID", nationality:"Turkey",      apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:38, passes:700,  rating:7.4 },
          { id:1879, name:"Hamit Altıntop",           pos:"MID", nationality:"Turkey",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:30, passes:560,  rating:7.2 },
          { id:1880, name:"Wesley Sneijder",          pos:"MID", nationality:"Netherlands", apps:10, goals:4, assists:6, cs:0,  saves:0,  tackles:28, passes:680,  rating:7.9 },
          { id:1881, name:"Didier Drogba",            pos:"ST", nationality:"Côte d'Ivoire",apps:10,goals:7, assists:3, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.8 },
          { id:1882, name:"Burak Yılmaz",             pos:"ST", nationality:"Turkey",      apps:10, goals:8, assists:3, cs:0,  saves:0,  tackles:10, passes:240,  rating:8.0 },
          { id:1883, name:"Emmanuel Eboué",           pos:"MID", nationality:"Côte d'Ivoire",apps:8, goals:1, assists:2, cs:0,  saves:0,  tackles:28, passes:420,  rating:7.1 },
          { id:1884, name:"Umut Bulut",               pos:"ST", nationality:"Turkey",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:7.0 },
          { id:1885, name:"Nordin Amrabat",           pos:"ST", nationality:"Morocco",     apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:8,  passes:180,  rating:6.9 }
        ]
      },
      {
        team: "Málaga CF",
        players: [
          { id:1886, name:"Willy Caballero",          pos:"GK",  nationality:"Argentina",   apps:10, goals:0, assists:0, cs:3,  saves:46, tackles:0,  passes:480,  rating:7.2 },
          { id:1887, name:"Jesús Gámez",              pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:500,  rating:7.1 },
          { id:1888, name:"Sergio Sánchez",           pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:480,  rating:7.0 },
          { id:1889, name:"Weligton",                 pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:460,  rating:7.0 },
          { id:1890, name:"Nacho Monreal",            pos:"LB", nationality:"Spain",       apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:480,  rating:7.1 },
          { id:1891, name:"Santi Cazorla",            pos:"MID", nationality:"Spain",       apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:680,  rating:7.7 },
          { id:1892, name:"Isco",                     pos:"MID", nationality:"Spain",       apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:26, passes:660,  rating:7.6 },
          { id:1893, name:"Javier Saviola",           pos:"ST", nationality:"Argentina",   apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.2 },
          { id:1894, name:"Roque Santa Cruz",         pos:"ST", nationality:"Paraguay",    apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.3 },
          { id:1895, name:"Julio Baptista",           pos:"MID", nationality:"Brazil",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:26, passes:480,  rating:7.1 },
          { id:1896, name:"Joaquín Sánchez",          pos:"RW", nationality:"Spain",       apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.2 },
          { id:1897, name:"Antunes",                  pos:"LB", nationality:"Portugal",    apps:6,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:360,  rating:6.9 },
          { id:1898, name:"Fabrice Olinga",           pos:"ST", nationality:"Cameroon",    apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:4,  passes:120,  rating:7.0 }
        ]
      }
    ]
  },
  {
    season: "2013-14",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:586,name:"Iker Casillas",             pos:"GK",  nationality:"Spain",        apps:13, goals:0, assists:0, cs:7,  saves:50, tackles:0,  passes:700,  rating:8.0 },
          { id:587,name:"Dani Carvajal",             pos:"RB", nationality:"Spain",        apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:38, passes:780,  rating:7.7 },
          { id:588,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:13, goals:3, assists:2, cs:6,  saves:0,  tackles:56, passes:1020, rating:8.5 },
          { id:589,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:900,  rating:7.9 },
          { id:590,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:13, goals:1, assists:5, cs:6,  saves:0,  tackles:34, passes:880,  rating:8.0 },
          { id:591,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:6, cs:0,  saves:0,  tackles:44, passes:1500, rating:8.5 },
          { id:592,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:13, goals:2, assists:6, cs:0,  saves:0,  tackles:46, passes:1400, rating:8.6 },
          { id:593,name:"Ángel Di María",            pos:"MID", nationality:"Argentina",    apps:13, goals:4, assists:8, cs:0,  saves:0,  tackles:26, passes:860,  rating:8.6 },
          { id:594,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:17,assists:3, cs:0,  saves:0,  tackles:16, passes:640,  rating:9.4 },
          { id:595,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:13, goals:9, assists:6, cs:0,  saves:0,  tackles:12, passes:520,  rating:8.6 },
          { id:596,name:"Gareth Bale",               pos:"RW", nationality:"Wales",        apps:12, goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:480,  rating:8.2 },
          { id:597,name:"Sami Khedira",              pos:"MID", nationality:"Germany",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:880,  rating:7.6 },
          { id:598,name:"Kaká",                      pos:"MID", nationality:"Brazil",       apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.2 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:599,name:"Thibaut Courtois",          pos:"GK",  nationality:"Belgium",      apps:13, goals:0, assists:0, cs:9,  saves:60, tackles:0,  passes:680,  rating:8.6 },
          { id:600,name:"Juanfran",                  pos:"CB", nationality:"Spain",        apps:13, goals:0, assists:2, cs:7,  saves:0,  tackles:44, passes:740,  rating:7.7 },
          { id:601,name:"Diego Godín",               pos:"CB", nationality:"Uruguay",      apps:13, goals:2, assists:0, cs:8,  saves:0,  tackles:60, passes:880,  rating:8.5 },
          { id:602,name:"Miranda",                   pos:"CB", nationality:"Brazil",       apps:12, goals:1, assists:0, cs:7,  saves:0,  tackles:52, passes:780,  rating:7.9 },
          { id:603,name:"Filipe Luís",               pos:"LB", nationality:"Brazil",       apps:12, goals:0, assists:3, cs:6,  saves:0,  tackles:40, passes:720,  rating:7.7 },
          { id:604,name:"Gabi",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:4, cs:0,  saves:0,  tackles:60, passes:1100, rating:8.0 },
          { id:605,name:"Koke",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:5, cs:0,  saves:0,  tackles:40, passes:1280, rating:8.2 },
          { id:606,name:"Tiago",                     pos:"MID", nationality:"Portugal",     apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:54, passes:960,  rating:7.7 },
          { id:607,name:"Antoine Griezmann",         pos:"ST", nationality:"France",       apps:12, goals:6, assists:4, cs:0,  saves:0,  tackles:18, passes:580,  rating:8.4 },
          { id:608,name:"Diego Costa",               pos:"ST", nationality:"Spain",        apps:12, goals:8, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:8.5 },
          { id:609,name:"Arda Turan",                pos:"ST", nationality:"Turkey",       apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:20, passes:560,  rating:7.9 },
          { id:610,name:"Raúl García",               pos:"MID", nationality:"Spain",        apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:30, passes:600,  rating:7.6 },
          { id:611,name:"Cristian Ansaldi",          pos:"CB", nationality:"Argentina",    apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:26, passes:440,  rating:7.0 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:612,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:7,  saves:44, tackles:0,  passes:820,  rating:8.3 },
          { id:613,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:12, goals:1, assists:2, cs:6,  saves:0,  tackles:44, passes:980,  rating:8.3 },
          { id:614,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:48, passes:860,  rating:7.8 },
          { id:615,name:"Dante",                     pos:"CB", nationality:"Brazil",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:820,  rating:7.6 },
          { id:616,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:36, passes:840,  rating:7.9 },
          { id:617,name:"Bastian Schweinsteiger",    pos:"MID", nationality:"Germany",      apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:48, passes:1240, rating:8.3 },
          { id:618,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:12, goals:4, assists:6, cs:0,  saves:0,  tackles:30, passes:1580, rating:8.7 },
          { id:619,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:12, goals:7, assists:6, cs:0,  saves:0,  tackles:20, passes:820,  rating:8.7 },
          { id:620,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:11, goals:7, assists:4, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.5 },
          { id:621,name:"Mario Gómez",               pos:"ST", nationality:"Germany",      apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.9 },
          { id:622,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:10, goals:5, assists:6, cs:0,  saves:0,  tackles:18, passes:640,  rating:8.6 },
          { id:623,name:"Mario Mandžukić",           pos:"ST", nationality:"Croatia",      apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.7 },
          { id:624,name:"Xherdan Shaqiri",           pos:"RW", nationality:"Switzerland",  apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.5 }
        ]
      },
      {
        team: "Chelsea",
        players: [
          { id:625,name:"Petr Čech",                 pos:"GK",  nationality:"Czech Republic",apps:12, goals:0, assists:0, cs:6,  saves:50, tackles:0,  passes:640,  rating:7.7 },
          { id:626,name:"Branislav Ivanović",        pos:"CB", nationality:"Serbia",       apps:12, goals:1, assists:1, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.8 },
          { id:627,name:"John Terry",                pos:"CB", nationality:"England",      apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:780,  rating:7.8 },
          { id:628,name:"Gary Cahill",               pos:"CB", nationality:"England",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:44, passes:680,  rating:7.5 },
          { id:629,name:"Ashley Cole",               pos:"CB", nationality:"England",      apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:640,  rating:7.4 },
          { id:630,name:"Frank Lampard",             pos:"MID", nationality:"England",      apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:38, passes:1000, rating:8.0 },
          { id:631,name:"John Obi Mikel",            pos:"MID", nationality:"Nigeria",      apps:10, goals:0, assists:1, cs:0,  saves:0,  tackles:58, passes:880,  rating:7.3 },
          { id:632,name:"Oscar",                     pos:"MID", nationality:"Brazil",       apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:28, passes:860,  rating:7.8 },
          { id:633,name:"Eden Hazard",               pos:"ST", nationality:"Belgium",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:20, passes:700,  rating:8.6 },
          { id:634,name:"Fernando Torres",           pos:"ST", nationality:"Spain",        apps:10, goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.4 },
          { id:635,name:"Willian",                   pos:"ST", nationality:"Brazil",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:18, passes:520,  rating:7.6 },
          { id:636,name:"Samuel Eto'o",              pos:"ST", nationality:"Cameroon",     apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.9 },
          { id:637,name:"André Schürrle",            pos:"ST", nationality:"Germany",      apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.4 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:638,name:"Salvatore Sirigu",          pos:"GK",  nationality:"Italy",        apps:10, goals:0, assists:0, cs:5,  saves:40, tackles:0,  passes:540,  rating:7.3 },
          { id:639,name:"Gregory van der Wiel",      pos:"CB", nationality:"Netherlands",  apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:560,  rating:7.1 },
          { id:640,name:"Thiago Silva",              pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:860,  rating:8.3 },
          { id:641,name:"Alex",                      pos:"CB", nationality:"Brazil",       apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:700,  rating:7.5 },
          { id:642,name:"Maxwell",                   pos:"CB", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:26, passes:540,  rating:7.2 },
          { id:643,name:"Thiago Motta",              pos:"MID", nationality:"Italy",        apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:50, passes:960,  rating:7.7 },
          { id:644,name:"Blaise Matuidi",            pos:"MID", nationality:"France",       apps:10, goals:2, assists:2, cs:0,  saves:0,  tackles:54, passes:840,  rating:7.7 },
          { id:645,name:"Marco Verratti",            pos:"MID", nationality:"Italy",        apps:9,  goals:0, assists:3, cs:0,  saves:0,  tackles:40, passes:860,  rating:7.9 },
          { id:646,name:"Zlatan Ibrahimović",        pos:"ST", nationality:"Sweden",       apps:10, goals:7, assists:4, cs:0,  saves:0,  tackles:10, passes:440,  rating:8.6 },
          { id:647,name:"Edinson Cavani",            pos:"ST", nationality:"Uruguay",      apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:8.0 },
          { id:648,name:"Lucas Moura",               pos:"ST", nationality:"Brazil",       apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.5 },
          { id:649,name:"Ezequiel Lavezzi",          pos:"ST", nationality:"Argentina",    apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.3 },
          { id:650,name:"Javier Pastore",            pos:"MID", nationality:"Argentina",    apps:7,  goals:1, assists:3, cs:0,  saves:0,  tackles:20, passes:640,  rating:7.5 }
        ]
      },
      {
        team: "Schalke 04",
        players: [
          { id:1899, name:"Ralf Fährmann",            pos:"GK",  nationality:"Germany",     apps:10, goals:0, assists:0, cs:3,  saves:42, tackles:0,  passes:540,  rating:7.0 },
          { id:1900, name:"Atsuto Uchida",            pos:"RB", nationality:"Japan",       apps:9,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:1901, name:"Benedikt Höwedes",         pos:"CB", nationality:"Germany",     apps:10, goals:0, assists:0, cs:3,  saves:0,  tackles:40, passes:560,  rating:7.1 },
          { id:1902, name:"Kyriakos Papadopoulos",    pos:"CB", nationality:"Greece",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:480,  rating:6.9 },
          { id:1903, name:"Christian Fuchs",          pos:"LB", nationality:"Austria",     apps:9,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1904, name:"Jermaine Jones",           pos:"MID", nationality:"United States",apps:9, goals:2, assists:2, cs:0,  saves:0,  tackles:42, passes:600,  rating:7.1 },
          { id:1905, name:"Marco Höger",              pos:"MID", nationality:"Germany",     apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:38, passes:540,  rating:6.9 },
          { id:1906, name:"Julian Draxler",           pos:"MID", nationality:"Germany",     apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:20, passes:560,  rating:7.5 },
          { id:1907, name:"Klaas-Jan Huntelaar",      pos:"ST", nationality:"Netherlands", apps:10, goals:7, assists:3, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.7 },
          { id:1908, name:"Jefferson Farfán",         pos:"ST", nationality:"Peru",        apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.4 },
          { id:1909, name:"Ciprian Marica",           pos:"ST", nationality:"Romania",     apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.1 },
          { id:1910, name:"Ibrahim Afellay",          pos:"MID", nationality:"Netherlands", apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:16, passes:360,  rating:7.0 },
          { id:1911, name:"Max Meyer",                pos:"MID", nationality:"Germany",     apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:20, passes:380,  rating:7.0 }
        ]
      },
      {
        team: "Olympiakos",
        players: [
          { id:1912, name:"Roberto",                  pos:"GK",  nationality:"Brazil",      apps:10, goals:0, assists:0, cs:3,  saves:44, tackles:0,  passes:460,  rating:7.0 },
          { id:1913, name:"Avraam Papadopoulos",      pos:"CB", nationality:"Greece",      apps:9,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:420,  rating:6.9 },
          { id:1914, name:"Éric Abidal",              pos:"CB", nationality:"France",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:30, passes:400,  rating:6.9 },
          { id:1915, name:"Arthur Masuaku",           pos:"LB", nationality:"France",      apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:380,  rating:6.9 },
          { id:1916, name:"Omar Elabdellaoui",        pos:"RB", nationality:"Norway",      apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:26, passes:360,  rating:6.8 },
          { id:1917, name:"Giannis Maniatis",         pos:"MID", nationality:"Greece",      apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:40, passes:540,  rating:7.0 },
          { id:1918, name:"Pajtim Kasami",            pos:"MID", nationality:"Switzerland", apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:28, passes:440,  rating:7.1 },
          { id:1919, name:"Alejandro Domínguez",      pos:"MID", nationality:"Spain",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:26, passes:520,  rating:7.2 },
          { id:1920, name:"Kostas Fortounis",         pos:"MID", nationality:"Greece",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:24, passes:440,  rating:7.1 },
          { id:1921, name:"Joel Campbell",            pos:"ST", nationality:"Costa Rica",  apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:1922, name:"Ideye Brown",              pos:"ST", nationality:"Nigeria",     apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.1 },
          { id:1923, name:"Christian Benteke",        pos:"ST", nationality:"Belgium",     apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:4,  passes:140,  rating:7.0 },
          { id:1924, name:"Zárate",                   pos:"ST", nationality:"Argentina",   apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.0 }
        ]
      }
    ]
  },
  {
    season: "2014-15",
    teams: [
      {
        team: "Barcelona",
        players: [
          { id:651,name:"Marc-André ter Stegen",     pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:8,  saves:46, tackles:0,  passes:700,  rating:8.0 },
          { id:652,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:12, goals:1, assists:1, cs:7,  saves:0,  tackles:44, passes:820,  rating:8.0 },
          { id:653,name:"Jérémy Mathieu",            pos:"CB", nationality:"France",       apps:11, goals:0, assists:0, cs:6,  saves:0,  tackles:40, passes:720,  rating:7.4 },
          { id:654,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:12, goals:2, assists:4, cs:6,  saves:0,  tackles:42, passes:840,  rating:8.1 },
          { id:655,name:"Jordi Alba",                pos:"LB", nationality:"Spain",        apps:12, goals:1, assists:4, cs:6,  saves:0,  tackles:34, passes:780,  rating:7.9 },
          { id:656,name:"Xavi",                      pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:6, cs:0,  saves:0,  tackles:34, passes:1620, rating:8.6 },
          { id:657,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:5, cs:0,  saves:0,  tackles:26, passes:1240, rating:8.7 },
          { id:658,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:12, goals:0, assists:3, cs:0,  saves:0,  tackles:54, passes:1280, rating:8.2 },
          { id:659,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:13, goals:10,assists:6, cs:0,  saves:0,  tackles:16, passes:860,  rating:9.3 },
          { id:660,name:"Neymar",                    pos:"ST", nationality:"Brazil",       apps:13, goals:10,assists:6, cs:0,  saves:0,  tackles:18, passes:640,  rating:9.1 },
          { id:661,name:"Luis Suárez",               pos:"ST", nationality:"Uruguay",      apps:13, goals:7, assists:5, cs:0,  saves:0,  tackles:12, passes:440,  rating:8.8 },
          { id:662,name:"Pedro",                     pos:"LW", nationality:"Spain",        apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.5 },
          { id:663,name:"Ivan Rakitić",              pos:"MID", nationality:"Croatia",      apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:34, passes:1080, rating:8.1 }
        ]
      },
      {
        team: "Juventus",
        players: [
          { id:664,name:"Gianluigi Buffon",          pos:"GK",  nationality:"Italy",        apps:13, goals:0, assists:0, cs:9,  saves:48, tackles:0,  passes:600,  rating:8.4 },
          { id:665,name:"Andrea Barzagli",           pos:"CB", nationality:"Italy",        apps:12, goals:0, assists:0, cs:8,  saves:0,  tackles:44, passes:740,  rating:7.9 },
          { id:666,name:"Leonardo Bonucci",          pos:"CB", nationality:"Italy",        apps:13, goals:1, assists:1, cs:8,  saves:0,  tackles:46, passes:900,  rating:8.1 },
          { id:667,name:"Giorgio Chiellini",         pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:0, cs:8,  saves:0,  tackles:50, passes:780,  rating:8.1 },
          { id:668,name:"Patrice Evra",              pos:"LB", nationality:"France",       apps:12, goals:0, assists:2, cs:7,  saves:0,  tackles:34, passes:640,  rating:7.5 },
          { id:669,name:"Andrea Pirlo",              pos:"MID", nationality:"Italy",        apps:12, goals:2, assists:5, cs:0,  saves:0,  tackles:32, passes:1480, rating:8.5 },
          { id:670,name:"Claudio Marchisio",         pos:"MID", nationality:"Italy",        apps:11, goals:3, assists:3, cs:0,  saves:0,  tackles:46, passes:1060, rating:7.9 },
          { id:671,name:"Arturo Vidal",              pos:"MID", nationality:"Chile",        apps:12, goals:4, assists:3, cs:0,  saves:0,  tackles:52, passes:960,  rating:8.2 },
          { id:672,name:"Carlos Tevez",              pos:"ST", nationality:"Argentina",    apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.6 },
          { id:673,name:"Álvaro Morata",             pos:"ST", nationality:"Spain",        apps:11, goals:6, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.9 },
          { id:674,name:"Fernando Llorente",         pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.3 },
          { id:675,name:"Roberto Pereyra",           pos:"MID", nationality:"Argentina",    apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:24, passes:560,  rating:7.3 },
          { id:676,name:"Kingsley Coman",            pos:"LW", nationality:"France",       apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:677,name:"Iker Casillas",             pos:"GK",  nationality:"Spain",        apps:11, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:660,  rating:7.6 },
          { id:678,name:"Dani Carvajal",             pos:"RB", nationality:"Spain",        apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:740,  rating:7.5 },
          { id:679,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:12, goals:2, assists:1, cs:5,  saves:0,  tackles:52, passes:960,  rating:8.3 },
          { id:680,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:840,  rating:7.7 },
          { id:681,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:11, goals:1, assists:3, cs:5,  saves:0,  tackles:32, passes:820,  rating:7.8 },
          { id:682,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:12, goals:2, assists:5, cs:0,  saves:0,  tackles:44, passes:1380, rating:8.5 },
          { id:683,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:12, goals:2, assists:6, cs:0,  saves:0,  tackles:38, passes:1640, rating:8.6 },
          { id:684,name:"James Rodríguez",           pos:"MID", nationality:"Colombia",     apps:11, goals:4, assists:6, cs:0,  saves:0,  tackles:24, passes:900,  rating:8.3 },
          { id:685,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:12, goals:10,assists:4, cs:0,  saves:0,  tackles:14, passes:600,  rating:9.1 },
          { id:686,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:12, goals:8, assists:5, cs:0,  saves:0,  tackles:12, passes:500,  rating:8.5 },
          { id:687,name:"Gareth Bale",               pos:"RW", nationality:"Wales",        apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.0 },
          { id:688,name:"Isco",                      pos:"MID", nationality:"Spain",        apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:20, passes:760,  rating:7.7 },
          { id:689,name:"Álvaro Arbeloa",            pos:"CB", nationality:"Spain",        apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:28, passes:460,  rating:6.9 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:690,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:7,  saves:44, tackles:0,  passes:820,  rating:8.4 },
          { id:691,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:42, passes:960,  rating:8.1 },
          { id:692,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:840,  rating:7.7 },
          { id:693,name:"Dante",                     pos:"CB", nationality:"Brazil",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:760,  rating:7.4 },
          { id:694,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:36, passes:840,  rating:8.0 },
          { id:695,name:"Bastian Schweinsteiger",    pos:"MID", nationality:"Germany",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:46, passes:1180, rating:8.1 },
          { id:696,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:4,  goals:0, assists:1, cs:0,  saves:0,  tackles:18, passes:540,  rating:7.5 },
          { id:697,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:12, goals:7, assists:6, cs:0,  saves:0,  tackles:20, passes:820,  rating:8.8 },
          { id:698,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:10, goals:7, assists:4, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.6 },
          { id:699,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:16, passes:520,  rating:8.1 },
          { id:700,name:"Robert Lewandowski",        pos:"ST", nationality:"Poland",       apps:12, goals:9, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.7 },
          { id:701,name:"Mario Mandžukić",           pos:"ST", nationality:"Croatia",      apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:220,  rating:7.6 },
          { id:702,name:"Xherdan Shaqiri",           pos:"RW", nationality:"Switzerland",  apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:300,  rating:7.5 }
        ]
      },
      {
        team: "Monaco",
        players: [
          { id:703,name:"Danijel Subašić",           pos:"GK",  nationality:"Croatia",      apps:10, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:500,  rating:7.4 },
          { id:704,name:"Fabinho",                   pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:2, cs:4,  saves:0,  tackles:46, passes:740,  rating:7.7 },
          { id:705,name:"Aymen Abdennour",           pos:"CB", nationality:"Tunisia",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:580,  rating:7.1 },
          { id:706,name:"Ricardo Carvalho",          pos:"CB", nationality:"Portugal",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:580,  rating:7.2 },
          { id:707,name:"Elderson",                  pos:"CB", nationality:"Netherlands",  apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:6.9 },
          { id:708,name:"Joao Moutinho",             pos:"MID", nationality:"Portugal",     apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:40, passes:980,  rating:7.7 },
          { id:709,name:"Yannick Ferreira-Carrasco",  pos:"ST", nationality:"Belgium",     apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.5 },
          { id:710,name:"Dimitar Berbatov",          pos:"ST", nationality:"Bulgaria",     apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:6,  passes:240,  rating:7.5 },
          { id:711,name:"Radamel Falcao",            pos:"ST", nationality:"Colombia",     apps:5,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.8 },
          { id:712,name:"Anthony Martial",           pos:"ST", nationality:"France",       apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.7 },
          { id:713,name:"Jeremy Toulalan",           pos:"MID", nationality:"France",       apps:9,  goals:0, assists:1, cs:0,  saves:0,  tackles:52, passes:860,  rating:7.3 },
          { id:714,name:"Layvin Kurzawa",            pos:"LB", nationality:"France",       apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.1 },
          { id:715,name:"Geoffrey Kondogbia",        pos:"MID", nationality:"France",       apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:44, passes:680,  rating:7.3 }
        ]
      },
      {
        team: "Bayer Leverkusen",
        players: [
          { id:1925, name:"Bernd Leno",               pos:"GK",  nationality:"Germany",     apps:10, goals:0, assists:0, cs:3,  saves:44, tackles:0,  passes:580,  rating:7.1 },
          { id:1926, name:"Roberto Hilbert",          pos:"RB", nationality:"Germany",     apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:480,  rating:7.0 },
          { id:1927, name:"Ömer Toprak",              pos:"CB", nationality:"Turkey",      apps:10, goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:560,  rating:7.1 },
          { id:1928, name:"Kyriakos Papadopoulos",    pos:"CB", nationality:"Greece",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:480,  rating:6.9 },
          { id:1929, name:"Wendell",                  pos:"LB", nationality:"Brazil",      apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1930, name:"Simon Rolfes",             pos:"MID", nationality:"Germany",     apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:700,  rating:7.2 },
          { id:1931, name:"Lars Bender",              pos:"MID", nationality:"Germany",     apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:48, passes:680,  rating:7.3 },
          { id:1932, name:"Sidney Sam",               pos:"RW", nationality:"Germany",     apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.2 },
          { id:1933, name:"Karim Bellarabi",          pos:"RW", nationality:"Germany",     apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:340,  rating:7.3 },
          { id:1934, name:"Heung-min Son",            pos:"LW", nationality:"South Korea", apps:10, goals:7, assists:3, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.7 },
          { id:1935, name:"Stefan Kießling",          pos:"ST", nationality:"Germany",     apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:1936, name:"Gonzalo Castro",           pos:"MID", nationality:"Germany",     apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:32, passes:520,  rating:7.1 },
          { id:1937, name:"Philipp Wollscheid",       pos:"CB", nationality:"Germany",     apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:380,  rating:6.9 }
        ]
      },
      {
        team: "FC Porto",
        players: [
          { id:1938, name:"Fabiano",                  pos:"GK",  nationality:"Brazil",      apps:10, goals:0, assists:0, cs:4,  saves:46, tackles:0,  passes:520,  rating:7.2 },
          { id:1939, name:"Danilo",                   pos:"RB", nationality:"Brazil",      apps:10, goals:1, assists:2, cs:3,  saves:0,  tackles:30, passes:560,  rating:7.3 },
          { id:1940, name:"Martins Indi",             pos:"CB", nationality:"Netherlands", apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:520,  rating:7.0 },
          { id:1941, name:"Maicon",                   pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:500,  rating:6.9 },
          { id:1942, name:"Alex Sandro",              pos:"LB", nationality:"Brazil",      apps:10, goals:1, assists:2, cs:3,  saves:0,  tackles:28, passes:560,  rating:7.3 },
          { id:1943, name:"Héctor Herrera",           pos:"MID", nationality:"Mexico",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:680,  rating:7.4 },
          { id:1944, name:"Oliver Torres",            pos:"MID", nationality:"Spain",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:26, passes:600,  rating:7.2 },
          { id:1945, name:"Ruben Neves",              pos:"MID", nationality:"Portugal",    apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.3 },
          { id:1946, name:"Jackson Martínez",         pos:"ST", nationality:"Colombia",    apps:10, goals:8, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.9 },
          { id:1947, name:"Yacine Brahimi",           pos:"LW", nationality:"Algeria",     apps:10, goals:5, assists:5, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.7 },
          { id:1948, name:"Óliver Torres",            pos:"ST", nationality:"Spain",       apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.1 },
          { id:1949, name:"Quintero",                 pos:"MID", nationality:"Colombia",    apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:20, passes:380,  rating:7.0 },
          { id:1950, name:"Aboubakar",                pos:"ST", nationality:"Cameroon",    apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.2 }
        ]
      }
    ]
  },
  {
    season: "2015-16",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:716,name:"Keylor Navas",              pos:"GK",  nationality:"Costa Rica",   apps:13, goals:0, assists:0, cs:7,  saves:54, tackles:0,  passes:680,  rating:7.9 },
          { id:717,name:"Dani Carvajal",             pos:"RB", nationality:"Spain",        apps:12, goals:1, assists:2, cs:5,  saves:0,  tackles:40, passes:820,  rating:7.8 },
          { id:718,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:13, goals:3, assists:1, cs:6,  saves:0,  tackles:56, passes:1020, rating:8.6 },
          { id:719,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:46, passes:880,  rating:7.9 },
          { id:720,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:13, goals:1, assists:4, cs:5,  saves:0,  tackles:36, passes:880,  rating:8.0 },
          { id:721,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:13, goals:2, assists:6, cs:0,  saves:0,  tackles:42, passes:1700, rating:8.8 },
          { id:722,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:13, goals:2, assists:5, cs:0,  saves:0,  tackles:46, passes:1500, rating:8.7 },
          { id:723,name:"Casemiro",                  pos:"MID", nationality:"Brazil",       apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:62, passes:1120, rating:7.9 },
          { id:724,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:16,assists:2, cs:0,  saves:0,  tackles:14, passes:580,  rating:9.3 },
          { id:725,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:13, goals:8, assists:5, cs:0,  saves:0,  tackles:14, passes:520,  rating:8.5 },
          { id:726,name:"Gareth Bale",               pos:"RW", nationality:"Wales",        apps:11, goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:480,  rating:8.2 },
          { id:727,name:"Isco",                      pos:"MID", nationality:"Spain",        apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:24, passes:840,  rating:7.8 },
          { id:728,name:"James Rodríguez",           pos:"MID", nationality:"Colombia",     apps:7,  goals:2, assists:4, cs:0,  saves:0,  tackles:20, passes:620,  rating:7.7 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:729,name:"Jan Oblak",                 pos:"GK",  nationality:"Slovenia",     apps:13, goals:0, assists:0, cs:9,  saves:66, tackles:0,  passes:660,  rating:8.4 },
          { id:730,name:"Juanfran",                  pos:"CB", nationality:"Spain",        apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:44, passes:740,  rating:7.6 },
          { id:731,name:"Diego Godín",               pos:"CB", nationality:"Uruguay",      apps:13, goals:1, assists:0, cs:8,  saves:0,  tackles:58, passes:880,  rating:8.3 },
          { id:732,name:"José Giménez",              pos:"CB", nationality:"Uruguay",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:760,  rating:7.8 },
          { id:733,name:"Filipe Luís",               pos:"LB", nationality:"Brazil",       apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:40, passes:740,  rating:7.6 },
          { id:734,name:"Gabi",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:4, cs:0,  saves:0,  tackles:58, passes:1100, rating:7.9 },
          { id:735,name:"Koke",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:5, cs:0,  saves:0,  tackles:40, passes:1300, rating:8.1 },
          { id:736,name:"Saúl Ñíguez",               pos:"MID", nationality:"Spain",        apps:11, goals:4, assists:2, cs:0,  saves:0,  tackles:44, passes:900,  rating:7.9 },
          { id:737,name:"Antoine Griezmann",         pos:"ST", nationality:"France",       apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:20, passes:620,  rating:8.8 },
          { id:738,name:"Fernando Torres",           pos:"ST", nationality:"Spain",        apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.6 },
          { id:739,name:"Ángel Correa",              pos:"ST", nationality:"Argentina",    apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:16, passes:360,  rating:7.4 },
          { id:740,name:"Stefan Savić",              pos:"CB", nationality:"Montenegro",   apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:580,  rating:7.2 },
          { id:741,name:"Thomas Partey",             pos:"MID", nationality:"Ghana",        apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:46, passes:620,  rating:7.3 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:742,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:7,  saves:42, tackles:0,  passes:840,  rating:8.4 },
          { id:743,name:"Philipp Lahm",              pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:40, passes:960,  rating:8.0 },
          { id:744,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:840,  rating:7.7 },
          { id:745,name:"Javi Martínez",             pos:"CB", nationality:"Spain",        apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:700,  rating:7.3 },
          { id:746,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:12, goals:2, assists:3, cs:5,  saves:0,  tackles:36, passes:860,  rating:8.1 },
          { id:747,name:"Thiago Alcântara",          pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:38, passes:1240, rating:8.2 },
          { id:748,name:"Xabi Alonso",               pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:40, passes:1380, rating:8.2 },
          { id:749,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:12, goals:6, assists:7, cs:0,  saves:0,  tackles:20, passes:820,  rating:8.7 },
          { id:750,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:14, passes:540,  rating:8.4 },
          { id:751,name:"Robert Lewandowski",        pos:"ST", nationality:"Poland",       apps:12, goals:9, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.8 },
          { id:752,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:14, passes:480,  rating:7.9 },
          { id:753,name:"Douglas Costa",             pos:"ST", nationality:"Brazil",       apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:14, passes:420,  rating:7.9 },
          { id:754,name:"Kingsley Coman",            pos:"LW", nationality:"France",       apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.8 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:755,name:"Joe Hart",                  pos:"GK",  nationality:"England",      apps:10, goals:0, assists:0, cs:4,  saves:42, tackles:0,  passes:540,  rating:7.1 },
          { id:756,name:"Pablo Zabaleta",            pos:"CB", nationality:"Argentina",    apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:580,  rating:7.1 },
          { id:757,name:"Vincent Kompany",           pos:"CB", nationality:"Belgium",      apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:42, passes:660,  rating:7.5 },
          { id:758,name:"Nicolás Otamendi",          pos:"CB", nationality:"Argentina",    apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:44, passes:680,  rating:7.2 },
          { id:759,name:"Gaël Clichy",               pos:"CB", nationality:"France",       apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:480,  rating:6.9 },
          { id:760,name:"Kevin De Bruyne",           pos:"MID", nationality:"Belgium",      apps:10, goals:4, assists:7, cs:0,  saves:0,  tackles:30, passes:1160, rating:8.8 },
          { id:761,name:"Fernandinho",               pos:"MID", nationality:"Brazil",       apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:56, passes:980,  rating:7.6 },
          { id:762,name:"David Silva",               pos:"MID", nationality:"Spain",        apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:22, passes:1040, rating:8.1 },
          { id:763,name:"Raheem Sterling",           pos:"ST", nationality:"England",      apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:18, passes:560,  rating:7.8 },
          { id:764,name:"Sergio Agüero",             pos:"ST", nationality:"Argentina",    apps:9,  goals:7, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:8.5 },
          { id:765,name:"Jesús Navas",               pos:"ST", nationality:"Spain",        apps:8,  goals:1, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.3 },
          { id:766,name:"Yaya Touré",                pos:"MID", nationality:"Ivory Coast",  apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:44, passes:780,  rating:7.7 },
          { id:767,name:"Wilfried Bony",             pos:"ST", nationality:"Ivory Coast",  apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 }
        ]
      },
      {
        team: "Villarreal",
        players: [
          { id:768,name:"Sergio Asenjo",             pos:"GK",  nationality:"Spain",        apps:9,  goals:0, assists:0, cs:4,  saves:38, tackles:0,  passes:460,  rating:7.2 },
          { id:769,name:"Mario Gaspar",              pos:"CB", nationality:"Spain",        apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:540,  rating:7.1 },
          { id:770,name:"Víctor Ruiz",               pos:"CB", nationality:"Spain",        apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:520,  rating:7.0 },
          { id:771,name:"Mateo Musacchio",           pos:"CB", nationality:"Argentina",    apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:500,  rating:7.0 },
          { id:772,name:"Jaume Costa",               pos:"CB", nationality:"Spain",        apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:440,  rating:6.9 },
          { id:773,name:"Bruno Soriano",             pos:"MID", nationality:"Spain",        apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:880,  rating:7.5 },
          { id:774,name:"Manu Trigueros",            pos:"MID", nationality:"Spain",        apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.3 },
          { id:775,name:"Denis Cheryshev",           pos:"ST", nationality:"Russia",       apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.4 },
          { id:776,name:"Roberto Soldado",           pos:"ST", nationality:"Spain",        apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.4 },
          { id:777,name:"Cédric Bakambu",            pos:"ST", nationality:"Congo DR",     apps:8,  goals:4, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:778,name:"Samuel Castillejo",         pos:"ST", nationality:"Spain",        apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.1 },
          { id:779,name:"Léo Baptistão",             pos:"ST", nationality:"Brazil",       apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.0 },
          { id:780,name:"Eric Bailly",               pos:"CB", nationality:"Ivory Coast",  apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:30, passes:380,  rating:7.0 }
        ]
      },
      {
        team: "Benfica",
        players: [
          { id:1951, name:"Ederson",                  pos:"GK",  nationality:"Brazil",      apps:10, goals:0, assists:0, cs:4,  saves:42, tackles:0,  passes:560,  rating:7.3 },
          { id:1952, name:"Nélson Semedo",            pos:"RB", nationality:"Portugal",    apps:10, goals:0, assists:2, cs:3,  saves:0,  tackles:30, passes:560,  rating:7.2 },
          { id:1953, name:"Luisão",                   pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:520,  rating:7.1 },
          { id:1954, name:"Jardel",                   pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:500,  rating:7.0 },
          { id:1955, name:"Eliseu",                   pos:"LB", nationality:"Portugal",    apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:540,  rating:7.1 },
          { id:1956, name:"Renato Sanches",           pos:"MID", nationality:"Portugal",    apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.7 },
          { id:1957, name:"Pizzi",                    pos:"MID", nationality:"Portugal",    apps:10, goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:720,  rating:7.6 },
          { id:1958, name:"Adrien Silva",             pos:"MID", nationality:"Portugal",    apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:680,  rating:7.4 },
          { id:1959, name:"Jonas",                    pos:"ST", nationality:"Brazil",      apps:10, goals:8, assists:4, cs:0,  saves:0,  tackles:10, passes:300,  rating:8.0 },
          { id:1960, name:"Kostas Mitroglou",         pos:"ST", nationality:"Greece",      apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.5 },
          { id:1961, name:"Gonçalo Guedes",           pos:"LW", nationality:"Portugal",    apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.4 },
          { id:1962, name:"Nico Gaitán",              pos:"LW", nationality:"Argentina",   apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.6 },
          { id:1963, name:"Talisca",                  pos:"MID", nationality:"Brazil",      apps:7,  goals:4, assists:2, cs:0,  saves:0,  tackles:18, passes:380,  rating:7.4 }
        ]
      },
      {
        team: "VfL Wolfsburg",
        players: [
          { id:1964, name:"Diego Benaglio",           pos:"GK",  nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:2,  saves:36, tackles:0,  passes:460,  rating:6.9 },
          { id:1965, name:"Timm Klose",               pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:460,  rating:6.9 },
          { id:1966, name:"Naldo",                    pos:"CB", nationality:"Brazil",      apps:9,  goals:1, assists:0, cs:2,  saves:0,  tackles:38, passes:520,  rating:7.1 },
          { id:1967, name:"Ricardo Rodríguez",        pos:"LB", nationality:"Switzerland", apps:9,  goals:0, assists:2, cs:3,  saves:0,  tackles:30, passes:560,  rating:7.2 },
          { id:1968, name:"Marcel Schäfer",           pos:"LB", nationality:"Germany",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:440,  rating:6.9 },
          { id:1969, name:"Maximilian Arnold",        pos:"MID", nationality:"Germany",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:38, passes:580,  rating:7.1 },
          { id:1970, name:"Josuha Guilavogui",        pos:"MID", nationality:"France",      apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:44, passes:560,  rating:7.1 },
          { id:1971, name:"Ivan Perišić",             pos:"LW", nationality:"Croatia",     apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:14, passes:400,  rating:7.7 },
          { id:1972, name:"André Schürrle",           pos:"ST", nationality:"Germany",     apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.4 },
          { id:1973, name:"Kevin De Bruyne",          pos:"MID", nationality:"Belgium",     apps:8,  goals:3, assists:6, cs:0,  saves:0,  tackles:22, passes:700,  rating:8.0 },
          { id:1974, name:"Bas Dost",                 pos:"ST", nationality:"Netherlands", apps:8,  goals:5, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.4 },
          { id:1975, name:"Daniel Caligiuri",         pos:"MID", nationality:"Germany",     apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:18, passes:360,  rating:7.0 },
          { id:1976, name:"Luiz Gustavo",             pos:"MID", nationality:"Brazil",      apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:46, passes:620,  rating:7.2 }
        ]
      }
    ]
  },
  {
    season: "2016-17",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:781,name:"Keylor Navas",              pos:"GK",  nationality:"Costa Rica",   apps:13, goals:0, assists:0, cs:7,  saves:52, tackles:0,  passes:680,  rating:8.0 },
          { id:782,name:"Dani Carvajal",             pos:"RB", nationality:"Spain",        apps:12, goals:1, assists:2, cs:6,  saves:0,  tackles:40, passes:820,  rating:7.9 },
          { id:783,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:13, goals:3, assists:1, cs:6,  saves:0,  tackles:56, passes:1020, rating:8.6 },
          { id:784,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:12, goals:1, assists:0, cs:7,  saves:0,  tackles:48, passes:900,  rating:8.1 },
          { id:785,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:13, goals:2, assists:5, cs:6,  saves:0,  tackles:34, passes:880,  rating:8.1 },
          { id:786,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:13, goals:2, assists:7, cs:0,  saves:0,  tackles:40, passes:1740, rating:8.9 },
          { id:787,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:13, goals:3, assists:6, cs:0,  saves:0,  tackles:46, passes:1520, rating:8.9 },
          { id:788,name:"Casemiro",                  pos:"MID", nationality:"Brazil",       apps:12, goals:2, assists:2, cs:0,  saves:0,  tackles:64, passes:1140, rating:8.1 },
          { id:789,name:"Isco",                      pos:"MID", nationality:"Spain",        apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:24, passes:960,  rating:8.1 },
          { id:790,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:12,assists:3, cs:0,  saves:0,  tackles:14, passes:580,  rating:9.2 },
          { id:791,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:12, passes:500,  rating:8.3 },
          { id:792,name:"Gareth Bale",               pos:"RW", nationality:"Wales",        apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.0 },
          { id:793,name:"Marco Asensio",             pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 }
        ]
      },
      {
        team: "Juventus",
        players: [
          { id:794,name:"Gianluigi Buffon",          pos:"GK",  nationality:"Italy",        apps:13, goals:0, assists:0, cs:8,  saves:44, tackles:0,  passes:580,  rating:8.3 },
          { id:795,name:"Andrea Barzagli",           pos:"CB", nationality:"Italy",        apps:11, goals:0, assists:0, cs:7,  saves:0,  tackles:42, passes:720,  rating:7.8 },
          { id:796,name:"Leonardo Bonucci",          pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:1, cs:7,  saves:0,  tackles:46, passes:900,  rating:8.2 },
          { id:797,name:"Giorgio Chiellini",         pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:0, cs:7,  saves:0,  tackles:50, passes:780,  rating:8.2 },
          { id:798,name:"Alex Sandro",               pos:"LB", nationality:"Brazil",       apps:12, goals:1, assists:3, cs:6,  saves:0,  tackles:36, passes:700,  rating:7.8 },
          { id:799,name:"Claudio Marchisio",         pos:"MID", nationality:"Italy",        apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:44, passes:1000, rating:7.7 },
          { id:800,name:"Sami Khedira",              pos:"MID", nationality:"Germany",      apps:12, goals:4, assists:3, cs:0,  saves:0,  tackles:52, passes:960,  rating:8.0 },
          { id:801,name:"Miralem Pjanić",            pos:"MID", nationality:"Bosnia-Herz.", apps:13, goals:3, assists:5, cs:0,  saves:0,  tackles:38, passes:1380, rating:8.2 },
          { id:802,name:"Paulo Dybala",              pos:"ST", nationality:"Argentina",    apps:13, goals:9, assists:4, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.7 },
          { id:803,name:"Gonzalo Higuaín",           pos:"ST", nationality:"Argentina",    apps:13, goals:8, assists:3, cs:0,  saves:0,  tackles:10, passes:400,  rating:8.4 },
          { id:804,name:"Mario Mandžukić",           pos:"ST", nationality:"Croatia",      apps:12, goals:6, assists:3, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.9 },
          { id:805,name:"Juan Cuadrado",             pos:"ST", nationality:"Colombia",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:16, passes:400,  rating:7.5 },
          { id:806,name:"Dani Alves",                pos:"RB", nationality:"Brazil",       apps:10, goals:1, assists:3, cs:4,  saves:0,  tackles:36, passes:720,  rating:7.7 }
        ]
      },
      {
        team: "Monaco",
        players: [
          { id:807,name:"Danijel Subašić",           pos:"GK",  nationality:"Croatia",      apps:13, goals:0, assists:0, cs:6,  saves:56, tackles:0,  passes:560,  rating:7.6 },
          { id:808,name:"Djibril Sidibé",            pos:"CB", nationality:"France",       apps:12, goals:1, assists:3, cs:5,  saves:0,  tackles:40, passes:700,  rating:7.7 },
          { id:809,name:"Kamil Glik",                pos:"CB", nationality:"Poland",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:46, passes:680,  rating:7.7 },
          { id:810,name:"Jemerson",                  pos:"CB", nationality:"Brazil",       apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:620,  rating:7.3 },
          { id:811,name:"Benjamin Mendy",            pos:"LB", nationality:"France",       apps:12, goals:0, assists:4, cs:5,  saves:0,  tackles:32, passes:660,  rating:7.7 },
          { id:812,name:"Tiémoué Bakayoko",          pos:"MID", nationality:"France",       apps:12, goals:1, assists:2, cs:0,  saves:0,  tackles:54, passes:900,  rating:7.6 },
          { id:813,name:"Fabinho",                   pos:"MID", nationality:"Brazil",       apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:52, passes:1000, rating:8.0 },
          { id:814,name:"Thomas Lemar",              pos:"MID", nationality:"France",       apps:12, goals:4, assists:6, cs:0,  saves:0,  tackles:24, passes:720,  rating:8.1 },
          { id:815,name:"Bernardo Silva",            pos:"ST", nationality:"Portugal",     apps:13, goals:6, assists:7, cs:0,  saves:0,  tackles:20, passes:720,  rating:8.4 },
          { id:816,name:"Kylian Mbappé",             pos:"ST", nationality:"France",       apps:13, goals:8, assists:5, cs:0,  saves:0,  tackles:16, passes:480,  rating:8.8 },
          { id:817,name:"Radamel Falcao",            pos:"ST", nationality:"Colombia",     apps:12, goals:7, assists:3, cs:0,  saves:0,  tackles:8,  passes:320,  rating:8.2 },
          { id:818,name:"Valère Germain",            pos:"ST", nationality:"France",       apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.3 },
          { id:819,name:"João Moutinho",             pos:"MID", nationality:"Portugal",     apps:10, goals:1, assists:4, cs:0,  saves:0,  tackles:38, passes:940,  rating:7.8 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:820,name:"Marc-André ter Stegen",     pos:"GK",  nationality:"Germany",      apps:12, goals:0, assists:0, cs:7,  saves:46, tackles:0,  passes:720,  rating:8.2 },
          { id:821,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:44, passes:820,  rating:8.0 },
          { id:822,name:"Samuel Umtiti",             pos:"CB", nationality:"France",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:40, passes:740,  rating:7.6 },
          { id:823,name:"Jordi Alba",                pos:"LB", nationality:"Spain",        apps:11, goals:1, assists:4, cs:5,  saves:0,  tackles:32, passes:760,  rating:7.9 },
          { id:824,name:"Sergi Roberto",             pos:"RB", nationality:"Spain",        apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:34, passes:720,  rating:7.6 },
          { id:825,name:"Andrés Iniesta",            pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:5, cs:0,  saves:0,  tackles:24, passes:1160, rating:8.5 },
          { id:826,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:11, goals:0, assists:3, cs:0,  saves:0,  tackles:52, passes:1260, rating:8.1 },
          { id:827,name:"Ivan Rakitić",              pos:"MID", nationality:"Croatia",      apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:34, passes:1080, rating:8.1 },
          { id:828,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:12, goals:11,assists:6, cs:0,  saves:0,  tackles:16, passes:860,  rating:9.3 },
          { id:829,name:"Neymar",                    pos:"ST", nationality:"Brazil",       apps:12, goals:8, assists:6, cs:0,  saves:0,  tackles:16, passes:620,  rating:9.0 },
          { id:830,name:"Luis Suárez",               pos:"ST", nationality:"Uruguay",      apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:12, passes:440,  rating:8.7 },
          { id:831,name:"André Gomes",               pos:"MID", nationality:"Portugal",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:720,  rating:7.3 },
          { id:832,name:"Rafinha",                   pos:"MID", nationality:"Spain",        apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:22, passes:520,  rating:7.3 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:833,name:"Jan Oblak",                 pos:"GK",  nationality:"Slovenia",     apps:13, goals:0, assists:0, cs:8,  saves:58, tackles:0,  passes:660,  rating:8.3 },
          { id:834,name:"Juanfran",                  pos:"CB", nationality:"Spain",        apps:12, goals:0, assists:1, cs:6,  saves:0,  tackles:42, passes:720,  rating:7.6 },
          { id:835,name:"Diego Godín",               pos:"CB", nationality:"Uruguay",      apps:13, goals:1, assists:0, cs:7,  saves:0,  tackles:56, passes:860,  rating:8.3 },
          { id:836,name:"José Giménez",              pos:"CB", nationality:"Uruguay",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:740,  rating:7.7 },
          { id:837,name:"Filipe Luís",               pos:"LB", nationality:"Brazil",       apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:38, passes:700,  rating:7.5 },
          { id:838,name:"Saúl Ñíguez",               pos:"MID", nationality:"Spain",        apps:12, goals:4, assists:3, cs:0,  saves:0,  tackles:46, passes:1000, rating:8.0 },
          { id:839,name:"Koke",                      pos:"MID", nationality:"Spain",        apps:13, goals:2, assists:5, cs:0,  saves:0,  tackles:40, passes:1280, rating:8.1 },
          { id:840,name:"Gabi",                      pos:"MID", nationality:"Spain",        apps:12, goals:1, assists:3, cs:0,  saves:0,  tackles:58, passes:1060, rating:7.8 },
          { id:841,name:"Antoine Griezmann",         pos:"ST", nationality:"France",       apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:18, passes:600,  rating:8.8 },
          { id:842,name:"Kevin Gameiro",             pos:"ST", nationality:"France",       apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.7 },
          { id:843,name:"Yannick Ferreira-Carrasco", pos:"ST", nationality:"Belgium",      apps:11, goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.7 },
          { id:844,name:"Fernando Torres",           pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.3 },
          { id:845,name:"Thomas Partey",             pos:"MID", nationality:"Ghana",        apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:48, passes:660,  rating:7.5 }
        ]
      },
      {
        team: "Leicester City",
        players: [
          { id:1977, name:"Kasper Schmeichel",        pos:"GK",  nationality:"Denmark",     apps:8,  goals:0, assists:0, cs:2,  saves:38, tackles:0,  passes:460,  rating:7.1 },
          { id:1978, name:"Danny Simpson",            pos:"RB", nationality:"England",     apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:26, passes:380,  rating:6.9 },
          { id:1979, name:"Wes Morgan",               pos:"CB", nationality:"Jamaica",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:420,  rating:7.0 },
          { id:1980, name:"Robert Huth",              pos:"CB", nationality:"Germany",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:400,  rating:7.0 },
          { id:1981, name:"Christian Fuchs",          pos:"LB", nationality:"Austria",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:24, passes:400,  rating:7.0 },
          { id:1982, name:"Riyad Mahrez",             pos:"RW", nationality:"Algeria",     apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.7 },
          { id:1983, name:"N'Golo Kanté",             pos:"MID", nationality:"France",      apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:600,  rating:7.8 },
          { id:1984, name:"Danny Drinkwater",         pos:"MID", nationality:"England",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:40, passes:580,  rating:7.2 },
          { id:1985, name:"Marc Albrighton",          pos:"MID", nationality:"England",     apps:7,  goals:1, assists:3, cs:0,  saves:0,  tackles:20, passes:380,  rating:7.2 },
          { id:1986, name:"Jamie Vardy",              pos:"ST", nationality:"England",     apps:8,  goals:7, assists:2, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.8 },
          { id:1987, name:"Shinji Okazaki",           pos:"ST", nationality:"Japan",       apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:220,  rating:7.2 },
          { id:1988, name:"Andy King",                pos:"MID", nationality:"Wales",       apps:5,  goals:1, assists:1, cs:0,  saves:0,  tackles:24, passes:380,  rating:7.0 },
          { id:1989, name:"Ahmed Musa",               pos:"ST", nationality:"Nigeria",     apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:7.0 }
        ]
      },
      {
        team: "FC Porto",
        players: [
          { id:1990, name:"Iker Casillas",            pos:"GK",  nationality:"Spain",       apps:10, goals:0, assists:0, cs:4,  saves:44, tackles:0,  passes:540,  rating:7.3 },
          { id:1991, name:"Maxi Pereira",             pos:"RB", nationality:"Uruguay",     apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1992, name:"Felipe",                   pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:520,  rating:7.0 },
          { id:1993, name:"Marcano",                  pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:500,  rating:7.0 },
          { id:1994, name:"Alex Telles",              pos:"LB", nationality:"Brazil",      apps:10, goals:1, assists:3, cs:3,  saves:0,  tackles:26, passes:560,  rating:7.3 },
          { id:1995, name:"Héctor Herrera",           pos:"MID", nationality:"Mexico",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:700,  rating:7.4 },
          { id:1996, name:"Danilo Pereira",           pos:"MID", nationality:"Portugal",    apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:680,  rating:7.3 },
          { id:1997, name:"André André",              pos:"MID", nationality:"Portugal",    apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:580,  rating:7.1 },
          { id:1998, name:"Brahimi",                  pos:"LW", nationality:"Algeria",     apps:10, goals:5, assists:5, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.7 },
          { id:1999, name:"André Silva",              pos:"ST", nationality:"Portugal",    apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:2000, name:"Otávio",                   pos:"MID", nationality:"Brazil",      apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:480,  rating:7.3 },
          { id:2001, name:"Corona",                   pos:"RW", nationality:"Mexico",      apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.4 },
          { id:2002, name:"Soares",                   pos:"ST", nationality:"Brazil",      apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.3 }
        ]
      }
    ]
  },
  {
    season: "2017-18",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:846,name:"Keylor Navas",              pos:"GK",  nationality:"Costa Rica",   apps:13, goals:0, assists:0, cs:7,  saves:50, tackles:0,  passes:680,  rating:8.1 },
          { id:847,name:"Dani Carvajal",             pos:"RB", nationality:"Spain",        apps:12, goals:1, assists:2, cs:6,  saves:0,  tackles:40, passes:820,  rating:7.9 },
          { id:848,name:"Sergio Ramos",              pos:"CB", nationality:"Spain",        apps:13, goals:3, assists:1, cs:6,  saves:0,  tackles:54, passes:1020, rating:8.6 },
          { id:849,name:"Raphaël Varane",            pos:"CB", nationality:"France",       apps:12, goals:1, assists:0, cs:7,  saves:0,  tackles:48, passes:920,  rating:8.2 },
          { id:850,name:"Marcelo",                   pos:"LB", nationality:"Brazil",       apps:12, goals:1, assists:4, cs:5,  saves:0,  tackles:32, passes:860,  rating:8.1 },
          { id:851,name:"Toni Kroos",                pos:"MID", nationality:"Germany",      apps:13, goals:2, assists:7, cs:0,  saves:0,  tackles:40, passes:1760, rating:8.9 },
          { id:852,name:"Luka Modrić",               pos:"MID", nationality:"Croatia",      apps:13, goals:3, assists:6, cs:0,  saves:0,  tackles:46, passes:1560, rating:9.0 },
          { id:853,name:"Casemiro",                  pos:"MID", nationality:"Brazil",       apps:12, goals:2, assists:2, cs:0,  saves:0,  tackles:64, passes:1160, rating:8.2 },
          { id:854,name:"Isco",                      pos:"MID", nationality:"Spain",        apps:11, goals:3, assists:6, cs:0,  saves:0,  tackles:22, passes:980,  rating:8.2 },
          { id:855,name:"Cristiano Ronaldo",         pos:"ST", nationality:"Portugal",     apps:13, goals:15,assists:2, cs:0,  saves:0,  tackles:14, passes:600,  rating:9.3 },
          { id:856,name:"Karim Benzema",             pos:"ST", nationality:"France",       apps:12, goals:8, assists:4, cs:0,  saves:0,  tackles:12, passes:500,  rating:8.4 },
          { id:857,name:"Gareth Bale",               pos:"RW", nationality:"Wales",        apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:12, passes:400,  rating:7.9 },
          { id:858,name:"Marco Asensio",             pos:"ST", nationality:"Spain",        apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 }
        ]
      },
      {
        team: "Liverpool",
        players: [
          { id:859,name:"Loris Karius",              pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:4,  saves:44, tackles:0,  passes:600,  rating:6.4 },
          { id:860,name:"Trent Alexander-Arnold",    pos:"RB", nationality:"England",      apps:12, goals:1, assists:3, cs:4,  saves:0,  tackles:38, passes:860,  rating:7.7 },
          { id:861,name:"Virgil van Dijk",           pos:"CB", nationality:"Netherlands",  apps:8,  goals:1, assists:0, cs:4,  saves:0,  tackles:44, passes:900,  rating:8.0 },
          { id:862,name:"Dejan Lovren",              pos:"CB", nationality:"Croatia",      apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:720,  rating:7.2 },
          { id:863,name:"Andrew Robertson",         pos:"LB", nationality:"Scotland",     apps:11, goals:0, assists:4, cs:4,  saves:0,  tackles:36, passes:820,  rating:7.9 },
          { id:864,name:"Jordan Henderson",          pos:"MID", nationality:"England",      apps:12, goals:1, assists:3, cs:0,  saves:0,  tackles:48, passes:1140, rating:7.7 },
          { id:865,name:"James Milner",              pos:"MID", nationality:"England",      apps:11, goals:1, assists:3, cs:0,  saves:0,  tackles:36, passes:900,  rating:7.5 },
          { id:866,name:"Georginio Wijnaldum",       pos:"MID", nationality:"Netherlands",  apps:13, goals:3, assists:2, cs:0,  saves:0,  tackles:40, passes:1080, rating:7.8 },
          { id:867,name:"Mohamed Salah",             pos:"RW", nationality:"Egypt",        apps:13, goals:10,assists:4, cs:0,  saves:0,  tackles:18, passes:600,  rating:9.1 },
          { id:868,name:"Roberto Firmino",           pos:"ST", nationality:"Brazil",       apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:20, passes:640,  rating:8.4 },
          { id:869,name:"Sadio Mané",                pos:"LW", nationality:"Senegal",      apps:13, goals:8, assists:3, cs:0,  saves:0,  tackles:18, passes:540,  rating:8.5 },
          { id:870,name:"Alex Oxlade-Chamberlain",   pos:"MID", nationality:"England",      apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:28, passes:580,  rating:7.6 },
          { id:871,name:"Emre Can",                  pos:"MID", nationality:"Germany",      apps:8,  goals:2, assists:1, cs:0,  saves:0,  tackles:42, passes:660,  rating:7.4 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:872,name:"Sven Ulreich",              pos:"GK",  nationality:"Germany",      apps:8,  goals:0, assists:0, cs:4,  saves:34, tackles:0,  passes:620,  rating:7.0 },
          { id:873,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:5,  goals:0, assists:0, cs:3,  saves:22, tackles:0,  passes:480,  rating:7.8 },
          { id:874,name:"Joshua Kimmich",            pos:"RB", nationality:"Germany",      apps:12, goals:2, assists:4, cs:5,  saves:0,  tackles:46, passes:1040, rating:8.3 },
          { id:875,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:820,  rating:7.6 },
          { id:876,name:"Mats Hummels",              pos:"CB", nationality:"Germany",      apps:11, goals:1, assists:1, cs:5,  saves:0,  tackles:48, passes:920,  rating:7.9 },
          { id:877,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:36, passes:860,  rating:7.9 },
          { id:878,name:"Thiago Alcântara",          pos:"MID", nationality:"Spain",        apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:38, passes:1300, rating:8.3 },
          { id:879,name:"James Rodríguez",           pos:"MID", nationality:"Colombia",     apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:22, passes:840,  rating:8.0 },
          { id:880,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:12, goals:5, assists:6, cs:0,  saves:0,  tackles:20, passes:800,  rating:8.3 },
          { id:881,name:"Arjen Robben",              pos:"RW", nationality:"Netherlands",  apps:10, goals:6, assists:3, cs:0,  saves:0,  tackles:14, passes:520,  rating:8.2 },
          { id:882,name:"Robert Lewandowski",        pos:"ST", nationality:"Poland",       apps:12, goals:8, assists:3, cs:0,  saves:0,  tackles:8,  passes:320,  rating:8.6 },
          { id:883,name:"Franck Ribéry",             pos:"LW", nationality:"France",       apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:14, passes:460,  rating:7.9 },
          { id:884,name:"Kingsley Coman",            pos:"LW", nationality:"France",       apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.8 }
        ]
      },
      {
        team: "AS Roma",
        players: [
          { id:885,name:"Alisson Becker",            pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:52, tackles:0,  passes:700,  rating:8.3 },
          { id:886,name:"Alessandro Florenzi",       pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:2, cs:5,  saves:0,  tackles:38, passes:720,  rating:7.5 },
          { id:887,name:"Kostas Manolas",            pos:"CB", nationality:"Greece",       apps:12, goals:2, assists:0, cs:6,  saves:0,  tackles:52, passes:760,  rating:7.9 },
          { id:888,name:"Federico Fazio",            pos:"CB", nationality:"Argentina",    apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:44, passes:640,  rating:7.3 },
          { id:889,name:"Emerson Palmieri",          pos:"CB", nationality:"Italy",        apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:540,  rating:7.1 },
          { id:890,name:"Daniele De Rossi",          pos:"MID", nationality:"Italy",        apps:11, goals:2, assists:2, cs:0,  saves:0,  tackles:52, passes:960,  rating:7.7 },
          { id:891,name:"Radja Nainggolan",          pos:"MID", nationality:"Belgium",      apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:54, passes:1000, rating:8.1 },
          { id:892,name:"Lorenzo Pellegrini",        pos:"MID", nationality:"Italy",        apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:780,  rating:7.7 },
          { id:893,name:"Edin Džeko",                pos:"ST", nationality:"Bosnia-Herz.", apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:10, passes:380,  rating:8.3 },
          { id:894,name:"Stephan El Shaarawy",       pos:"ST", nationality:"Italy",        apps:11, goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.6 },
          { id:895,name:"Cengiz Ünder",              pos:"ST", nationality:"Turkey",       apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.7 },
          { id:896,name:"Diego Perotti",             pos:"ST", nationality:"Argentina",    apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.4 },
          { id:897,name:"Kevin Strootman",           pos:"MID", nationality:"Netherlands",  apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:38, passes:620,  rating:7.2 }
        ]
      },
      {
        team: "Sevilla",
        players: [
          { id:898,name:"Sergio Rico",               pos:"GK",  nationality:"Spain",        apps:10, goals:0, assists:0, cs:4,  saves:42, tackles:0,  passes:500,  rating:7.1 },
          { id:899,name:"Jesús Navas",               pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:2, cs:4,  saves:0,  tackles:34, passes:620,  rating:7.2 },
          { id:900,name:"Clément Lenglet",           pos:"CB", nationality:"France",       apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:620,  rating:7.3 },
          { id:901,name:"Simon Kjaer",               pos:"CB", nationality:"Denmark",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:560,  rating:7.0 },
          { id:902,name:"Sergio Escudero",           pos:"CB", nationality:"Spain",        apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:500,  rating:7.0 },
          { id:903,name:"Steven N'Zonzi",            pos:"MID", nationality:"France",       apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:56, passes:940,  rating:7.6 },
          { id:904,name:"Éver Banega",               pos:"MID", nationality:"Argentina",    apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:34, passes:1020, rating:7.9 },
          { id:905,name:"Pablo Sarabia",             pos:"MID", nationality:"Spain",        apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:26, passes:660,  rating:7.7 },
          { id:906,name:"Wissam Ben Yedder",         pos:"ST", nationality:"France",       apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.0 },
          { id:907,name:"Luis Muriel",               pos:"ST", nationality:"Colombia",     apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:908,name:"Joaquín Correa",            pos:"ST", nationality:"Argentina",    apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.4 },
          { id:909,name:"Ganso",                     pos:"MID", nationality:"Brazil",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:24, passes:580,  rating:7.1 },
          { id:910,name:"Michael Krohn-Dehli",       pos:"MID", nationality:"Denmark",      apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:22, passes:420,  rating:6.9 }
        ]
      },
      {
        team: "FC Porto",
        players: [
          { id:2003, name:"José Sá",                  pos:"GK",  nationality:"Portugal",    apps:9,  goals:0, assists:0, cs:3,  saves:40, tackles:0,  passes:500,  rating:7.0 },
          { id:2004, name:"Maxi Pereira",             pos:"RB", nationality:"Uruguay",     apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:480,  rating:7.0 },
          { id:2005, name:"Felipe",                   pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:500,  rating:7.0 },
          { id:2006, name:"Marcano",                  pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:7.0 },
          { id:2007, name:"Alex Telles",              pos:"LB", nationality:"Brazil",      apps:10, goals:2, assists:3, cs:3,  saves:0,  tackles:26, passes:580,  rating:7.4 },
          { id:2008, name:"Danilo Pereira",           pos:"MID", nationality:"Portugal",    apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:680,  rating:7.3 },
          { id:2009, name:"Héctor Herrera",           pos:"MID", nationality:"Mexico",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:700,  rating:7.4 },
          { id:2010, name:"Otávio",                   pos:"MID", nationality:"Brazil",      apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:22, passes:520,  rating:7.4 },
          { id:2011, name:"Corona",                   pos:"RW", nationality:"Mexico",      apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.6 },
          { id:2012, name:"Soares",                   pos:"ST", nationality:"Brazil",      apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.5 },
          { id:2013, name:"Brahimi",                  pos:"LW", nationality:"Algeria",     apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.5 },
          { id:2014, name:"Marega",                   pos:"ST", nationality:"Mali",        apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 },
          { id:2015, name:"Adrián López",             pos:"ST", nationality:"Spain",       apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:7.1 }
        ]
      },
      {
        team: "Sevilla FC",
        players: [
          { id:2016, name:"Sergio Rico",              pos:"GK",  nationality:"Spain",       apps:9,  goals:0, assists:0, cs:3,  saves:42, tackles:0,  passes:460,  rating:7.1 },
          { id:2017, name:"Sergi Gómez",              pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:7.0 },
          { id:2018, name:"Clément Lenglet",          pos:"CB", nationality:"France",      apps:10, goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:560,  rating:7.2 },
          { id:2019, name:"Mercado",                  pos:"CB", nationality:"Argentina",   apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:460,  rating:7.0 },
          { id:2020, name:"Escudero",                 pos:"LB", nationality:"Spain",       apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:440,  rating:6.9 },
          { id:2021, name:"Steven N'Zonzi",           pos:"MID", nationality:"France",      apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:780,  rating:7.3 },
          { id:2022, name:"Pablo Sarabia",            pos:"MID", nationality:"Spain",       apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:26, passes:640,  rating:7.7 },
          { id:2023, name:"Jesús Navas",              pos:"MID", nationality:"Spain",       apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:24, passes:560,  rating:7.3 },
          { id:2024, name:"Wissam Ben Yedder",        pos:"ST", nationality:"France",      apps:10, goals:8, assists:4, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.9 },
          { id:2025, name:"Luis Muriel",              pos:"ST", nationality:"Colombia",    apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.5 },
          { id:2026, name:"Joaquín Correa",           pos:"ST", nationality:"Argentina",   apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:2027, name:"Franco Vázquez",           pos:"MID", nationality:"Argentina",   apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:480,  rating:7.2 },
          { id:2028, name:"Ever Banega",              pos:"MID", nationality:"Argentina",   apps:9,  goals:2, assists:4, cs:0,  saves:0,  tackles:30, passes:680,  rating:7.5 }
        ]
      }
    ]
  },
  {
    season: "2018-19",
    teams: [
      {
        team: "Liverpool",
        players: [
          { id:911,name:"Alisson Becker",            pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:50, tackles:0,  passes:740,  rating:8.3 },
          { id:912,name:"Trent Alexander-Arnold",    pos:"RB", nationality:"England",      apps:13, goals:2, assists:4, cs:5,  saves:0,  tackles:44, passes:980,  rating:8.5 },
          { id:913,name:"Virgil van Dijk",           pos:"CB", nationality:"Netherlands",  apps:13, goals:4, assists:0, cs:7,  saves:0,  tackles:56, passes:1100, rating:8.9 },
          { id:914,name:"Joel Matip",                pos:"CB", nationality:"Cameroon",     apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:820,  rating:7.7 },
          { id:915,name:"Andrew Robertson",         pos:"LB", nationality:"Scotland",     apps:13, goals:1, assists:5, cs:6,  saves:0,  tackles:42, passes:920,  rating:8.4 },
          { id:916,name:"Jordan Henderson",          pos:"MID", nationality:"England",      apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:50, passes:1180, rating:8.0 },
          { id:917,name:"Georginio Wijnaldum",       pos:"MID", nationality:"Netherlands",  apps:13, goals:4, assists:2, cs:0,  saves:0,  tackles:42, passes:1120, rating:8.0 },
          { id:918,name:"Fabinho",                   pos:"MID", nationality:"Brazil",       apps:11, goals:1, assists:1, cs:0,  saves:0,  tackles:64, passes:1080, rating:8.1 },
          { id:919,name:"Mohamed Salah",             pos:"RW", nationality:"Egypt",        apps:13, goals:10,assists:4, cs:0,  saves:0,  tackles:18, passes:620,  rating:9.1 },
          { id:920,name:"Roberto Firmino",           pos:"ST", nationality:"Brazil",       apps:13, goals:7, assists:5, cs:0,  saves:0,  tackles:22, passes:680,  rating:8.6 },
          { id:921,name:"Sadio Mané",                pos:"LW", nationality:"Senegal",      apps:13, goals:7, assists:3, cs:0,  saves:0,  tackles:20, passes:560,  rating:8.8 },
          { id:922,name:"James Milner",              pos:"MID", nationality:"England",      apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:38, passes:720,  rating:7.4 },
          { id:923,name:"Divock Origi",              pos:"ST", nationality:"Belgium",      apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:10, passes:220,  rating:7.6 }
        ]
      },
      {
        team: "Tottenham Hotspur",
        players: [
          { id:924,name:"Hugo Lloris",               pos:"GK",  nationality:"France",       apps:13, goals:0, assists:0, cs:5,  saves:58, tackles:0,  passes:660,  rating:7.6 },
          { id:925,name:"Kieran Trippier",           pos:"CB", nationality:"England",      apps:13, goals:1, assists:4, cs:4,  saves:0,  tackles:40, passes:820,  rating:7.9 },
          { id:926,name:"Toby Alderweireld",         pos:"CB", nationality:"Belgium",      apps:12, goals:0, assists:0, cs:5,  saves:0,  tackles:50, passes:920,  rating:7.8 },
          { id:927,name:"Jan Vertonghen",            pos:"CB", nationality:"Belgium",      apps:11, goals:0, assists:1, cs:4,  saves:0,  tackles:46, passes:840,  rating:7.6 },
          { id:928,name:"Ben Davies",                pos:"CB", nationality:"Wales",        apps:10, goals:0, assists:2, cs:4,  saves:0,  tackles:36, passes:720,  rating:7.3 },
          { id:929,name:"Moussa Sissoko",            pos:"MID", nationality:"France",       apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:50, passes:880,  rating:7.5 },
          { id:930,name:"Harry Winks",               pos:"MID", nationality:"England",      apps:10, goals:0, assists:2, cs:0,  saves:0,  tackles:42, passes:1080, rating:7.3 },
          { id:931,name:"Christian Eriksen",         pos:"MID", nationality:"Denmark",      apps:13, goals:4, assists:5, cs:0,  saves:0,  tackles:28, passes:1180, rating:8.2 },
          { id:932,name:"Son Heung-min",             pos:"ST", nationality:"South Korea",  apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:20, passes:580,  rating:8.4 },
          { id:933,name:"Harry Kane",                pos:"ST", nationality:"England",      apps:13, goals:6, assists:3, cs:0,  saves:0,  tackles:14, passes:460,  rating:8.3 },
          { id:934,name:"Lucas Moura",               pos:"ST", nationality:"Brazil",       apps:13, goals:7, assists:2, cs:0,  saves:0,  tackles:18, passes:480,  rating:8.1 },
          { id:935,name:"Fernando Llorente",         pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 },
          { id:936,name:"Victor Wanyama",            pos:"MID", nationality:"Kenya",        apps:7,  goals:0, assists:0, cs:0,  saves:0,  tackles:46, passes:540,  rating:7.0 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:937,name:"Marc-André ter Stegen",     pos:"GK",  nationality:"Germany",      apps:13, goals:0, assists:0, cs:7,  saves:50, tackles:0,  passes:740,  rating:8.4 },
          { id:938,name:"Gerard Piqué",              pos:"CB", nationality:"Spain",        apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:44, passes:840,  rating:8.1 },
          { id:939,name:"Clément Lenglet",           pos:"CB", nationality:"France",       apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:780,  rating:7.6 },
          { id:940,name:"Jordi Alba",                pos:"LB", nationality:"Spain",        apps:12, goals:1, assists:4, cs:5,  saves:0,  tackles:32, passes:780,  rating:8.0 },
          { id:941,name:"Sergi Roberto",             pos:"RB", nationality:"Spain",        apps:10, goals:0, assists:2, cs:4,  saves:0,  tackles:32, passes:700,  rating:7.5 },
          { id:942,name:"Sergio Busquets",           pos:"MID", nationality:"Spain",        apps:12, goals:0, assists:3, cs:0,  saves:0,  tackles:52, passes:1300, rating:8.1 },
          { id:943,name:"Ivan Rakitić",              pos:"MID", nationality:"Croatia",      apps:12, goals:2, assists:4, cs:0,  saves:0,  tackles:34, passes:1100, rating:8.0 },
          { id:944,name:"Arturo Vidal",              pos:"MID", nationality:"Chile",        apps:10, goals:3, assists:2, cs:0,  saves:0,  tackles:48, passes:840,  rating:7.8 },
          { id:945,name:"Lionel Messi",              pos:"ST", nationality:"Argentina",    apps:13, goals:12,assists:7, cs:0,  saves:0,  tackles:16, passes:900,  rating:9.4 },
          { id:946,name:"Ousmane Dembélé",           pos:"ST", nationality:"France",       apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.7 },
          { id:947,name:"Luis Suárez",               pos:"ST", nationality:"Uruguay",      apps:11, goals:7, assists:4, cs:0,  saves:0,  tackles:12, passes:420,  rating:8.5 },
          { id:948,name:"Philippe Coutinho",         pos:"MID", nationality:"Brazil",       apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:22, passes:760,  rating:7.9 },
          { id:949,name:"Nelson Semedo",             pos:"CB", nationality:"Portugal",     apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:560,  rating:7.2 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:950,name:"Ederson",                   pos:"GK",  nationality:"Brazil",       apps:12, goals:0, assists:0, cs:6,  saves:40, tackles:0,  passes:1000, rating:8.0 },
          { id:951,name:"Kyle Walker",               pos:"CB", nationality:"England",      apps:12, goals:0, assists:2, cs:5,  saves:0,  tackles:40, passes:880,  rating:7.9 },
          { id:952,name:"Vincent Kompany",           pos:"CB", nationality:"Belgium",      apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:680,  rating:7.5 },
          { id:953,name:"Aymeric Laporte",           pos:"CB", nationality:"Spain",        apps:11, goals:0, assists:1, cs:5,  saves:0,  tackles:44, passes:880,  rating:7.8 },
          { id:954,name:"Benjamin Mendy",            pos:"LB", nationality:"France",       apps:6,  goals:0, assists:2, cs:3,  saves:0,  tackles:24, passes:500,  rating:7.2 },
          { id:955,name:"Kevin De Bruyne",           pos:"MID", nationality:"Belgium",      apps:8,  goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:1040, rating:8.8 },
          { id:956,name:"Fernandinho",               pos:"MID", nationality:"Brazil",       apps:10, goals:1, assists:1, cs:0,  saves:0,  tackles:58, passes:1000, rating:7.7 },
          { id:957,name:"İlkay Gündoğan",            pos:"MID", nationality:"Germany",      apps:11, goals:3, assists:3, cs:0,  saves:0,  tackles:42, passes:1160, rating:8.1 },
          { id:958,name:"Bernardo Silva",            pos:"MID", nationality:"Portugal",     apps:12, goals:4, assists:5, cs:0,  saves:0,  tackles:30, passes:1120, rating:8.4 },
          { id:959,name:"Phil Foden",                pos:"ST", nationality:"England",      apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:16, passes:640,  rating:7.8 },
          { id:960,name:"Raheem Sterling",           pos:"ST", nationality:"England",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:16, passes:580,  rating:8.5 },
          { id:961,name:"Sergio Agüero",             pos:"ST", nationality:"Argentina",    apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:300,  rating:8.3 },
          { id:962,name:"Riyad Mahrez",              pos:"RW", nationality:"Algeria",      apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:540,  rating:8.0 }
        ]
      },
      {
        team: "Ajax",
        players: [
          { id:963,name:"André Onana",               pos:"GK",  nationality:"Cameroon",     apps:13, goals:0, assists:0, cs:8,  saves:54, tackles:0,  passes:720,  rating:8.1 },
          { id:964,name:"Joël Veltman",              pos:"CB", nationality:"Netherlands",  apps:11, goals:0, assists:1, cs:5,  saves:0,  tackles:36, passes:680,  rating:7.3 },
          { id:965,name:"Matthijs de Ligt",          pos:"CB", nationality:"Netherlands",  apps:13, goals:3, assists:0, cs:7,  saves:0,  tackles:58, passes:880,  rating:8.5 },
          { id:966,name:"Daley Blind",               pos:"CB", nationality:"Netherlands",  apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:38, passes:820,  rating:7.7 },
          { id:967,name:"Nicolas Tagliafico",        pos:"CB", nationality:"Argentina",    apps:12, goals:1, assists:3, cs:5,  saves:0,  tackles:34, passes:720,  rating:7.9 },
          { id:968,name:"Frenkie de Jong",           pos:"MID", nationality:"Netherlands",  apps:13, goals:3, assists:5, cs:0,  saves:0,  tackles:44, passes:1280, rating:8.7 },
          { id:969,name:"Lasse Schöne",              pos:"MID", nationality:"Denmark",      apps:11, goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:900,  rating:7.6 },
          { id:970,name:"Donny van de Beek",         pos:"MID", nationality:"Netherlands",  apps:13, goals:6, assists:5, cs:0,  saves:0,  tackles:28, passes:820,  rating:8.3 },
          { id:971,name:"Hakim Ziyech",              pos:"ST", nationality:"Morocco",      apps:13, goals:7, assists:7, cs:0,  saves:0,  tackles:18, passes:720,  rating:8.6 },
          { id:972,name:"Dusan Tadic",               pos:"ST", nationality:"Serbia",       apps:13, goals:7, assists:6, cs:0,  saves:0,  tackles:16, passes:640,  rating:8.7 },
          { id:973,name:"David Neres",               pos:"RW", nationality:"Brazil",       apps:11, goals:5, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.9 },
          { id:974,name:"Kasper Dolberg",            pos:"ST", nationality:"Denmark",      apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:975,name:"Lisandro Martínez",         pos:"CB", nationality:"Argentina",    apps:7,  goals:0, assists:0, cs:4,  saves:0,  tackles:34, passes:480,  rating:7.3 }
        ]
      },
      {
        team: "FC Porto",
        players: [
          { id:2029, name:"Iker Casillas",            pos:"GK",  nationality:"Spain",       apps:4,  goals:0, assists:0, cs:1,  saves:18, tackles:0,  passes:240,  rating:7.0 },
          { id:2030, name:"Militão",                  pos:"CB", nationality:"Brazil",      apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:36, passes:540,  rating:7.4 },
          { id:2031, name:"Felipe",                   pos:"CB", nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:500,  rating:7.1 },
          { id:2032, name:"Pepe",                     pos:"CB", nationality:"Portugal",    apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:40, passes:560,  rating:7.3 },
          { id:2033, name:"Alex Telles",              pos:"LB", nationality:"Brazil",      apps:10, goals:2, assists:4, cs:3,  saves:0,  tackles:24, passes:600,  rating:7.5 },
          { id:2034, name:"Danilo Pereira",           pos:"MID", nationality:"Portugal",    apps:9,  goals:0, assists:2, cs:0,  saves:0,  tackles:46, passes:660,  rating:7.3 },
          { id:2035, name:"Héctor Herrera",           pos:"MID", nationality:"Mexico",      apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:36, passes:660,  rating:7.3 },
          { id:2036, name:"Otávio",                   pos:"MID", nationality:"Brazil",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:20, passes:520,  rating:7.4 },
          { id:2037, name:"Marega",                   pos:"ST", nationality:"Mali",        apps:10, goals:7, assists:3, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.7 },
          { id:2038, name:"Corona",                   pos:"RW", nationality:"Mexico",      apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.6 },
          { id:2039, name:"Brahimi",                  pos:"LW", nationality:"Algeria",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.4 },
          { id:2040, name:"Aboubakar",                pos:"ST", nationality:"Cameroon",    apps:7,  goals:5, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.5 },
          { id:2041, name:"Óliver Torres",            pos:"MID", nationality:"Spain",       apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:18, passes:380,  rating:7.1 }
        ]
      },
      {
        team: "Olympique Lyonnais",
        players: [
          { id:2042, name:"Anthony Lopes",            pos:"GK",  nationality:"Portugal",    apps:9,  goals:0, assists:0, cs:3,  saves:42, tackles:0,  passes:500,  rating:7.2 },
          { id:2043, name:"Rafael",                   pos:"RB", nationality:"Brazil",      apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:480,  rating:7.0 },
          { id:2044, name:"Jason Denayer",            pos:"CB", nationality:"Belgium",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:540,  rating:7.1 },
          { id:2045, name:"Fernando Marçal",          pos:"LB", nationality:"Brazil",      apps:9,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:2046, name:"Léo Dubois",               pos:"RB", nationality:"France",      apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:24, passes:460,  rating:7.0 },
          { id:2047, name:"Lucas Tousart",            pos:"MID", nationality:"France",      apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.1 },
          { id:2048, name:"Tanguy Ndombèlé",          pos:"MID", nationality:"France",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.6 },
          { id:2049, name:"Houssem Aouar",            pos:"MID", nationality:"France",      apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:28, passes:660,  rating:7.7 },
          { id:2050, name:"Nabil Fekir",              pos:"MID", nationality:"France",      apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:20, passes:540,  rating:7.8 },
          { id:2051, name:"Memphis Depay",            pos:"LW", nationality:"Netherlands", apps:9,  goals:6, assists:5, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.9 },
          { id:2052, name:"Martin Terrier",           pos:"ST", nationality:"France",      apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.2 },
          { id:2053, name:"Bertrand Traoré",          pos:"LW", nationality:"Burkina Faso",apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.2 },
          { id:2054, name:"Moussa Dembélé",           pos:"ST", nationality:"France",      apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.5 }
        ]
      }
    ]
  },
  {
    season: "2019-20",
    teams: [
      {
        team: "Bayern Munich",
        players: [
          { id:976,name:"Manuel Neuer",              pos:"GK",  nationality:"Germany",      apps:11, goals:0, assists:0, cs:7,  saves:40, tackles:0,  passes:820,  rating:8.4 },
          { id:977,name:"Joshua Kimmich",            pos:"RB", nationality:"Germany",      apps:11, goals:2, assists:5, cs:5,  saves:0,  tackles:46, passes:1060, rating:8.6 },
          { id:978,name:"Jérôme Boateng",            pos:"CB", nationality:"Germany",      apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:820,  rating:7.7 },
          { id:979,name:"David Alaba",               pos:"LB", nationality:"Austria",      apps:10, goals:1, assists:2, cs:5,  saves:0,  tackles:34, passes:840,  rating:8.0 },
          { id:980,name:"Alphonso Davies",           pos:"LB", nationality:"Canada",       apps:10, goals:1, assists:4, cs:5,  saves:0,  tackles:36, passes:680,  rating:8.3 },
          { id:981,name:"Thiago Alcântara",          pos:"MID", nationality:"Spain",        apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:36, passes:1280, rating:8.5 },
          { id:982,name:"Leon Goretzka",             pos:"MID", nationality:"Germany",      apps:10, goals:5, assists:4, cs:0,  saves:0,  tackles:46, passes:980,  rating:8.4 },
          { id:983,name:"Thomas Müller",             pos:"MID", nationality:"Germany",      apps:11, goals:5, assists:7, cs:0,  saves:0,  tackles:20, passes:820,  rating:8.7 },
          { id:984,name:"Serge Gnabry",              pos:"RW", nationality:"Germany",      apps:11, goals:9, assists:4, cs:0,  saves:0,  tackles:16, passes:480,  rating:8.8 },
          { id:985,name:"Robert Lewandowski",        pos:"ST", nationality:"Poland",       apps:11, goals:15,assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:9.2 },
          { id:986,name:"Kingsley Coman",            pos:"LW", nationality:"France",       apps:10, goals:5, assists:5, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.3 },
          { id:987,name:"Ivan Perišić",              pos:"LW", nationality:"Croatia",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.7 },
          { id:988,name:"Benjamin Pavard",           pos:"RB", nationality:"France",       apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:30, passes:620,  rating:7.5 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:989,name:"Keylor Navas",              pos:"GK",  nationality:"Costa Rica",   apps:10, goals:0, assists:0, cs:6,  saves:44, tackles:0,  passes:620,  rating:7.9 },
          { id:990,name:"Thilo Kehrer",              pos:"CB", nationality:"Germany",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:34, passes:600,  rating:7.1 },
          { id:991,name:"Thiago Silva",              pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:860,  rating:8.1 },
          { id:992,name:"Marquinhos",                pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:1, cs:5,  saves:0,  tackles:52, passes:880,  rating:8.2 },
          { id:993,name:"Juan Bernat",               pos:"CB", nationality:"Spain",        apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:28, passes:620,  rating:7.4 },
          { id:994,name:"Marco Verratti",            pos:"MID", nationality:"Italy",        apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:42, passes:1000, rating:8.1 },
          { id:995,name:"Ander Herrera",             pos:"MID", nationality:"Spain",        apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:840,  rating:7.6 },
          { id:996,name:"Idrissa Gueye",             pos:"MID", nationality:"Senegal",      apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:58, passes:780,  rating:7.6 },
          { id:997,name:"Kylian Mbappé",             pos:"ST", nationality:"France",       apps:10, goals:8, assists:6, cs:0,  saves:0,  tackles:16, passes:500,  rating:9.0 },
          { id:998,name:"Neymar",                    pos:"ST", nationality:"Brazil",       apps:8,  goals:7, assists:6, cs:0,  saves:0,  tackles:14, passes:560,  rating:8.9 },
          { id:999,name:"Angel Di María",            pos:"ST", nationality:"Argentina",    apps:10, goals:6, assists:5, cs:0,  saves:0,  tackles:16, passes:540,  rating:8.5 },
          { id:1000,name:"Edinson Cavani",           pos:"ST", nationality:"Uruguay",      apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.8 },
          { id:1001,name:"Pablo Sarabia",            pos:"MID", nationality:"Spain",        apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:20, passes:480,  rating:7.6 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:1002,name:"Ederson",                  pos:"GK",  nationality:"Brazil",       apps:10, goals:0, assists:0, cs:5,  saves:36, tackles:0,  passes:960,  rating:7.9 },
          { id:1003,name:"Kyle Walker",              pos:"CB", nationality:"England",      apps:10, goals:0, assists:2, cs:4,  saves:0,  tackles:38, passes:860,  rating:7.9 },
          { id:1004,name:"Rúben Dias",               pos:"CB", nationality:"Portugal",     apps:4,  goals:0, assists:0, cs:2,  saves:0,  tackles:24, passes:460,  rating:7.5 },
          { id:1005,name:"Nicolás Otamendi",         pos:"CB", nationality:"Argentina",    apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:40, passes:640,  rating:7.2 },
          { id:1006,name:"Benjamin Mendy",           pos:"LB", nationality:"France",       apps:7,  goals:0, assists:2, cs:3,  saves:0,  tackles:24, passes:520,  rating:7.2 },
          { id:1007,name:"Kevin De Bruyne",          pos:"MID", nationality:"Belgium",      apps:10, goals:3, assists:7, cs:0,  saves:0,  tackles:30, passes:1260, rating:9.0 },
          { id:1008,name:"Fernandinho",              pos:"MID", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:56, passes:920,  rating:7.5 },
          { id:1009,name:"İlkay Gündoğan",           pos:"MID", nationality:"Germany",      apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:40, passes:1100, rating:8.2 },
          { id:1010,name:"Bernardo Silva",           pos:"MID", nationality:"Portugal",     apps:10, goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:1060, rating:8.3 },
          { id:1011,name:"Raheem Sterling",          pos:"ST", nationality:"England",      apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.5 },
          { id:1012,name:"Phil Foden",               pos:"ST", nationality:"England",      apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:18, passes:660,  rating:8.1 },
          { id:1013,name:"Sergio Agüero",            pos:"ST", nationality:"Argentina",    apps:8,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.2 },
          { id:1014,name:"Gabriel Jesus",            pos:"ST", nationality:"Brazil",       apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.8 }
        ]
      },
      {
        team: "Lyon",
        players: [
          { id:1015,name:"Anthony Lopes",            pos:"GK",  nationality:"Portugal",     apps:9,  goals:0, assists:0, cs:4,  saves:40, tackles:0,  passes:500,  rating:7.4 },
          { id:1016,name:"Rafael",                   pos:"RB", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:540,  rating:7.0 },
          { id:1017,name:"Jason Denayer",            pos:"CB", nationality:"Belgium",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:620,  rating:7.3 },
          { id:1018,name:"Marcelo",                  pos:"LB", nationality:"Brazil",       apps:9,  goals:1, assists:0, cs:4,  saves:0,  tackles:42, passes:620,  rating:7.2 },
          { id:1019,name:"Ferland Mendy",            pos:"CB", nationality:"France",       apps:7,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.1 },
          { id:1020,name:"Lucas Tousart",            pos:"MID", nationality:"France",       apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:52, passes:780,  rating:7.4 },
          { id:1021,name:"Bruno Guimarães",          pos:"MID", nationality:"Brazil",       apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:720,  rating:7.6 },
          { id:1022,name:"Houssem Aouar",            pos:"MID", nationality:"France",       apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:26, passes:740,  rating:7.9 },
          { id:1023,name:"Moussa Dembélé",           pos:"ST", nationality:"France",       apps:9,  goals:6, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:8.1 },
          { id:1024,name:"Memphis Depay",            pos:"LW", nationality:"Netherlands",  apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.0 },
          { id:1025,name:"Karl Toko Ekambi",         pos:"ST", nationality:"Cameroon",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.6 },
          { id:1026,name:"Rudi Garcia",              pos:"MID", nationality:"France",       apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:28, passes:480,  rating:7.0 },
          { id:1027,name:"Martin Terrier",           pos:"ST", nationality:"France",       apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 }
        ]
      },
      {
        team: "RB Leipzig",
        players: [
          { id:1028,name:"Peter Gulácsi",            pos:"GK",  nationality:"Hungary",      apps:9,  goals:0, assists:0, cs:4,  saves:38, tackles:0,  passes:540,  rating:7.4 },
          { id:1029,name:"Lukas Klostermann",        pos:"CB", nationality:"Germany",      apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:560,  rating:7.2 },
          { id:1030,name:"Dayot Upamecano",          pos:"CB", nationality:"France",       apps:9,  goals:1, assists:0, cs:4,  saves:0,  tackles:48, passes:720,  rating:7.7 },
          { id:1031,name:"Ibrahima Konaté",          pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:44, passes:640,  rating:7.4 },
          { id:1032,name:"Marcel Halstenberg",       pos:"CB", nationality:"Germany",      apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:30, passes:560,  rating:7.2 },
          { id:1033,name:"Marcel Sabitzer",          pos:"MID", nationality:"Austria",      apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:34, passes:780,  rating:7.9 },
          { id:1034,name:"Kevin Kampl",              pos:"MID", nationality:"Slovenia",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:820,  rating:7.5 },
          { id:1035,name:"Konrad Laimer",            pos:"MID", nationality:"Austria",      apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:50, passes:680,  rating:7.4 },
          { id:1036,name:"Timo Werner",              pos:"ST", nationality:"Germany",      apps:9,  goals:7, assists:4, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.3 },
          { id:1037,name:"Christopher Nkunku",       pos:"ST", nationality:"France",       apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.8 },
          { id:1038,name:"Yussuf Poulsen",           pos:"ST", nationality:"Denmark",      apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.5 },
          { id:1039,name:"Dani Olmo",                pos:"MID", nationality:"Spain",        apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:22, passes:480,  rating:7.6 },
          { id:1040,name:"Patrik Schick",            pos:"ST", nationality:"Czech Republic",apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:6,  passes:160,  rating:7.3 }
        ]
      },
      {
        team: "Atalanta BC",
        players: [
          { id:2055, name:"Pierluigi Gollini",        pos:"GK",  nationality:"Italy",       apps:8,  goals:0, assists:0, cs:2,  saves:36, tackles:0,  passes:440,  rating:7.0 },
          { id:2056, name:"Hans Hateboer",            pos:"CB", nationality:"Netherlands", apps:9,  goals:1, assists:2, cs:2,  saves:0,  tackles:28, passes:500,  rating:7.2 },
          { id:2057, name:"José Luis Palomino",       pos:"CB", nationality:"Argentina",   apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:440,  rating:7.0 },
          { id:2058, name:"Berat Djimsiti",           pos:"CB", nationality:"Albania",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:420,  rating:7.0 },
          { id:2059, name:"Robin Gosens",             pos:"LB", nationality:"Germany",     apps:9,  goals:3, assists:4, cs:2,  saves:0,  tackles:24, passes:480,  rating:7.6 },
          { id:2060, name:"Remo Freuler",             pos:"MID", nationality:"Switzerland", apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:38, passes:580,  rating:7.2 },
          { id:2061, name:"Marten de Roon",           pos:"MID", nationality:"Netherlands", apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.2 },
          { id:2062, name:"Mario Pašalić",            pos:"MID", nationality:"Croatia",     apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:22, passes:500,  rating:7.5 },
          { id:2063, name:"Duván Zapata",             pos:"ST", nationality:"Colombia",    apps:8,  goals:7, assists:3, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.8 },
          { id:2064, name:"Alejandro Gómez",          pos:"ST", nationality:"Argentina",   apps:9,  goals:5, assists:6, cs:0,  saves:0,  tackles:12, passes:400,  rating:8.0 },
          { id:2065, name:"Luis Muriel",              pos:"ST", nationality:"Colombia",    apps:7,  goals:6, assists:2, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.7 },
          { id:2066, name:"Josip Iličić",             pos:"ST", nationality:"Slovenia",    apps:8,  goals:6, assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.9 },
          { id:2067, name:"Timothy Castagne",         pos:"CB", nationality:"Belgium",     apps:6,  goals:1, assists:1, cs:1,  saves:0,  tackles:20, passes:380,  rating:7.1 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:2068, name:"Roman Bürki",              pos:"GK",  nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:2,  saves:36, tackles:0,  passes:480,  rating:7.0 },
          { id:2069, name:"Achraf Hakimi",            pos:"RB", nationality:"Morocco",     apps:8,  goals:2, assists:3, cs:1,  saves:0,  tackles:24, passes:540,  rating:7.6 },
          { id:2070, name:"Mats Hummels",             pos:"CB", nationality:"Germany",     apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:38, passes:620,  rating:7.4 },
          { id:2071, name:"Manuel Akanji",            pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:560,  rating:7.1 },
          { id:2072, name:"Raphaël Guerreiro",        pos:"LB", nationality:"Portugal",    apps:8,  goals:2, assists:4, cs:2,  saves:0,  tackles:22, passes:520,  rating:7.5 },
          { id:2073, name:"Thomas Delaney",           pos:"MID", nationality:"Denmark",     apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:42, passes:580,  rating:7.1 },
          { id:2074, name:"Axel Witsel",              pos:"MID", nationality:"Belgium",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:680,  rating:7.3 },
          { id:2075, name:"Jadon Sancho",             pos:"RW", nationality:"England",     apps:8,  goals:4, assists:6, cs:0,  saves:0,  tackles:12, passes:400,  rating:7.9 },
          { id:2076, name:"Julian Brandt",            pos:"MID", nationality:"Germany",     apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:18, passes:560,  rating:7.6 },
          { id:2077, name:"Erling Haaland",           pos:"ST", nationality:"Norway",      apps:7,  goals:10,assists:4, cs:0,  saves:0,  tackles:8,  passes:220,  rating:8.3 },
          { id:2078, name:"Marco Reus",               pos:"ST", nationality:"Germany",     apps:7,  goals:4, assists:4, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.9 },
          { id:2079, name:"Thorgan Hazard",           pos:"ST", nationality:"Belgium",     apps:6,  goals:2, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.4 },
          { id:2080, name:"Emre Can",                 pos:"MID", nationality:"Germany",     apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:34, passes:440,  rating:7.1 }
        ]
      }
    ]
  },
  {
    season: "2020-21",
    teams: [
      {
        team: "Chelsea",
        players: [
          { id:1041,name:"Édouard Mendy",            pos:"GK",  nationality:"Senegal",      apps:12, goals:0, assists:0, cs:8,  saves:48, tackles:0,  passes:680,  rating:8.2 },
          { id:1042,name:"César Azpilicueta",        pos:"CB", nationality:"Spain",        apps:12, goals:0, assists:1, cs:6,  saves:0,  tackles:40, passes:780,  rating:7.7 },
          { id:1043,name:"Thiago Silva",             pos:"CB", nationality:"Brazil",       apps:11, goals:0, assists:1, cs:6,  saves:0,  tackles:50, passes:880,  rating:8.2 },
          { id:1044,name:"Antonio Rüdiger",          pos:"CB", nationality:"Germany",      apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:52, passes:820,  rating:8.1 },
          { id:1045,name:"Ben Chilwell",             pos:"CB", nationality:"England",      apps:10, goals:1, assists:3, cs:5,  saves:0,  tackles:32, passes:680,  rating:7.8 },
          { id:1046,name:"Jorginho",                 pos:"MID", nationality:"Italy",        apps:12, goals:2, assists:2, cs:0,  saves:0,  tackles:44, passes:1220, rating:8.0 },
          { id:1047,name:"N'Golo Kanté",             pos:"MID", nationality:"France",       apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:70, passes:1000, rating:8.7 },
          { id:1048,name:"Mason Mount",              pos:"MID", nationality:"England",      apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:32, passes:860,  rating:8.1 },
          { id:1049,name:"Kai Havertz",              pos:"ST", nationality:"Germany",      apps:12, goals:5, assists:3, cs:0,  saves:0,  tackles:18, passes:620,  rating:8.0 },
          { id:1050,name:"Timo Werner",              pos:"ST", nationality:"Germany",      apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:480,  rating:7.7 },
          { id:1051,name:"Christian Pulisic",        pos:"ST", nationality:"USA",          apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:420,  rating:7.6 },
          { id:1052,name:"Callum Hudson-Odoi",       pos:"ST", nationality:"England",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.2 },
          { id:1053,name:"Marcos Alonso",            pos:"CB", nationality:"Spain",        apps:7,  goals:1, assists:1, cs:3,  saves:0,  tackles:24, passes:480,  rating:7.1 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:1054,name:"Ederson",                  pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:7,  saves:40, tackles:0,  passes:1000, rating:8.1 },
          { id:1055,name:"Kyle Walker",              pos:"CB", nationality:"England",      apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:40, passes:880,  rating:8.0 },
          { id:1056,name:"Rúben Dias",               pos:"CB", nationality:"Portugal",     apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:52, passes:940,  rating:8.3 },
          { id:1057,name:"Aymeric Laporte",          pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:44, passes:880,  rating:7.8 },
          { id:1058,name:"João Cancelo",             pos:"RB", nationality:"Portugal",     apps:12, goals:1, assists:3, cs:5,  saves:0,  tackles:38, passes:940,  rating:8.2 },
          { id:1059,name:"Kevin De Bruyne",          pos:"MID", nationality:"Belgium",      apps:10, goals:4, assists:7, cs:0,  saves:0,  tackles:28, passes:1240, rating:9.0 },
          { id:1060,name:"İlkay Gündoğan",           pos:"MID", nationality:"Germany",      apps:12, goals:6, assists:4, cs:0,  saves:0,  tackles:40, passes:1200, rating:8.6 },
          { id:1061,name:"Bernardo Silva",           pos:"MID", nationality:"Portugal",     apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:30, passes:1180, rating:8.4 },
          { id:1062,name:"Phil Foden",               pos:"ST", nationality:"England",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:20, passes:760,  rating:8.7 },
          { id:1063,name:"Riyad Mahrez",             pos:"RW", nationality:"Algeria",      apps:12, goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:600,  rating:8.4 },
          { id:1064,name:"Gabriel Jesus",            pos:"ST", nationality:"Brazil",       apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:16, passes:440,  rating:7.9 },
          { id:1065,name:"Raheem Sterling",          pos:"ST", nationality:"England",      apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:500,  rating:8.0 },
          { id:1066,name:"Fernandinho",              pos:"MID", nationality:"Brazil",       apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:52, passes:880,  rating:7.5 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:1067,name:"Thibaut Courtois",         pos:"GK",  nationality:"Belgium",      apps:12, goals:0, assists:0, cs:6,  saves:50, tackles:0,  passes:740,  rating:7.9 },
          { id:1068,name:"Dani Carvajal",            pos:"RB", nationality:"Spain",        apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:760,  rating:7.5 },
          { id:1069,name:"Raphaël Varane",           pos:"CB", nationality:"France",       apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:880,  rating:7.9 },
          { id:1070,name:"Sergio Ramos",             pos:"CB", nationality:"Spain",        apps:8,  goals:2, assists:0, cs:4,  saves:0,  tackles:44, passes:820,  rating:7.9 },
          { id:1071,name:"Marcelo",                  pos:"LB", nationality:"Brazil",       apps:10, goals:1, assists:2, cs:4,  saves:0,  tackles:30, passes:760,  rating:7.5 },
          { id:1072,name:"Toni Kroos",               pos:"MID", nationality:"Germany",      apps:12, goals:2, assists:6, cs:0,  saves:0,  tackles:38, passes:1680, rating:8.7 },
          { id:1073,name:"Luka Modrić",              pos:"MID", nationality:"Croatia",      apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:44, passes:1480, rating:8.8 },
          { id:1074,name:"Casemiro",                 pos:"MID", nationality:"Brazil",       apps:11, goals:2, assists:2, cs:0,  saves:0,  tackles:62, passes:1140, rating:8.2 },
          { id:1075,name:"Cristiano Ronaldo",        pos:"ST", nationality:"Portugal",     apps:4,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.8 },
          { id:1076,name:"Karim Benzema",            pos:"ST", nationality:"France",       apps:12, goals:9, assists:5, cs:0,  saves:0,  tackles:12, passes:520,  rating:8.7 },
          { id:1077,name:"Vinícius Jr.",             pos:"ST", nationality:"Brazil",       apps:11, goals:5, assists:4, cs:0,  saves:0,  tackles:20, passes:440,  rating:8.0 },
          { id:1078,name:"Marco Asensio",            pos:"ST", nationality:"Spain",        apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 },
          { id:1079,name:"Eden Hazard",              pos:"ST", nationality:"Belgium",      apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.0 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:1080,name:"Keylor Navas",             pos:"GK",  nationality:"Costa Rica",   apps:12, goals:0, assists:0, cs:6,  saves:48, tackles:0,  passes:640,  rating:8.0 },
          { id:1081,name:"Alessandro Florenzi",      pos:"CB", nationality:"Italy",        apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:32, passes:600,  rating:7.2 },
          { id:1082,name:"Marquinhos",               pos:"CB", nationality:"Brazil",       apps:12, goals:2, assists:1, cs:6,  saves:0,  tackles:54, passes:920,  rating:8.3 },
          { id:1083,name:"Presnel Kimpembe",         pos:"CB", nationality:"France",       apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:760,  rating:7.7 },
          { id:1084,name:"Layvin Kurzawa",           pos:"LB", nationality:"France",       apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1085,name:"Marco Verratti",           pos:"MID", nationality:"Italy",        apps:10, goals:1, assists:4, cs:0,  saves:0,  tackles:42, passes:1060, rating:8.2 },
          { id:1086,name:"Leandro Paredes",          pos:"MID", nationality:"Argentina",    apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:980,  rating:7.7 },
          { id:1087,name:"Idrissa Gueye",            pos:"MID", nationality:"Senegal",      apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:56, passes:780,  rating:7.6 },
          { id:1088,name:"Kylian Mbappé",            pos:"ST", nationality:"France",       apps:12, goals:9, assists:6, cs:0,  saves:0,  tackles:16, passes:540,  rating:9.0 },
          { id:1089,name:"Neymar",                   pos:"ST", nationality:"Brazil",       apps:10, goals:7, assists:6, cs:0,  saves:0,  tackles:14, passes:580,  rating:8.8 },
          { id:1090,name:"Ángel Di María",           pos:"RW", nationality:"Argentina",    apps:11, goals:5, assists:6, cs:0,  saves:0,  tackles:16, passes:560,  rating:8.4 },
          { id:1091,name:"Mauro Icardi",             pos:"ST", nationality:"Argentina",    apps:7,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.6 },
          { id:1092,name:"Pablo Sarabia",            pos:"MID", nationality:"Spain",        apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:18, passes:440,  rating:7.4 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:1093,name:"Marwin Hitz",              pos:"GK",  nationality:"Switzerland",  apps:8,  goals:0, assists:0, cs:3,  saves:34, tackles:0,  passes:480,  rating:7.0 },
          { id:1094,name:"Łukasz Piszczek",          pos:"CB", nationality:"Poland",       apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:30, passes:520,  rating:7.1 },
          { id:1095,name:"Mats Hummels",             pos:"CB", nationality:"Germany",      apps:10, goals:1, assists:0, cs:4,  saves:0,  tackles:48, passes:860,  rating:7.8 },
          { id:1096,name:"Emre Can",                 pos:"CB", nationality:"Germany",      apps:9,  goals:1, assists:0, cs:4,  saves:0,  tackles:44, passes:720,  rating:7.3 },
          { id:1097,name:"Raphaël Guerreiro",        pos:"LB", nationality:"Portugal",     apps:9,  goals:1, assists:3, cs:3,  saves:0,  tackles:30, passes:640,  rating:7.7 },
          { id:1098,name:"Axel Witsel",              pos:"MID", nationality:"Belgium",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:940,  rating:7.7 },
          { id:1099,name:"Thomas Delaney",           pos:"MID", nationality:"Denmark",      apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:50, passes:780,  rating:7.3 },
          { id:1100,name:"Jude Bellingham",          pos:"MID", nationality:"England",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:40, passes:780,  rating:7.9 },
          { id:1101,name:"Jadon Sancho",             pos:"RW", nationality:"England",      apps:9,  goals:4, assists:5, cs:0,  saves:0,  tackles:14, passes:500,  rating:8.2 },
          { id:1102,name:"Erling Haaland",           pos:"ST", nationality:"Norway",       apps:10, goals:10,assists:3, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.9 },
          { id:1103,name:"Marco Reus",               pos:"ST", nationality:"Germany",      apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:480,  rating:8.0 },
          { id:1104,name:"Giovanni Reyna",           pos:"ST", nationality:"USA",          apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:10, passes:360,  rating:7.6 },
          { id:1105,name:"Thorgan Hazard",           pos:"ST", nationality:"Belgium",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.4 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:2081, name:"Marwin Hitz",              pos:"GK",  nationality:"Switzerland", apps:7,  goals:0, assists:0, cs:2,  saves:34, tackles:0,  passes:440,  rating:7.0 },
          { id:2082, name:"Thomas Meunier",           pos:"RB", nationality:"Belgium",     apps:8,  goals:1, assists:2, cs:2,  saves:0,  tackles:24, passes:520,  rating:7.2 },
          { id:2083, name:"Mats Hummels",             pos:"CB", nationality:"Germany",     apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:38, passes:620,  rating:7.4 },
          { id:2084, name:"Manuel Akanji",            pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:560,  rating:7.1 },
          { id:2085, name:"Raphaël Guerreiro",        pos:"LB", nationality:"Portugal",    apps:8,  goals:2, assists:4, cs:2,  saves:0,  tackles:20, passes:520,  rating:7.5 },
          { id:2086, name:"Jude Bellingham",          pos:"MID", nationality:"England",     apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:36, passes:620,  rating:7.9 },
          { id:2087, name:"Axel Witsel",              pos:"MID", nationality:"Belgium",     apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:42, passes:640,  rating:7.2 },
          { id:2088, name:"Jadon Sancho",             pos:"RW", nationality:"England",     apps:7,  goals:3, assists:4, cs:0,  saves:0,  tackles:10, passes:360,  rating:7.7 },
          { id:2089, name:"Julian Brandt",            pos:"MID", nationality:"Germany",     apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:16, passes:540,  rating:7.6 },
          { id:2090, name:"Erling Haaland",           pos:"ST", nationality:"Norway",      apps:7,  goals:10,assists:3, cs:0,  saves:0,  tackles:6,  passes:200,  rating:8.4 },
          { id:2091, name:"Marco Reus",               pos:"ST", nationality:"Germany",     apps:7,  goals:3, assists:3, cs:0,  saves:0,  tackles:8,  passes:300,  rating:7.7 },
          { id:2092, name:"Emre Can",                 pos:"MID", nationality:"Germany",     apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:34, passes:440,  rating:7.1 },
          { id:2093, name:"Donyell Malen",            pos:"RW", nationality:"Netherlands", apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.2 }
        ]
      },
      {
        team: "FC Porto",
        players: [
          { id:2094, name:"Agustín Marchesín",        pos:"GK",  nationality:"Argentina",   apps:8,  goals:0, assists:0, cs:2,  saves:38, tackles:0,  passes:480,  rating:7.0 },
          { id:2095, name:"João Mário",               pos:"RB", nationality:"Portugal",    apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:480,  rating:7.0 },
          { id:2096, name:"Pepe",                     pos:"CB", nationality:"Portugal",    apps:8,  goals:1, assists:0, cs:2,  saves:0,  tackles:38, passes:540,  rating:7.3 },
          { id:2097, name:"Chancel Mbemba",           pos:"CB", nationality:"DR Congo",    apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:480,  rating:7.0 },
          { id:2098, name:"Zaidu Sanusi",             pos:"LB", nationality:"Nigeria",     apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:22, passes:440,  rating:7.0 },
          { id:2099, name:"Sérgio Oliveira",          pos:"MID", nationality:"Portugal",    apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:34, passes:620,  rating:7.6 },
          { id:2100, name:"Danilo Pereira",           pos:"MID", nationality:"Portugal",    apps:8,  goals:0, assists:2, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.2 },
          { id:2101, name:"Otávio",                   pos:"MID", nationality:"Brazil",      apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:520,  rating:7.4 },
          { id:2102, name:"Luis Díaz",                pos:"LW", nationality:"Colombia",    apps:8,  goals:5, assists:4, cs:0,  saves:0,  tackles:12, passes:340,  rating:7.9 },
          { id:2103, name:"Mehdi Taremi",             pos:"ST", nationality:"Iran",        apps:8,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.7 },
          { id:2104, name:"Mateus Uribe",             pos:"MID", nationality:"Colombia",    apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:28, passes:460,  rating:7.2 },
          { id:2105, name:"Evanilson",                pos:"ST", nationality:"Brazil",      apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.2 },
          { id:2106, name:"Corona",                   pos:"RW", nationality:"Mexico",      apps:6,  goals:2, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.3 }
        ]
      }
    ]
  },
  {
    season: "2021-22",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:1106,name:"Thibaut Courtois",         pos:"GK",  nationality:"Belgium",      apps:13, goals:0, assists:0, cs:7,  saves:62, tackles:0,  passes:760,  rating:8.8 },
          { id:1107,name:"Dani Carvajal",            pos:"RB", nationality:"Spain",        apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:40, passes:820,  rating:7.9 },
          { id:1108,name:"Éder Militão",             pos:"CB", nationality:"Brazil",       apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:880,  rating:8.0 },
          { id:1109,name:"David Alaba",              pos:"LB", nationality:"Austria",      apps:12, goals:1, assists:1, cs:5,  saves:0,  tackles:44, passes:940,  rating:8.0 },
          { id:1110,name:"Ferland Mendy",            pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:38, passes:780,  rating:7.6 },
          { id:1111,name:"Casemiro",                 pos:"MID", nationality:"Brazil",       apps:12, goals:3, assists:2, cs:0,  saves:0,  tackles:68, passes:1180, rating:8.4 },
          { id:1112,name:"Toni Kroos",               pos:"MID", nationality:"Germany",      apps:11, goals:1, assists:5, cs:0,  saves:0,  tackles:36, passes:1620, rating:8.5 },
          { id:1113,name:"Luka Modrić",              pos:"MID", nationality:"Croatia",      apps:13, goals:4, assists:5, cs:0,  saves:0,  tackles:46, passes:1480, rating:8.9 },
          { id:1114,name:"Karim Benzema",            pos:"ST", nationality:"France",       apps:13, goals:15,assists:4, cs:0,  saves:0,  tackles:16, passes:580,  rating:9.4 },
          { id:1115,name:"Vinícius Jr.",             pos:"ST", nationality:"Brazil",       apps:13, goals:9, assists:3, cs:0,  saves:0,  tackles:24, passes:480,  rating:8.9 },
          { id:1116,name:"Rodrygo",                  pos:"ST", nationality:"Brazil",       apps:12, goals:6, assists:3, cs:0,  saves:0,  tackles:18, passes:420,  rating:8.1 },
          { id:1117,name:"Federico Valverde",        pos:"MID", nationality:"Uruguay",      apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:48, passes:1020, rating:8.0 },
          { id:1118,name:"Marco Asensio",            pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.5 }
        ]
      },
      {
        team: "Liverpool",
        players: [
          { id:1119,name:"Alisson Becker",           pos:"GK",  nationality:"Brazil",       apps:13, goals:0, assists:0, cs:8,  saves:46, tackles:0,  passes:760,  rating:8.4 },
          { id:1120,name:"Trent Alexander-Arnold",   pos:"RB", nationality:"England",      apps:13, goals:2, assists:5, cs:6,  saves:0,  tackles:42, passes:1020, rating:8.7 },
          { id:1121,name:"Virgil van Dijk",          pos:"CB", nationality:"Netherlands",  apps:13, goals:3, assists:0, cs:7,  saves:0,  tackles:56, passes:1100, rating:8.6 },
          { id:1122,name:"Ibrahima Konaté",          pos:"CB", nationality:"France",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:44, passes:760,  rating:7.8 },
          { id:1123,name:"Andrew Robertson",        pos:"LB", nationality:"Scotland",     apps:13, goals:1, assists:5, cs:6,  saves:0,  tackles:40, passes:940,  rating:8.5 },
          { id:1124,name:"Jordan Henderson",         pos:"MID", nationality:"England",      apps:11, goals:2, assists:3, cs:0,  saves:0,  tackles:48, passes:1140, rating:7.9 },
          { id:1125,name:"Fabinho",                  pos:"MID", nationality:"Brazil",       apps:12, goals:1, assists:2, cs:0,  saves:0,  tackles:66, passes:1100, rating:8.3 },
          { id:1126,name:"Thiago Alcântara",         pos:"MID", nationality:"Spain",        apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:38, passes:1180, rating:8.2 },
          { id:1127,name:"Mohamed Salah",            pos:"RW", nationality:"Egypt",        apps:13, goals:8, assists:4, cs:0,  saves:0,  tackles:16, passes:600,  rating:9.0 },
          { id:1128,name:"Sadio Mané",               pos:"LW", nationality:"Senegal",      apps:13, goals:6, assists:3, cs:0,  saves:0,  tackles:18, passes:520,  rating:8.5 },
          { id:1129,name:"Luis Díaz",                pos:"LW", nationality:"Colombia",     apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:8.0 },
          { id:1130,name:"Diogo Jota",               pos:"LW", nationality:"Portugal",     apps:10, goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.9 },
          { id:1131,name:"Roberto Firmino",          pos:"ST", nationality:"Brazil",       apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:16, passes:480,  rating:7.9 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:1132,name:"Ederson",                  pos:"GK",  nationality:"Brazil",       apps:12, goals:0, assists:0, cs:5,  saves:38, tackles:0,  passes:980,  rating:7.9 },
          { id:1133,name:"Kyle Walker",              pos:"CB", nationality:"England",      apps:12, goals:0, assists:2, cs:4,  saves:0,  tackles:42, passes:880,  rating:8.0 },
          { id:1134,name:"Rúben Dias",               pos:"CB", nationality:"Portugal",     apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:920,  rating:8.1 },
          { id:1135,name:"Aymeric Laporte",          pos:"CB", nationality:"Spain",        apps:10, goals:1, assists:1, cs:4,  saves:0,  tackles:44, passes:860,  rating:7.8 },
          { id:1136,name:"Oleksandr Zinchenko",      pos:"CB", nationality:"Ukraine",      apps:9,  goals:0, assists:2, cs:3,  saves:0,  tackles:32, passes:780,  rating:7.5 },
          { id:1137,name:"Kevin De Bruyne",          pos:"MID", nationality:"Belgium",      apps:11, goals:5, assists:7, cs:0,  saves:0,  tackles:36, passes:1380, rating:9.1 },
          { id:1138,name:"Fernandinho",              pos:"MID", nationality:"Brazil",       apps:9,  goals:1, assists:1, cs:0,  saves:0,  tackles:58, passes:1020, rating:7.5 },
          { id:1139,name:"İlkay Gündoğan",           pos:"MID", nationality:"Germany",      apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:44, passes:1180, rating:8.2 },
          { id:1140,name:"Phil Foden",               pos:"ST", nationality:"England",      apps:12, goals:5, assists:4, cs:0,  saves:0,  tackles:22, passes:780,  rating:8.5 },
          { id:1141,name:"Riyad Mahrez",             pos:"RW", nationality:"Algeria",      apps:12, goals:7, assists:4, cs:0,  saves:0,  tackles:18, passes:620,  rating:8.4 },
          { id:1142,name:"Bernardo Silva",           pos:"MID", nationality:"Portugal",     apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:32, passes:1180, rating:8.4 },
          { id:1143,name:"Gabriel Jesus",            pos:"ST", nationality:"Brazil",       apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:18, passes:480,  rating:8.0 },
          { id:1144,name:"Jack Grealish",            pos:"ST", nationality:"England",      apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:16, passes:520,  rating:7.5 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:1145,name:"Jan Oblak",                pos:"GK",  nationality:"Slovenia",     apps:11, goals:0, assists:0, cs:5,  saves:50, tackles:0,  passes:640,  rating:7.9 },
          { id:1146,name:"Kieran Trippier",          pos:"CB", nationality:"England",      apps:9,  goals:1, assists:2, cs:4,  saves:0,  tackles:36, passes:740,  rating:7.7 },
          { id:1147,name:"José Giménez",             pos:"CB", nationality:"Uruguay",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:720,  rating:7.7 },
          { id:1148,name:"Felipe",                   pos:"CB", nationality:"Brazil",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:620,  rating:7.2 },
          { id:1149,name:"Renan Lodi",               pos:"LB", nationality:"Brazil",       apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:28, passes:580,  rating:7.2 },
          { id:1150,name:"Koke",                     pos:"MID", nationality:"Spain",        apps:11, goals:1, assists:3, cs:0,  saves:0,  tackles:40, passes:1200, rating:7.8 },
          { id:1151,name:"Rodrigo De Paul",          pos:"MID", nationality:"Argentina",    apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:46, passes:920,  rating:7.9 },
          { id:1152,name:"Thomas Lemar",             pos:"MID", nationality:"France",       apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:30, passes:640,  rating:7.3 },
          { id:1153,name:"Antoine Griezmann",        pos:"ST", nationality:"France",       apps:11, goals:5, assists:4, cs:0,  saves:0,  tackles:18, passes:560,  rating:8.2 },
          { id:1154,name:"João Félix",               pos:"ST", nationality:"Portugal",     apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.8 },
          { id:1155,name:"Ángel Correa",             pos:"ST", nationality:"Argentina",    apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:340,  rating:7.5 },
          { id:1156,name:"Yannick Ferreira-Carrasco",pos:"ST", nationality:"Belgium",      apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.5 },
          { id:1157,name:"Matheus Cunha",            pos:"ST", nationality:"Brazil",       apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.4 }
        ]
      },
      {
        team: "Villarreal",
        players: [
          { id:1158,name:"Gerónimo Rulli",           pos:"GK",  nationality:"Argentina",    apps:12, goals:0, assists:0, cs:6,  saves:54, tackles:0,  passes:560,  rating:8.0 },
          { id:1159,name:"Juan Foyth",               pos:"CB", nationality:"Argentina",    apps:11, goals:1, assists:1, cs:5,  saves:0,  tackles:38, passes:640,  rating:7.5 },
          { id:1160,name:"Pau Torres",               pos:"CB", nationality:"Spain",        apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:46, passes:760,  rating:7.8 },
          { id:1161,name:"Raúl Albiol",              pos:"CB", nationality:"Spain",        apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:700,  rating:7.6 },
          { id:1162,name:"Alfonso Pedraza",          pos:"CB", nationality:"Spain",        apps:10, goals:0, assists:2, cs:4,  saves:0,  tackles:30, passes:600,  rating:7.2 },
          { id:1163,name:"Étienne Capoue",           pos:"MID", nationality:"France",       apps:11, goals:1, assists:2, cs:0,  saves:0,  tackles:52, passes:880,  rating:7.6 },
          { id:1164,name:"Dani Parejo",              pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:4, cs:0,  saves:0,  tackles:38, passes:1100, rating:7.9 },
          { id:1165,name:"Manu Trigueros",           pos:"MID", nationality:"Spain",        apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:720,  rating:7.4 },
          { id:1166,name:"Arnaut Danjuma",           pos:"ST", nationality:"Netherlands",  apps:11, goals:6, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.0 },
          { id:1167,name:"Gerard Moreno",            pos:"ST", nationality:"Spain",        apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.9 },
          { id:1168,name:"Paco Alcácer",             pos:"ST", nationality:"Spain",        apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.5 },
          { id:1169,name:"Francis Coquelin",         pos:"MID", nationality:"France",       apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:46, passes:700,  rating:7.3 },
          { id:1170,name:"Yeremy Pino",              pos:"ST", nationality:"Spain",        apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 }
        ]
      },
      {
        team: "Atlético de Madrid",
        players: [
          { id:2107, name:"Jan Oblak",                pos:"GK",  nationality:"Slovenia",    apps:10, goals:0, assists:0, cs:4,  saves:46, tackles:0,  passes:580,  rating:7.9 },
          { id:2108, name:"Kieran Trippier",          pos:"CB", nationality:"England",     apps:9,  goals:1, assists:3, cs:3,  saves:0,  tackles:28, passes:660,  rating:7.5 },
          { id:2109, name:"José Giménez",             pos:"CB", nationality:"Uruguay",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:40, passes:580,  rating:7.4 },
          { id:2110, name:"Stefan Savić",             pos:"CB", nationality:"Montenegro",  apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:560,  rating:7.3 },
          { id:2111, name:"Renan Lodi",               pos:"LB", nationality:"Brazil",      apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:24, passes:500,  rating:7.1 },
          { id:2112, name:"Koke",                     pos:"MID", nationality:"Spain",       apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:36, passes:1100, rating:7.7 },
          { id:2113, name:"Thomas Lemar",             pos:"MID", nationality:"France",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:26, passes:680,  rating:7.3 },
          { id:2114, name:"Marcos Llorente",          pos:"MID", nationality:"Spain",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:30, passes:700,  rating:7.6 },
          { id:2115, name:"Antoine Griezmann",        pos:"ST", nationality:"France",      apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:18, passes:600,  rating:8.1 },
          { id:2116, name:"Luis Suárez",              pos:"ST", nationality:"Uruguay",     apps:9,  goals:7, assists:3, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.8 },
          { id:2117, name:"João Félix",               pos:"ST", nationality:"Portugal",    apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.6 },
          { id:2118, name:"Yannick Carrasco",         pos:"ST", nationality:"Belgium",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.4 },
          { id:2119, name:"Geoffrey Kondogbia",       pos:"MID", nationality:"France",      apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:42, passes:560,  rating:7.2 }
        ]
      },
      {
        team: "Benfica",
        players: [
          { id:2120, name:"Odysseas Vlachodimos",     pos:"GK",  nationality:"Greece",      apps:9,  goals:0, assists:0, cs:3,  saves:42, tackles:0,  passes:500,  rating:7.2 },
          { id:2121, name:"Alexander Bah",            pos:"CB", nationality:"Denmark",     apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:480,  rating:7.0 },
          { id:2122, name:"Nicolás Otamendi",         pos:"CB", nationality:"Argentina",   apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:580,  rating:7.3 },
          { id:2123, name:"António Silva",            pos:"CB", nationality:"Portugal",    apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:36, passes:560,  rating:7.4 },
          { id:2124, name:"Alejandro Grimaldo",       pos:"LB", nationality:"Spain",       apps:9,  goals:2, assists:3, cs:3,  saves:0,  tackles:24, passes:560,  rating:7.6 },
          { id:2125, name:"Florentino Luís",          pos:"MID", nationality:"Portugal",    apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:620,  rating:7.1 },
          { id:2126, name:"Julian Weigl",             pos:"MID", nationality:"Germany",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:680,  rating:7.2 },
          { id:2127, name:"Enzo Fernández",           pos:"MID", nationality:"Argentina",   apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:32, passes:700,  rating:7.9 },
          { id:2128, name:"Rafa Silva",               pos:"RW", nationality:"Portugal",    apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.5 },
          { id:2129, name:"Gonçalo Ramos",            pos:"ST", nationality:"Portugal",    apps:9,  goals:8, assists:3, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.9 },
          { id:2130, name:"David Neres",              pos:"RW", nationality:"Brazil",      apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.6 },
          { id:2131, name:"Petar Musa",               pos:"ST", nationality:"Croatia",     apps:6,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.2 },
          { id:2132, name:"João Mário",               pos:"MID", nationality:"Portugal",    apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:24, passes:520,  rating:7.3 }
        ]
      }
    ]
  },
  {
    season: "2022-23",
    teams: [
      {
        team: "Manchester City",
        players: [
          { id:1171,name:"Ederson",                  pos:"GK",  nationality:"Brazil",       apps:12, goals:0, assists:0, cs:6,  saves:36, tackles:0,  passes:1000, rating:8.1 },
          { id:1172,name:"Kyle Walker",              pos:"CB", nationality:"England",      apps:11, goals:0, assists:2, cs:5,  saves:0,  tackles:40, passes:880,  rating:8.0 },
          { id:1173,name:"Rúben Dias",               pos:"CB", nationality:"Portugal",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:50, passes:900,  rating:7.9 },
          { id:1174,name:"Manuel Akanji",            pos:"CB", nationality:"Switzerland",  apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:780,  rating:7.6 },
          { id:1175,name:"Joško Gvardiol",           pos:"CB", nationality:"Croatia",      apps:4,  goals:0, assists:0, cs:2,  saves:0,  tackles:22, passes:380,  rating:7.3 },
          { id:1176,name:"Kevin De Bruyne",          pos:"MID", nationality:"Belgium",      apps:11, goals:4, assists:8, cs:0,  saves:0,  tackles:32, passes:1340, rating:9.1 },
          { id:1177,name:"Rodri",                    pos:"MID", nationality:"Spain",        apps:12, goals:2, assists:3, cs:0,  saves:0,  tackles:62, passes:1360, rating:8.6 },
          { id:1178,name:"Bernardo Silva",           pos:"MID", nationality:"Portugal",     apps:12, goals:5, assists:5, cs:0,  saves:0,  tackles:30, passes:1180, rating:8.6 },
          { id:1179,name:"Phil Foden",               pos:"ST", nationality:"England",      apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:22, passes:780,  rating:8.8 },
          { id:1180,name:"Erling Haaland",           pos:"ST", nationality:"Norway",       apps:11, goals:12,assists:3, cs:0,  saves:0,  tackles:8,  passes:280,  rating:9.2 },
          { id:1181,name:"Jack Grealish",            pos:"ST", nationality:"England",      apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:16, passes:580,  rating:8.0 },
          { id:1182,name:"İlkay Gündoğan",           pos:"MID", nationality:"Germany",      apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:38, passes:1080, rating:8.1 },
          { id:1183,name:"Riyad Mahrez",             pos:"RW", nationality:"Algeria",      apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:540,  rating:8.1 }
        ]
      },
      {
        team: "Inter Milan",
        players: [
          { id:1184,name:"André Onana",              pos:"GK",  nationality:"Cameroon",     apps:13, goals:0, assists:0, cs:7,  saves:52, tackles:0,  passes:720,  rating:8.0 },
          { id:1185,name:"Matteo Darmian",           pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:1, cs:6,  saves:0,  tackles:36, passes:680,  rating:7.6 },
          { id:1186,name:"Francesco Acerbi",         pos:"CB", nationality:"Italy",        apps:12, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:820,  rating:7.8 },
          { id:1187,name:"Alessandro Bastoni",       pos:"CB", nationality:"Italy",        apps:12, goals:0, assists:2, cs:6,  saves:0,  tackles:44, passes:860,  rating:7.9 },
          { id:1188,name:"Federico Dimarco",         pos:"CB", nationality:"Italy",        apps:12, goals:2, assists:3, cs:5,  saves:0,  tackles:32, passes:740,  rating:8.0 },
          { id:1189,name:"Nicolò Barella",           pos:"MID", nationality:"Italy",        apps:13, goals:4, assists:5, cs:0,  saves:0,  tackles:56, passes:1120, rating:8.5 },
          { id:1190,name:"Marcelo Brozović",         pos:"MID", nationality:"Croatia",      apps:11, goals:1, assists:3, cs:0,  saves:0,  tackles:50, passes:1200, rating:8.0 },
          { id:1191,name:"Hakan Çalhanoğlu",         pos:"MID", nationality:"Turkey",       apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:42, passes:1180, rating:8.3 },
          { id:1192,name:"Lautaro Martínez",         pos:"ST", nationality:"Argentina",    apps:13, goals:9, assists:4, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.7 },
          { id:1193,name:"Edin Džeko",               pos:"ST", nationality:"Bosnia-Herz.", apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:8,  passes:300,  rating:7.7 },
          { id:1194,name:"Romelu Lukaku",            pos:"ST", nationality:"Belgium",      apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.9 },
          { id:1195,name:"Denzel Dumfries",          pos:"CB", nationality:"Netherlands",  apps:9,  goals:1, assists:2, cs:4,  saves:0,  tackles:34, passes:560,  rating:7.5 },
          { id:1196,name:"Henrikh Mkhitaryan",       pos:"MID", nationality:"Armenia",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:30, passes:680,  rating:7.6 }
        ]
      },
      {
        team: "Real Madrid",
        players: [
          { id:1197,name:"Thibaut Courtois",         pos:"GK",  nationality:"Belgium",      apps:12, goals:0, assists:0, cs:7,  saves:48, tackles:0,  passes:740,  rating:8.3 },
          { id:1198,name:"Dani Carvajal",            pos:"RB", nationality:"Spain",        apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:40, passes:820,  rating:7.9 },
          { id:1199,name:"Éder Militão",             pos:"CB", nationality:"Brazil",       apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:50, passes:880,  rating:8.0 },
          { id:1200,name:"David Alaba",              pos:"LB", nationality:"Austria",      apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:42, passes:900,  rating:7.8 },
          { id:1201,name:"Ferland Mendy",            pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:740,  rating:7.5 },
          { id:1202,name:"Luka Modrić",              pos:"MID", nationality:"Croatia",      apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:44, passes:1460, rating:8.8 },
          { id:1203,name:"Toni Kroos",               pos:"MID", nationality:"Germany",      apps:11, goals:2, assists:5, cs:0,  saves:0,  tackles:36, passes:1620, rating:8.7 },
          { id:1204,name:"Federico Valverde",        pos:"MID", nationality:"Uruguay",      apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:50, passes:1060, rating:8.4 },
          { id:1205,name:"Vinícius Jr.",             pos:"ST", nationality:"Brazil",       apps:12, goals:8, assists:4, cs:0,  saves:0,  tackles:22, passes:500,  rating:8.9 },
          { id:1206,name:"Karim Benzema",            pos:"ST", nationality:"France",       apps:11, goals:8, assists:5, cs:0,  saves:0,  tackles:12, passes:520,  rating:8.8 },
          { id:1207,name:"Rodrygo",                  pos:"ST", nationality:"Brazil",       apps:12, goals:5, assists:3, cs:0,  saves:0,  tackles:16, passes:420,  rating:8.0 },
          { id:1208,name:"Marco Asensio",            pos:"ST", nationality:"Spain",        apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:340,  rating:7.5 },
          { id:1209,name:"Eduardo Camavinga",        pos:"MID", nationality:"France",       apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:40, passes:760,  rating:7.7 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:1210,name:"Manuel Neuer",             pos:"GK",  nationality:"Germany",      apps:7,  goals:0, assists:0, cs:4,  saves:28, tackles:0,  passes:620,  rating:7.8 },
          { id:1211,name:"Yann Sommer",              pos:"GK",  nationality:"Switzerland",  apps:5,  goals:0, assists:0, cs:3,  saves:20, tackles:0,  passes:400,  rating:7.5 },
          { id:1212,name:"Joshua Kimmich",           pos:"RB", nationality:"Germany",      apps:12, goals:2, assists:4, cs:5,  saves:0,  tackles:44, passes:1040, rating:8.4 },
          { id:1213,name:"Dayot Upamecano",          pos:"CB", nationality:"France",       apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:800,  rating:7.6 },
          { id:1214,name:"Benjamin Pavard",          pos:"RB", nationality:"France",       apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:680,  rating:7.4 },
          { id:1215,name:"Alphonso Davies",          pos:"LB", nationality:"Canada",       apps:11, goals:1, assists:3, cs:5,  saves:0,  tackles:34, passes:680,  rating:8.0 },
          { id:1216,name:"Leon Goretzka",            pos:"MID", nationality:"Germany",      apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:44, passes:960,  rating:8.0 },
          { id:1217,name:"Thomas Müller",            pos:"MID", nationality:"Germany",      apps:12, goals:4, assists:6, cs:0,  saves:0,  tackles:18, passes:780,  rating:8.3 },
          { id:1218,name:"Jamal Musiala",            pos:"ST", nationality:"Germany",      apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:20, passes:680,  rating:8.7 },
          { id:1219,name:"Serge Gnabry",             pos:"RW", nationality:"Germany",      apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.1 },
          { id:1220,name:"Robert Lewandowski",       pos:"ST", nationality:"Poland",       apps:4,  goals:3, assists:1, cs:0,  saves:0,  tackles:4,  passes:140,  rating:8.0 },
          { id:1221,name:"Sadio Mané",               pos:"LW", nationality:"Senegal",      apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.8 },
          { id:1222,name:"Leroy Sané",               pos:"LW", nationality:"Germany",      apps:11, goals:5, assists:5, cs:0,  saves:0,  tackles:14, passes:520,  rating:8.2 }
        ]
      },
      {
        team: "AC Milan",
        players: [
          { id:1223,name:"Mike Maignan",             pos:"GK",  nationality:"France",       apps:10, goals:0, assists:0, cs:5,  saves:42, tackles:0,  passes:620,  rating:7.9 },
          { id:1224,name:"Davide Calabria",          pos:"CB", nationality:"Italy",        apps:10, goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:640,  rating:7.3 },
          { id:1225,name:"Fikayo Tomori",            pos:"CB", nationality:"England",      apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.7 },
          { id:1226,name:"Pierre Kalulu",            pos:"CB", nationality:"France",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:640,  rating:7.4 },
          { id:1227,name:"Theo Hernández",           pos:"LB", nationality:"France",       apps:10, goals:2, assists:3, cs:4,  saves:0,  tackles:32, passes:680,  rating:8.0 },
          { id:1228,name:"Sandro Tonali",            pos:"MID", nationality:"Italy",        apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:52, passes:1000, rating:8.0 },
          { id:1229,name:"Ismaël Bennacer",          pos:"MID", nationality:"Algeria",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:940,  rating:7.8 },
          { id:1230,name:"Brahim Díaz",              pos:"MID", nationality:"Spain",        apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:20, passes:660,  rating:7.9 },
          { id:1231,name:"Rafael Leão",              pos:"ST", nationality:"Portugal",     apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:8.4 },
          { id:1232,name:"Olivier Giroud",           pos:"ST", nationality:"France",       apps:10, goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.0 },
          { id:1233,name:"Ante Rebić",               pos:"ST", nationality:"Croatia",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.3 },
          { id:1234,name:"Zlatan Ibrahimović",       pos:"ST", nationality:"Sweden",       apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:4,  passes:140,  rating:7.2 },
          { id:1235,name:"Charles De Ketelaere",     pos:"RW", nationality:"Belgium",      apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.2 }
        ]
      },
      {
        team: "Napoli",
        players: [
          { id:2133, name:"Alex Meret",               pos:"GK",  nationality:"Italy",       apps:8,  goals:0, assists:0, cs:3,  saves:38, tackles:0,  passes:500,  rating:7.2 },
          { id:2134, name:"Giovanni Di Lorenzo",      pos:"CB", nationality:"Italy",       apps:10, goals:1, assists:2, cs:3,  saves:0,  tackles:32, passes:680,  rating:7.6 },
          { id:2135, name:"Amir Rrahmani",            pos:"CB", nationality:"Kosovo",      apps:9,  goals:1, assists:0, cs:3,  saves:0,  tackles:40, passes:580,  rating:7.3 },
          { id:2136, name:"Min-jae Kim",              pos:"CB", nationality:"South Korea", apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:46, passes:620,  rating:7.7 },
          { id:2137, name:"Mario Rui",                pos:"LB", nationality:"Portugal",    apps:9,  goals:0, assists:2, cs:3,  saves:0,  tackles:24, passes:540,  rating:7.1 },
          { id:2138, name:"Stanislav Lobotka",        pos:"MID", nationality:"Slovakia",    apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:960,  rating:7.7 },
          { id:2139, name:"Piotr Zieliński",          pos:"MID", nationality:"Poland",      apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:28, passes:820,  rating:7.9 },
          { id:2140, name:"Eljif Elmas",              pos:"MID", nationality:"North Macedonia",apps:8,goals:3,assists:2, cs:0,  saves:0,  tackles:24, passes:580,  rating:7.3 },
          { id:2141, name:"Khvicha Kvaratskhelia",    pos:"LW", nationality:"Georgia",     apps:10, goals:7, assists:8, cs:0,  saves:0,  tackles:14, passes:500,  rating:8.5 },
          { id:2142, name:"Victor Osimhen",           pos:"ST", nationality:"Nigeria",     apps:8,  goals:9, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:8.3 },
          { id:2143, name:"Matteo Politano",          pos:"RW", nationality:"Italy",       apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.5 },
          { id:2144, name:"Hirving Lozano",           pos:"RW", nationality:"Mexico",      apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:2145, name:"André-Frank Zambo Anguissa",pos:"MID",nationality:"Cameroon",    apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:42, passes:680,  rating:7.6 }
        ]
      },
      {
        team: "Club Brugge",
        players: [
          { id:2146, name:"Simon Mignolet",           pos:"GK",  nationality:"Belgium",     apps:10, goals:0, assists:0, cs:3,  saves:46, tackles:0,  passes:540,  rating:7.3 },
          { id:2147, name:"Dedryck Boyata",           pos:"CB", nationality:"Belgium",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:34, passes:480,  rating:7.0 },
          { id:2148, name:"Brandon Mechele",          pos:"CB", nationality:"Belgium",     apps:9,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:480,  rating:7.0 },
          { id:2149, name:"Andreas Skov Olsen",       pos:"RW", nationality:"Denmark",     apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.5 },
          { id:2150, name:"Denis Odoi",               pos:"CB", nationality:"Belgium",     apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:440,  rating:7.0 },
          { id:2151, name:"Arne Engels",              pos:"MID", nationality:"Belgium",     apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:28, passes:620,  rating:7.4 },
          { id:2152, name:"Hans Vanaken",             pos:"MID", nationality:"Belgium",     apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:30, passes:720,  rating:7.7 },
          { id:2153, name:"Noa Lang",                 pos:"LW", nationality:"Netherlands", apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:10, passes:380,  rating:7.7 },
          { id:2154, name:"Ferran Jutglà",            pos:"ST", nationality:"Spain",       apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:8,  passes:280,  rating:7.6 },
          { id:2155, name:"Kamal Sowah",              pos:"ST", nationality:"Ghana",       apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.1 },
          { id:2156, name:"Raphael Onyedika",         pos:"MID", nationality:"Nigeria",     apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:38, passes:580,  rating:7.2 },
          { id:2157, name:"Cyle Larin",               pos:"ST", nationality:"Canada",      apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:6,  passes:200,  rating:7.2 },
          { id:2158, name:"Antonio Nusa",             pos:"ST", nationality:"Norway",      apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.1 }
        ]
      }
    ]
  },
  {
    season: "2023-24",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:1236,name:"Andriy Lunin",             pos:"GK",  nationality:"Ukraine",      apps:12, goals:0, assists:0, cs:6,  saves:56, tackles:0,  passes:680,  rating:8.2 },
          { id:1237,name:"Dani Carvajal",            pos:"RB", nationality:"Spain",        apps:13, goals:2, assists:2, cs:6,  saves:0,  tackles:44, passes:860,  rating:8.4 },
          { id:1238,name:"Éder Militão",             pos:"CB", nationality:"Brazil",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:48, passes:860,  rating:7.9 },
          { id:1239,name:"David Alaba",              pos:"LB", nationality:"Austria",      apps:5,  goals:0, assists:0, cs:2,  saves:0,  tackles:24, passes:480,  rating:7.4 },
          { id:1240,name:"Ferland Mendy",            pos:"CB", nationality:"France",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:36, passes:740,  rating:7.6 },
          { id:1241,name:"Jude Bellingham",          pos:"MID", nationality:"England",      apps:13, goals:8, assists:6, cs:0,  saves:0,  tackles:44, passes:1120, rating:9.1 },
          { id:1242,name:"Toni Kroos",               pos:"MID", nationality:"Germany",      apps:13, goals:3, assists:7, cs:0,  saves:0,  tackles:38, passes:1700, rating:9.0 },
          { id:1243,name:"Luka Modrić",              pos:"MID", nationality:"Croatia",      apps:12, goals:2, assists:5, cs:0,  saves:0,  tackles:42, passes:1440, rating:8.7 },
          { id:1244,name:"Vinícius Jr.",             pos:"ST", nationality:"Brazil",       apps:13, goals:9, assists:6, cs:0,  saves:0,  tackles:22, passes:520,  rating:9.0 },
          { id:1245,name:"Rodrygo",                  pos:"ST", nationality:"Brazil",       apps:13, goals:7, assists:4, cs:0,  saves:0,  tackles:18, passes:440,  rating:8.3 },
          { id:1246,name:"Brahim Díaz",              pos:"MID", nationality:"Spain",        apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:20, passes:620,  rating:8.0 },
          { id:1247,name:"Eduardo Camavinga",        pos:"MID", nationality:"France",       apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:42, passes:820,  rating:7.9 },
          { id:1248,name:"Federico Valverde",        pos:"MID", nationality:"Uruguay",      apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:50, passes:1060, rating:8.4 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:1249,name:"Gregor Kobel",             pos:"GK",  nationality:"Switzerland",  apps:13, goals:0, assists:0, cs:6,  saves:54, tackles:0,  passes:660,  rating:7.9 },
          { id:1250,name:"Julian Ryerson",           pos:"CB", nationality:"Norway",       apps:11, goals:0, assists:1, cs:5,  saves:0,  tackles:34, passes:580,  rating:7.3 },
          { id:1251,name:"Mats Hummels",             pos:"CB", nationality:"Germany",      apps:12, goals:2, assists:0, cs:6,  saves:0,  tackles:50, passes:880,  rating:8.0 },
          { id:1252,name:"Nico Schlotterbeck",       pos:"CB", nationality:"Germany",      apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:780,  rating:7.7 },
          { id:1253,name:"Ian Maatsen",              pos:"CB", nationality:"Netherlands",  apps:10, goals:1, assists:2, cs:4,  saves:0,  tackles:30, passes:620,  rating:7.7 },
          { id:1254,name:"Emre Can",                 pos:"MID", nationality:"Germany",      apps:11, goals:1, assists:1, cs:0,  saves:0,  tackles:52, passes:880,  rating:7.6 },
          { id:1255,name:"Marcel Sabitzer",          pos:"MID", nationality:"Austria",      apps:12, goals:4, assists:4, cs:0,  saves:0,  tackles:44, passes:920,  rating:8.2 },
          { id:1256,name:"Julien Brandt",            pos:"MID", nationality:"Germany",      apps:11, goals:2, assists:4, cs:0,  saves:0,  tackles:30, passes:820,  rating:7.7 },
          { id:1257,name:"Jadon Sancho",             pos:"RW", nationality:"England",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.7 },
          { id:1258,name:"Karim Adeyemi",            pos:"ST", nationality:"Germany",      apps:11, goals:5, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.8 },
          { id:1259,name:"Niclas Füllkrug",          pos:"ST", nationality:"Germany",      apps:12, goals:7, assists:2, cs:0,  saves:0,  tackles:8,  passes:280,  rating:8.1 },
          { id:1260,name:"Marco Reus",               pos:"ST", nationality:"Germany",      apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.6 },
          { id:1261,name:"Felix Nmecha",             pos:"MID", nationality:"Germany",      apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:36, passes:640,  rating:7.3 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:1262,name:"Manuel Neuer",             pos:"GK",  nationality:"Germany",      apps:9,  goals:0, assists:0, cs:4,  saves:36, tackles:0,  passes:680,  rating:7.7 },
          { id:1263,name:"Joshua Kimmich",           pos:"RB", nationality:"Germany",      apps:11, goals:1, assists:3, cs:5,  saves:0,  tackles:42, passes:1020, rating:8.2 },
          { id:1264,name:"Dayot Upamecano",          pos:"CB", nationality:"France",       apps:10, goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:780,  rating:7.5 },
          { id:1265,name:"Kim Min-jae",              pos:"CB", nationality:"South Korea",  apps:11, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:800,  rating:7.8 },
          { id:1266,name:"Alphonso Davies",          pos:"LB", nationality:"Canada",       apps:10, goals:1, assists:2, cs:4,  saves:0,  tackles:32, passes:660,  rating:7.9 },
          { id:1267,name:"Leon Goretzka",            pos:"MID", nationality:"Germany",      apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:42, passes:920,  rating:7.9 },
          { id:1268,name:"Thomas Müller",            pos:"MID", nationality:"Germany",      apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:18, passes:760,  rating:8.1 },
          { id:1269,name:"Jamal Musiala",            pos:"ST", nationality:"Germany",      apps:11, goals:7, assists:5, cs:0,  saves:0,  tackles:20, passes:680,  rating:8.8 },
          { id:1270,name:"Leroy Sané",               pos:"LW", nationality:"Germany",      apps:10, goals:5, assists:4, cs:0,  saves:0,  tackles:14, passes:500,  rating:8.2 },
          { id:1271,name:"Harry Kane",               pos:"ST", nationality:"England",      apps:11, goals:8, assists:3, cs:0,  saves:0,  tackles:10, passes:340,  rating:8.6 },
          { id:1272,name:"Serge Gnabry",             pos:"RW", nationality:"Germany",      apps:8,  goals:4, assists:2, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 },
          { id:1273,name:"Konrad Laimer",            pos:"MID", nationality:"Austria",      apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:680,  rating:7.5 },
          { id:1274,name:"Raphaël Guerreiro",        pos:"LB", nationality:"Portugal",     apps:7,  goals:1, assists:2, cs:3,  saves:0,  tackles:26, passes:540,  rating:7.4 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:1275,name:"David Raya",               pos:"GK",  nationality:"Spain",        apps:12, goals:0, assists:0, cs:6,  saves:52, tackles:0,  passes:680,  rating:8.0 },
          { id:1276,name:"Ben White",                pos:"CB", nationality:"England",      apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:38, passes:820,  rating:7.9 },
          { id:1277,name:"Gabriel Magalhães",        pos:"CB", nationality:"Brazil",       apps:12, goals:2, assists:0, cs:6,  saves:0,  tackles:50, passes:840,  rating:8.2 },
          { id:1278,name:"William Saliba",           pos:"CB", nationality:"France",       apps:12, goals:0, assists:0, cs:6,  saves:0,  tackles:48, passes:880,  rating:8.1 },
          { id:1279,name:"Oleksandr Zinchenko",      pos:"CB", nationality:"Ukraine",      apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:30, passes:760,  rating:7.6 },
          { id:1280,name:"Martin Ødegaard",          pos:"MID", nationality:"Norway",       apps:12, goals:5, assists:7, cs:0,  saves:0,  tackles:34, passes:1240, rating:9.0 },
          { id:1281,name:"Declan Rice",              pos:"MID", nationality:"England",      apps:12, goals:3, assists:3, cs:0,  saves:0,  tackles:62, passes:1200, rating:8.5 },
          { id:1282,name:"Bukayo Saka",              pos:"ST", nationality:"England",      apps:12, goals:7, assists:5, cs:0,  saves:0,  tackles:20, passes:700,  rating:8.8 },
          { id:1283,name:"Gabriel Martinelli",       pos:"ST", nationality:"Brazil",       apps:12, goals:5, assists:4, cs:0,  saves:0,  tackles:18, passes:520,  rating:8.2 },
          { id:1284,name:"Kai Havertz",              pos:"ST", nationality:"Germany",      apps:12, goals:6, assists:3, cs:0,  saves:0,  tackles:22, passes:620,  rating:8.1 },
          { id:1285,name:"Leandro Trossard",         pos:"MID", nationality:"Belgium",      apps:11, goals:4, assists:4, cs:0,  saves:0,  tackles:24, passes:680,  rating:7.9 },
          { id:1286,name:"Thomas Partey",            pos:"MID", nationality:"Ghana",        apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:50, passes:820,  rating:7.7 },
          { id:1287,name:"Jorginho",                 pos:"MID", nationality:"Italy",        apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:38, passes:860,  rating:7.3 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:1288,name:"Gianluigi Donnarumma",     pos:"GK",  nationality:"Italy",        apps:12, goals:0, assists:0, cs:5,  saves:50, tackles:0,  passes:660,  rating:7.8 },
          { id:1289,name:"Achraf Hakimi",            pos:"RB", nationality:"Morocco",      apps:12, goals:2, assists:4, cs:5,  saves:0,  tackles:40, passes:800,  rating:8.2 },
          { id:1290,name:"Marquinhos",               pos:"CB", nationality:"Brazil",       apps:12, goals:1, assists:0, cs:5,  saves:0,  tackles:52, passes:900,  rating:8.1 },
          { id:1291,name:"Presnel Kimpembe",         pos:"CB", nationality:"France",       apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:40, passes:660,  rating:7.3 },
          { id:1292,name:"Lucas Hernández",          pos:"CB", nationality:"France",       apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:640,  rating:7.4 },
          { id:1293,name:"Marco Verratti",           pos:"MID", nationality:"Italy",        apps:8,  goals:1, assists:3, cs:0,  saves:0,  tackles:40, passes:920,  rating:7.8 },
          { id:1294,name:"Vitinha",                  pos:"MID", nationality:"Portugal",     apps:12, goals:3, assists:5, cs:0,  saves:0,  tackles:36, passes:1160, rating:8.3 },
          { id:1295,name:"Warren Zaïre-Emery",       pos:"MID", nationality:"France",       apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:40, passes:900,  rating:7.9 },
          { id:1296,name:"Kylian Mbappé",            pos:"ST", nationality:"France",       apps:12, goals:8, assists:5, cs:0,  saves:0,  tackles:14, passes:520,  rating:9.0 },
          { id:1297,name:"Ousmane Dembélé",          pos:"ST", nationality:"France",       apps:12, goals:6, assists:5, cs:0,  saves:0,  tackles:16, passes:520,  rating:8.3 },
          { id:1298,name:"Bradley Barcola",          pos:"ST", nationality:"France",       apps:10, goals:4, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:7.8 },
          { id:1299,name:"Gonçalo Ramos",            pos:"ST", nationality:"Portugal",     apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.8 },
          { id:1300,name:"Lee Kang-in",              pos:"MID", nationality:"South Korea",  apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:580,  rating:7.6 }
        ]
      },
      {
        team: "PSV Eindhoven",
        players: [
          { id:2159, name:"Walter Benítez",           pos:"GK",  nationality:"Argentina",   apps:8,  goals:0, assists:0, cs:3,  saves:38, tackles:0,  passes:500,  rating:7.2 },
          { id:2160, name:"Jordan Teze",              pos:"RB", nationality:"Netherlands", apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:26, passes:480,  rating:7.0 },
          { id:2161, name:"André Ramalho",            pos:"CB", nationality:"Brazil",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:34, passes:500,  rating:7.0 },
          { id:2162, name:"Olivier Boscagli",         pos:"CB", nationality:"France",      apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:32, passes:520,  rating:7.1 },
          { id:2163, name:"Mauro Júnior",             pos:"CB", nationality:"Brazil",      apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:22, passes:460,  rating:7.0 },
          { id:2164, name:"Ibrahim Sangaré",          pos:"MID", nationality:"Ivory Coast", apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:660,  rating:7.3 },
          { id:2165, name:"Joey Veerman",             pos:"MID", nationality:"Netherlands", apps:8,  goals:3, assists:5, cs:0,  saves:0,  tackles:28, passes:700,  rating:7.6 },
          { id:2166, name:"Guus Til",                 pos:"MID", nationality:"Netherlands", apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:24, passes:560,  rating:7.4 },
          { id:2167, name:"Luuk de Jong",             pos:"ST", nationality:"Netherlands", apps:8,  goals:6, assists:3, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 },
          { id:2168, name:"Xavi Simons",              pos:"RW", nationality:"Netherlands", apps:8,  goals:5, assists:5, cs:0,  saves:0,  tackles:12, passes:400,  rating:7.8 },
          { id:2169, name:"Hirving Lozano",           pos:"RW", nationality:"Mexico",      apps:7,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.4 },
          { id:2170, name:"Johan Bakayoko",           pos:"RW", nationality:"Belgium",     apps:6,  goals:3, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.3 },
          { id:2171, name:"Armando Obispo",           pos:"CB", nationality:"Netherlands", apps:6,  goals:0, assists:0, cs:2,  saves:0,  tackles:28, passes:380,  rating:7.0 }
        ]
      },
      {
        team: "Atlético de Madrid",
        players: [
          { id:2172, name:"Jan Oblak",                pos:"GK",  nationality:"Slovenia",    apps:10, goals:0, assists:0, cs:5,  saves:48, tackles:0,  passes:600,  rating:8.0 },
          { id:2173, name:"Nahuel Molina",            pos:"RB", nationality:"Argentina",   apps:9,  goals:1, assists:2, cs:3,  saves:0,  tackles:28, passes:580,  rating:7.4 },
          { id:2174, name:"José Giménez",             pos:"CB", nationality:"Uruguay",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:580,  rating:7.5 },
          { id:2175, name:"Axel Witsel",              pos:"CB", nationality:"Belgium",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:560,  rating:7.3 },
          { id:2176, name:"Reinildo",                 pos:"LB", nationality:"Mozambique",  apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:26, passes:480,  rating:7.0 },
          { id:2177, name:"Koke",                     pos:"MID", nationality:"Spain",       apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:36, passes:1060, rating:7.6 },
          { id:2178, name:"Rodrigo De Paul",          pos:"MID", nationality:"Argentina",   apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:34, passes:740,  rating:7.5 },
          { id:2179, name:"Marcos Llorente",          pos:"MID", nationality:"Spain",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:28, passes:700,  rating:7.5 },
          { id:2180, name:"Antoine Griezmann",        pos:"ST", nationality:"France",      apps:10, goals:7, assists:5, cs:0,  saves:0,  tackles:16, passes:580,  rating:8.2 },
          { id:2181, name:"Álvaro Morata",            pos:"ST", nationality:"Spain",       apps:9,  goals:6, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.7 },
          { id:2182, name:"Samuel Lino",              pos:"LW", nationality:"Brazil",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:2183, name:"Pablo Barrios",            pos:"MID", nationality:"Spain",       apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:36, passes:600,  rating:7.4 },
          { id:2184, name:"Memphis Depay",            pos:"LW", nationality:"Netherlands", apps:6,  goals:3, assists:2, cs:0,  saves:0,  tackles:8,  passes:220,  rating:7.3 }
        ]
      }
    ]
  },
  {
    season: "2024-25",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:1301, name:"Thibaut Courtois",        pos:"GK",  nationality:"Belgium",     apps:10, goals:0, assists:0, cs:6,  saves:40, tackles:0,  passes:740,  rating:8.1 },
          { id:1302, name:"Dani Carvajal",           pos:"RB", nationality:"Spain",       apps:5,  goals:0, assists:1, cs:2,  saves:0,  tackles:18, passes:380,  rating:7.5 },
          { id:1303, name:"Éder Militão",            pos:"CB", nationality:"Brazil",      apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:840,  rating:7.8 },
          { id:1304, name:"Antonio Rüdiger",         pos:"CB", nationality:"Germany",     apps:11, goals:2, assists:0, cs:4,  saves:0,  tackles:44, passes:780,  rating:7.7 },
          { id:1305, name:"Ferland Mendy",           pos:"CB", nationality:"France",      apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:680,  rating:7.4 },
          { id:1306, name:"Jude Bellingham",         pos:"MID", nationality:"England",     apps:11, goals:8, assists:5, cs:0,  saves:0,  tackles:38, passes:1020, rating:8.8 },
          { id:1307, name:"Federico Valverde",       pos:"MID", nationality:"Uruguay",     apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:52, passes:1080, rating:8.2 },
          { id:1308, name:"Eduardo Camavinga",       pos:"MID", nationality:"France",      apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:48, passes:880,  rating:7.9 },
          { id:1309, name:"Kylian Mbappé",           pos:"ST", nationality:"France",      apps:11, goals:11,assists:4, cs:0,  saves:0,  tackles:14, passes:540,  rating:8.9 },
          { id:1310, name:"Vinícius Jr.",            pos:"ST", nationality:"Brazil",      apps:11, goals:7, assists:5, cs:0,  saves:0,  tackles:22, passes:480,  rating:8.7 },
          { id:1311, name:"Rodrygo",                 pos:"ST", nationality:"Brazil",      apps:10, goals:5, assists:4, cs:0,  saves:0,  tackles:18, passes:420,  rating:8.0 },
          { id:1312, name:"Aurélien Tchouaméni",     pos:"MID", nationality:"France",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:58, passes:980,  rating:7.7 },
          { id:1313, name:"Luka Modrić",             pos:"MID", nationality:"Croatia",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:1080, rating:8.1 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:1314, name:"David Raya",              pos:"GK",  nationality:"Spain",       apps:10, goals:0, assists:0, cs:6,  saves:44, tackles:0,  passes:680,  rating:7.9 },
          { id:1315, name:"Ben White",               pos:"CB", nationality:"England",     apps:9,  goals:0, assists:2, cs:5,  saves:0,  tackles:40, passes:780,  rating:7.7 },
          { id:1316, name:"William Saliba",          pos:"CB", nationality:"France",      apps:10, goals:1, assists:0, cs:6,  saves:0,  tackles:52, passes:880,  rating:8.1 },
          { id:1317, name:"Gabriel Magalhães",       pos:"CB", nationality:"Brazil",      apps:10, goals:2, assists:0, cs:5,  saves:0,  tackles:48, passes:820,  rating:7.9 },
          { id:1318, name:"Oleksandr Zinchenko",     pos:"CB", nationality:"Ukraine",     apps:8,  goals:0, assists:2, cs:4,  saves:0,  tackles:30, passes:740,  rating:7.4 },
          { id:1319, name:"Martin Ødegaard",         pos:"MID", nationality:"Norway",      apps:10, goals:4, assists:7, cs:0,  saves:0,  tackles:32, passes:1280, rating:8.6 },
          { id:1320, name:"Declan Rice",             pos:"MID", nationality:"England",     apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:62, passes:1180, rating:8.3 },
          { id:1321, name:"Mikel Merino",            pos:"MID", nationality:"Spain",       apps:9,  goals:3, assists:2, cs:0,  saves:0,  tackles:44, passes:880,  rating:7.9 },
          { id:1322, name:"Bukayo Saka",             pos:"ST", nationality:"England",     apps:10, goals:6, assists:7, cs:0,  saves:0,  tackles:20, passes:680,  rating:8.8 },
          { id:1323, name:"Gabriel Martinelli",      pos:"ST", nationality:"Brazil",      apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:18, passes:480,  rating:7.8 },
          { id:1324, name:"Kai Havertz",             pos:"ST", nationality:"Germany",     apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:22, passes:520,  rating:8.0 },
          { id:1325, name:"Leandro Trossard",        pos:"MID", nationality:"Belgium",     apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:18, passes:560,  rating:7.8 },
          { id:1326, name:"Raheem Sterling",         pos:"ST", nationality:"England",     apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.2 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:1327, name:"Iñaki Peña",              pos:"GK",  nationality:"Spain",       apps:9,  goals:0, assists:0, cs:5,  saves:38, tackles:0,  passes:580,  rating:7.4 },
          { id:1328, name:"Jules Koundé",            pos:"CB", nationality:"France",      apps:10, goals:1, assists:2, cs:5,  saves:0,  tackles:42, passes:820,  rating:7.8 },
          { id:1329, name:"Pau Cubarsí",             pos:"CB", nationality:"Spain",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:840,  rating:7.8 },
          { id:1330, name:"Íñigo Martínez",          pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:740,  rating:7.5 },
          { id:1331, name:"Alejandro Balde",         pos:"CB", nationality:"Spain",       apps:10, goals:1, assists:3, cs:4,  saves:0,  tackles:36, passes:720,  rating:7.7 },
          { id:1332, name:"Pedri",                   pos:"MID", nationality:"Spain",       apps:9,  goals:2, assists:5, cs:0,  saves:0,  tackles:34, passes:1180, rating:8.3 },
          { id:1333, name:"Frenkie de Jong",         pos:"MID", nationality:"Netherlands", apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:42, passes:1120, rating:7.9 },
          { id:1334, name:"Dani Olmo",               pos:"MID", nationality:"Spain",       apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:30, passes:880,  rating:8.1 },
          { id:1335, name:"Lamine Yamal",            pos:"ST", nationality:"Spain",       apps:10, goals:7, assists:8, cs:0,  saves:0,  tackles:18, passes:620,  rating:8.9 },
          { id:1336, name:"Raphinha",                pos:"ST", nationality:"Brazil",      apps:10, goals:8, assists:5, cs:0,  saves:0,  tackles:20, passes:560,  rating:8.7 },
          { id:1337, name:"Robert Lewandowski",      pos:"ST", nationality:"Poland",      apps:10, goals:9, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.5 },
          { id:1338, name:"Marc Casadó",             pos:"MID", nationality:"Spain",       apps:9,  goals:0, assists:1, cs:0,  saves:0,  tackles:54, passes:1040, rating:7.6 },
          { id:1339, name:"Ferran Torres",           pos:"ST", nationality:"Spain",       apps:7,  goals:3, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.4 }
        ]
      },
      {
        team: "Bayern Munich",
        players: [
          { id:1340, name:"Manuel Neuer",            pos:"GK",  nationality:"Germany",     apps:10, goals:0, assists:0, cs:5,  saves:42, tackles:0,  passes:780,  rating:7.8 },
          { id:1341, name:"Joshua Kimmich",          pos:"RB", nationality:"Germany",     apps:11, goals:1, assists:4, cs:4,  saves:0,  tackles:44, passes:1020, rating:8.2 },
          { id:1342, name:"Eric Dier",               pos:"CB", nationality:"England",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:760,  rating:7.4 },
          { id:1343, name:"Dayot Upamecano",         pos:"CB", nationality:"France",      apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:800,  rating:7.5 },
          { id:1344, name:"Alphonso Davies",         pos:"LB", nationality:"Canada",      apps:6,  goals:0, assists:2, cs:2,  saves:0,  tackles:28, passes:560,  rating:7.3 },
          { id:1345, name:"Leon Goretzka",           pos:"MID", nationality:"Germany",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:46, passes:980,  rating:7.8 },
          { id:1346, name:"Jamal Musiala",           pos:"MID", nationality:"Germany",     apps:11, goals:5, assists:6, cs:0,  saves:0,  tackles:28, passes:980,  rating:8.7 },
          { id:1347, name:"Thomas Müller",           pos:"MID", nationality:"Germany",     apps:8,  goals:2, assists:4, cs:0,  saves:0,  tackles:20, passes:720,  rating:7.8 },
          { id:1348, name:"Harry Kane",              pos:"ST", nationality:"England",     apps:11, goals:12,assists:5, cs:0,  saves:0,  tackles:14, passes:480,  rating:8.9 },
          { id:1349, name:"Michael Olise",           pos:"ST", nationality:"France",      apps:10, goals:6, assists:6, cs:0,  saves:0,  tackles:20, passes:520,  rating:8.4 },
          { id:1350, name:"Kingsley Coman",          pos:"LW", nationality:"France",      apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:16, passes:400,  rating:7.8 },
          { id:1351, name:"Serge Gnabry",            pos:"RW", nationality:"Germany",     apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.6 },
          { id:1352, name:"João Palhinha",           pos:"MID", nationality:"Portugal",    apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:58, passes:820,  rating:7.5 }
        ]
      },
      {
        team: "Paris Saint-Germain",
        players: [
          { id:1353, name:"Gianluigi Donnarumma",    pos:"GK",  nationality:"Italy",       apps:11, goals:0, assists:0, cs:5,  saves:46, tackles:0,  passes:680,  rating:7.8 },
          { id:1354, name:"Achraf Hakimi",           pos:"RB", nationality:"Morocco",     apps:11, goals:1, assists:4, cs:4,  saves:0,  tackles:42, passes:820,  rating:8.0 },
          { id:1355, name:"Marquinhos",              pos:"CB", nationality:"Brazil",      apps:11, goals:1, assists:0, cs:5,  saves:0,  tackles:52, passes:880,  rating:8.0 },
          { id:1356, name:"Willian Pacho",           pos:"CB", nationality:"Ecuador",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:780,  rating:7.7 },
          { id:1357, name:"Nuno Mendes",             pos:"CB", nationality:"Portugal",    apps:10, goals:0, assists:3, cs:4,  saves:0,  tackles:36, passes:720,  rating:7.8 },
          { id:1358, name:"Vitinha",                 pos:"MID", nationality:"Portugal",    apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:40, passes:1280, rating:8.3 },
          { id:1359, name:"Fabián Ruiz",             pos:"MID", nationality:"Spain",       apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:38, passes:1100, rating:8.0 },
          { id:1360, name:"Warren Zaïre-Emery",      pos:"MID", nationality:"France",      apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:44, passes:1000, rating:8.0 },
          { id:1361, name:"Ousmane Dembélé",         pos:"ST", nationality:"France",      apps:11, goals:7, assists:7, cs:0,  saves:0,  tackles:20, passes:580,  rating:8.6 },
          { id:1362, name:"Bradley Barcola",         pos:"ST", nationality:"France",      apps:11, goals:6, assists:5, cs:0,  saves:0,  tackles:18, passes:480,  rating:8.3 },
          { id:1363, name:"Gonçalo Ramos",           pos:"ST", nationality:"Portugal",    apps:10, goals:7, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:8.1 },
          { id:1364, name:"Desire Doué",             pos:"ST", nationality:"France",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:16, passes:320,  rating:7.7 },
          { id:1365, name:"João Neves",              pos:"MID", nationality:"Portugal",    apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:880,  rating:7.8 }
        ]
      },
      {
        team: "Liverpool",
        players: [
          { id:1431, name:"Alisson Becker",           pos:"GK",  nationality:"Brazil",      apps:12, goals:0, assists:0, cs:7,  saves:42, tackles:0,  passes:760,  rating:8.0 },
          { id:1432, name:"Trent Alexander-Arnold",   pos:"RB", nationality:"England",     apps:10, goals:1, assists:4, cs:5,  saves:0,  tackles:32, passes:1020, rating:8.2 },
          { id:1433, name:"Virgil van Dijk",          pos:"CB", nationality:"Netherlands", apps:12, goals:2, assists:1, cs:6,  saves:0,  tackles:50, passes:980,  rating:8.3 },
          { id:1434, name:"Ibrahima Konaté",          pos:"CB", nationality:"France",      apps:11, goals:1, assists:0, cs:6,  saves:0,  tackles:48, passes:880,  rating:7.9 },
          { id:1435, name:"Andy Robertson",           pos:"CB", nationality:"Scotland",    apps:11, goals:0, assists:3, cs:5,  saves:0,  tackles:36, passes:780,  rating:7.7 },
          { id:1436, name:"Alexis Mac Allister",      pos:"MID", nationality:"Argentina",   apps:12, goals:4, assists:5, cs:0,  saves:0,  tackles:48, passes:1200, rating:8.4 },
          { id:1437, name:"Ryan Gravenberch",         pos:"MID", nationality:"Netherlands", apps:12, goals:2, assists:4, cs:0,  saves:0,  tackles:44, passes:1100, rating:8.3 },
          { id:1438, name:"Dominik Szoboszlai",       pos:"MID", nationality:"Hungary",     apps:11, goals:3, assists:4, cs:0,  saves:0,  tackles:34, passes:960,  rating:7.9 },
          { id:1439, name:"Mohamed Salah",            pos:"RW", nationality:"Egypt",       apps:12, goals:9, assists:7, cs:0,  saves:0,  tackles:18, passes:620,  rating:8.9 },
          { id:1440, name:"Luis Díaz",                pos:"LW", nationality:"Colombia",    apps:11, goals:6, assists:4, cs:0,  saves:0,  tackles:20, passes:520,  rating:8.3 },
          { id:1441, name:"Cody Gakpo",               pos:"LW", nationality:"Netherlands", apps:10, goals:5, assists:3, cs:0,  saves:0,  tackles:16, passes:440,  rating:7.9 },
          { id:1442, name:"Darwin Núñez",             pos:"LW", nationality:"Uruguay",     apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.5 },
          { id:1443, name:"Harvey Elliott",           pos:"MID", nationality:"England",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:28, passes:680,  rating:7.6 }
        ]
      },
      {
        team: "Inter Milan",
        players: [
          { id:1444, name:"Yann Sommer",              pos:"GK",  nationality:"Switzerland", apps:11, goals:0, assists:0, cs:6,  saves:44, tackles:0,  passes:720,  rating:7.9 },
          { id:1445, name:"Benjamin Pavard",          pos:"RB", nationality:"France",      apps:10, goals:1, assists:1, cs:5,  saves:0,  tackles:44, passes:820,  rating:7.8 },
          { id:1446, name:"Francesco Acerbi",         pos:"CB", nationality:"Italy",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:840,  rating:7.6 },
          { id:1447, name:"Alessandro Bastoni",       pos:"CB", nationality:"Italy",       apps:11, goals:1, assists:2, cs:5,  saves:0,  tackles:44, passes:960,  rating:8.1 },
          { id:1448, name:"Federico Dimarco",         pos:"CB", nationality:"Italy",       apps:10, goals:1, assists:3, cs:4,  saves:0,  tackles:36, passes:780,  rating:8.0 },
          { id:1449, name:"Nicolò Barella",           pos:"MID", nationality:"Italy",       apps:11, goals:3, assists:5, cs:0,  saves:0,  tackles:52, passes:1140, rating:8.5 },
          { id:1450, name:"Hakan Çalhanoğlu",         pos:"MID", nationality:"Türkiye",     apps:11, goals:4, assists:4, cs:0,  saves:0,  tackles:48, passes:1200, rating:8.4 },
          { id:1451, name:"Henrikh Mkhitaryan",       pos:"MID", nationality:"Armenia",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:920,  rating:7.8 },
          { id:1452, name:"Lautaro Martínez",         pos:"ST", nationality:"Argentina",   apps:11, goals:8, assists:3, cs:0,  saves:0,  tackles:16, passes:460,  rating:8.6 },
          { id:1453, name:"Marcus Thuram",            pos:"ST", nationality:"France",      apps:11, goals:6, assists:4, cs:0,  saves:0,  tackles:20, passes:480,  rating:8.2 },
          { id:1454, name:"Denzel Dumfries",          pos:"CB", nationality:"Netherlands", apps:9,  goals:1, assists:2, cs:4,  saves:0,  tackles:38, passes:680,  rating:7.7 },
          { id:1455, name:"Piotr Zieliński",          pos:"MID", nationality:"Poland",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:30, passes:780,  rating:7.7 },
          { id:1456, name:"Marko Arnautović",         pos:"ST", nationality:"Austria",     apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:7.0 }
        ]
      },
      {
        team: "Atalanta",
        players: [
          { id:1457, name:"Marco Carnesecchi",        pos:"GK",  nationality:"Italy",       apps:11, goals:0, assists:0, cs:5,  saves:46, tackles:0,  passes:640,  rating:7.9 },
          { id:1458, name:"Giorgio Scalvini",         pos:"CB", nationality:"Italy",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:800,  rating:7.8 },
          { id:1459, name:"Berat Djimsiti",           pos:"CB", nationality:"Albania",     apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:44, passes:720,  rating:7.5 },
          { id:1460, name:"Isak Hien",                pos:"CB", nationality:"Sweden",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:680,  rating:7.4 },
          { id:1461, name:"Matteo Ruggeri",           pos:"LB", nationality:"Italy",       apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:32, passes:640,  rating:7.5 },
          { id:1462, name:"Marten de Roon",           pos:"MID", nationality:"Netherlands", apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:60, passes:920,  rating:7.7 },
          { id:1463, name:"Éderson",                  pos:"MID", nationality:"Brazil",      apps:10, goals:3, assists:4, cs:0,  saves:0,  tackles:44, passes:980,  rating:8.0 },
          { id:1464, name:"Charles De Ketelaere",     pos:"MID", nationality:"Belgium",     apps:10, goals:5, assists:5, cs:0,  saves:0,  tackles:28, passes:760,  rating:8.2 },
          { id:1465, name:"Ademola Lookman",          pos:"LW", nationality:"Nigeria",     apps:11, goals:7, assists:4, cs:0,  saves:0,  tackles:20, passes:520,  rating:8.5 },
          { id:1466, name:"Mateo Retegui",            pos:"ST", nationality:"Italy",       apps:10, goals:8, assists:2, cs:0,  saves:0,  tackles:12, passes:340,  rating:8.3 },
          { id:1467, name:"Raoul Bellanova",          pos:"RB", nationality:"Italy",       apps:9,  goals:0, assists:3, cs:4,  saves:0,  tackles:34, passes:680,  rating:7.7 },
          { id:1468, name:"Mario Pašalić",            pos:"MID", nationality:"Croatia",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:30, passes:640,  rating:7.8 },
          { id:1469, name:"Gianluca Scamacca",        pos:"ST", nationality:"Italy",       apps:5,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:7.2 }
        ]
      },
      {
        team: "Borussia Dortmund",
        players: [
          { id:1470, name:"Gregor Kobel",             pos:"GK",  nationality:"Switzerland", apps:10, goals:0, assists:0, cs:4,  saves:48, tackles:0,  passes:620,  rating:7.7 },
          { id:1471, name:"Julian Ryerson",           pos:"CB", nationality:"Norway",      apps:9,  goals:0, assists:2, cs:3,  saves:0,  tackles:38, passes:640,  rating:7.4 },
          { id:1472, name:"Niklas Süle",              pos:"CB", nationality:"Germany",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:720,  rating:7.3 },
          { id:1473, name:"Emre Can",                 pos:"CB", nationality:"Germany",     apps:10, goals:1, assists:1, cs:4,  saves:0,  tackles:50, passes:780,  rating:7.5 },
          { id:1474, name:"Ramy Bensebaini",          pos:"CB", nationality:"Algeria",     apps:9,  goals:1, assists:2, cs:3,  saves:0,  tackles:34, passes:560,  rating:7.3 },
          { id:1475, name:"Marcel Sabitzer",          pos:"MID", nationality:"Austria",     apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:42, passes:880,  rating:7.8 },
          { id:1476, name:"Felix Nmecha",             pos:"MID", nationality:"Germany",     apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:40, passes:780,  rating:7.5 },
          { id:1477, name:"Pascal Groß",              pos:"MID", nationality:"Germany",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:860,  rating:7.7 },
          { id:1478, name:"Serhou Guirassy",          pos:"ST", nationality:"Guinea",      apps:10, goals:8, assists:2, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.2 },
          { id:1479, name:"Karim Adeyemi",            pos:"ST", nationality:"Germany",     apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:16, passes:360,  rating:7.7 },
          { id:1480, name:"Jamie Gittens",            pos:"ST", nationality:"England",     apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:18, passes:380,  rating:7.7 },
          { id:1481, name:"Donyell Malen",            pos:"RW", nationality:"Netherlands", apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.3 },
          { id:1482, name:"Giovanni Reyna",           pos:"MID", nationality:"USA",         apps:6,  goals:1, assists:2, cs:0,  saves:0,  tackles:18, passes:360,  rating:7.1 }
        ]
      },
      {
        team: "Atletico Madrid",
        players: [
          { id:1483, name:"Jan Oblak",                pos:"GK",  nationality:"Slovenia",    apps:11, goals:0, assists:0, cs:6,  saves:48, tackles:0,  passes:680,  rating:8.0 },
          { id:1484, name:"Nahuel Molina",            pos:"RB", nationality:"Argentina",   apps:10, goals:1, assists:2, cs:5,  saves:0,  tackles:38, passes:700,  rating:7.7 },
          { id:1485, name:"José María Giménez",       pos:"CB", nationality:"Uruguay",     apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:780,  rating:7.9 },
          { id:1486, name:"Robin Le Normand",         pos:"CB", nationality:"Spain",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:760,  rating:7.7 },
          { id:1487, name:"Javi Galán",               pos:"CB", nationality:"Spain",       apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:32, passes:620,  rating:7.3 },
          { id:1488, name:"Koke",                     pos:"MID", nationality:"Spain",       apps:10, goals:1, assists:3, cs:0,  saves:0,  tackles:42, passes:1020, rating:7.7 },
          { id:1489, name:"Rodrigo De Paul",          pos:"MID", nationality:"Argentina",   apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:46, passes:940,  rating:7.9 },
          { id:1490, name:"Marcos Llorente",          pos:"MID", nationality:"Spain",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:820,  rating:7.7 },
          { id:1491, name:"Antoine Griezmann",        pos:"ST", nationality:"France",      apps:11, goals:6, assists:5, cs:0,  saves:0,  tackles:18, passes:680,  rating:8.4 },
          { id:1492, name:"Julián Álvarez",           pos:"ST", nationality:"Argentina",   apps:11, goals:7, assists:3, cs:0,  saves:0,  tackles:20, passes:480,  rating:8.3 },
          { id:1493, name:"Pablo Barrios",            pos:"MID", nationality:"Spain",       apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:48, passes:820,  rating:7.7 },
          { id:1494, name:"Samuel Lino",              pos:"LW", nationality:"Portugal",    apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:380,  rating:7.5 },
          { id:1495, name:"Axel Witsel",              pos:"CB", nationality:"Belgium",     apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:36, passes:580,  rating:7.0 }
        ]
      },
      {
        team: "Bayer Leverkusen",
        players: [
          { id:1496, name:"Lukáš Hrádecký",           pos:"GK",  nationality:"Finland",     apps:10, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:620,  rating:7.7 },
          { id:1497, name:"Jeremie Frimpong",         pos:"CB", nationality:"Netherlands", apps:9,  goals:2, assists:3, cs:4,  saves:0,  tackles:36, passes:700,  rating:8.0 },
          { id:1498, name:"Jonathan Tah",             pos:"CB", nationality:"Germany",     apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:48, passes:800,  rating:7.7 },
          { id:1499, name:"Edmond Tapsoba",           pos:"CB", nationality:"Burkina Faso",apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:46, passes:780,  rating:7.6 },
          { id:1500, name:"Alejandro Grimaldo",       pos:"LB", nationality:"Spain",       apps:10, goals:2, assists:5, cs:4,  saves:0,  tackles:34, passes:780,  rating:8.2 },
          { id:1501, name:"Granit Xhaka",             pos:"MID", nationality:"Switzerland", apps:10, goals:2, assists:4, cs:0,  saves:0,  tackles:56, passes:1120, rating:8.1 },
          { id:1502, name:"Florian Wirtz",            pos:"MID", nationality:"Germany",     apps:10, goals:5, assists:7, cs:0,  saves:0,  tackles:26, passes:980,  rating:8.8 },
          { id:1503, name:"Exequiel Palacios",        pos:"MID", nationality:"Argentina",   apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:820,  rating:7.6 },
          { id:1504, name:"Victor Boniface",          pos:"ST", nationality:"Nigeria",     apps:8,  goals:5, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.9 },
          { id:1505, name:"Patrik Schick",            pos:"ST", nationality:"Czech Republic",apps:7, goals:3, assists:1, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.2 },
          { id:1506, name:"Jonas Hofmann",            pos:"ST", nationality:"Germany",     apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:18, passes:480,  rating:7.5 },
          { id:1507, name:"Amine Adli",               pos:"ST", nationality:"France",      apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:340,  rating:7.3 },
          { id:1508, name:"Piero Hincapié",           pos:"CB", nationality:"Ecuador",     apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:600,  rating:7.4 }
        ]
      },
      {
        team: "Monaco",
        players: [
          { id:1509, name:"Radosław Majecki",         pos:"GK",  nationality:"Poland",      apps:10, goals:0, assists:0, cs:5,  saves:46, tackles:0,  passes:580,  rating:7.5 },
          { id:1510, name:"Vanderson",                pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:34, passes:620,  rating:7.4 },
          { id:1511, name:"Thilo Kehrer",             pos:"CB", nationality:"Germany",     apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:680,  rating:7.2 },
          { id:1512, name:"Mohamed Salisu",           pos:"CB", nationality:"Ghana",       apps:10, goals:0, assists:0, cs:5,  saves:0,  tackles:48, passes:680,  rating:7.4 },
          { id:1513, name:"Caio Henrique",            pos:"CB", nationality:"Brazil",      apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:30, passes:580,  rating:7.3 },
          { id:1514, name:"Denis Zakaria",            pos:"MID", nationality:"Switzerland", apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:48, passes:820,  rating:7.6 },
          { id:1515, name:"Maghnes Akliouche",        pos:"MID", nationality:"France",      apps:10, goals:4, assists:5, cs:0,  saves:0,  tackles:24, passes:760,  rating:7.9 },
          { id:1516, name:"Takumi Minamino",          pos:"MID", nationality:"Japan",       apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:28, passes:680,  rating:7.5 },
          { id:1517, name:"Breel Embolo",             pos:"ST", nationality:"Switzerland", apps:9,  goals:4, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.4 },
          { id:1518, name:"Aleksandr Golovin",        pos:"MID", nationality:"Russia",      apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:640,  rating:7.5 },
          { id:1519, name:"Eliesse Ben Seghir",       pos:"ST", nationality:"France",      apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:14, passes:360,  rating:7.5 },
          { id:1520, name:"Folarin Balogun",          pos:"ST", nationality:"USA",         apps:7,  goals:3, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.2 },
          { id:1521, name:"Soungoutou Magassa",       pos:"CB", nationality:"France",      apps:7,  goals:0, assists:0, cs:3,  saves:0,  tackles:28, passes:420,  rating:6.9 }
        ]
      },
      {
        team: "Aston Villa",
        players: [
          { id:1522, name:"Emiliano Martínez",        pos:"GK",  nationality:"Argentina",   apps:10, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:620,  rating:8.0 },
          { id:1523, name:"Matty Cash",               pos:"CB", nationality:"Poland",      apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:620,  rating:7.3 },
          { id:1524, name:"Ezri Konsa",               pos:"CB", nationality:"England",     apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:46, passes:740,  rating:7.7 },
          { id:1525, name:"Pau Torres",               pos:"CB", nationality:"Spain",       apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:42, passes:780,  rating:7.7 },
          { id:1526, name:"Lucas Digne",              pos:"CB", nationality:"France",      apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:28, passes:560,  rating:7.1 },
          { id:1527, name:"Youri Tielemans",          pos:"MID", nationality:"Belgium",     apps:10, goals:2, assists:3, cs:0,  saves:0,  tackles:44, passes:940,  rating:7.8 },
          { id:1528, name:"John McGinn",              pos:"MID", nationality:"Scotland",    apps:10, goals:3, assists:3, cs:0,  saves:0,  tackles:40, passes:820,  rating:7.7 },
          { id:1529, name:"Boubacar Kamara",          pos:"MID", nationality:"France",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:880,  rating:7.6 },
          { id:1530, name:"Ollie Watkins",            pos:"ST", nationality:"England",     apps:10, goals:6, assists:4, cs:0,  saves:0,  tackles:14, passes:400,  rating:8.1 },
          { id:1531, name:"Leon Bailey",              pos:"ST", nationality:"Jamaica",     apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:16, passes:400,  rating:7.7 },
          { id:1532, name:"Morgan Rogers",            pos:"ST", nationality:"England",     apps:8,  goals:3, assists:3, cs:0,  saves:0,  tackles:16, passes:360,  rating:7.6 },
          { id:1533, name:"Jhon Durán",               pos:"ST", nationality:"Colombia",    apps:8,  goals:5, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.8 },
          { id:1534, name:"Nicolo Zaniolo",           pos:"MID", nationality:"Italy",       apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:320,  rating:7.2 }
        ]
      },
      {
        team: "Sporting CP",
        players: [
          { id:1535, name:"Israel",                   pos:"GK",  nationality:"Portugal",    apps:10, goals:0, assists:0, cs:5,  saves:42, tackles:0,  passes:580,  rating:7.6 },
          { id:1536, name:"Eduardo Quaresma",         pos:"CB", nationality:"Portugal",    apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:40, passes:680,  rating:7.3 },
          { id:1537, name:"Gonçalo Inácio",           pos:"CB", nationality:"Portugal",    apps:10, goals:0, assists:1, cs:5,  saves:0,  tackles:46, passes:780,  rating:7.7 },
          { id:1538, name:"Jeremiah St. Juste",       pos:"CB", nationality:"Netherlands", apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:44, passes:720,  rating:7.4 },
          { id:1539, name:"Geny Catamo",              pos:"CB", nationality:"Mozambique",  apps:9,  goals:1, assists:2, cs:4,  saves:0,  tackles:30, passes:560,  rating:7.4 },
          { id:1540, name:"Morten Hjulmand",          pos:"MID", nationality:"Denmark",     apps:10, goals:1, assists:2, cs:0,  saves:0,  tackles:56, passes:1000, rating:7.8 },
          { id:1541, name:"Hidemasa Morita",          pos:"MID", nationality:"Japan",       apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:50, passes:880,  rating:7.5 },
          { id:1542, name:"Francisco Trincão",        pos:"ST", nationality:"Portugal",    apps:9,  goals:4, assists:4, cs:0,  saves:0,  tackles:14, passes:440,  rating:7.8 },
          { id:1543, name:"Viktor Gyökeres",          pos:"ST", nationality:"Sweden",      apps:10, goals:10,assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:8.7 },
          { id:1544, name:"Pedro Gonçalves",          pos:"ST", nationality:"Portugal",    apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:16, passes:520,  rating:8.0 },
          { id:1545, name:"Ousmane Diomandé",         pos:"CB", nationality:"Ivory Coast", apps:8,  goals:1, assists:0, cs:4,  saves:0,  tackles:38, passes:640,  rating:7.6 },
          { id:1546, name:"Zeno Debast",              pos:"CB", nationality:"Belgium",     apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:580,  rating:7.3 },
          { id:1547, name:"Geovany Quenda",           pos:"ST", nationality:"Portugal",    apps:7,  goals:2, assists:3, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.5 }
        ]
      },
      {
        team: "Feyenoord",
        players: [
          { id:1548, name:"Timon Wellenreuther",      pos:"GK",  nationality:"Germany",     apps:9,  goals:0, assists:0, cs:3,  saves:40, tackles:0,  passes:560,  rating:7.1 },
          { id:1549, name:"Bart Nieuwkoop",           pos:"CB", nationality:"Netherlands", apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:32, passes:560,  rating:7.0 },
          { id:1550, name:"Dávid Hancko",             pos:"CB", nationality:"Slovakia",    apps:9,  goals:1, assists:1, cs:4,  saves:0,  tackles:42, passes:720,  rating:7.6 },
          { id:1551, name:"Gernot Trauner",           pos:"CB", nationality:"Austria",     apps:8,  goals:0, assists:0, cs:3,  saves:0,  tackles:38, passes:660,  rating:7.2 },
          { id:1552, name:"Hugo Bueno",               pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:28, passes:520,  rating:7.0 },
          { id:1553, name:"Quinten Timber",           pos:"MID", nationality:"Netherlands", apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:40, passes:820,  rating:7.7 },
          { id:1554, name:"Ramiz Zerrouki",           pos:"MID", nationality:"Algeria",     apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:46, passes:760,  rating:7.3 },
          { id:1555, name:"Calvin Stengs",            pos:"MID", nationality:"Netherlands", apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:22, passes:620,  rating:7.5 },
          { id:1556, name:"Igor Paixão",              pos:"LW", nationality:"Brazil",      apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:16, passes:400,  rating:7.6 },
          { id:1557, name:"Santiago Giménez",         pos:"ST", nationality:"Mexico",      apps:8,  goals:5, assists:1, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.8 },
          { id:1558, name:"Anis Hadj Moussa",         pos:"ST", nationality:"Algeria",     apps:7,  goals:2, assists:2, cs:0,  saves:0,  tackles:14, passes:320,  rating:7.2 },
          { id:1559, name:"Antoni Milambo",           pos:"MID", nationality:"Netherlands", apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.3 },
          { id:1560, name:"Luka Ivanušec",            pos:"MID", nationality:"Croatia",     apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:20, passes:380,  rating:7.0 }
        ]
      },
      {
        team: "Club Brugge",
        players: [
          { id:1561, name:"Simon Mignolet",           pos:"GK",  nationality:"Belgium",     apps:8,  goals:0, assists:0, cs:2,  saves:38, tackles:0,  passes:440,  rating:7.0 },
          { id:1562, name:"Maxim De Cuyper",          pos:"CB", nationality:"Belgium",     apps:8,  goals:1, assists:1, cs:2,  saves:0,  tackles:28, passes:520,  rating:7.1 },
          { id:1563, name:"Brandon Mechele",          pos:"CB", nationality:"Belgium",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:580,  rating:6.9 },
          { id:1564, name:"Joel Ordonez",             pos:"CB", nationality:"Ecuador",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:520,  rating:7.0 },
          { id:1565, name:"Andreas Skov Olsen",       pos:"CB", nationality:"Denmark",     apps:8,  goals:1, assists:1, cs:2,  saves:0,  tackles:26, passes:480,  rating:7.2 },
          { id:1566, name:"Hans Vanaken",             pos:"MID", nationality:"Belgium",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:36, passes:760,  rating:7.5 },
          { id:1567, name:"Casper Nielsen",           pos:"MID", nationality:"Denmark",     apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:40, passes:680,  rating:7.0 },
          { id:1568, name:"Raphael Onyedika",         pos:"MID", nationality:"Nigeria",     apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:44, passes:640,  rating:7.1 },
          { id:1569, name:"Ferran Jutglà",            pos:"ST", nationality:"Spain",       apps:8,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.2 },
          { id:1570, name:"Christos Tzolis",          pos:"ST", nationality:"Greece",      apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:300,  rating:7.0 },
          { id:1571, name:"Gustaf Nilsson",           pos:"ST", nationality:"Sweden",      apps:7,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:220,  rating:6.9 },
          { id:1572, name:"Bjorn Meijer",             pos:"CB", nationality:"Netherlands", apps:7,  goals:0, assists:1, cs:2,  saves:0,  tackles:24, passes:380,  rating:6.8 },
          { id:1573, name:"Chemsdine Talbi",          pos:"ST", nationality:"Morocco",     apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:10, passes:220,  rating:6.8 }
        ]
      },
      {
        team: "Brest",
        players: [
          { id:1574, name:"Marco Bizot",              pos:"GK",  nationality:"Netherlands", apps:10, goals:0, assists:0, cs:4,  saves:48, tackles:0,  passes:560,  rating:7.5 },
          { id:1575, name:"Lilian Brassier",          pos:"CB", nationality:"France",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:620,  rating:7.2 },
          { id:1576, name:"Brendan Chardonnet",       pos:"CB", nationality:"France",      apps:9,  goals:1, assists:0, cs:4,  saves:0,  tackles:40, passes:640,  rating:7.1 },
          { id:1577, name:"Mathias Pereira Lage",     pos:"CB", nationality:"France",      apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1578, name:"Haris Belkebla",           pos:"MID", nationality:"Algeria",     apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:42, passes:720,  rating:7.2 },
          { id:1579, name:"Pierre Lees-Melou",        pos:"MID", nationality:"France",      apps:9,  goals:2, assists:2, cs:0,  saves:0,  tackles:44, passes:760,  rating:7.4 },
          { id:1580, name:"Romain Del Castillo",      pos:"MID", nationality:"France",      apps:9,  goals:3, assists:3, cs:0,  saves:0,  tackles:28, passes:620,  rating:7.5 },
          { id:1581, name:"Mahdi Camara",             pos:"MID", nationality:"Guinea",      apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:44, passes:640,  rating:7.0 },
          { id:1582, name:"Ludovic Ajorque",          pos:"ST", nationality:"France",      apps:9,  goals:5, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.4 },
          { id:1583, name:"Steve Mounié",             pos:"ST", nationality:"Benin",       apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.0 },
          { id:1584, name:"Mama Baldé",               pos:"ST", nationality:"Guinea-Bissau",apps:8, goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:260,  rating:7.1 },
          { id:1585, name:"Hugo Magnetti",            pos:"MID", nationality:"France",      apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:36, passes:560,  rating:7.0 },
          { id:1586, name:"Karim Sawaneh",            pos:"ST", nationality:"Gambia",      apps:6,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:180,  rating:6.9 }
        ]
      },
      {
        team: "Girona",
        players: [
          { id:1587, name:"Pau López",                pos:"GK",  nationality:"Spain",       apps:8,  goals:0, assists:0, cs:1,  saves:42, tackles:0,  passes:520,  rating:6.8 },
          { id:1588, name:"Miguel Gutiérrez",         pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:1, cs:1,  saves:0,  tackles:28, passes:560,  rating:7.0 },
          { id:1589, name:"David López",              pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:0, cs:1,  saves:0,  tackles:36, passes:580,  rating:6.9 },
          { id:1590, name:"Daley Blind",              pos:"CB", nationality:"Netherlands", apps:8,  goals:0, assists:1, cs:1,  saves:0,  tackles:32, passes:540,  rating:7.0 },
          { id:1591, name:"Arnau Martínez",           pos:"CB", nationality:"Spain",       apps:7,  goals:0, assists:1, cs:1,  saves:0,  tackles:26, passes:480,  rating:6.9 },
          { id:1592, name:"Yangel Herrera",           pos:"MID", nationality:"Venezuela",   apps:8,  goals:2, assists:1, cs:0,  saves:0,  tackles:40, passes:720,  rating:7.2 },
          { id:1593, name:"Viktor Tsygankov",         pos:"ST", nationality:"Ukraine",     apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:16, passes:400,  rating:7.1 },
          { id:1594, name:"Iván Martín",              pos:"MID", nationality:"Spain",       apps:8,  goals:2, assists:2, cs:0,  saves:0,  tackles:28, passes:560,  rating:7.2 },
          { id:1595, name:"Donny van de Beek",        pos:"MID", nationality:"Netherlands", apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:30, passes:520,  rating:7.0 },
          { id:1596, name:"Bryan Gil",                pos:"ST", nationality:"Spain",       apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:12, passes:320,  rating:7.0 },
          { id:1597, name:"Abel Ruiz",                pos:"ST", nationality:"Spain",       apps:8,  goals:2, assists:1, cs:0,  saves:0,  tackles:10, passes:260,  rating:6.9 },
          { id:1598, name:"Oriol Romeu",              pos:"MID", nationality:"Spain",       apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:38, passes:580,  rating:6.8 },
          { id:1599, name:"Eric García",              pos:"CB", nationality:"Spain",       apps:7,  goals:0, assists:0, cs:1,  saves:0,  tackles:32, passes:520,  rating:7.0 }
        ]
      },
      {
        team: "Young Boys",
        players: [
          { id:1600, name:"David von Ballmoos",       pos:"GK",  nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:0,  saves:44, tackles:0,  passes:400,  rating:6.5 },
          { id:1601, name:"Lewin Blum",               pos:"CB", nationality:"Germany",     apps:8,  goals:0, assists:0, cs:0,  saves:0,  tackles:26, passes:440,  rating:6.4 },
          { id:1602, name:"Cédric Zesiger",           pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:0,  saves:0,  tackles:32, passes:480,  rating:6.5 },
          { id:1603, name:"Ulisses García",           pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:0, cs:0,  saves:0,  tackles:28, passes:420,  rating:6.4 },
          { id:1604, name:"Aurèle Amenda",            pos:"CB", nationality:"France",      apps:7,  goals:0, assists:0, cs:0,  saves:0,  tackles:28, passes:400,  rating:6.4 },
          { id:1605, name:"Joël Monteiro",            pos:"MID", nationality:"Switzerland", apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:30, passes:480,  rating:6.7 },
          { id:1606, name:"Cheikh Niasse",            pos:"MID", nationality:"Senegal",     apps:7,  goals:0, assists:1, cs:0,  saves:0,  tackles:34, passes:440,  rating:6.6 },
          { id:1607, name:"Kastriot Imeri",           pos:"ST", nationality:"Switzerland", apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:14, passes:300,  rating:6.7 },
          { id:1608, name:"Kwadwo Duah",              pos:"ST", nationality:"Ghana",       apps:8,  goals:1, assists:0, cs:0,  saves:0,  tackles:12, passes:240,  rating:6.5 },
          { id:1609, name:"Jean-Pierre Nsame",        pos:"ST", nationality:"Cameroon",    apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:6.6 },
          { id:1610, name:"Sandro Lauper",            pos:"MID", nationality:"Switzerland", apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:32, passes:460,  rating:6.6 },
          { id:1611, name:"Nicolas Ngamaleu",         pos:"ST", nationality:"Cameroon",    apps:6,  goals:1, assists:0, cs:0,  saves:0,  tackles:10, passes:200,  rating:6.5 },
          { id:1612, name:"Mohamed Camara",           pos:"MID", nationality:"Guinea",      apps:7,  goals:0, assists:0, cs:0,  saves:0,  tackles:36, passes:400,  rating:6.4 }
        ]
      },
      {
        team: "RB Salzburg",
        players: [
          { id:1613, name:"Janis Blaswich",           pos:"GK",  nationality:"Germany",     apps:8,  goals:0, assists:0, cs:2,  saves:36, tackles:0,  passes:440,  rating:6.9 },
          { id:1614, name:"Amar Dedić",               pos:"CB", nationality:"Bosnia",      apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:28, passes:500,  rating:7.0 },
          { id:1615, name:"Strahinja Pavlović",       pos:"CB", nationality:"Serbia",      apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:36, passes:560,  rating:7.1 },
          { id:1616, name:"Samson Baidoo",            pos:"CB", nationality:"Germany",     apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:480,  rating:6.9 },
          { id:1617, name:"Luca Nüssing",             pos:"CB", nationality:"Germany",     apps:7,  goals:0, assists:0, cs:2,  saves:0,  tackles:26, passes:400,  rating:6.8 },
          { id:1618, name:"Nicolas Capaldo",          pos:"MID", nationality:"Argentina",   apps:8,  goals:1, assists:1, cs:0,  saves:0,  tackles:38, passes:580,  rating:7.0 },
          { id:1619, name:"Maurits Kjærgaard",        pos:"MID", nationality:"Denmark",     apps:7,  goals:1, assists:2, cs:0,  saves:0,  tackles:34, passes:560,  rating:7.1 },
          { id:1620, name:"Oumar Solet",              pos:"CB", nationality:"France",      apps:6,  goals:0, assists:0, cs:1,  saves:0,  tackles:28, passes:380,  rating:6.8 },
          { id:1621, name:"Karim Konaté",             pos:"ST", nationality:"Ivory Coast", apps:8,  goals:3, assists:1, cs:0,  saves:0,  tackles:10, passes:240,  rating:7.0 },
          { id:1622, name:"Petar Ratkov",             pos:"ST", nationality:"Serbia",      apps:7,  goals:2, assists:1, cs:0,  saves:0,  tackles:8,  passes:200,  rating:6.9 },
          { id:1623, name:"Victorien Angban",         pos:"MID", nationality:"Ivory Coast", apps:6,  goals:0, assists:1, cs:0,  saves:0,  tackles:32, passes:380,  rating:6.7 },
          { id:1624, name:"Amankwah Forson",          pos:"ST", nationality:"Ghana",       apps:6,  goals:1, assists:1, cs:0,  saves:0,  tackles:10, passes:200,  rating:6.8 },
          { id:1625, name:"Bryan Okoh",               pos:"CB", nationality:"Switzerland", apps:5,  goals:0, assists:0, cs:1,  saves:0,  tackles:20, passes:280,  rating:6.6 }
        ]
      }
    ]
  },
  {
    season: "2025-26",
    teams: [
      {
        team: "Real Madrid",
        players: [
          { id:1366, name:"Thibaut Courtois",        pos:"GK",  nationality:"Belgium",     apps:9,  goals:0, assists:0, cs:5,  saves:36, tackles:0,  passes:740,  rating:8.2 },
          { id:1367, name:"Trent Alexander-Arnold",  pos:"RB", nationality:"England",     apps:9,  goals:2, assists:5, cs:4,  saves:0,  tackles:40, passes:1020, rating:8.3 },
          { id:1368, name:"Éder Militão",            pos:"CB", nationality:"Brazil",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:48, passes:860,  rating:7.9 },
          { id:1369, name:"Antonio Rüdiger",         pos:"CB", nationality:"Germany",     apps:10, goals:1, assists:0, cs:4,  saves:0,  tackles:46, passes:800,  rating:7.7 },
          { id:1370, name:"Ferland Mendy",           pos:"CB", nationality:"France",      apps:8,  goals:0, assists:1, cs:4,  saves:0,  tackles:34, passes:680,  rating:7.5 },
          { id:1371, name:"Jude Bellingham",         pos:"MID", nationality:"England",     apps:10, goals:9, assists:6, cs:0,  saves:0,  tackles:40, passes:1060, rating:9.0 },
          { id:1372, name:"Federico Valverde",       pos:"MID", nationality:"Uruguay",     apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:54, passes:1100, rating:8.3 },
          { id:1373, name:"Aurélien Tchouaméni",     pos:"MID", nationality:"France",      apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:60, passes:1000, rating:7.8 },
          { id:1374, name:"Kylian Mbappé",           pos:"ST", nationality:"France",      apps:10, goals:12,assists:5, cs:0,  saves:0,  tackles:14, passes:560,  rating:9.1 },
          { id:1375, name:"Vinícius Jr.",            pos:"ST", nationality:"Brazil",      apps:10, goals:8, assists:6, cs:0,  saves:0,  tackles:22, passes:500,  rating:8.8 },
          { id:1376, name:"Rodrygo",                 pos:"ST", nationality:"Brazil",      apps:9,  goals:6, assists:4, cs:0,  saves:0,  tackles:16, passes:440,  rating:8.1 },
          { id:1377, name:"Eduardo Camavinga",       pos:"MID", nationality:"France",      apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:44, passes:860,  rating:7.9 },
          { id:1378, name:"Endrick",                 pos:"ST", nationality:"Brazil",      apps:7,  goals:4, assists:2, cs:0,  saves:0,  tackles:10, passes:260,  rating:7.6 }
        ]
      },
      {
        team: "Manchester City",
        players: [
          { id:1379, name:"Ederson",                 pos:"GK",  nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:5,  saves:36, tackles:0,  passes:940,  rating:7.8 },
          { id:1380, name:"Kyle Walker",             pos:"CB", nationality:"England",     apps:9,  goals:0, assists:2, cs:4,  saves:0,  tackles:40, passes:860,  rating:7.7 },
          { id:1381, name:"Rúben Dias",              pos:"CB", nationality:"Portugal",    apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:920,  rating:8.0 },
          { id:1382, name:"Joško Gvardiol",          pos:"CB", nationality:"Croatia",     apps:10, goals:2, assists:1, cs:4,  saves:0,  tackles:44, passes:820,  rating:7.9 },
          { id:1383, name:"Manuel Akanji",           pos:"CB", nationality:"Switzerland", apps:8,  goals:0, assists:1, cs:3,  saves:0,  tackles:36, passes:720,  rating:7.5 },
          { id:1384, name:"Rodri",                   pos:"MID", nationality:"Spain",       apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:62, passes:1280, rating:8.5 },
          { id:1385, name:"Kevin De Bruyne",         pos:"MID", nationality:"Belgium",     apps:8,  goals:3, assists:6, cs:0,  saves:0,  tackles:30, passes:1200, rating:8.6 },
          { id:1386, name:"Bernardo Silva",          pos:"MID", nationality:"Portugal",    apps:10, goals:3, assists:5, cs:0,  saves:0,  tackles:32, passes:1180, rating:8.3 },
          { id:1387, name:"Phil Foden",              pos:"ST", nationality:"England",     apps:10, goals:6, assists:5, cs:0,  saves:0,  tackles:22, passes:780,  rating:8.5 },
          { id:1388, name:"Erling Haaland",          pos:"ST", nationality:"Norway",      apps:10, goals:13,assists:3, cs:0,  saves:0,  tackles:10, passes:320,  rating:9.0 },
          { id:1389, name:"Savinho",                 pos:"ST", nationality:"Brazil",      apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:16, passes:420,  rating:7.8 },
          { id:1390, name:"İlkay Gündoğan",          pos:"MID", nationality:"Germany",     apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:38, passes:1020, rating:7.9 },
          { id:1391, name:"Omar Marmoush",           pos:"ST", nationality:"Egypt",       apps:8,  goals:6, assists:3, cs:0,  saves:0,  tackles:18, passes:420,  rating:8.1 }
        ]
      },
      {
        team: "Arsenal",
        players: [
          { id:1392, name:"David Raya",              pos:"GK",  nationality:"Spain",       apps:9,  goals:0, assists:0, cs:6,  saves:42, tackles:0,  passes:700,  rating:8.0 },
          { id:1393, name:"Ben White",               pos:"CB", nationality:"England",     apps:9,  goals:0, assists:2, cs:5,  saves:0,  tackles:42, passes:800,  rating:7.8 },
          { id:1394, name:"William Saliba",          pos:"CB", nationality:"France",      apps:10, goals:2, assists:0, cs:6,  saves:0,  tackles:54, passes:900,  rating:8.2 },
          { id:1395, name:"Gabriel Magalhães",       pos:"CB", nationality:"Brazil",      apps:10, goals:3, assists:0, cs:5,  saves:0,  tackles:50, passes:840,  rating:8.0 },
          { id:1396, name:"Riccardo Calafiori",      pos:"CB", nationality:"Italy",       apps:8,  goals:1, assists:1, cs:4,  saves:0,  tackles:36, passes:720,  rating:7.7 },
          { id:1397, name:"Martin Ødegaard",         pos:"MID", nationality:"Norway",      apps:10, goals:5, assists:8, cs:0,  saves:0,  tackles:32, passes:1300, rating:8.8 },
          { id:1398, name:"Declan Rice",             pos:"MID", nationality:"England",     apps:10, goals:4, assists:4, cs:0,  saves:0,  tackles:64, passes:1200, rating:8.5 },
          { id:1399, name:"Mikel Merino",            pos:"MID", nationality:"Spain",       apps:9,  goals:4, assists:3, cs:0,  saves:0,  tackles:46, passes:900,  rating:8.1 },
          { id:1400, name:"Bukayo Saka",             pos:"ST", nationality:"England",     apps:10, goals:7, assists:8, cs:0,  saves:0,  tackles:22, passes:700,  rating:9.0 },
          { id:1401, name:"Gabriel Martinelli",      pos:"ST", nationality:"Brazil",      apps:9,  goals:5, assists:4, cs:0,  saves:0,  tackles:18, passes:500,  rating:8.0 },
          { id:1402, name:"Kai Havertz",             pos:"ST", nationality:"Germany",     apps:9,  goals:6, assists:4, cs:0,  saves:0,  tackles:24, passes:540,  rating:8.2 },
          { id:1403, name:"Leandro Trossard",        pos:"MID", nationality:"Belgium",     apps:8,  goals:4, assists:4, cs:0,  saves:0,  tackles:20, passes:580,  rating:8.0 },
          { id:1404, name:"Ethan Nwaneri",           pos:"ST", nationality:"England",     apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:12, passes:280,  rating:7.5 }
        ]
      },
      {
        team: "PSG",
        players: [
          { id:1405, name:"Gianluigi Donnarumma",    pos:"GK",  nationality:"Italy",       apps:10, goals:0, assists:0, cs:5,  saves:44, tackles:0,  passes:700,  rating:7.9 },
          { id:1406, name:"Achraf Hakimi",           pos:"RB", nationality:"Morocco",     apps:10, goals:2, assists:5, cs:4,  saves:0,  tackles:44, passes:840,  rating:8.2 },
          { id:1407, name:"Marquinhos",              pos:"CB", nationality:"Brazil",      apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:54, passes:900,  rating:8.1 },
          { id:1408, name:"Willian Pacho",           pos:"CB", nationality:"Ecuador",     apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:50, passes:800,  rating:7.8 },
          { id:1409, name:"Nuno Mendes",             pos:"CB", nationality:"Portugal",    apps:9,  goals:1, assists:4, cs:4,  saves:0,  tackles:38, passes:740,  rating:8.0 },
          { id:1410, name:"Vitinha",                 pos:"MID", nationality:"Portugal",    apps:10, goals:4, assists:6, cs:0,  saves:0,  tackles:42, passes:1300, rating:8.5 },
          { id:1411, name:"Fabián Ruiz",             pos:"MID", nationality:"Spain",       apps:9,  goals:3, assists:5, cs:0,  saves:0,  tackles:40, passes:1120, rating:8.2 },
          { id:1412, name:"Warren Zaïre-Emery",      pos:"MID", nationality:"France",      apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:46, passes:1020, rating:8.1 },
          { id:1413, name:"Ousmane Dembélé",         pos:"ST", nationality:"France",      apps:10, goals:8, assists:8, cs:0,  saves:0,  tackles:22, passes:600,  rating:8.8 },
          { id:1414, name:"Bradley Barcola",         pos:"ST", nationality:"France",      apps:10, goals:7, assists:6, cs:0,  saves:0,  tackles:18, passes:500,  rating:8.5 },
          { id:1415, name:"Gonçalo Ramos",           pos:"ST", nationality:"Portugal",    apps:9,  goals:8, assists:3, cs:0,  saves:0,  tackles:12, passes:380,  rating:8.3 },
          { id:1416, name:"João Neves",              pos:"MID", nationality:"Portugal",    apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:48, passes:900,  rating:8.0 },
          { id:1417, name:"Desire Doué",             pos:"ST", nationality:"France",      apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:18, passes:340,  rating:7.9 }
        ]
      },
      {
        team: "Barcelona",
        players: [
          { id:1418, name:"Wojciech Szczęsny",       pos:"GK",  nationality:"Poland",      apps:9,  goals:0, assists:0, cs:5,  saves:38, tackles:0,  passes:620,  rating:7.7 },
          { id:1419, name:"Jules Koundé",            pos:"CB", nationality:"France",      apps:10, goals:2, assists:2, cs:5,  saves:0,  tackles:44, passes:840,  rating:8.0 },
          { id:1420, name:"Pau Cubarsí",             pos:"CB", nationality:"Spain",       apps:10, goals:1, assists:0, cs:5,  saves:0,  tackles:50, passes:860,  rating:8.0 },
          { id:1421, name:"Íñigo Martínez",          pos:"CB", nationality:"Spain",       apps:8,  goals:0, assists:0, cs:4,  saves:0,  tackles:42, passes:740,  rating:7.6 },
          { id:1422, name:"Alejandro Balde",         pos:"CB", nationality:"Spain",       apps:9,  goals:1, assists:4, cs:4,  saves:0,  tackles:36, passes:740,  rating:7.9 },
          { id:1423, name:"Pedri",                   pos:"MID", nationality:"Spain",       apps:10, goals:3, assists:6, cs:0,  saves:0,  tackles:36, passes:1220, rating:8.5 },
          { id:1424, name:"Frenkie de Jong",         pos:"MID", nationality:"Netherlands", apps:9,  goals:1, assists:3, cs:0,  saves:0,  tackles:44, passes:1140, rating:8.0 },
          { id:1425, name:"Dani Olmo",               pos:"MID", nationality:"Spain",       apps:9,  goals:4, assists:5, cs:0,  saves:0,  tackles:30, passes:900,  rating:8.3 },
          { id:1426, name:"Lamine Yamal",            pos:"ST", nationality:"Spain",       apps:10, goals:9, assists:9, cs:0,  saves:0,  tackles:18, passes:640,  rating:9.2 },
          { id:1427, name:"Raphinha",                pos:"ST", nationality:"Brazil",      apps:10, goals:9, assists:6, cs:0,  saves:0,  tackles:20, passes:580,  rating:8.9 },
          { id:1428, name:"Robert Lewandowski",      pos:"ST", nationality:"Poland",      apps:9,  goals:10,assists:4, cs:0,  saves:0,  tackles:10, passes:400,  rating:8.7 },
          { id:1429, name:"Marc Casadó",             pos:"MID", nationality:"Spain",       apps:8,  goals:0, assists:1, cs:0,  saves:0,  tackles:56, passes:1060, rating:7.7 },
          { id:1430, name:"Ferran Torres",           pos:"ST", nationality:"Spain",       apps:6,  goals:3, assists:2, cs:0,  saves:0,  tackles:12, passes:300,  rating:7.5 }
        ]
      },
      {
        team: "Liverpool FC",
        players: [
          { id:2185, name:"Alisson Becker",           pos:"GK",  nationality:"Brazil",      apps:9,  goals:0, assists:0, cs:5,  saves:40, tackles:0,  passes:700,  rating:8.2 },
          { id:2186, name:"Trent Alexander-Arnold",   pos:"RB", nationality:"England",     apps:9,  goals:1, assists:4, cs:4,  saves:0,  tackles:28, passes:840,  rating:8.1 },
          { id:2187, name:"Virgil van Dijk",          pos:"CB", nationality:"Netherlands", apps:9,  goals:1, assists:0, cs:5,  saves:0,  tackles:42, passes:740,  rating:8.3 },
          { id:2188, name:"Ibrahima Konaté",          pos:"CB", nationality:"France",      apps:9,  goals:0, assists:0, cs:5,  saves:0,  tackles:38, passes:620,  rating:7.8 },
          { id:2189, name:"Andrew Robertson",         pos:"LB", nationality:"Scotland",    apps:8,  goals:0, assists:3, cs:4,  saves:0,  tackles:24, passes:660,  rating:7.7 },
          { id:2190, name:"Ryan Gravenberch",         pos:"MID", nationality:"Netherlands", apps:9,  goals:2, assists:3, cs:0,  saves:0,  tackles:40, passes:760,  rating:7.8 },
          { id:2191, name:"Alexis Mac Allister",      pos:"MID", nationality:"Argentina",   apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:34, passes:820,  rating:7.9 },
          { id:2192, name:"Dominik Szoboszlai",       pos:"MID", nationality:"Hungary",     apps:8,  goals:3, assists:4, cs:0,  saves:0,  tackles:26, passes:680,  rating:7.7 },
          { id:2193, name:"Mohamed Salah",            pos:"RW", nationality:"Egypt",       apps:9,  goals:9, assists:7, cs:0,  saves:0,  tackles:10, passes:440,  rating:8.8 },
          { id:2194, name:"Cody Gakpo",               pos:"LW", nationality:"Netherlands", apps:9,  goals:5, assists:3, cs:0,  saves:0,  tackles:12, passes:360,  rating:7.7 },
          { id:2195, name:"Darwin Núñez",             pos:"LW", nationality:"Uruguay",     apps:8,  goals:6, assists:2, cs:0,  saves:0,  tackles:8,  passes:240,  rating:7.6 },
          { id:2196, name:"Luis Díaz",                pos:"LW", nationality:"Colombia",    apps:8,  goals:5, assists:4, cs:0,  saves:0,  tackles:10, passes:320,  rating:7.8 },
          { id:2197, name:"Harvey Elliott",           pos:"MID", nationality:"England",     apps:6,  goals:2, assists:2, cs:0,  saves:0,  tackles:20, passes:480,  rating:7.3 }
        ]
      },
      {
        team: "Atalanta BC",
        players: [
          { id:2198, name:"Marco Carnesecchi",        pos:"GK",  nationality:"Italy",       apps:9,  goals:0, assists:0, cs:4,  saves:42, tackles:0,  passes:540,  rating:7.5 },
          { id:2199, name:"Raoul Bellanova",          pos:"RB", nationality:"Italy",       apps:9,  goals:1, assists:3, cs:3,  saves:0,  tackles:26, passes:580,  rating:7.5 },
          { id:2200, name:"Isak Hien",                pos:"CB", nationality:"Sweden",      apps:9,  goals:0, assists:0, cs:4,  saves:0,  tackles:38, passes:540,  rating:7.2 },
          { id:2201, name:"Giorgio Scalvini",         pos:"CB", nationality:"Italy",       apps:9,  goals:0, assists:1, cs:4,  saves:0,  tackles:36, passes:560,  rating:7.3 },
          { id:2202, name:"Matteo Ruggeri",           pos:"LB", nationality:"Italy",       apps:8,  goals:0, assists:2, cs:3,  saves:0,  tackles:22, passes:500,  rating:7.2 },
          { id:2203, name:"Éderson",                  pos:"MID", nationality:"Brazil",      apps:9,  goals:3, assists:4, cs:0,  saves:0,  tackles:44, passes:720,  rating:7.8 },
          { id:2204, name:"Marten de Roon",           pos:"MID", nationality:"Netherlands", apps:9,  goals:1, assists:2, cs:0,  saves:0,  tackles:46, passes:680,  rating:7.3 },
          { id:2205, name:"Mario Pašalić",            pos:"MID", nationality:"Croatia",     apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:22, passes:520,  rating:7.6 },
          { id:2206, name:"Charles De Ketelaere",     pos:"MID", nationality:"Belgium",     apps:9,  goals:5, assists:5, cs:0,  saves:0,  tackles:24, passes:720,  rating:8.0 },
          { id:2207, name:"Gianluca Scamacca",        pos:"ST", nationality:"Italy",       apps:8,  goals:7, assists:2, cs:0,  saves:0,  tackles:8,  passes:260,  rating:7.7 },
          { id:2208, name:"Ademola Lookman",          pos:"LW", nationality:"Nigeria",     apps:9,  goals:9, assists:5, cs:0,  saves:0,  tackles:10, passes:360,  rating:8.3 },
          { id:2209, name:"Davide Zappacosta",        pos:"CB", nationality:"Italy",       apps:6,  goals:1, assists:2, cs:2,  saves:0,  tackles:18, passes:400,  rating:7.2 },
          { id:2210, name:"Nicola Zaniolo",           pos:"ST", nationality:"Italy",       apps:6,  goals:3, assists:2, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 }
        ]
      },
      {
        team: "Feyenoord",
        players: [
          { id:2211, name:"Timon Wellenreuther",      pos:"GK",  nationality:"Germany",     apps:8,  goals:0, assists:0, cs:2,  saves:38, tackles:0,  passes:480,  rating:7.0 },
          { id:2212, name:"Quilindschy Hartman",      pos:"RB", nationality:"Netherlands", apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:24, passes:480,  rating:7.0 },
          { id:2213, name:"Gernot Trauner",           pos:"CB", nationality:"Austria",     apps:8,  goals:0, assists:0, cs:2,  saves:0,  tackles:32, passes:500,  rating:7.1 },
          { id:2214, name:"David Hancko",             pos:"CB", nationality:"Slovakia",    apps:8,  goals:0, assists:1, cs:2,  saves:0,  tackles:30, passes:520,  rating:7.2 },
          { id:2215, name:"Marcos López",             pos:"LB", nationality:"Peru",        apps:7,  goals:0, assists:2, cs:2,  saves:0,  tackles:20, passes:440,  rating:7.0 },
          { id:2216, name:"Quinten Timber",           pos:"MID", nationality:"Netherlands", apps:8,  goals:2, assists:3, cs:0,  saves:0,  tackles:34, passes:600,  rating:7.4 },
          { id:2217, name:"Ramiz Zerrouki",           pos:"MID", nationality:"Netherlands", apps:7,  goals:1, assists:1, cs:0,  saves:0,  tackles:38, passes:560,  rating:7.1 },
          { id:2218, name:"Mats Wieffer",             pos:"MID", nationality:"Netherlands", apps:8,  goals:1, assists:2, cs:0,  saves:0,  tackles:40, passes:620,  rating:7.3 },
          { id:2219, name:"Yankuba Minteh",           pos:"RW", nationality:"Gambia",      apps:8,  goals:4, assists:3, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.4 },
          { id:2220, name:"Santiago Giménez",         pos:"ST", nationality:"Mexico",      apps:8,  goals:7, assists:2, cs:0,  saves:0,  tackles:6,  passes:220,  rating:7.8 },
          { id:2221, name:"Igor Paixão",              pos:"LW", nationality:"Brazil",      apps:8,  goals:5, assists:4, cs:0,  saves:0,  tackles:10, passes:300,  rating:7.6 },
          { id:2222, name:"Calvin Stengs",            pos:"RW", nationality:"Netherlands", apps:7,  goals:3, assists:3, cs:0,  saves:0,  tackles:10, passes:280,  rating:7.3 },
          { id:2223, name:"Ayase Ueda",               pos:"ST", nationality:"Japan",       apps:6,  goals:4, assists:1, cs:0,  saves:0,  tackles:6,  passes:180,  rating:7.3 }
        ]
      }
    ]
  }
];
