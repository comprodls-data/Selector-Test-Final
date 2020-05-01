var action = require("../lib/browserAction.js");

module.exports = {
    elements: {
       class:{
           selector:'.courses .practice-image'
       },
       cqapracticeextra:{
        selector:".image-group .practice-image"
       },
       analytics:{
           selector:".component-analytics .analytic-content"
       },
       myProgress: {
           selector:".image-group .product-image"
       },
       collegeName: {
           selector:"section.user-info > div > p > strong"
       },
       studentEmail: {
           selector:"section.user-info > div > p:nth-child(2)"
       },
       productName: {
           selector:"div.product-info > div.product-name"
       },
       backFromClass: {
           selector:"[qid='clView-bck-btn']"
       },
       activityName: {
           selector: "div.product-launch-container header > a:nth-child(2)"
       },
       assignmentTile: {
           selector: ".assignment-icon-container .nemo-assignment"
       },
       assignmentName: {
           selector: "section.assignments-wrapper.mt-0 > div.assignments-content > a > div.d-flex.align-items-center > div.assignment-description.ml-3 > p.assignment-name.mb-1"
       },
       gobacksele: {
        selector: "[qid='cHeader-8']"
       }

 },
    commands: [
        {
            goback: function(){
                this.api.useCss();
                action.click(this,this.elements.gobacksele.selector);
            },
            waitForProductAppear: function(){
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.cqapracticeextra.selector,50000);
            },
            practiceextraopen: function(){
                action.click(this,'@cqapracticeextra');
            },

            waitForAnalytic: function(){
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.analytics.selector,50000);           
            },
            opneAnalytics:function(){
                this.api.useCss();
                action.click(this,this.elements.analytics.selector);
            },
            waitForProgressTile: function(){
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.myProgress.selector,50000); 
            },
            openMyProgress: function(){
                this.api.useCss();
                action.click(this,this.elements.myProgress.selector);
            },
            waitForCollegeName: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.collegeName.selector,50000);                
            },
            verifyCollegeName: function(cb) {
                this.api.useCss();
                action.getElementText(this,this.elements.collegeName.selector,cb);
            },
            waitForStudentEmail: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.studentEmail.selector,20000);
            },
            getStudentEmail: function(cb) {
                this.api.useCss();
                action.getElementText(this,this.elements.studentEmail.selector,cb);
            },
            waitForProductName: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.productName.selector,50000);               
            },
            getProductName: function(cb) {
                this.api.useCss();
                action.getElementText(this,this.elements.productName.selector,cb);                
            },
            takeBackFromClass: function() {
                this.api.useCss();
                action.click(this,this.elements.backFromClass.selector);
            },
            waitForActivityName: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.activityName.selector,50000); 
            },
            getActivityName: function(cb) {
                this.api.useCss();
                action.getElementText(this,this.elements.activityName.selector,cb);                  
            },
            waitForAssignmentTile: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.assignmentTile.selector,50000);                
            },
            openAssignment: function() {
                this.api.useCss();
                action.click(this,this.elements.assignmentTile.selector);                
            },
            waitForAssignmentName: function() {
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.assignmentName.selector,60000);                
            },
            getAssignmentName: function(cb) {
                this.api.useCss();
                action.getElementText(this,this.elements.assignmentName.selector,cb); 
            }
        }

    ]
};
