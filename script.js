// 页面加载完成后的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 滚动时的视差效果
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const blogContainer = document.querySelector('.blog-container');
        // 限制旋转角度，避免过度倾斜
        const rotateX = Math.max(0, 5 - scrollY/50);
        const translateY = Math.max(-10, -10 + scrollY/20);
        blogContainer.style.transform = `rotateX(${rotateX}deg) translateY(${translateY}px)`;
    });

    // 为信息项添加鼠标悬停的弹出效果
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#764ba2';
            this.style.background = '#f0f2ff';
        });
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#667eea';
            this.style.background = '#f8f9fa';
        });
    });

    // 技能进度条动画（兼容初始加载）
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0';
        // 容器悬停时触发进度条动画
        document.querySelector('.blog-container').addEventListener('mouseenter', () => {
            progress.style.width = width;
        });
    });

    // 平滑滚动（点击锚点链接时）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 页面滚动时元素渐入
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});
