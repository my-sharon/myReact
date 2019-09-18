// 顶部特效进度条
/*NProgress.start();
NProgress.done();*/

// 侧边栏伸缩
$('.navs ul').prev('a').on('click', function () {
  // console.log($(this));
  // console.log($(this).next());
  $(this).next().slideToggle();
});

