window.GOVUK=window.GOVUK||{},window.GOVUK.Modules=window.GOVUK.Modules||{},function(t){"use strict";t.Modules.TrackShareButtonClicks=function(){this.start=function(o){function i(){n("facebook")}function e(){n("twitter")}function n(o){t.analytics&&t.analytics.trackShare&&t.analytics.trackShare(o)}o.on("click",".js-share-facebook",i),o.on("click",".js-share-twitter",e)}}}(window.GOVUK),function(t){"use strict";function o(t){this.$el=i(t.el),this._loadOption(t,"name"),this._loadOption(t,"customDimensionIndex",null),this._loadOption(t,"cohorts"),this._loadOption(t,"runImmediately",!0),this._loadOption(t,"defaultWeight",1),this._loadOption(t,"contentExperimentId",null),this._loadOption(t,"cookieDuration",30),this.runImmediately&&this.run()}var i=t.jQuery,e=t.GOVUK||{};o.prototype._loadOption=function(t,o,i){if(void 0!==t[o]&&(this[o]=t[o]),void 0===this[o]){if(void 0===i)throw new Error(o+" option is required for a multivariate test");this[o]=i}},o.prototype.run=function(){var t=this.getCohort();t&&(this.setUpContentExperiment(t),this.setCustomVar(t),this.executeCohort(t),this.createDummyEvent(t))},o.prototype.executeCohort=function(t){var o=this.cohorts[t];o.callback&&("string"==typeof o.callback?this[o.callback]():o.callback()),o.html&&(this.$el.html(o.html),this.$el.show())},o.prototype.getCohort=function(){var t=e.cookie(this.cookieName());return t&&this.cohorts[t]||(t=this.chooseRandomCohort(),e.cookie(this.cookieName(),t,{days:this.cookieDuration})),t},o.prototype.setCustomVar=function(t){if(this.customDimensionIndex&&this.customDimensionIndex.constructor===Array)for(var o=0;o<this.customDimensionIndex.length;o++)this.setDimension(t,this.customDimensionIndex[o]);else this.customDimensionIndex&&this.setDimension(t,this.customDimensionIndex)},o.prototype.setDimension=function(t,o){e.analytics.setDimension(o,this.cookieName()+"__"+t)},o.prototype.setUpContentExperiment=function(t){var o=this.contentExperimentId,i=this.cohorts[t].variantId;"undefined"!=typeof o&&"undefined"!=typeof i&&"function"==typeof window.ga&&(window.ga("set","expId",o),window.ga("set","expVar",i))},o.prototype.createDummyEvent=function(){e.analytics.trackEvent(this.cookieName(),"run",{nonInteraction:!0})},o.prototype.weightedCohortNames=function(){var t=[],o=this.defaultWeight;return i.each(this.cohorts,function(i,e){var n,s;for(n="undefined"==typeof e.weight?o:e.weight,s=0;s<n;s++)t.push(i)}),t},o.prototype.chooseRandomCohort=function(){var t=this.weightedCohortNames();return t[Math.floor(Math.random()*t.length)]},o.prototype.cookieName=function(){return"multivariatetest_cohort_"+this.name},e.MultivariateTest=o,t.GOVUK=e}(window),window.GOVUK=window.GOVUK||{},window.GOVUK.Modules=window.GOVUK.Modules||{},function(t){"use strict";t.Modules.UkviAbTest=function(){this.start=function(o){function i(){$("#exceptions").prevAll().hide(),$("#exceptions").before(n)}var e=(o.data("test-type"),o.data("test-label")),n=o.html();new t.MultivariateTest({name:e,cookieDuration:30,customDimensionIndex:[13,14],cohorts:{original:{callback:function(){},weight:50},spouseProminent:{callback:i,weight:50}}})}}}(window.GOVUK);