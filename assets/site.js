(() => {
  const toolbar = document.querySelector('.work-toolbar');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const status = document.getElementById('filter-status');
  toolbar.hidden = false;
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    status.textContent = `${projects.filter(project => !project.hidden).length} 个精选项目`;
  }));

  const copyButton = document.getElementById('copy-email');
  const printButton = document.getElementById('print-profile');
  const contactStatus = document.getElementById('contact-status');
  copyButton.hidden = false;
  printButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('codezzzsleep@gmail.com');
      contactStatus.textContent = '邮箱已复制。';
    } catch {
      contactStatus.textContent = '邮箱：codezzzsleep@gmail.com，可选中地址复制。';
    }
  });
  printButton.addEventListener('click', () => window.print());

  if ('IntersectionObserver' in window) {
    const navigation = [...document.querySelectorAll('.header nav a')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navigation.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, {rootMargin: '-15% 0px -65% 0px'});
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
