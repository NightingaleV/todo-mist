<aside class="sidebar d-none d-sm-block col-7 col-sm-3">
  <div class="top-filter">
    <ul class="top-filter-list list-group">
      <li class="top-filter-item inbox-item"><span class="top-filter-label">Inbox</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Important</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Today</span></li>
      <li class="top-filter-item"><span class="top-filter-label">Completed</span></li>
    </ul>
  </div>
  <div class="projects">
    <ul class="project-list list-group">
      <?php include(dirname(__FILE__)."/../php/app-modules/render-projects.php") ?>
    </ul>
  </div>
  <div class="tags">
    <ul class="tags-list list-group list-group-flush">
      <?php include(dirname(__FILE__)."/../php/app-modules/render-tags.php") ?>
    </ul>
  </div>
</aside>