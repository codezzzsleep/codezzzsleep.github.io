# Ci Nie · Personal Portfolio

个人作品集静态展示页：[codezzzsleep.github.io](https://codezzzsleep.github.io/)

以 **Engineer（AI Agent 四阶段演进主线）** 与 **Research（机器学习与图学习底色）** 双轨组织，零构建步骤，直接通过 GitHub Pages 静态托管。

## 本地预览

```bash
python3 -m http.server 8765
```

访问 `http://localhost:8765/`。

## 目录结构

- `index.html`：主作品集展示页（支持中英文切换与项目详情弹窗）
- `404.html`：自定义 404 页面
- `assets/`：项目展示截图、站点图标与生成好的本地样式
- `.nojekyll`：跳过 Jekyll 处理，直接发布静态资源

## 样式维护

部署直接使用 `assets/portfolio.css`，无需安装依赖或运行浏览器端 Tailwind。
修改 `index.html` 中的样式类或 `styles/portfolio.css` 后，可用固定版本重新生成：

```bash
npx --yes --package tailwindcss@3.4.17 tailwindcss -c tailwind.config.cjs -i styles/portfolio.css -o assets/portfolio.css --minify
```
