/**
 * Created by turnon on 2018/9/14.
 */
// ==UserScript==
// @name         test_ateles
// @namespace    https://github.com/turnon/test_ateles
// @version      0.0.2
// @description  test ateles
// @author       block24block@gmail.com
// @match       *://movie.douban.com/*/photos*
// @grant        none
// @require https://greasyfork.org/scripts/372188-ateles/code/ateles.js?version=628783
// ==/UserScript==
Ateles(['test/t3', 'test/t1', 'test/t4'], function (t3, t1) {
    console.log(t1.minus3(5) * t3.plus3(2))
})

// Ateles(['test/t1', 'test/t4'], function (t1, t4) {
//     console.log(t1.minus3(5))
// })

// Ateles(['test/t1', 'test/t4', 'test/t2'], function (t1, t4, t2) {
//     console.log(t1.minus3(5))
// })

// Ateles(['test/t1'], function (t1) {
//     console.log(t1.minus3(5))
// })

// Ateles(['test/t2'], function (t2) {
//     console.log(t2.add(1, 3))
// })

// Ateles(['test/t4'], function (t4) {
//     console.log(t4.concat(1, 2, 3))
// })