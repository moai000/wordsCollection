
// service worker�̓o�^
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        //�����DocRoot�ȉ���ServiceWorker�̃X�R�[�v�Ƃ��܂�
        navigator.serviceWorker.register("/serviceworker.js", { scope: "/" }).then(
            function (registration) {
                // �o�^����
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // �o�^���s
                console.log("ServiceWorker registration failed: ", err);
            }
        );
    });
}