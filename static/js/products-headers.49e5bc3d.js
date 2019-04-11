(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docs/products/headers.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a("./node_modules/react/index.js"),l=a.n(n),s=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./node_modules/docz/dist/index.m.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=o(this,m(t).call(this,e))).layout=null,a}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,a=d(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",components:t},l.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"headers"}},"Headers"),l.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"page-header"}},"Page Header"),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-one"}},"Example one"),l.a.createElement(r.e,{__position:0,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Clusters</span>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Clusters"))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-two"}},"Example two"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-an-global-level-action-button"}},"Page header with an global level action button"),l.a.createElement(r.e,{__position:1,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Clusters</span>\n    </div>\n    <div class="outlet-header__actions ml-auto">\n      <div>\n        <button class="btn btn-primary" title="Import new cluster">\n          Connect a new Cluster\n        </button>\n      </div>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Clusters")),l.a.createElement("div",{class:"outlet-header__actions ml-auto"},l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-primary",title:"Import new cluster"},"Connect a new Cluster")))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-three"}},"Example three"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-back-button"}},"Page header with back button"),l.a.createElement(r.e,{__position:2,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Overview"))),l.a.createElement("div",{class:"outlet-header-meta-block"},l.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-four"}},"Example four"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-a-back-navigation-button"}},"Page header with a back navigation button"),l.a.createElement(r.e,{__position:3,__code:'<div class="outlet-header">\n  <div class="outlet-header-navigation">\n    <button class="outlet-header-navigation_button">\n      <span class="fa fa-arrow-left outlet-header-navigation_icon" />\n      <span>Back</span>\n    </button>\n  </div>\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header-navigation"},l.a.createElement("button",{class:"outlet-header-navigation_button"},l.a.createElement("span",{class:"fa fa-arrow-left outlet-header-navigation_icon"}),l.a.createElement("span",null,"Back"))),l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Overview"))),l.a.createElement("div",{class:"outlet-header-meta-block"},l.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-five"}},"Example five"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"section-header"}},"Section header"),l.a.createElement(r.e,{__position:4,__code:'<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">Volumes</span>\n  </div>\n  <div class="section-header-controls">\n    <div class="section-header-controls_item">\n      <div class="input-search-icon_wrapper">\n        <div class="input-search-icon" />\n        <input class="form-control" placeholder="Find an application" />\n      </div>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-edit" />\n      </button>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-filter" />\n      </button>\n    </div>\n    <div class="section-header-controls_item ml-auto">\n      <button class="btn btn-primary">Primary action</button>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"section-header"},l.a.createElement("div",{class:"section-header_title"},l.a.createElement("span",{class:"section-header_title__text"},"Volumes")),l.a.createElement("div",{class:"section-header-controls"},l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("div",{class:"input-search-icon_wrapper"},l.a.createElement("div",{class:"input-search-icon"}),l.a.createElement("input",{class:"form-control",placeholder:"Find an application"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-edit"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-filter"}))),l.a.createElement("div",{class:"section-header-controls_item ml-auto"},l.a.createElement("button",{class:"btn btn-primary"},"Primary action"))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-six"}},"Example six"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header-section-header-and-contents"}},"Page header, section header and contents"),l.a.createElement(r.e,{__position:5,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>\n<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">Volumes</span>\n  </div>\n  <div class="section-header-controls">\n    <div class="section-header-controls_item">\n      <div class="input-search-icon_wrapper">\n        <div class="input-search-icon" />\n        <input class="form-control" placeholder="Find an application" />\n      </div>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-edit" />\n      </button>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-filter" />\n      </button>\n    </div>\n    <div class="section-header-controls_item ml-auto">\n      <button class="btn btn-primary">Primary action</button>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Overview"))),l.a.createElement("div",{class:"outlet-header-meta-block"},l.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active"))),l.a.createElement("div",{class:"section-header"},l.a.createElement("div",{class:"section-header_title"},l.a.createElement("span",{class:"section-header_title__text"},"Volumes")),l.a.createElement("div",{class:"section-header-controls"},l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("div",{class:"input-search-icon_wrapper"},l.a.createElement("div",{class:"input-search-icon"}),l.a.createElement("input",{class:"form-control",placeholder:"Find an application"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-edit"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-filter"}))),l.a.createElement("div",{class:"section-header-controls_item ml-auto"},l.a.createElement("button",{class:"btn btn-primary"},"Primary action"))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-seven"}},"Example seven"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"metadata-bar"}},"Metadata bar"),l.a.createElement(r.e,{__position:6,__code:'<div class="outlet-header-bar">\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Schedule</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>SCH-1</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Cluster</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>WhiteWeather</span>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header-bar"},l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Schedule")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"SCH-1"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Cluster")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"WhiteWeather"))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-eight"}},"Example eight"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header--metadata-bar"}},"Page header , Metadata bar"),l.a.createElement(r.e,{__position:7,__code:'<div class="outlet-header">\n  <div class="outlet-header-navigation">\n    <button class="outlet-header-navigation_button">\n      <span class="fa fa-arrow-left outlet-header-navigation_icon" />\n      <span>Back</span>\n    </button>\n  </div>\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>DMaaS</span>\n    </div>\n  </div>\n</div>\n<div class="outlet-header-bar">\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Schedule</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>SCH-1</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Cluster</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>WhiteWeather</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Application</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>Redis</span>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header-navigation"},l.a.createElement("button",{class:"outlet-header-navigation_button"},l.a.createElement("span",{class:"fa fa-arrow-left outlet-header-navigation_icon"}),l.a.createElement("span",null,"Back"))),l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"DMaaS")))),l.a.createElement("div",{class:"outlet-header-bar"},l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Schedule")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"SCH-1"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Cluster")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"WhiteWeather"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Application")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"Redis"))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-nine"}},"Example nine"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header--metadata-bar-table-contents"}},"Page header , Metadata bar, Table contents"),l.a.createElement(r.e,{__position:8,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>DMaaS</span>\n    </div>\n  </div>\n</div>\n<div class="outlet-header-bar">\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Schedule</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>SCH-1</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Cluster</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>WhiteWeather</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Application</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>Redis</span>\n    </div>\n  </div>\n</div>\n<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">List of Backups</span>\n  </div>\n</div>\n<table class="table table-hover">\n  <thead>\n    <tr>\n      <th scope="col">Name</th>\n      <th scope="col">Status</th>\n      <th scope="col">K8s version</th>\n      <th scope="col">Nodes</th>\n      <th scope="col" />\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Dev-cluster-yg238</td>\n      <td>\n        <span class="badge badge-gradient-success badge-pill">Active</span>\n      </td>\n      <td>v1.10.11-gke.1</td>\n      <td>12</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Testing-cluster-tr33d</td>\n      <td>\n        <span class="badge badge-gradient-danger badge-pill">Inactive</span>\n      </td>\n      <td>v1.10</td>\n      <td>3</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Staging-setup-df12s</td>\n      <td>\n        <span class="badge badge-gradient-warning badge-pill">Degrated</span>\n      </td>\n      <td>v1.10.11</td>\n      <td>6</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Monitor-cluster-8hjq7</td>\n      <td>\n        <span class="badge badge-gradient-success badge-pill">Active</span>\n      </td>\n      <td>v1.13.2</td>\n      <td>12</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Asia-scope-72dr4</td>\n      <td>\n        <span class="badge badge-gradient-danger badge-pill">Offline</span>\n      </td>\n      <td>v1.10.13</td>\n      <td>12</td>\n      <td />\n    </tr>\n  </tbody>\n</table>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"DMaaS")))),l.a.createElement("div",{class:"outlet-header-bar"},l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Schedule")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"SCH-1"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Cluster")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"WhiteWeather"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Application")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"Redis")))),l.a.createElement("div",{class:"section-header"},l.a.createElement("div",{class:"section-header_title"},l.a.createElement("span",{class:"section-header_title__text"},"List of Backups"))),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"K8s version"),l.a.createElement("th",{scope:"col"},"Nodes"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Dev-cluster-yg238"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")),l.a.createElement("td",null,"v1.10.11-gke.1"),l.a.createElement("td",null,"12"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Testing-cluster-tr33d"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-danger badge-pill"},"Inactive")),l.a.createElement("td",null,"v1.10"),l.a.createElement("td",null,"3"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Staging-setup-df12s"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-warning badge-pill"},"Degrated")),l.a.createElement("td",null,"v1.10.11"),l.a.createElement("td",null,"6"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Monitor-cluster-8hjq7"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")),l.a.createElement("td",null,"v1.13.2"),l.a.createElement("td",null,"12"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Asia-scope-72dr4"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-danger badge-pill"},"Offline")),l.a.createElement("td",null,"v1.10.13"),l.a.createElement("td",null,"12"),l.a.createElement("td",null))))),l.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"example-ten"}},"Example Ten"),l.a.createElement(s.MDXTag,{name:"h5",components:t,props:{id:"page-header-bredcrumbs-metadata-bar-table-contents"}},"Page header, Bredcrumbs, Metadata bar, Table contents"),l.a.createElement(r.e,{__position:9,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Application Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>\n<div class="outlet-header-bar">\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Type</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <a href="/">\n        <span>statefulset</span>\n      </a>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Kind</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>ns-elasticsearch</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-bar_item">\n    <div class="outlet-header-meta-bar_title">\n      <span>Replica</span>\n    </div>\n    <div class="outlet-header-meta-bar_value">\n      <span>3</span>\n    </div>\n  </div>\n</div>\n<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">Volumes in statefulset</span>\n  </div>\n  <div class="section-header-controls">\n    <div class="section-header-controls_item">\n      <div class="input-search-icon_wrapper">\n        <div class="input-search-icon" />\n        <input class="form-control" placeholder="search" />\n      </div>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-edit" />\n      </button>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-filter" />\n      </button>\n    </div>\n    <div class="section-header-controls_item ml-auto">\n      <button class="btn btn-primary">Primary action</button>\n    </div>\n  </div>\n</div>\n<table class="table table-hover">\n  <thead>\n    <tr>\n      <th scope="col">Name</th>\n      <th scope="col">Status</th>\n      <th scope="col">K8s version</th>\n      <th scope="col">Nodes</th>\n      <th scope="col" />\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Dev-cluster-yg238</td>\n      <td>\n        <span class="badge badge-gradient-success badge-pill">Active</span>\n      </td>\n      <td>v1.10.11-gke.1</td>\n      <td>12</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Testing-cluster-tr33d</td>\n      <td>\n        <span class="badge badge-gradient-danger badge-pill">Inactive</span>\n      </td>\n      <td>v1.10</td>\n      <td>3</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Staging-setup-df12s</td>\n      <td>\n        <span class="badge badge-gradient-warning badge-pill">Degrated</span>\n      </td>\n      <td>v1.10.11</td>\n      <td>6</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Monitor-cluster-8hjq7</td>\n      <td>\n        <span class="badge badge-gradient-success badge-pill">Active</span>\n      </td>\n      <td>v1.13.2</td>\n      <td>12</td>\n      <td />\n    </tr>\n    <tr>\n      <td>Asia-scope-72dr4</td>\n      <td>\n        <span class="badge badge-gradient-danger badge-pill">Offline</span>\n      </td>\n      <td>v1.10.13</td>\n      <td>12</td>\n      <td />\n    </tr>\n  </tbody>\n</table>',__scope:{props:this?this.props:a}},l.a.createElement("div",{class:"outlet-header"},l.a.createElement("div",{class:"outlet-header__top-bar"},l.a.createElement("div",{class:"outlet-header__top-bar-title"},l.a.createElement("span",null,"Application Overview"))),l.a.createElement("div",{class:"outlet-header-meta-block"},l.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active"))),l.a.createElement("div",{class:"outlet-header-bar"},l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Type")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("a",{href:"/"},l.a.createElement("span",null,"statefulset")))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Kind")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"ns-elasticsearch"))),l.a.createElement("div",{class:"outlet-header-meta-bar_item"},l.a.createElement("div",{class:"outlet-header-meta-bar_title"},l.a.createElement("span",null,"Replica")),l.a.createElement("div",{class:"outlet-header-meta-bar_value"},l.a.createElement("span",null,"3")))),l.a.createElement("div",{class:"section-header"},l.a.createElement("div",{class:"section-header_title"},l.a.createElement("span",{class:"section-header_title__text"},"Volumes in statefulset")),l.a.createElement("div",{class:"section-header-controls"},l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("div",{class:"input-search-icon_wrapper"},l.a.createElement("div",{class:"input-search-icon"}),l.a.createElement("input",{class:"form-control",placeholder:"search"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-edit"}))),l.a.createElement("div",{class:"section-header-controls_item"},l.a.createElement("button",{class:"btn btn-secondary"},l.a.createElement("span",{class:"fa fa-filter"}))),l.a.createElement("div",{class:"section-header-controls_item ml-auto"},l.a.createElement("button",{class:"btn btn-primary"},"Primary action")))),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"K8s version"),l.a.createElement("th",{scope:"col"},"Nodes"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Dev-cluster-yg238"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")),l.a.createElement("td",null,"v1.10.11-gke.1"),l.a.createElement("td",null,"12"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Testing-cluster-tr33d"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-danger badge-pill"},"Inactive")),l.a.createElement("td",null,"v1.10"),l.a.createElement("td",null,"3"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Staging-setup-df12s"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-warning badge-pill"},"Degrated")),l.a.createElement("td",null,"v1.10.11"),l.a.createElement("td",null,"6"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Monitor-cluster-8hjq7"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")),l.a.createElement("td",null,"v1.13.2"),l.a.createElement("td",null,"12"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Asia-scope-72dr4"),l.a.createElement("td",null,l.a.createElement("span",{class:"badge badge-gradient-danger badge-pill"},"Offline")),l.a.createElement("td",null,"v1.10.13"),l.a.createElement("td",null,"12"),l.a.createElement("td",null))))))}}])&&i(a.prototype,n),c&&i(a,c),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=products-headers.d58a0bcca7d7709e08b9.js.map