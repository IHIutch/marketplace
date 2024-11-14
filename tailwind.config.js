/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "source-sans": '"Source Sans 3 Variable", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#ffffff",
      black: "#000000",
      "red-cool-5": "#f8eff1",
      "red-cool-10": "#f3e1e4",
      "red-cool-20": "#ecbec6",
      "red-cool-30": "#e09aa6",
      "red-cool-40": "#e16b80",
      "red-cool-50": "#cd425b",
      "red-cool-60": "#9e394b",
      "red-cool-70": "#68363f",
      "red-cool-80": "#40282c",
      "red-cool-90": "#1e1517",
      "red-cool-5v": "#fff2f5",
      "red-cool-10v": "#f8dfe2",
      "red-cool-20v": "#f8b9c5",
      "red-cool-30v": "#fd8ba0",
      "red-cool-40v": "#f45d79",
      "red-cool-50v": "#e41d3d",
      "red-cool-60v": "#b21d38",
      "red-cool-70v": "#822133",
      "red-cool-80v": "#4f1c24",
      "red-5": "#f9eeee",
      "red-10": "#f8e1de",
      "red-20": "#f7bbb1",
      "red-30": "#f2938c",
      "red-40": "#e9695f",
      "red-50": "#d83933",
      "red-60": "#a23737",
      "red-70": "#6f3331",
      "red-80": "#3e2927",
      "red-90": "#1b1616",
      "red-warm-5": "#f6efea",
      "red-warm-10": "#f4e3db",
      "red-warm-20": "#ecc0a7",
      "red-warm-30": "#dca081",
      "red-warm-40": "#d27a56",
      "red-warm-50": "#c3512c",
      "red-warm-60": "#805039",
      "red-warm-70": "#524236",
      "red-warm-80": "#332d29",
      "red-warm-90": "#1f1c18",
      "red-warm-5v": "#fff5ee",
      "red-warm-10v": "#fce1d4",
      "red-warm-20v": "#f6bd9c",
      "red-warm-30v": "#f39268",
      "red-warm-40v": "#ef5e25",
      "red-warm-50v": "#d54309",
      "red-warm-60v": "#9c3d10",
      "red-warm-70v": "#63340f",
      "red-warm-80v": "#3e2a1e",
      "red-5v": "#fff3f2",
      "red-10v": "#fde0db",
      "red-20v": "#fdb8ae",
      "red-30v": "#ff8d7b",
      "red-40v": "#fb5a47",
      "red-50v": "#e52207",
      "red-60v": "#b50909",
      "red-70v": "#8b0a03",
      "red-80v": "#5c1111",
      "orange-warm-5": "#faeee5",
      "orange-warm-10": "#fbe0d0",
      "orange-warm-20": "#f7bca2",
      "orange-warm-30": "#f3966d",
      "orange-warm-40": "#e17141",
      "orange-warm-50": "#bd5727",
      "orange-warm-60": "#914734",
      "orange-warm-70": "#633a32",
      "orange-warm-80": "#3d2925",
      "orange-warm-90": "#1c1615",
      "orange-warm-5v": "#fff3ea",
      "orange-warm-10v": "#ffe2d1",
      "orange-warm-20v": "#fbbaa7",
      "orange-warm-30v": "#fc906d",
      "orange-warm-40v": "#ff580a",
      "orange-warm-50v": "#cf4900",
      "orange-warm-60v": "#a72f10",
      "orange-warm-70v": "#782312",
      "orange-warm-80v": "#3d231d",
      "orange-5": "#f6efe9",
      "orange-10": "#f2e4d4",
      "orange-20": "#f3bf90",
      "orange-30": "#f09860",
      "orange-40": "#dd7533",
      "orange-50": "#a86437",
      "orange-60": "#775540",
      "orange-70": "#524236",
      "orange-80": "#332d27",
      "orange-90": "#1b1614",
      "orange-5v": "#fef2e4",
      "orange-10v": "#fce2c5",
      "orange-20v": "#ffbc78",
      "orange-30v": "#fa9441",
      "orange-40v": "#e66f0e",
      "orange-50v": "#c05600",
      "orange-60v": "#8c471c",
      "orange-70v": "#5f3617",
      "orange-80v": "#352313",
      "gold-5": "#f5f0e6",
      "gold-10": "#f1e5cd",
      "gold-20": "#dec69a",
      "gold-30": "#c7a97b",
      "gold-40": "#ad8b65",
      "gold-50": "#8e704f",
      "gold-60": "#6b5947",
      "gold-70": "#4d4438",
      "gold-80": "#322d26",
      "gold-90": "#191714",
      "gold-5v": "#fef0c8",
      "gold-10v": "#ffe396",
      "gold-20v": "#ffbe2e",
      "gold-30v": "#e5a000",
      "gold-40v": "#c2850c",
      "gold-50v": "#936f38",
      "gold-60v": "#7a591a",
      "gold-70v": "#5c410a",
      "gold-80v": "#3b2b15",
      "yellow-5": "#faf3d1",
      "yellow-10": "#f5e6af",
      "yellow-20": "#e6c74c",
      "yellow-30": "#c9ab48",
      "yellow-40": "#a88f48",
      "yellow-50": "#8a7237",
      "yellow-60": "#6b5a39",
      "yellow-70": "#504332",
      "yellow-80": "#332d27",
      "yellow-90": "#1a1614",
      "yellow-5v": "#fff5c2",
      "yellow-10v": "#fee685",
      "yellow-20v": "#face00",
      "yellow-30v": "#ddaa01",
      "yellow-40v": "#b38c00",
      "yellow-50v": "#947100",
      "yellow-60v": "#776017",
      "yellow-70v": "#5c4809",
      "yellow-80v": "#422d19",
      "green-warm-5": "#f1f4d7",
      "green-warm-10": "#e7eab7",
      "green-warm-20": "#cbd17a",
      "green-warm-30": "#a6b557",
      "green-warm-40": "#8a984b",
      "green-warm-50": "#6f7a41",
      "green-warm-60": "#5a5f38",
      "green-warm-70": "#45472f",
      "green-warm-80": "#2d2f21",
      "green-warm-90": "#171712",
      "green-warm-5v": "#f5fbc1",
      "green-warm-10v": "#e7f434",
      "green-warm-20v": "#c5d30a",
      "green-warm-30v": "#a3b72c",
      "green-warm-40v": "#7e9c1d",
      "green-warm-50v": "#6a7d00",
      "green-warm-60v": "#5a6613",
      "green-warm-70v": "#4b4e10",
      "green-warm-80v": "#38380b",
      "green-5": "#eaf4dd",
      "green-10": "#dfeacd",
      "green-20": "#b8d293",
      "green-30": "#9bb672",
      "green-40": "#7d9b4e",
      "green-50": "#607f35",
      "green-60": "#4c6424",
      "green-70": "#3c4a29",
      "green-80": "#293021",
      "green-90": "#161814",
      "green-5v": "#ddf9c7",
      "green-10v": "#c5ee93",
      "green-20v": "#98d035",
      "green-30v": "#7fb135",
      "green-40v": "#719f2a",
      "green-50v": "#538200",
      "green-60v": "#466c04",
      "green-70v": "#2f4a0b",
      "green-80v": "#243413",
      "green-cool-5": "#ecf3ec",
      "green-cool-10": "#dbebde",
      "green-cool-20": "#b4d0b9",
      "green-cool-30": "#86b98e",
      "green-cool-40": "#5e9f69",
      "green-cool-50": "#4d8055",
      "green-cool-60": "#446443",
      "green-cool-70": "#37493b",
      "green-cool-80": "#28312a",
      "green-cool-90": "#1a1f1a",
      "green-cool-5v": "#e3f5e1",
      "green-cool-10v": "#b7f5bd",
      "green-cool-20v": "#70e17b",
      "green-cool-30v": "#21c834",
      "green-cool-40v": "#00a91c",
      "green-cool-50v": "#008817",
      "green-cool-60v": "#216e1f",
      "green-cool-70v": "#154c21",
      "green-cool-80v": "#19311e",
      "mint-5": "#dbf6ed",
      "mint-10": "#c7efe2",
      "mint-20": "#92d9bb",
      "mint-30": "#5abf95",
      "mint-40": "#34a37e",
      "mint-50": "#2e8367",
      "mint-60": "#286846",
      "mint-70": "#204e34",
      "mint-80": "#193324",
      "mint-90": "#0d1a12",
      "mint-5v": "#c9fbeb",
      "mint-10v": "#83fcd4",
      "mint-20v": "#0ceda6",
      "mint-30v": "#04c585",
      "mint-40v": "#00a871",
      "mint-50v": "#008659",
      "mint-60v": "#146947",
      "mint-70v": "#0c4e29",
      "mint-80v": "#0d351e",
      "mint-cool-5": "#e0f7f6",
      "mint-cool-10": "#c4eeeb",
      "mint-cool-20": "#9bd4cf",
      "mint-cool-30": "#6fbab3",
      "mint-cool-40": "#4f9e99",
      "mint-cool-50": "#40807e",
      "mint-cool-60": "#376462",
      "mint-cool-70": "#2a4b45",
      "mint-cool-80": "#203131",
      "mint-cool-90": "#111818",
      "mint-cool-5v": "#d5fbf3",
      "mint-cool-10v": "#7efbe1",
      "mint-cool-20v": "#29e1cb",
      "mint-cool-30v": "#1dc2ae",
      "mint-cool-40v": "#00a398",
      "mint-cool-50v": "#008480",
      "mint-cool-60v": "#0f6460",
      "mint-cool-70v": "#0b4b3f",
      "mint-cool-80v": "#123131",
      "cyan-5": "#e7f6f8",
      "cyan-10": "#ccecf2",
      "cyan-20": "#99deea",
      "cyan-30": "#5dc0d1",
      "cyan-40": "#449dac",
      "cyan-50": "#168092",
      "cyan-60": "#2a646d",
      "cyan-70": "#2c4a4e",
      "cyan-80": "#203133",
      "cyan-90": "#111819",
      "cyan-5v": "#e5faff",
      "cyan-10v": "#a8f2ff",
      "cyan-20v": "#52daf2",
      "cyan-30v": "#00bde3",
      "cyan-40v": "#009ec1",
      "cyan-50v": "#0081a1",
      "cyan-60v": "#00687d",
      "cyan-70v": "#0e4f5c",
      "cyan-80v": "#093b44",
      "blue-cool-5": "#e7f2f5",
      "blue-cool-10": "#dae9ee",
      "blue-cool-20": "#adcfdc",
      "blue-cool-30": "#82b4c9",
      "blue-cool-40": "#6499af",
      "blue-cool-50": "#3a7d95",
      "blue-cool-60": "#2e6276",
      "blue-cool-70": "#224a58",
      "blue-cool-80": "#14333d",
      "blue-cool-90": "#0f191c",
      "blue-cool-5v": "#e1f3f8",
      "blue-cool-10v": "#c3ebfa",
      "blue-cool-20v": "#97d4ea",
      "blue-cool-30v": "#59b9de",
      "blue-cool-40v": "#28a0cb",
      "blue-cool-50v": "#0d7ea2",
      "blue-cool-60v": "#07648d",
      "blue-cool-70v": "#074b69",
      "blue-cool-80v": "#002d3f",
      "blue-5": "#eff6fb",
      "blue-10": "#d9e8f6",
      "blue-20": "#aacdec",
      "blue-30": "#73b3e7",
      "blue-40": "#4f97d1",
      "blue-50": "#2378c3",
      "blue-60": "#2c608a",
      "blue-70": "#274863",
      "blue-80": "#1f303e",
      "blue-90": "#11181d",
      "blue-5v": "#e8f5ff",
      "blue-10v": "#cfe8ff",
      "blue-20v": "#a1d3ff",
      "blue-30v": "#58b4ff",
      "blue-40v": "#2491ff",
      "blue-50v": "#0076d6",
      "blue-60v": "#005ea2",
      "blue-70v": "#0b4778",
      "blue-80v": "#112f4e",
      "blue-warm-5": "#ecf1f7",
      "blue-warm-10": "#e1e7f1",
      "blue-warm-20": "#bbcae4",
      "blue-warm-30": "#98afd2",
      "blue-warm-40": "#7292c7",
      "blue-warm-50": "#4a77b4",
      "blue-warm-60": "#345d96",
      "blue-warm-70": "#2f4668",
      "blue-warm-80": "#252f3e",
      "blue-warm-90": "#13171f",
      "blue-warm-5v": "#edf5ff",
      "blue-warm-10v": "#d4e5ff",
      "blue-warm-20v": "#adcdff",
      "blue-warm-30v": "#81aefc",
      "blue-warm-40v": "#5994f6",
      "blue-warm-50v": "#2672de",
      "blue-warm-60v": "#0050d8",
      "blue-warm-70v": "#1a4480",
      "blue-warm-80v": "#162e51",
      "indigo-cool-5": "#eef0f9",
      "indigo-cool-10": "#e1e6f9",
      "indigo-cool-20": "#bbc8f5",
      "indigo-cool-30": "#96abee",
      "indigo-cool-40": "#6b8ee8",
      "indigo-cool-50": "#496fd8",
      "indigo-cool-60": "#3f57a6",
      "indigo-cool-70": "#374274",
      "indigo-cool-80": "#292d42",
      "indigo-cool-90": "#151622",
      "indigo-cool-5v": "#edf0ff",
      "indigo-cool-10v": "#dee5ff",
      "indigo-cool-20v": "#b8c8ff",
      "indigo-cool-30v": "#94adff",
      "indigo-cool-40v": "#628ef4",
      "indigo-cool-50v": "#4866ff",
      "indigo-cool-60v": "#3e4ded",
      "indigo-cool-70v": "#222fbf",
      "indigo-cool-80v": "#1b2b85",
      "indigo-5": "#efeff8",
      "indigo-10": "#e5e4fa",
      "indigo-20": "#c5c5f3",
      "indigo-30": "#a5a8eb",
      "indigo-40": "#8889db",
      "indigo-50": "#676cc8",
      "indigo-60": "#4d52af",
      "indigo-70": "#3d4076",
      "indigo-80": "#2b2c40",
      "indigo-90": "#16171f",
      "indigo-5v": "#f0f0ff",
      "indigo-10v": "#e0e0ff",
      "indigo-20v": "#ccceff",
      "indigo-30v": "#a3a7fa",
      "indigo-40v": "#8289ff",
      "indigo-50v": "#656bd7",
      "indigo-60v": "#4a50c4",
      "indigo-70v": "#3333a3",
      "indigo-80v": "#212463",
      "indigo-warm-5": "#f1eff7",
      "indigo-warm-10": "#e7e3fa",
      "indigo-warm-20": "#cbc4f2",
      "indigo-warm-30": "#afa5e8",
      "indigo-warm-40": "#9287d8",
      "indigo-warm-50": "#7665d1",
      "indigo-warm-60": "#5e519e",
      "indigo-warm-70": "#453c7b",
      "indigo-warm-80": "#2e2c40",
      "indigo-warm-90": "#18161d",
      "indigo-warm-5v": "#f5f2ff",
      "indigo-warm-10v": "#e4deff",
      "indigo-warm-20v": "#cfc4fd",
      "indigo-warm-30v": "#b69fff",
      "indigo-warm-40v": "#967efb",
      "indigo-warm-50v": "#745fe9",
      "indigo-warm-60v": "#5942d2",
      "indigo-warm-70v": "#3d2c9d",
      "indigo-warm-80v": "#261f5b",
      "violet-5": "#f4f1f9",
      "violet-10": "#ebe3f9",
      "violet-20": "#d0c3e9",
      "violet-30": "#b8a2e3",
      "violet-40": "#9d84d2",
      "violet-50": "#8168b3",
      "violet-60": "#665190",
      "violet-70": "#4c3d69",
      "violet-80": "#312b3f",
      "violet-90": "#18161d",
      "violet-5v": "#f7f2ff",
      "violet-10v": "#ede3ff",
      "violet-20v": "#d5bfff",
      "violet-30v": "#c39deb",
      "violet-40v": "#ad79e9",
      "violet-50v": "#9355dc",
      "violet-60v": "#783cb9",
      "violet-70v": "#54278f",
      "violet-80v": "#39215e",
      "violet-warm-5": "#f8f0f9",
      "violet-warm-10": "#f6dff8",
      "violet-warm-20": "#e2bee4",
      "violet-warm-30": "#d29ad8",
      "violet-warm-40": "#bf77c8",
      "violet-warm-50": "#b04abd",
      "violet-warm-60": "#864381",
      "violet-warm-70": "#5c395a",
      "violet-warm-80": "#382936",
      "violet-warm-90": "#1b151b",
      "violet-warm-5v": "#fef2ff",
      "violet-warm-10v": "#fbdcff",
      "violet-warm-20v": "#f4b2ff",
      "violet-warm-30v": "#ee83ff",
      "violet-warm-40v": "#d85bef",
      "violet-warm-50v": "#be32d0",
      "violet-warm-60v": "#93348c",
      "violet-warm-70v": "#711e6c",
      "violet-warm-80v": "#481441",
      "magenta-5": "#f9f0f2",
      "magenta-10": "#f6e1e8",
      "magenta-20": "#f0bbcc",
      "magenta-30": "#e895b3",
      "magenta-40": "#e0699f",
      "magenta-50": "#c84281",
      "magenta-60": "#8b4566",
      "magenta-70": "#66364b",
      "magenta-80": "#402731",
      "magenta-90": "#1b1617",
      "magenta-5v": "#fff2f5",
      "magenta-10v": "#ffddea",
      "magenta-20v": "#ffb4cf",
      "magenta-30v": "#ff87b2",
      "magenta-40v": "#fd4496",
      "magenta-50v": "#d72d79",
      "magenta-60v": "#ab2165",
      "magenta-70v": "#731f44",
      "magenta-80v": "#4f172e",
      "gray-cool-1": "#fbfcfd",
      "gray-cool-2": "#f7f9fa",
      "gray-cool-3": "#f5f6f7",
      "gray-cool-4": "#f1f3f6",
      "gray-cool-5": "#edeff0",
      "gray-cool-10": "#dfe1e2",
      "gray-cool-20": "#c6cace",
      "gray-cool-30": "#a9aeb1",
      "gray-cool-40": "#8d9297",
      "gray-cool-50": "#71767a",
      "gray-cool-60": "#565c65",
      "gray-cool-70": "#3d4551",
      "gray-cool-80": "#2d2e2f",
      "gray-cool-90": "#1c1d1f",
      "gray-1": "#fcfcfc",
      "gray-2": "#f9f9f9",
      "gray-3": "#f6f6f6",
      "gray-4": "#f3f3f3",
      "gray-5": "#f0f0f0",
      "gray-10": "#e6e6e6",
      "gray-20": "#c9c9c9",
      "gray-30": "#adadad",
      "gray-40": "#919191",
      "gray-50": "#757575",
      "gray-60": "#5c5c5c",
      "gray-70": "#454545",
      "gray-80": "#2e2e2e",
      "gray-90": "#1b1b1b",
      "gray-warm-1": "#fcfcfb",
      "gray-warm-2": "#f9f9f7",
      "gray-warm-3": "#f6f6f2",
      "gray-warm-4": "#f5f5f0",
      "gray-warm-5": "#f0f0ec",
      "gray-warm-10": "#e6e6e2",
      "gray-warm-20": "#cac9c0",
      "gray-warm-30": "#afaea2",
      "gray-warm-40": "#929285",
      "gray-warm-50": "#76766a",
      "gray-warm-60": "#5d5d52",
      "gray-warm-70": "#454540",
      "gray-warm-80": "#2e2e2a",
      "gray-warm-90": "#171716",
    },
    extend: {},
  },
  plugins: [],
}

