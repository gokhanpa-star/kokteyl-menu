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
      {
        "id": "itm_ck1",
        "name": "Mojito",
        "note": "Ferah ve naneli klasik.",
        "preparation": "Bardağa buz ekle, romu koy, nane ile hafif karıştır, soda ile tamamla.",
        "favorite": true,
        "available": true,
        "category": "cocktails",
        "alcoholIds": ["alc_rom"],
        "juiceIds": [],
        "recipe": [
          { "name": "Rom", "amount": "5 cl" },
          { "name": "Nane", "amount": "6 yaprak" },
          { "name": "Lime", "amount": "2 dilim" },
          { "name": "Soda", "amount": "tamamla" }
        ]
      },
      {
        "id": "itm_ck2",
        "name": "Gin Tonic",
        "note": "Soğuk ve ferah servis.",
        "preparation": "Bardağı buzla doldur, gin ekle, tonik ile tamamla.",
        "favorite": false,
        "available": true,
        "category": "cocktails",
        "alcoholIds": ["alc_cin"],
        "juiceIds": [],
        "recipe": [
          { "name": "Cin", "amount": "5 cl" },
          { "name": "Tonik", "amount": "10 cl" },
          { "name": "Limon", "amount": "1 dilim" }
        ]
      }
    ],
    "juices": [
      { "id": "itm_j1", "name": "Portakal Suyu", "note": "Taze sıkım.", "preparation": "", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [], "recipe": [] },
      { "id": "itm_j2", "name": "Vişne Suyu", "note": "Soğuk servis edilir.", "preparation": "", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [], "recipe": [] },
      { "id": "itm_j3", "name": "Ananas Suyu", "note": "Soğuk servis edilir.", "preparation": "", "favorite": false, "available": true, "category": "juices", "alcoholIds": [], "juiceIds": [], "recipe": [] }
    ],
    "coffees": [
      { "id": "itm_cf1", "name": "Americano", "note": "Sade kahve.", "preparation": "", "favorite": false, "available": true, "category": "coffees", "alcoholIds": [], "juiceIds": [], "recipe": [] },
      { "id": "itm_cf2", "name": "Latte", "note": "Yumuşak içimli.", "preparation": "", "favorite": true, "available": true, "category": "coffees", "alcoholIds": [], "juiceIds": [], "recipe": [] }
    ],
    "mocktails": [
      {
        "id": "itm_m1",
        "name": "Berry Fresh",
        "note": "Meyvemsi ve ferah.",
        "preparation": "Tüm malzemeleri buzla çalkala, soğuk bardağa al.",
        "favorite": true,
        "available": true,
        "category": "mocktails",
        "alcoholIds": [],
        "juiceIds": ["itm_j1", "itm_j2"],
        "recipe": [
          { "name": "Portakal Suyu", "amount": "8 cl" },
          { "name": "Vişne Suyu", "amount": "6 cl" },
          { "name": "Buz", "amount": "1 bardak" }
        ]
      },
      {
        "id": "itm_m2",
        "name": "Tropical Cooler",
        "note": "Serinletici meyve karışımı.",
        "preparation": "Bardağa buz doldur, meyve sularını ekle, hafifçe karıştır.",
        "favorite": false,
        "available": true,
        "category": "mocktails",
        "alcoholIds": [],
        "juiceIds": ["itm_j1", "itm_j3"],
        "recipe": [
          { "name": "Portakal Suyu", "amount": "6 cl" },
          { "name": "Ananas Suyu", "amount": "8 cl" },
          { "name": "Buz", "amount": "1 bardak" }
        ]
      }
    ]
  }
};