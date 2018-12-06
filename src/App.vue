<template>
  <div id="app" class="header-navbar-fixed">
    <router-view></router-view>

    <!-- Footer -->
    <footer id="page-footer" class="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
      <div class="text-center">
        <a class="font-w700" href="http://fb.com/mr.kurro"> Watson Exception</a> © <span class="js-year-copy">2019</span>
      </div>
    </footer>
    <!-- END Footer -->
  </div>
</template>

<script>
export default {
   name: 'app'
}
</script>