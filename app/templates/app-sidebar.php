<aside class="sidebar d-sm-block col-7 col-sm-4">
  <div class="top-filter">
    <ul class="top-filter-list list-group list-group-flush">
      <li class="list-group-item top-filter-item inbox-item" data-project-id="<?php
      $stmt = $db->prepare("SELECT id FROM projects WHERE user_id = ?");
      $stmt->bind_param("i", $_SESSION['id']);
      $stmt->execute();
      $result = $stmt->get_result();
      $result_id = $result->fetch_assoc();
      echo $result_id['id'];
      ?>">
        <i class="inbox-icon add-bar-icon material-icons">inbox</i><span class="project-label">Inbox</span>
      </li>
      <li class="list-group-item top-filter-item">
        <i class="inbox-icon add-bar-icon material-icons">bookmark</i>
        <span class="top-filter-label">Important</span></li>
      <li class="list-group-item top-filter-item">
        <i class="inbox-icon material-icons">calendar_today</i>
        <span class="top-filter-label">Today</span></li>
      <li class="list-group-item top-filter-item">
        <i class="inbox-icon material-icons">done_all</i>
        <span class="top-filter-label">Completed</span></li>
    </ul>
  </div>
  <div class="projects">
    <div class="project-title-box">
      <h3 class="project-title">Projects</h3>
      <?php include('templates/app-controls/add-project-controls.php') ?>
    </div>
    <?php include('templates/app-modules/sidebar-add-project.php') ?>
    <ul class="project-list list-group list-group-flush">
      <?php include(dirname(__FILE__)."/../php/render-modules/render-projects.php") ?>
    </ul>
  </div>
  <div class="tags">
    <div class="tag-title-box">
      <h3 class="tag-title">Tags</h3>
      <?php include('templates/app-controls/add-tag-controls.php') ?>
    </div>
    <?php include('templates/app-modules/sidebar-add-tag.php') ?>
    <ul class="tag-list list-group-flush">
      <?php include(dirname(__FILE__)."/../php/render-modules/render-tags.php") ?>
    </ul>
  </div>
</aside>