window.APP_DATA = {
  "spirits": [
    { "id": "sp_vodka", "name": "Vodka", "available": true },
    { "id": "sp_rom", "name": "Rom", "available": true },
    { "id": "sp_cin", "name": "Cin", "available": true },
    { "id": "sp_tekila", "name": "Tekila", "available": false },
    { "id": "sp_triplesec", "name": "Triple Sec", "available": false },
    { "id": "sp_viski", "name": "Viski", "available": true }
  ],
  "cocktails": [
    {
      "id": "ck_mojito",
      "name": "Mojito",
      "spiritIds": ["sp_rom"],
      "recipe": "Rom ile hazırlanır, nane ve lime ile ferah servis edilir.",
      "category": "Ferah",
      "favorite": true
    },
    {
      "id": "ck_gintonic",
      "name": "Gin Tonic",
      "spiritIds": ["sp_cin"],
      "recipe": "Cin ve tonik ile buzlu servis edilir.",
      "category": "Klasik",
      "favorite": false
    },
    {
      "id": "ck_margarita",
      "name": "Margarita",
      "spiritIds": ["sp_tekila", "sp_triplesec"],
      "recipe": "Tekila ve triple sec ile hazırlanır.",
      "category": "Ekşi",
      "favorite": false
    },
    {
      "id": "ck_whiskeysour",
      "name": "Whiskey Sour",
      "spiritIds": ["sp_viski"],
      "recipe": "Viski, limon ve şeker ile çalkalanır.",
      "category": "Sert",
      "favorite": true
    },
    {
      "id": "ck_vodkalemon",
      "name": "Vodka Lemon",
      "spiritIds": ["sp_vodka"],
      "recipe": "Vodka, limon ve buz ile hazırlanır.",
      "category": "Ferah",
      "favorite": false
    }
  ]
};