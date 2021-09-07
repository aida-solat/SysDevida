(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    750: function (t, e, r) {
      "use strict";
      var n = {
          props: {
            name: { type: String, default: "" },
            role: { type: String, default: "" },
            text: { type: String, default: "" },
            image: { type: String, default: "" },
          },
        },
        o = r(17),
        C = r(20),
        c = r.n(C),
        l = r(261),
        y = r(262),
        L = r(49),
        f = r(730),
        v = r(193),
        d = r(731),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "v-card",
              { staticClass: "mb-6", attrs: { outlined: "" } },
              [
                r(
                  "v-card-text",
                  [
                    r(
                      "v-row",
                      [
                        r(
                          "v-col",
                          { attrs: { cols: "12", sm: "3" } },
                          [
                            r(
                              "v-avatar",
                              {
                                staticClass: "elevation-2",
                                attrs: {
                                  width: "100%",
                                  height: "auto",
                                  "max-width": "100",
                                },
                              },
                              [
                                r("v-img", {
                                  attrs: { src: t.image, alt: t.name },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        r("v-col", { attrs: { cols: "12", sm: "9" } }, [
                          r("q", { staticClass: "d-block mb-4 font-italic" }, [
                            t._v(t._s(t.text)),
                          ]),
                          t._v(" "),
                          r("small", [
                            r("strong", [t._v(t._s(t.name))]),
                            r("br"),
                            t._v("\n          " + t._s(t.role)),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ),
        h = component.exports;
      c()(component, {
        VAvatar: l.a,
        VCard: y.a,
        VCardText: L.c,
        VCol: f.a,
        VImg: v.a,
        VRow: d.a,
      });
      var O = r(839),
        w = {
          components: { Testimonial: h },
          data: function () {
            return { testimonials: O };
          },
        },
        m = Object(o.a)(
          w,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "v-row",
              { attrs: { align: "stretch" } },
              t._l(t.testimonials, function (t) {
                var e = t.name,
                  n = t.role,
                  text = t.text,
                  image = t.image;
                return r(
                  "v-col",
                  {
                    key: e,
                    staticClass: "d-flex py-0",
                    attrs: { cols: "12", sm: "6", md: "4" },
                  },
                  [
                    r("Testimonial", {
                      attrs: {
                        name: e,
                        role: n,
                        text: text,
                        image: image,
                        height: "100%",
                      },
                    }),
                  ],
                  1
                );
              }),
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ),
        j = m.exports;
      c()(m, { VCol: f.a, VRow: d.a });
      var M = r(810),
        P = r(811),
        H = r(852),
        x = r.n(H),
        V = r(853),
        _ = r.n(V),
        Z = r(854),
        S = r.n(Z),
        z = r(855),
        D = r.n(z),
        k = r(856),
        E = r.n(k),
        B = r(857),
        A = r.n(B),
        R = r(858),
        T = r.n(R),
        W = r(859),
        I = r.n(W),
        G = r(860),
        F = r.n(G),
        $ = r(861),
        J = r.n($),
        U = r(862),
        N = r.n(U),
        Y = r(863),
        K = r.n(Y),
        Q = {
          components: {
            Testimonials: j,
            Apps: M.a,
            UseCases: P.a,
            Google: D.a,
            Oracle: T.a,
            Amazon: _.a,
            IBM: E.a,
            PayPal: I.a,
            Ebay: S.a,
            Shopify: N.a,
            Stripe: K.a,
            SAP: J.a,
            Microsoft: A.a,
            Salesforce: F.a,
            Adobe: x.a,
          },
          props: {
            apps: { type: Boolean, default: !1 },
            useCases: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              logos: {
                Google: D.a,
                Oracle: T.a,
                Amazon: _.a,
                IBM: E.a,
                PayPal: I.a,
                Ebay: S.a,
                Shopify: N.a,
                Stripe: K.a,
                SAP: J.a,
                Microsoft: A.a,
                Salesforce: F.a,
                Adobe: x.a,
              },
            };
          },
        },
        X = (r(864), r(744)),
        tt = r(257),
        et = Object(o.a)(
          Q,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              [
                r("v-divider", { staticClass: "mb-12" }),
                t._v(" "),
                t.useCases
                  ? [
                      r(
                        "v-container",
                        { staticClass: "mb-12" },
                        [
                          r("div", { staticClass: "text-h3 mb-4" }, [
                            t._v("Empower yours sales and marketing teams"),
                          ]),
                          t._v(" "),
                          r("p", { staticClass: "mb-8" }, [
                            t._v(
                              "\n        Use our tools for lead generation, market analysis and competitor\n        research.\n      "
                            ),
                          ]),
                          t._v(" "),
                          r("UseCases"),
                        ],
                        1
                      ),
                      t._v(" "),
                      r("v-divider", { staticClass: "mb-12" }),
                    ]
                  : t._e(),
                t._v(" "),
                t.apps
                  ? [
                      r(
                        "v-container",
                        { staticClass: "mb-8" },
                        [
                          r("div", { staticClass: "text-h3 mb-4" }, [
                            t._v("Apps"),
                          ]),
                          t._v(" "),
                          r("p", [
                            t._v(
                              "Sysdevida works with the tools you use every day."
                            ),
                          ]),
                          t._v(" "),
                          r("Apps", { attrs: { feature: "" } }),
                        ],
                        1
                      ),
                      t._v(" "),
                      r("v-divider", { staticClass: "mb-12" }),
                    ]
                  : t._e(),
                t._v(" "),
                r(
                  "v-container",
                  { staticClass: "logos text-center" },
                  [
                    r("p", { staticClass: "overline font-weight-regular" }, [
                      t._v(
                        "\n      Sysdevida is trusted by thousands of professionals world-wide\n    "
                      ),
                    ]),
                    t._v(" "),
                    r(
                      "v-row",
                      { attrs: { align: "center" } },
                      t._l(t.logos, function (t, e) {
                        return r(
                          "v-col",
                          { key: e, attrs: { cols: "3", sm: "2", lg: "1" } },
                          [
                            r(e, {
                              tag: "component",
                              staticClass: "companies__logo mx-auto d-block",
                            }),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                r(
                  "v-container",
                  [r("Testimonials", { staticClass: "mt-4 mb-8" })],
                  1
                ),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = et.exports;
      c()(et, { VCol: f.a, VContainer: X.a, VDivider: tt.a, VRow: d.a });
    },
    811: function (t, e, r) {
      "use strict";
      var n = r(4),
        o = {
          props: { tall: { type: Boolean, default: !1 } },
          data: function () {
            return {
              useCases: [
                {
                  title: "Website profiling",
                  text: "Find out what websites are built with.",
                  icon: n.bb,
                },
                {
                  title: "Lead generation",
                  text: "Find prospects by the technologies they use.",
                  icon: n.b,
                },
                {
                  title: "Market research",
                  text: "Compare market shares and technology trends.",
                  icon: n.A,
                },
                {
                  title: "Competitor analysis",
                  text: "Discover who uses competitors' software.",
                  icon: n.Bb,
                },
                {
                  title: "Data enrichment",
                  text: "Technology, company and contact information.",
                  icon: n.nb,
                },
                {
                  title: "Custom reports",
                  text: "Create lists of websites and contacts.",
                  icon: n.C,
                },
                {
                  title: "Website monitoring",
                  text: "Monitor website technology changes.",
                  icon: n.r,
                },
                {
                  title: "Browser extension",
                  text: "See the technologies on websites you visit.",
                  icon: n.Hb,
                },
                {
                  title: "CRM integration",
                  text: "See the technologies of your leads.",
                  icon: n.jb,
                },
                {
                  title: "Email verification",
                  text: "Improve delivery and mailing list quality.",
                  icon: n.fb,
                },
                {
                  title: "API access",
                  text: "Instant and real-time technology lookups.",
                  icon: n.O,
                },
                {
                  title: "Security recon",
                  text: "Reveal web technologies and version numbers.",
                  icon: n.jc,
                },
              ],
            };
          },
        },
        C = r(17),
        c = r(20),
        l = r.n(c),
        y = r(261),
        L = r(730),
        f = r(256),
        v = r(731),
        component = Object(C.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              [
                r(
                  "v-row",
                  t._l(t.useCases, function (e, n) {
                    return r(
                      "v-col",
                      {
                        key: n,
                        attrs: {
                          cols: "6",
                          sm: t.tall ? 6 : 4,
                          md: t.tall ? 6 : 2,
                        },
                      },
                      [
                        r(
                          "div",
                          {
                            staticClass: "d-flex",
                            staticStyle: { height: "100%" },
                          },
                          [
                            r(
                              "div",
                              { staticStyle: { height: "100%" } },
                              [
                                r(
                                  "v-avatar",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      color: "primary lighten-1",
                                      size: "48",
                                    },
                                  },
                                  [
                                    r(
                                      "v-icon",
                                      {
                                        attrs: { color: "primary", size: "24" },
                                      },
                                      [t._v(t._s(e.icon))]
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                r("div", [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "subtitle-2 primary--text mb-1",
                                    },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(e.title) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r(
                                    "div",
                                    { staticStyle: { "line-height": "1rem" } },
                                    [
                                      r(
                                        "small",
                                        { staticClass: "text--disabled" },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(e.text) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    );
                  }),
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      l()(component, { VAvatar: y.a, VCol: L.a, VIcon: f.a, VRow: v.a });
    },
    822: function (t, e, r) {
      var content = r(865);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(15).default)("4a74f5d1", content, !0, { sourceMap: !1 });
    },
    839: function (t) {
      t.exports = JSON.parse(
        '[{"name":"Ilya Grigorik","role":"Principal Engineer at Shopify","image":"/images/testimonials/ilya-grigorik.jpg","text":"Sysdevida has proven to be a great tool to help us break down the aggregate analysis of how the web is doing by various technologies."},{"name":"Thomas Alibert","role":"Growth Engineer at PayFit","image":"/images/testimonials/thomas-alibert.png","text":"These days you need advanced marketing tools to stand out from the competition. Sysdevida help us do just that."},{"name":"Roman Schweiger","role":"Head of Business Development at Boomerank","image":"/images/testimonials/roman-schweiger.jpg","text":"Sysdevida is an integral part of our sales process, enabling us to optimise lead segmentation at scale. Itâ€™s a total game changer for our organisation."},{"name":"Rick Viscomi","role":"Senior DevRel Engineer at Google","image":"/images/testimonials/rick-viscomi.jpg","text":"Sysdevida has been such a useful part of the HTTP Archive dataset. It\'s enabled us to slice the data in new ways and discover more interesting insights about the state of the web."},{"name":"Rabin Nuchtabek","role":"Chief Growth Engineer at Skedify","image":"/images/testimonials/rabin-nuchtabek.jpg","text":"Sysdevida is helping our sales teams to understand prospects better and faster by having a clear view on their tech stack."},{"name":"Patrick Meenan","role":"Engineering Fellow at Catchpoint","image":"/images/testimonials/patrick-meenan.jpg","text":"Sysdevida has been hugely valuable to slice performance data by the various detected applications at WebPageTest.org."}]'
      );
    },
    852: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "2271",
                    height: "546",
                    viewBox: "0 0 2271 546",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M373.462 11.4712H591.963V534.542L373.462 11.4712ZM219.537 11.4712H0.879272V534.542L219.537 11.4712ZM296.512 204.241L435.73 534.542H344.5L302.867 429.344H200.964L296.512 204.241Z",
                  fill: "black",
                },
              }),
              r("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M888.684 394.397L857.556 539.114H785.963L904.248 14.6423H989.057L1100.34 539.114H1027.97L997.617 394.397H888.684ZM989.057 336.033L964.933 210.732C957.929 174.936 950.926 128.27 945.491 90.9045H942.366C936.931 129.036 929.124 177.27 922.146 210.732L897.244 336.033H989.057ZM1373.61 0.647888V441.853C1373.61 470.659 1375.17 512.681 1376.71 539.127H1313.69L1309.02 493.227H1306.69C1294.24 519.672 1265.44 545.365 1227.32 545.365C1157.29 545.365 1114.49 469.09 1114.49 351.61C1114.49 217.762 1171.28 154.729 1231.22 154.729C1261.55 154.729 1285.68 168.749 1298.9 197.529H1300.46V0.647888H1373.61V0.647888ZM1300.45 304.906C1300.45 297.915 1300.45 289.355 1299.67 281.547C1295.78 247.32 1276.32 217.749 1249.88 217.749C1203.95 217.749 1188.4 281.547 1188.4 351.597C1188.4 429.415 1208.63 483.875 1247.54 483.875C1263.89 483.875 1285.66 475.315 1298.11 430.194C1299.67 423.968 1300.45 414.617 1300.45 406.083V304.906V304.906ZM1547.85 545.352C1472.38 545.352 1417.89 480.763 1417.89 350.832C1417.89 213.08 1482.47 154.716 1551.72 154.716C1626.43 154.716 1680.11 221.64 1680.11 349.262C1680.11 499.452 1606.18 545.352 1548.61 545.352H1547.85ZM1550.17 487.779C1595.29 487.779 1605.42 407.626 1605.42 350.053C1605.42 293.233 1595.3 212.314 1548.62 212.314C1500.36 212.314 1491.04 293.233 1491.04 350.053C1491.04 413.073 1501.93 487.779 1549.4 487.779H1550.17ZM1724.21 0.647888H1797.35V203.741H1798.9C1818.36 169.514 1844.81 154.716 1878.28 154.716C1942.85 154.716 1983.33 227.865 1983.33 343.815C1983.33 479.206 1928.08 545.352 1865.83 545.352C1828.47 545.352 1807.46 525.106 1791.11 491.644H1788.02L1784.12 539.114H1721.1C1722.65 513.447 1724.21 470.646 1724.21 441.84V0.647888V0.647888ZM1797.35 405.266C1797.35 413.852 1798.12 422.412 1800.46 428.624C1812.12 474.55 1834.7 483.875 1849.47 483.875C1893.05 483.875 1909.39 426.303 1909.39 348.484C1909.39 276.113 1892.28 217.749 1848.69 217.749C1824.57 217.749 1805.11 246.542 1799.67 273.778C1798.11 281.56 1797.33 291.689 1797.33 299.458V405.266H1797.35V405.266ZM2091.27 364.813C2092.04 462.086 2134.05 486.197 2178.41 486.197C2204.87 486.197 2227.44 479.984 2243.78 472.19L2254.67 525.106C2232.11 536.779 2197.86 543.018 2164.4 543.018C2069.48 543.018 2019.67 471.424 2019.67 354.697C2019.67 230.965 2076.47 154.703 2155.06 154.703C2233.66 154.703 2270.24 230.187 2270.24 325.138C2270.24 343.802 2269.44 355.488 2268.68 365.591L2091.27 364.813V364.813ZM2200.98 312.688C2201.76 245.764 2178.41 209.98 2149.63 209.98C2111.49 209.98 2094.37 265.231 2092.04 312.688H2200.98Z",
                  fill: "black",
                },
              }),
            ])
          );
        },
      };
    },
    853: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "980",
                    height: "420",
                    viewBox: "0 0 980 420",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  d: "M143.4,142.50677 C137.9,134.817197 132,128.625592 132,114.444821 L132,67.2088693 C132,47.2359513 133.4,28.8608666 118.7,15.0795531 C107,3.89471903 87.8,0 73,0 C44.2,0 12,10.6855112 5.2,46.3371699 C4.5,50.1320244 7.3,52.1293162 9.7,52.7285037 L39.2,55.9241706 C41.9,55.824306 43.9,53.1279621 44.4,50.4316181 C46.9,38.1482735 57.2,32.2562627 68.8,32.2562627 C75,32.2562627 82.1,34.5531483 85.8,40.1455653 C90,46.3371699 89.5,54.9255247 89.5,62.1157752 L89.5,66.0104942 C71.9,68.0077861 49,69.3060257 32.5,76.5961408 C13.4,84.5853081 0,101.362559 0,125.929248 C0,157.386594 19.9,173.1652 45.4,173.1652 C67,173.1652 78.8,168.072106 95.4,151.095125 C100.9,159.084292 102.7,162.979012 112.8,171.267773 C115.1,172.466148 118,172.366283 120,170.56872 L120.1,170.56872 C126.1,165.275897 137.1,155.589032 143.3,150.495938 C145.8,148.498646 145.3,145.203114 143.4,142.50677 Z M89.4,96.7687881 C89.4,108.55281 89.7,118.439404 83.7,128.925186 C78.9,137.413676 71.3,142.7065 62.7,142.7065 C51.1,142.7065 44.3,133.918416 44.3,120.73629 C44.3,94.9712255 67.5,90.2775897 89.3,90.2775897 L89.3,96.7687881 L89.4,96.7687881 Z M167.1,165.875085 L167.1,10.3859174 C167.1,7.2901151 169.7,4.79350034 173,4.79350034 L201.3,4.79350034 C204.2,4.89336493 206.6,7.19025051 206.8,9.98645904 L206.8,30.2589709 L207.3,30.2589709 C214.7,10.5856466 228.6,1.49796886 247.3,1.49796886 C266.3,1.49796886 278.2,10.6855112 286.7,30.2589709 C294.1,10.5856466 310.7,1.49796886 328.6,1.49796886 C341.3,1.49796886 355.2,6.79079215 363.7,18.4749492 C373.3,31.5572106 371.3,50.5314827 371.3,67.2088693 L371.3,165.275897 C371.3,168.371699 368.7,170.868314 365.5,170.868314 L335,170.868314 C332,170.56872 329.5,168.271835 329.5,165.275897 L329.5,82.88761 C329.5,76.2965471 330.1,60.0186188 328.6,53.7271496 C326.3,43.2413676 319.6,40.3452945 310.8,40.3452945 C303.5,40.3452945 295.8,45.2386594 292.7,53.1279621 C289.6,60.9174001 289.9,74.0995261 289.9,82.88761 L289.9,165.275897 C289.9,168.371699 287.3,170.868314 284,170.868314 L253.7,170.868314 C250.6,170.56872 248.2,168.271835 248.2,165.275897 L248.2,82.88761 C248.2,65.5111713 251,40.0457007 229.5,40.0457007 C207.7,40.0457007 208.6,64.9119838 208.6,82.88761 L208.6,165.275897 C208.6,168.371699 206,170.868314 202.8,170.868314 L172.5,170.868314 C169.6,170.76845 167.3,168.671293 167.1,165.875085 Z M608,230.687204 C551,272.630332 468.6,295 397.5,295 C297.9,295 208.2,258.149966 140.3,196.932972 C135,192.139472 139.7,185.548409 146.1,189.343263 C219.3,231.885579 309.9,257.450914 403.4,257.450914 C466.5,257.450914 535.9,244.468517 599.7,217.405213 C609.4,213.310765 617.4,223.696682 608,230.687204 Z M680.5,137.513541 L680.5,161.281313 C680.5,164.47698 677,168.371699 673.2,166.374408 C642.5,150.296209 601.9,148.498646 567.9,166.474272 C564.5,168.371699 560.8,164.67671 560.8,161.381178 L560.8,138.811781 C560.8,135.216655 560.8,129.025051 564.5,123.532498 L624.4,37.8486798 L572.3,37.8486798 C569.1,37.8486798 566.5,35.5517942 566.5,32.2562627 L566.5,9.98645904 C566.5,6.59106297 569,4.39404198 572.1,4.39404198 L671.8,4.39404198 C675,4.39404198 677.6,6.69092756 677.6,9.98645904 L677.6,29.0605958 C677.6,32.2562627 674.9,36.4505755 670.1,43.0416385 L618.4,116.641842 C637.6,116.142519 657.9,119.038592 675.3,128.825322 C679.1,131.122207 680.2,134.317874 680.5,137.513541 Z M487,65.9106297 C469.4,67.9079215 446.4,69.2061611 430,76.3964116 C411,84.5853081 397.7,101.362559 397.7,125.929248 C397.7,157.386594 417.5,173.1652 443,173.1652 C464.5,173.1652 476.4,168.072106 493,151.095125 C498.5,159.084292 500.3,162.979012 510.4,171.267773 C512.7,172.466148 515.6,172.366283 517.6,170.56872 L517.6,170.56872 C523.7,165.275897 534.7,155.589032 540.8,150.495938 C543.2,148.498646 542.9,145.203114 540.9,142.50677 C535.4,134.817197 529.5,128.625592 529.5,114.444821 L529.5,67.2088693 C529.5,47.2359513 530.9,28.8608666 516.1,15.0795531 C504.5,3.89471903 485.2,0 470.4,0 C441.6,0 409.3,10.6855112 402.6,46.3371699 C401.9,50.1320244 404.6,52.1293162 407.1,52.7285037 L436.5,55.9241706 C439.2,55.824306 441.3,53.1279621 441.8,50.3317536 C444.3,38.0484089 454.6,32.1563981 466.2,32.1563981 C472.4,32.1563981 479.5,34.4532837 483.2,40.0457007 C487.5,46.2373053 486.9,54.8256601 486.9,62.0159106 L487,65.9106297 L487,65.9106297 Z M487,96.7687881 C487,108.55281 487.3,118.439404 481.3,128.925186 C476.5,137.413676 468.8,142.7065 460.4,142.7065 C448.7,142.7065 441.9,133.918416 441.9,120.73629 C441.9,94.9712255 465.1,90.2775897 487,90.2775897 L487,96.7687881 L487,96.7687881 Z M763.3,1.49796886 C719.4,1.49796886 695.1,39.1469194 695.1,87.4813812 C695.1,135.516249 719.1,174.163846 763.3,174.163846 C805.7,174.163846 832.7,136.514895 832.7,89.1790792 C832.8,40.1455653 808.4,1.49796886 763.3,1.49796886 Z M763.3,142.207177 C739.5,142.207177 739.8,101.662153 739.8,82.6878808 C739.8,63.7136087 741.2,33.3547732 763.5,33.3547732 C773.1,33.3547732 780,37.549086 783.3,48.4343263 C787.3,60.8175355 787.8,76.4962762 787.8,89.6784022 C788,109.451591 786.9,142.207177 763.3,142.207177 Z M972.1,19.8730535 C980,32.3561273 980,53.2278267 980,68.3073798 L980,166.174678 C979.6,168.871022 977.1,171.068043 974.1,171.068043 L943.7,171.068043 C941,170.76845 938.6,168.771158 938.3,166.174678 L938.3,81.7890995 C938.3,64.8121192 940.3,39.9458362 919.4,39.9458362 C912,39.9458362 905.2,44.8392011 901.9,52.3290454 C897.6,61.8161814 897,71.3033175 897,81.7890995 L897,165.475626 C897,168.571429 894.3,171.167908 891.1,171.167908 L860.9,171.167908 C857.8,170.968179 855.4,168.471564 855.4,165.475626 L855.4,9.98645904 C855.7,7.09038592 858.2,4.89336493 861.3,4.89336493 L889.4,4.89336493 C892,4.99322952 894.3,6.79079215 894.8,9.28740691 L894.8,33.0551794 L895.3,33.0551794 C903.7,11.7840217 915.7,1.69769804 936.6,1.69769804 C950.2,1.49796886 963.5,6.49119838 972.1,19.8730535 Z M655.9,185.148951 C662.1,192.938389 654.3,246.365944 623.7,271.831415 C619,275.726134 614.5,273.628978 616.6,268.436019 C623.5,251.359174 638.9,212.911307 631.6,203.6239 C624.4,194.336493 583.5,199.229858 565.2,201.426879 C559.6,202.125931 558.8,197.232566 563.8,193.737305 C596.3,170.868314 649.7,177.459377 655.9,185.148951 Z",
                  transform: "translate(0 124)",
                },
              }),
            ])
          );
        },
      };
    },
    854: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "980",
                    height: "394",
                    viewBox: "0 0 980 394",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  d: "M927.2 95.3L843.8 262.7L760.2 95.3H702L716.9 123.2C697.2 93.8 658.3 86.3 622.8 86.3C518.8 86.3 512.2 143.2 512.2 152.3H564C564 152.3 566.7 119.1 619.3 119.1C653.5 119.1 680 134.8 680 164.8V175.5H619.3C552.1 175.5 511.3 191.9 499.6 225.2C500.8 217.8 501.5 210.2 501.5 202.3C501.5 138.4 458.4 87 385.6 87C317.4 87 296.2 123.8 296.2 123.8V0.700012H246.2V188.1C245.5 147.3 219 86.3 126.7 86.3C57.6 86.3 0 115.7 0 204.1C0 274.2 38.7 318.3 128.5 318.3C234.2 318.3 240.9 248.7 240.9 248.7H189.7C189.7 248.7 178.7 286.2 125.3 286.2C81.8 286.2 50.5 256.8 50.5 215.7H246.1V273.9C246.1 289.4 245 311.2 245 311.2H294C294 311.2 295.7 295.6 295.7 281.3C295.7 281.3 319.8 319.1 385.4 319.1C441.3 319.1 482.8 287.6 496.5 239.2C496.2 241.7 496.1 244.4 496.1 247.1C496.1 294.2 535.4 319.8 588.6 319.8C661.1 319.8 684.4 279.7 684.4 279.7C684.4 295.6 685.6 311.3 685.6 311.3H731.6C731.6 311.3 729.8 291.9 729.8 279.4V171.7C729.8 157.3 727.4 145.3 723.2 135.2L816.4 310.2L772.6 393.3H827.9L980 95.3H927.2ZM51.8 182.7C51.8 142.3 88.6 119.3 125 119.3C166.4 119.3 194.6 144.7 194.6 182.7H51.8ZM373.3 285.2C323.2 285.2 296.2 246.1 296.2 202.7C296.2 162.3 320.4 120.7 372.9 120.7C419.8 120.7 449.7 155.5 449.7 202.3C449.7 252.5 415.3 285.2 373.3 285.2ZM680 222C680 240.6 668.5 286.9 600.9 286.9C563.8 286.9 548 268.4 548 247C548 208 601.5 207.7 680.1 207.7L680 222Z",
                  fill: "black",
                },
              }),
            ])
          );
        },
      };
    },
    855: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1000",
                    height: "328",
                    viewBox: "0 0 1000 328",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("g", [
                r("path", {
                  attrs: {
                    d: "M245.85118 115.7924L129.16241 115.7924 129.16241 150.41815 211.91795 150.41815C207.8297 198.97274 167.43382 219.67927 129.30233 219.67927 80.51709 219.67927 37.94727 181.29524 37.94727 127.49491 37.94727 75.08572 78.52746 34.72307 129.41009 34.72307 168.66655 34.72307 191.79846 59.74845 191.79846 59.74845L216.04264 34.64225C216.04264 34.64225 184.92462 1.13686838e-13 128.17094 1.13686838e-13 55.908732 1.13686838e-13-2.84217094e-14 60.99521-2.84217094e-14 126.87791-2.84217094e-14 191.43537 52.59191 254.38886 130.01618 254.38886 198.11515 254.38886 247.96415 207.73837 247.96415 138.75756 247.96415 124.2039 245.85118 115.7924 245.85118 115.7924L245.85118 115.7924zM341.43989 90.71925C293.56024 90.71925 259.24702 128.15125 259.24702 171.80843 259.24702 216.1111 292.52888 254.23935 342.00257 254.23935 386.78968 254.23935 423.48129 220.00772 423.48129 172.76064 423.48129 118.6088 380.80041 90.71925 341.43989 90.71925L341.43989 90.71925zM341.916 122.83463C365.46201 122.83463 387.77348 141.87024 387.77348 172.54422 387.77348 202.56748 365.5558 222.14562 341.80779 222.14562 315.71335 222.14562 295.12796 201.24667 295.12796 172.30618 295.12796 143.98634 315.4581 122.83463 341.916 122.83463L341.916 122.83463zM520.20513 90.71925C472.32546 90.71925 438.01225 128.15125 438.01225 171.80843 438.01225 216.1111 471.29411 254.23935 520.76779 254.23935 565.5549 254.23935 602.24651 220.00772 602.24651 172.76064 602.24651 118.6088 559.56563 90.71925 520.20513 90.71925L520.20513 90.71925zM520.68122 122.83463C544.22723 122.83463 566.5387 141.87024 566.5387 172.54422 566.5387 202.56748 544.32103 222.14562 520.57302 222.14562 494.47857 222.14562 473.89318 201.24667 473.89318 172.30618 473.89318 143.98634 494.22332 122.83463 520.68122 122.83463L520.68122 122.83463zM695.53152 90.80581C651.58324 90.80581 617.03923 129.29777 617.03923 172.50094 617.03923 221.71338 657.08811 254.34756 694.77404 254.34756 718.07635 254.34756 730.46697 245.09778 739.61439 234.48103L739.61439 250.60366C739.61439 278.81199 722.48677 295.70369 696.63518 295.70369 671.66115 295.70369 659.13434 277.13379 654.78131 266.59642L623.35843 279.73257C634.50608 303.30269 656.94575 327.884 696.89487 327.884 740.59008 327.884 773.89388 300.36114 773.89388 242.63973L773.89388 95.71834 739.61439 95.71834 739.61439 109.56864C729.08138 98.21133 714.668 90.80581 695.53152 90.80581zM698.71272 122.85627C720.25971 122.85627 742.38445 141.25422 742.38445 172.67407 742.38445 204.60962 720.30687 222.21053 698.23662 222.21053 674.80689 222.21053 653.00673 203.18608 653.00673 172.97705 653.00673 141.58716 675.64824 122.85627 698.71272 122.85627L698.71272 122.85627zM926.31215 90.61104C884.85633 90.61104 850.04893 123.59385 850.04893 172.26289 850.04893 223.76112 888.84715 254.30428 930.29411 254.30428 964.88686 254.30428 986.11816 235.37957 998.78816 218.42334L970.52486 199.61724C963.19066 210.99924 950.92967 222.12398 930.46723 222.12398 907.48204 222.12398 896.91371 209.53789 890.36625 197.34492L999.99996 151.85533 994.30836 138.52442C983.71306 112.41739 959.00516 90.61104 926.31215 90.61104L926.31215 90.61104zM927.74039 122.05555C942.67857 122.05555 953.42917 129.9977 957.99471 139.51992L884.78286 170.12042C881.62651 146.42924 904.07072 122.05555 927.74039 122.05555z",
                  },
                }),
                r("polygon", {
                  attrs: {
                    points:
                      "797.786 249.448 833.796 249.448 833.796 8.453 797.786 8.453",
                  },
                }),
              ]),
            ])
          );
        },
      };
    },
    856: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "480",
                    height: "155",
                    viewBox: "0 0 480 155",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r(
                "g",
                { attrs: { fill: "#231F20", transform: "translate(46)" } },
                [
                  r("polygon", {
                    attrs: { points: "0 0 75.18 0 75.18 10.75 0 10.75" },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "0 20.51 75.18 20.51 75.18 31.26 0 31.26",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "21.47 40.99 53.72 40.99 53.72 51.77 21.47 51.77",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "21.47 61.5 53.72 61.5 53.72 72.22 21.47 72.22",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "21.47 82.01 53.72 82.01 53.72 92.72 21.47 92.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "21.47 102.5 53.72 102.5 53.72 113.25 21.47 113.25",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "0 123.02 75.18 123.02 75.18 133.75 0 133.75",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "0 143.48 75.18 143.48 75.18 154.23 0 154.23",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M85.89,20.5 L201.74,20.5 C203.307087,23.9422049 204.487634,27.5475701 205.26,31.25 L85.89,31.25 L85.89,20.5 L85.89,20.5 Z",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "107.4 40.99 139.57 40.99 139.57 51.77 107.4 51.77",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M171.79,40.99 L206.14,40.99 C206.012885,44.6464752 205.407745,48.2705873 204.34,51.77 L171.79,51.77 L171.79,40.99 L171.79,40.99 Z M107.41,82 L190.15,82 C192.83,83.86 197.78,90 199.78,92.7 L107.41,92.7 L107.41,82 L107.41,82 Z",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "107.4 102.5 139.57 102.5 139.57 113.25 107.4 113.25",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M171.79,102.5 L204.47,102.5 C205.18,104.02 206.4,111.14 206.33,113.24 L171.79,113.24 L171.79,102.5 L171.79,102.5 Z M85.89,123.01 L204.98,123.01 C204.346847,126.745018 203.160477,130.364794 201.46,133.75 L85.89,133.75 L85.89,123.01 L85.89,123.01 Z M85.89,143.48 L193.57,143.48 C184.02,151.48 175.57,154.22 160.81,154.22 L85.89,154.22 L85.89,143.48 L85.89,143.48 Z",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "236.22 61.5 297.25 61.5 300.66 71.12 304.07 61.5 365.06 61.5 365.06 72.22 332.86 72.22 332.86 63.53 329.79 72.22 271.5 72.22 268.44 63.53 268.44 72.22 236.22 72.22",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "236.22 82.01 268.44 82.01 268.44 92.72 236.22 92.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "236.22 102.5 268.44 102.5 268.44 113.25 236.22 113.25",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "214.77 123.02 268.44 123.02 268.44 133.72 214.77 133.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "214.77 143.48 268.44 143.48 268.44 154.23 214.77 154.23",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "325.96 0 386.54 0 386.54 10.75 322.12 10.75",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "318.67 20.51 386.54 20.51 386.54 31.26 314.83 31.26",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "311.4 40.99 365.06 40.99 365.06 51.77 307.56 51.77",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "332.86 82.01 365.06 82.01 365.06 92.72 332.86 92.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "332.86 102.5 365.06 102.5 365.06 113.25 332.86 113.25",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "332.86 123.02 386.54 123.02 386.54 133.72 332.86 133.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "332.86 143.48 386.54 143.48 386.54 154.23 332.86 154.23",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "274.9 82.01 326.4 82.01 322.7 92.72 278.66 92.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "282.04 102.5 319.29 102.5 315.53 113.25 285.81 113.25",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "289.23 123.02 312.12 123.02 308.39 133.72 292.98 133.72",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "296.41 143.48 304.98 143.48 301.22 154.23 300.14 154.23",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M107.41,72.23 L190.15,72.23 C192.83,70.36 197.78,64.23 199.78,61.52 L107.41,61.52 L107.41,72.23 L107.41,72.23 Z",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "275.37 0 214.79 0 214.79 10.75 279.21 10.75",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "282.68 20.51 214.79 20.51 214.79 31.26 286.5 31.26",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points:
                        "289.94 40.99 236.27 40.99 236.27 51.77 293.77 51.77",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M85.89,10.75 L193.57,10.75 C184.02,2.75 175.57,0 160.81,0 L85.89,0 L85.89,10.75 L85.89,10.75 Z",
                    },
                  }),
                ]
              ),
            ])
          );
        },
      };
    },
    857: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    version: "1.0",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1280.000000pt",
                    height: "640.000000pt",
                    viewBox: "0 0 1280.000000 640.000000",
                    preserveAspectRatio: "xMidYMid meet",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r(
                "g",
                {
                  attrs: {
                    transform:
                      "translate(0.000000,640.000000) scale(0.100000,-0.100000)",
                    fill: "#000000",
                    stroke: "none",
                  },
                },
                [
                  r("path", {
                    attrs: {
                      d: "M0 3920 l0 -650 650 0 650 0 0 650 0 650 -650 0 -650 0 0 -650z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M1437 4563 c-4 -3 -7 -296 -7 -650 l0 -643 650 0 650 0 0 650 0 650 -643 0 c-354 0 -647 -3 -650 -7z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M11870 4130 c-105 -23 -216 -101 -263 -187 -41 -76 -57 -154 -57 -275 l0 -107 -97 -3 -98 -3 -3 -112 -3 -113 101 0 100 0 0 -475 0 -475 140 0 140 0 0 475 0 475 205 0 205 0 0 -302 c1 -361 8 -429 52 -518 37 -72 95 -120 171 -141 64 -17 203 -14 275 6 l62 18 0 112 0 112 -57 -19 c-92 -31 -164 -12 -200 55 -16 28 -18 69 -21 355 l-3 322 140 0 141 0 0 115 0 115 -140 0 -140 0 0 171 0 171 -27 -7 c-16 -3 -79 -22 -140 -41 l-113 -35 0 -132 0 -132 -206 3 -206 3 3 117 c4 128 17 165 71 205 37 27 123 34 182 14 l46 -16 0 119 c0 101 -2 119 -17 124 -30 12 -197 15 -243 6z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M5644 4031 c-52 -32 -77 -76 -77 -137 0 -98 74 -161 181 -152 91 8 147 66 147 153 0 60 -20 95 -75 133 -43 29 -131 31 -176 3z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M3550 3200 l0 -820 135 0 135 0 -2 630 c-2 347 0 630 3 630 3 0 119 -284 259 -630 l254 -631 100 3 100 3 247 623 c136 343 250 626 253 629 3 4 6 -278 6 -625 l0 -632 140 0 140 0 0 820 0 820 -193 0 -193 0 -229 -562 c-126 -310 -238 -583 -248 -607 l-20 -45 -87 220 c-48 120 -156 393 -240 607 l-153 387 -204 0 -203 0 0 -820z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M6520 3565 c-203 -46 -362 -191 -430 -395 -31 -90 -39 -287 -16 -384 36 -151 145 -297 271 -363 156 -81 389 -89 562 -21 l58 23 5 128 c3 70 4 127 3 127 -1 0 -31 -16 -67 -35 -167 -93 -354 -77 -463 38 -82 86 -114 210 -93 356 20 139 100 247 216 290 109 41 264 22 364 -46 19 -12 37 -23 40 -23 3 0 4 60 2 134 l-3 134 -67 22 c-87 29 -284 37 -382 15z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M7710 3569 c-98 -14 -175 -71 -224 -166 l-25 -48 -1 103 0 103 -137 -3 -138 -3 -3 -587 -2 -588 139 0 140 0 3 363 3 362 28 60 c44 93 95 140 171 154 51 9 134 -2 178 -25 l28 -15 0 135 c0 97 -4 137 -12 143 -21 12 -100 19 -148 12z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M8331 3565 c-217 -49 -371 -201 -426 -420 -23 -91 -24 -274 -1 -369 47 -199 197 -350 398 -403 86 -22 261 -22 353 2 179 45 324 171 386 333 36 99 52 206 45 317 -10 181 -58 298 -160 401 -64 63 -110 92 -206 126 -74 27 -296 34 -389 13z m294 -239 c67 -30 127 -100 151 -173 15 -46 19 -87 19 -193 -1 -117 -4 -143 -24 -193 -29 -74 -71 -121 -135 -154 -44 -23 -64 -26 -141 -26 -99 0 -153 17 -213 67 -94 81 -137 274 -97 444 28 116 80 186 170 228 71 34 199 34 270 0z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M9513 3565 c-118 -33 -223 -116 -264 -208 -33 -75 -33 -211 1 -282 41 -84 87 -120 264 -205 89 -43 170 -88 180 -99 26 -29 33 -104 12 -136 -57 -87 -269 -78 -428 19 l-58 35 0 -135 0 -134 36 -15 c111 -46 325 -61 442 -31 129 33 224 103 272 201 20 42 24 65 24 145 0 78 -3 102 -21 136 -50 95 -114 143 -294 224 -132 58 -168 89 -176 149 -19 137 188 177 390 75 l48 -25 -3 128 -3 127 -60 19 c-82 26 -289 33 -362 12z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M10555 3561 c-141 -35 -264 -120 -336 -232 -104 -163 -127 -429 -54 -626 90 -241 345 -379 634 -343 165 20 255 61 356 164 122 123 169 250 169 456 0 201 -47 333 -157 444 -74 73 -138 109 -243 136 -99 26 -269 26 -369 1z m321 -238 c56 -30 108 -90 135 -159 19 -50 23 -78 23 -189 1 -205 -41 -301 -158 -360 -53 -26 -70 -29 -145 -29 -108 1 -175 27 -231 91 -65 75 -84 137 -85 283 0 200 45 298 167 360 60 30 67 31 158 28 72 -3 105 -9 136 -25z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M5590 2970 l0 -590 140 0 140 0 -2 588 -3 587 -137 3 -138 3 0 -591z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M0 2480 l0 -650 650 0 650 0 0 650 0 650 -650 0 -650 0 0 -650z",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M1432 2483 l3 -648 648 -3 647 -2 0 650 0 650 -650 0 -650 0 2 -647z",
                    },
                  }),
                ]
              ),
            ])
          );
        },
      };
    },
    858: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "177",
                    height: "23",
                    viewBox: "0 0 177 23",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  d: "M123.463 0.483959H127.074V18.984H142.729L140.43 22.598H123.463V0.483959ZM95.109 22.598L81.753 1.52396C80.932 0.155959 78.743 0.155959 77.812 1.57896L64.566 22.598H68.945L72.941 16.248H81.48L83.725 12.635H75.186L79.839 5.35596L90.732 22.598H95.109ZM103.236 0.490959C97.134 0.490959 93.117 5.43796 93.117 11.541C93.117 17.643 97.135 22.592 103.236 22.592L118.074 22.574L120.396 18.992H103.345C99.232 18.992 96.825 15.656 96.825 11.541C96.825 7.42596 99.231 4.08996 103.345 4.08996H118.534L120.776 0.479959L103.236 0.490959ZM10.624 4.08996H26.278C30.393 4.08996 32.799 7.42596 32.799 11.541C32.799 15.656 30.394 18.992 26.278 18.992H10.624C6.509 18.992 4.104 15.656 4.104 11.541C4.104 7.42596 6.509 4.08996 10.624 4.08996ZM10.624 0.490959C4.521 0.490959 0.503998 5.43796 0.503998 11.541C0.503998 17.643 4.521 22.592 10.624 22.592H26.278C32.381 22.592 36.398 17.643 36.398 11.541C36.398 5.43796 32.381 0.490959 26.278 0.490959H10.624ZM146.588 13.293C147.176 16.563 149.426 18.992 152.938 18.992H169.989L167.665 22.574L152.829 22.592C146.725 22.592 142.71 17.643 142.71 11.541C142.71 5.43796 146.726 0.490959 152.829 0.490959L170.368 0.480959L168.128 4.09096H152.939C149.476 4.09096 147.216 6.47896 146.589 9.68096H168.019L165.72 13.294H146.588V13.293ZM56.821 13.613C60.3999 13.5505 63.2684 10.6314 63.2684 7.05196C63.2684 3.47253 60.3999 0.553447 56.821 0.490959L38.402 0.482959V22.597H42.453V4.09096H56.821C58.4563 4.09096 59.782 5.41664 59.782 7.05196C59.782 8.68727 58.4563 10.013 56.821 10.013H45.299L58.297 22.572H63.526L54.221 13.621L56.821 13.613ZM174.152 0.503959C175.091 0.503959 175.834 1.24596 175.834 2.22996C175.834 3.22996 175.092 3.96596 174.152 3.96596C173.201 3.96596 172.461 3.22996 172.461 2.22996C172.461 1.24596 173.201 0.503959 174.152 0.503959V0.157959C173.009 0.157959 172.043 1.03696 172.043 2.22896C172.043 3.43296 173.01 4.31196 174.152 4.31196C175.285 4.31196 176.252 3.43296 176.252 2.22896C176.252 1.03696 175.285 0.157959 174.152 0.157959V0.503959Z",
                  fill: "black",
                },
              }),
              r("path", {
                attrs: {
                  d: "M173.713 1.34494H174.209C174.461 1.34494 174.73 1.39994 174.73 1.69694C174.73 2.06494 174.455 2.08794 174.146 2.08794H173.712V2.39594H174.13L174.763 3.43494H175.169L174.487 2.37994C174.839 2.33594 175.108 2.14994 175.108 1.72094C175.108 1.24794 174.827 1.03894 174.262 1.03894H173.348V3.43494H173.711V1.34494H173.713Z",
                  fill: "black",
                },
              }),
            ])
          );
        },
      };
    },
    859: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "384",
                    height: "92",
                    viewBox: "0 0 384 92",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("g", { attrs: { transform: "translate(-1)" } }, [
                r("g", { attrs: { transform: "translate(113 20)" } }, [
                  r("path", {
                    attrs: {
                      d: "M183.72.57L162.61.57C161.171906.561103124 159.941451 1.60062513 159.71 3.02L151.17 56.48C151.09726 56.9839215 151.247588 57.4945372 151.581773 57.8786577 151.915958 58.2627781 152.400861 58.4823135 152.91 58.48L163.74 58.48C164.740566 58.4905667 165.594966 57.7600549 165.74 56.77L168.16 41.61C168.391451 40.1906251 169.621906 39.1511031 171.06 39.16L177.74 39.16C191.65 39.16 199.67 32.51 201.74 19.34 202.68 13.58 201.74 9.05 199.05 5.88 196.11 2.42 190.79.57 183.72.57zM186.16 20.1C185.01 27.58 179.22 27.58 173.62 27.58L170.43 27.58 172.66 13.58C172.798087 12.7279316 173.536837 12.1038157 174.4 12.11L175.86 12.11C179.67 12.11 183.27 12.11 185.13 14.25 186.24 15.57 186.58 17.47 186.16 20.1zM33.13.57L12 .57C10.5619056.561103124 9.331451 1.60062513 9.1 3.02L.56 56.48C.487259831 56.9839215.637588012 57.4945372.971772812 57.8786577 1.30595761 58.2627781 1.79086087 58.4823135 2.3 58.48L12.4 58.48C13.8380944 58.4888969 15.068549 57.4493749 15.3 56.03L17.6 41.61C17.831451 40.1906251 19.0619056 39.1511031 20.5 39.16L27.18 39.16C41.09 39.16 49.11 32.51 51.18 19.34 52.12 13.58 51.18 9.05 48.49 5.88 45.51 2.42 40.19.57 33.13.57zM35.57 20.1C34.42 27.58 28.63 27.58 23.03 27.58L19.84 27.58 22.07 13.58C22.2080875 12.7279316 22.946837 12.1038157 23.81 12.11L25.27 12.11C29.08 12.11 32.68 12.11 34.54 14.25 35.65 15.57 36 17.47 35.56 20.1L35.57 20.1zM96.23 19.86L86.12 19.86C85.256837 19.8538157 84.5180875 20.4779316 84.38 21.33L83.94 24.12 83.23 23.12C81.04 19.98 76.16 18.93 71.29 18.93 60.12 18.93 50.58 27.29 48.72 39.01 47.72 44.86 49.13 50.45 52.48 54.35 55.57 57.93 59.97 59.43 65.21 59.43 70.4555406 59.4914836 75.5037242 57.4325459 79.21 53.72L78.76 56.5C78.6872598 57.0039215 78.837588 57.5145372 79.1717728 57.8986577 79.5059576 58.2827781 79.9908609 58.5023135 80.5 58.5L89.6 58.5C91.0348787 58.5096862 92.2641568 57.475397 92.5 56.06L98 21.87C98.08056 21.3585861 97.9292003 20.8378593 97.5870492 20.4493149 97.2448982 20.0607705 96.747496 19.8447676 96.23 19.86L96.23 19.86zM82.14 39.29C81.2846162 44.8897574 76.3925706 48.9757516 70.73 48.82 68.179197 48.9780594 65.6904746 47.9921002 63.94 46.13 62.3930017 44.1503656 61.8133312 41.582205 62.36 39.13 63.1919261 33.5384288 68.0376226 29.4283544 73.69 29.52 76.2363906 29.3102491 78.7298008 30.3294105 80.4002209 32.2627488 82.070641 34.1960871 82.717115 36.8110165 82.14 39.3L82.14 39.29zM246.83 19.86L236.72 19.86C235.864403 19.863646 235.136889 20.4854167 235 21.33L234.56 24.12 233.85 23.12C231.66 19.98 226.78 18.93 221.91 18.93 210.74 18.93 201.2 27.29 199.34 39.01 198.34 44.86 199.75 50.45 203.1 54.35 206.19 57.93 210.59 59.43 215.83 59.43 221.075541 59.4914836 226.123724 57.4325459 229.83 53.72L229.38 56.5C229.30726 57.0039215 229.457588 57.5145372 229.791773 57.8986577 230.125958 58.2827781 230.610861 58.5023135 231.12 58.5L240.22 58.5C241.666775 58.4952241 242.891909 57.43174 243.1 56L248.57 21.82C248.633521 21.3217654 248.478646 20.820386 248.145196 20.4447752 247.811745 20.0691644 247.332251 19.8559671 246.83 19.86L246.83 19.86zM232.74 39.29C231.884616 44.8897574 226.992571 48.9757516 221.33 48.82 218.779197 48.9780594 216.290475 47.9921002 214.54 46.13 212.993002 44.1503656 212.413331 41.582205 212.96 39.13 213.791926 33.5384288 218.637623 29.4283544 224.29 29.52 226.836391 29.3102491 229.329801 30.3294105 231.000221 32.2627488 232.670641 34.1960871 233.317115 36.8110165 232.74 39.3L232.74 39.29zM150.08 19.86L139.92 19.86C138.95261 19.8667688 138.047851 20.3396263 137.49 21.13L123.49 41.52 117.55 21.93C117.171289 20.6965489 116.030274 19.8560149 114.74 19.86L104.74 19.86C104.174898 19.8526505 103.641428 20.1202116 103.309378 20.5775264 102.977327 21.0348412 102.888065 21.6249356 103.07 22.16L114.26 54.59 103.73 69.26C103.355148 69.7937071 103.310231 70.4922252 103.613641 71.0695465 103.91705 71.6468679 104.517834 72.00604 105.17 72L115.32 72C116.279138 72.0013948 117.178659 71.5348385 117.73 70.75L151.53 22.59C151.900184 22.0550338 151.94102 21.3582465 151.635858 20.7837016 151.330697 20.2091566 150.730518 19.8528348 150.08 19.86L150.08 19.86zM258.75 2L250.08 56.44C250.00726 56.9439215 250.157588 57.4545372 250.491773 57.8386577 250.825958 58.2227781 251.310861 58.4423135 251.82 58.44L260.54 58.44C261.978094 58.4488969 263.208549 57.4093749 263.44 55.99L272 2.58C272.07274 2.0760785 271.922412 1.56546281 271.588227 1.18134235 271.254042.797221887 270.769139.577686506 270.26.58L260.51.58C259.655214.559820262 258.910995 1.16026964 258.75 2L258.75 2z",
                    },
                  }),
                ]),
                r("path", {
                  attrs: {
                    d: "M31.87,19.1 C32.616488,18.7441933 33.4330522,18.5596976 34.26,18.56 L57,18.56 C59.6072959,18.5432686 62.2119064,18.7305063 64.79,19.12 C65.4566667,19.2333333 66.1233333,19.36 66.79,19.5 C67.45,19.64 68.09,19.81 68.71,19.99 L69.63,20.27 C69.93,20.37 70.22,20.49 70.51,20.6 C70.97,14.47 69.24,10.2 66.24,6.93 C61.84,2.14 54.12,0 44.14,0 L17.14,0 C15.1153052,-0.00802033048 13.3833505,1.4529194 13.05,3.45 L1,79 C0.88811093,79.7152981 1.0969978,80.4435649 1.57101831,80.9908081 C2.04503882,81.5380513 2.73605601,81.8486981 3.46,81.84 L19.37,81.84 L28.8,23.22 C29.0745382,21.4215977 30.225214,19.8773682 31.87,19.1 Z",
                  },
                }),
                r("path", {
                  attrs: {
                    d: "M68.42,23.85 L67.63,23.61 C67.0833333,23.45 66.5233333,23.31 65.95,23.19 C65.3766667,23.07 64.7766667,22.9566667 64.15,22.85 C61.783782,22.4912954 59.3932193,22.3174363 57,22.33 L35.88,22.33 C35.3405245,22.3299479 34.807745,22.4494818 34.32,22.68 C33.2540613,23.1860207 32.50592,24.1847893 32.32,25.35 L28.51,49.25 C28.9388723,49.1712007 29.3739499,49.1310397 29.81,49.13 L38.31,49.13 C42.3902625,49.1850097 46.4586097,48.676887 50.4,47.62 C59.4,45.07 65.4,39.29 68.48,30.1 C69.1037934,28.2433604 69.6114412,26.3497007 70,24.43 C69.48,24.2233333 68.9533333,24.03 68.42,23.85 Z",
                  },
                }),
                r("path", {
                  attrs: {
                    d: "M76.22,28.2 C75.4558073,27.3756073 74.5886833,26.653004 73.64,26.05 C71.29,37.27 64.28,53.05 38.01,53.05 L31.5,53.05 C29.476035,53.0385119 27.7449889,54.5022641 27.42,56.5 C27.42,56.5 22.37,88 22.12,89.63 C22.0542417,90.2379801 22.2517267,90.8450473 22.6626077,91.297972 C23.0734887,91.7508966 23.6585076,92.0064034 24.27,92 L37.34,92 C39.1066482,92.0107172 40.6215075,90.741282 40.92,89 L44.09,69.49 C44.3884925,67.748718 45.9033518,66.4792828 47.67,66.49 L49.92,66.49 C64.52,66.49 75.92,60.63 79.29,43.7 C79.39,43.2 79.48,42.7 79.56,42.18 C80.25,36.46 79.32,31.69 76.22,28.2 Z",
                  },
                }),
              ]),
            ])
          );
        },
      };
    },
    860: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "2398",
                    height: "1750",
                    viewBox: "0 0 2398 1750",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  d: "M1067.35 279.216C1137.6 206.05 1235.39 160.67 1343.54 160.67C1487.32 160.67 1612.75 240.815 1679.55 359.792C1737.6 333.865 1801.86 319.441 1869.46 319.441C2128.77 319.441 2339 531.437 2339 792.932C2339 1054.46 2128.77 1266.45 1869.46 1266.45C1838.4 1266.47 1807.42 1263.39 1776.97 1257.24C1718.15 1362.14 1606.05 1433.01 1477.39 1433.01C1423.53 1433.01 1372.58 1420.57 1327.22 1398.46C1267.59 1538.68 1128.66 1637 966.736 1637C798.112 1637 654.401 1530.34 599.238 1380.75C575.132 1385.86 550.156 1388.53 524.528 1388.53C323.761 1388.53 161 1224.15 161 1021.34C161 885.423 234.128 766.754 342.779 703.265C320.41 651.811 307.968 595.02 307.968 535.312C307.968 302.072 497.38 113 731.004 113C868.168 113 990.068 178.196 1067.35 279.216Z",
                  fill: "black",
                },
              }),
              r("path", {
                attrs: {
                  d: "M476.492 903.388C475.127 906.949 476.989 907.693 477.423 908.311C481.516 911.282 485.675 913.421 489.862 915.803C512.071 927.565 533.042 931 554.972 931C599.639 931 627.369 907.288 627.369 869.117V868.375C627.369 833.081 596.073 820.266 566.697 811.01L562.882 809.772C540.734 802.589 521.627 796.4 521.627 781.849V781.077C521.627 768.631 532.794 759.466 550.103 759.466C569.334 759.466 592.164 765.844 606.867 773.954C606.867 773.954 611.178 776.741 612.761 772.562C613.628 770.332 621.074 750.334 621.85 748.167C622.687 745.813 621.198 744.08 619.679 743.151C602.897 732.966 579.694 726 555.687 726L551.221 726.03C510.338 726.03 481.802 750.673 481.802 785.995V786.739C481.802 823.98 513.285 836.053 542.785 844.474L547.531 845.929C569.027 852.523 587.546 858.188 587.546 873.296V874.04C587.546 887.847 575.512 898.123 556.093 898.123C548.555 898.123 524.515 897.969 498.553 881.59C495.418 879.763 493.589 878.434 491.17 876.979C489.899 876.174 486.704 874.779 485.309 878.991L476.492 903.388V903.388ZM1130.4 903.388C1129.03 906.949 1130.9 907.693 1131.33 908.311C1135.42 911.282 1139.58 913.421 1143.77 915.803C1165.98 927.565 1186.95 931 1208.88 931C1253.54 931 1281.28 907.288 1281.28 869.117V868.375C1281.28 833.081 1249.98 820.266 1220.6 811.01L1216.79 809.772C1194.64 802.589 1175.53 796.4 1175.53 781.849V781.077C1175.53 768.631 1186.7 759.466 1204.01 759.466C1223.24 759.466 1246.07 765.844 1260.77 773.954C1260.77 773.954 1265.08 776.741 1266.66 772.562C1267.53 770.332 1274.98 750.334 1275.75 748.167C1276.59 745.813 1275.1 744.08 1273.58 743.151C1256.8 732.966 1233.6 726 1209.59 726L1205.12 726.03C1164.24 726.03 1135.7 750.673 1135.7 785.995V786.739C1135.7 823.98 1167.19 836.053 1196.69 844.474L1201.43 845.929C1222.93 852.523 1241.48 858.188 1241.48 873.296V874.04C1241.48 887.847 1229.41 898.123 1209.99 898.123C1202.46 898.123 1178.42 897.969 1152.46 881.59C1149.32 879.763 1147.46 878.495 1145.11 876.979C1144.3 876.452 1140.51 874.997 1139.21 878.991L1130.4 903.388V903.388ZM1576.8 828.62C1576.8 850.197 1572.77 867.191 1564.83 879.204C1556.98 891.092 1545.1 896.881 1528.54 896.881C1511.95 896.881 1500.13 891.123 1492.4 879.204C1484.59 867.224 1480.62 850.197 1480.62 828.62C1480.62 807.075 1484.59 790.109 1492.4 778.22C1500.13 766.458 1511.95 760.73 1528.54 760.73C1545.11 760.73 1556.98 766.458 1564.86 778.22C1572.77 790.107 1576.8 807.072 1576.8 828.62V828.62ZM1614.09 788.623C1610.43 776.269 1604.72 765.372 1597.12 756.303C1589.52 747.201 1579.91 739.896 1568.49 734.571C1557.11 729.278 1543.65 726.585 1528.54 726.585C1513.4 726.585 1499.94 729.278 1488.56 734.571C1477.14 739.896 1467.53 747.204 1459.9 756.303C1452.33 765.405 1446.62 776.302 1442.93 788.623C1439.3 800.912 1437.47 814.347 1437.47 828.62C1437.47 842.892 1439.3 856.358 1442.93 868.616C1446.62 880.938 1452.3 891.836 1459.93 900.936C1467.53 910.038 1477.18 917.312 1488.56 922.481C1499.97 927.652 1513.4 930.282 1528.54 930.282C1543.65 930.282 1557.08 927.652 1568.49 922.481C1579.88 917.312 1589.52 910.036 1597.13 900.936C1604.72 891.865 1610.43 880.968 1614.09 868.616C1617.76 856.328 1619.58 842.86 1619.58 828.62C1619.58 814.38 1617.75 800.912 1614.09 788.623V788.623ZM1920.27 891.119C1919.03 887.497 1915.52 888.858 1915.52 888.858C1910.09 890.934 1904.32 892.852 1898.18 893.812C1891.95 894.769 1885.09 895.267 1877.74 895.267C1859.69 895.267 1845.36 889.911 1835.09 879.324C1824.79 868.736 1819.02 851.618 1819.08 828.461C1819.15 807.379 1824.23 791.527 1833.38 779.456C1842.47 767.446 1856.31 761.283 1874.76 761.283C1890.15 761.283 1901.88 763.047 1914.16 766.917C1914.16 766.917 1917.1 768.185 1918.5 764.348C1921.75 755.307 1924.17 748.837 1927.65 738.9C1928.64 736.083 1926.22 734.876 1925.35 734.534C1920.51 732.646 1909.1 729.583 1900.48 728.282C1892.41 727.044 1882.98 726.394 1872.5 726.394C1856.83 726.394 1842.87 729.056 1830.93 734.382C1819.02 739.675 1808.91 746.979 1800.91 756.083C1792.9 765.185 1786.82 776.08 1782.76 788.401C1778.73 800.69 1776.68 814.188 1776.68 828.461C1776.68 859.325 1785.03 884.275 1801.5 902.542C1818 920.869 1842.78 930.186 1875.11 930.186C1894.21 930.186 1913.82 926.319 1927.9 920.776C1927.9 920.776 1930.6 919.475 1929.42 916.351L1920.27 891.119V891.119ZM1985.5 807.949C1987.27 795.969 1990.59 785.999 1995.71 778.231C2003.43 766.436 2015.22 759.967 2031.79 759.967C2048.35 759.967 2059.3 766.467 2067.15 778.231C2072.36 785.999 2074.62 796.404 2075.52 807.949H1985.5ZM2111.04 781.603C2107.87 769.684 2100.03 757.641 2094.88 752.131C2086.75 743.401 2078.81 737.303 2070.93 733.897C2060.63 729.5 2048.29 726.592 2034.76 726.592C2019.01 726.592 2004.71 729.224 1993.1 734.671C1981.47 740.12 1971.7 747.552 1964.04 756.808C1956.38 766.032 1950.61 777.022 1946.95 789.497C1943.26 801.912 1941.4 815.441 1941.4 829.71C1941.4 844.23 1943.32 857.759 1947.13 869.924C1950.98 882.184 1957.12 892.987 1965.44 901.932C1973.72 910.943 1984.39 918.002 1997.17 922.921C2009.86 927.813 2025.27 930.352 2042.98 930.319C2079.43 930.195 2098.63 922.085 2106.54 917.719C2107.94 916.947 2109.27 915.585 2107.59 911.685L2099.34 888.619C2098.11 885.184 2094.6 886.452 2094.6 886.452C2085.57 889.796 2072.73 895.802 2042.8 895.741C2023.22 895.711 2008.7 889.953 1999.62 880.942C1990.28 871.718 1985.72 858.157 1984.91 839.027L2111.13 839.151C2111.13 839.151 2114.45 839.09 2114.79 835.868C2114.92 834.511 2119.14 809.992 2111.04 781.603V781.603ZM974.698 807.949C976.497 795.969 979.786 785.999 984.904 778.231C992.626 766.436 1004.41 759.967 1020.98 759.967C1037.54 759.967 1048.49 766.467 1056.37 778.231C1061.55 785.999 1063.81 796.404 1064.71 807.949H974.698V807.949ZM1100.2 781.603C1097.04 769.684 1089.22 757.641 1084.07 752.131C1075.94 743.401 1068 737.303 1060.13 733.897C1049.83 729.5 1037.48 726.592 1023.96 726.592C1008.23 726.592 993.899 729.224 982.299 734.671C970.668 740.12 960.897 747.552 953.235 756.808C945.573 766.032 939.804 777.022 936.144 789.497C932.484 801.912 930.592 815.441 930.592 829.71C930.592 844.23 932.515 857.759 936.331 869.924C940.178 882.184 946.321 892.987 954.632 901.932C962.915 910.943 973.585 918.002 986.364 922.921C999.052 927.813 1014.47 930.352 1032.18 930.319C1068.63 930.195 1087.83 922.085 1095.74 917.719C1097.13 916.947 1098.47 915.585 1096.79 911.685L1088.57 888.619C1087.3 885.184 1083.8 886.452 1083.8 886.452C1074.77 889.796 1061.96 895.802 1031.96 895.741C1012.42 895.711 997.906 889.953 988.816 880.942C979.479 871.718 974.921 858.157 974.112 839.027L1100.33 839.151C1100.33 839.151 1103.65 839.09 1103.99 835.868C1104.11 834.511 1108.33 809.992 1100.2 781.603V781.603ZM701.884 890.429C696.952 886.496 696.269 885.506 694.595 882.967C692.113 879.097 690.842 873.587 690.842 866.591C690.842 855.507 694.502 847.552 702.102 842.196C702.011 842.229 712.959 832.755 738.704 833.094C756.787 833.342 772.947 836.005 772.947 836.005V893.277H772.978C772.978 893.277 756.941 896.711 738.889 897.795C713.206 899.344 701.791 890.399 701.884 890.429V890.429ZM752.103 801.921C746.985 801.549 740.345 801.332 732.405 801.332C721.58 801.332 711.126 802.693 701.324 805.326C691.461 807.956 682.59 812.076 674.958 817.521C667.339 822.949 661.076 830.057 656.658 838.294C652.191 846.591 649.927 856.373 649.927 867.333C649.927 878.477 651.849 888.167 655.696 896.094C659.544 904.049 665.095 910.673 672.166 915.783C679.176 920.891 687.832 924.635 697.88 926.895C707.776 929.155 719.004 930.299 731.289 930.299C744.223 930.299 757.127 929.249 769.627 927.11C782.004 925.005 797.203 921.939 801.421 920.982C804.378 920.271 807.325 919.518 810.261 918.722C813.396 917.95 813.147 914.604 813.147 914.604L813.084 799.413C813.084 774.15 806.323 755.42 793.016 743.812C779.77 732.235 760.259 726.381 735.042 726.381C725.58 726.381 710.35 727.684 701.23 729.509C701.23 729.509 673.655 734.834 662.301 743.688C662.301 743.688 659.82 745.237 661.185 748.705L670.119 772.666C671.235 775.762 674.246 774.709 674.246 774.709C674.246 774.709 675.207 774.337 676.325 773.687C700.614 760.5 731.321 760.902 731.321 760.902C744.971 760.902 755.455 763.626 762.526 769.042C769.412 774.305 772.917 782.26 772.917 799.039V804.364C762.059 802.817 752.103 801.921 752.103 801.921V801.921ZM1770.09 737.016C1771.05 734.166 1769.03 732.805 1768.19 732.496C1766.06 731.66 1755.32 729.4 1747.04 728.874C1731.19 727.914 1722.38 730.577 1714.5 734.106C1706.68 737.634 1698 743.329 1693.16 749.801V734.477C1693.16 732.341 1691.64 730.638 1689.53 730.638H1657.18C1655.07 730.638 1653.55 732.339 1653.55 734.477V922.357C1653.55 924.463 1655.29 926.197 1657.4 926.197H1690.56C1691.57 926.191 1692.54 925.784 1693.26 925.064C1693.97 924.344 1694.37 923.371 1694.37 922.357V828.496C1694.37 815.896 1695.77 803.329 1698.56 795.434C1701.29 787.631 1705.01 781.379 1709.6 776.889C1714.22 772.432 1719.46 769.305 1725.2 767.541C1731.06 765.744 1737.55 765.157 1742.14 765.157C1748.75 765.157 1756.01 766.858 1756.01 766.858C1758.42 767.137 1759.79 765.651 1760.59 763.454C1762.77 757.695 1768.91 740.451 1770.09 737.016",
                  fill: "white",
                },
              }),
              r("path", {
                attrs: {
                  d: "M1459.44 649.286C1455.4 648.044 1451.73 647.204 1446.95 646.305C1442.1 645.436 1436.33 645 1429.77 645C1406.91 645 1388.89 651.46 1376.25 664.192C1363.66 676.865 1355.12 696.151 1350.83 721.526L1349.28 730.065H1320.58C1320.58 730.065 1317.1 729.941 1316.35 733.732L1311.66 760.036C1311.32 762.522 1312.41 764.104 1315.76 764.104H1343.69L1315.36 922.247C1313.15 934.981 1310.6 945.448 1307.78 953.396C1305.01 961.225 1302.31 967.093 1298.96 971.379C1295.72 975.48 1292.68 978.522 1287.4 980.292C1283.05 981.752 1278.02 982.435 1272.52 982.435C1269.47 982.435 1265.41 981.935 1262.39 981.316C1259.41 980.724 1257.82 980.074 1255.56 979.109C1255.56 979.109 1252.3 977.87 1250.99 981.13C1249.96 983.832 1242.51 1004.3 1241.61 1006.81C1240.74 1009.33 1241.98 1011.29 1243.56 1011.88C1247.29 1013.18 1250.06 1014.05 1255.12 1015.26C1262.14 1016.91 1268.07 1017 1273.63 1017C1285.25 1017 1295.88 1015.35 1304.67 1012.19C1313.49 1008.99 1321.19 1003.43 1328.03 995.914C1335.39 987.776 1340.02 979.266 1344.43 967.621C1348.81 956.129 1352.57 941.843 1355.55 925.198L1384.04 764.104H1425.67C1425.67 764.104 1429.17 764.229 1429.89 760.409L1434.61 734.136C1434.92 731.621 1433.87 730.068 1430.48 730.068H1390.06C1390.28 729.168 1392.11 714.941 1396.74 701.559C1398.73 695.876 1402.46 691.247 1405.6 688.078C1408.71 684.973 1412.28 682.768 1416.19 681.494C1420.2 680.189 1424.77 679.569 1429.77 679.569C1433.56 679.569 1437.32 680.003 1440.14 680.593C1444.06 681.433 1445.58 681.867 1446.61 682.179C1450.74 683.421 1451.3 682.21 1452.11 680.224L1461.77 653.701C1462.76 650.838 1460.31 649.627 1459.44 649.286V649.286ZM894.757 922.59C894.757 924.702 893.236 926.411 891.123 926.411H857.604C855.491 926.411 854 924.702 854 922.59V652.889C854 650.779 855.491 649.07 857.604 649.07H891.123C893.236 649.07 894.757 650.779 894.757 652.889V922.59Z",
                  fill: "white",
                },
              }),
            ])
          );
        },
      };
    },
    861: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "2284",
                    height: "1130",
                    viewBox: "0 0 2284 1130",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("path", {
                attrs: {
                  d: "M0.886597 0.499573V1129.96H1154.66L2284 0.626722H0.886597V0.499573Z",
                  fill: "black",
                },
              }),
              r("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M1368.93 540.934H1319.45V359.95H1368.93C1435 359.95 1487.59 381.718 1487.59 449.285C1487.59 519.064 1435 540.934 1368.93 540.934V540.934ZM836.307 670.321C811.739 670.402 787.356 666.078 764.315 657.555L835.595 432.755H837.12L906.925 658.165C884.281 666.228 860.42 670.339 836.383 670.321H836.307ZM1355.81 212.915H1131.09V747.271L934.771 212.915H740.182L572.447 659.666C554.722 547.062 438.076 508.078 346.376 479.012C285.929 459.558 221.592 430.975 222.177 399.315C222.685 373.428 256.736 349.422 323.896 353.008C369.161 355.296 409.086 358.958 488.351 397.281L566.42 261.282C494.098 224.333 393.879 201.141 311.893 200.963H311.385C215.743 200.963 136.046 232.14 86.6106 283.177C52.2549 318.881 33.6657 364.044 32.8265 414.319C31.555 483.183 56.9086 532.059 109.981 571.144C154.89 604.051 212.183 625.234 262.788 641.102C325.218 660.352 376.18 677.161 375.595 712.992C375.086 726.037 370.229 738.269 360.795 747.932C345.257 764.08 321.379 770.056 288.345 770.794C224.669 772.065 177.446 762.148 102.224 717.696L32.8265 855.602C110.386 899.663 198 922.97 287.201 923.271H298.924C377.756 921.745 441.433 899.24 492.318 858.349L500.557 851.152L478.077 911.573H682.151L716.431 807.336C752.287 819.466 793.127 826.282 836.358 826.282C878.546 826.282 918.343 819.924 953.563 808.328L986.52 911.573H1319.5V695.674H1392.15C1567.62 695.674 1671.52 606.365 1671.52 456.481C1671.52 289.662 1570.62 213.144 1355.79 213.144",
                  fill: "white",
                },
              }),
            ])
          );
        },
      };
    },
    862: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "447",
                    height: "128",
                    viewBox: "0 0 447 128",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("g", [
                r("g", { attrs: { transform: "translate(126 24)" } }, [
                  r("path", {
                    attrs: {
                      d: "M28.3 46.9C24.5 44.8 22.5 43.1 22.5 40.7 22.5 37.6 25.2 35.7 29.5 35.7 34.5 35.7 38.9 37.8 38.9 37.8L42.4 27.1C42.4 27.1 39.2 24.6 29.7 24.6 16.5 24.6 7.3 32.2 7.3 42.8 7.3 48.8 11.6 53.4 17.3 56.7 21.9 59.3 23.5 61.2 23.5 63.9 23.5 66.8 21.2 69.1 16.9 69.1 10.5 69.1 4.5 65.8 4.5 65.8L.8 76.5C.8 76.5 6.4 80.2 15.7 80.2 29.3 80.2 39 73.5 39 61.5 39.2 54.9 34.2 50.3 28.3 46.9zM82.5 24.4C75.8 24.4 70.6 27.6 66.5 32.4L66.3 32.3 72.1 1.9 57 1.9 42.3 79.2 57.4 79.2 62.4 52.8C64.4 42.8 69.5 36.7 74.3 36.7 77.7 36.7 79 39 79 42.3 79 44.4 78.8 46.9 78.3 49L72.6 79.3 87.7 79.3 93.6 48.1C94.3 44.8 94.7 40.9 94.7 38.2 94.8 29.5 90.3 24.4 82.5 24.4zM129 24.4C110.8 24.4 98.7 40.8 98.7 59.1 98.7 70.8 105.9 80.3 119.5 80.3 137.4 80.3 149.4 64.3 149.4 45.6 149.5 34.7 143.2 24.4 129 24.4zM121.6 68.6C116.4 68.6 114.3 64.2 114.3 58.7 114.3 50 118.8 35.9 127 35.9 132.4 35.9 134.1 40.5 134.1 45 134.1 54.4 129.6 68.6 121.6 68.6zM188.2 24.4C178 24.4 172.2 33.4 172.2 33.4L172 33.4 172.9 25.3 159.5 25.3C158.8 30.8 157.6 39.1 156.4 45.4L145.9 100.8 161 100.8 165.2 78.4 165.5 78.4C165.5 78.4 168.6 80.4 174.4 80.4 192.2 80.4 203.8 62.2 203.8 43.8 203.8 33.5 199.3 24.4 188.2 24.4zM173.8 68.9C169.9 68.9 167.6 66.7 167.6 66.7L170.1 52.6C171.9 43.2 176.8 36.9 182 36.9 186.6 36.9 188 41.2 188 45.2 188 54.9 182.2 68.9 173.8 68.9zM225.4 2.6C220.6 2.6 216.7 6.4 216.7 11.4 216.7 15.9 219.5 19 223.8 19L224 19C228.7 19 232.8 15.8 232.9 10.2 233 5.8 230 2.6 225.4 2.6z",
                    },
                  }),
                  r("polygon", {
                    attrs: {
                      points: "204.2 79.2 219.4 79.2 229.7 25.6 214.4 25.6",
                    },
                  }),
                  r("path", {
                    attrs: {
                      d: "M268.1 25.4L257.6 25.4 258.1 22.9C259 17.7 262 13.1 267.1 13.1 269.8 13.1 271.9 13.9 271.9 13.9L274.9 2.1C274.9 2.1 272.3.8 266.7.8 261.3.8 256 2.3 251.9 5.8 246.7 10.2 244.3 16.5 243.1 22.9L242.7 25.4 235.7 25.4 233.5 36.8 240.5 36.8 232.5 79.1 247.6 79.1 255.6 36.8 266 36.8 268.1 25.4zM304.5 25.6C304.5 25.6 295 49.4 290.8 62.4L290.6 62.4C290.3 58.2 286.9 25.6 286.9 25.6L271 25.6 280.1 74.8C280.3 75.9 280.2 76.6 279.8 77.3 278 80.7 275.1 84 271.6 86.4 268.8 88.5 265.6 89.8 263.1 90.7L267.3 103.5C270.4 102.8 276.7 100.3 282.1 95.3 289 88.8 295.4 78.9 301.9 65.3L320.4 25.6 304.5 25.6z",
                    },
                  }),
                ]),
                r("path", {
                  attrs: {
                    d: "M72 124.3L109.4 116.2C109.4 116.2 95.9 24.9 95.8 24.3 95.7 23.7 95.2 23.3 94.7 23.3 94.2 23.3 84.7 22.6 84.7 22.6 84.7 22.6 78.1 16 77.3 15.3 77.1 15.1 76.9 15 76.7 14.9L72 124.3zM75.1 14.7C75 14.7 74.8 14.8 74.7 14.8 74.6 14.8 73.2 15.2 71 15.9 68.8 9.5 64.9 3.6 58 3.6 57.8 3.6 57.6 3.6 57.4 3.6 55.4 1.1 53 0 50.9 0 34.8 0 27.1 20.1 24.7 30.3 18.5 32.2 14 33.6 13.5 33.8 10 34.9 9.9 35 9.5 38.3 9.1 40.7 0 111.2 0 111.2L70.3 124.4 75.1 14.7zM56.8 19.6C56.8 19.8 56.8 20.1 56.8 20.3 52.9 21.5 48.6 22.8 44.4 24.1 46.8 14.9 51.3 10.4 55.2 8.7 56.2 11.3 56.8 14.8 56.8 19.6zM50.4 4.3C51.1 4.3 51.8 4.5 52.5 5 47.4 7.4 41.8 13.5 39.5 25.7 36.1 26.8 32.8 27.8 29.7 28.7 32.4 19.4 38.9 4.3 50.4 4.3zM53.2 58.6C53.2 58.6 49 56.4 44 56.4 36.5 56.4 36.2 61.1 36.2 62.3 36.2 68.7 53 71.2 53 86.3 53 98.2 45.5 105.8 35.3 105.8 23.1 105.8 16.9 98.2 16.9 98.2L20.2 87.4C20.2 87.4 26.6 92.9 32 92.9 35.5 92.9 37 90.1 37 88.1 37 79.7 23.2 79.3 23.2 65.5 23.2 53.9 31.5 42.6 48.4 42.6 54.9 42.6 58.1 44.5 58.1 44.5L53.2 58.6zM59.6 8C63.2 8.4 65.5 12.5 67 17.1 65.2 17.7 63.2 18.3 61 19 61 18.6 61 18.2 61 17.7 61 13.8 60.5 10.6 59.6 8z",
                  },
                }),
              ]),
            ])
          );
        },
      };
    },
    863: function (t, e, r) {
      r(8), r(6), r(7), r(9), r(10);
      var n = r(279),
        o = r(280),
        C = ["class", "staticClass", "style", "staticStyle", "attrs"];
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      t.exports = {
        functional: !0,
        render: function (t, e) {
          var r = e._c,
            data = (e._v, e.data),
            l = e.children,
            y = void 0 === l ? [] : l,
            L = data.class,
            f = data.staticClass,
            style = data.style,
            v = data.staticStyle,
            d = data.attrs,
            h = void 0 === d ? {} : d,
            O = o(data, C);
          return r(
            "svg",
            (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? c(Object(source), !0).forEach(function (e) {
                      n(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : c(Object(source)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      );
                    });
              }
              return t;
            })(
              {
                class: [L, f],
                style: [style, v],
                attrs: Object.assign(
                  {
                    width: "512px",
                    height: "214px",
                    viewBox: "0 0 512 214",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    preserveAspectRatio: "xMidYMid",
                  },
                  h
                ),
              },
              O
            ),
            y.concat([
              r("g", [
                r("path", {
                  attrs: {
                    d: "M35.9822222,83.4844444 C35.9822222,77.9377778 40.5333333,75.8044444 48.0711111,75.8044444 C58.88,75.8044444 72.5333333,79.0755556 83.3422222,84.9066667 L83.3422222,51.4844444 C71.5377778,46.7911111 59.8755556,44.9422222 48.0711111,44.9422222 C19.2,44.9422222 0,60.0177778 0,85.1911111 C0,124.444444 54.0444444,118.186667 54.0444444,135.111111 C54.0444444,141.653333 48.3555556,143.786667 40.3911111,143.786667 C28.5866667,143.786667 13.5111111,138.951111 1.56444444,132.408889 L1.56444444,166.257778 C14.7911111,171.946667 28.16,174.364444 40.3911111,174.364444 C69.9733333,174.364444 90.3111111,159.715556 90.3111111,134.257778 C90.1688889,91.8755556 35.9822222,99.4133333 35.9822222,83.4844444 Z M132.124444,16.4977778 L97.4222222,23.8933333 L97.28,137.813333 C97.28,158.862222 113.066667,174.364444 134.115556,174.364444 C145.777778,174.364444 154.311111,172.231111 159.004444,169.671111 L159.004444,140.8 C154.453333,142.648889 131.982222,149.191111 131.982222,128.142222 L131.982222,77.6533333 L159.004444,77.6533333 L159.004444,47.36 L131.982222,47.36 L132.124444,16.4977778 Z M203.235556,57.8844444 L200.96,47.36 L170.24,47.36 L170.24,171.804444 L205.795556,171.804444 L205.795556,87.4666667 C214.186667,76.5155556 228.408889,78.5066667 232.817778,80.0711111 L232.817778,47.36 C228.266667,45.6533333 211.626667,42.5244444 203.235556,57.8844444 Z M241.493333,47.36 L277.191111,47.36 L277.191111,171.804444 L241.493333,171.804444 L241.493333,47.36 Z M241.493333,36.5511111 L277.191111,28.8711111 L277.191111,0 L241.493333,7.53777778 L241.493333,36.5511111 Z M351.431111,44.9422222 C337.493333,44.9422222 328.533333,51.4844444 323.555556,56.0355556 L321.706667,47.2177778 L290.417778,47.2177778 L290.417778,213.048889 L325.973333,205.511111 L326.115556,165.262222 C331.235556,168.96 338.773333,174.222222 351.288889,174.222222 C376.746667,174.222222 399.928889,153.742222 399.928889,108.657778 C399.786667,67.4133333 376.32,44.9422222 351.431111,44.9422222 Z M342.897778,142.933333 C334.506667,142.933333 329.528889,139.946667 326.115556,136.248889 L325.973333,83.4844444 C329.671111,79.36 334.791111,76.5155556 342.897778,76.5155556 C355.84,76.5155556 364.8,91.0222222 364.8,109.653333 C364.8,128.711111 355.982222,142.933333 342.897778,142.933333 Z M512,110.08 C512,73.6711111 494.364444,44.9422222 460.657778,44.9422222 C426.808889,44.9422222 406.328889,73.6711111 406.328889,109.795556 C406.328889,152.604444 430.506667,174.222222 465.208889,174.222222 C482.133333,174.222222 494.933333,170.382222 504.604444,164.977778 L504.604444,136.533333 C494.933333,141.368889 483.84,144.355556 469.76,144.355556 C455.964444,144.355556 443.733333,139.52 442.168889,122.737778 L511.715556,122.737778 C511.715556,120.888889 512,113.493333 512,110.08 Z M441.742222,96.5688889 C441.742222,80.4977778 451.555556,73.8133333 460.515556,73.8133333 C469.191111,73.8133333 478.435556,80.4977778 478.435556,96.5688889 L441.742222,96.5688889 L441.742222,96.5688889 Z",
                    fill: "#000000",
                  },
                }),
              ]),
            ])
          );
        },
      };
    },
    864: function (t, e, r) {
      "use strict";
      r(822);
    },
    865: function (t, e, r) {
      var n = r(14)(!1);
      n.push([
        t.i,
        ".companies__logo{opacity:.5;width:100%;max-width:100px;height:auto}",
        "",
      ]),
        (t.exports = n);
    },
  },
]);
