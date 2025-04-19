
// 页脚显示/隐藏
let lastScrollTop = 0;
const footer = document.getElementById("footer");
window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  // 向下滚动，隐藏页脚
  if (currentScroll > lastScrollTop) {
    footer.classList.add("hidden");
  } else {
    // 向上滚动，显示页脚
    footer.classList.remove("hidden");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止负值
});



// 赞助弹窗
function openSponsorModal() {
  document.getElementById('sponsorModal').style.display = 'block';
}
function closeSponsorModal() {
  document.getElementById('sponsorModal').style.display = 'none';
}
// 点击遮罩层关闭
document.querySelector('.modal-overlay').addEventListener('click', closeSponsorModal);
// ESC 键关闭
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSponsorModal();
  }
});




// 处理首次加载的链接
processExistingLinks();

// 监听异步加载内容
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      processExistingLinks();
    }
  });
}).observe(document.documentElement, {
  childList: true,
  subtree: true
});

function processExistingLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    const isInternal = link.hostname === location.hostname;
    const isAnchor = link.pathname.startsWith('#');
    
    if (!isInternal && !isAnchor) {
      const encoded = encodeURIComponent(link.href);
      link.href = `/redirect?target=${encoded}`;
      link.setAttribute('target', '_blank');
    }
  });
}
