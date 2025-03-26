
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// admin/custom.js
CMS.registerEventListener({
  onLogin: ({ user }) => {
    if ( !(user.role === 'admin' && window.location.href.includes('/admin2')) ) {
      window.location.href = '/admin';  # 强制跳回普通后台
    }
  }
});

