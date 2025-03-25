// 暂未使用

document.addEventListener('DOMContentLoaded', function () {
  // 获取所有导航项的 URL
  const navItems = document.querySelectorAll('.nav.item');
  const navUrls = Array.from(navItems).map(item => 
    decodeURI(item.getAttribute('href')).replace(/\/$/, '')
  );

  // 获取当前页面的 URL
  let currentUrl = decodeURI(window.location.pathname).replace(/\/$/, '');
  let currentIndex = navUrls.indexOf(currentUrl) || -1;

  if (currentIndex !== -1) {
    navItems[currentIndex].style.color = 'var(--text-color)';
    navItems[currentIndex].style.fontWeight = 'bold';
  }

  // 新增时间戳变量
  let touchStartTime = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartTime = Date.now();
  });

  document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 100;
    const timeThreshold = 500; // 0.5秒阈值
    const deltaX = touchEndX - touchStartX;
    const deltaTime = Date.now() - touchStartTime;

    // 时间超过阈值则不处理
    if (deltaTime > timeThreshold) {
      console.log('滑动超时，取消切换');
      return;
    }

    if (deltaX < -swipeThreshold) {
      if (currentIndex < navUrls.length - 1) {
        currentIndex++;
        // showToast(`切换 -> ${navItems[currentIndex].innerText}`);
        setTimeout(() => window.location.href = navUrls[currentIndex], 200);
      } else {
        // showToast("没有了...");
      }
    } else if (deltaX > swipeThreshold) {
      if (currentIndex > 0) {
        currentIndex--;
        // showToast(`切换 -> ${navItems[currentIndex].innerText}`);
        setTimeout(() => window.location.href = navUrls[currentIndex], 200);
      } else {
        // showToast("到头了...");
      }
    }
  }

  function showToast(message) {
    // ... 保持原有toast实现不变
  }
});
