if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.header.helpers({
    zones: [
      { classic: {name: "Ak'Anon", who: "akanon"}, 
        kunark:  {name: "Burning Wood", who: "burningwood"},
        velious: {name: "Cobalt Scar", who: ""}
      },
      { classic: {name: "Befallen", who: "befallen"},
				kunark:  {name: "Cabilis (East)", who: "cabeast"},
				velious: {name: "Crystal Caverns", who: ""}
			},
      { classic: {name: "Blackburrow", who: "blackburrow"},
				kunark:  {name: "Cabilis (West)", who: "cabwest"},
				velious: {name: "Dragon Necropolis", who: ""}
			},
      { classic: {name: "Butcherblock Mountains", who: "butcher"},
				kunark:  {name: "Chardok", who: "chardok"},
				velious: {name: "Eastern Wastes", who: ""}
			},
      { classic: {name: "Cazic-Thule", who: "cazicthule"},
				kunark:  {name: "City of Mist", who: "citymist"},
				velious: {name: "Iceclad Ocean", who: ""}
			},
      { classic: {name: "Commonlands (East)", who: "ecommons"},
				kunark:  {name: "Dalnir", who: "dalnir"},
				velious: {name: "Icewell Keep", who: ""}
			},
      { classic: {name: "Commonlands (West)", who: "commons"},
				kunark:  {name: "Dreadlands", who: "dreadlands"},
				velious: {name: "Kael Drakkal", who: ""}
			},
      { classic: {name: "Crushbone", who: "crushbone"},
				kunark:  {name: "Emerald Jungle", who: "emeraldjungle"},
				velious: {name: "Plane of Growth", who: ""}
			},
      { classic: {name: "Dagnor's Cauldron", who: "cauldron"},
				kunark:  {name: "Field of Bone", who: "fieldofbone"},
				velious: {name: "Plane of Mischief", who: ""}
			},
      { classic: {name: "Erud's Crossing", who: "erudsxing"},
				kunark:  {name: "Firiona Vie", who: "firiona"},
				velious: {name: "Siren's Grotto", who: ""}
			},
      { classic: {name: "Erudin", who: "erudnext"},
				kunark:  {name: "Frontier Mountains", who: "frontiermtns"},
				velious: {name: "Skyshrine", who: ""}
			},
      { classic: {name: "Erudin (Palace)", who: "erudnint"},
				kunark:  {name: "Howling Stones (Charasis)", who: "charasis"},
				velious: {name: "Sleeper's Tomb", who: ""}
			},
      { classic: {name: "Everfrost Peaks", who: "everfrost"},
				kunark:  {name: "Kaesora", who: "kaesora"},
				velious: {name: "Temple of Veeshan", who: ""}
			},
      { classic: {name: "Feerrott", who: "feerrott"},
				kunark:  {name: "Karnor's Castle", who: "karnor"},
				velious: {name: "The Great Divide", who: ""}
			},
      { classic: {name: "Felwithe (North)", who: "felwithea"},
				kunark:  {name: "Kurn's Tower", who: "kurn"},
				velious: {name: "Thurgadin", who: ""}
			},
      { classic: {name: "Felwithe (South)", who: "felwitheb"},
				kunark:  {name: "Lake of Ill Omen", who: "lakeofillomen"},
				velious: {name: "Tower of Frozen Shadow", who: ""}
			},
      { classic: {name: "Freeport (North)", who: "freportn"},
				kunark:  {name: "Overthere", who: "overthere"},
				velious: {name: "Velketor's Labyrinth", who: ""}
			},
      { classic: {name: "Freeport (East)", who: "freporte"},
				kunark:  {name: "Mines of Nurga", who: "nurga"},
				velious: {name: "Wakening Land", who: ""}
			},
      { classic: {name: "Freeport (West)", who: "freportw"},
				kunark:  {name: "Old Sebilis", who: "sebilis"},
				velious: {name: "Western Wastes", who: ""}
			},
      { classic: {name: "Greater Faydark", who: "gfaydark"},
				kunark:  {name: "Skyfire Mountains", who: "skyfire"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Grobb", who: "grobb"},
				kunark:  {name: "Swamp of No Hope", who: "swampofnohope"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Guk (Bottom)", who: "gukbottom"},
				kunark:  {name: "Temple of Droga", who: "droga"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Guk (Top)", who: "guktop"},
				kunark:  {name: "Timorous Deep", who: "timorous"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Halas", who: "halas"},
				kunark:  {name: "Trakanon's Teeth", who: "trakanon"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Highpass Hold", who: "highpass"},
				kunark:  {name: "Veeshan's Peak", who: "veeshan"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Highpass Keep", who: "highkeep"},
				kunark:  {name: "Warsliks Woods", who: "warslikswood"},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Innothule Swamp", who: "innothule"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kaladim (North)", who: "kaladimb"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kaladim (South)", who: "kaladima"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (East)", who: "eastkarana"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (North)", who: "northkarana"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (South)", who: "southkarana"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Karana (West)", who: "westkarana"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kedge Keep", who: "kedge"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kerra Island", who: "kerraridge"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Kithicor Forest", who: "kithicor"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lake Rathetear", who: "lakerathe"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lavastorm Mountains", who: "lavastorm"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Lesser Faydark", who: "lfaydark"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Mistmoore Castle", who: "mistmoore"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Misty Thicket", who: "misty"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Nagafen's Lair (Sol B)", who: "soldungb"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Najena", who: "najena"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Nektulos Forest", who: "nektulos"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Commons)", who: "neriakb"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Foreign Quarter)", who: "neriaka"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Neriak (Third Gate)", who: "neriakd"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Northern Desert of Ro", who: "nro"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Oasis of Marr", who: "oasis"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Oggok", who: "oggok"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Ocean of Tears", who: "oot"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Paineel", who: "paineel"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Permafrost", who: "permafrost"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Fear", who: "fearplane"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Hate", who: "hateplane"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Plane of Sky", who: "airplane"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos (North)", who: "qeynos2"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos (South)", who: "qeynos"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos Aqueducts", who: "qcat"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Qeynos Hills", who: "qeytoqrg"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Rathe Mountains", who: "rathemtn"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Rivervale", who: "rivervale"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Runnyeye Citadel", who: "runnyeye"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Solusek's Eye (Sol A)", who: "soldunga"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Southern Desert of Ro", who: "sro"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Steamfont Mountains", who: "steamfont"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Estate of Unrest", who: "unrest"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Hole", who: "hole"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "The Temple of Solusek Ro", who: "soltemple"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
			},
      { classic: {name: "Toxxulia Forest", who: "toxxulia"},
				kunark:  {name: "", who: ""},
				velious: {name: "", who: ""}
      }]
  });
  Template.content.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.content.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}