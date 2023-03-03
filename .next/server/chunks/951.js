"use strict";
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 4883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InfoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9811);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function CardPost({ thumbnail , ...infoPost }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "mb-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/detail",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: thumbnail,
                        width: "1080",
                        height: "600",
                        alt: "image post",
                        className: "mb-4"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoPost__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    ...infoPost
                })
            ]
        })
    });
}


/***/ }),

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostMetaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4144);
/* harmony import */ var _PostAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2655);



function InfoPost({ category , title , date , excerpt , authorAvatar , authorName , authorJob  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostMetaTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                category: category,
                title: title,
                date: date,
                excerpt: excerpt
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostAuthor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                authorAvatar: authorAvatar,
                authorName: authorName,
                authorJob: authorJob
            })
        ]
    });
}


/***/ }),

/***/ 7619:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"thumbnail":"/img/thumbnail-2.png","category":"Internet","date":"March 3, 2023","title":"How to design a product that can grow itself 10x in year","excerpt":"Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-2.png"},{"id":2,"thumbnail":"/img/thumbnail-3.png","category":"9 to 5","date":"March 3, 2023","title":"The More Important the Work, the More Important the Rest","excerpt":"Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-3.png"},{"id":3,"thumbnail":"/img/thumbnail-4.png","category":"Inspirations","date":"March 3, 2023","title":"Email Love - Email Inspiration, Templates and Discovery","excerpt":"Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-4.png"},{"id":4,"thumbnail":"/img/thumbnail-5.png","category":"9 to 5","date":"March 3, 2023","title":"The More Important the Work, the More Important the Rest","excerpt":"Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-3.png"},{"id":5,"thumbnail":"/img/thumbnail-6.png","category":"Inspirations","date":"March 3, 2023","title":"Email Love - Email Inspiration, Templates and Discovery","excerpt":"Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-2.png"},{"id":6,"thumbnail":"/img/thumbnail-2.png","category":"Internet","date":"March 3, 2023","title":"How to design a product that can grow itself 10x in year","excerpt":"Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.","authorName":"Jenny Wilson","authorJob":"Product Designer","authorAvatar":"/img/author-1.png"}]');

/***/ })

};
;