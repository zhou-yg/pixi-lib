/**
 * Created by zyg on 16/6/10.
 */
var sharedPng ="iVBORw0KGgoAAAANSUhEUgAAAVMAAAEnCAMAAAAjJlCRAAADAFBMVEUAAACj+dgtLS3////////2///+//////////8lJSWY/////wD////h//////z///////wZGRn//+D///////////7////////1//7///////////////7//////////93///////////8bGxv///9iYmL///+Dg4Pd//////92dnYgICA/Pz9mZmaRkZH//+THx8fq/fMA//+VlZUhISH////f/////93//+tQUFBTU1OIiIhjY2O3t7f//+D//+T//+XQ0NC3t7eWlpaqqqrr/f0cHBz//wDU1NSkpKTo6Ojh/////9nm///KysqKiork//+tra3//+Lk//9WVlbq//+srKxFRUVBQUHn/////+Hv7+/b29vn///f///p/f3GxsZpaWm9vb3//+CsrKxPT0/q6sqZmZn//+/k5OQ6OjrV1dXo6Ojt7e3h//+UlJT//+Pg//9tbW2jo6NbW1vG//+s/////wCXl5ewsLDe3t7CwsLz8/O7u7vKysrR0dHs///j4+O+vr7u9vatra3k5OTV1dWCgoL7//nZ2dn///Dq/////+dsbGwFBQVxcXFubm6Ojo77+/vQ0ND5/v7q//9LS0vn5+fx8fH//+mjo6PAwMCZmZl1dXWwsLDq///h///c3Ny6urqbm5vIyMi7u7ugoKB7e3vAwMDAwMDp//8jIyOTk5N5eXmIiIjQ0NC8vLzr//8qKir//+aFhYX09PT8/Px+fn75/f329vb///KysrLh4eE8PDzQ0NDb29vv//+MjIz//+xVVVX//+s/Pz95eXkMDAwSEhJdXV2WlpawsLD9/frt7e35/////+9ubm7a2trc//9VVVX//+ktLS3X19c+Pj5WVlZSUlL//9f+//3////9/f339/f8/Pz19fX7+/v5+fnz8/P6+vr///Lu///x8fHt7e3q6uro6Ojv7+////v///fi4uL7///3///y///l5eXe3t7j///s7OzY2Nj//+Tp/////+7//+nNzc1ycnK/v79HR0c7OzsJca7VAAAA3HRSTlMAAQIgFRsK39AFAgLBaiYHEQp1gGAbLaYNszRqRO+Z34xNBA88CnUj0FYaFxYSMdD8IAdCHvjf0GArDsc6/sGzpmxdXTMmJQT++fbv79DQ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"


module.exports = {

  shareGuide: function () {
    var div = document.createElement('div')
    div.style.zIndex = 9999
    div.style.position = 'fixed'
    div.style.left = 0
    div.style.top = 0
    div.style.right = 0
    div.style.bottom = 0

    var bg = document.createElement('div');
    bg.style.backgroundColor = '#000'
    bg.style.opacity = 0.7
    bg.style.width = '100%'
    bg.style.height = '100%'
    bg.style.position = 'absolute'
    bg.style.left = 0
    bg.style.top = 0

    var img = new Image()
    img.src="data:image/png;base64,"+sharedPng
    img.style.width = '100%'
    img.style.zIndex = 1;
    img.style.position = 'absolute'
    img.style.top = '20px'
    img.style.right = '20px'

    var body = document.querySelector('body')

    div.appendChild(bg)
    div.appendChild(img)
    body.appendChild(div)

    div.onclick = function () {
      div.remove()
    }

    return function () {
      div.remove()
    }
  }
}