var titles = [
  "@",
  "@Kh",
  "@Kh",
  "@Khanh",
  "@khanh_",
  "@khanh_d",
  "@khanh_de",
  "@khanh_dev",
  "@khanh_devx",
  "@khanh_devxyz",
  "@khanh_devx",
  "@khanh_dev",
  "@khanh_de",
  "@khanh_d",
  "@khanh_",
  "@kha",
  "@kh",
  "@K"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
