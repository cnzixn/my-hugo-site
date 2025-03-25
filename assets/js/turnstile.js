// 暂未使用

function setCookie(name, value, expiresInMinutes) {
  const date = new Date();
  date.setTime(date.getTime() + expiresInMinutes * 60 * 1000); // 计算过期时间
  const expires = `expires=${date.toUTCString()}`;

  // 设置 Cookie
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/;`;
  console.log(`Cookie "${name}" 已保存: ${value}`);
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    while (cookie.charAt(0) === ' ') cookie = cookie.slice(1); // 去掉空格
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.slice(nameEQ.length)); // 返回解码后的值
    }
  }
  return null; // 如果未找到 Cookie
}







// 全局跳转逻辑：未验证则重定向到验证页
(function initRedirect() {
  if (window.location.pathname === '/verify/') return; // 验证页自身不跳转

  const verificationInfo = getCookie("turnstile-cookie-data");
  if (verificationInfo) {
    console.log('验证信息有效'+verificationInfo);
  } else {
    console.log('验证信息无效或已过期');
    const target = encodeURIComponent(window.location.pathname + window.location.search);
    window.location.href = `/verify?target=${target}`;
  }
})();

// 验证成功回调
function TurnstileCallback(token) {
  // alert('验证成功'+token);
  const expiresInMinutes = 5;
  setCookie("turnstile-cookie-data", token, expiresInMinutes);
  const target = new URLSearchParams(window.location.search).get('target');
  if (target) {
    // alert(target)
    window.location.href = decodeURIComponent(target); // 解码 URL
  } else {
    window.location.href = '/'; // 默认跳转首页
  }
}


// 验证失败回调
function TurnstileErrorCallback(token) {

    // alert('验证失败，请重试！');
}
