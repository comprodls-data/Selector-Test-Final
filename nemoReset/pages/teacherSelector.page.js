var action = require("../lib/browserAction.js");

module.exports = {
    elements: {
       class: {
           selector:'.class-info-container .class-circle'
       },
       className: {
           selector:'#classDropDownMenu'
       },
       collegeName: {
           selector:'div.class-info > div.d-flex > div.d-flex > p:first-child'
       },
       material: {
           selector:'.class-menu .nav .nav-item:nth-of-type(3)'
       },
       productName: {
           selector:'div.product-info > div.d-flex > h2.heading2 > span.d-block'
       }

    },
    commands: [
    {
        waitForClassTile: function() {
            this.api.useCss();
            action.waitForElementVisible(this,this.elements.class.selector,120000);                
        },
        openClass: function() {
            this.api.useCss();
            action.click(this,this.elements.class.selector);            
        },
        waitForClassName: function() {
            this.api.useCss();
            action.waitForElementVisible(this,this.elements.className.selector,60000);            
        },
        getClassName: function(cb) {
            this.api.useCss();
            action.getElementText(this,this.elements.className.selector,cb);             
        },
        waitForCollegeName: function() {
            this.api.useCss();
            action.waitForElementVisible(this,this.elements.collegeName.selector,120000);               
        },
        getCollegeName: function(cb) {
            this.api.useCss();
            action.getElementText(this,this.elements.collegeName.selector,cb);              
        },
        openMaterial: function() {
            this.api.useCss();
            action.click(this,this.elements.material.selector);
        },
        waitForProductName: function() {
            this.api.useCss();
            action.waitForElementVisible(this,this.elements.productName.selector,20000);              
        },
        getProductName: function(cb) {
            this.api.useCss();
            action.getElementText(this,this.elements.productName.selector,cb);             
        }
    }   
    ]
};
