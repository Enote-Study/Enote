/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();

// 學校對應的學院選項
const collegeData = {
  'NTU': ['工程學院', '醫學院', '文學院'],
  'NTHU': ['理學院', '工學院', '社會科學院'],
  'NCTU': ['電機資訊學院', '生醫工程學院'],
  'NCCU': ['商學院', '法學院', '傳播學院', '文學院', '教育學院', '理學院'],
  'NCKU': ['管理學院', '建築學院', '醫學院']
};

// 學院對應的學科選項
const subjectData = {
  '工程學院': ['土木工程', '機械工程', '電機工程'],
  '醫學院': ['內科學', '外科學', '公共衛生'],
  '文學院': ['歷史學', '哲學', '語言學'],
  '理學院': ['物理學', '化學', '數學'],
  '工學院': ['材料工程', '資訊工程', '環境工程'],
  '社會科學院': ['社會學', '心理學', '政治學'],
  '電機資訊學院': ['電機工程', '資訊科學', '電子工程'],
  '生醫工程學院': ['生物工程', '醫學科學'],
  '商學院': ['會計學','經濟學', '管理學',  '市場學', '財務管理','行銷管理','創新創業'],
  '法律學院': ['民法', '刑法', '商法'],
  '傳播學院': ['新聞學', '廣告學', '公共關係'],
  '管理學院': ['企業管理', '市場營銷'],
  '建築學院': ['建築設計', '城市規劃'],
};

// 更新學院選項
function updateColleges() {
  const school = document.getElementById('school-filter').value;
  const collegeSelect = document.getElementById('college-filter');
  collegeSelect.innerHTML = ''; // 清空學院選項

  if (school === 'all') {
    collegeSelect.innerHTML = '<option value="all">所有學院</option>';
  } else {
    collegeSelect.innerHTML = '<option value="all">所有學院</option>';
    collegeData[school].forEach(function(college) {
      let option = document.createElement('option');
      option.value = college;
      option.textContent = college;
      collegeSelect.appendChild(option);
    });
  }
  updateSubjects(); // 重置學科選項
}

// 更新學科選項
function updateSubjects() {
  const college = document.getElementById('college-filter').value;
  const subjectSelect = document.getElementById('subject-filter');
  subjectSelect.innerHTML = ''; // 清空學科選項

  if (college === 'all') {
    subjectSelect.innerHTML = '<option value="all">所有學科</option>';
  } else {
    subjectSelect.innerHTML = '<option value="all">所有學科</option>';
    subjectData[college].forEach(function(subject) {
      let option = document.createElement('option');
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
  }
}



