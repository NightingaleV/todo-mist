<aside class="sidebar d-none d-sm-block col-7 col-sm-3">
  <div class="top-filter">
    <ul class="top-filter-list">
      <li class="top-filter-item inbox-item"><span class="top-filter-label">Inbox</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Important</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Today</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Completed</span></li>
    </ul>
  </div>
  <div class="projects">
    <ul class="projects-list">
      <?php include(dirname(__FILE__)."/../php/app-modules/render-projects.php") ?>
    </ul>
  </div>
</aside>