// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

$("#comment_submit").on("click", (e) => {
  e.preventDefault();
  // TODO: テキストボックスnameを取得する
  // TODO: テキストエリアからcontentを取得する

  // TODO: Ajax処理を書く 参考 http://semooh.jp/jquery/api/ajax/jQuery.ajax/options/
  // TODO: リクエストに成功した場合にulにliを追加する処理を書く
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
