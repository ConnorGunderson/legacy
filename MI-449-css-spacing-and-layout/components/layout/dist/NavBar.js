"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var react_1 = require("react");
exports.NavBar = function () {
    var ref = react_1.useRef(null);
    var handleClick = function (e) {
        if (ref.current)
            ref.current.classList.remove('text-purple-700');
        var target = e.target;
        ref.current = target;
        ref.current.classList.add('text-purple-700');
    };
    return (react_1["default"].createElement("nav", { className: 'sticky top-0 w-full z-10 bg-white navbar shadow-md p-4' },
        react_1["default"].createElement("a", { href: '#about', onClick: function (e) { return handleClick(e); } }, "About"),
        react_1["default"].createElement("a", { href: '#skills', onClick: function (e) { return handleClick(e); } }, "Skills"),
        react_1["default"].createElement("a", { href: '#projects', onClick: function (e) { return handleClick(e); } }, "Projects"),
        react_1["default"].createElement("a", { href: '#contact', onClick: function (e) { return handleClick(e); } }, "Contact")));
};
