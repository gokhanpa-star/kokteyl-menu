window.APP_DATA = {
  "spirits": [
    { "id": "sp_vodka", "name": "Vodka", "available": true },
    { "id": "sp_rom", "name": "Rom", "available": true },
    { "id": "sp_cin", "name": "Cin", "available": true },
    { "id": "sp_tekila", "name": "Tekila", "available": true },
    { "id": "sp_triplesec", "name": "Triple Sec", "available": true },
    { "id": "sp_viski", "name": "Viski", "available": true },
    { "id": "sp_nane", "name": "Nane Şurubu", "available": true },
    { "id": "sp_portakal", "name": "Portakal Şurubu", "available": true }
  ],
  "menus": {
    "spirits": [
      { "id": "itm_sp1", "name": "Vodka", "note": "Soğuk servis edilir.", "favorite": false, "available": true, "category": "spirits", "spiritIds": [] },
      { "id": "itm_sp2", "name": "Rom", "note": "Klasik beyaz rom.", "favorite": false, "available": true, "category": "spirits", "spiritIds": [] }
    ],
    "cocktails": [
      { "id": "itm_ck1", "name": "Mojito", "note": "Ferah ve naneli klasik.", "favorite": true, "available": true, "category": "cocktails", "spiritIds": ["sp_rom", "sp_nane"] },
      { "id": "itm_ck2", "name": "Whiskey Sour", "note": "Ekşi ve dengeli içim.", "favorite": true, "available": true, "category": "cocktails", "spiritIds": ["sp_viski"] }
    ],
    "juices": [
      { "id": "itm_j1", "name": "Portakal Suyu", "note": "Taze sıkım.", "favorite": false, "available": true, "category": "juices", "spiritIds": [] },
      { "id": "itm_j2", "name": "Vişne Suyu", "note": "Soğuk servis edilir.", "favorite": false, "available": true, "category": "juices", "spiritIds": [] }
    ],
    "coffees": [
      { "id": "itm_cf1", "name": "Americano", "note": "Sade kahve.", "favorite": false, "available": true, "category": "coffees", "spiritIds": [] },
      { "id": "itm_cf2", "name": "Latte", "note": "Yumuşak içimli.", "favorite": true, "available": true, "category": "coffees", "spiritIds": [] }
    ],
    "mocktails": [
      { "id": "itm_m1", "name": "Berry Fresh", "note": "Meyvemsi ve ferah.", "favorite": true, "available": true, "category": "mocktails", "spiritIds": ["sp_portakal"] },
      { "id": "itm_m2", "name": "Virgin Mint Cooler", "note": "Naneli alkolsüz serinlik.", "favorite": false, "available": true, "category": "mocktails", "spiritIds": ["sp_nane"] }
    ]
  }
};