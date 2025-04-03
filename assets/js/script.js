document.addEventListener('DOMContentLoaded', () => {
    const allVideos = [
        { id: "odGTd-O3RO8", title: "فيديو تعليمي 1" },
        { id: "CCiWWTHz-ZY", title: "فيديو تعليمي 2" },
        { id: "r9OxY05qszE", title: "فيديو تعليمي 3" },
        { id: "dQw4w9WgXcQ", title: "فيديو تعليمي 4" },
        { id: "ZZ5LpwO-An4", title: "فيديو تعليمي 5" },
        { id: "djV11Xbc914", title: "فيديو تعليمي 6" },
        { id: "btPJPFnesV4", title: "فيديو تعليمي 7" },
        { id: "YR5ApYxkU-U", title: "فيديو تعليمي 8" },
        { id: "pAgnJDJN4VA", title: "فيديو تعليمي 9" },
        { id: "fJ9rUzIMcZQ", title: "فيديو تعليمي 10" },
        { id: "l0NtUxBnbzo", title: "فيديو تعليمي 11" },
        { id: "EK_LN3XEcnw", title: "فيديو تعليمي 12" },
        { id: "JGwWNGJdvx8", title: "فيديو تعليمي 13" },
        { id: "kJQP7kiw5Fk", title: "فيديو تعليمي 14" },
        { id: "RgKAFK5djSk", title: "فيديو تعليمي 15" },
        { id: "U3ASj1L6_sY", title: "فيديو تعليمي 16" },
        { id: "31CnPqxVZiw", title: "فيديو تعليمي 17" },
        { id: "8SbUC-UaAxE", title: "فيديو تعليمي 18" },
        { id: "YVkUvmDQ3HY", title: "فيديو تعليمي 19" },
        { id: "6Ejga4kJUts", title: "فيديو تعليمي 20" },
        { id: "ALZHF5UqnU4", title: "فيديو تعليمي 21" },
        { id: "y6120QOlsfU", title: "فيديو تعليمي 22" },
        { id: "aQUlA8Hcv4s", title: "فيديو تعليمي 23" },
        { id: "vx2u5uUu3DE", title: "فيديو تعليمي 24" },
    ];

    const videosContainer = document.querySelector('.videos-container');
    const paginationContainer = document.querySelector('.pagination');
    const modalElement = document.querySelector('.video-modal');
    const modal = new bootstrap.Modal(modalElement);
    const modalIframe = modalElement.querySelector('iframe');
    const modalTitle = modalElement.querySelector('.modal-title');
    const modalDescription = modalElement.querySelector('.modal-body p');

    const videosPerPage = 8; 
    let currentPage = 1;
    const totalPages = Math.ceil(allVideos.length / videosPerPage);

    function displayVideosForCurrentPage() {
        const startIndex = (currentPage - 1) * videosPerPage;
        const endIndex = Math.min(startIndex + videosPerPage, allVideos.length);
        const currentPageVideos = allVideos.slice(startIndex, endIndex);

        videosContainer.innerHTML = '';

        currentPageVideos.forEach((video) => {
            const videoElement = createVideoElement(video);
            videosContainer.appendChild(videoElement);
        });

        updatePagination();
    }

    function createVideoElement(video) {
        const colElement = document.createElement('div');
        colElement.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

        const figure = document.createElement('figure');
        figure.className = 'figure video-thumb';
        figure.dataset.videoId = video.id;
        figure.dataset.videoTitle = video.title;

        const img = document.createElement('img');
        img.className = 'img-fluid figure-img';
        img.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
        img.alt = `صورة مصغرة لـ ${video.title}`;

        img.onerror = () => {
            img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
        };

        const playButton = document.createElement('div');
        playButton.className = 'play-button';
        playButton.setAttribute('aria-label', `تشغيل ${video.title}`);
        playButton.setAttribute('title', `تشغيل ${video.title}`);

        const caption = document.createElement('figcaption');
        caption.className = 'figure-caption';
        caption.textContent = video.title;

        figure.appendChild(img);
        figure.appendChild(playButton);
        figure.appendChild(caption);
        colElement.appendChild(figure);

        figure.addEventListener('click', (e) => {
            e.preventDefault();
            modalIframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
            modalTitle.textContent = video.title;
            modalDescription.textContent = `تشاهد الآن: ${video.title}`;
            modal.show();
        });

        return colElement;
    }

    function updatePagination() {
        paginationContainer.innerHTML = '';

        const prevItem = document.createElement('li');
        prevItem.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        
        const prevLink = document.createElement('a');
        prevLink.className = 'page-link';
        prevLink.href = '#';
        prevLink.textContent = 'السابق';
        prevLink.setAttribute('aria-label', 'الصفحة السابقة');
        
        prevItem.appendChild(prevLink);
        paginationContainer.appendChild(prevItem);

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            
            const pageLink = document.createElement('a');
            pageLink.className = 'page-link';
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.setAttribute('data-page', i);
            
            pageItem.appendChild(pageLink);
            paginationContainer.appendChild(pageItem);
        }

        if (endPage < totalPages) {
            const ellipsisItem = document.createElement('li');
            ellipsisItem.className = 'page-item disabled';
            
            const ellipsisSpan = document.createElement('span');
            ellipsisSpan.className = 'page-link';
            ellipsisSpan.innerHTML = '&hellip;';
            
            ellipsisItem.appendChild(ellipsisSpan);
            paginationContainer.appendChild(ellipsisItem);
            
            const lastPageItem = document.createElement('li');
            lastPageItem.className = 'page-item';
            
            const lastPageLink = document.createElement('a');
            lastPageLink.className = 'page-link';
            lastPageLink.href = '#';
            lastPageLink.textContent = totalPages;
            lastPageLink.setAttribute('data-page', totalPages);
            
            lastPageItem.appendChild(lastPageLink);
            paginationContainer.appendChild(lastPageItem);
        }

        const nextItem = document.createElement('li');
        nextItem.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        
        const nextLink = document.createElement('a');
        nextLink.className = 'page-link';
        nextLink.href = '#';
        nextLink.textContent = 'التالي';
        nextLink.setAttribute('aria-label', 'الصفحة التالية');
        
        nextItem.appendChild(nextLink);
        paginationContainer.appendChild(nextItem);

        assignPaginationEvents();
    }

    function assignPaginationEvents() {
        paginationContainer.querySelectorAll('.page-link[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = parseInt(link.dataset.page);
                displayVideosForCurrentPage();
                window.scrollTo(0, 0); 
            });
        });

        const prevButton = paginationContainer.querySelector('.page-item:first-child .page-link');
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayVideosForCurrentPage();
                window.scrollTo(0, 0);
            }
        });

        const nextButton = paginationContainer.querySelector('.page-item:last-child .page-link');
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                displayVideosForCurrentPage();
                window.scrollTo(0, 0);
            }
        });
    }

    modalElement.addEventListener('hidden.bs.modal', () => {
        modalIframe.src = 'about:blank';
    });

    displayVideosForCurrentPage();
});