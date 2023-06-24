
// service workerÇÃìoò^
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        //ç°âÒÇÕDocRootà»â∫ÇServiceWorkerÇÃÉXÉRÅ[ÉvÇ∆ÇµÇ‹Ç∑
        navigator.serviceWorker.register("/serviceworker.js", { scope: "/" }).then(
            function (registration) {
                // ìoò^ê¨å˜
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // ìoò^é∏îs
                console.log("ServiceWorker registration failed: ", err);
            }
        );
    });
}