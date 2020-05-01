describe('Cambridge One APP', function () {
    before(function (browser, done) {                                                                            
        nemoLaunchPageObj = browser.page['nemoLaunch.page']();
        nemoLoginPageObj = browser.page['login.page']();
        done();
        nemoLaunchPageObj.navigate();
        browser.pause(3000);
        nemoLaunchPageObj.waitForLoginButtonToBePresent();
        nemoLaunchPageObj.clickLogin();
        nemoLoginPageObj.waitForPageLoad();
        done();
    });

    it('Check Student Selectors', function(browser) {
        nemoLoginPageObj = browser.page['login.page']();
        studentSelector = browser.page['studentSelector.page']();
        nemoLoginPageObj.login('selector.student@yopmail.com','Compro11');
        studentSelector.waitForProgressTile();
        browser.pause(1000);
        studentSelector.openMyProgress();
        studentSelector.waitForCollegeName();
        browser.pause(1000);
        studentSelector.verifyCollegeName(function(name) {
            browser.verify.equal(
                name,
                "Selector Check Aberystwyth College",
                "Actual college is not as expected"
              );
        });
        studentSelector.waitForStudentEmail();
        studentSelector.getStudentEmail(function(email) {
            browser.verify.equal(
                email,
                "selector.student@yopmail.com",
                "Actual email is not as expected"
              );
        });
        browser.pause(1000);
        studentSelector.waitForProductName();
        studentSelector.getProductName(function(product) {
            browser.verify.equal(
                product,
                "auto comproqa testproduct123",
                "Actual product is not as expected"
              );
        });
        studentSelector.takeBackFromClass();
        browser.pause(1000);
        studentSelector.waitForProductAppear();
        studentSelector.practiceextraopen();
        studentSelector.waitForActivityName();
        studentSelector.getActivityName(function(activity) {
            browser.verify.equal(
                activity,
                "1.2 Non-Scoreable Activity1 Flashcards",
                "Actual activity is not as expected"
              );
        });
        browser.pause(1000);
        studentSelector.goback();
        browser.pause(1000);
        studentSelector.waitForAssignmentTile();
        studentSelector.openAssignment();
        studentSelector.waitForAssignmentName();
        browser.pause(1000);
        studentSelector.getAssignmentName(function(assignment) {
            browser.verify.equal(
                assignment,
                "Assignment 1, Selector Check",
                "Actual assignment is not as expected"
              );           
        });
    });   

    it('Check Teacher Selectors', function (browser) {
        nemoLaunchPageObj = browser.page['nemoLaunch.page'](); 
        nemoLoginPageObj = browser.page['login.page']();
        teacherSelector = browser.page['teacherSelector.page']();
        nemoLaunchPageObj.clickLogin();
        browser.pause(3000);
        nemoLoginPageObj.waitForPageLoad();
        nemoLoginPageObj.login('selector.teacher@yopmail.com','Compro11');
        teacherSelector.waitForClassTile();
        teacherSelector.openClass();
        teacherSelector.waitForClassName();
        browser.pause(1000);
        teacherSelector.getClassName(function(className) {
            browser.verify.equal(
                className,
                "Selector Check",
                "Actual class is not as expected"
              );
        });
        teacherSelector.waitForCollegeName();
        teacherSelector.getCollegeName(function(clg) {
            browser.verify.equal(
                clg,
                "Aberystwyth College ·",
                "Actual college is not as expected"
              );            
        });
        teacherSelector.openMaterial();
        teacherSelector.waitForProductName();
        teacherSelector.getProductName(function(product) {
            browser.verify.equal(
                product,
                "auto comproqa testproduct123",
                "Actual product is not as expected"
              );            
        });

    });   

    afterEach(function (browser, done) {
        done();
        headerPageObj = browser.page['header.page']();
        headerPageObj.clickUserProfileDropdown();
        headerPageObj.waitForLogoutToAppear();
        headerPageObj.clickLogout();
        nemoLaunchPageObj.waitForLoginButtonToBePresent();
        done();
    });

    after(function (browser, done) {
        if (browser.sessionId) {
            browser.end(function () {
                done();
            });
        } else {
            done();
        }
    });
});
