// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

var word = new Vue({
  el: "#word",
  data: {
    header: "Enter word to calulate points",
    points: "",
    scrabble: "",
    object: {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 4,
      g: 2,
      h: 4,
      i: 1,
      j: 8,
      k: 5,
      l: 1,
      m: 3,
      n: 1,
      o: 1,
      p: 3,
      q: 10,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 4,
      w: 4,
      x: 8,
      y: 4,
      z: 10
    }
  },

  methods: {
    calculate: function() {
      var letters = this.scrabble.split("");
      var sum = 0;

      for (var i = 0; i < letters.length; i++) {
        var valAt = this.object[letters[i]];
        sum = sum + valAt;
      }

      this.points = sum;
    },
    double: function() {
      this.points = this.points * 2;
    },
    triple: function() {
      this.points = this.points * 3;
    }
  }
});
