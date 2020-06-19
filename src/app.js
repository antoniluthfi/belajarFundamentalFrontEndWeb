import macacaFuscata from "./img/Macaca fuscata.jpg";
import lasiorhinusLatifrons from "./img/Lasiorhinus latifrons.jpg"
import lamprotornisNitens from "./img/Lamprotornis nitens.jpg";
import neophronPercnopterus from "./img/Neophron percnopterus.jpg";
import sauromalusObesus from "./img/Sauromalus obesus.jpg";
import taurotagusOryx from "./img/Taurotagus oryx.jpg";
import "regenerator-runtime";
import "./style/style.css";
import "./script/component/nav-bar.js";
import "./script/component/search-bar.js";
import "./script/component/title-bar.js";
import "./script/component/box-foot.js";
import main from "./script/main.js";
 
document.addEventListener("DOMContentLoaded", main);
document.querySelector("#macacaFuscata").src = macacaFuscata;
document.querySelector("#lasiorhinusLatifrons").src = lasiorhinusLatifrons;
document.querySelector("#lamprotornisNitens").src = lamprotornisNitens;
document.querySelector("#neophronPercnopterus").src = neophronPercnopterus;
document.querySelector("#sauromalusObesus").src = sauromalusObesus;
document.querySelector("#taurotagusOryx").src = taurotagusOryx;
