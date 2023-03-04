"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 2655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostAuthor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function PostAuthor({ authorAvatar , authorName , authorJob  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center mt-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "border-2 rounded-full border-slate-600 relative w-12 h-12 md:w-14 md:h-14",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: authorAvatar,
                        alt: authorName,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        fill: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "font-medium",
                            children: authorName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "mt-1 text-sm text-slate-300",
                            children: authorJob
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 4144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostMetaTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function PostMetaTitle({ category , title , date , excerpt , center  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-2 text-sm text-slate-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "underline uppercase",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/posts",
                            children: category
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "•"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: date
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: `mt-4 text-2xl font-medium leading-tight ${center && "text-center"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/detail",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "md:w-11/12 mt-5 text-slate-200",
                children: excerpt
            })
        ]
    });
}


/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto",
        children: children
    });
}


/***/ }),

/***/ 4067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/_container.jsx
var _container = __webpack_require__(1839);
;// CONCATENATED MODULE: ./components/Navbar.jsx




function Navbar() {
    const [dropdown, setDropdown] = (0,external_react_.useState)(false);
    const [offcanvas, setOffcanvas] = (0,external_react_.useState)(false);
    const [search, setSearch] = (0,external_react_.useState)(false);
    const dropdownList = [
        {
            text: "Internet",
            href: "/posts"
        },
        {
            text: "Books",
            href: "/posts"
        },
        {
            text: "Open Source",
            href: "/posts"
        }
    ];
    const [arrow, setArrow] = (0,external_react_.useState)(false);
    const arrowIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `transition duration-200 ${arrow && "-rotate-180"}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4 6L8 10L12 6",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        });
    const searchIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            })
        });
    const hamburgerIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            })
        });
    const closeIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12"
            })
        });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "py-10",
            children: /*#__PURE__*/ jsx_runtime_.jsx(_container/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex w-3/12 lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setOffcanvas(!offcanvas),
                                className: "text-slate-200",
                                children: hamburgerIcon()
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-6/12 lg:justify-start lg:w-3/12 mr-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                className: "flex items-center justify-center lg:justify-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center justify-center w-10 h-10 mr-6 font-bold rounded bg-lime-600",
                                        children: "E"
                                    }),
                                    "Epictetus"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:hidden w-3/12 flex justify-end items-center text-slate-200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setSearch(!search),
                                children: searchIcon()
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `transition-all duration-200 fixed z-20 lg:flex justify-end lg:w-6/12 pr-12 bg-gradient-to-b from-slate-700 to-slate-800 lg:bg-none lg:static top-0 h-full lg:h-auto lg:p-0 w-full pl-10 pt-24 ${offcanvas ? "-left-0" : "left-full"}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>setOffcanvas(false),
                                    className: "absolute lg:hidden top-10 left-6",
                                    children: closeIcon()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex flex-col md:mr-12 lg:space-x-6 lg:flex-row rounded-lg space-y-4 lg:space-y-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/posts",
                                                className: "hover:underline",
                                                children: "UI Design"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/posts",
                                                className: "hover:underline",
                                                children: "Front-End"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/posts",
                                                className: "hover:underline",
                                                children: "Back-End"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center duration-200 hover:underline cursor-pointer",
                                                    onClick: ()=>setDropdown(!dropdown, setArrow(!arrow)),
                                                    children: [
                                                        "Others ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "ml-2",
                                                            children: arrowIcon()
                                                        })
                                                    ]
                                                }),
                                                dropdown && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "absolute mt-4 rounded-md shadow-xl shadow-slate-900 w-52 bg-slate-900 ",
                                                    children: dropdownList.map(({ text , href  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "flex px-5 py-2 border-b border-b-white/5 hover:bg-slate-800/40 last:border-b-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: href,
                                                                children: text
                                                            })
                                                        }, text))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `fixed lg:static transition-all duration-300 w-full left-0 lg:flex lg:w-3/12 px-5 lg:px-0 ${search ? "top-24" : "-top-40"}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "relative pl-12 py-2 transition-all duration-100 border rounded-full outline-none border-slate-600 bg-slate-900 focus:ring-blue-500 focus:ring-2 focus:bg-slate-800 hover:bg-slate-800 w-full",
                                        placeholder: "Search.."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute ml-5 -mt-8 text-slate-400",
                                        children: searchIcon()
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute lg:hidden right-10 -mt-[33px] text-slate-300",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>setSearch(false),
                                            children: closeIcon()
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.jsx

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "py-12 text-center text-slate-300",
        children: [
            "Copyright \xa9 2023 - ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-white",
                children: "Dwi Husnawan"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/_layout.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "min-h-screen px-6 pb-5 text-white bg-gradient-to-b from-slate-800 to bg-slate-900",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;