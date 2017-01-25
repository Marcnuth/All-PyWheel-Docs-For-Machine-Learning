var DOC_LIST = [
    {
	title: "scikit-learn",
	link: "http://scikit-learn.org/stable/index.html",
	doc: "sklearn"
    },
    {
	title: "scikit-image",
	link: "http://scikit-image.org/",
	doc: "skimg"
    }
]

var app4 = new Vue({
  el: '#doclist',
  data: {
      docs: DOC_LIST
  }
})
