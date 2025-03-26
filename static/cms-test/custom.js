
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/cms/";
      });
    }
  });
}

// 创建观察器
const observer = new MutationObserver(() => {
  // Workflow界面: Reday分类
  const target = document.querySelector('.css-d2eboq-WorkflowListContainer > div:nth-child(3)');
  if (target) {
    target.style.display = 'none';
    observer.disconnect(); // 隐藏后停止观察
  }
});
// 开始监控整个文档
observer.observe(document, {
  childList: true,   // 监控子节点变化
  subtree: true      // 监控所有后代节点
});

// 创建观察器
const observer = new MutationObserver(() => {
  // 切换状态按钮: Reday选项
  const target = document.querySelector('div.e1d2l9mo0:nth-child(3)');
  if (target) {
    target.style.display = 'none';
    observer.disconnect(); // 隐藏后停止观察
  }
});
// 开始监控整个文档
observer.observe(document, {
  childList: true,   // 监控子节点变化
  subtree: true      // 监控所有后代节点
});