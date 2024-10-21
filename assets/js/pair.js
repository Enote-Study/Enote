document.addEventListener('DOMContentLoaded', function () {
    const users = [
        { name: '小明', resource: '簡報' },
        { name: '小美', resource: '筆記' },
        { name: '小華', resource: '視頻' }
    ];

    // 確保動畫和結果在頁面加載時處於隱藏狀態
    document.getElementById('pairingAnimation').style.display = 'none';
    document.getElementById('pairingResult').style.display = 'none';

    // 顯示配對動畫
    function showPairingAnimation() {
        document.getElementById('pairingAnimation').style.display = 'flex';  // 顯示動畫
    }

    // 隱藏配對動畫
    function hidePairingAnimation() {
        document.getElementById('pairingAnimation').style.display = 'none';  // 隱藏動畫
    }

    // 顯示配對結果
    function showPairingResult(matchedUser, myResource) {
        document.getElementById('matchedUser').textContent = `已匹配到: ${matchedUser.name} (${matchedUser.resource})`;
        document.getElementById('pairingResult').style.display = 'block';  // 顯示配對結果

        // 點擊確認後打開浮動視窗
        document.getElementById('confirmPairBtn').addEventListener('click', function () {
            document.getElementById('yourResource').textContent = myResource;
            document.getElementById('matchedResource').textContent = matchedUser.resource;
            const modal = new bootstrap.Modal(document.getElementById('shareModal'));
            modal.show();

            startTimer();
        });
    }

    // 自動配對邏輯
    document.getElementById('autoPairBtn').addEventListener('click', function () {
        const myResource = document.getElementById('myResourceSelect').value;

        // 顯示配對動畫並隱藏結果區域
        showPairingAnimation();
        document.getElementById('pairingResult').style.display = 'none';

        // 模擬配對過程，2 秒後顯示結果
        setTimeout(function () {
            hidePairingAnimation();
            const matchedUser = users[Math.floor(Math.random() * users.length)];
            showPairingResult(matchedUser, myResource);
        }, 2000);
    });

    // 顯示條件配對選擇區
    document.getElementById('conditionPairBtn').addEventListener('click', function () {
        document.getElementById('conditionSelect').style.display = 'block';
    });

    // 條件配對邏輯
    document.getElementById('startConditionPairBtn').addEventListener('click', function () {
        const myResource = document.getElementById('myResourceSelect').value;
        const selectedResource = document.getElementById('otherResourceSelect').value;

        // 顯示配對動畫並隱藏結果區域
        showPairingAnimation();
        document.getElementById('pairingResult').style.display = 'none';

        // 模擬配對過程，2 秒後顯示結果
        setTimeout(function () {
            hidePairingAnimation();
            const matchedUser = users.find(user => selectedResource === 'all' || user.resource === selectedResource);

            if (matchedUser) {
                showPairingResult(matchedUser, myResource);
            } else {
                alert('無法找到符合條件的用戶');
            }
        }, 2000);
    });

    // 倒計時與進度條
    let timer;
    function startTimer() {
        let timeLeft = 300; // 300秒 = 5分鐘
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = '100%';
        progressBar.textContent = '300s';

        timer = setInterval(function () {
            timeLeft--;
            const progressPercent = (timeLeft / 300) * 100;
            progressBar.style.width = `${progressPercent}%`;
            progressBar.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                progressBar.textContent = '時間結束';
            }
        }, 1000);
    }

    // 當語音分享按鈕被點擊
    document.getElementById('voiceChatBtn').addEventListener('click', function () {
        alert('語音分享已啟用！');
    });
});
