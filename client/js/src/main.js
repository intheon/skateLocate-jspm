/* this is the main reference point for the app, all stuff is effectively pulled into here, and then bundled with jspm */

// library imports
import angular from "angular";
import ngMap from "ngmap";
import $ from "jquery";
import material from "materialize-css";

// services
import allParksSrv from "./services/all-parks.service.js";
import helpersSrv from "./services/helpers.service.js";

// controllers
import MainCtrl from "./controllers/main.controller.js";
//import MapCtrl from "./controllers/map.controller.js";

// directives
import headerGraphic from "./directives/header.directive.js";
import highestRankedItems from "./directives/highest-ranked-items.directive.js";
import existingSkateparkInfo from "./directives/existing-skatepark-info.directive.js";
import recentlyAddedItems from "./directives/recently-added-items.directive.js";
import filterItemsByTag from "./directives/filter-items-by-tag.directive.js";
import infoTriangle from "./directives/info-triangle.directive.js";
import searchBar from "./directives/search.directive.js";


// filters


// GO!
angular.module("ngSkateApp", ["ngMap"])
	.controller("MainCtrl", MainCtrl)
	//.controller("MapCtrl", MapCtrl)
	.directive("headerGraphic", headerGraphic)
	.directive("highestRankedItems", highestRankedItems)
	.directive("recentlyAddedItems", recentlyAddedItems)
	.directive("infoTriangle", infoTriangle)
	.directive("filterItemsByTag", filterItemsByTag)
	.directive("existingSkateparkInfo", existingSkateparkInfo)
	.directive("searchBar", searchBar)
	.service("allParksSrv", allParksSrv)
	.service("helpersSrv", helpersSrv);
