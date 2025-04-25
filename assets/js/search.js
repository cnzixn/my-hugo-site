const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

let fuse;


// 标签搜索功能
function searchByTag(tag) {
  searchInput.value = tag;
  // 触发事件
  const event = new Event('input', { bubbles: true });
  searchInput.dispatchEvent(event);
  // 触发搜索（支持回车和按钮点击两种方式）
  searchInput.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter' }));
}

// 加载 JSON 数据
fetch("/index.json")
  .then(response => response.json())
  .then(data => {
    console.log("加载的文章数据:", data);
    fuse = new Fuse(data, {
      keys: ["title", "content", "tags", "aliases"],  // 搜索标题，摘要，标签
      threshold: 0.3
    });

    // 默认显示全部文章
    displayAllArticles(data);
  })
  .catch(error => console.error("加载 JSON 失败:", error));

// 显示全部文章
function displayAllArticles(articles) {
  searchResults.innerHTML = articles.length > 0
    ? articles.map(article => ` <li> <a href="${article.permalink}"> <span class="title">${article.title}</span> <span class="excerpt">${article.content}</span> </a> </li> `).join("")
    : "<li class='no-results'>没有找到相关文章。</li>";
}

// 监听搜索输入
searchInput.addEventListener("input", function() {
  if (!fuse) return; // 确保数据已加载

  const query = searchInput.value.trim();
  if (query.length === 0) {
    // 如果搜索框为空，显示全部文章
    fetch("/index.json")
      .then(response => response.json())
      .then(data => displayAllArticles(data))
      .catch(error => console.error("加载 JSON 失败:", error));
    return;
  }

  const results = fuse.search(query);
  console.log("搜索结果:", results);

  searchResults.innerHTML = results.length > 0
    ? results.map(result => ` <li> <a href="${result.item.permalink}"> <span class="title">${result.item.title}</span> <span class="excerpt">${result.item.content}</span> </a> </li> `).join("")
    : "<li class='no-results'>没有找到相关结果。</li>";
});