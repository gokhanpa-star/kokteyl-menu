window.APP_DATA = {
  "alcohols": [
    { "id": "alc_vodka", "name": "Vodka", "available": true, "note": "", "favorite": false },
    { "id": "alc_rom", "name": "Rom", "available": true, "note": "", "favorite": false },
    { "id": "alc_cin", "name": "Cin", "available": true, "note": "", "favorite": false },
    { "id": "alc_tekila", "name": "Tekila", "available": true, "note": "", "favorite": false },
    { "id": "alc_viski", "name": "Viski", "available": true, "note": "", "favorite": false }
  ],
  "menus": {
    "spirits": [],
    "cocktails": [
      { "id": "itm_ck1", "name": "Mojito", "note": "Ferah ve naneli klasik.", "favorite": true, "available": true, "category": "cocktails", "alcoholIds": ["alc_rom"], "juiceIds": [] },
      { "id": "itm_ck2", "name": "Gin Tonic", "note": "Soğuk ve ferah servis.", "favorite": false, "available": true, "category": "cocktails", "alcoholIds": ["alc_cin"], "juiceIds": [] }
    ],
    "juices": [
      { "id": "itm_j1", "name": "Portakal Suyu", "note": "Taze sıkım.", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [] },
      { "id": "itm_j2", "name": "Vişne Suyu", "note": "Soğuk servis edilir.", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [] },
      { "id": "itm_j3", "name": "Ananas Suyu", "note": "Soğuk servis edilir.", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [] }
    ],
    "coffees": [
      { "id": "itm_cf1", "name": "Americano", "note": "Sade kahve.", "favorite": false, "available": true, "category": "coffees", "alcoholIds": [], "juiceIds": [] },
      { "id": "itm_cf2", "name": "Latte", "note": "Yumuşak içimli.", "favorite": true, "available": true, "category": "coffees", "alcoholIds": [], "juiceIds": [] }
    ],
    "mocktails": [
      { "id": "itm_m1", "name": "Berry Fresh", "note": "Meyvemsi ve ferah.", "favorite": true, "available": true, "category": "mocktails", "alcoholIds": [], "juiceIds": ["itm_j1", "itm_j2"] },
      { "id": "itm_m2", "name": "Tropical Cooler", "note": "Serinletici meyve karışımı.", "favorite": false, "available": true, "category": "mocktails", "alcoholIds": [], "juiceIds": ["itm_j1", "itm_j3"] }
    ]
  }
};