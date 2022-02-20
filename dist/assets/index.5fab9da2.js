var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { s, $ } from "./vendor.0c7781d4.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var halfmoonVariables_min = "";
var custom = "";
var all_min = "";
var animate_min = "";
class FeatureCard extends s {
  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }
  render() {
    let shadow = this.shadow == "true" ? "shadow-lg" : "";
    let buttonIcon = this.buttonIcon ? $`<i class="${this.buttonIcon} mr-10"></i>` : $``;
    let button = this.buttonText ? $`<br><a href="${this.buttonLink}" class="btn btn-primary text-left mt-10">${buttonIcon}${this.buttonText}</a>` : $``;
    let content = $`
      <div class="col-md-6 px-10">
        <h3 class="mb-0 text-white-dm text-dark-lm">${this.title}</h3>
        <p class="mt-0 font-size-20 text-muted">${this.subtitle}</p>
        <p>${this.content}${button}</p>
      </div>
    `;
    let image = $`
      <div class="col-md-6 px-10">
        <img src="${this.image}" class="w-full ${shadow}" />
      </div>
    `;
    if (this.alignment === "left") {
      return $`
        <div class="mt-20 pt-20 text-left w-md-three-quarter card d-inline-block shadow-lg animate__animated animate__fadeInUp">
          <div class="row">${image} ${content}</div>
        </div>
      `;
    } else {
      return $`
        <div class="mt-20 pt-20 text-left w-md-three-quarter card d-inline-block shadow-lg animate__animated animate__fadeInUp">
          <div class="row">${content} ${image}</div>
        </div>
      `;
    }
  }
}
__publicField(FeatureCard, "properties", {
  title: "Title",
  subtitle: "Subtitle",
  content: "Content",
  image: "",
  alignment: "left",
  shadow: "true",
  buttonText: "",
  buttonLink: "",
  buttonIcon: ""
});
customElements.define("feature-card", FeatureCard);
class CityItem extends s {
  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return $` <div class="card border-0 bg-fill text-white shadow" style="linear-gradient(270deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 100%), url('${this.image}');">
      <h2 class="mb-5">${this.name}</h2>
      <p class="font-size-18 mt-5">${this.state}</p>
    </div>`;
  }
}
__publicField(CityItem, "properties", {
  name: "Title",
  state: "Subtitle",
  image: ""
});
customElements.define("city-item", CityItem);
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
  var t = this;
  do {
    if (t.matches(e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}), "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
  if ("Element" in e) {
    var t = "classList", o = "prototype", a = e.Element[o], s2 = Object, n = String[o].trim || function() {
      return this.replace(/^\s+|\s+$/g, "");
    }, i = Array[o].indexOf || function(e2) {
      for (var t2 = 0, o2 = this.length; t2 < o2; t2++)
        if (t2 in this && this[t2] === e2)
          return t2;
      return -1;
    }, r = function(e2, t2) {
      this.name = e2, this.code = DOMException[e2], this.message = t2;
    }, d = function(e2, t2) {
      if (t2 === "")
        throw new r("SYNTAX_ERR", "The token must not be empty.");
      if (/\s/.test(t2))
        throw new r("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
      return i.call(e2, t2);
    }, l = function(e2) {
      for (var t2 = n.call(e2.getAttribute("class") || ""), o2 = t2 ? t2.split(/\s+/) : [], a2 = 0, s3 = o2.length; a2 < s3; a2++)
        this.push(o2[a2]);
      this._updateClassName = function() {
        e2.setAttribute("class", this.toString());
      };
    }, c = l[o] = [], m = function() {
      return new l(this);
    };
    if (r[o] = Error[o], c.item = function(e2) {
      return this[e2] || null;
    }, c.contains = function(e2) {
      return ~d(this, e2 + "");
    }, c.add = function() {
      for (var e2, t2 = arguments, o2 = 0, a2 = t2.length, s3 = false; ~d(this, e2 = t2[o2] + "") || (this.push(e2), s3 = true), ++o2 < a2; )
        ;
      s3 && this._updateClassName();
    }, c.remove = function() {
      var e2, t2, o2 = arguments, a2 = 0, s3 = o2.length, n2 = false;
      do {
        for (t2 = d(this, e2 = o2[a2] + ""); ~t2; )
          this.splice(t2, 1), n2 = true, t2 = d(this, e2);
      } while (++a2 < s3);
      n2 && this._updateClassName();
    }, c.toggle = function(e2, t2) {
      var o2 = this.contains(e2), a2 = o2 ? t2 !== true && "remove" : t2 !== false && "add";
      return a2 && this[a2](e2), t2 === true || t2 === false ? t2 : !o2;
    }, c.replace = function(e2, t2) {
      var o2 = d(e2 + "");
      ~o2 && (this.splice(o2, 1, t2), this._updateClassName());
    }, c.toString = function() {
      return this.join(" ");
    }, s2.defineProperty) {
      var h = { get: m, enumerable: true, configurable: true };
      try {
        s2.defineProperty(a, t, h);
      } catch (e2) {
        e2.number !== void 0 && e2.number !== -2146823252 || (h.enumerable = false, s2.defineProperty(a, t, h));
      }
    } else
      s2[o].__defineGetter__ && a.__defineGetter__(t, m);
  }
}(self), function() {
  var e, o, t = document.createElement("_");
  t.classList.add("c1", "c2"), t.classList.contains("c2") || ((e = function(e2) {
    var a = DOMTokenList.prototype[e2];
    DOMTokenList.prototype[e2] = function(e3) {
      for (var t2 = arguments.length, o2 = 0; o2 < t2; o2++)
        e3 = arguments[o2], a.call(this, e3);
    };
  })("add"), e("remove")), t.classList.toggle("c3", false), t.classList.contains("c3") && (o = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function(e2, t2) {
    return 1 in arguments && !this.contains(e2) == !t2 ? t2 : o.call(this, e2);
  }), "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(e2, t2) {
    var o2 = this.toString().split(" "), a = o2.indexOf(e2 + "");
    ~a && (o2 = o2.slice(a), this.remove.apply(this, o2), this.add(t2), this.add.apply(this, o2.slice(1)));
  }), t = null;
}());
var halfmoon = { pageWrapper: document.getElementsByClassName("page-wrapper")[0], stickyAlerts: document.getElementsByClassName("sticky-alerts")[0], darkModeOn: false, createCookie: function(e, t, o) {
  var a, s2 = o ? ((a = new Date()).setTime(a.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + a.toGMTString()) : "";
  document.cookie = e + "=" + t + s2 + "; path=/";
}, readCookie: function(e) {
  for (var t = e + "=", o = document.cookie.split(";"), a = 0; a < o.length; a++) {
    for (var s2 = o[a]; s2.charAt(0) === " "; )
      s2 = s2.substring(1, s2.length);
    if (s2.indexOf(t) === 0)
      return s2.substring(t.length, s2.length);
  }
  return null;
}, eraseCookie: function(e) {
  this.createCookie(e, "", -1);
}, toggleDarkMode: function() {
  document.body.classList.contains("dark-mode") ? (document.body.classList.remove("dark-mode"), this.darkModeOn = false, this.createCookie("halfmoon_preferredMode", "light-mode", 365)) : (document.body.classList.add("dark-mode"), this.darkModeOn = true, this.createCookie("halfmoon_preferredMode", "dark-mode", 365));
}, getPreferredMode: function() {
  return this.readCookie("halfmoon_preferredMode") ? this.readCookie("halfmoon_preferredMode") : "not-set";
}, toggleSidebar: function() {
  this.pageWrapper && (this.pageWrapper.getAttribute("data-sidebar-hidden") ? this.pageWrapper.removeAttribute("data-sidebar-hidden") : this.pageWrapper.setAttribute("data-sidebar-hidden", "hidden"));
}, deactivateAllDropdownToggles: function() {
  for (var e = document.querySelectorAll("[data-toggle='dropdown'].active"), t = 0; t < e.length; t++)
    e[t].classList.remove("active"), e[t].closest(".dropdown").classList.remove("show");
}, toggleModal: function(e) {
  var t = document.getElementById(e);
  t && t.classList.toggle("show");
}, makeId: function(e) {
  for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = o.length, s2 = 0; s2 < e; s2++)
    t += o.charAt(Math.floor(Math.random() * a));
  return t;
}, toastAlert: function(e, t) {
  var o, a = document.getElementById(e);
  t === void 0 && (t = 5e3), a.classList.contains("show") || (a.classList.contains("alert-block") || a.classList.add("alert-block"), setTimeout(function() {
    a.classList.add("show");
  }, 250), o = t + 250, setTimeout(function() {
    a.classList.add("fade");
  }, o), setTimeout(function() {
    a.classList.remove("alert-block"), a.classList.remove("show"), a.classList.remove("fade");
  }, o + 500));
}, initStickyAlert: function(e) {
  var t = "content" in e ? e.content : "", o = "title" in e ? e.title : "", a = "alertType" in e ? e.alertType : "", s2 = "fillType" in e ? e.fillType : "", n = !("hasDismissButton" in e) || e.hasDismissButton, i = "timeShown" in e ? e.timeShown : 5e3, r = document.createElement("div");
  r.setAttribute("id", this.makeId(6)), o && (t = "<h4 class='alert-heading'>" + o + "</h4>" + t), r.classList.add("alert"), a && r.classList.add(a), s2 && r.classList.add(s2), n && (t = "<button class='close' data-dismiss='alert' type='button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + t), r.innerHTML = t, this.stickyAlerts.insertBefore(r, this.stickyAlerts.childNodes[0]), this.toastAlert(r.getAttribute("id"), i);
}, clickHandler: function(e) {
}, keydownHandler: function(e) {
} };
function halfmoonOnDOMContentLoaded() {
  halfmoon.pageWrapper || (halfmoon.pageWrapper = document.getElementsByClassName("page-wrapper")[0]), halfmoon.stickyAlerts || (halfmoon.stickyAlerts = document.getElementsByClassName("sticky-alerts")[0]), halfmoon.readCookie("halfmoon_preferredMode") ? halfmoon.readCookie("halfmoon_preferredMode") == "dark-mode" ? halfmoon.darkModeOn = true : halfmoon.darkModeOn = false : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches || document.body.classList.contains("dark-mode") ? halfmoon.darkModeOn = true : halfmoon.darkModeOn = false, (document.body.getAttribute("data-set-preferred-mode-onload") || document.body.getAttribute("data-set-preferred-theme-onload")) && (halfmoon.darkModeOn ? document.body.classList.contains("dark-mode") || document.body.classList.add("dark-mode") : document.body.classList.contains("dark-mode") && document.body.classList.remove("dark-mode")), document.documentElement.clientWidth <= 768 ? halfmoon.pageWrapper && (halfmoon.pageWrapper.getAttribute("data-show-sidebar-onload-sm-and-down") || halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden")) : halfmoon.pageWrapper && halfmoon.pageWrapper.getAttribute("data-sidebar-type") === "overlayed-all" && halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden"), document.addEventListener("click", function(e2) {
    var t2, o2, s3 = e2.target;
    s3.matches("[data-toggle='dropdown']") || s3.matches("[data-toggle='dropdown'] *") ? (s3.matches("[data-toggle='dropdown'] *") && (s3 = s3.closest("[data-toggle='dropdown']")), s3.classList.contains("active") ? (s3.classList.remove("active"), s3.closest(".dropdown").classList.remove("show")) : (halfmoon.deactivateAllDropdownToggles(), s3.classList.add("active"), s3.closest(".dropdown").classList.add("show"))) : s3.matches(".dropdown-menu *") || halfmoon.deactivateAllDropdownToggles(), (s3.matches(".alert [data-dismiss='alert']") || s3.matches(".alert [data-dismiss='alert'] *")) && (s3.matches(".alert [data-dismiss='alert'] *") && (s3 = s3.closest(".alert [data-dismiss='alert']")), s3.parentNode.classList.add("dispose")), (s3.matches("[data-toggle='modal']") || s3.matches("[data-toggle='modal'] *")) && (s3.matches("[data-toggle='modal'] *") && (s3 = s3.closest("[data-toggle='modal']")), (t2 = document.getElementById(s3.getAttribute("data-target"))) && t2.classList.contains("modal") && halfmoon.toggleModal(s3.getAttribute("data-target"))), (s3.matches(".modal [data-dismiss='modal']") || s3.matches(".modal [data-dismiss='modal'] *")) && (s3.matches(".modal [data-dismiss='modal'] *") && (s3 = s3.closest(".modal [data-dismiss='modal']")), s3.closest(".modal").classList.remove("show")), s3.matches(".modal-dialog") && ((o2 = s3.closest(".modal")).getAttribute("data-overlay-dismissal-disabled") || (o2.classList.contains("show") ? o2.classList.remove("show") : window.location.hash = "#"));
  }, false), document.addEventListener("keydown", function(e2) {
    var t2, o2, a2;
    document.querySelector("input:focus") || document.querySelector("textarea:focus") || document.querySelector("select:focus") || (e2 = e2 || window.event).ctrlKey || e2.metaKey || (document.body.getAttribute("data-sidebar-shortcut-enabled") && e2.shiftKey && e2.which == 83 && (t2 = false, window.location.hash && (o2 = window.location.hash.substring(1), (a2 = document.getElementById(o2)) && a2.classList.contains("modal") && (t2 = true)), document.querySelector(".modal.show") && (t2 = true), t2 || (halfmoon.toggleSidebar(), e2.preventDefault())), document.body.getAttribute("data-dm-shortcut-enabled") && e2.shiftKey && e2.which == 68 && (halfmoon.toggleDarkMode(), e2.preventDefault())), e2.which === 27 && (document.querySelector("[data-toggle='dropdown'].active") ? ((a2 = document.querySelector("[data-toggle='dropdown'].active")).classList.remove("active"), a2.closest(".dropdown").classList.remove("show"), e2.preventDefault()) : (window.location.hash && (o2 = window.location.hash.substring(1), (a2 = document.getElementById(o2)) && a2.classList.contains("modal") && (a2.getAttribute("data-esc-dismissal-disabled") || (window.location.hash = "#", e2.preventDefault()))), document.querySelector(".modal.show") && ((a2 = document.querySelector(".modal.show")).getAttribute("data-esc-dismissal-disabled") || (a2.classList.remove("show"), e2.preventDefault()))));
  });
  for (var e = document.querySelectorAll(".custom-file input"), t = 0; t < e.length; t++) {
    var o = e[t], a = document.createElement("div");
    a.classList.add("file-names");
    var s2 = o.getAttribute("data-default-value");
    a.innerHTML = s2 || "No file chosen", o.parentNode.appendChild(a), o.addEventListener("change", function(e2) {
      a = e2.target.parentNode.querySelector(".file-names"), e2.target.files.length === 1 ? a.innerHTML = e2.target.files[0].name : 1 < e2.target.files.length ? a.innerHTML = e2.target.files.length + " files" : a.innerHTML = "No file chosen";
    });
  }
  halfmoon.pageWrapper && halfmoon.pageWrapper.classList.add("with-transitions");
}
document.addEventListener("DOMContentLoaded", halfmoonOnDOMContentLoaded);
const sections = document.querySelectorAll(".anchor");
function switchMenuActive(hash) {
  let currentLink = document.querySelector(".landing-nav").querySelector(".active");
  if (currentLink) {
    currentLink.classList.remove("active");
    currentLink.classList.remove("font-weight-bold");
    currentLink.classList.remove("text-white-dm");
    currentLink.classList.remove("text-dark-lm");
  }
  let newLink = document.querySelector(".landing-nav").querySelector("#menu-" + hash);
  newLink.classList.add("active");
  newLink.classList.add("font-weight-bold");
  newLink.classList.add("text-white-dm");
  newLink.classList.add("text-dark-lm");
  newLink.focus();
}
var observer = new IntersectionObserver((entries) => {
  if (entries.length == 1) {
    var hash = entries[0].target.getAttribute("id");
    switchMenuActive(hash);
  }
});
sections.forEach((image) => {
  observer.observe(image);
});
document.querySelector("#menu-recomendations").addEventListener("click", () => {
  switchMenuActive("recomendations");
});
document.querySelector("#menu-planner").addEventListener("click", () => {
  switchMenuActive("planner");
});
document.querySelector("#menu-community").addEventListener("click", () => {
  switchMenuActive("community");
});
document.querySelector("#menu-cities").addEventListener("click", () => {
  switchMenuActive("cities");
});
