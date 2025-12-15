// 页面加载完成后的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 滚动时的视差效果
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const blogContainer = document.querySelector('.blog-container');
        blogContainer.style.transform = `rotateX(${5 - scrollY/50}deg) translateY(${-10 + scrollY/20}px)`;
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
});