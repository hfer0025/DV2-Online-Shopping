// Name: Raneth Fernando | ID: 35550902
const charts = {
  "#map1":      "charts/map1_choropleth.vg.json",
  "#dumbbell":  "charts/dumbbell.vg.json",
  "#overview":  "charts/overview_detail.vg.json",
  "#heatmap":   "charts/heatmap.vg.json",
  "#map2":      "charts/map2_symbols.vg.json",
  "#lollipop":  "charts/lollipop.vg.json",
  "#radial":    "charts/radial_bar.vg.json",
  "#slope":     "charts/slope.vg.json",
  "#waffle":    "charts/waffle.vg.json",
  "#map3":      "charts/map3_flow.vg.json",
  "#butterfly": "charts/butterfly.vg.json"
};

for (const [el, spec] of Object.entries(charts)) {
  vegaEmbed(el, spec, { renderer: "svg", actions: { export: true, source: true, compiled: false, editor: true } })
    .catch(console.error);
}
