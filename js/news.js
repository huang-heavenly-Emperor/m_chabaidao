   // 分页功能
   var currentPage = 1;
   var totalPages = 39;

   function changePage(page) {
     // 移除之前的激活状态
     var oldActive = document.querySelector(".pagination .active");
     if (oldActive) {
       oldActive.className = "";
     }

     // 添加新的激活状态
     var links = document.querySelectorAll(".pagination a");
     for (var i = 0; i < links.length; i++) {
       if (links[i].innerHTML == page) {
         links[i].className = "active";
         break;
       }
     }

     currentPage = page;
     // 这里可以添加加载新闻内容的逻辑
   }

   function nextPage() {
     if (currentPage < totalPages) {
       changePage(currentPage + 1);
     }
   }