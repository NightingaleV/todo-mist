<aside class="sidebar d-none d-sm-block col-7 col-sm-3">
  <div class="top-filter">
    <ul class="top-filter-list list-group list-group-flush">
      <li class="list-group-item top-filter-item inbox-item"><span class="top-filter-label">Inbox</span></li>
      <li class="list-group-item top-filter-item"><span class="top-filter-label">Important</span></li>
      <li class="list-group-item top-filter-item"><span class="top-filter-label">Today</span></li>
      <li class="list-group-item top-filter-item"><span class="top-filter-label">Completed</span></li>
    </ul>
  </div>
  <div class="projects">
    <div class="project-title-box">
      <h3 class="project-title">Projects</h3>
      <?php include('templates/app-modules/sidebar-add-project.php') ?>
    </div>
    <ul class="project-list list-group list-group-flush">
      <?php include(dirname(__FILE__)."/../php/render-modules/render-projects.php") ?>
    </ul>
  </div>
  <div class="tags">
    <div class="tag-title-box">
      <h3 class="tag-title">Tags</h3>
      <?php include('templates/app-modules/sidebar-add-tag.php') ?>
    </div>
    <ul class="tag-list list-grouph">
      <?php include(dirname(__FILE__)."/../php/render-modules/render-tags.php") ?>
    </ul>
  </div>
</aside>