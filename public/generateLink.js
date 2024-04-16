// generateLinks.js
// 假设 JSON 数据存储在同目录下的 data.json 文件中
fetch('data/character_table.json')
    .then(response => response.json()) // 解析 JSON
    .then(data => {
        const keys = Object.keys(data);
        const container = document.getElementById('link-container'); // 需要有一个 id="link-container" 的元素在 HTML 中
        keys.forEach(key => {
            const anchor = document.createElement('a');
            const listItem = document.createElement('li');
            anchor.href = `characterDetails.html?id=${key}`;
            anchor.textContent = key;
            anchor.target = "_blank"; // 如果你想在新标签页打开链接
            listItem.appendChild(anchor);
            container.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
